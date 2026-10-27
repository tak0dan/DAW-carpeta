"""Read an encrypted exam .docx and generate Java class skeletons.

Usage:
    python3 exam2java.py examen.docx --password PRG_2026
"""
import re, sys, os, zipfile, textwrap
from pathlib import Path

# ── docx reader ──────────────────────────────────────────────────────────

def read_docx(path, password=None):
    data = Path(path).read_bytes()
    if data[:8] == b'\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1':
        import msoffcrypto, tempfile
        file = msoffcrypto.OfficeFile(path)
        if not password:
            return None
        file.load_key(password=password)
        tmp = tempfile.NamedTemporaryFile(suffix='.docx', delete=False)
        file.decrypt(tmp)
        tmp.close()
        data = Path(tmp.name).read_bytes()
        os.unlink(tmp.name)
    import io
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        xml = z.read('word/document.xml').decode()
    text = re.sub(r'<[^>]+>', ' ', xml)
    text = re.sub(r'&[a-z]+;', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


# ── Parser ────────────────────────────────────────────────────────────────

def find_classes(text):
    # Find all class declarations
    # Pattern 1: "Clase X:" / "Clase X." / "Clase X "
    # Pattern 2: "siguientes clases X" (first class in a list)
    declarations = []

    for m in re.finditer(r'Clase\s+(\w+)[\s.:;]', text):
        declarations.append((m.start(), m.group(1)))

    # Find "siguientes clases X" where X isn't already captured
    for m in re.finditer(r'(?:siguientes\s+)?clases?\s+(\w+)', text, re.IGNORECASE):
        name = m.group(1)
        if name[0].isupper() and not any(n == name for _, n in declarations):
            declarations.append((m.start(), name))

    declarations.sort()

    # Also scan for class names mentioned in "una lista de libros (objetos de la clase X)"
    for m in re.finditer(r'[Dd]e\s+la\s+clase\s+(\w+)', text):
        name = m.group(1)
        if name[0].isupper() and not any(n == name for _, n in declarations):
            declarations.append((m.start(), name))

    declarations.sort()
    seen = set()
    classes = []
    for pos, name in declarations:
        if name not in seen:
            seen.add(name)
            classes.append({'name': name, 'pos': pos})

    # Now extract sections for each class
    seen_names = set()
    raw = []
    for c in classes:
        if c['name'] not in seen_names:
            seen_names.add(c['name'])
            raw.append(c)
    classes = []
    for i, cls in enumerate(raw):
        start = cls['pos']
        end_pos = raw[i+1]['pos'] if i+1 < len(raw) else len(text)
        section = text[start:end_pos]
        # Remove the class declaration itself from section
        header_match = re.match(r'.*?Clase\s+' + re.escape(cls['name']) + r'[\s.:;]*', section, re.DOTALL)
        if header_match:
            section = section[header_match.end():]

        cls['fields'] = []
        cls['methods'] = []

        # ── Extract fields ──
        # Find "Atributos:" section or content before first "Métodos"
        attr_section = ''
        m_atr = re.search(r'Atributos\s*:(.*?)(?:Métodos?|$)', section, re.IGNORECASE | re.DOTALL)
        if m_atr:
            attr_section = m_atr.group(1)
        else:
            # Split by Métodos
            parts = re.split(r'Métodos?\s*:', section, flags=re.IGNORECASE)
            attr_section = parts[0] if parts else ''

        # Known types for field detection
        known_types = ['int', 'Integer', 'double', 'Double', 'boolean', 'Boolean',
                       'String', 'float', 'long', 'char', 'byte', 'short',
                       'ArrayList', 'List', 'HashMap', 'Map']

        # Find type-name pairs in attr_section
        # Pattern: type name → description (with arrow)
        for m in re.finditer(r'(boolean|int|double|String|Integer|Double|float|long)\s+(\w+)\s*→', attr_section, re.IGNORECASE):
            t = m.group(1).strip()
            n = m.group(2).strip()
            cls['fields'].append((t, n, ''))

        # Pattern: ArrayList<Type> name
        for m in re.finditer(r'ArrayList\s*<(\w+)>\s+(\w+)', attr_section):
            cls['fields'].append((f'ArrayList<{m.group(1)}>', m.group(2), ''))

        # Pattern: ArrayList Type name (missing angle brackets in text)
        for m in re.finditer(r'ArrayList\s+(\w+)\s+(\w+)', attr_section):
            if m.group(1) not in known_types or m.group(1) == m.group(2):
                cls['fields'].append((f'ArrayList<{m.group(1)}>', m.group(2), ''))

        # Pattern: consecutive "type name type name type name" (no arrows)
        if not cls['fields']:
            # Simple split approach
            tokens = attr_section.split()
            i = 0
            while i < len(tokens):
                if tokens[i] in known_types or tokens[i].startswith('ArrayList'):
                    t = tokens[i]
                    i += 1
                    if i < len(tokens) and tokens[i][0].islower():
                        n = tokens[i]
                        t_clean = t
                        if t.startswith('ArrayList') and i+1 < len(tokens) and tokens[i+1][0].isupper():
                            # This could be ArrayList Type name
                            gt = tokens[i]
                            i += 1
                            if i < len(tokens) and tokens[i][0].islower():
                                n = tokens[i]
                                t_clean = f'ArrayList<{gt}>'
                            else:
                                continue
                        cls['fields'].append((t_clean, n, ''))
                        i += 1
                    elif t == 'ArrayList' and i+1 < len(tokens):
                        i += 1
                    else:
                        i += 1
                else:
                    i += 1

        # ── Extract methods ──
        # Find methods section
        meth_section = ''
        m_meth = re.split(r'Métodos?\s*:', section, flags=re.IGNORECASE)
        if len(m_meth) > 1:
            meth_section = ':'.join(m_meth[1:])

        # Special constructors and patterns
        if re.search(r'Constructor\s+por\s+defecto', section, re.IGNORECASE):
            cls['methods'].append({'name': '__init_default__', 'ret': '', 'params': [], 'desc': ''})
        if re.search(r'Constructor\s+con\s+todos\s+los\s+par.metros', section, re.IGNORECASE):
            cls['methods'].append({'name': '__init_all__', 'ret': '', 'params': [], 'desc': ''})
        if re.search(r'[Tt]o[Ss]tring\s*\(', section):
            cls['methods'].append({'name': '__tostring__', 'ret': '', 'params': [], 'desc': ''})

        gs_m = re.search(r'Getter[s]?.*?(?:\.|$)', section, re.IGNORECASE)
        if gs_m:
            cls['methods'].append({'name': '__getters_setters__', 'ret': '', 'params': [], 'desc': gs_m.group(0)})

        # Method signature patterns in method section
        # We need to be careful with the regex to avoid garbage matches
        for m in re.finditer(
                r'(void|boolean|int|String|double|float|long|Integer|Double|Boolean|\w+)\s+'
                r'(\w+)\s*'
                r'\(([^)]*)\)\s*',
                meth_section):
            ret = m.group(1).strip()
            mname = m.group(2).strip()
            params_str = m.group(3).strip()
            # Parse params
            params = []
            for pm in re.finditer(r'(\w+(?:<[^>]+>)?)\s+(\w+)', params_str):
                params.append((pm.group(1).strip(), pm.group(2).strip()))

            # Validate this is a real method, not garbage
            if not mname[0].isupper() and not mname.startswith('__'):
                if not (ret[0].isupper() and mname[0].isupper()):
                    cls['methods'].append({
                        'name': mname, 'ret': ret, 'params': params, 'desc': ''
                    })

        classes.append(cls)

    return classes


# ── Code generator ────────────────────────────────────────────────────────

def cap(s):
    return s[0].upper() + s[1:] if s else s

def generate_java(cls, pkg='examen'):
    out_lines = []
    out_lines.append(f'package {pkg};')
    if any('ArrayList' in f[0] for f in cls['fields']):
        out_lines.append('import java.util.ArrayList;')
        out_lines.append('import java.util.Iterator;')
    out_lines.append('')
    out_lines.append(f'public class {cls["name"]} {{')
    out_lines.append('')

    for typ, fname, _ in cls['fields']:
        out_lines.append(f'    private {typ} {fname};')
    out_lines.append('')

    method_dict = {m['name']: m for m in cls['methods']}

    # Default constructor
    if '__init_default__' in method_dict:
        out_lines.append(f'    public {cls["name"]}() {{')
        for typ, fname, _ in cls['fields']:
            if 'ArrayList' in typ:
                out_lines.append(f'        this.{fname} = new ArrayList<>();')
            elif 'int' in typ or 'Integer' in typ:
                out_lines.append(f'        this.{fname} = 0;')
            elif 'double' in typ or 'Double' in typ:
                out_lines.append(f'        this.{fname} = 0.0;')
            elif 'boolean' in typ or 'Boolean' in typ:
                out_lines.append(f'        this.{fname} = false;')
            else:
                out_lines.append(f'        this.{fname} = null;')
        out_lines.append(f'    }}')
        out_lines.append('')

    # All-args constructor
    if '__init_all__' in method_dict and cls['fields']:
        params = ', '.join(f'{typ} {fname}' for typ, fname, _ in cls['fields'])
        out_lines.append(f'    public {cls["name"]}({params}) {{')
        for typ, fname, _ in cls['fields']:
            out_lines.append(f'        this.{fname} = {fname};')
        out_lines.append(f'    }}')
        out_lines.append('')

    # Getters & setters
    if '__getters_setters__' in method_dict:
        desc = method_dict['__getters_setters__']['desc']
        only_getters = []
        m3 = re.search(r'Getters\s+para\s+(.+?)(?:\.|$)', desc, re.IGNORECASE)
        if m3:
            only_getters = [w.lower() for w in re.findall(r'\w+', m3.group(1))]
        only_setters = []
        m4 = re.search(r'Setters\s+para\s+(.+?)(?:\.|$)', desc, re.IGNORECASE)
        if m4:
            only_setters = [w.lower() for w in re.findall(r'\w+', m4.group(1))]
        exclude = []
        m2 = re.search(r'menos\s+de\s+(\w+)', desc, re.IGNORECASE)
        if m2:
            exclude.append(m2.group(1).lower())

        for typ, fname, _ in cls['fields']:
            fn_lower = fname.lower()
            if fn_lower in exclude:
                continue
            if only_getters and fn_lower in only_getters:
                prefix = 'is' if ('boolean' in typ or 'Boolean' in typ) else 'get'
                out_lines.append(f'    public {typ} {prefix}{cap(fname)}() {{ return {fname}; }}')
            elif not only_getters:
                prefix = 'is' if ('boolean' in typ or 'Boolean' in typ) else 'get'
                out_lines.append(f'    public {typ} {prefix}{cap(fname)}() {{ return {fname}; }}')
            if only_setters and fn_lower in only_setters:
                out_lines.append(f'    public void set{cap(fname)}({typ} {fname}) {{ this.{fname} = {fname}; }}')
            elif not only_setters and not only_getters:
                out_lines.append(f'    public void set{cap(fname)}({typ} {fname}) {{ this.{fname} = {fname}; }}')
            out_lines.append('')

    # toString
    if '__tostring__' in method_dict:
        field_parts = [f'{fname}=" + {fname}' for _, fname, _ in cls['fields']]
        if field_parts:
            inner = ' + ", '.join(field_parts) + ' + "'
            out_lines.append(f'    @Override')
            out_lines.append(f'    public String toString() {{')
            out_lines.append(f'        return "{cls["name"]} [" + {inner}]";')
            out_lines.append(f'    }}')
            out_lines.append('')

    # Other methods
    for m in cls['methods']:
        name = m['name']
        if name.startswith('__'):
            continue
        ret = m['ret']
        params_str = ', '.join(f'{pt} {pn}' for pt, pn in m['params'])
        out_lines.append(f'    public {ret} {name}({params_str}) {{')
        if 'boolean' in ret:
            out_lines.append(f'        return false;')
        elif 'int' in ret:
            out_lines.append(f'        return 0;')
        elif 'double' in ret or 'float' in ret:
            out_lines.append(f'        return 0.0;')
        elif ret != 'void':
            out_lines.append(f'        return null;')
        out_lines.append(f'    }}')
        out_lines.append('')

    out_lines.append(f'}}')
    return '\n'.join(out_lines)


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return
    path = sys.argv[1]
    password = None
    if '--password' in sys.argv:
        idx = sys.argv.index('--password')
        password = sys.argv[idx+1]

    text = read_docx(path, password)
    if text is None:
        print("File is encrypted. Provide --password")
        return

    classes = find_classes(text)
    if not classes:
        print("No classes found.")
        return

    out_dir = Path(path).stem + '_generated'
    os.makedirs(out_dir, exist_ok=True)
    for cls in classes:
        if not cls['fields'] and not cls['methods']:
            print(f"  SKIP {cls['name']} (no fields or methods)")
            continue
        code = generate_java(cls)
        filepath = Path(out_dir) / f'{cls["name"]}.java'
        Path(filepath).write_text(code)
        print(f"  {cls['name']}.java  ({len(cls['fields'])} fields, {len([m for m in cls['methods'] if not m['name'].startswith('__')])} methods)")
    print(f"\n→ {out_dir}/")

if __name__ == '__main__':
    main()

"""Generate a Java tester class from a wrapper+element pair.

Usage: python3 gen_tester.py Aparcamiento.java
       python3 gen_tester.py Aparcamiento.java > Tester.java  # redirect
"""
import re, sys
from pathlib import Path

def load(src):
    text = Path(src).read_text()
    cls = {'name': re.search(r'public\s+class\s+(\w+)', text).group(1),
           'pkg': (m.group(1) if (m := re.search(r'package\s+([\w.]+);', text)) else '')}
    cls['gt'] = m.group(1) if (m := re.search(r'ArrayList<(\w+)>', text)) else None
    cls['fields'] = re.findall(r'private\s+(\w+(?:<[^>]+>)?)\s+(\w+);', text)
    cls['methods'] = []
    for m in re.finditer(r'public\s+(?:static\s+)?(\S+)\s+(\w+)\s*\(([^)]*)\)', text):
        if m.group(2) not in ('main', cls['name']):
            p = [(x.rsplit(' ',1)[0], x.rsplit(' ',1)[1]) for x in m.group(3).split(',') if x.strip()]
            cls['methods'].append({'name': m.group(2), 'ret': m.group(1), 'params': p})
    return cls

def val(typ, i=1):
    return {'int': str(i), 'Integer': str(i), 'double': f'{i}.0', 'Double': f'{i}.0',
            'boolean': 'true', 'Boolean': 'true',
            'String': f'"val{i}"', 'char': "'x'"}.get(typ.strip('[]'), 'null')

def generate(src):
    w = load(src)                      # wrapper class (e.g. Aparcamiento)
    e = load(Path(src).parent / f'{w["gt"]}.java') if w['gt'] else None  # element

    L = [f'// Auto tester for {w["name"]} ({w["gt"] or "standalone"})']
    if w['pkg']: L.append(f'package {w["pkg"]};')
    L.append(f'public class {w["name"]}_Tester_Auto {{')
    L.append(f'  public static void main(String[] args) {{')

    v = w['name'][0].lower() + w['name'][1:]
    L.append(f'    {w["name"]} {v} = new {w["name"]}();')

    # --- Add items ---
    add = [m for m in w['methods'] if 'anyadir' in m['name'].lower() or 'add' in m['name'].lower()]
    if add and e and w['gt']:
        L.append(f'    System.out.println("=== Add 3 items ===");')
        an = add[0]['name']
        for i in range(1, 4):
            args = ', '.join(val(f[0], i) if f[0] != 'boolean' else 'false' for f in e['fields'])
            L.append(f'    {v}.{an}(new {w["gt"]}({args}));')
        L.append(f'    System.out.println({v});')

    # --- Count methods ---
    cnt = [m for m in w['methods'] if m['ret'] == 'int' and not m['params']]
    for m in cnt:
        L.append(f'    System.out.println("{m["name"]}() = " + {v}.{m["name"]}());')

    # --- Find methods ---
    for m in w['methods']:
        if 'buscar' in m['name'].lower() and m['params']:
            a = val(m['params'][0][0], 1)
            a2 = val(m['params'][0][0], 99)
            L.append(f'    System.out.println("{m["name"]}({a}) = " + {v}.{m["name"]}({a}));')
            L.append(f'    System.out.println("{m["name"]}({a2}) = " + {v}.{m["name"]}({a2}));')

    # --- Action methods (aparcar, liberar) ---
    for m in w['methods']:
        n = m['name'].lower()
        if ('aparcar' in n or 'liberar' in n) and m['params']:
            a = ', '.join(val(p[0], 1) for p in m['params'])
            if m['ret'] == 'void':
                L.append(f'    {v}.{m["name"]}({a});')
                L.append(f'    System.out.println("After {m["name"]}: " + {v});')
            else:
                L.append(f'    System.out.println("{m["name"]}({a}) = " + {v}.{m["name"]}({a}));')
        if 'liberar' in n and not m['params'] and m['ret'] == 'void':
            L.append(f'    {v}.{m["name"]}();')

    # --- Remove methods ---
    for m in w['methods']:
        if 'eliminar' in m['name'].lower() and m['params']:
            a = ', '.join(val(p[0], 1) for p in m['params'])
            L.append(f'    {v}.{m["name"]}({a});')
            L.append(f'    System.out.println("After {m["name"]}: " + {v});')
            for cm in cnt:
                L.append(f'    System.out.println("  {cm["name"]}() = " + {v}.{cm["name"]}());')

    # --- Display via Iterator if generic ---
    if w['gt']:
        L.append(f'    // Iterator display (requires getter for the list)')
        L.append(f'    // java.util.Iterator<{w["gt"]}> it = <list>.iterator();')

    L.append(f'    System.out.println("=== Done ===");')
    L.append(f'  }}')
    L.append(f'}}')
    return '\n'.join(L) + '\n'

if __name__ == '__main__':
    print(generate(sys.argv[1]))

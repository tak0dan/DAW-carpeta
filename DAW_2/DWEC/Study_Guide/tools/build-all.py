"""Assemble ../ALL-THEORY.md: one file with all the theory.

Run: python3 -I build-all.py
Sources (read only): the study-guide chapters, the teacher's files synced in
../../sync/dwec-shared-onedrive/, and the offline jsinfo zip inside it.
"""
import importlib.util
import os
import re
import subprocess
import xml.etree.ElementTree as ET
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
GUIDE = os.path.dirname(HERE)
SHARED = os.path.normpath(os.path.join(
    GUIDE, '..', 'sync', 'dwec-shared-onedrive'))
OUT = os.path.join(GUIDE, 'ALL-THEORY.md')

spec = importlib.util.spec_from_file_location(
    'jsinfo2md', os.path.join(HERE, 'jsinfo2md.py'))
j = importlib.util.module_from_spec(spec)
spec.loader.exec_module(j)


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def shift(md, by=1):
    """Demote headings by `by` levels (capped at 6), skipping code fences."""
    out, fence = [], None
    for ln in md.split('\n'):
        m = re.match(r'^(\s*)(`{3,}|~{3,})', ln)
        if m:
            if fence is None:
                fence = m.group(2)[0]
            elif m.group(2)[0] == fence:
                fence = None
        if fence is None:
            h = re.match(r'^(#{1,6})(\s.*)$', ln)
            if h:
                ln = '#' * min(6, len(h.group(1)) + by) + h.group(2)
        out.append(ln)
    return '\n'.join(out)


def html_to_md(path):
    b = j.Builder()
    b.feed(read(path))
    body = j.find_first(b.root, lambda x: x.tag == 'body') or b.root
    md = '\n'.join(j.blocks(body))
    return re.sub(r'\n{3,}', '\n\n', md).strip()


def pdf_text(path, layout=True):
    args = ['pdftotext'] + (['-layout'] if layout else []) + [path, '-']
    txt = subprocess.run(args, capture_output=True, text=True,
                         check=True).stdout
    txt = '\n'.join(ln.rstrip() for ln in txt.split('\n'))
    return re.sub(r'\n{3,}', '\n\n', txt).strip().replace('\f', '\n')


def mm_outline(path):
    root = ET.parse(path).getroot()
    lines = []

    def walk(node, depth):
        text = (node.get('TEXT') or '').replace('\n', ' / ').strip()
        if text:
            lines.append('  ' * depth + '- ' + text)
        for child in node.findall('node'):
            walk(child, depth + (1 if text else 0))

    top = root.find('node')
    if top is not None:
        walk(top, 0)
    return '\n'.join(lines)


def img(rel, alt):
    return f'![{alt}](../sync/dwec-shared-onedrive/{rel})'


# ---------------------------------------------------------------- Part I
guide_files = [
    '00-README.md', '01-professor-mindset.md', '02-context-and-tooling.md',
    '03-basics-scripts-variables.md', '04-types-and-conversions.md',
    '05-operators-and-comparisons.md', '06-control-flow.md',
    '07-functions.md', '08-tasks-walkthrough.md', '09-drills.md',
    '10-process-git-forum.md', '11-hardware-os-network-web.md',
    '12-mock-exam.md', '13-cheatsheet.md',
]

# ---------------------------------------------------------------- Part II
teacher_notes = [
    ('Course overview: jsinfo as textbook, naming, how to read his comments '
     '(jsinfo-readme-first.md)', 'dwec1-js/jsinfo-readme-first.md'),
    ('LANG 1: Intro (comments)', 'dwec1-js/jsinfo-lang-1-intro-comments.md'),
    ('LANG 2: JavaScript Fundamentals (comments)',
     'dwec1-js/jsinfo-lang-2-fundamentals-comments.new.md'),
    ('LANG 3: Code Quality (comments)',
     'dwec1-js/jsinfo-lang-3-code-quality-comments.md'),
    ('Task sheet dwec1p2 (MDN Learn tasks)', 'dwec1-js/dwec1p2-instr.md'),
    ('Task sheet dwec1p3 (refactoring + unit tests + git)',
     'dwec1-js/dwec1p3-instr.md'),
]

# ---------------------------------------------------------------- Part III
jsinfo_chapters = [
    ('LANG 1 - An introduction',
     ['intro', 'manuals-specifications', 'code-editors', 'devtools']),
    ('LANG 2 - JavaScript Fundamentals',
     ['hello-world', 'structure', 'strict-mode', 'variables', 'types',
      'alert-prompt-confirm', 'type-conversions', 'operators', 'comparison',
      'ifelse', 'logical-operators', 'nullish-coalescing-operator',
      'while-for', 'switch', 'function-basics', 'function-expressions',
      'arrow-functions-basics', 'javascript-specials']),
    ('LANG 3 - Code quality (he asks for 3.5 only up to "BDD")',
     ['debugging-chrome', 'coding-style', 'comments', 'ninja-code',
      'testing-mocha', 'polyfills']),
    ('Flash-forward articles he points to (numbers, strings, arrays)',
     ['number', 'string', 'array']),
]


def part3():
    zf = zipfile.ZipFile(os.path.join(SHARED, 'jsinfo.2025-10.zip'))
    out = []
    for title, slugs in jsinfo_chapters:
        out.append(f'## {title}')
        for s in slugs:
            html = zf.read(f'jsinfo/javascript.info/{s}.html').decode('utf-8')
            out.append(j.convert_html(html, s))
    return '\n\n'.join(out)


# ---------------------------------------------------------------- Part IV
TRANSCRIPTIONS = '''\
### Figure transcriptions (images in his unit)

#### Computer hardware: functional units
(`dwec0-prev/01-unidades-funcionales-ordenador-detalle.png`)

- **CPU (procesador)**: UC y reloj, ALU, registros, caché (distintos
  niveles).
- **Buses internos**: direcciones, datos, control.
- **Unidad memoria o almacenamiento**:
  - *Memoria principal (RAM)*: volátil, rápida, pequeña; almacena programas
    y datos durante la ejecución (temporal).
  - *Memoria secundaria (almacenamiento masivo)*: persistente, lenta, grande
    y/o externa; programas y datos en ficheros y carpetas (sistema de
    ficheros): disco duro (HDD), SSD, pendrive, tarjeta de memoria, disco
    óptico.
  - *Memoria ROM (solo lectura, casi)*: persistente, lenta, pequeña;
    almacena el firmware (BIOS/UEFI).
- **Unidad entrada/salida**: entrada (teclado, ratón, micrófono, webcam,
  escáner...), salida (pantalla, altavoces, impresora...), entrada y salida
  (pantalla táctil, red...).

''' + img('dwec0-prev/01-unidades-funcionales-ordenador-detalle.png',
          'Computer hardware functional units') + '''

#### OS families
(`dwec0-prev/04-os-families-simple.png`)

- **Windows** (Microsoft, de pago): kernel NT 5.x -> XP (Server 2003);
  NT 6.x -> Vista/7 (Server 2008), 8/8.1 (Server 2012); NT 10 -> 10
  (Server 2016, 2019, 2022), 11 (Server 2022). Client OS (desktop/laptop)
  vs server OS.
- **Unix-like**:
  - *Linux kernel* (0$): *Linux distributions* (community or companies):
    Debian (community, 0$) -> Ubuntu -> Lliurex, Mint, ...; RedHat; ...;
    and **Android** (Google, 0$).
  - *BSD-like kernel*: *XNU kernel* (Apple) -> macOS ($$), iOS ($$);
    BSD distributions (community, 0$).
- Each OS/kernel product has versions/subversions and may support more or
  fewer processor architectures (x86, ARM...) and hardware types (PC,
  server, touch...).

''' + img('dwec0-prev/04-os-families-simple.png', 'OS families') + '''

#### TCP/IP stack: layers, protocols, addresses
(`dwec0-prev/05.redes/02.pila-tcp-ip-protocolos.webp`)

| Level | Role | Protocols | Identification / address |
|---|---|---|---|
| "Humano +" | | | link text, search engine, directory by name |
| "Humano -" | | | user id, e-mail address, phone no. = 1 person; hostname/domain = 1 machine; URL/URI = a concrete resource on 1 machine |
| **Application** | Offers the programmer use of the network (distributed architecture) for specific purposes; lets applications at the ends understand each other; client/server or P2P | HTTP(S), FTP, SSH, ... ; DHCP, DNS, ... | IP address + transport type + port number = 1 communication channel in 1 application (many per machine; several per application/process) |
| **Transport** | Allows more than 1 application/communication per machine: ports. If TCP: ensures packets without loss and in order | TCP, UDP, ... | port number = 1 channel in 1 application; 2 B (~65,000 numbers), independent numbering per TCP, UDP...; standard numbers on the server side for the initial contact (TCP 80 HTTP, TCP 443 HTTPS...) |
| **Network** | Generic worldwide communication between ends, with hops across different physical layers (networks) | IP (ICMP) | IP address = 1 machine; IPv4 (4 B) or IPv6 (16 B); "globally unique" (except private); fixed or dynamic by DHCP; prefix = network |
| **Physical** | Generic communication between 2 devices with a direct "logical view" | Wi-Fi, ethernet, ADSL, 4G, ... | physical address = MAC = 1 machine; 6 B; globally unique (prefix: manufacturer) or locally (auto)managed |

Each level/layer uses what the one below provides through a certain
interface (API). Standards guarantee interoperability (one layer down, talk
to my remote layer): different manufacturers, modularity.

''' + img('dwec0-prev/05.redes/02.pila-tcp-ip-protocolos.webp',
          'TCP/IP stack') + '''

#### Encapsulation (from the upper layer)
(`dwec0-prev/05.redes/03.pila-tcp-ip-encapsulacion.webp`)

Each layer transports bytes of information from its upper layer and adds its
own bytes of information to do its job (coordinated with its remote peer
layer).

Example: getting a remote HTML file by URL, carried over
**HTTP / TCP / IPv4 / Wi-Fi**, using the HTTP **GET** method and its response.

- URL `http://10.0.1.2:80/index.html` (scheme `http`, host `10.0.1.2`,
  port `80`, path `/index.html`).
- PC1 (client, Browser) -> PC2 (server, Web Sv, file `index.html`).
- Frame, from the inside out: `payload` -> `HTTP` (+ payload; GET/RSP, etc)
  -> `TCP header` (origin port 2 B, destination port 2 B, ... ports 12345
  -> 80) + HTTP + payload -> `IP header` (origin IP 4 B, destination IP 4 B;
  `10.0.1.1` -> `10.0.1.2`) + TCP + HTTP + payload -> `Wi-Fi header`
  (origin MAC 6 B, destination MAC 6 B) + IP + TCP + HTTP + payload +
  `Wi-Fi footer`.
- Who handles what: application layer = software (browser/web server;
  "human" = user or web programmer); transport and network = OS (software);
  physical = network card (software/hardware).

''' + img('dwec0-prev/05.redes/03.pila-tcp-ip-encapsulacion.webp',
          'TCP/IP encapsulation') + '''

#### E-mail management
(`common/gestion-email.webp`)

- Professional use: minimum frequency and dedication; prioritise;
  computer (not mobile).
- **Zero inbox**: list + preview; unread -> read; archive or delete; snooze
  (posponer).
- Shortcuts / configuration.

''' + img('common/gestion-email.webp', 'E-mail management')


def part4():
    d = os.path.join(SHARED, 'dwec0-prev')
    parts = []
    parts.append('## Memory hierarchy (02-memory-hierarchy.html)\n\n' +
                 html_to_md(os.path.join(d, '02-memory-hierarchy.html')))
    parts.append('## Processor architectures (03-arquitecturas-'
                 'procesador.html)\n\n' +
                 html_to_md(os.path.join(d, '03-arquitecturas-'
                                            'procesador.html')))
    parts.append('## Client-server architecture and networks: mind map '
                 '(00.redes-arqu-cl-sv.mm)\n\n' +
                 mm_outline(os.path.join(d, '05.redes',
                                         '00.redes-arqu-cl-sv.mm')))
    parts.append('## IP addresses and more (04.dir-ip-y-otros.pdf, slide '
                 'text)\n\n```text\n' +
                 pdf_text(os.path.join(d, '05.redes',
                                       '04.dir-ip-y-otros.pdf')) +
                 '\n```')
    parts.append('## End-to-end communication examples (diagram scenarios)\n')
    for f, title in [('01.e2e-examples-prev.pdf', 'Preview set'),
                     ('05.e2e-examples.pdf', 'Full set')]:
        txt = pdf_text(os.path.join(d, '05.redes', f), layout=False)
        titles = [ln for ln in txt.split('\n')
                  if re.search(r'communication|^Endpoints|^Alt:', ln)]
        parts.append(f'### {title} (`{f}`)\n\n' +
                     '\n'.join(f'- {t}' for t in titles) +
                     '\n\n(The slides are network diagrams: browser, web '
                     'server, router/switch/AP, IPs such as 192.168.1.32/33 '
                     'in 192.168.1.0/24, NAT, VPN, DHCP. See the PDFs.)')
    parts.append(TRANSCRIPTIONS)
    parts.append('## Git, no excuses (git-noexcuses.minimal.html)\n\n' +
                 html_to_md(os.path.join(SHARED, 'dwec1-js',
                                         'git-noexcuses.minimal.html')))
    parts.append('## Forum rules (foro-reglas.html)\n\n' +
                 html_to_md(os.path.join(SHARED, 'common',
                                         'foro-reglas.html')))
    return '\n\n'.join(parts)


# ---------------------------------------------------------------- Part V
CODE_FILES = [
    ('Task files (complete: template verbatim + solution)', [
        'reference/tasks/math1.html', 'reference/tasks/math2.html',
        'reference/tasks/math3.html', 'reference/tasks/conditionals1.html',
        'reference/tasks/conditionals2.html',
        'reference/tasks/conditionals3.html', 'reference/tasks/loops3.html']),
    ('dwec1p3 reference (ut-refactor/)', [
        'reference/ut-refactor/conditionals2.html',
        'reference/ut-refactor/scripts/get-response/main.js',
        'reference/ut-refactor/scripts/get-response/uts.js',
        'reference/ut-refactor/scripts/get-response/uts.html']),
    ('Check scripts (run with node)', [
        'tools/html-run.js', 'tools/tasks-check.js', 'tools/run-ut.js',
        'tools/mock-check.js']),
]
LANGS = {'.html': 'html', '.js': 'js', '.py': 'python', '.md': 'markdown'}


def part5():
    out = []
    for title, files in CODE_FILES:
        out.append(f'## {title}')
        for rel in files:
            code = read(os.path.join(GUIDE, rel)).rstrip('\n')
            lang = LANGS.get(os.path.splitext(rel)[1], '')
            out.append(f'### `{rel}`\n\n````{lang}\n{code}\n````')
    return '\n\n'.join(out)


# ---------------------------------------------------------------- assemble
def slug(text, seen):
    s = re.sub(r'[^\w\- ]', '', text.strip().lower()).replace(' ', '-')
    n = seen.get(s, 0)
    seen[s] = n + 1
    return s if n == 0 else f'{s}-{n}'


def toc(md, max_level=3):
    seen, fence, out = {}, None, []
    for ln in md.split('\n'):
        m = re.match(r'^(\s*)(`{3,}|~{3,})', ln)
        if m:
            fence = None if fence == m.group(2)[0] else (fence or m.group(2)[0])
            continue
        if fence:
            continue
        h = re.match(r'^(#{1,6})\s+(.*)$', ln)
        if not h:
            continue
        a = slug(h.group(2), seen)
        lvl = len(h.group(1))
        if lvl <= max_level:
            out.append('  ' * (lvl - 1) + f'- [{h.group(2).strip()}](#{a})')
    return '\n'.join(out)


def main():
    doc = []
    doc.append('# DWEC - ALL THE THEORY (master file)\n')
    doc.append(
        'One file with everything: (I) the study guide built from the '
        "professor's style, (II) the professor's own notes and task sheets "
        '**verbatim**, (III) the textbook articles (javascript.info, '
        'English, offline copy from `jsinfo.2025-10.zip`) for the chapters '
        'he covers, (IV) his background unit, git guide and forum rules, (V) every code file '
        'in full (complete task pages, UT reference, check scripts).\n\n'
        '> **Do not push this file to a public repository**: Parts II-IV '
        "reproduce the teacher's materials and the textbook (javascript.info "
        'content is CC BY-NC-SA).\n>\n'
        '> Overlap between parts is intentional. Where his notes (Part II) '
        'and the textbook (Part III) differ, **his notes win**.\n>\n'
        '> Not included (superseded or non-text): the older '
        '`jsinfo-lang-2-fundamentals-comments.md` (the `.new.md` is a '
        'superset), the ODP source, the five SVG mind-map renders (the `.mm` '
        'outline has the same content), the QR code image, and the rest of '
        'the jsinfo site (objects, classes, async, DOM... not yet covered).\n'
        '\nRebuild: `python3 -I tools/build-all.py`.\n')
    body = ['# PART I - Study guide (analysis, traps, drills)']
    for f in guide_files:
        body.append(shift(read(os.path.join(GUIDE, f)), 1))
    body.append("# PART II - The professor's notes and task sheets "
                '(verbatim)')
    for title, rel in teacher_notes:
        body.append(f'## {title}\n\n' + shift(read(os.path.join(SHARED, rel)),
                                             2))
    body.append('# PART III - Textbook: javascript.info (chapters covered)')
    body.append(part3())
    body.append('# PART IV - Background unit, git guide, forum rules')
    body.append(part4())
    body.append('# PART V - Complete code (every file in full)')
    body.append(part5())
    body_md = '\n\n'.join(body)
    doc.append('## Table of contents\n\n' + toc(body_md) + '\n')
    doc.append(body_md)
    out = '\n\n'.join(doc) + '\n'
    out = re.sub(r'\n{3,}', '\n\n', out)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'wrote {OUT}: {len(out):,} bytes, {out.count(chr(10)):,} lines')


if __name__ == '__main__':
    main()

"""Convert javascript.info offline articles (HTML) to Markdown.

Usage: python3 -I jsinfo2md.py <site_dir> <slug> [<slug> ...]
Prints one Markdown document (articles concatenated) to stdout.
Only reads the files; nothing from them is executed.
"""
import re
import sys
from html.parser import HTMLParser

VOID = {'br', 'hr', 'img', 'meta', 'link', 'input', 'source', 'col', 'wbr'}
SKIP = {'script', 'style', 'button', 'iframe', 'svg', 'object', 'noscript',
        'form', 'canvas', 'video', 'audio'}
INLINE = {'a', 'b', 'strong', 'em', 'i', 'code', 'span', 'sup', 'sub', 'kbd',
          'small', 'abbr', 'mark', 'u', 'img', 'br', 's', 'del', 'cite', 'q',
          'time', 'var', 'samp'}


class Node:
    def __init__(self, tag, attrs=None, parent=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.children = []
        self.parent = parent

    def cls(self):
        return (self.attrs.get('class') or '').split()


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('root')
        self.cur = self.root

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur)
        self.cur.children.append(n)
        if tag not in VOID:
            self.cur = n

    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))

    def handle_endtag(self, tag):
        n = self.cur
        while n is not None and n.tag != tag:
            n = n.parent
        if n is not None and n.parent is not None:
            self.cur = n.parent

    def handle_data(self, data):
        self.cur.children.append(data)


def text_of(n):
    if isinstance(n, str):
        return n
    if n.tag in SKIP:
        return ''
    return ''.join(text_of(c) for c in n.children)


def find_all(n, pred):
    out = []
    if isinstance(n, str):
        return out
    if pred(n):
        out.append(n)
    for c in n.children:
        out.extend(find_all(c, pred))
    return out


def find_first(n, pred):
    r = find_all(n, pred)
    return r[0] if r else None


def inline(n):
    if isinstance(n, str):
        return re.sub(r'\s+', ' ', n)
    t = n.tag
    if t in SKIP:
        return ''
    if t == 'br':
        return '  \n'
    if t == 'img':
        alt = n.attrs.get('alt', '').strip()
        return f'[figure: {alt}]' if alt else ''
    inner = ''.join(inline(c) for c in n.children)
    if t == 'code':
        s = text_of(n).replace('\n', ' ')
        return f'`{s}`' if s.strip() else ''
    if t in ('strong', 'b'):
        return f'**{inner.strip()}**' if inner.strip() else ''
    if t in ('em', 'i'):
        return f'*{inner.strip()}*' if inner.strip() else ''
    if t == 'a':
        href = n.attrs.get('href', '')
        if href.startswith('http') and inner.strip():
            return f'[{inner.strip()}]({href})'
        return inner
    return inner


def lang_of(pre):
    for n in find_all(pre, lambda x: True):
        for c in n.cls():
            if c.startswith('language-'):
                return c[len('language-'):]
    return ''


def blocks(n, ind=''):
    """Render children of n as a list of lines (blocks separated by '')."""
    lines = []
    para = []

    def flush():
        s = ''.join(para).strip()
        para.clear()
        if s:
            if lines and lines[-1] != '':
                lines.append('')
            lines.extend(ind + ln for ln in s.split('\n'))

    def add(block_lines):
        flush()
        if not block_lines:
            return
        if lines and lines[-1] != '':
            lines.append('')
        lines.extend(block_lines)

    for c in n.children:
        if isinstance(c, str):
            para.append(re.sub(r'\s+', ' ', c))
            continue
        t = c.tag
        cl = c.cls()
        if t in SKIP or any('toolbar' in x for x in cl):
            continue
        if t in INLINE:
            para.append(inline(c))
            continue
        if t in ('h1', 'h2', 'h3', 'h4', 'h5'):
            level = {'h1': 3, 'h2': 4, 'h3': 5, 'h4': 6, 'h5': 6}[t]
            add([ind + '#' * level + ' ' + inline(c).strip()])
        elif t == 'p':
            s = inline(c).strip()
            add([ind + ln for ln in s.split('\n')] if s else [])
        elif t in ('ul', 'ol'):
            items = [x for x in c.children if not isinstance(x, str)
                     and x.tag == 'li']
            out = []
            for i, li in enumerate(items, 1):
                mark = f'{i}. ' if t == 'ol' else '- '
                sub = blocks(li, '')
                while sub and sub[0] == '':
                    sub.pop(0)
                while sub and sub[-1] == '':
                    sub.pop()
                if not sub:
                    continue
                out.append(ind + mark + sub[0])
                pad = ' ' * len(mark)
                for ln in sub[1:]:
                    out.append((ind + pad + ln) if ln else '')
            add(out)
        elif t == 'pre':
            code = text_of(c).strip('\n')
            add([ind + '```' + lang_of(c)] +
                [ind + ln for ln in code.split('\n')] + [ind + '```'])
        elif t == 'blockquote':
            sub = blocks(c, '')
            add([ind + '> ' + ln if ln else ind + '>' for ln in sub])
        elif t == 'table':
            rows = find_all(c, lambda x: x.tag == 'tr')
            tbl = []
            for ri, r in enumerate(rows):
                cells = [re.sub(r'\s+', ' ', inline(x)).strip().replace('|', '\\|')
                         for x in r.children
                         if not isinstance(x, str) and x.tag in ('td', 'th')]
                tbl.append(ind + '| ' + ' | '.join(cells) + ' |')
                if ri == 0:
                    tbl.append(ind + '|' + '---|' * len(cells))
            add(tbl)
        elif t == 'figure':
            img = find_first(c, lambda x: x.tag == 'img')
            alt = (img.attrs.get('alt', '') if img else '').strip()
            add([ind + f'[figure: {alt}]'] if alt else [])
        elif t == 'hr':
            continue
        elif t == 'div' and 'important' in cl:
            head = find_first(c, lambda x: 'important__type' in x.cls())
            body = find_first(c, lambda x: 'important__content' in x.cls())
            sub = blocks(body, '') if body else []
            out = ['**' + (inline(head).strip() if head else 'Note') + '**']
            if sub:
                out += [''] + sub
            add([ind + '> ' + ln if ln else ind + '>' for ln in out])
        elif t == 'div' and 'task' in cl and 'tasks__task' in cl:
            add(render_task(c, ind))
        else:
            sub = blocks(c, ind)
            while sub and sub[0] == '':
                sub.pop(0)
            if sub:
                add(sub)
    flush()
    return lines


def render_task(c, ind):
    title = find_first(c, lambda x: 'task__title' in x.cls())
    imp = find_first(c, lambda x: 'task__importance' in x.cls())
    t = inline(title).strip() if title else 'Task'
    i = text_of(imp).strip() if imp else ''
    out = [f'##### Task: {t}' + (f' ({i})' if i else ''), '']
    q = find_first(c, lambda x: 'task__formatted' in x.cls())
    if q:
        out += blocks(q, '')
    ans = find_first(c, lambda x: 'task__answer-content' in x.cls())
    if ans:
        out += ['', '<details><summary>Solution</summary>', '']
        out += blocks(ans, '')
        out += ['', '</details>']
    return [ind + ln if ln else '' for ln in out]


def convert(path, slug):
    return convert_html(open(path, encoding='utf-8').read(), slug)


def convert_html(html, slug):
    b = Builder()
    b.feed(html)
    h1 = find_first(b.root, lambda x: 'main__header-title' in x.cls())
    title = inline(h1).strip() if h1 else slug
    art = find_first(b.root, lambda x: x.tag == 'div'
                     and x.attrs.get('itemprop') == 'articleBody')
    tasks = find_first(b.root, lambda x: 'tasks' in x.cls()
                       and 'formatted' in x.cls())
    out = [f'### {title}', '', f'*(javascript.info, article `{slug}`)*', '']
    if art:
        out += blocks(art)
    if tasks:
        tl = blocks(tasks)
        out += [''] + [ln for ln in tl
                       if not ln.startswith('#### Tasks')]
    out = re.sub(r'\n{3,}', '\n\n', '\n'.join(out)).strip()
    return out


if __name__ == '__main__':
    site = sys.argv[1]
    docs = [convert(f'{site}/{s}.html', s) for s in sys.argv[2:]]
    print('\n\n'.join(docs))

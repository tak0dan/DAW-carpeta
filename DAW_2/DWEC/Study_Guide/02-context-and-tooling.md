# 02 - Context, tooling and code quality

Sources: `jsinfo-readme-first.md`, `jsinfo-lang-1-intro-comments.md`,
`jsinfo-lang-3-code-quality-comments.md`.

## 2.1 jsinfo naming (he asks you to use his scheme)

- Parts: **LANG** (the language, ECMAScript), **BROW** (browser: documents,
  events, interfaces; W3C/WHATWG, not ES), **ADD** (additional articles).
- Chapters are numbered **per part**: `LANG2` = "JS fundamentals",
  `BROW2` = "Introduction to events", `ADD2` = "Binary data, files".
- `LANG2.4` = chapter 2, article 4 (Variables). A bare "2.4" is ambiguous:
  ask which part.
- His files: `jsinfo-<part>-<n>-<name>-comments.md`; h1 = chapter, h2 = article;
  quoted headings refer to the literal jsinfo text.
- jsinfo does **not** cover tooling (node/npm, Rollup/Vite) nor 3rd-party
  libraries/frameworks (jQuery, React).
- English version is **canonical**; the Spanish one may lag, mistranslate
  technical terms. Know the English terms.
- YDKJS (You Don't Know JS) is for *after* the course.

## 2.2 How JS runs

- **Interpreted vs JIT-compiled.** JS was purely interpreted; engines now
  use **Just-In-Time compilation** (V8 in Chrome, **2008**). Gives the
  immediacy of interpreted + good performance (on par with Java).
- Consequence: **errors appear only when execution passes through that
  line** (only global-structure syntax errors appear up front). Not
  testing a branch = not finding its bug. Answers: **linter**, thorough
  unit tests, explicit typing.
- Typing options: **TypeScript** (superset: any valid JS is valid TS, needs a
  build/transpile step) or **JSDoc** types in comments (vanilla JS, no build
  step). A TC39 *type annotations* proposal exists (2023).
- Front-end = **very little control of the environment** (many engines and
  versions) -> *cross-browser compatibility* (affects JS, HTML, CSS).
- Engines: **SpiderMonkey** (Firefox), **V8** (Chrome/Chromium/Edge/Opera,
  node, Electron, deno), **JavaScriptCore** (Safari, bun). Rendering engines:
  Gecko, WebKit, Blink.
- **node.js** (2009) lets JS run outside the browser: one language for the
  full stack ("a language to rule them all"). **WebAssembly** (2015; ~96% of
  browsers as of 2023) is a possible future competitor.

### What browser JS can / cannot do

- Browser abilities (DOM, fetch, storage...) come from **Web APIs / browser
  APIs**, *not* from the language. **Do not confuse** with "Web API" meaning
  an HTTP/REST API.
- Security limits: no free file access, etc. It never fully avoids exploits
  / social engineering.
- **Same Origin Policy.** Same origin = identical *protocol + domain + port*.
  - `http://a.com` != `http://b.com`, `a.org`, `a.es`
  - `http://a.com` != `https://a.com` (protocol)
  - `http://a.com` != `http://www.a.com` != `http://mail.a.com` (subdomain)
  - `http://a.com/www/` and `http://a.com/mail/` **are** the same origin
    (path does not matter)
  - `http://a.com` == `http://a.com:80` != `http://a.com:81`
  - A look-alike domain (`mybeautifuldomainname.com` vs
    `mybeautifuldomainame.com`) is a different origin.
- The limit is on **JS receiving** data from other origins. **HTML** may
  statically load other origins' resources (`<script src>`, CSS, fonts,
  images, media).

### Languages "over" JS (transpiled **ahead of time**, not in the browser)

CoffeeScript (2010s, mostly absorbed), **TypeScript**, Flow (less popular),
Dart (Google; Flutter), Brython (Python -> JS), Kotlin (JVM; Google's
Android choice 2019; can target JS).

## 2.3 Names and versions

- "JavaScript" is a **trademark of Oracle** -> many say "JS".
- Standard: **ECMA-262 / ECMAScript (ES)**. Browsers implement *features*,
  not whole versions, sometimes before standardisation.
- Versions: ES1-ES3 (1997 on, yearly), ES4 abandoned, **ES5 = 2009**,
  **ES6 = ES2015** and then one per year. From 2015: version number - 1 =
  year in the 2010s (ES7 = 2016, ES8 = 2017...). Big changes: **ES5 and ES6**.
- Synonyms: ECMAScript 2015 = ES6 = ES2015. "JavaScript 6/JS2015" is loose
  and not strictly correct (ES has formal versions, JS doesn't).
- "Modern JS" = ES2015+ / ES6+ / ES Next. "ES2016+" excludes ES2015.
- **WHATWG** specs ("living standards", no versions) define DOM, fetch, XHR...
  and also HTML. Check **caniuse.com** and **MDN compatibility tables**
  before using a feature.
- Availability: not everyone has JS working (Kryogenix "Everyone has JS,
  right?"). The excluded 1% is a **different 1% of visits** each time.
  **Progressive enhancement**: HTML/CSS first, JS on top.
- **SPA / CSR** (client-side rendering, Angular/React/Vue) problems: slow
  first load, usability, accessibility, SEO. Trend back to **SSR**
  (server-side rendering) for the first render.

## 2.4 The developer console (LANG1.4)

- The console is **not identical** to a `<script>`: some code works in one
  and not the other, differs between browsers. Handy, less reliable.
- It is interpreted line by line; **Shift+Enter** = continue the same input
  (multi-line, then JIT-compiled as a block).
- It shares the **global scope of the page** (can pollute your test): open it
  in an empty new tab for a clean state.
- Shortcuts (Firefox): `ctrl+shift+k` open; `ctrl+shift+j` (Chrome); `F12`
  toggles devtools (last used tab, not necessarily console); `clear()` /
  `ctrl+shift+L` clear; `ctrl+R` resets (and reloads the page);
  `F9`/`shift+F9` history search; `ctrl+B` multi-line editor mode,
  `ctrl+Enter` runs there. `ctrl+c` is *copy* (no abort-line shortcut:
  `ctrl+a, Del`, or comment it `//`).
- Showing objects:
  - `console.log('x: ' + obj)` -> **stringifies** (`[object Object]`)
  - `console.log('x: ', obj)` -> multiple arguments, keeps the object
  - `console.log({obj})` -> name + value (shorthand property trick)
  - `console.dir(obj)`, `console.table(obj)` (one level), `JSON.stringify(obj)`
    (compact, **loses** some types), `JSON.stringify(obj, null, 2)` (indented)

## 2.5 Code quality (LANG3)

- **Debugging** (3.1): he will not ask directly but you need it. Devtools
  Sources panel, breakpoints, `debugger;`.
- **Style** (3.2) in his exams: **80 columns, 2-space indent, consistency**.
  A linter would hide whether you know it; there is none in the exam.
- **Comments** (3.3): explain intent, not mechanics; junior -> comment more.
- **Ninja code** (3.4): jsinfo's sarcastic list of what NOT to do (brevity
  as wit, one-letter names, abbreviations, vague names, reusing names, side
  effects hidden in `isXxx()`, functions doing too much, overlapping outer
  names...). Read it as "the opposite is right". He does *some* of these in
  class demos; you do not in answers.
- **Automated testing** (3.5): read only up to **BDD**. His approach: "¿sabes
  hacer un `if` y llamar a una función? Pues ya sabes hacer tests unitarios
  automáticos: *Unit Test it, no excuses!*" (see the UT task, chapter 08).
- **Polyfills and transpilers** (3.6): how modern code runs on old browsers.
  - *Transpiler* (e.g. Babel) rewrites **syntax** to older syntax before
    production.
  - *Polyfill* adds a missing **function/feature** at runtime (written in
    JS).
  - Same for CSS (transpile where possible, JS polyfills otherwise).
  - Most frameworks do this for you: you forget it (good) but lose control
    and understanding (bad).

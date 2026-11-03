# Contents of the teacher's shared OneDrive folder `dwec-shared`

Pulled 2026-11-02 with `./sync-dwec-shared.sh` (download-only, `onedrive-abraunegg`).
Result: *"Processed 33 applicable JSON items… Sync complete"*, exit 0.
Local copy: `sync/dwec-shared-onedrive/` is a committed symlink to
`sync/dwec-shared-onedrive-vendored/`, which `./dwec sync` keeps in step with
`~/Documents/dwec-shared-mirror/MARCELO LLACER, DANIEL's files - dwec-shared`.

Compared with the older manual copy in `../dwec-shared/` (extracted from
`dwec-shared.zip`), the pull added two files:

- `dwec1-js/dwec1p3-instr.md` (task statement for dwec1p3, dated 2026-10-14)
- `dwec1-js/jsinfo-lang-2-fundamentals-comments.new.md` (2026-10-16 revised comments,
  announced in forum thread 448287; 221 changed lines vs the original)

Nothing newer than 2026-10-16 exists in the folder.

## Layout

| Path | Date | What it is |
|---|---|---|
| `common/foro-reglas.html` | 09-09 | Forum rules (see below) |
| `common/gestion-email.webp`, `dwec-shared-link-qr.png` | 09-09 | Email etiquette image; QR of the share link |
| `dwec0-prev/` | 09-09 → 09-22 | "Unit 0 – previous knowledge": computer functional units (PNG), memory hierarchy (HTML), processor architectures (HTML), OS families (PNG), and `05.redes/` (client-server architecture SVGs + Freemind `.mm`, TCP/IP stack WebP, IP addressing PDF, end-to-end examples PDF/ODP) |
| `dwec1-js/` | 09-22 → 10-16 | **Unit 1: JavaScript.** See below |
| `jsinfo/` (`jsinfo.en.html`, `jsinfo.es.html`, `javascript.info/`, `es.javascript.info/`, ~1,144 files) | 2025-10 | Offline mirror of javascript.info, the course textbook; also zipped as `jsinfo.2025-10.zip` (14 MB) |

## `dwec1-js/`

| File | Purpose |
|---|---|
| `jsinfo-readme-first.md` | How to read jsinfo + his comment files. Naming: **LANG** (language, Part 1), **BROW** (browser, Part 2), **ADD** (additional, Part 3). So "LANG2.4" is Part 1 chapter 2 article 4. Declares: *his comments have the last word over jsinfo*. Recommends "You Don't Know JS Yet" for after the course |
| `jsinfo-lang-1-intro-comments.md` (18 KB) | Comments on LANG1: interpreted vs JIT, why linters/UTs matter in JS, uncontrolled browser environment, what in-browser JS can do |
| `jsinfo-lang-2-fundamentals-comments.md` (80 KB) / `.new.md` (88 KB) | The big one: script tag, statements, semicolons, comments, `"use strict"`, variables, data types, type conversion, operators and **precedence table**, comparisons, `if`/`?`, logical, `??`, loops, `switch`, functions, arrow functions. The `.new` version adds explanations on: shared global scope, statement vs expression (+ Josh Comeau link), functional languages, JS literals, `null` vs `undefined`, type conversions, operator precedence, non-traditional `?`, functions returning `undefined`, "3 main kinds of functions" |
| `jsinfo-lang-3-code-quality-comments.md` (7 KB) | Debugging in the browser, coding style (2-space indent, 80 cols, consistency), reading guide |
| `dwec1p2-instr.md` | **Practice dwec1p2**: jsinfo LANG2 tasks (write answers, no delivery), then MDN Learn tasks in HTML templates: `math1-3`, `conditionals1-3`, `loops3` (primes, same output with 3 loop types). Rules: code only in the "Add your code here" zone, comment any outside source. Delivery: 3 folders `01-math/`, `02-conditionals/`, `03-loops/` in a ZIP |
| `dwec1p3-instr.md` | **Practice dwec1p3**: refactor and unit-test the Conditionals 2 task with guided Git: steps #1–#10 (feat → refactor → test → autotest → full UTs "Fails: X" → fix → ternary → single expression → switch → **revert** the switch). Commit titles are mandated. Delivery: `ut-refactor/` with `.git/`, `conditionals2.html`, `scripts/get-response/{main.js,uts.js,uts.html}`, ZIP `dwec1p3.first-surname.name.zip` |
| `git-noexcuses.minimal.html` | "Git, no excuses minimal": 6 sections (setup and aliases; minimal mono-user local workflow; amend/reset/stash; **§5 better commits**: diff+log before commit, atomic commits, message advice, SemVer, Conventional Commits; §6 VS Code workflow). The professor called §5 the part that "will affect you most" |

## Forum rules (`common/foro-reglas.html`)

Summary of the three sections (full text in the file):

1. **What goes in**: any course doubt, theory or practice. "No silly questions" in
   good faith. It is not a chat: answers take hours to days, so start early.
   Extrapolate: your doubt is probably someone else's. Asking creates a debt of
   minimal feedback to answers. Reply to others with any added value (partial help,
   clarification request, ruling something out). Self-answer your own thread when you
   progress. Help preventively, without spoilers.
2. **How**: title is `tag: keywords`, the tag being a unit id (`dwec1:`), a practice id
   (`dwec1p2:`), the module id (`dwec:`), or `otros:`. Titles must be specific and
   unambiguous, written last. One topic per thread, with the context in the first message.
   Quote and attribute anything not yours (including AI output). Inline replies with
   `[…]` for omissions. Screenshots are a support, not a replacement for text
   (a screenshot is not a phone photo of the screen; ≤1000 px wide). Code goes in as
   text, not as an image; for large code use Gist or an Etherpad/pastebin.
3. **Essence**: good faith, follow the moderator (the teacher), learn by
   practice. Async written communication is a core professional skill, and
   it transfers to writing prompts for AI.

## Not yet read in detail

Not read line by line: the full `jsinfo/` mirror, the `dwec0-prev` slides/SVGs, and the
LANG2 comments beyond heading level. Binary files (`.mm`, `.odp`, PDF, SVG) were only
listed.

See also: `../Forum_Archive/PROFESSOR-STYLE.md`.

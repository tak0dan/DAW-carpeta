# DWEC study guide

Built from the files in the teacher's shared folder (`dwec-shared`,
synced into `sync/dwec-shared-onedrive/`): his `jsinfo-*-comments.md`, task
sheets `dwec1p2`/`dwec1p3`, the git guide, the forum rules and the
`dwec0-prev` background unit.

The goal is not to repeat the textbook but to prepare for **how he asks**:
exact formats, traps hidden in templates, prescribed "unneeded" constructs,
dense expressions to read, and precise terminology.

## Order

| File | What |
|---|---|
| `01-professor-mindset.md` | **Read first.** How he thinks, writes code and tests |
| `02-context-and-tooling.md` | jsinfo structure, JIT, ES versions, SOP, console, code quality (LANG1, LANG3) |
| `03-basics-scripts-variables.md` | script tags, statements/expressions, ASI, strict mode, variables (LANG2.1-2.4) |
| `04-types-and-conversions.md` | types, typeof, prompt/alert, conversions (LANG2.5-2.7) |
| `05-operators-and-comparisons.md` | precedence, assignment, comparisons (LANG2.8-2.9) |
| `06-control-flow.md` | if, `?:`, `&&`/`\|\|`/`??`, loops, switch (LANG2.10-2.14) |
| `07-functions.md` | declarations, expressions, arrows, defaults, return (LANG2.15-2.17) |
| `08-tasks-walkthrough.md` | dwec1p2 and dwec1p3 dissected, with the hidden bugs |
| `09-drills.md` | **241 executed "what does this print" drills** (generated) |
| `10-process-git-forum.md` | git, SemVer, Conventional Commits, forum, delivery |
| `11-hardware-os-network-web.md` | the `dwec0-prev` background unit |
| `12-mock-exam.md` | an exam in his style, with answers |
| `13-cheatsheet.md` | one page + pre-exam checklist |

`reference/ut-refactor/` holds a working reference of the UT task (`main.js`,
`uts.js`, `uts.html`, `conditionals2.html`).

## Study method (his own advice, applied)

1. Read a chapter **alongside** the matching jsinfo article and his comments
   file (his comments win).
2. Do the jsinfo tasks **written on paper** before reading solutions.
3. Do the drills in chapter 09 with an **answer committed on paper first**.
4. Redo dwec1p2/dwec1p3 from scratch under exam conditions (no linter, no
   browser), then compare with chapter 08.
5. Take the mock exam, then attack your own answers: boundaries, types,
   `NaN`, `null`.
6. Last day: chapter 13 only.

## Trust level of the content

- **Executed**: every drill answer (`node tools/verify.js`), the task
  solutions and hostile test grid (`node tools/tasks-check.js`), the UT
  reference against a mutant, and the mock-exam Part A (`node
  tools/mock-check.js`). Node v20; behaviour is standard ES, not Node-only,
  except where it says "strict"/"sloppy".
- **Quoted/derived** from his files: marked **[P]**.
- **jsinfo content he did not comment** (logical operators, `??`, `switch`,
  parts of functions): marked **[J]**; written from the textbook's known
  content, not from his notes.
- **[inference]**: my reading of his style about what an exam will look like.
  Not a promise.
- I did not open the full `jsinfo.2025-10.zip` (the offline textbook, 14 MB):
  open the matching articles to confirm wording and to do its tasks.
- Spots where his own material has small slips (not errors in this guide):
  the `ut.js`/`uts.js` filename, `math2`'s `<title>math3`, the missing `?` in
  one ternary example, a missing `)` in `console.log(aliasFunc(1, 2);`, the
  Windows hosts path, a few `\\'` Markdown escapes in the task text.

## Regenerating

```bash
cd tools
node verify.js        # run every drill against Node
node gen.js           # rebuild 09-drills.md from bank.js
node tasks-check.js
node mock-check.js
```

Edit `tools/bank.js` to add drills (each entry carries its expected result,
so a wrong claim fails verification).

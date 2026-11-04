# Detailed guide to Exam 1 (November) — DWEC

Built from the forum archive (`../../Forum_Archive/`), the two instruction
PDFs, `PROFESSOR-STYLE.md` and his `jsinfo-*-comments`. Legend:

- **[F]** = stated by the professor (thread id given). Verify in the original.
- **[I]** = my inference. Treat as a hypothesis.
- **[?]** = unknown; ask him in the forum (title: `dwec: exam question?`).

Practise with `EXAM.md` here and `../mock-exam/EXAM.md` (+ `SOLUTIONS.md`).

---

## 1. What is fixed (the logistics)

| Fact | Source |
|---|---|
| Exams count **80–90 %** of the grade; deliveries 10–20 % | [F] 451828 notes |
| Late deliveries = **0**, even a couple of hours late | [F] 451828 |
| **3 hours** ("I don't like you running out of time") | [F] 451828 |
| An exam **in November**, as warm-up, **and it counts** | [F] 451828 |
| On a computer, **empty local user**, **no USB** | [F] 451828 |
| Desktop has the official course docs; plus **anything printed or handwritten** you bring | [F] 451828 |
| "Very useful: bring printed solved exercises" | [F] 451828 |
| Parts: (1) code-generation exercise, (2) "theory/practice" with V/F, gaps, short writing | [F] 451828 |
| Theory part: **only jsinfo + his comments** | [F] 451828 |
| Instructions of the code part are in **Spanish only**, identical in the mock and the exam; only the section statements get translated for non-Spanish speakers | [F] 451828 |
| Code part nominal time 2h30 (PDF) | [F] PDF |
| Exam date, order of the parts, weights per section/part | [?] |
| Whether the theory part is before/after the code part | [?] |
| Whether the 3 h includes both parts | [I] yes: 2h30 + the rest |

Official evaluation is "by RAs, that horrible thing" [F]: V/F penalties are
computed per RA, so errors in one area do not eat correct answers of another.

---

## 2. Scope: what he said you must know

"Only what is in jsinfo plus my comments." The scope he names: **LANG1 + LANG2
+ LANG3 + 5.2 (numbers) + 5.4 (arrays)** [F] 448287 (his suggested NotebookLM
prompt). Git ("git no excuses" §5) and Conventional Commits are **essential
for the exam** [F] 450636.

### 2.1 His own "review these" list (thread 448287) — highest priority
He highlighted what the class did not know. Each is a probable exam question:

1. **Single shared global scope**, and what "global scope" means.
2. **Statement vs expression** (+ the joshwcomeau article; the final
   "warning" about `;`, `,`, `{}`, `()` having several meanings).
3. **Shared global scope (including the console) and the order test.**
4. **Functional style** section.
5. **Other JS literals.**
6. **null or undefined?** — list of all data types and the nuance between them.
7. **2.7 Type conversions** — implicit and explicit ("cohertion or cast").
   "Of the things that bite most in JS. Review that whole article."
8. **Operator precedence** — "life or death". MDN table + his synthesis.
9. **Non-traditional use of `?`** (ternary used like an `if`).
10. **A function with an empty `return` or none returns `undefined`.**
11. **3 main kinds of functions**: returns only / does only (side effect) /
    both.

He also said to review **all** of LANG2, then LANG1 and LANG3 [F]. Then the
likely tools: "reading with attention, summaries, self-quizzing, asking,
and, forbidden word, memorising (with understanding)" [F].

### 2.2 Other items from threads
- `'use strict'` must be the **first statement**; elsewhere it fails silently;
  test with `a = 3`. Write it even if not asked [F] 445134, PDF.
- `===`, `Number.isNaN` (not `isNaN`), `typeof`; `isNaN()` in the math2
  template is "totally wrong" [F] 447571.
- `if/else` one-liner without braces: you must mark where the true-branch
  statement ends, or `else` fails (his live-coding post-mortem) [F] 447360.
  So: use braces unless the one-line form is truly clean.
- Comments next to what they explain, not at the end [F] 445150.
- loops3: unsolvable-as-stated requirement -> reasoned compromise with
  disclaimer [F] 445153.
- Code-quality (LANG3): coding style, comments, ninja code, tests (mocha),
  debugging [F] scope; style = 2 spaces, 80 columns, consistent quotes
  (pick one; follow the codebase) [F] comments + PDF.
- Unit tests: table-driven, `Fails: X` line, `refactor` after UT [F]
  dwec1p3 (`dwec1p3-instr.md`).

### 2.3 Git and commits (essential) [F] 450636, 453133
- Before commit: **diff + log** (5.1). Check nothing is missing or extra and
  that your message is consistent with previous ones.
- **Atomic / aimed commits** (5.2): you start editing with a purpose. "Half
  of life."
- Message (5.3): tag, colon, space, **lowercase**, **imperative** ("add",
  not "adds"/"added"/"adding"), **no final period**, **no body**, title
  only; put the key words first.
- Conventional Commits + Angular tags (5.5): `feat`, `fix`, plus secondary
  ones (`docs`, `refactor`, `test`, `style`, `chore`, `perf`, `build`, `ci`,
  `revert`).
- Unsure of the tag? **Think by elimination** [F] 453133: a first HTML with
  visible content is `feat`; `docs` would be only comments.
- Exam-specific: section number after the tag: `feat: (*3) ...`,
  `(*3.1)`, `(*3,*4)` [F] PDF. (My examples keep the colon after the tag and
  put `(*n)` after it: the PDF is ambiguous; confirm.)
- SemVer (5.4): doesn't affect the code part, but may be asked as theory [F].

---

## 3. The exam format in detail

### 3.1 Part A — the code exercise (like `dwec1p4`) [F] PDF + OCR
1. Create `dwec1pX/` on the desktop; only the requested files + `.git/`.
2. Git on `main`; commit **at least at the end of each section**.
3. Zip `taskid.surname.name.zip`, lower-kebab-case, one folder at the root.
4. Mark which section each piece of code belongs to (`// 3`, or start/end).
5. Good practices (counted **in every section**): DRY, semantic names, not
   ad-hoc, no needless inefficiency, 2 spaces, 80 columns, modern JS.
6. `TODO:` (not done/partial/different/skipped) and `FIXME:` (done but
   buggy) with the future commit message after the tag.
7. Don't break previous functionality: fix, `FIXME:`, or comment out + `TODO:`.
8. You may do the sections in any order, but think about the effects.

What gets graded (from PROFESSOR-STYLE §5, [I] for weights):
- Correct output, **and the process**: commit history, tags, `(*n)`,
  atomicity, markers, TODO/FIXME, disclaimers.
- Not attempted with a `TODO:` > silence.
- Zip name and structure (cheap points, easy to lose).

### 3.2 Part B — V/F, gaps, short writing [F] PDF
- **V/F**: circle V or F (do not underline or write the letter). **Each
  error subtracts one correct answer**, limited to the section and per RA.
  Blank = no penalty. You may cross out to rectify; if you cross out both you
  may write V or F. You may justify between the lines: "never goes against
  you" and can avoid the penalty or even make it count — but **something must
  be circled** for it to count.
- **Gaps**: no penalty; each gap = one V/F unless marked `(x2)`, etc.
- **Short**: "write something short".
- An "idea" question may appear, with a small or extra weight [F] 450636.

### 3.3 Strategy for V/F [I]
- Expected value: if you are < 50 % sure, leave blank (or justify).
- A one-line justification beside a doubtful item costs seconds and can
  rescue it.
- Prefer the ones where you can *run the code in your head* (type
  conversions, precedence). Those are exactly his "bites".

---

## 4. How he thinks (use it when you are stuck)

From `PROFESSOR-STYLE.md` (threads in brackets):

1. **Conscious decisions beat silent ones, even wrong ones** [445134,
   450305, 449461] -> when the spec is silent, choose and **write a disclaimer**.
2. **"Better too many disclaimers than too few. Ask any lawyer."** [445134]
3. **Run it, look at it**. He complains of people who write everything
   without running [445153]. -> Open the HTML after **each** section.
4. **Let things bite you now** [445134] -> strict equality, strict mode.
5. **Spec may be flawed** [447571, 445153] -> compromise + comment.
6. **Precision of language** [450174] -> names, titles, commit messages.
7. **Margin** [many] -> don't leave the hard bit for the last 20 minutes.
8. **Understand before you automate** [449461, 450636] -> do it by hand first.
9. **AI**: not allowed silently; use/mention it as a disclaimer. In the exam
   there is no internet, so this is moot [I].
10. **Ideas > mechanics**: mechanical parts "are done by AI faster and often
    better", so marks go to ideas [450636]. But: *an idea that was already
    solved in class is mechanical* -> **learn the solutions of the class
    exercises by heart, with understanding**.

### The "separator" idea exercise (thread 450636) — practise it now
Join a list like a sentence: `a, b, c and d.` without the usual trailing
separator, **without assuming which elements are last** (generic list, e.g.
names containing the letter "a"). Typical solution: build an array of the
selected items, then join the first n-1 with `', '`, add `' and '` and the
last, handle 0, 1 and 2 items. He said the correction would be in class;
afterwards it's "no longer an idea". Write the commits with Conventional
Commits too.

---

## 5. Preparation plan (day by day, adapt to the real date [?])

| Block | What | Done when |
|---|---|---|
| D-7..D-5 | Re-read **all of LANG2** with his comments (the `.new.md` version). Do his 11-point list (§2.1) | You can explain each in 2 sentences without looking |
| D-5..D-4 | Type conversions + precedence drills: `../../Study_Guide/09-drills.md`, `13-cheatsheet.md` | 20/20 on mock Part A snippets of `12-mock-exam.md` |
| D-4 | LANG1, LANG3 (style, comments, tests), 5.2 numbers, 5.4 arrays | You can write sort/map/filter/reduce from memory |
| D-3 | Git: redo dwec1p3 steps from scratch (UT + refactor + rollback) | Clean history with `(*n)` style |
| D-2 | **Full timed mock A**: `../mock-exam/EXAM.md` (2h30) | Zip delivered, history readable |
| D-1 | **Full timed mock B**: `EXAM.md` here (3 h, both parts), then check against `SOLUTIONS.md` | Re-do mistakes; update the cheat-sheet |
| Day | Light review of the cheat-sheet only | Sleep |

Do **not** study new material the night before. He gently warns about
late-night posting and habits [I].

---

## 6. The printed "infinite cheat sheet" (what to bring)

He allows anything on paper [F], and recommends solved exercises. Bring:

1. **Solved dwec1p2 and dwec1p3** (all tasks: math, conditionals, loops, UT
   + refactor), printed, with comments.
2. **This exam and the mock**, solved (your own versions).
3. A **git/commit page**: the tag list, the message rules (§2.3), the
   `(*n)` convention, the commands (`init -b main`, `add`, `commit -m`,
   `log --oneline`, `diff`, `revert <sha>`, `status`, `restore`).
4. **Operator precedence table** + his synthesis, **coercion tables** (`+`,
   `==`, `<`, `Number()`, `Boolean()`), the falsy list.
5. The **zip command**: `zip -r dwec1pX.surname.name.zip dwec1pX/`.
6. **Templates**: `uts.html`, a table-driven `uts.js`, `<script src>` order,
   HTML5 skeleton, `'use strict'` line.
7. The **marker legend**: `// n`, `// TODO:`, `// FIXME:`, disclaimer phrasing.
8. A **page of "bites"** (see §7).

Remember: a cheat sheet doesn't replace knowledge ("deceptively tempting")
[F]. Searching a 600-line PDF takes minutes you won't have.

---

## 7. The "bites" list (high-yield facts)

- `typeof null` = `"object"`; `typeof NaN` = `"number"`; `typeof` fn =
  `"function"`; `typeof` arr = `"object"`.
- `NaN !== NaN`; use `Number.isNaN(x)`; `isNaN("abc")` is `true`
  (it converts), `Number.isNaN("abc")` is `false`.
- `==` vs `===`; `null == undefined` but `null != 0`; `null >= 0`.
- `+` concatenates if any side is a string (left to right): `1 + 2 + "3"`
  = `"33"`, `"1" + 2 + 3` = `"123"`; `-`, `*`, `/` convert to number.
- `"" ?? x` -> `""`; `0 ?? x` -> `0`; `||` replaces any falsy. `??` can't
  mix with `||`/`&&` without parentheses.
- Falsy: `false 0 -0 0n "" null undefined NaN`. `"0"`, `[]`, `{}` are truthy.
- `toFixed` returns a **string**; `(1.005).toFixed(2)` = `"1.00"`.
- `0.1 + 0.2 !== 0.3`; work in cents/integers.
- `%` keeps the sign of the dividend: `-7 % 3` = `-1`. `**` is
  right-associative.
- `Math.round(-2.5)` = `-2`.
- `i++` vs `++i` in the same expression: evaluate left to right.
- `switch` uses `===`; missing `break` falls through; no match + no default
  = nothing.
- `let` is block-scoped; TDZ for `let/const`; `const` needs a value.
- Functions: no `return` -> `undefined`; declaration hoisted, expression
  not; default params only for `undefined`; arrow returning object needs
  `({...})`.
- Arrays: `sort()` is string order and mutates; `slice` copies, `splice`
  mutates; `=` copies the reference; `length = 0` empties; `arr[5] = x`
  makes a sparse array; `[] === []` is `false`.

---

## 8. Exam-day protocol (minute by minute) [I]

**Before touching code (5 min)**
1. Read **all** the statement, both parts. Note the weights if given.
2. Decide the order: the quickest wins first; the "idea" last.
3. Create `dwec1pX/` on the desktop, `git init -b main`, check
   `git config user.name/email` (a fresh empty user may have none!).
   First commit: `chore: init project`? Only if the PDF allows an empty
   start; otherwise first real commit is `feat: (*1) ...`.

**During (per section, loop of ~10–20 min)**
1. Read the section again. Write `// n` marker.
2. Code the smallest working version -> **open it in the browser, look at the
   console**.
3. `git diff` + `git log --oneline` (5.1), then **one** commit with `(*n)`.
4. Stuck > 10 min? Write a `TODO:`/`FIXME:` with the future commit message,
   commit, move on. Come back if time remains.

**Last 25 minutes**
1. Re-read the "General" list: 2 spaces, 80 columns (check with the editor
   ruler), `'use strict'` in the **first** statement, `===`, semantic names,
   no magic numbers, no duplicated code.
2. Run every page again (did later sections break earlier ones?).
3. `git status` must be clean; `git log` must read like a story.
4. Folder contains **only** the requested files + `.git/`. Zip with the exact
   name; check the zip content with `unzip -l`.
5. Deliver as instructed. If Part B is separate paper/screen, reserve time.

**Part B**
1. Do gaps and short answers first (no penalty), V/F last.
2. V/F: circle only what you can defend; annotate doubtful ones.

---

## 9. Typical mistakes that cost points [I from the threads]

| Mistake | Why it hurts |
|---|---|
| `'use strict'` not first (or missing) | silent; he checks |
| `isNaN()` instead of `Number.isNaN()` | called "totally wrong" |
| `toFixed` used as a number | returns a string |
| `==` / `!=` used casually | against the "bite now" rule |
| `||` where `??` is needed (valid `0`) | the classic bug |
| One giant commit | not atomic; process is graded |
| `Added`, `Fixes.`, capital letter | wrong imperative / format |
| No `(*n)` in message | explicit instruction in the PDF |
| Magic numbers / copy-pasted loops | DRY, not ad-hoc |
| Lines over 80 / tabs | explicit rule |
| Silence over the unfinished | `TODO:` scores more than nothing |
| Wrong zip name / extra files / two folders | cheap loss |
| Edited the "Don't edit below" part | explicit |
| Comments at the end of the file | context-adjacent comments |
| Late delivery | **zero** |

---

## 10. After the exam

- Redo what failed with the solved version -> that is the next cheat-sheet.
- Post in the forum (good question = participation points + up to 1 extra
  point [F] `foro_punto_extra.md`): use the title format `exam: specific
  question?`, early, never at night before a deadline.
- The rounding rule: the boletín rounds **down**; forum participation,
  on-time delivery, attitude and initiative may push it up [F]
  `foro_punto_extra.md`.

---

## 11. Open questions to ask him (one thread each, early)

1. Exam date and order of Part A / Part B within the 3 hours.
2. Weights per section and for process vs result.
3. Exact commit format: `feat: (*3) ...` or `feat(*3): ...`?
4. Is the `'use strict'` line allowed as the first line of the template script?
5. Is the zip content checked only for the files listed?
6. In the V/F: is "per RA" visible (which items belong to which RA)?
7. Are `Math.*` methods allowed in the exam (e.g. `Math.round`), or only
   `toFixed` and arithmetic? (I found no such restriction in the forum.)

---

## 12. Lessons from my own mock attempt (parcel simulacro, partial)

Reviewed 2026-11-04 against `../mock-exam/` (files `parcel_tak0.html`,
`scripts/shipping/main.js`, `B.1.txt`). Each lesson is a rule for the exam.

### 12.1 V/F: 16 of 20 answered correctly, 4 wrong
| # | Topic | Truth | Rule to remember |
|---|---|---|---|
| 1 | `"use strict"` not first | no effect, silently | Only the **first statement** counts |
| 9 | `null >= 0` | `true` | `>=` converts `null` to 0; `==` does not |
| 10 | `Boolean("0")` | `true` | Any non-empty string is truthy |
| 14 | `switch` comparison | strict (`===`) | `"1"` does not match `case 1` |

- With the penalty rule, 16 − 4 = 12. Items left blank cost nothing: **answer
  all you can defend, justify the doubtful ones, never leave a whole page
  unanswered by running out of time**.
- Three of the four are in the "bites" list (§7). Re-read it before the exam.

### 12.2 Code habits that lost points
| Habit | Fix |
|---|---|
| No `'use strict'` in the page script | Always the first statement; test with `a = 3` |
| Constants as `const { price = 19.99 } = {}` (clever, but mutable variables) | `const price = 19.99;` plain |
| `isEven` via `(x*100)%2` plus `if / else if / else Error;` | `Math.round(x * 100) % 2 === 0`, one expression, no dead `else` |
| Value only assigned inside an `if` (can stay `undefined`) | Ternary or direct `Number(text)` |
| No `// n` markers, no disclaimers (e.g. `0.1 + 0.2`) | Mark every zone; disclaim every deviation |
| Helper that coerces with `Number(x)` (`"5"` and `true` accepted) | `typeof x !== 'number'` check, or write the disclaimer |
| Misleading name (`notValid` returns the value) | Name by what it returns (`parseWeight`) |
| Mixed 2/4-space indentation and brace styles | One style, 2 spaces, from the first line |
| `case "sun"/"sat":` (a division = `NaN`, never matches) | Stack cases: `case 'sat': case 'sun':` |
| `switch` without `default` (`dayType('mon')` → `undefined`) | Always a `default` that returns |
| Dead `break` after `return` | Remove it |
| `fizzBuzz(number)` using global `i` instead of its parameter | Use the parameter; no hidden dependencies |
| Same loop body pasted into `for`, `while`, `do...while` | One helper builds the item; loops only collect |
| Items joined without separator | Join with `' '` (or as asked) |
| Globals `i`, `answer` shared by all code | Block-scoped `let` or wrap in a function |
| Stray joke or rude test comment left in the file | Delete before the final commit; the file is graded |
| Section skipped without a note | `// TODO:` with the future commit message |

### 12.3 Self-check before each commit (30 seconds)
1. Is `'use strict'` the first statement of every script?
2. Does every function use its parameters, not globals?
3. Can any value stay `undefined` on some path (`if` without `else`,
   `switch` without `default`)?
4. Is any block copy-pasted? Extract a helper.
5. Do all section zones have `// n` and each deviation a disclaimer?
6. `git diff` and `git log --oneline`, then one commit with `(*n)`.

### 12.4 Next steps
- Finish Sections 3–7 of the mock (`dayType` fix, primes with labelled
  `continue`, arrays, functions, UT) and Part B items 21–24 and the gaps.
- Then do the timed `EXAM.md` of this folder (3 h), and compare with
  `SOLUTIONS.md`.

---

## 13. Doubts checked against a ChatGPT chat (verified in Node)

Your questions were good ones. Some of the answers you got are wrong or do not
fit this exam. **Rule: run any AI answer before trusting it** (his "run it,
look at it" principle [F] 445153; AI help without a disclaimer is a red flag
[F] 449461).

### 13.1 `const { price = 19.99, units = 3, };`
- As written (no `= {}`), it is a **SyntaxError: Missing initializer in
  destructuring declaration**. ChatGPT first said "yes, valid", then
  corrected itself.
- With `= {}` it is valid JS, but it is a trick: it hides the intent, and
  defaults only apply to `undefined`, not to `null`/`0`/`""`.
- For "create constants" use the plain form:
  `const price = 19.99;` `const units = 3;`. Obvious code is graded better
  than clever code.

### 13.2 "The professor forbids `Math`": how to round without it
- **I could not find any such rule in the forum or the PDFs [?]**. Ask him
  (open question, §11) before changing a working solution.
- Section 1 does not need `Math`: `toFixed(2)` already rounds, and returns
  a **string**.
- Integer cents without `Math` and **without float error**: take them from
  the text, not from `number * 100`:

  ```js
  const totalText = total.toFixed(2);            // "5.06"
  const cents = Number(totalText.replace('.', '')); // 506, exact
  endsInZeroCent = cents % 10 === 0;
  ```

  Why not `totalNum * 100`? `Number("1.15") * 100` is `114.99999999999999`.
  This only works because `toFixed(2)` guarantees exactly 2 decimals. Say so
  in a comment.
- ChatGPT's `parseInt(number * 100 + 0.5) / 100` is a bad idea:
  `parseInt` converts its argument to a **string** first, so large or tiny
  numbers (exponent notation) break: `roundToTwo(1e21)` gives `0.01`
  instead of `1e21`. `parseInt` is for parsing text, not for truncating
  numbers.
- It also claims `toFixed` "is a Number method, not Math, so check". True,
  and it is the tool the exam statement itself asks for.

### 13.3 `typeof` in an `if`
Correct as ChatGPT said: `typeof x === 'number'` (compare with a string).
Remember: `typeof null` is `"object"`, `typeof NaN` is `"number"`,
`typeof []` is `"object"` (use `Array.isArray`). Use `===`, always.

### 13.4 "Declare the variable only if `totalText` is a string"
- **In the exam, `totalNum` is already declared by the template** (`let
  totalNum;`, outside your zone). You cannot and need not declare it.
- Therefore the answer is just an assignment, e.g. as a ternary
  (`totalNum = typeof totalText === 'string' ? Number(totalText) :
  totalText;`), which also leaves no path where it stays `undefined`.
- Conditional declaration does not exist: `let`/`const` are block-scoped.
  ChatGPT's `var` inside the `if` works by hoisting but is exactly the kind
  of "quirk" he wants you to avoid; `var` is not in the course style.
- In this task `typeof totalText` is always `'string'` (`toFixed` returns
  a string). The check is a **comprehension test** ("do you know that
  `toFixed` returns a string?"). Say that in a comment.

### 13.5 `notValid(entry, type)` as a generic "type parser"
- `$type(...)` does not exist in JS; `typeof` is what you mean.
- A generic parser with `switch(type)` for string/number/boolean is
  **over-engineering** for this exam. The statement asks only for a weight
  check. The guide's rule is "not needlessly ad-hoc **within reason**": do
  the simplest thing that is correct and easy to extend.
- Name by what it returns: `parseWeight`, not `notValid`.
- ChatGPT's final version **regressed against the spec**:

  ```js
  if (Number.isNaN(entry) || entry === 0) return null;  // spec: <= 0
  ```

  It accepts `-5` and `"-2"` (verified), but the statement says weight
  `<= 0` is invalid. Your own earlier `entry <= 0` was right. Always re-test
  the boundary table after "simplifying".
- Other traps there: `Number(null)`, `Number("")`, `Number("   ")` and
  `Number([])` are all `0`; `Number(true)` is `1` (a boolean passes as a
  weight); `entry.isNaN` is not a thing (use `Number.isNaN(x)`; `x !== x`
  works but is cryptic, so comment it).
- A solid, short version for the exam:

  ```js
  const parseWeight = (w) =>
    typeof w === 'number' && w > 0 ? w : null; // NaN > 0 is false
  ```

  Why it works: `NaN > 0` is `false`, so `NaN` is rejected with no special
  case. If strings like `"5"` must be accepted, say so in a disclaimer and
  use `Number(w)` knowing `true` and `[]` then slip through (test them).

### 13.6 How to use an AI for this course (his rule [F] 448287)
Only an AI that does not wander (NotebookLM), fed **only** the course
material, to **quiz you** or explain; prompt: *"Stick to what we've covered
so far of jsinfo: LANG1+2+3+5.2+5.4."* A general chatbot happily invents
tricks (`var`, `entry !== entry`, `parseInt` rounding) that the course
material does not cover. In the exam, only what is in jsinfo + his comments
counts, and there is no internet.

---

## 14. Second ChatGPT chat (shippingCost, describeWeight, FizzBuzz), verified

Same rule as §13: run it before trusting it. Each point below was tested
in Node.

### 14.1 Bugs it correctly found in the earlier drafts
| Draft | Bug | Verified |
|---|---|---|
| `function f(entry) { let entry = ... }` | A parameter cannot be redeclared with `let` | `SyntaxError: Identifier 'entry' has already been declared` |
| `typeof entry !== "Number"` | `typeof` returns lowercase `"number"`, so the test is **always true**: every input (1, 5, 20 too) returned `null` | `[null, null, null]` |
| `if (!notValid(w) !== null)` | `!` runs first and gives a boolean; a boolean is never `null`, so the test is always true | `[true, true]` |
| `switch (cost)` / `switch (weightKg)` with `case 1: case 5: case 20:` | `switch` matches **exact** values; thresholds (`<= 1`) need `if / else if` | task says so explicitly |
| `entry === ""` / `entry === undefined` after `Number()` | Dead code: `Number("")` is `0` and `Number(undefined)` is `NaN`, already caught | |
| No `return` on some paths | The function returns `undefined` (the original `shippingCost("x", 2)` bug) | |

### 14.2 The `notValid` returning `0` instead of `null`
- ChatGPT's first reaction ("both fine") and its second ("don't use a
  possibly valid value as an error sentinel") are both partly right.
- For **this** task `0` is itself invalid (spec: `<= 0`), so `0` cannot be
  confused with a valid weight. It works (tested: `"hello"`, `-1`, `0` and
  `null` all give `0`).
- But `null` is better for three reasons:
  1. The task statement says `shippingCost` returns `null` on invalid, and
     the later `??` display (`cost ?? 'Invalid weight'`) works because of
     `null`. A sentinel `0` in a helper forces a translation step.
  2. The helper becomes reusable for values where `0` is valid.
  3. It is the pattern he uses: absence = `null`.
- Still true after the rewrite: `Number(true)` is `1`, so `shippingCost(true)`
  is accepted as 1 kg. Either add `typeof` or write the disclaimer (§13.5).
- Keep the **if / else if chain** exactly as the task demands, with
  `isMember = false` default and `cost /= 2` applied once after the chain.
  That version is correct (tested on all boundaries in §12).

### 14.3 `describeWeight`
`return kg < 2 ? 'light' : kg < 10 ? 'medium' : 'heavy';` is correct,
one level per line, within 80 columns. `return` goes **outside** the
ternary: a ternary is an expression, `return` is a statement (the
statement-vs-expression rule of §2.1 / 448287).

### 14.4 FizzBuzz: things ChatGPT's final version still gets wrong
- It uses **`print(answer)`**. In Node `print` does not exist
  (`ReferenceError: print is not defined`); in a browser `print()` opens the
  **printer dialog**. Use `console.log`.
- It adds `"\n"` after every item. The task says **ONE joined line**. Use a
  separator (`' '`) or collect items in an array and `join(' ')`, with no
  trailing separator.
- It keeps global `i` and `answer` and still pastes the same body three times.
  The task wants the same line from `for`, `while` and `do...while` **without
  repeating logic**. Keep one helper that builds an item, and let the loops
  only collect. Use `fizzBuzz(number)`'s parameter, never the global `i`.
- Your original loops had the classic bugs, worth remembering:
  `for (; i < 15; ...)` (stops at 14, off by one), `i--` instead of `i++` in
  `while`/`do...while` (infinite loop), and `answer` modified inside the
  function instead of returning a value (a function should return, not mutate
  globals: his "3 kinds of functions" [F] 448287).
- Reference for the whole thing: `ref/library.html`, Section 4.

### 14.5 Pattern to take away
Every time you "fix" a function: (1) re-read the task table, (2) run the
boundary cases, (3) check every path returns something, (4) check nothing
reads or writes a global. ChatGPT repeatedly changed behaviour while
"fixing" syntax (`=== 0` instead of `<= 0`, the 25 EUR band as "invalid",
`print`). The task statement wins over any chat.

---
---

# PART II — Theory, article by article: jsinfo 1.1 → 4.1

Scope: LANG1 (1.1–1.4), LANG2 (2.1–2.18), LANG3 (3.1–3.6) and the first
article of LANG4 (4.1 Objects). Numbering = jsinfo's, per his scheme
(LANG2.4 = chapter 2, article 4). His own file calls the last LANG2 article
"2.16 JavaScript specials"; in jsinfo it is **2.18**.

Legend: **[P]** = his comment (he has the last word). **[J]** = jsinfo only
(he did not comment, still examinable: "only jsinfo + my comments"). Every
code claim here was run (`node check-theory.js`). Each article ends with
**Traps** (where marks are lost) and a **Self-check**; cover the answers
and answer aloud.

How to use: read the article in jsinfo (EN, canonical) with his comment
beside it, then read this as the checklist of "can I explain it without
looking?".

---

## CHAPTER 1 — An introduction (LANG1)

### 1.1 An introduction to JavaScript
**What it is.** JS was created to "make web pages alive": programs called
**scripts** embedded in HTML, executed when the page loads. Scripts are
plain text and are not compiled by you before running.

**Core ideas**
- **Name.** JS is not related to Java (a marketing accident). "JavaScript" is
  a trademark (Oracle), so "JS" is common. The standard is **ECMAScript
  (ECMA-262)**; engines implement it [P].
- **Engine** = the program that reads and runs JS (in the browser or in
  other hosts). The simplified life of an engine: it **reads (parses) the
  script, compiles it to machine code, runs it**, and keeps optimising while
  running. Modern engines use **JIT (just-in-time) compilation** [P]
  (V8 in Chrome, 2008), so JS is "interpreted-looking" but fast.
- Engine names [P]: **V8** (Chrome, Chromium, Edge, Opera, Node, Deno,
  Electron), **SpiderMonkey** (Firefox), **JavaScriptCore** (Safari, Bun).
  Rendering engines: Blink, Gecko, WebKit.
- **Consequence of JIT [P]:** an error appears only **when execution reaches
  that line** (apart from global syntax errors). A branch you never test can
  hide a bug. Defences: **linter**, thorough **unit tests**, **types**
  (TypeScript or JSDoc).
- **What in-browser JS can do:** add/change HTML and CSS of the page, react to
  clicks and keys, send requests over the network (AJAX/fetch), read/set
  cookies, ask questions, store data on the client (localStorage).
- **What it cannot do (security):** no arbitrary access to disk or OS
  functions; reading files only if the user chooses/drops them; no direct
  access to the camera/mic without explicit permission; pages in different
  tabs/windows generally do not see each other; **same-origin policy**: JS
  from one site cannot freely get data from another site, unless the other
  server sends permission headers [P].
- **Same origin** = same **protocol + domain + port** [P]. Path does not
  matter. `http://a.com` ≠ `https://a.com` ≠ `http://www.a.com` ≠
  `http://a.com:81`; `http://a.com/x` = `http://a.com/y`. The limit applies
  to JS *receiving* data; HTML may load `<script src>`, images, CSS, fonts
  from anywhere.
- **Why JS is unique:** full integration with HTML/CSS; simple things are
  simple; supported by all major browsers, **on by default**. It is the one
  browser language. Hence also Node.js on servers and everywhere else.
- **Browser capabilities come from Web APIs, not from the language** [P]
  (DOM, fetch, storage). Do not confuse with "Web API" = an HTTP REST API.
- **Languages "over" JS** (transpiled to JS **ahead of time**, not in the
  browser): TypeScript (superset of JS; any valid JS is valid TS),
  CoffeeScript, Flow, Dart, Brython, Kotlin/JS [P].
- **Not everyone has JS working**, so the base should be HTML/CSS and JS the
  enhancement (**progressive enhancement**); SPA/CSR have first-load,
  accessibility and SEO costs, hence the return of **SSR** [P].

**Traps**
- "JS = Java scripts" (false). "JS runs only in browsers" (false: Node).
- "JIT means no errors before running" (false: errors appear when the line runs).
- Confusing ES versions: ES6 = ES2015; yearly releases afterwards; big
  changes: ES5 (2009) and ES6 [P].

**Self-check**
1. Who defines JS and what are two engines? *(ECMA-262/TC39; V8, SpiderMonkey.)*
2. Are `http://a.com/x` and `http://a.com/y` same-origin? *(Yes; path doesn't matter.)*
3. Why can a bug survive in code that "loads fine"? *(Errors surface only when that line executes.)*
4. Two ways to get type safety on top of JS? *(TypeScript; JSDoc comments.)*

### 1.2 Manuals and specifications
**What it says.** Where to look things up:
- **The specification** (ECMA-262): the most in-depth and formal source;
  also the draft "living" version at tc39.es. Hard to read; good as last word.
- **MDN (Mozilla Developer Network):** the main manual, with examples and
  **browser compatibility tables**. Use `developer.mozilla.org`.
- **caniuse.com:** which browsers support a feature.
- **Compatibility tables** (compat-table) for engines' ES support.
- Other references: MSDN (Microsoft, mostly historical), WHATWG for the DOM.

**Emphasis [P].** ES versions list (ES5 = 2009; ES6 = ES2015; yearly after;
"modern JS" = ES2015+). WHATWG "living standards" (no versions) define DOM,
fetch, XHR, HTML. Check MDN/caniuse **before** using a new feature. The
English jsinfo is canonical; the Spanish one may lag or mistranslate
technical terms, so **know the English terms**.

**Traps**
- "ES6" vs "ES2015" vs "ES Next": synonyms/loose names. "ES2016+" excludes ES2015.
- Treating one blog as authority: for facts, MDN > blog; for the last word,
  the spec.

**Self-check**
1. Where do you check if browser X supports a feature? *(caniuse, MDN compat table.)*
2. ES6 is also called? *(ES2015.)*

### 1.3 Code editors
**What it says.** Two big families: **IDEs** (powerful, heavy, project-wide:
WebStorm, Visual Studio) and **lightweight editors** (fast, simple: VS Code,
Sublime, Atom). Editors differ in autocompletion, syntax highlighting,
debugging, extensions. The choice is yours. VS Code is the one used in class.

**Emphasis [P].** There's no exam question about it. Practical: learn the
panel for Git (diff/log before commit, §2.3), the integrated terminal, and
extensions such as a linter (not in the exam).

**Self-check.** IDE vs editor? *(IDE: many built-in tools for a project; editor: lightweight and extendable.)*

### 1.4 Developer console
**What it says.** F12 / Ctrl+Shift+J (Chrome) / Ctrl+Shift+K (Firefox)
opens DevTools: **Console** tab shows errors and runs commands; **Elements**
tab inspects HTML/CSS; **Network**, **Sources**, etc. Errors are shown with
the file and line. Commands: type JS, Enter runs it; **Shift+Enter** adds a
line without running.

**Emphasis [P]**
- The console is **not identical** to a `<script>`: some code behaves
  differently, and it differs between browsers. It is handy, not authoritative.
- It shares the page's **global scope**: open an empty tab for a clean one.
- Useful: `clear()`; `Ctrl+L`; history with arrows; `console.log`.
- Showing objects: `console.log('x: ' + obj)` **stringifies** (`[object Object]`);
  `console.log('x:', obj)` keeps the object; `console.log({ obj })` prints
  the name too; `console.dir`, `console.table`, `JSON.stringify(obj, null, 2)`.
- Console has no strict mode by default.

**Traps.** Code that works in the console but fails in a script (the console
is not identical, §above). Leftovers from earlier tests in the shared global
scope.

**Self-check.** Why `console.log('o: ' + {a:1})` shows `o: [object Object]`?
*(Concatenation converts the object to a string.)*

---

## CHAPTER 2 — JavaScript fundamentals (LANG2)

### 2.1 Hello, world!
**Ideas**
- JS goes in HTML with `<script>`. The 3 ways [P] (MDN names): **external**
  (`<script src="file.js">`), **internal** (code inside the tag), **inline
  handlers** (`onclick="..."`, bad practice, seen in old code).
- A tag with `src` **ignores its content**; use two tags.
- `src` accepts absolute (CDN) and relative URLs.
- Old attributes `type="text/javascript"` and `language` are obsolete; the
  `<!-- ... //-->` comment wrapper is ancient. Don't write them.
- Scripts run **in document order**, top to bottom, and **share one global
  scope** [P] (as if concatenated). Load order matters: define before use.
  ES modules (`type="module"`) have their own scope; `async` breaks order.
- `alert` is blocking and bad for real pages; use `console.log` or
  `element.textContent` [P].
- Quotes [P]: `'` and `"` are equivalent, backticks are template literals;
  choose one convention, follow the codebase; JSON needs `"`.

**Traps**
- Using a variable from `b.js` loaded *after* the script that needs it.
- Expecting code inside `<script src>` to run.
- Mixed quote styles in the same file.

**Self-check**
1. 3 ways to add JS? *(external, internal, inline handlers.)*
2. Do two `<script>` tags share variables? *(Yes: one global scope, in order.)*

### 2.2 Code structure
**Statements.** Instructions, separated by `;`. One per line is the
convention.

**Statement vs expression [P] (he insists: it's "all-course" knowledge).**
- *Expression*: produces a value (`3 + 4`, `a = 3`, `f(x)`, `x ? y : z`),
  can go where a value is expected: right of `=`, argument, `if (...)`,
  inside `${}`.
- *Statement*: an instruction (`let`, `if`, `for`, `return`, `break`,
  `switch`...). Not usable where an expression is needed.
- An expression can be a statement ("expression statement"); its value is
  lost (pointless unless it has a side effect).
- Statements chain with `;` and group with `{}` (**block statement**).
  Expressions chain with `,` (last value wins) and group with `()`.
- `{}`, `()` and `,` have many other uses; `;` is practically only the
  statement separator (exception: the two `;` in `for (a; b; c)`).
- `=` is an operator (returns a value); `let` is not an expression:
  `alert(let a = 3)` is a SyntaxError; `let a; alert(a = 3)` works.

**Semicolons [P].** JS has **ASI** (automatic semicolon insertion): a newline
sometimes acts as `;`, but only when the code would otherwise be invalid.
Dangers: a next line starting with `(` or `[`:
```js
const v = function () { return 1 }
(2);              // v is 1: the (2) CALLED the function
let a = "abc"
[1, 2].length;      // a is 1: parsed as "abc"[1, 2].length
```
`alert(3 +\n1 + 2)` works (line ends with an operator, so the statement
continues). **Always write `;`** (his default style: SemistandardJS). No `;`
after block statements (`if () {}`); yes after a function **expression**
assigned to a variable.

**Comments [P].** `//` line, `/* */` block. Block comments **don't nest**
(`/* /* */ */` is an error), so use `//` to comment code that may contain
comments. Don't commit dead code (git remembers). Minifiers strip comments.

**Traps**
- Return value lost on `return` + newline (see 2.15).
- A line beginning with `(`/`[`/`` ` `` after a statement without `;`.
- `if (x);` (empty statement).

**Self-check**
1. Statement or expression: `a = 3`, `let a = 3`, `if (x) {}`, `x ? 1 : 2`?
   *(expression, statement, statement, expression.)*
2. How do `;` and `,` differ conceptually? *(`;` chains statements; `,` chains expressions, value = the last.)*

### 2.3 The modern mode, "use strict"
- The directive `"use strict"` (or `'use strict'`) turns on the **modern
  semantics**. Needs to be the **very first statement** of the script or
  function body (only comments may precede it). Elsewhere: ignored
  **silently** [P] (no error!).
- **Why it is an opt-in [P]:** JS keeps backward compatibility. New syntax
  is harmless to old code; changing the behaviour of the *same* code needs a
  switch.
- No way to cancel strict mode once on.
- **Classes and ES modules are strict automatically.**
- In LANG2 what changes: assigning to an undeclared name
  (`num = 5`) is a **ReferenceError** in strict; a silent global in sloppy.
  Later: writes to read-only things throw (`TypeError`).
- Browser console: not strict by default (use Shift+Enter blocks with the
  directive to test).
- jsinfo assumes strict from here on. **He assumes you write it in every
  test file** (a VS Code snippet `use`) [P] and in exams even if not asked.
- How to test: after it, `a = 3;` must throw.

**Traps.** It after another statement (and after the template's `let`s);
believing it works because nothing complains.

**Self-check.** Does `let a; 'use strict'; b = 2;` throw? *(No: not first, ignored; `b` becomes a global.)*

### 2.4 Variables
- A variable = named storage in RAM (not persistent).
- Declare with `let` (modern), `const` (constant binding), `var` (old, avoid).
  `let a; let a;` in the same scope: **SyntaxError** (`var` allows it).
- `let a = 1, b = 2;` allowed ("personal taste"; follow the style guide).
- **Copy semantics [P]:** assigning a primitive copies the value; assigning
  an object/array copies the **reference** (both names → same thing).
- **Naming [P]/[J]:** letters, digits, `$`, `_`; not starting with a digit;
  **case-sensitive**; reserved words forbidden (`let let`, `let return`);
  non-Latin letters legal but not recommended. Use `lowerCamelCase`.
  Real-life rules: readable (`userName`, `shoppingCart`); no `a`, `b`, `c`;
  no `data`/`value` alone; one vocabulary per concept (`currentUser`, not
  `currentVisitor`); never reuse a variable for another purpose; refactor
  names; longer beats shorter.
- **Constants:** `const` can't be reassigned (`TypeError: Assignment to
  constant variable`), needs an initial value (`const x;` → SyntaxError),
  **protects the binding, not the contents** (`const a = []; a.push(1)`
  works). UPPER_CASE for hard-coded values known before execution
  (`COLOR_RED`) [J]; camelCase for those computed at run time. Default to
  `const`, switch to `let` only if you reassign.
- Task "name of our planet" [P]: it's a **constant**; `planet` is too vague;
  `ourPlanet`/`ourPlanetName` are fine.
- Hoisting / TDZ [J]/[P]: `var` is hoisted with `undefined`; `let`/`const`
  exist from block start but can't be used before their line (**TDZ**,
  even `typeof` throws). Function declarations hoist completely.
- `for (const i = 0; i < 3; i++)` fails (the step reassigns).

**Traps.** `let a += 3;` (SyntaxError); `let a; a += 3` → `NaN`; naming a
`let` like a parameter inside the function (SyntaxError).

**Self-check**
1. Is `const arr = []; arr.push(1)` valid? *(Yes.)* 2. What does TDZ mean?
   *(Name exists but is unusable until its declaration line.)*

### 2.5 Data types
- **Dynamic typing**: a variable can hold any type; the *value* has a type.
- **8 types** [P]: 7 primitives + object.
  `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`,
  and `object`.
- **number:** integer and float in one type [P] (unlike Java). Specials
  `Infinity`, `-Infinity`, `NaN`. Safe integers: ±(2**53 − 1). Division by
  zero doesn't throw (`1/0 = Infinity`). `NaN` = incorrect math operation,
  **sticky** (`NaN + 1`, `NaN * 0` are `NaN`; one exception `NaN ** 0 === 1`)
  [P]. `NaN === NaN` is false. "The script never dies" is an
  oversimplification [P]: errors hide and show later.
- **bigint:** `123n`, arbitrary size, can't mix with number in math.
- **string:** `'..'`, `".."`, `` `..` ``. Backticks: **template literal**
  with `${expression}` and multiline. Strings are immutable (`s[0]='z'`
  does nothing in sloppy, throws in strict). Length is `s.length`.
- **boolean:** use real booleans, never `"true"`, `"yes"`, `"si"` [P].
- **null:** a separate type meaning "nothing/empty/unknown", put there by
  the programmer. **undefined:** "value not assigned" (never assigned
  variable, missing argument, missing property, function without return).
  Don't assign `undefined` yourself [P].
- **object & symbol:** objects for collections; symbols for unique ids.
- **`typeof`:** operator returning a string (`typeof x` = `typeof(x)`).
  Quirks: `typeof null` is `"object"` (official historical error);
  functions give `"function"` although they're objects; `typeof NaN` is
  `"number"`; `typeof []` is `"object"`.
- **Literals [P]:** string (3 notations), numeric (number or bigint, bases
  `0x 0b 0o`, exponent `1e3`, `1_000`), boolean, `null`, object `{}`, array
  `[]`, regular-expression `/../` (an object, not a string).
- Primitives have **wrapper objects** (where `"abc".length` comes from) but
  are not objects. Three object subtypes with special syntax: Array, RegExp,
  Function. Objects need no class [P].

**Traps.** `typeof null`; `NaN === NaN`; `isNaN("abc")` is `true` while
`Number.isNaN("abc")` is `false`; `0.1 + 0.2 !== 0.3`; `5.toString()` is a
SyntaxError (`5..toString()` works).

**Self-check**
1. List the 8 types. 2. `typeof typeof 1`? *(`"string"`.)* 3. Difference
   `null`/`undefined`? *(programmer's "empty" vs "never assigned".)*

### 2.6 Interaction: alert, prompt, confirm
- `alert(msg)` → returns `undefined`. `prompt(title, [default])` → typed
  **string**; `""` if empty OK; **`null`** if cancelled. `confirm(q)` →
  `true`/`false`.
- All **modal**: block the page; position/look set by the browser. Bad
  practice in real pages [P]; fine for learning; prefer `console.log`.
- `prompt` returns text, so arithmetic needs conversion
  (`+prompt(...)` / `Number(...)`).

**Self-check.** What does `prompt` give on Esc? *(`null`.)*

### 2.7 Type conversions [P] (he: "the more you learn in long-term memory, the better")
Terms: automatic = implicit; explicit = you wrote it; "coercion" (MDN:
implicit) vs "casting".
- **To string:** `String(v)` or implicit (`alert`, `+` with a string,
  template). `null` → `"null"`, `[1,2]` → `"1,2"`, `{}` → `"[object Object]"`.
- **To number:** `Number(v)` or unary `+v`; implicit in math **except
  binary `+` with a string**, and in comparisons.

  | value | → number |
  |---|---|
  | `undefined` | `NaN` |
  | `null` | `0` |
  | `true` / `false` | `1` / `0` |
  | string | trimmed; `""`/spaces → `0`; else parse; failure → `NaN` |
  | `[]`, `[5]`, `[1,2]`, `{}` | `0`, `5`, `NaN`, `NaN` |

  `Number("0xa")` = 10, `Number("1,5")` = `NaN`. `"12" - 2` = 10 (no
  string meaning for `-`). `parseInt("12px")` = 12; `Number("12px")` = NaN.
- **To boolean:** `Boolean(v)` / `!!v`; implicit in `if`, `while`, `?:`,
  `!`, `&&`, `||`. **Falsy (8):** `false 0 -0 0n "" null undefined NaN`.
  Everything else truthy: `"0"`, `" "`, `"false"`, `[]`, `{}`, functions.
- `+` is polysemic: any string operand → concatenation; evaluated left to
  right: `1 + 2 + "3"` = `"33"`, `"1" + 2 + 3` = `"123"`.

**Traps.** `"5" + 2` vs `"5" - 2`; `null + 1` = 1 but `undefined + 1` = NaN;
`Boolean("0")` is true; `[] + {}`; `Number(null)` 0 (so a "weight" of `null`
passes unless checked).

**Self-check** (answers at the end): `"" + 1 + 0`, `"" - 1 + 0`,
`"4px" - 2`, `true + false`, `Number("  7 ")`, `Boolean(" ")`.

### 2.8 Basic operators, maths
- Terms: **operand**, **unary** (1), **binary** (2), **ternary** (3,
  `?:`, ES name "conditional operator").
- Maths: `+ - * / % **`. `%` is the **remainder** (sign of the dividend):
  `-5 % 3` = `-2`; parity: `n % 2 === 0`. `**` allows fractional exponents;
  `-2 ** 2` is a SyntaxError.
- `+` concatenates if any operand is a string; unary `+x` = `Number(x)`.
  Unary `+` binds tighter than binary `+`: `+"2" + +"3"` = 5.
- **Precedence [P]** (he diverges from jsinfo: "same precedence → left to
  right" is wrong; right-to-left: `**`, assignments, `?:`, `=>`, spread).
  High→low: `()` · member/call · postfix `++ --` · unary (`! ~ + - ++ --
  typeof`) · `**` · `* / %` · `+ -` · shifts · `< <= > >= in instanceof` ·
  `== != === !==` · `& ^ |` · `&&` · `||` `??` · assignment, `?:`, `=>` ·
  `,`. Advice: **use parentheses**, verify other people's code by adding them.
- **Assignment** is an operator returning the value, precedence 2,
  right-to-left: `a = b = 2 + 1` assigns 3 to both. **Modify in place:**
  `+= -= *= /= %= **=` (and `&&= ||= ??=`).
- **Increment/decrement:** need a variable (`5++` error). Postfix returns the
  **old** value, prefix the **new** one: `let a = 1; a++ + ++a` = 1 + 3 = 4.
- **Bitwise** operators exist (`& | ^ ~ << >> >>>`); not deep here.
- **Comma** operator: `(1 + 2, 3 + 4)` = 7; used in `for` heads.

**Traps.** `2 + "3" * 4` = 14; `2 ** 3 ** 2` = 512; `i = i++` leaves `i`
unchanged; `-7 % 3` = -1; `let a; a += 3` = NaN.

**Self-check.** `1 + 2 + "3"`? `"1" + 2 * 3`? `10 % 4`? `let x=1; x+=x++ + ++x`?

### 2.9 Comparisons
- Operators `> < >= <= == != === !==`, result boolean.
- **Strings** compare character by character by **Unicode code**, not a real
  dictionary: `"a" > "A"`, `"Z" < "a"`, `"apple" < "apple pie"`,
  `"2" > "12"`; `ñ`, `á` sort after `z` [P] (use locale-aware compare).
- **Different types** → both to numbers: `"2" > 1`, `"01" == 1`,
  `true == 1`, `false == 0`. `==` can't tell `0` from `""` or `false`;
  `===` (strict) doesn't convert → different type = false.
- **`null` / `undefined`:** `null == undefined` true; `null === undefined`
  false; `null == 0` **false** (== with them doesn't convert), but
  `null >= 0` **true** and `null > 0` false (relational converts null → 0);
  `undefined` converts to `NaN`, so every comparison with it is false.
- Objects compare by reference: `[] === []` false.
- Not transitive: `"" == 0`, `0 == "0"`, but `"" == "0"` is false.
- `NaN` compares false with everything (`NaN != NaN` true).
- `Object.is(a, b)`: like `===` but `NaN` equals `NaN`, `+0` ≠ `-0`.
- **His rule [P]:** use `===`/`!==`; the only coercions tolerated are
  truthy/falsy in conditions and explicit `Number()/String()/Boolean()`.
  Treat any comparison with `null/undefined` other than `===` with care;
  never `> < >= <=` on a variable that may be null/undefined.
- Chained: `3 > 2 > 1` is false (`true > 1`); `1 < 2 < 3` is true.

**Self-check.** `null == 0`, `null >= 0`, `"2" > "12"`, `undefined == null`,
`NaN == NaN`, `[] == []`.

### 2.10 Conditional branching: if, '?'
- `if (cond) stmt` converts `cond` to boolean. `if (0)`, `""`, `null`, `NaN`
  don't run; `"0"`, `[]` do. Use braces even for one statement. Never put
  `;` right after the condition. `if (x = 3)` assigns (always truthy): use
  `===`.
- **`else if`** is not special syntax [P]: `else { if ... }` written flat;
  avoid deep nesting.
- **Conditional operator `?:`**: `cond ? a : b`; expression equivalent of
  `if`, usable where a value is needed [P]. Don't write
  `age > 18 ? true : false` (use `age > 18`). Chain right-associatively
  (one `?:` per line, 2-space indent, ≤ 80 columns).
- **Non-traditional use** (running statements in branches) is not
  recommended [P]. `break`/`continue`/`return` can't appear in a branch
  (they're statements).

**Traps.** `if (x);`; assignment in the condition; ternary where an `if` is
clearer; `true ? false ? 1 : 2 : 3` = 2.

**Self-check.** Rewrite `if (a) b = 1; else b = 2;` as an expression.
*(`b = a ? 1 : 2;`)*

### 2.11 Logical operators [J]
- `||` OR, `&&` AND, `!` NOT. `||`/`&&` **return one of the operands**, not
  necessarily a boolean.
- `a || b || c`: first **truthy** value, else the last. Short-circuits
  (later operands aren't evaluated). `a && b && c`: first **falsy** value,
  else the last. Precedence: `!` > `&&` > `||`.
- `!!x` = `Boolean(x)`. Default values: `name = input || 'anonymous'` (but
  `||` replaces **any** falsy: see `??`). Don't use `cond && f()` instead of
  `if`.
- `alert(alert(1) || 2 || alert(3))` shows 1, then 2.

**Self-check.** `null || 2 && 3 || 4`? *(3.)* `1 && 0 && 2`? *(0.)*

### 2.12 Nullish coalescing `??` [J]
- `a ?? b` = `a` unless it's `null`/`undefined`, then `b`.
- Differs from `||`: `0 ?? 5` is `0`, `0 || 5` is `5`; `"" ?? "x"` is `""`.
- **Can't mix with `||`/`&&` without parentheses** (SyntaxError):
  `(a || b) ?? c`. `??=` assigns only when nullish.
- Default parameters cover only `undefined`; `??` also covers `null` [P].
- Typical: `value ?? 'Invalid'` where `0` must stay valid (the fine-of-0
  case in Section 2 of the exam).

**Self-check.** `null ?? undefined ?? 0`? *(0.)*

### 2.13 Loops: while and for
- `while (cond) body` checks **before**; `do body while (cond);` **after**
  (runs ≥ 1 time; `;` at the end); `for (begin; cond; step)` runs `begin`
  once, `cond` before each iteration, `step` after each body. Any part may
  be omitted (`for (;;)` infinite). Inline `let` is scoped to the loop.
- Any loop can be rewritten with another; choose the clearest [P].
- `break` leaves; `continue` goes to the next iteration. **In a `for`,
  `continue` still runs the step; in `while`/`do...while` it jumps to the
  condition**, so a decrement placed after it never runs → infinite loop [P].
  Not allowed to the right of `?` (statements).
- `while (true)` + `break` is legitimate [P]; clean state before leaving
  early.
- **Labels:** `outer: for (...) { for (...) { break outer; } }` /
  `continue outer`: the only way to leave an outer loop; only enclosing
  loops; "goto-ish", use only if the alternative is worse [P].
- `let i = 3; while (i--)` runs for 2,1,0; `while (--i)` for 2,1.

**Traps.** Off-by-one (`i < 15` vs `<= 15`); `i--` instead of `i++`; missing
increment; `;` after `for(...)`.

**Self-check.** How many times does `do { n++ } while (false)` run? *(1.)*

### 2.14 The "switch" statement [J]
- `switch (x) { case v1: ...; break; case v2: ...; default: ... }`.
- Matches with **strict equality** `===` (`"2"` ≠ `2`).
- Without `break`: **fall-through** to the next case (even into `default`).
  Stacked `case` labels share code (`case 'sat': case 'sun':`).
- `default` optional, any position. No match and no default → nothing happens.
- The `case` value can be any expression. A `let` in a case needs `{}`.
- His anti-example [P]: `switch (true) { case score < 20: ... }` works
  but is bad practice.
- Use `switch` for one value vs many discrete values; `if/else if` for
  ranges.

**Traps.** `case "sat"/"sun":` is a division (NaN, never matches); forgetting
`break`; `prompt` strings against numeric cases.

### 2.15 Functions
- *Declaration:* `function name(params) { body }`; call with `()`.
  "Declaration" strictly means this form [P].
- Names: verb saying what it does; one action per function.
- **Scope:** local, outer, global (minimise). A local with the same name
  **shadows** the outer. A parameter also shadows; a `let` with the
  parameter's name → SyntaxError [P].
- **Parameters** (in the declaration) vs **arguments** (passed in the call).
  Extra arguments ignored; missing = `undefined`. Optional parameters last.
  Primitives copied; objects by reference.
- **Defaults:** `function f(a, b = 'x')`. Apply only to **`undefined`**, not
  `null`, `""`, `0`. Evaluated per call, can use earlier parameters.
  Old forms: `if (b === undefined)`, `b = b || '..'` (any falsy!),
  `b = b ?? '..'`.
- **Return:** ends the function; none/empty → `undefined` [P]. **Never a
  newline after `return`** (ASI). Early returns are fine.
- **Three kinds [P]:** (1) pure value-returners (`add`), (2) doers with side
  effects returning `undefined` (`alert`), (3) both (`arr.pop()`). Ask of
  every function which one it is; decide when you design it.
- Functions that mutate globals (like writing to `answer`) are an
  anti-pattern; return the value instead.

**Traps.** `greet(null)` doesn't use the default; `return\n42` →
`undefined`; assigning to an outer var by accident (no local `let`).

### 2.16 Function expressions [J]
- A function is a **value**: `let f = function () {...};` (ends with `;`),
  copy it (`let g = f`), pass it as argument (**callback**, used a lot [P]).
  `f` is the function; `f()` calls it.
- **Declaration vs expression:** declarations are processed before execution
  (**hoisted**, callable above); an expression exists only once execution
  reaches it (`const f = function(){}` called earlier → ReferenceError/TDZ;
  `var` → "not a function"). Prefer declarations for readability; expressions
  for values/callbacks.
- Named function expression `function g() {}`: `g` visible only inside.

### 2.17 Arrow functions, the basics
- `(a, b) => a + b` (implicit return), `a => ...`, `() => ...`; a block
  body needs `return`.
- Returning an object literal needs parentheses: `() => ({ a: 1 })`;
  `() => { a: 1 }` is a block with a label → `undefined`.
- His summary [P]: declaration / expression / arrow are 3 syntaxes, all
  called alike; an alias (`const g = f`) is no call.
- `this` differences come later; not now.

### 2.18 JavaScript specials (his file: "2.16")
Recap: `;` and ASI; `'use strict'` at top; `let`/`const`; 8 types and
`typeof`'s quirks; `prompt/confirm/alert`; operators (arithmetic, assignment,
bitwise, `?:`, `||` `&&` short-circuit, `??`, comparisons, comma); loops and
labels; `switch`; functions (3 syntaxes, defaults, return). Reading it again
is a fast check of LANG2.

---

## CHAPTER 3 — Code quality (LANG3)
He opens: "I take my hat off... this should be incorporated **from the
beginning**, not as a patch afterwards." [P]

### 3.1 Debugging in the browser
- DevTools (F12): **Sources** panel (file navigator, editor, debugging pane),
  **breakpoints** (click the line number; conditional breakpoints; `debugger;`
  statement in code), **Call stack**, **Scope** (variable values), **Watch**.
- Controls: **resume** (F8), **step over** (F10), **step into** (F11),
  **step out** (Shift+F11), plus "don't step into library code".
- `console.log` is the quick alternative but leaves noise.
- Chrome article; Firefox is largely equivalent [P]. He won't ask about it
  directly, but you need it for any problem: "you can live without it, more
  like badly live". Do the tutorial in both browsers.

### 3.2 Coding style
- Syntax cheat sheet: braces on the same line as the keyword ("Egyptian
  style") with a space before `{`; space between `if` and `(`; no space
  between function name and `(`; operators spaced; semicolon after
  statements.
- **Line length** ~80–120; **indentation** 2 or 4 spaces (or tabs);
  **blank lines** to separate logical blocks; **nesting levels** shallow
  (use early `return`/`continue`).
- Function placement: code first, functions after (hoisting) vs functions
  first. Pick one.
- **Style guides:** Google, Airbnb, StandardJS (he uses **SemistandardJS** by
  default). **Linters:** ESLint, JSHint, JSLint: auto-check style.
- **His exam rules [P]:** 80 columns, 2-space indentation, **consistency**
  with your code or, when modifying existing code, with the style of what you
  touch. A linter would hide whether you know it; there is none in the exam,
  so train by eye.

### 3.3 Comments
- Bad comments explain *how* the code works line by line ("with a loop we
  iterate..."). Good ones: overview/architecture, function usage and
  parameters (JSDoc), and **why** a solution was chosen.
- Prefer "functions as comments": extract a well-named function instead of
  a comment; good names beat comments.
- **His view [P]:** agrees for seniors; **as a junior (and in class) better
  too many than too few**. Comment the *intention* of non-obvious code
  ("what for"), not a paraphrase. Plus the exam rule: `TODO:`, `FIXME:`,
  disclaimers, section markers.

### 3.4 Ninja code (sarcastic: do the opposite)
Sins: brevity is the soul of wit (cryptic one-liners); one-letter names;
abbreviations; "soar high" abstract names (`data`, `value`); similar names
(`data` vs `date`); synonyms (`display/show/print`); reuse names;
underscores for fun; "show your love" (inconsistent naming); overlap outer
variable names; **side effects** (a function `isReady()` that changes
state); **powerful functions** (a function doing too much).
- **His disclaimer [P]:** he does *some* in class: reuses variables in
  console demos, single-letter/`num` names in throwaway examples, dense
  one-statement expressions "to train your reading". **You don't in your
  answers.** Choose semantic names, with units when unclear
  (`alturaCm`, `pesoKg`).

### 3.5 Automated testing with Mocha
- Read only up to **BDD** [P]: why tests (to refactor safely, to document),
  and **Behavior-Driven Development** = tests + documentation + examples,
  written as `describe("what", () => { it("does", () => assert...) })`.
- His version: "Do you know an `if` and how to call a function? Then you
  know automatic unit tests: **Unit Test it, no excuses!**" [P]. So you
  write them by hand: a table of cases, run, print `| n | input | expected
  | actual | ok |`, and a final `Fails: X`. Compare with `Object.is` when
  `NaN`/`null` can appear.
- Dev flow: write test → see it fail → write code → pass → refactor with the
  tests as a safety net.

### 3.6 Polyfills and transpilers
- Old browsers lack new syntax/functions; solutions: **transpiler** (Babel)
  rewrites **syntax** to older syntax **before** production; **polyfill**
  adds a missing **function/feature** at run time (written in JS).
  Same idea for CSS.
- Frameworks do it for you: you forget (good) but lose control/understanding
  (bad) [P]. Real-development step before shipping; no practice yet.

---

## CHAPTER 4 — Objects: the basics (LANG4), only 4.1

### 4.1 Objects
- Objects store **keyed collections** (`key: value`) and more complex
  entities. Creation: **object literal** `let user = { name: 'John', age: 30 };`
  (preferred) or constructor `new Object()`.
- **Property** = `key: value`. Keys are strings (or symbols); values any type.
  Access: **dot** `user.name` or **square brackets** `user['name']`. Add
  `user.isAdmin = true`; remove with `delete user.age`.
- **Multiword keys** need quotes: `'likes birds': true`, and brackets to
  access: `user['likes birds']` (dot doesn't work).
- **Square brackets** accept any expression: `let key = prompt(...)`;
  `user[key]`. Dot can't use a variable name: `user.key` means the literal
  key "key".
- **Computed properties** in a literal: `{ [fruit]: 5 }`; more complex
  expressions allowed (`[fruit + 'Computers']`).
- **`const` object:** the binding is fixed, the contents are not
  (`const user = {}; user.name = 'x'` works).
- **Property value shorthand:** `{ name, age }` instead of
  `{ name: name, age: age }`; can be mixed with normal pairs.
- **Names limitations:** reserved words allowed as keys (`for`, `let`,
  `return`), unlike variable names; numeric keys are converted to strings
  (`obj[0]` = `obj["0"]`); the special `__proto__` can't be set to a
  non-object.
- **Existence test:** reading a missing property gives `undefined` (no
  error). `"key" in obj` tests existence (left side a **string**, the key
  name). `obj.key === undefined` fails when the property exists with value
  `undefined`; `in` is the correct test.
- **`for...in`:** iterates the keys: `for (let key in obj) { obj[key] }`
  (declare the variable inline).
- **Ordering:** integer-like keys are sorted **ascending**; other keys keep
  **creation order**. (A `+` trick: prefix numbers `"+49"` to stop integer
  sorting.)
- Objects are copied **by reference** (detail in 4.2, but already the rule
  from 2.4) [P]: `let a = {}; let b = a;` both point to one object; `==`
  and `===` compare references.
- jsinfo tasks: `isEmpty` (loop with `for...in`; return false on the first
  key), sum numeric properties, multiply numeric values by 2.
- Relation to arrays/functions: arrays and functions are also objects [P];
  objects are created without classes.

**Traps.** `user.key` vs `user[key]`; missing quotes on multiword keys; `in`
with a non-string left side; key order with numeric keys; `const` ≠
immutable; `typeof {}`/`[]`/`null` are all `"object"`.

**Self-check**
1. `{a:1}.b`? *(undefined, no error.)* 2. `'b' in {a:1}`? *(false.)*
3. Keys order of `{ b:1, 2:1, a:1, 1:1 }`? *(`1,2,b,a`.)*
4. Write `{ name: name, age: age }` shorthand. *(`{ name, age }`.)*

---

## Answers to the Part II self-checks (the numeric ones, run in Node)

- `"" + 1 + 0` = `"10"`; `"" - 1 + 0` = `-1`; `"4px" - 2` = `NaN`;
  `true + false` = `1`; `Number("  7 ")` = `7`; `Boolean(" ")` = `true`.
- `1 + 2 + "3"` = `"33"`; `"1" + 2 * 3` = `"16"`; `10 % 4` = `2`;
  `let x=1; x += x++ + ++x` → `5`.
- `null == 0` false; `null >= 0` true; `"2" > "12"` true;
  `undefined == null` true; `NaN == NaN` false; `[] == []` false.
- `null ?? undefined ?? 0` = `0`; `null || 2 && 3 || 4` = `3`.

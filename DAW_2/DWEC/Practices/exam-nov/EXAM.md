# DWEC Exam 1 (November) — "Library fines"

Unofficial, modelled on forum thread 451828 (the two instruction PDFs) and
the professor's habits. Scope: jsinfo LANG1 + LANG2 + LANG3 + LANG5.2 +
LANG5.4 + his comments + git. **Total time: 3 h** (Part A 2h30 + Part B 30 min;
the order is yours). Conditions: computer, empty local user, **no USB**, no
internet, only the docs on the desktop + your own printed/handwritten notes.
Answers: `SOLUTIONS.md` (don't open until you have tried).

---

# PART A — Code exercise (like `dwec1p4`) · 2h30

## General

Create on the desktop a folder

    dwec1p5/

containing, apart from the hidden `.git/`, **only** the requested files.

**Delivery.** On the desktop create a zip named (lower-kebab-case, your first
surname then your name):

    dwec1p5.your-surname.your-name.zip

with only the folder `dwec1p5/` at its root. Hand it in as instructed.

**Git.** The folder is under git, default modern branch (`main`). Save
progressively following Conventional Commits, atomic commits and the good
practices seen in class, at least at the end of each section (more
intermediate commits allowed).

If you do not follow the order of the sections, think about what that may
affect. You may fix or improve earlier sections after doing later ones.

At the START of each commit message (after the Conventional Commits tag) put
the section number in parentheses, e.g. `feat: (*3) add ...`. More commits
for the same section: `(*3.1)`, `(*3.2)`. Several sections: `(*3.3,*4)`.
After the parentheses, the rest of the message.

**Comments.** Comment where convenient following class practice. Mark which
section each zone of your code belongs to:

    // 3

To delimit a zone more explicitly, add a start mark `// 3 {{` and an end
mark `// 3 }}`.

**Valid for every section (and counted in each one):**

- Good practices, among others:
  - DRY. Consistent, concise style, as long as it is understandable.
  - No needless inefficiency.
  - Semantic names for variables, functions, etc.
  - Not needlessly ad-hoc (not tailored to the concrete cases). Within
    reason, extensible to future changes.
  - 2-space indentation, at most 80 characters per line.
  - Modern JS style (`'use strict'` is assumed even when not asked).
- As you go, the pending things are valued when commented in the right place:
  - `TODO:` what you cannot do, do differently from the instructions, do
    partially, or skip for now.
  - `FIXME:` something you did but has a bug.
  - After the tag, write the message you would use in the future commit that
    solves it. When solved: remove the comment and use its message for the
    commit (adapting the tag to Conventional Commits).
  - If you skip a section entirely a `TODO:` may be unnecessary, but if in
    the end you have no time, a `TODO:` is worth more than nothing.
- Disclaimers: if the statement is ambiguous, or you deviate from it, or you
  use something not seen in class (Google, AI, docs), **say so in a comment**.
- New functionality must not break old functionality. If it does, choose
  (depending on your time) between fixing it, marking it with `FIXME:`, or
  commenting out the new thing and marking it `TODO:`.

## The task: "Library fines"

Requested files:

    library.html
    scripts/library/main.js
    scripts/library/uts.js
    scripts/library/uts.html

(Weights shown are suggestions for your time, not official.)

### Section 1 — Setup and numbers (LANG2 + 5.2) · 15 %

Create `library.html` from this template. Write your code **only** in the
marked zone. You may add `'use strict';` as the first line of the script (it is
not "below the line"). Do not touch anything else.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>library</title>
  </head>
  <body>
  </body>
  <script src="scripts/library/main.js"></script>
  <script>
    let totalNum;
    let endsInZeroCent;
    // Add your code here
    //{{-------------------------------------------------------
    //}}-------------------------------------------------------
    // Don't edit the code below here!
    const p = document.createElement('p');
    p.textContent =
      `Total: ${ totalNum } (ends in zero cent? ${ endsInZeroCent })`;
    document.querySelector('body').appendChild(p);
  </script>
</html>
```

1. Create constants `dailyRate = 0.35`, `daysLate = 17`, `discount = 0.15`.
2. Compute `dailyRate * daysLate * (1 - discount)`.
3. Round it to **2 decimals as text** (`totalText`). If `typeof` says it is a
   string, convert it to a **number** and store it in `totalNum`.
   Expected page text: `Total: 5.06`.
4. In `endsInZeroCent` store whether the last digit of the amount **in cents**
   is `0`. Work with integers; no decimal-precision surprises.
   Expected: `false`.
5. Comment (disclaimer): what happens with `0.1 + 0.2`, and whether you need
   to worry about it here. Say too where your `'use strict'` is and why.

### Section 2 — Conditionals, `??` and ambiguous spec (LANG2) · 20 %

In `scripts/library/main.js` (loaded by `library.html` **before** the inline
script) declare `fineFor(daysLate, isMember)`:

| days late | rate per day (EUR) |
|---|---|
| 1 to 7 | 0.20 |
| 8 to 30 | 0.35 |
| 31 or more | 0.50 |

- `0` days late: the fine is `0` (a valid result).
- Not a number (`NaN`, a string, ...) or negative: invalid, return `null`.
- The fine never exceeds **15**.
- Members get **15 % off**. `isMember` is optional and **defaults to `false`**.
- Round the result to 2 decimals and return a **number**.

**Warning:** the table does not say whether a rate applies to *all* the days
or only to the days inside its band. Choose one reading, **implement it
consistently and write a disclaimer** saying which one and why.

Do not hard-code the numbers in a pile of `if`s; the bands must be easy to
change. Then, in `library.html`, show the fine for 10 days as a member and
the text `Invalid days` when the function returns `null`, using the `??`
operator (no `if`), and explain in a comment why not `||`.

### Section 3 — Conditional operator and `switch` (LANG2) · 10 %

1. `lateness(days)` returns `'on time'` (<= 0), `'late'` (<= 7),
   `'very late'` (<= 30) or `'lost'`, with **one single expression**
   (chained `?:`), formatted legibly within 80 columns.
2. `loanDays(kind)` with a `switch`: `'book'` and `'comic'` -> 21,
   `'dvd'` -> 7, `'game'` -> 3, anything else -> 14. **No duplicated
   `return 21`.** Comment that choice (what is it called and what danger
   does it have?).

### Section 4 — Loops (LANG2) · 15 %

1. With a `for`, build the sequence `n:fine` for n = 1..10 (using
   `fineFor`) and print it to `console` as ONE line joined by spaces.
2. Obtain **exactly the same line** with a `while` and with a `do...while`,
   **without repeating** how each item is built (DRY). Print `true`/`false`
   for each "same as the `for` one?".
3. Print, in one line joined by commas, the products `a * b` for
   `a, b` in 1..4 in row order, but **stop all the loops at once** (labelled
   `break`) as soon as a product is greater than 9.

### Section 5 — Arrays (LANG5.4) · 15 %

Given `const daysList = [0, 3, 12, 45, 9];`

1. `fines`: the fine of each element (`map`), without modifying `daysList`.
2. Keep only the fines greater than 0 and add them up (`filter` + `reduce`).
   Show the sum with 2 decimals.
3. A **numerically** sorted copy of `daysList`, leaving `daysList` untouched.
   Comment what `[10, 9, 1].sort()` gives and why.
4. Comment what `const alias = daysList; alias.pop();` does to `daysList` and
   write the safe way to get an independent copy.

### Section 6 — Functions (LANG2) · 5 %

1. Arrow function `greet(name, msg)` with defaults `'reader'` and `'Hello'`,
   returning `"Hello, reader!"` style text.
2. Does `greet(null)` use the default? Prove it and comment.
3. Comment which of function declaration / function expression can be
   called before the line where it is written, and when you prefer each.

### Section 7 — Unit tests (as in dwec1p3) · 15 %

In `scripts/library/uts.js` + `uts.html` (loads `main.js`, then `uts.js`):

1. Log a 2-line header, then **one line per test** with
   `| n | days | member | expected | actual | ok |`.
2. At least 10 cases: boundaries (0, 1, 7, 8, 30, 31), the cap, `NaN`,
   negative, a string, member and non-member.
3. Last line: `Fails: X` (X = number of failures).
4. Adding a test must be a one-line change (table-driven).
5. Introduce a bug on purpose in `main.js` (e.g. `<` instead of `<=`),
   check that your UT catches it, then fix it with a proper `fix:` commit.

### Section 8 — Git (the history is graded) · 5 %

1. At least one commit per section with the right tag and `(*n)`.
2. Do a `git revert` of one commit on purpose and explain in its message
   why revert and not reset.
3. Leave at least one honest `TODO:`.

### Section 9 — "Idea" (small weight, extra) · up to 5 %

Without `if`, without loops, without converting to string, write an
expression/function that returns the **number of digits** of a positive
integer `n`. Comment the case it does not handle.

---

# PART B — Theory/practice (jsinfo + his comments only) · 30 min

## B.1 V / F  — each ERROR subtracts one correct answer (per section / RA)

Circle V or F (don't underline, don't write the letter). Blank = no penalty.
You may cross out to rectify, and justify between the lines (never against
you; it can save a penalty, but something must be circled).

1. ( V / F ) `'use strict'` written after the first statement of a script does
   nothing, and gives no error.
2. ( V / F ) `let a; let a;` in the same scope is allowed.
3. ( V / F ) `typeof null` is `"object"`.
4. ( V / F ) `"6" / "2"` gives the number `3`.
5. ( V / F ) `+""` is `0` and `+" 12 "` is `12`.
6. ( V / F ) `parseInt("12px")` is `12`, but `Number("12px")` is `NaN`.
7. ( V / F ) `Number.isNaN("abc")` is `true`.
8. ( V / F ) `NaN !== NaN` is `true`.
9. ( V / F ) `null == 0` is `false`, yet `null >= 0` is `true`.
10. ( V / F ) `"" ?? "x"` gives `"x"`.
11. ( V / F ) `0 || null ?? 1` (no parentheses) is a SyntaxError.
12. ( V / F ) `1 && 0 && 2` gives `0`, and `1 && 2` gives `2`.
13. ( V / F ) `"B" < "a"` is `true`.
14. ( V / F ) `let x; if (x = 3) {}` is allowed and leaves `x` equal to `3`.
15. ( V / F ) A `switch` with no matching `case` and no `default` throws.
16. ( V / F ) After `for (let i = 0; i < 3; i++) {}`, reading `i` throws a
    ReferenceError.
17. ( V / F ) `const x;` (no value) is a SyntaxError.
18. ( V / F ) `() => ({ a: 1 })` returns an object.
19. ( V / F ) Calling `f()` before the line `const f = function () {};` throws.
20. ( V / F ) `(12.34).toFixed(1)` returns the number `12.3`.
21. ( V / F ) `Math.round(-2.5)` is `-2`.
22. ( V / F ) `const a = [1]; a[5] = 1;` makes `a.length` equal to `6`.
23. ( V / F ) `[10, 9, 1].sort()` gives `[1, 9, 10]`.
24. ( V / F ) `splice` modifies the original array; `slice` does not.
25. ( V / F ) An assignment handed in a couple of hours late still gets a
    reduced mark, not zero.
26. ( V / F ) `Fix: Bug.` is a valid Conventional Commit message as taught.
27. ( V / F ) `TODO:` marks something that has a bug and `FIXME:` something
    skipped.
28. ( V / F ) When modifying existing code you should follow its existing
    style (e.g. quotes), even if you would choose another.
29. ( V / F ) If jsinfo and the professor's comments disagree, jsinfo wins.
30. ( V / F ) `alert()` is good practice in real Web pages; jsinfo uses it
    only because it is good style.

## B.2 Gaps (no penalty; default value = one V/F; `(x2)` = double)

31. A bit of code that produces a value is an ______________; `if` is a
    ______________.
32. `Number("")` gives ______, `Number("a")` gives ______, `Number(true)`
    gives ______.
33. `"3" * "4"` gives ______, `"3" + "4"` gives ______, `3 + 4 + "5"` gives
    ______.
34. `10 % 4` gives ______, `2 ** 3 ** 2` gives ______, `-7 % 3` gives ______.
35. (x2) The 3 ways of adding JS to an HTML page are: ______________,
    ______________ and ______________ (the last one is bad practice).
36. `(7).toFixed(2)` gives ______ (type ______) and `parseFloat("3.14abc")`
    gives ______.
37. `Math.max()` with no arguments gives ______ and `Math.min()` gives ______.
38. `[1,2,3].at(-1)` gives ______, `[1,2,3].indexOf(4)` gives ______.
39. (x2) Conventional Commits tags: for a change that does not alter
    behaviour ______; for adding tests ______; for a bug fix ______.
40. (x2) `let x = 1; x += x++ + ++x;` leaves `x` equal to ______.
41. `do { n++ } while (false)` runs its body ______ time(s).
42. `` `${1}${"a"}${[1,2]}` `` gives ______.

## B.3 Short answers

43. A `'use strict'` that is in the wrong place gives no error. How do you
    detect it, and what was the professor's reasoning for "let it bite now"?
44. You find a requirement that is ambiguous or unsolvable as stated. What do
    you do, and why does it score better than staying silent?
45. When (if ever) would you accept `==` in code?
46. Why is `(1.005).toFixed(2)` surprising, and what two things must you
    remember about `toFixed`?
47. What is an atomic commit? Give a counter-example. Why `revert` and not
    `reset` for a commit already shared?
48. **Idea (small weight):** write one expression `ok(x)` true only for
    integers >= 0 (so it rejects `"3"`, `NaN`, `1.5`, `-1`).

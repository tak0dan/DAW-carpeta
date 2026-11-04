# Solutions — DWEC Exam 1 (November)

Code of Part A: `ref/` (runs; checked with Node, tests print `Fails: 0`).
Code claims of Part B: `node check.js` (prints `all ok`).
Where I say "he looks for", it is my **inference** from the forum (see
`GUIDE.md`), not an official rubric.

## Part A

### Section 1
See `ref/library.html`. Key points:
- `'use strict';` as the **first statement** of the script. Placed after the
  `let`s it silently does nothing (thread 445134). Test: `a = 3` must throw.
- `0.35 * 17 * 0.85` is `5.057499999999999` (not `5.0575`): `toFixed(2)` gives
  `"5.06"`, a **string** -> `Number(...)`.
- Cents: `Math.round(totalNum * 100) % 10 === 0` -> `506 % 10 = 6` -> `false`.
  Without `Math.round`, `5.06 * 100` can be `505.99999...`.
- Disclaimer: `0.1 + 0.2 = 0.30000000000000004`; irrelevant here because we
  round to 2 decimals before using the value.

### Section 2 (`ref/scripts/library/main.js`)
- Bands as a data table `TIERS` + `MAX_FINE` + `MEMBER_DISCOUNT` (no magic
  numbers, extensible).
- **Chosen reading: progressive** (each rate only for the days inside its
  band). Hand-checks: 7 d = 1.40; 8 d = 1.75; 30 d = 9.45; 31 d = 9.95;
  42 d = 15.45 -> cap 15. The other reading ("all days at the band's rate")
  is also fine **if written down and applied consistently**: that is what
  is graded (it is the `loops3` "unsolvable as stated -> reasoned compromise"
  pattern).
- Validation: `typeof !== 'number'`, `Number.isNaN`, `< 0` -> `null`.
  `Number.isNaN('abc')` is `false` (no conversion), so the `typeof` check
  is also needed for strings. `0` is **valid** and returns `0`.
- Round: `Math.round(fine * 100) / 100` (a number; `toFixed` would give a
  string).
- `fineFor(x) ?? 'Invalid days'`: `??` reacts only to `null`/`undefined`.
  With `||`, a valid fine of `0` would be shown as `Invalid days`.

### Section 3
- Chained `?:` formatted one level per line (see ref).
- `switch` with stacked `case 'book': case 'comic':` = **fall-through**.
  Danger: a forgotten `break`/`return` makes the next case run too, silently.
  Here it is intentional, so comment it as such.

### Section 4
- Helper `fineLine(n)` builds each item; the three loops only differ in the
  loop mechanism. Output of the `for`:
  `1:0.2 2:0.4 3:0.6 4:0.8 5:1 6:1.2 7:1.4 8:1.75 9:2.1 10:2.45`
- Watch the `while` counter: increment inside (`w++`) or it never ends.
- Labelled break output: `1,2,3,4,2,4,6,8,3,6,9`.

### Section 5
Expected values: `fines = [0, 0.6, 3.15, 15, 2.1]`, `sum.toFixed(2)` =
`20.85`, sorted copy `[0, 3, 9, 12, 45]`.
- Numeric sort: `[...daysList].sort((a, b) => a - b)`. Plain `.sort()`
  compares as strings: `[10, 9, 1]` -> `[1, 10, 9]`. `sort` mutates, so
  copy first (`[...x]` or `x.slice()`).
- `alias = daysList` copies the **reference**: `alias.pop()` changes
  `daysList` too. Independent copy: `[...daysList]` / `slice()`.

### Section 6
`greet(null)` -> `"Hello, null!"`: defaults apply for `undefined`, not for
`null`. Declarations are hoisted (callable before); `const f = function`
is in the TDZ before its line (ReferenceError).

### Section 7 (`ref/scripts/library/uts*`)
Table `CASES`, `Object.is` for comparing (so `NaN` and `null` expectations
work), final `Fails: 0`. Mutation check: change `<=`/`Math.min` boundaries
in `main.js`, rerun: some `ok` must turn `false`; then a `fix: (*7) ...`.

### Section 8 — an acceptable history
```
feat: (*1) add fine total and cents check
feat: (*2) add fineFor with tiers and cap
fix: (*2) reject non-number days
feat: (*3) add lateness and loanDays
feat: (*4) add three equivalent loops and labelled break
feat: (*5) add array processing of fines
feat: (*6) add greet with defaults
test: (*7) add table-driven unit tests
fix: (*7.1) use <= at the 7 days boundary
revert: (*3) undo switch change
```
(Tag list per the git doc: feat, fix, refactor, test, docs, chore, revert...)
Revert vs reset: revert adds a new commit and keeps history truthful and
safe for shared history; reset rewrites it.

### Section 9
`const digits = (n) => Math.floor(Math.log10(n)) + 1;` Does not handle
`n = 0` (-Infinity), negatives or non-integers; `log10` float error near
huge powers of 10 -> disclaim.

## Part B

### B.1
| # | Ans | Why |
|---|---|---|
| 1 | V | Not first statement = plain expression string; silent. |
| 2 | F | SyntaxError. |
| 3 | V | Historic bug. |
| 4 | V | `/` converts both to numbers. |
| 5 | V | `""` -> 0; whitespace is trimmed. |
| 6 | V | `parseInt` reads a prefix; `Number` is strict. |
| 7 | F | `Number.isNaN` does not convert: `false`. |
| 8 | V | The only value not equal to itself. |
| 9 | V | `==` special rule; `>=` converts null to 0. |
| 10 | F | `??` keeps `""`. |
| 11 | V | Mixing `??` with `||`/`&&` needs parentheses. |
| 12 | V | Returns first falsy or last operand. |
| 13 | V | Compared by code points: uppercase first. |
| 14 | V | Assignment is an expression (a lint would warn). |
| 15 | F | Does nothing. |
| 16 | V | `let` is block-scoped to the `for`. |
| 17 | V | `const` needs an initial value. |
| 18 | V | Parentheses make `{}` an object, not a body. |
| 19 | V | TDZ. |
| 20 | F | `toFixed` returns a **string**. |
| 21 | V | Rounds half towards +Infinity. |
| 22 | V | Sparse array; length 6. |
| 23 | F | `[1, 10, 9]` string order. |
| 24 | V | |
| 25 | F | He said late = **zero** ("even a couple of hours"). |
| 26 | F | Lowercase after tag, imperative, no final period; also tag lowercase. |
| 27 | F | Swapped: `TODO` = not done/partial, `FIXME` = done but buggy. |
| 28 | V | Consistency with the codebase (his quotes comment). |
| 29 | F | "What I say goes": his comments have the last word. |
| 30 | F | Bad practice in real pages; forgiven in jsinfo for immediacy. |

Score hint: every error cancels a correct answer, so circle only what you
could defend; add a one-line justification when unsure.

### B.2
31 expression / statement · 32 `0`, `NaN`, `1` · 33 `12`, `"34"`, `"75"` ·
34 `2`, `512`, `-1` · 35 external, internal, inline handlers ·
36 `"7.00"`, string, `3.14` · 37 `-Infinity`, `Infinity` ·
38 `3`, `-1` · 39 `refactor`, `test`, `fix` · 40 `5` (1 + (1 + 3)) ·
41 `1` · 42 `"1a1,2"`.

### B.3 (what he looks for)
43. `a = 3` right after the declaration: with strict it throws a
    ReferenceError, otherwise it creates a global silently. "We want things
    to bite us now to learn better"; silent failures are technical debt.
44. Choose a reading, implement it, write a **disclaimer/`TODO:`** and, if
    useful, ask in the forum early (title `practiceid: question?`). Conscious
    decision beats silence, even a wrong one.
45. Only `x == null` (matches `null` and `undefined`), deliberately and
    commented; otherwise `===`.
46. `(1.005).toFixed(2)` is `"1.00"` (binary 1.00499...), and `toFixed`
    returns a **string** (convert back with `Number`).
47. One commit = one topic. Counter-example: "feat: add header, fix bug in
    footer and rename vars". Revert is safe on shared history.
48. `const ok = (x) => Number.isInteger(x) && x >= 0;`
    (`Number.isInteger("3")` is `false`, so no `typeof` is needed.)

# 08 - The assigned tasks, dissected (dwec1p2 and dwec1p3)

Reference code lives in `reference/ut-refactor/`; the logic of every task is
asserted in `tools/tasks-check.js` (`node tools/tasks-check.js`). These are
**study references**: write your own first, in exam conditions, then compare.

Rules of the game (from `dwec1p2-instr.md`):

- Insert code **only** between the `//{{----` and `//}}----` markers.
- If you need something not yet taught: **comment that you did, and the
  source**.
- "Try hard to do them for yourself, in exam's conditions." Ask if something
  doesn't fit.
- Marking (10): math1 1, math2 1, math3 1, conditionals1 1, **conditionals2
  3**, conditionals3 1.5, loops3 1.5, and **up to -5** for wrong
  formats/names/structure.

## math1.html - four numbers, product 48, even test

Steps: four sensible-named variables; `a + b`; `c - d`; product into
`finalResult` (48); `evenOddResult` to say whether it's even.

```js
const firstAddend = 3;
const secondAddend = 5;
const minuend = 10;
const subtrahend = 4;
const sum = firstAddend + secondAddend;          // 8
const difference = minuend - subtrahend;         // 6
finalResult = sum * difference;                  // 48  (no `let`!)
evenOddResult = finalResult % 2;                 // 0 means even
```

Traps:
- `finalResult`/`evenOddResult` are pre-declared: assign, don't `let`.
- The template tests `evenOddResult === 0`. `finalResult % 2 === 0` stores
  `true`, and `true === 0` is false -> prints "odd. Hrm.".
- "Use your logic": 48 = 8 * 6; choose inputs deliberately.
- Names like `a1`, `num` lose points ("something sensible").
- Printing the right text is *necessary but not sufficient*.

## math2.html - shorthand, toFixed, typeof

```js
result *= result2;                              // assignment shorthand
const finalResult = result.toFixed(2);          // STRING '4633.33'
let finalNumber;
if (typeof finalResult === 'string') {
  finalNumber = Number(finalResult);            // 4633.33 (number)
}
```

Traps:
- The template defines `result`/`result2` with `let`; `finalResult` and
  `finalNumber` are **not** declared in the template: declare them yourself,
  at top level, **not inside the `if` block** (the code below reads
  `finalNumber`; block scope would make it a ReferenceError).
- `7 + 13 / 9 + 7` -> division first (15.4444...). `100 / 2 * 6` = 300
  (left to right).
- `toFixed` returns a string; `+finalResult` or `Number(finalResult)`
  converts. `parseFloat` also works, but `Number` is what he teaches.
- `<title>math3</title>` in the math2 template is just his copy-paste.

## math3.html - tests as booleans

```js
const weightComparison = eleWeight < mouseWeight;  // false
const heightComparison = ostrichHeight > duckHeight; // true
const pwdMatch = pwd1 === pwd2;                      // false
```

Traps: statement 1 is **false** ("elephant weighs *less*"); passwords differ
by case, so `===` gives false; do not lowercase them. Strict equality, not
`==`. Expected paragraphs: "False", "True", "False".

## conditionals1.html - season

```js
if (season === 'summer') {
  response = 'It is summer: enjoy the sun!';
} else if (season === 'winter') {
  response = 'It is winter: wrap up warm.';
} else {
  response = 'I do not know what season it is.';
}
```

Trap: two separate `if`s with their own `else` -> the second `else`
overwrites the summer answer (see `season1Bug` in `tasks-check.js`).
Assert both seasons plus a non-season value.

## conditionals2.html - worth 3 points: the big one

Requirements: outer `if...else` on `machineActive` (message if off), inner
nested `if...else` on `score`:

| Score | Response (exact text!) |
|---|---|
| < 0 or > 100 | `This is not possible, an error has occurred.` |
| 0-19 | `That was a terrible score - total fail!` |
| 20-39 | `You know some things, but it's a pretty bad score. Needs improvement.` |
| 40-69 | `You did a passable job, not bad!` |
| 70-89 | `That's a great score, you really know your stuff.` |
| 90-100 | `What an amazing score! Did you cheat? Are you for real?` |
| machine off | `Please switch the machine on.` |

Original-task shape (nested, as the sheet demands):

```js
if (!machineActive) {
  response = 'Please switch the machine on.';
} else {
  if (score < 0 || score > 100) {
    response = 'This is not possible, an error has occurred.';
  } else if (score < 20) {
    response = 'That was a terrible score - total fail!';
  } else if (score < 40) {
    response = "You know some things, but it's a pretty bad score. " +
      'Needs improvement.';
  } else if (score < 70) {
    response = 'You did a passable job, not bad!';
  } else if (score < 90) {
    response = "That's a great score, you really know your stuff.";
  } else {
    response = 'What an amazing score! Did you cheat? Are you for real?';
  }
}
```

The hidden bugs (the UT task says "we should find some if we look deep
enough"):

1. **Gaps with closed integer intervals.** `score >= 0 && score <= 19`
   then `>= 20 && <= 39` leaves 19.5, 39.5, 69.5, 89.5 falling through to
   the final `else` -> "What an amazing score!". Use ascending **upper
   bounds only** (`< 20`, `< 40`, ...).
2. **`NaN`** (e.g. `Number('abc')`) makes every comparison false -> lands in
   the *last* branch, the best message. Guard it explicitly.
3. **Wrong types**: `prompt()` gives `'75'` (works by coercion), `''` (->
   `0`, "terrible"), `null` on cancel (-> `0`), `'abc'` (-> `NaN`). Decide
   (and test) what the function does for non-numbers. The reference rejects
   non-number types.
4. **`machineActive`**: `=== false` would treat `undefined`/`null` as "on";
   `!machineActive` treats them as off. The string `'false'` is truthy either
   way, so decide the contract (boolean only) and test it.
5. **Exact text/punctuation**: the sheet shows `it\\'s` (Markdown escaping).
6. Order: check the machine first, then range, then bands.
7. Infinity, `-0`, decimals like `100.5` and `-0.1`.

`score` being obtained with `prompt()`: convert with `Number(...)`, treat
`null` (cancel) separately before converting.

## conditionals3.html - single-line "not if-else"

```js
machineResult = machineActive ? 'The machine is on.' : 'The machine is off.';
if (machineActive) {
  pwdResult = pwd === 'cheese' ? 'Login successful.' : 'Login failed.';
}
```

Traps: `pwdResult` should only be set when the machine is on (the second
conditional only runs "if the machine is on"); the ternary is the "single
line, not if...else" tool (`&&`/`||` abuse is worse); `pwd = 'cheese'`
(assignment!) vs `===`; case-sensitive; the template there uses double
quotes (his style is not uniform: **you** stay consistent).

## loops3.html - primes backwards, three loops

`i = 500` is global; `isPrime` has its own `let i`, so it's safe. 2..500
backwards. Three equivalent loops, each printing the primes, with a newline
between lines.

```js
// 1) while: decrement BEFORE continue or it loops forever
while (i >= 2) {
  if (!isPrime(i)) {
    i--;
    continue;
  }
  text += i + ' ';
  i--;
}
text += '\n';

// 2) do..while: reset the shared counter first!
i = 500;
do {
  if (isPrime(i)) {
    text += i + ' ';
  }
  i--;
} while (i >= 2);
text += '\n';

// 3) for: continue still runs the step
for (i = 500; i >= 2; i--) {
  if (!isPrime(i)) {
    continue;
  }
  text += i + ' ';
}
```

Traps:
- The counter `i` is shared and ends at 1 after loop 1: **reset it** for the
  next loop.
- `continue` in `while`/`do..while` skips your decrement -> infinite loop.
  In a `for` it doesn't.
- `isPrime(1)` and `isPrime(0)` return `true`: that is why the range stops
  at 2.
- A trailing separator remains (`'2 '`); accept it or build with an array
  and `join`, but keep the three loops equivalent.
- `\n` in `textContent` is collapsed by HTML (shows as a space). The
  template (not editable) builds one `<p>`. To *see* separate lines put
  `document.body.style.whiteSpace = 'pre-line';` in your zone (inherited by
  the `<p>`), or comment the limitation.
- All three outputs must be identical; the "different types of loop" is the
  point.

## Delivery of dwec1p2

```text
01-math/math1.html math2.html math3.html
02-conditionals/conditionals1.html conditionals2.html conditionals3.html
03-loops/loops3.html
```

at the **root of the zip** `dwec1p2.first-surname.name.zip`
(ASCII, lowercase, kebab-case). No extra folders, no extra files. Notes ->
code comments or a lowercase English `readme.md` at the root.
`José Luís  NÚÑEZ DE BALBOA  GARCÍA` -> `nunez-de-balboa.jose-luis`.

---

# dwec1p3 - refactoring + unit testing of conditionals2 (and git)

Prerequisites (his words): LANG2 + LANG5.4 (arrays); you have tried the
conditionals2 task.

Goal: practise **atomic commits + Conventional Commits** while refactoring,
adding UTs, fixing bugs, and rolling back. Directory `ut-refactor/`, git
branch `main`.

## The ten commits (titles verbatim)

| # | Commit title | Content |
|---|---|---|
| 1 | `feat: initial from original conditionals2 (#1)` | copy `conditionals2.html`; **`<title>` starts with `first-surname.name `** e.g. `nunez-de-balboa.jose-luis Conditionals: Task 2` |
| 2 | `refactor: move code to function and external file (#2)` | `scripts/get-response/main.js` declares `getResponse(score, machineActive)`; HTML loads it **before** the script element; call it in the allowed slot; same output as before |
| 3 | `test: first 3 UT's with manual verification (#3)` | `uts.js` (empty at first) + `uts.html` (Emmet template, title `first-surname.name UT: getResponse()`, loads `main.js` then `uts.js`, relative paths). Log a Markdown-like table of **5 lines** |
| 3.1.. | `fix: pass UT number X (#3.1)` | **after** #3, only if your function failed; one commit per fix |
| 4 | `test: first 3 UT's with autoverification (#4)` | extra `Pass/Fail` field 2nd; expected/actual only on failures; blank line + `Fails: N` |
| 4.1 | `test: first 3 UT's with autoverification, more expandable (#4.1)` | optional: refactor `uts()` (array of cases + loop) *before* adding tests |
| 5 | `test: complete autoverified UT's. Fails: X (#5)` | many more tests; **do not fix bugs here**; X = number of failures |
| 6.n | `fix: pass UT number X (#6.1)` , `(#6.2)`... | one fix per commit; multiple tests fixed by one change -> `number 8, 10 and 11` |
| 7 | `refactor: use ternary for score in getResponse (#7)` | chain of ifs -> ternaries (score part) |
| 8 | `refactor: getResponse as a single expression (#8)` | body is one `return` of combined ternaries (machine check too) |
| 9 | `refactor: use switch for score in getResponse (#9)` | from the code of #6/#7: the `switch (true)` hack |
| 10 | `revert: "refactor: use switch for score in getResponse (#9)" (#10)` | rollback; mention the **reverted commit's title** |

Why the order: normally UT comes before refactoring, but the starting code
(inline in the HTML) can't be tested, so step 2 is the *enabling*
refactoring. The UT battery is the **safety net** for the rest ("have fun
and refactor, play, explore, with the safety net").

## Output format (be exact)

Step 3 (manual):

```text
| testNum | score | machineActive | expectedResponse | response |
|-|-|-|-|-|
| 1 | 75 | false | Please switch the machine on. | Please switch the machine on. |
```

Exactly 5 lines for 3 tests (2 header + 3). **Even if a line wraps on
screen it is one line**: one `console.log` per line, no `\n` inside.

Step 4+:

```text
| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |
|-|-|-|-|-|-|
| 1 | Fail | 75 | false | Please switch the machine on. | That's a great ... |
| 2 | Pass | 75 | true
| 3 | Fail | 150 | true | This is not possible, an error has occurred. | What an ... |

Fails: 2
```

- The separator row has **one more `|-|`** (6 fields).
- A passing row stops after `machineActive` (no trailing `|`).
- Blank line, then `Fails: ` + number.
- Capital `Pass` / `Fail`.
- Check that the UT works when tests **fail**: temporarily make the function
  `return 'hello'`, observe `Fails: N`, then roll that back.

A version of all this passes in Node
(`reference/ut-refactor/scripts/get-response/uts.js`; run through a tiny VM
harness that loads `main.js` and `uts.js` in one shared global scope, as
the browser does). A mutant that ignores `machineActive` and the `> 100` check
reproduces exactly the "Fail / Pass / Fail" output of the task sheet.

## Designing the test cases (his hints)

1. First imagine the score comes **directly from `prompt()`**; the machine
   state is known internally.
2. Then drop the assumptions: "called by any crazy programmer".
3. Cover: each band at its both edges (0, 19, 20, 39, 40, 69, 70, 89, 90,
   100), outside (-1, 101), **between** edges (19.5, 39.9), `NaN`, string
   numbers, `''`, `null`, `undefined`, `Infinity`, machine off with weird
   scores.
4. If none fails: "think twice before committing".

## Refactor #7 / #8 (ternaries)

```js
function getResponse(score, machineActive) {
  return !machineActive ? 'Please switch the machine on.'
    : (typeof score !== 'number' || Number.isNaN(score) ||
        score < 0 || score > 100)
      ? 'This is not possible, an error has occurred.'
      : score < 20 ? 'That was a terrible score - total fail!'
        : score < 40 ? "You know some things, but it's a pretty bad score. " +
          'Needs improvement.'
          : score < 70 ? 'You did a passable job, not bad!'
            : score < 90 ? "That's a great score, you really know your stuff."
              : 'What an amazing score! Did you cheat? Are you for real?';
}
```

(Compare with the `if` version in `tasks-check.js`: tested equal over a
grid of inputs.) Remember: 80 columns; the arrow function in the checker is
shorter, a declaration is what the task asks for.

## The `switch` hack (#9) and why it's reverted

```js
switch (true) {
  case score < 20: return '...';
  case score < 40: return '...';
  ...
  default: return '...';
}
```

Works because `switch` compares with `===` and each `case` expression is a
boolean. First matching case wins -> order matters. Revert it (new commit,
not history rewriting; `git revert <hash>` then reword the message to his
format).

## Delivery of dwec1p3

```text
ut-refactor/
  .git/
  conditionals2.html
  scripts/get-response/
    main.js
    uts.js
    uts.html
```

**Folder directly under the zip root, `.git/` included** (hidden folder!),
file `dwec1p3.first-surname.name.zip`. Only requested files.

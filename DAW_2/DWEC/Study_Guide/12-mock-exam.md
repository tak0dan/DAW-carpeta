# 12 - Mock exam, written the way he writes them **[inference]**

Conditions: paper or a plain text file, **no editor help, no linter, no
browser**, 80 columns, 2-space indent, `'use strict'`, `===`. Time yourself:
60-90 minutes. Part A answers were executed (`node tools/mock-check.js`).

---

## Part A - What does each snippet produce? (1 point each)

Write the **exact** value (a string with quotes, `undefined`, or the error
name). Each is a function body; `return` shows the result.

```js
// A1
return typeof typeof null + typeof NaN;
// A2
let x = "5"; return x + 1 - 1;
// A3
return `${1 + 1}${"1" + 1}${+"1" + 1}`;
// A4
return null ?? undefined ?? 0 || "z";
// A5
const o = [1, 2]; const p = o; p.length = 0; return o;
// A6
function f(a, b = a + 1, c = b * 2) { return [a, b, c]; }
return f(1, undefined, null);
// A7
let n = 0;
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  n += i;
}
return n;
// A8
let a = 1; { let a = 2; } return a;
// A9
return !!"0" + !![] + !!{} + !!NaN + !!null;
// A10
let a = 2, b = 3; return a + b * a ** 2 % b;
// A11
let i = 0; return i++ + i++ * ++i;
// A12
function f(x) {
  switch (x) { case 1: return "one"; case "1": return "str"; }
  return "none";
}
return [f(1), f("1"), f(true)];
// A13
let s = 0; for (let i = 10; i > 0; i -= 3) s += i; return s;
// A14
let c = 0; do { c++; } while (c < 3 && c !== 2); return c;
// A15
return [1 < 2 < 3, 3 > 2 > 1, "10" > "9", 10 > "9", null >= 0,
  undefined == null];
// A16
let r; function g() { r = "set"; } const v = g(); return [r, v];
// A17
const h = () => { v: 1 }; return h();
// A18
return (() => {
  return
  42;
})();
// A19
let t = "x"; t += 1 + 2; t += "1" + 2; return t;
// A20
return [typeof null, typeof undefined, typeof (() => 1),
  typeof class {}, typeof 1n];
```

<details><summary>Answers</summary>

| | |
|---|---|
| A1 | `'stringnumber'` (`typeof null` -> `"object"`, `typeof "object"` -> `"string"`) |
| A2 | `50` (`"51" - 1`) |
| A3 | `'2112'` (`2`, `"11"`, `2`) |
| A4 | `SyntaxError` (`??` mixed with `||` without parentheses) |
| A5 | `[]` (same array via two names) |
| A6 | `[ 1, 2, null ]` (`null` does not trigger the default) |
| A7 | `4` (1 + 3) |
| A8 | `1` (block scope) |
| A9 | `3` (`"0"`, `[]`, `{}` truthy) |
| A10 | `2` (`a ** 2` = 4; `3 * 4 % 3` = 0; 2 + 0) |
| A11 | `3` (`0 + 1 * 3`) |
| A12 | `[ 'one', 'str', 'none' ]` (strict comparison) |
| A13 | `22` (10 + 7 + 4 + 1) |
| A14 | `2` (stops at `c === 2`) |
| A15 | `[ true, false, false, true, true, true ]` |
| A16 | `[ 'set', undefined ]` |
| A17 | `undefined` (`{ v: 1 }` is a block with label `v:`) |
| A18 | `undefined` (ASI after `return`) |
| A19 | `'x312'` (`1 + 2` is 3, then `"1" + 2` = "12") |
| A20 | `[ 'object', 'undefined', 'function', 'function', 'bigint' ]` |

</details>

---

## Part B - Find the bugs (2 points each)

**B1** - Required: print "Even"/"Odd" for any integer, including negatives.

```js
function parity(n) {
  return n % 2 === 1 ? 'Odd' : 'Even';
}
```

**B2** - Required: the grade bands 0-4 fail, 5-6 pass, 7-8 notable, 9-10
excellent.

```js
if (grade >= 0 && grade <= 4) { r = 'fail'; }
else if (grade >= 5 && grade <= 6) { r = 'pass'; }
else if (grade >= 7 && grade <= 8) { r = 'notable'; }
else { r = 'excellent'; }
```

**B3** - Required: ask the user's age and print "adult" if >= 18.

```js
const age = prompt('Age?');
if (age >= 18) { alert('adult'); }
```

**B4** - Required: print the even numbers from 10 down to 1.

```js
let i = 10;
while (i > 0) {
  if (i % 2 !== 0) continue;
  console.log(i);
  i--;
}
```

**B5** - Required: default the page size to 10 only when it is not provided
(`0` is a valid value).

```js
function load(pageSize) {
  pageSize = pageSize || 10;
  return pageSize;
}
```

**B6**

```js
function area(r) {
  return
    3.14159 * r ** 2;
}
```

**B7**

```js
'use strict';
let total = 0;
function add(x) { totl += x; }
add(5);
```

**B8** - Required: "if the user typed `cheese`, say OK".

```js
if (pwd = 'cheese') { console.log('OK'); }
```

<details><summary>Answers</summary>

- **B1**: `-3 % 2` is `-1`, so negative odd numbers print "Even". Use
  `n % 2 === 0 ? 'Even' : 'Odd'` (and think about non-integers).
- **B2**: gaps. `4.5` is neither `<= 4` nor `>= 5`... it falls to the last
  `else` -> "excellent". Also values over 10/under 0/`NaN` get "excellent".
  Use ascending upper bounds and an explicit invalid branch.
- **B3**: `prompt` returns a **string** or `null`. `"20" >= 18` works through
  coercion (which he doesn't love); `null >= 18` is `false` but `""` -> `0`;
  `"abc"` -> `NaN` -> false silently. Convert explicitly:
  `const age = Number(prompt(...))` after handling `null`; validate `NaN`.
- **B4**: 10 is even: it prints and `i--` gives 9. At 9 the `continue` skips
  `i--`, so `i` stays 9 forever: **infinite loop**. Decrement before
  `continue` (or use a `for`, whose step always runs).
- **B5**: `||` replaces every falsy value, so `load(0)` returns `10`. Use
  `pageSize ?? 10` (also covers `null`) or a default parameter
  `load(pageSize = 10)` (only `undefined`). Choose by whether `null` must
  also mean "not provided".
- **B6**: ASI: `return;` then the expression is dead code -> returns
  `undefined`. Put the value (or an opening parenthesis) on the `return`
  line.
- **B7**: typo `totl`: in strict mode `ReferenceError` when `add` runs
  (sloppy mode would silently create a global). Also `total` is never
  updated; the bug only appears when the line **executes** (the JIT point:
  a linter/test catches it earlier).
- **B8**: `=` assigns (always truthy). `===`.

</details>

---

## Part C - Short theory (1-2 points each)

1. Give the three ways of adding JS to an HTML page and which is bad
   practice.
2. Explain statement vs expression. Which of these is **not** an
   expression: `a = 3`, `let a = 3`, `a ? b : c`, `f()`, `` `${x}` ``?
3. Why is `typeof null` `"object"`? Why does `typeof function(){}` return
   `"function"` if functions are objects?
4. List all falsy values. Is `"0"` truthy? Is `[]`?
5. Difference between `||` and `??`. Give an input where they differ.
6. Difference between function declaration, function expression and arrow
   function. Which can be called before its definition?
7. What are `null` and `undefined` for? Which one do you assign yourself?
8. Why do we use `===`? What coercion do we still accept?
9. What is a modal window? Which function returns `null` on Cancel?
10. Same Origin Policy: which of these are the same origin as
    `http://a.com/x`? `https://a.com`, `http://a.com:80/y`,
    `http://www.a.com`, `http://a.com/www/`.
11. What is JIT compilation and what practical consequence does it have for
    finding errors?
12. Transpiler vs polyfill.
13. SemVer: which number changes for (a) a bug fix, (b) a new backwards
    compatible function, (c) renaming a public function?
14. Name the Conventional Commits types you know and what `!` means.
15. Why do we write unit tests *before* a refactoring? What did the #9 `switch`
    teach?

<details><summary>Answers</summary>

1. External (`<script src>`), internal (`<script>` content), inline handlers
   (`onclick="..."`). Inline handlers = bad practice (outside modern
   component frameworks).
2. Expression produces a value; statement is an instruction. `let a = 3` is
   the only non-expression.
3. Historical bug kept for compatibility (`null` was tagged as an object
   pointer). Functions are objects, but `typeof` special-cases them as a
   convenience (also historical).
4. `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. `"0"` and
   `[]` are **truthy**.
5. `||` skips every falsy; `??` only `null`/`undefined`. `0 || 5` -> 5,
   `0 ?? 5` -> 0. Mixing needs parentheses.
6. Declaration (`function f(){}`) is hoisted -> callable earlier.
   Expression (`const f = function(){}`) and arrow (`const f = () => {}`)
   exist only after execution reaches them (before: ReferenceError/TDZ with
   `const`). Arrows have concise syntax and implicit return.
7. `undefined`: never assigned (default). `null`: deliberately empty/unknown.
   You assign `null`, not `undefined`.
8. No conversion surprises (`0 == ""`, `"" == "0"`...). Accepted: truthy/falsy
   in conditions and explicit `Number()`, `String()`, `Boolean()`.
9. A window that blocks the page until dealt with (`alert`, `prompt`,
   `confirm`). `prompt` returns `null` on cancel (`confirm` returns false).
10. `http://a.com:80/y` and `http://a.com/www/` are the same origin; `https`
    and `www.` are not.
11. Compiled just-in-time while running; errors in a branch are discovered
    only when execution reaches that line -> linter/typing/thorough unit
    tests.
12. Transpiler rewrites newer syntax to older before production; polyfill
    adds missing features at run time in JS.
13. (a) PATCH, (b) MINOR, (c) MAJOR.
14. `feat`, `fix`, `refactor`, `perf`, `docs`, `style`, `test`, `build`,
    `chore`, `ci`, `revert`. `!` = breaking change (MAJOR).
15. UTs are a regression safety net that let you refactor (even playfully)
    without fear. The `switch(true)` hack works by comparing booleans with
    `===` but is bad practice -> keep it out of the final code (revert).

</details>

---

## Part D - Write code (4 points each)

Style is graded: names, 80 columns, 2 spaces, `===`, `const`, comments of
**intent**, no leftovers.

**D1.** Write `bmi(alturaM, pesoKg)` that returns the body-mass index
(kg / m^2) rounded to **one decimal as a number** (not a string). Reject
non-positive or non-number inputs by returning `null`. Then write three UT
cases in his table format (with a `Pass`/`Fail` summary).

**D2.** Write `describeNumber(n)` using **a single expression** (nested
conditional operators, no `if`): `"not a number"` if `n` is not a number or
`NaN`, `"negative"`, `"zero"`, `"even"`, `"odd"`. Then rewrite it with
`switch (true)`, and say which version you'd keep and why.

**D3.** Print the multiplication table of 7 (7 x 1 ... 7 x 10) with **three
different loops** with identical output, one line per product, using template
literals.

**D4.** Given `let log = [];` and a function `f(msg)` that pushes `msg` to
`log` and returns `undefined`, what is `log` after
`f('a') || f('b') && f('c') ?? f('d')`? (Careful: is it even valid?)

<details><summary>Notes for self-marking</summary>

- **D1**: `Number((peso / (altura ** 2)).toFixed(1))`; validate with
  `typeof ... === 'number'`, `Number.isFinite`, `> 0`. Names with units are
  the point. Test: `bmi(1.75, 70)` -> `22.9`; `bmi(0, 70)`, `bmi('1.7', 70)`,
  `bmi(1.7, NaN)` -> `null`. Beware `toFixed` returning a string and float
  rounding.
- **D2**: `typeof n !== 'number' || Number.isNaN(n) ? 'not a number' : n < 0
  ? 'negative' : n === 0 ? 'zero' : n % 2 === 0 ? 'even' : 'odd'`. Think about
  `Infinity` and non-integers (`2.5 % 2` is `0.5` -> "odd": a hidden bug;
  decide and document). The `switch(true)` version is the hack; you'd keep
  the `if`/ternary one.
- **D3**: `for (let i = 1; i <= 10; i++)`, `while`, `do..while` (reset the
  counter between loops!). Identical output.
- **D4**: SyntaxError - `??` can't be mixed with `||`/`&&` without
  parentheses. Without the `?? f('d')`: `f('a')` returns `undefined`
  (falsy) so the `&&` group runs `f('b')` -> `undefined` stops it; `f('c')`
  never runs: `log` is `['a', 'b']`.

</details>

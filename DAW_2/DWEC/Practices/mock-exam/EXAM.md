# DWEC mock exam (unofficial, modelled on forum thread 451828)

Built from: the two exam-instruction PDFs (code part + V/F/gaps part), the
teacher's `jsinfo-lang-*-comments`, dwec1p2/dwec1p3 and the git doc.
Scope: LANG1 + LANG2 + LANG3 + LANG5.2 (numbers) + LANG5.4 (arrays) + git.
Solutions are in `SOLUTIONS.md`: **don't open until you have tried.**

Suggested timing: Part A 2h30 (the real code part), Part B ~45 min.
Real exam conditions: no internet, only the docs on the desktop + your own
printed/handwritten notes.

---

# PART A: Code exercise (like `dwec1p4`)

## General (same as the real one; summary of the PDF)

- Desktop folder `dwec1p4/` (+ hidden `.git/`), only the requested files inside.
- Git on the default modern branch (`main`). Commit at least at the end of
  every section: **Conventional Commits, atomic**, with the section number
  right after the tag, in parentheses: `feat: (*3) add ...` (tag, then
  `(*3)`, then the message; my reading of the PDF, confirm it in class). 
  More commits
  in the same section: `(*3.1)`, `(*3.2)`. Several sections: `(*3.3,*4)`.
- In the code, mark which section each zone belongs to: `// 3`, or bounded
  with a start and an end mark.
- Good practices (count for every section): DRY, semantic names, not ad-hoc,
  no needless inefficiency, 2-space indent, 80 columns, modern JS,
  `'use strict'`.
- Pending things: `// TODO:` (not done / done differently / partial / skipped),
  `// FIXME:` (done but buggy). The text after the tag is the commit message
  you would write to fix it.
- New features must not break old ones: fix, mark `FIXME:`, or comment out
  the new thing with a `TODO:`.
- Zip: `dwec1p4.your-surname.your-name.zip` with only the folder `dwec1p4/` at
  its root.

## Task: "Parcel shop"

Files requested: `parcel.html`, `scripts/shipping/main.js`,
`scripts/shipping/uts.js`, `scripts/shipping/uts.html`.

### Section 1: Setup and numbers (LANG2 + 5.2)
Create `parcel.html` from this template and add your code only in the marked
zone.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>parcel</title>
  </head>
  <body>
  </body>
  <script>
    let totalNum;
    let isEvenCents;
    // Add your code here
    //{{-------------------------------------------------------
    //}}-------------------------------------------------------
    // Don't edit the code below here!
    const p = document.createElement('p');
    p.textContent = `Total: ${ totalNum } (even cents? ${ isEvenCents })`;
    document.querySelector('body').appendChild(p);
  </script>
</html>
```

1. Create constants `price = 19.99`, `units = 3`, `vatRate = 0.21`.
2. Compute the total with VAT: `price * units * (1 + vatRate)` and store it.
3. Round it to **2 decimals as text** (`totalText`). If `typeof` says it is a
   string, convert it to a **number** and store it in `totalNum`.
   Expected: `72.56`.
4. In `isEvenCents`, store whether the amount in **cents** (integer) is even,
   without ever having a decimal-precision problem. Expected: `true`.
5. Add a comment (disclaimer) saying what happens with `0.1 + 0.2` and why
   you do (or do not) need to worry about it here.

### Section 2: Conditionals (LANG2)
In `scripts/shipping/main.js` (loaded by `parcel.html` **before** the inline
script) declare `shippingCost(weightKg, isMember)`:

| weight (kg) | cost (EUR) |
|---|---|
| <= 0, or not a number | invalid -> return `null` |
| up to 1 (incl.) | 3 |
| over 1, up to 5 | 6 |
| over 5, up to 20 | 12 |
| over 20 | 25 |

- Members pay half. `isMember` is optional and **defaults to `false`**.
- Use an `if / else if` chain, no repeated `isMember` logic.

Then, in `parcel.html`, show the cost for a 5.1 kg parcel and a member, and
the text `Invalid weight` when the function returns `null`, using the `??`
operator (no `if`).

### Section 3: Conditional operator and switch (LANG2)
1. Add `describeWeight(kg)` that returns `'light'` (< 2), `'medium'`
   (< 10) or `'heavy'` using **one single expression** (nested `?:`),
   formatted legibly in 80 columns.
2. Add `dayType(day)` with a `switch` over `'mon'..'sun'`:
   `'sat'`/`'sun'` -> `'weekend'`, `'fri'` -> `'almost weekend'`, anything
   else -> `'weekday'`. No duplicated `return` bodies.
3. Say in a comment when you would prefer `switch` over `if/else if` and why.

### Section 4: Loops (LANG2)
1. Print (to `console` as ONE joined line) the FizzBuzz sequence 1..15
   (multiples of 3 -> `Fizz`, of 5 -> `Buzz`, of both -> `FizzBuzz`) using a
   `for`.
2. Get **exactly the same line** with a `while` and with a `do...while`,
   **without repeating** the Fizz/Buzz logic (DRY).
3. Print the primes up to 30 using a labelled `continue`.

### Section 5: Arrays (LANG5.4)
Given `const cart = [];`:
1. Add `12.5` and `3` at the end, and `1` at the start, in 2 statements.
2. Remove the first and the last element and keep both in constants.
3. Compute the sum and mean (1 decimal, as text) of `[4, 8, 15]` using
   `for...of`.
4. Explain in a comment what `const copy = cart; copy.push(9);` does to `cart`
   and write the safe way to get an independent copy.

### Section 6: Functions (LANG2)
1. Write `greet(name, greeting)` as an arrow function, with defaults
   `'stranger'` and `'Hello'`, returning `"Hello, stranger!"` style text.
2. Write the same as a function **expression** (named) and as a
   **declaration**. Comment which one is hoisted and when you would use each.
3. Does `greet(null)` use the default? Prove it with a test and comment.

### Section 7: Unit tests (like dwec1p3)
In `scripts/shipping/uts.js` + `uts.html` (loads `main.js` then `uts.js`):
1. Log a header (2 lines) and then **one line per test** with
   `| testNum | weight | isMember | expected | actual | ok |`.
2. At least 8 cases: boundaries (0, 1, 1.01, 5, 20, 20.01), `NaN`, negative,
   member and non-member.
3. Final line: `Fails: X` (X = number of failures, in one line).
4. Make adding a test a one-line change (table-driven: array of cases).
5. Intentionally introduce a bug in `main.js` (e.g. `<` instead of `<=`),
   check your UT detects it, then fix it with a proper `fix:` commit.

### Section 8: Git (history is graded)
1. Your history must show at least one commit per section with the right
   tag and `(*n)`.
2. Do a `revert` of one commit on purpose (e.g. the `switch` change) and
   explain in the commit message why a revert instead of a reset.
3. Leave at least one honest `TODO:` for something you did not finish.

---

# PART B: Theory/practice (V/F + gaps; only jsinfo + his comments)

## B.1 V/F rules (as in the PDF)
Circle V or F (don't underline, don't write the letter). **Each error
subtracts one correct answer** (limited to this section and per RA).
Blank = no penalty. You may cross out to rectify and may justify between
the lines (only helps). 24 items, 20 min.

1. ( V / F ) `"use strict"` placed after the first statement of a script still
   enables strict mode for the rest of the script.
2. ( V / F ) The `null` value has `typeof` equal to `"null"`.
3. ( V / F ) `let` variables can be declared twice in the same scope.
4. ( V / F ) `const arr = []; arr.push(1);` throws an error.
5. ( V / F ) `"5" - 2` gives `3`, but `"5" + 2` gives `"52"`.
6. ( V / F ) `NaN === NaN` is `true`.
7. ( V / F ) `Number.isNaN("abc")` is `true`.
8. ( V / F ) `null == undefined` is `true`, and `null === undefined` is `false`.
9. ( V / F ) `null >= 0` is `true`.
10. ( V / F ) `Boolean("0")` is `false`.
11. ( V / F ) `0 ?? 'x'` gives `'x'`.
12. ( V / F ) `a || b` returns the first truthy operand, or the last operand if
    none is truthy.
13. ( V / F ) `"2" > "12"` is `true`.
14. ( V / F ) In a `switch`, comparison between the value and each `case` is 
done with strict equality.
15. ( V / F ) A `break` in a `switch` case is optional; without it execution
    "falls through" to the next case.
16. ( V / F ) `0.1 + 0.2 === 0.3` is `true` in JS.
17. ( V / F ) `(1.005).toFixed(2)` returns a number.
18. ( V / F ) `**` has higher precedence than `*`, and is right-associative.
19. ( V / F ) A function that has no `return` returns `null`.
20. ( V / F ) Default parameters apply when the argument is `undefined`, but not
    when it is `null`.
21. ( V / F ) `[1, 2] === [1, 2]` is `true`.
22. ( V / F ) `typeof []` is `"array"`.
23. ( V / F ) `unshift()` adds at the end of an array and `push()` at the start.
24. ( V / F ) Coding style asked by the teacher: 2-space indentation and 80
    columns, and consistency with the existing style when modifying code.

## B.2 Gaps (no penalty; default value = one V/F; `(x2)` = double)

25. A statement that produces a value is called an ______________; `if`
    is a ______________.
26. `Number(undefined)` gives ____________ and `Number(null)` gives ________.
27. The 8 JS data types are: number, bigint, string, boolean, ____________,
    ____________, object, symbol.
28. `1 + 2 + "3"` gives ________ and `"1" + 2 + 3` gives ________.
29. (x2) Write the 6 falsy values (jsinfo level): ___________________________
30. In a Conventional Commit the tag for changing code without changing
    behaviour is ________, for adding a test ________, and for a bug fix
    ________.
31. The operator that gives the remainder is ______ and `-10 % 3` gives ____.
32. `let x; alert(x);` shows ____________; the safe way to say "no value
    on purpose" is to assign ____________.
33. (x2) `"use strict"` was kept opt-in because of ______________________;
    modules and classes are strict ______________.
34. Method that removes and returns the first element of an array:
    ______________. Its mirror at the end: ______________.
35. `5 / 0` gives ______________ and `typeof` of that value is ________.
36. In the `?` operator the form is `condition ? ____ : ____`, and when
    chained it should be formatted ______________.

## B.3 Short answers (write something short)

37. Explain in 2 lines why `isNaN()` was called "totally wrong" in math2 and 
what to use instead.
38. Why is "atomic commit" a good practice? Give a counter-example.
39. When is `//` better than `/* */`, and what kind of comment should you
    avoid (jsinfo + teacher's view)?
40. Name 3 things that make code "ad-hoc" and how to avoid each.
41. What is the difference between statement and expression? Give two
    examples of each.
42. "Idea" question (small grade): write an expression that, with no `if`
    and no loop, tells if an integer `n` is a multiple of 3 **or** 5 but
    **not** of both.

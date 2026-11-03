# Solutions for the mock exam (all JS snippets were run in Node)

## Part A: reference code

### Section 1 (`parcel.html` zone)
```js
'use strict'; // put at the top of the <script>, before everything
// 1
const price = 19.99;
const units = 3;
const vatRate = 0.21;
// 1
const total = price * units * (1 + vatRate); // 72.5637
const totalText = total.toFixed(2); // "72.56": toFixed returns a STRING
totalNum = typeof totalText === 'string' ? Number(totalText) : totalText;
// Even cents: work with integers to avoid float issues.
isEvenCents = Math.round(totalNum * 100) % 2 === 0; // 7256 -> true
// Disclaimer: 0.1 + 0.2 is 0.30000000000000004 (binary floats). Here we
// round to 2 decimals before using it, so it is not a problem.
```
Points the teacher looks for: `'use strict'`, `const`, `toFixed` returns a
string, the `Math.round` (without it `72.56 * 100` may be `7255.999...`), no
magic numbers, and the disclaimer.

### Section 2 (`scripts/shipping/main.js`)
```js
'use strict';
const shippingCost = (weightKg, isMember = false) => {
  if (Number.isNaN(weightKg) || weightKg <= 0) return null;
  let cost;
  if (weightKg <= 1) cost = 3;
  else if (weightKg <= 5) cost = 6;
  else if (weightKg <= 20) cost = 12;
  else cost = 25;
  return isMember ? cost / 2 : cost;
};
```
In `parcel.html` (script tag with `src` **before** the inline one):
```js
const cost = shippingCost(5.1, true); // 6
console.log(cost ?? 'Invalid weight');
```
Warnings: `typeof weightKg !== 'number'` is also fine for "not a number".
`isNaN("abc")` converts first, `Number.isNaN("abc")` does not (it would
be `false`): if strings can come in, check `typeof` too.
`??` only reacts to `null`/`undefined`, which is why the function returns
`null` for invalid input (a `0` cost would NOT trigger the message).

### Section 3
```js
const describeWeight = (kg) =>
  kg < 2 ? 'light'
  : kg < 10 ? 'medium'
  : 'heavy';

const dayType = (day) => {
  switch (day) {
    case 'sat':
    case 'sun':
      return 'weekend';
    case 'fri':
      return 'almost weekend';
    default:
      return 'weekday';
  }
};
```
`switch` is better when comparing ONE value against several constant
values (strict `===`) and grouping cases; `if/else if` when conditions are
ranges or different variables.

### Section 4
```js
const fizzBuzz = (n) =>
  n % 15 === 0 ? 'FizzBuzz'
  : n % 3 === 0 ? 'Fizz'
  : n % 5 === 0 ? 'Buzz'
  : n;
const LAST = 15;

const viaFor = [];
for (let i = 1; i <= LAST; i++) viaFor.push(fizzBuzz(i));

const viaWhile = [];
let w = 1;
while (w <= LAST) viaWhile.push(fizzBuzz(w++));

const viaDo = [];
let d = 1;
do viaDo.push(fizzBuzz(d++)); while (d <= LAST);

console.log(viaFor.join(' '));
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

const primes = [];
nextN: for (let n = 2; n <= 30; n++) {
  for (let div = 2; div * div <= n; div++) {
    if (n % div === 0) continue nextN;
  }
  primes.push(n);
}
console.log(primes.join(',')); // 2,3,5,7,11,13,17,19,23,29
```
Efficiency point: test divisors only up to `sqrt(n)` (`div * div <= n`).

### Section 5
```js
const cart = [];
cart.push(12.5, 3); // [12.5, 3]
cart.unshift(1); // [1, 12.5, 3]
const first = cart.shift(); // 1
const last = cart.pop(); // 3  -> cart is [12.5]
let sum = 0;
for (const p of [4, 8, 15]) sum += p; // 27
const mean = (sum / 3).toFixed(1); // "9.0" (a string!)
// const copy = cart; copy.push(9) mutates cart too: arrays are objects
// and `=` copies the REFERENCE, not the content.
const safeCopy = [...cart]; // or cart.slice()
```

### Section 6
```js
const greet = (name = 'stranger', greeting = 'Hello') =>
  `${greeting}, ${name}!`;
const greetExpr = function greetNamed(name = 'stranger', g = 'Hello') {
  return `${g}, ${name}!`;
};
function greetDecl(name = 'stranger', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}
console.log(greet()); // Hello, stranger!
console.log(greet(undefined, 'Hi')); // Hi, stranger!
console.log(greet(null)); // Hello, null!  <- default NOT used
```
Declarations are hoisted (usable before their line); expressions/arrows
are not (they behave like the variable that holds them).

### Section 7 (`uts.js`, table-driven)
```js
'use strict';
const cases = [
  // [weight, isMember, expected]
  [0, false, null], [-2, false, null], [NaN, false, null],
  [1, false, 3], [1.01, false, 6], [5, false, 6],
  [20, false, 12], [20.01, false, 25], [21, true, 12.5], [0.5, true, 1.5],
];
console.log('| testNum | weight | isMember | expected | actual | ok |');
console.log('|-|-|-|-|-|-|');
let fails = 0;
cases.forEach(([weight, isMember, expected], i) => {
  const actual = shippingCost(weight, isMember);
  const ok = Object.is(actual, expected);
  if (!ok) fails++;
  console.log(`| ${i + 1} | ${weight} | ${isMember} | ${expected} | ` +
    `${actual} | ${ok} |`);
});
console.log(`Fails: ${fails}`);
```
(`forEach` is beyond LANG5.4 if you want to be strict: a `for (const [i, c]
of cases.entries())` or an indexed `for` is safe.) `Object.is` vs `===`:
only matters for `NaN` results.
Bug hunt: `weightKg < 1` instead of `<= 1` makes test 4 fail -> `Fails: 1`.

### Section 8: suggested history
```text
feat: (*1) compute total with vat in parcel.html
feat: (*2) add shippingCost in external script
refactor: (*3) describe weight with nested ternary
feat: (*3.1) add dayType with switch
feat: (*4) fizzbuzz with three loop types
feat: (*5) cart operations with arrays
feat: (*6) greet in three function styles
test: (*7) add table-driven unit tests for shippingCost
fix: (*7.1) include 1 kg in the first weight tier
revert: (*3.1) "feat: (*3.1) add dayType with switch"
```
`revert` instead of `reset`: it **adds** a commit that undoes the change,
keeps history intact and is safe if the commit was already shared; `reset`
rewrites history. Commit titles: lowercase after the tag, imperative, no final
period, no body (his rules in 450636/453133).

Sample honest TODO:
```js
// TODO: test: (*7) add cases for string weights ("5") once decided if
// they should be accepted
```

---

## Part B answers

### V/F
1. **F**: only at the very top; elsewhere it is a silent no-op.
2. **F**: `"object"` (historical bug).
3. **F**: SyntaxError.
4. **F**: `const` fixes the binding, not the content.
5. **V**.
6. **F**.
7. **F**: no conversion, `"abc"` is not the number NaN.
8. **V**.
9. **V** (`>=` converts `null` to 0; `==` does not).
10. **F**: non-empty string -> `true`.
11. **F**: `0` is not null/undefined -> `0`.
12. **V**.
13. **V**: string comparison, `"2" > "1"`.
14. **V**.
15. **V**.
16. **F**.
17. **F**: returns a string.
18. **V**.
19. **F**: `undefined`.
20. **V**.
21. **F**: different references.
22. **F**: `"object"`; use `Array.isArray`.
23. **F**: swapped.
24. **V**.

### Gaps
25. expression; statement.
26. `NaN`; `0`.
27. undefined, null.
28. `"33"`; `"123"`.
29. `0`, `""`, `null`, `undefined`, `NaN`, `false` (also `0n`, `-0`).
30. `refactor`; `test`; `fix`.
31. `%`; `-1` (sign of the dividend).
32. `undefined`; `null`.
33. backwards compatibility (same code would change behaviour); by default.
34. `shift()`; `pop()`.
35. `Infinity`; `"number"`.
36. `condition ? A : B`; one case per line, indented (ternary chain).

### Short answers (key points)
37. `isNaN(x)` converts `x` to number first, so `isNaN("abc")` is `true`
    even though `"abc"` is not `NaN`; use `Number.isNaN` (no coercion). It is a
    LANG5.2 thing; in math2 the template uses it on a value that must be a
    number.
38. One commit = one topic, so it can be read, reverted or cherry-picked
    separately. Counter-example: a commit that mixes a bug fix, a rename and a
    new feature (revert one = lose all).
39. `//` for single lines and commenting out code quickly; `/* */` for
    multi-line blocks. Avoid comments that say *what* the code does line by
    line; comment *intent* / decisions / disclaimers (he allows more than
    senior level while you are junior).
40. e.g. magic numbers (-> constants), hard-coded sizes or names (-> parameters),
    copy-pasted branches per case (-> data table / loop), assuming one input
    type.
41. Expression produces a value (`3 + 4`, `a ? b : c`, `f()`); statement
    performs an action (`let x = 1;`, `if (...) {...}`, `for`). An expression
    can be used where a value is expected.
42. `(n % 3 === 0) !== (n % 5 === 0)` (XOR of two booleans).
    Alternative: `n % 15 !== 0 && (n % 3 === 0 || n % 5 === 0)`.

---

## How I'd use these
- Do Part A with a timer and in a clean folder, in the exact git format.
- Grade yourself on the **process**: commits, `TODO:`/`FIXME:`, disclaimers.
- For Part B, apply the penalty rule honestly: score = correct - wrong
  (blank = 0).
- Note: I based style rules on the PDFs/comments in the repo; I haven't seen
  the actual simulacro statement, so the sections are a guess at the shape,
  not a leak of the real exam.

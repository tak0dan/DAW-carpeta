# Section 1 review: your attempt, the correct one, and the missing themes

Files (all in this folder):

| File | What it is |
|---|---|
| `scripts/shipping/main_tak0.js` | Your attempt, saved untouched |
| `parcel_tak0.html` | Your `parcel.html` (still the bare template) saved untouched |
| `parcel.html` | **Correct Section 1**, with the reasoning in comments |
| `scripts/shipping/main.js` | Now only a placeholder for Section 2 |

Every output quoted below was produced by running it in Node.
Things I take from the professor's comment files are marked **[Dani]**.
Everything else is general JS/MDN knowledge that I add; it is the
same behaviour, but he may phrase or scope it differently.

---

# 1. What went wrong in your attempt (and how to fix each point)

Your code (`main_tak0.js`):

```js
let total;
total = (price * units * (1 + vatRate));
let totalText = total.toFixed(2);
let totalNumber;
if(typeof(totalText) == "string"){
    totalNumber = totalText.toInteger;
}
let isEvenCents;
if(total%2 === 0){ isEvenCents = true; }else{ isEvenCents = false; }
// DISCLAIMER: (What does that part of task even means?)
```

| # | Problem | Why it matters | Fix |
|---|---|---|---|
| 1 | **Code is in `main.js`, not in the marked zone of `parcel.html`** | The page prints `totalNum` / `isEvenCents` from the template. You never set `totalNum`, so the page shows `undefined`. | Section 1 goes in the `Add your code here` zone. `main.js` is for Section 2. |
| 2 | `let isEvenCents;` in `main.js` **and** in the template | Classic `<script>`s share one global scope; `let` can't be declared twice. **I ran both files together: `SyntaxError: Identifier 'isEvenCents' has already been declared`**. The page crashes. | Assign (`isEvenCents = ...`), don't redeclare. Template variables are already declared. |
| 3 | Wrong variable name `totalNumber` | The task and template say `totalNum`. | Use the names in the statement exactly. |
| 4 | `totalText.toInteger` | There is no `toInteger` in JS. Reading a missing property is not an error, it just gives `undefined` (I ran it: `undefined`), and without `()` it wouldn't be a call anyway. So `totalNumber` ends `undefined`. **A silent failure** (the kind he hates, see §8). | `Number(totalText)` (or unary `+totalText`, **[Dani]** says it is the short form of `Number()`). |
| 5 | `total % 2` | `total` is `72.5637` (a decimal). `72.5637 % 2` = `0.5636999999999972`, so `=== 0` is `false`. **Wrong answer**: expected `true`. Also you tested the unrounded amount and the euros, not the **cents**. | Parity is for integers: `Math.round(totalNum * 100) % 2 === 0` (7256 -> even). |
| 6 | `if (...) { x = true } else { x = false }` | A comparison is already a boolean. This is the classic redundant pattern (DRY / concise, from the exam's good-practice list). | `isEvenCents = <comparison>;` |
| 7 | No `'use strict'` | **[Dani]** says it is assumed in all the code ("easy to forget"), even when not told. It must be the **first statement** of the script, or it silently does nothing. | Put it first in the script (disclaimer comment, because it is outside the zone). |
| 8 | `typeof(totalText) == "string"` | `typeof` is an operator, not a function: the parentheses are legal but misleading. `==` allows coercion; the course uses strict `===`. | `typeof totalText === 'string'` |
| 9 | `let` for things that never change; `let total;` then `total = ...` on the next line | Prefer `const`; declare and initialise together. | `const total = ...;` |
| 10 | Indentation 4 spaces, `if(`, `}else{` | Exam rule: **2 spaces**, 80 columns, consistent style. | `if (cond) {` / `} else {` (or no `else` at all, see 6) |
| 11 | Disclaimer: "What does that part of task even means?" | Step 5 asked you to *comment what happens with `0.1 + 0.2` and why you do or don't need to worry*. Not understanding is OK, but a question goes in a `// TODO:` or in the forum, not in a disclaimer. | See the disclaimer in `parcel.html`, and theme 6 below (floating point). |
| 12 | No `// 1` section marks, no `TODO:`, no commits | The exam grades the process: section marks, `(*1)` in commits, honest `TODO:`s. | `// 1 (start)` / `// 1 (end)`; `feat: (*1) compute total with vat`. |

Also: you never used the `typeof` guard the way it is meant. `toFixed()`
**always** returns a string, so the `if` is always true; the task asks
for the check anyway (it is a conversion exercise).

Verified result of the correct file:
`Total: 72.56 (even cents? true)`

---

# 2. Themes you are missing (full explanations)

Your slip in point 4 and point 5 shows the gap: **type conversion and
numbers**. The lists below cover the whole topics, not only `toX()`.
Exam scope **[Dani]**: LANG1 + LANG2 + LANG3 + LANG5.2 (numbers) + LANG5.4
(arrays) + git, and "his comments have the last word over jsinfo".

## Theme A: Data types

### A.1 The 8 types
JS has **7 primitives** and **1 non-primitive**:

| Type | Example | `typeof` |
|---|---|---|
| number | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| bigint | `10n` | `"bigint"` |
| string | `'a'`, `"a"`, `` `a` `` | `"string"` |
| boolean | `true`, `false` | `"boolean"` |
| undefined | `undefined` | `"undefined"` |
| null | `null` | **`"object"`** (historical bug, never fixed) |
| symbol | `Symbol('id')` | `"symbol"` |
| object | `{}`, `[]`, `new Date()`, `/re/` | `"object"` |
| (function) | `() => 1`, `class A {}` | `"function"` |

- A function is an object, but `typeof` reports `"function"` (extra
  category in the operator, not a 9th type).
- **Arrays are objects**: `typeof [] === 'object'`. Use
  `Array.isArray(x)` to detect them.
- JS is **dynamically typed**: a variable has no type, its *value* does.
  `let a = 1; a = 'x';` is legal.
- `typeof NaN === 'number'`, `typeof Infinity === 'number'`.

### A.2 `typeof`
- It is an **operator** (`typeof x`), also callable-looking
  `typeof(x)` (just parentheses around the operand).
- Always returns a **string** (so `typeof typeof 1 === 'string'`).
- **Does not throw for undeclared variables**: `typeof nope` is
  `"undefined"`, while reading `nope` throws `ReferenceError`.
- Limits: cannot distinguish `null`, array, date, regex, `new Number(1)`
  (all `"object"`). For `null` use `x === null`; for arrays
  `Array.isArray`.

### A.3 `undefined` vs `null` **[Dani]**
- `undefined` = "no value was put": declared-but-unassigned variables,
  missing function arguments, missing object properties, a function
  without `return`.
- `null` = "empty/unknown **on purpose**", put there by the programmer.
- His advice: leave `undefined` for what the engine produces, assign
  `null` yourself when you want "nothing".
- Loose equality: `null == undefined` is `true`, but
  `null === undefined` is `false`. Neither equals `0`, `''` or `false`
  with `==` (`null == 0` is `false`).
- `null` / `undefined` have **no methods**: `null.toString()` throws
  `TypeError`.

### A.4 Primitives vs objects (LANG5.1 idea, background to 5.2)
- Primitives are immutable values, compared **by value**:
  `'a' === 'a'` is `true`. Strings can't be modified in place
  (`s[0] = 'x'` is ignored, or an error in strict mode).
- Objects/arrays are compared **by reference**:
  `[1] === [1]` is `false`; `const b = a` does not copy.
- Primitives "have" methods (`(5).toFixed(2)`, `'a'.toUpperCase()`)
  because JS temporarily wraps them in an object (`Number`, `String`, ...)
  and throws the wrapper away. Never use `new Number(1)` /
  `new Boolean(false)` yourself: they are **objects**, so
  `typeof new Number(1) === 'object'` and `new Boolean(false)` is
  **truthy**.
- `Number(x)`, `String(x)`, `Boolean(x)` **without `new`** are conversion
  functions and return primitives.

## Theme B: Type conversion ("casts"): the whole picture

Vocabulary **[Dani]**: *implicit* = automatic; *explicit* = written by
the programmer. Synonyms: (type) casting, coercion (MDN says "coercion"
is only the implicit one; Wikipedia doesn't restrict it). JS has no
`(int) x` syntax: conversion is done with functions/operators.

His warning: *unexpected conversions will bite you sooner or later*, so
learn the rules, don't just try things.

Only **three** target conversions exist for primitives: to string, to
number, to boolean. (There is no "to null", "to undefined" or "to array"
automatic conversion.)

### B.1 To string
**Explicit:** `String(x)`, `x.toString()`, `` `${x}` ``, `x + ''`.
**Implicit:** whenever `+` has a string operand (concatenation), in
template literals, in `alert()`.

| Value | `String(value)` |
|---|---|
| `null` | `"null"` |
| `undefined` | `"undefined"` |
| `true` | `"true"` |
| `123` | `"123"` |
| `[1,[2,3]]` | `"1,2,3"` |
| `{}` | `"[object Object]"` |
| `Symbol('a')` | `"Symbol(a)"` with `String()`, but `Symbol()+''` **throws** |

- `x.toString()` fails on `null`/`undefined` (`TypeError`). `String(x)`
  doesn't.
- `(255).toString(16)` gives `"ff"`, `(255).toString(2)` gives
  `"11111111"`: on numbers, `toString(base)` converts to **another base**
  (2 to 36).
- Literal gotcha: `5.toString()` is a SyntaxError (the dot is read as a
  decimal point). Write `5..toString()`, `(5).toString()` or `5 .toString()`.
- `toFixed(n)` also produces a **string** (`"72.56"`, `(5).toFixed(2)` is
  `"5.00"`). This is what tripped you in the task.
- Concatenation reminder: `1 + 2 + "3"` is `"33"` (left to right),
  `"1" + 2 + 3` is `"123"`.

### B.2 To number
**Explicit:** `Number(x)`, unary `+x` (**[Dani]**: shorter way to write
`Number()`), `parseInt(x, base)`, `parseFloat(x)`, `Math.floor`... (these
last ones round).
**Implicit:** in math operators other than binary `+` (`-`, `*`, `/`,
`%`, `**`), unary `-`, comparisons `<`, `>`, `<=`, `>=`, and with `==`
against a number.

**`Number(value)` rules:**

| Value | Result | Value | Result |
|---|---|---|---|
| `undefined` | `NaN` | `null` | `0` |
| `true` / `false` | `1` / `0` | `""` / `"   "` | `0` |
| `"  12  "` | `12` (trims whitespace) | `"1.5"` | `1.5` |
| `"12px"` | `NaN` | `"1,5"` | `NaN` (comma isn't decimal separator) |
| `"0xa"` | `10` (hex) | `"0b11"` | `3` (binary) |
| `"4e8"` | `400000000` | `"Infinity"` | `Infinity` |
| `[]` | `0` | `[5]` | `5` |
| `[1,2]` | `NaN` | `{}` | `NaN` |
| `10n` | `10` | | |

- Algorithm for strings: trim whitespace; empty -> `0`; else parse the
  **entire** text as a number literal, any leftover char -> `NaN`.
- Note `undefined -> NaN` but `null -> 0`: a favourite trap.
- `+10n` (unary plus on BigInt) **throws**, and `10n + 1` throws
  (`Cannot mix BigInt and other types`): use `Number(10n)` / `BigInt(1)`.
- **[Dani]** point: `-` is not "polysemic" like `+`: `"12" - 2` is `10`
  (never "un-concatenation"). `"5" * "2"` is `10`, `"6" / "2"` is `3`,
  `"a" - 1` is `NaN`.
- Typical source of strings that must be converted **[Dani]**: HTML form
  fields, `prompt()` (returns a string, or `null` if cancelled!), parsed
  text files. Locale warning: `.` is the English decimal separator; other
  locales need more work.

**`parseInt` / `parseFloat`** (read from the start, stop at the first
invalid char):

| Call | Result |
|---|---|
| `parseInt('12px')` | `12` |
| `parseInt('px12')` | `NaN` |
| `parseInt('1.9')` | `1` (truncates, doesn't round) |
| `parseInt('')` | `NaN` (vs `Number('')` = `0`) |
| `parseFloat('3.14.15')` | `3.14` |
| `parseInt('0xff')` | `255` |
| `parseInt('ff', 16)` | `255` (2nd arg = base 2 to 36) |
| `parseInt('101', 2)` | `5` |
| `parseInt(null)` | `NaN` (it converts to `"null"` first) |

- Always pass the base to `parseInt` in real code (`parseInt(s, 10)`).
- Classic trap: `['1','2','3'].map(parseInt)` gives `[1, NaN, NaN]`
  (`map` passes the index as the 2nd arg, which `parseInt` reads as the
  base).
- Choose: `Number()` = strict whole-string conversion ("is this text a
  number?"); `parseFloat/parseInt` = "extract the leading number"
  (e.g. `'12px'`).
- Also exist as `Number.parseInt` / `Number.parseFloat` (same functions).
- Bit tricks like `~~x` or `x | 0` also truncate to integer, but are
  ad-hoc/cryptic; don't use them in the exam.

### B.3 To boolean
**Explicit:** `Boolean(x)`, double negation `!!x`.
**Implicit:** `if`, `while`, `for` condition, `?:` condition, `!`, `&&`,
`||`, `??` (no: `??` only tests null/undefined), `do...while`.

**Falsy** values (convert to `false`): `0`, `-0`, `0n`, `""`, `null`,
`undefined`, `NaN` (and `document.all`, an oddity). **Everything else is
truthy [Dani: falsy/truthy are the names]**:

| Value | Boolean | Value | Boolean |
|---|---|---|---|
| `"0"` | **true** | `"false"` | **true** |
| `" "` (a space) | **true** | `[]` | **true** |
| `{}` | **true** | `-1`, `Infinity` | true |
| `0n` | false | `-0` | false |

- Trap: `"0"`, `"false"`, `[]` and `{}` are truthy.
- `new Boolean(false)` is truthy (it's an object).

### B.4 Objects to primitives (just awareness)
When an object meets `+`, `==` or a template literal, JS converts it
to a primitive (via `valueOf`/`toString`): `[] + {}` is
`"[object Object]"`, `[] + []` is `""`, `[1,2] + 1` is `"1,21"`,
`` `${[1,2]}` `` is `"1,2"`, `+[]` is `0`, `+{}` is `NaN`. The exam
won't need the algorithm, but you must know **arrays and objects
concatenate as text**, and `typeof` stays `"object"`.

### B.5 Conversion cheat table of the operators

| Expression | Result | Why |
|---|---|---|
| `1 + '2'` | `'12'` | `+` with a string: concatenate |
| `'3' - '1'` | `2` | `-` converts to number |
| `'5' + +'2'` | `'52'` | unary `+` first -> `'5' + 2` -> string |
| `true + 1` | `2` | boolean -> number |
| `null + 1` | `1` | `null` -> 0 |
| `undefined + 1` | `NaN` | `undefined` -> NaN |
| `'' + null` | `'null'` | |
| `'a' - 1` | `NaN` | |

### B.6 Comparisons and equality (conversions in disguise)
- `===` / `!==` (strict): **no conversion**, same type and value. Use
  them by default **[Dani]** ("let things bite you now").
- `==` / `!=` (loose): converts. Rules worth knowing:
  - `null == undefined` is `true`, and these two are equal to **nothing
    else** (`null == 0`, `undefined == 0`, `null == false` are all
    `false`).
  - number vs string: the string becomes a number (`'1' == 1`, `0 == ''`,
    `0 == '0'` are `true`, but `'' == '0'` is `false`: two strings are
    compared as strings).
  - boolean vs anything: the boolean becomes a number first
    (`'0' == false` is `true`, `[] == false` is `true`).
  - `NaN == NaN` is `false`.
- Relational `< > <= >=` convert to numbers, **except when both are
  strings** (then dictionary order, by UTF-16 code unit, char by char):
  - `'2' > '12'` is `true`, `'2' > 12` is `false` (number comparison).
  - `'a' > 'A'` is `true` (lowercase after uppercase), `'Z' > 'a'` is
    `false`, `'apple' > 'app'` is `true` (longer wins on equal prefix).
  - **null/undefined trap:** `null >= 0` is `true`, `null > 0` is `false`,
    `null == 0` is `false` (`>=` converts, `==` doesn't). `undefined >= 0`
    is `false` (it becomes `NaN`, every comparison with `NaN` is false).
    Advice: compare them explicitly, never rely on that.
- Chained comparisons don't work as in maths: `3 > 2 > 1` is `false`
  (`true > 1`), `1 < 2 < 3` is `true` by luck.
- `Object.is(a, b)`: like `===` but `Object.is(NaN, NaN)` is `true` and
  `Object.is(0, -0)` is `false`.

## Theme C: Numbers (LANG5.2) in detail

### C.1 Representation
- One number type for integers and decimals: 64-bit IEEE-754 double.
  Safe integers up to `2**53 - 1` (`Number.MAX_SAFE_INTEGER`). Beyond
  that: `2**53 + 1` gives `9007199254740992` (wrong); use `BigInt` (`10n`).
- Literals: `1_000_000` (separator), `1e3`, `2e-7`, `0xff` (hex), `0b101`
  (binary), `0o17` (octal), `.5`, `5.` Large/small values print as
  `1e+21`, `2e-7`.
- Special values: `Infinity`, `-Infinity` (`1/0`, `-1/0`), `NaN`
  (`0/0`, `'a' - 1`, `Math.sqrt(-1)`). `5 % 0` is `NaN`.
  JS **never throws** on a math error.
- `NaN` is "sticky": any operation with `NaN` returns `NaN`. It is the
  only value not equal to itself.
- There is `-0` too: `0 === -0` is `true`, `Object.is(0, -0)` is `false`.

### C.2 The floating-point problem (task step 5)
- `0.1 + 0.2` is `0.30000000000000004` and `0.1 + 0.2 === 0.3` is
  `false`: 0.1 and 0.2 can't be stored exactly in binary (like 1/3 in
  decimal). Same in every language using doubles.
- `9999999999999999` prints `10000000000000000` (precision lost).
- `19.99 * 100` is `1998.9999999999998` (!). That's why you need
  `Math.round(x * 100)` before using cents as integers.
- Strategies: (1) work in integers (cents) and divide at the end;
  (2) round to the decimals you need (`toFixed`, `Math.round`) before
  comparing or printing; (3) compare with a tolerance
  (`Math.abs(a - b) < Number.EPSILON`).

### C.3 Rounding: one method per intention
| Method | Behaviour | Example |
|---|---|---|
| `Math.floor(x)` | toward -infinity | `-1.1 -> -2` |
| `Math.ceil(x)` | toward +infinity | `-1.1 -> -1` |
| `Math.round(x)` | nearest; **.5 goes up** (toward +inf) | `2.5->3`, `-2.5->-2`, `-1.5->-1` |
| `Math.trunc(x)` | drops decimals | `-1.9 -> -1`, `1.9 -> 1` |
| `x.toFixed(n)` | n decimals, **returns a string** | `(12.34).toFixed(0)` is `"12"` |

- `toFixed` rounds the **real stored value**, so it "misbehaves":
  `(1.005).toFixed(2)` is `"1.00"` (not 1.01), `(1.45).toFixed(1)` is
  `"1.4"`, `(8.345).toFixed(2)` is `"8.35"`. It's not a bug: 1.005 is
  actually 1.00499999999999989...
- `(0.5).toFixed(0)` is `"1"`, `(2.5).toFixed(0)` is `"3"`,
  `(-1.5).toFixed(0)` is `"-2"` (rounds half **away from zero**, unlike
  `Math.round`, which goes toward +infinity: `Math.round(-2.5)` is `-2`).
- `toFixed` needs a number: it's a method on a number
  (`'72.5'.toFixed(2)` fails, it's undefined on strings).
- To round to 2 decimals and keep a number: `Number(x.toFixed(2))` or
  `Math.round(x * 100) / 100` (both can show rare edge cases like
  `1.005`).
- For significant digits: `toPrecision(n)`; exponent form:
  `toExponential(n)` (just know they exist).

### C.4 Testing numbers
| Function | What it does | `'abc'` | `''` | `undefined` | `null` | `'12'` |
|---|---|---|---|---|---|---|
| `isNaN(x)` (global) | converts to number first, then tests NaN | **true** | false | true | false | false |
| `Number.isNaN(x)` | **no conversion**: only true for the value `NaN` | false | false | false | false | false |
| `isFinite(x)` (global) | converts, then not NaN/Infinity | false | | | | true |
| `Number.isFinite(x)` | no conversion | false | | | | **false** |
| `Number.isInteger(x)` | is an integer **number** | | | | | false |

- `x === NaN` is always `false`. To detect NaN use `Number.isNaN(x)`
  (or `x !== x`, a trick).
- **[Dani]**: the `isNaN()` in the `math2.html` template is
  "totally wrong" (it converts the value, so strings like `"abc"` also
  give `true`, and `""` gives `false`). Use `Number.isNaN` (he points to
  chapter 5.1/5.2 for this). To validate user input: `Number(x)` then
  `Number.isNaN(result)`.
- `Number.isInteger(5.0)` is `true` (5.0 *is* 5).

### C.5 Math object
`Math.max/min(...)` (no args: `-Infinity`/`Infinity`; converts strings;
`Math.max(1,'a')` is `NaN`; for arrays use spread `Math.max(...arr)`),
`Math.pow(a,b)` = `a ** b`, `Math.sqrt`, `Math.abs`, `Math.random()`
(`[0,1)`), and `Math.floor(Math.random() * n)` for an integer in `[0,n)`.
`Math` is an object (not a function), `typeof Math === 'object'`.

### C.6 Operators on numbers
- `%` remainder keeps the **sign of the dividend**: `-10 % 3` is `-1`,
  `10 % -3` is `1`, `5.5 % 2` is `1.5`. So `n % 2 === 1` is **wrong for
  negative odds** (`-3 % 2` is `-1`): use `n % 2 !== 0` or `Math.abs`.
- `**` is right-associative: `2 ** 3 ** 2` is `512`; `-2 ** 2` is a
  **SyntaxError** (write `(-2) ** 2` or `-(2 ** 2)`).
- `++`/`--`: prefix returns the new value, postfix the old one
  (`let i=1; i++ + ++i` is `4`).
- Assignment is an expression that returns the assigned value:
  `a = b = 3` works; `let a = 1; a += a++` is `2`.
- Modify-in-place: `+= -= *= /= %= **=` and the logical ones
  `||=` `&&=` `??=`.

## Theme D: Operators, precedence, expressions

- **Terms [Dani]:** *unary* (1 operand: `-x`, `+x`, `!x`, `typeof x`,
  `x++`), *binary* (2 operands), *ternary* (`?:`, the only 3-operand
  operator). *Operand* = what the operator acts on.
- **Statement vs expression [Dani, extended in the `.new` file]:** an
  expression *produces a value* and can sit where a value is expected
  (`3 + 4`, `a ? b : c`, `f()`, `x = 5`); a statement *does something*
  (`let x`, `if`, `for`, `return`) and has no value. This is why the
  ternary `?:` can be used in a template literal but `if` cannot.
- **Precedence** (highest to lowest, the useful part): grouping `()` >
  postfix `++ --` > unary / prefix (`! + - typeof ++x`) > `**` > `* / %` >
  `+ -` > `< > <= >=` > `== != === !==` > `&&` > `||` `??` > `?:` > `=`
  and compound assignment > `,`.
  - Consequences: `&&` binds tighter than `||`:
    `null || 2 && 3 || 4` is `3`.
  - `??` cannot be mixed with `||`/`&&` without parentheses:
    `0 || null ?? 5` is a **SyntaxError**; write `(0 || null) ?? 5`.
  - **[Dani]** gives a long precedence table in his comments; you should
    read and know how to resolve expressions by it.
- **Logical operators return operands, not booleans**:
  - `a || b`: first **truthy** operand (or the last if none): `0 || 'x'`
    is `'x'`; `null || 0 || ''` is `''`.
  - `a && b`: first **falsy** operand (or the last): `1 && 2 && 0 && 3` is
    `0`; `1 && 2 && 3` is `3`.
  - `a ?? b`: `b` only if `a` is `null` or `undefined`: `0 ?? 'x'` is `0`,
    `'' ?? 'x'` is `''`, `undefined ?? null` is `null`. Use `??` for
    "default if missing", `||` for "default if falsy". Short-circuit:
    the right side is not evaluated if the left decides.
  - `!` converts to boolean and negates. `!!x` = `Boolean(x)`.
- Non-traditional `?` **[Dani]**: using `?:` to run actions instead of
  returning a value; discouraged. Chained ternaries: one condition per
  line, aligned.

## Theme E: Variables and strict mode

- `let` (reassignable), `const` (binding can't be reassigned; **content
  of a `const` array/object can change**: `const a = []; a.push(1)` is
  fine), `var` (old: allows redeclaration, function-scoped; avoid).
  Redeclaring `let` in the same scope is a `SyntaxError`.
- Default: `const`; `let` only if it must change.
- Names: camelCase, semantic, no single letters outside throwaway
  demos **[Dani: "name things right"]**; constants of fixed value in
  UPPER_CASE (`const LAST = 15`); not reserved words.
- Undeclared assignment: sloppy mode creates a global silently
  (`x = 3`), strict mode throws `ReferenceError` (I ran both). **[Dani]**
  test for `'use strict'` is exactly `a = 3`.
- `'use strict'` **[Dani]**: must be the first statement of a script or
  function (comments before it are OK); otherwise it's an ordinary string
  expression and does nothing, *with no error*. Kept opt-in because of
  JS **backwards compatibility** (it changes behaviour of the same
  code); modules and classes are strict by default. "All the examples
  assume strict mode". Forgetting it counts against you.
- Shared global scope **[Dani, `.new`]**: all classic `<script>`s and
  external files on a page share one global scope. This is what
  crashed your page (redeclared `isEvenCents`).

## Theme F: Interaction, control flow, functions

- `alert`, `prompt` (returns string or `null` on cancel), `confirm`
  (boolean). Always convert prompt input.
- `if / else if / else`; ternary; `switch` (strict `===` comparison,
  needs `break` or `return`, cases fall through, `default`,
  `switch (true)` pattern for ranges).
- Loops: `while`, `do...while` (runs at least once), `for`; `break`,
  `continue`, **labels** (`outer: for ...  continue outer;`).
- Functions: declaration (hoisted), expression, arrow; parameters vs
  arguments; **default parameters apply only on `undefined`** (not
  `null`: `greet(null)` gives `Hello, null!`); no `return` -> returns
  `undefined`; `return` followed by a **newline** returns `undefined`
  (automatic semicolon); outer variables vs local ones; side effects.
  **[Dani]** "3 main kinds of functions" (in the `.new` file).
- Statements and semicolons: automatic semicolon insertion (ASI) works
  most of the time; know the cases where it doesn't (line starting with
  `(` or `[`, `return` + newline). Choose a style (with `;`) and be
  consistent.

## Theme G: Arrays (LANG5.4)
- Arrays are objects (`typeof [] === 'object'`); zero-based; `arr.length`
  (writable: `arr.length = 0` empties it; `a[5] = 1` on length 1 makes
  length 6 with holes); `arr[-1]` is `undefined` (use `arr.at(-1)`).
- End: `push` (returns new length), `pop` (returns the element,
  `undefined` if empty). Start: `shift`, `unshift` (returns new length).
- `push/pop` fast; `shift/unshift` slower (re-index everything).
- Loops: `for (let i...)`, `for...of` (values), `for...in` (keys as
  strings; don't use on arrays).
- Copy: `const b = a` copies the **reference**; `[...a]` / `a.slice()`
  copy (shallow: nested arrays are still shared).
- Comparison: `[1] === [1]` is `false`; `[] == false` is `true`; String
  conversion `[1,2,3] + ''` is `"1,2,3"`.
- `splice(start, deleteCount, ...items)` mutates and returns removed
  items; `slice(a, b)` doesn't mutate.
- `sort()` with no function sorts **as strings**: `[10, 9, 1].sort()` is
  `[1, 10, 9]`.

## Theme H: Code quality (LANG3) **[Dani]**
- Coding style asked in every exam: **2 spaces, 80 columns,
  consistency** (with your own code, or with what you touch).
- Comments: express the *intent* (why), not a line-by-line paraphrase;
  as a junior, more comments is better than fewer; "functions as
  comments" (good names). Disclaimers whenever you deviate from the
  spec or use outside help ("better too many than too few").
- Ninja code (LANG3.4): read it as a list of **what not to do**
  (one-letter names, reusing variables, clever tricks). He does some of
  it in class demos, not in production.
- Debugging in the browser (devtools): not asked directly, but you'll
  need it.
- Use `TODO:` / `FIXME:` (exam rules), with the commit message you'd use
  after the tag.

## Theme I: Git (the process is graded)
- Atomic commits (one topic each). Conventional Commits:
  `type: message`, lower-case, imperative, no final period, no body.
  Tags: `feat`, `fix`, `refactor`, `test`, `docs`, `style`, `chore`,
  `build`, `ci`, `perf`, `revert`. "Think by elimination" if unsure.
- In the exam: `type: (*1) message` (section number after the tag);
  more commits for the same section: `(*1.1)`, `(*1.2)`.
- Review `git diff` / `git log` before committing; amend/reset/stash
  for fixes; `revert` creates a new commit that undoes another (safe on
  shared history), `reset` rewrites history.
- Branch: default modern branch `main`; hidden `.git/` goes in the zip.

---

# 3. Self-check (answers after the questions)

1. `typeof null`? `typeof NaN`? `typeof []`? `typeof typeof 1`?
2. `Number(null)`, `Number(undefined)`, `Number('')`, `Number('12px')`,
   `Number([5])`?
3. `parseInt('12.9px')`, `parseFloat('.5abc')`, `parseInt('')`?
4. `Boolean('0')`, `Boolean([])`, `Boolean(NaN)`, `!!'false'`?
5. `'5' + 3`, `'5' - 3`, `'5' * '2'`, `5 + +'3'`, `true + true`,
   `null + 'a'`?
6. `null == 0`, `null >= 0`, `'10' < '9'`, `'10' < 9`, `NaN != NaN`?
7. `(1.005).toFixed(2)` and its `typeof`? `Math.round(-2.5)`?
8. `isNaN('abc')` vs `Number.isNaN('abc')`?
9. `-7 % 3`; `2 ** 3 ** 2`; `0 ?? 'x'`; `0 || 'x'`?
10. Which line is wrong: `const a = 1; a = 2;` / `let b = 1; let b = 2;` /
    `const c = []; c.push(1);`?

Answers (all run in Node):
1. `"object"`, `"number"`, `"object"`, `"string"`.
2. `0`, `NaN`, `0`, `NaN`, `5`.
3. `12`, `0.5`, `NaN`.
4. `true`, `true`, `false`, `true`.
5. `'53'`, `2`, `10`, `8`, `2`, `'nulla'`.
6. `false`, `true`, `true` (strings), `false` (becomes `10 < 9`), `true`.
7. `"1.00"`, `"string"`; `-2`.
8. `true` vs `false`.
9. `-1`; `512`; `0`; `'x'`.
10. The first (`TypeError`) and the second (`SyntaxError`); the third is
    fine.

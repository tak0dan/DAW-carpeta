# 04 - Data types, interaction, type conversions (LANG2.5-2.7)

## 4.1 The eight types

7 primitives + object:

| Type | Notes |
|---|---|
| `number` | integers **and** floats in one type (key difference vs Java **[P]**). Specials `Infinity`, `-Infinity`, `NaN`. Safe integers up to 2**53 - 1 |
| `bigint` | `123n`, arbitrary size |
| `string` | `'..'`, `".."`, `` `..` `` |
| `boolean` | `true`, `false` |
| `null` | "nothing / empty / unknown", a **separate type** of its own |
| `undefined` | "value not assigned" |
| `symbol` | unique identifiers (later) |
| `object` | everything else: collections of data |

### Number **[P]**

- `NaN` = result of an incorrect/undefined math operation. It **propagates**
  (`NaN + 1`, `NaN * 0`...). **One exception: `NaN ** 0 === 1`.**
- `NaN` **is a number**: `typeof NaN === 'number'`.
- `NaN === NaN` is `false`. Detect with `Number.isNaN(x)` or `Object.is`.
  (`isNaN("abc")` is `true` because the *global* one converts first.)
- Division by zero does not throw: `1/0` is `Infinity`.
- "The script will never die" is an oversimplification **[P]**: convenient,
  but errors hide and show up late in production. And some operations do
  throw.
- Floats are binary: `0.1 + 0.2 !== 0.3`; `(1.005).toFixed(2)` is `"1.00"`.
- Literals: decimal, `0xff`, `0b101`, `0o17`, `1e3`, `1_000_000`, `.5`,
  `5.`; `5..toString()` but `5.toString()` is a SyntaxError.
- Number parsing in strings uses `.` as decimal separator only.

### String **[P]**

- Three notations. Backticks = **template literal**: `${expression}`
  interpolation (any expression, including nested template literals and
  function calls) and real newlines.
- Only backticks interpolate: `"${1+2}"` stays literal.
- Strings are immutable: `s[0] = 'z'` does nothing (sloppy) or throws
  (strict).
- Escapes (`\n`, `\t`, `\'`, `\\`, `©`, `\x41`) are part of the string
  literal syntax.

### Literals - the full list **[P]**

string literals (3 notations), numeric literals (number or bigint; bases,
exponent), boolean `true`/`false`, `null`, **object literal** `{...}`,
**array literal** `[...]`, **regular-expression literal** `/.../` (a RegExp
object, **not** a string: `/^[0-9]/` vs `"^[0-9]"`). The "literal notation"
is also the base of JSON.

### Boolean **[P]**

Use real booleans. Not `"true"`/`"false"` (strings), never
`"yes"`/`"no"`/`"si"`. The text shown to humans must not contaminate your
data model.

### `null` vs `undefined` **[P]**

- `undefined`: default for anything never assigned (`let x;`, missing
  parameter, missing property, function without `return`).
- `null`: put there **by the programmer** to say "empty/unknown".
- Do **not** assign `undefined` yourself (even if legal).

### Objects and "everything is an object" **[P]**

- Primitives (except `null`, `undefined`) have **wrapper objects** (that is
  where `"abc".length`/`.toUpperCase()` come from) but behave very
  differently from real objects. Do not mix them up.
- Three object subtypes with special syntax:
  - **Array**: `[6, 7, 8]`, index from 0, `arr[2]`.
  - **RegExp**: `/pattern/`.
  - **Function**: a function is also an object (class `Function`),
    `typeof` reports `'function'`.
- Objects can be created directly, **no class required** (unlike Java).
- `new String('a')` is an object, `String('a')` a primitive.

### `typeof` **[P]**/**[J]**

| Expression | Result | Why |
|---|---|---|
| `typeof 0` / `typeof NaN` | `'number'` | |
| `typeof 10n` | `'bigint'` | |
| `typeof ''` | `'string'` | not undefined/null |
| `typeof true` | `'boolean'` | |
| `typeof undefined` | `'undefined'` | |
| `typeof null` | `'object'` | officially recognised historical **error** |
| `typeof Math`, `typeof []`, `typeof {}` | `'object'` | |
| `typeof alert`, `typeof function(){}` | `'function'` | functions are objects; typeof treats them specially |
| `typeof typeof 0` | `'string'` | typeof returns a string |
| `typeof neverDeclared` | `'undefined'` | no error, but TDZ names do throw |

- `typeof x` and `typeof(x)` are the same thing (it is an operator, the
  parentheses just group).
- `"object"` is **not conclusive**; other answers are more conclusive
  (except `NaN`: `=== NaN` can't detect it).

## 4.2 Interaction: `alert`, `prompt`, `confirm` (2.6)

| Call | Returns |
|---|---|
| `alert(msg)` | `undefined` |
| `prompt(title, [default])` | the typed **string**; `""` if OK with empty input; **`null`** if cancelled (Esc) |
| `confirm(question)` | `true` (OK) / `false` (Cancel) |

- All are **modal windows**: the page is blocked until closed; position and
  look are decided by the browser (the price of simplicity).
- Bad practice for production: annoying and blocking **[P]**. Fine for
  demos. Prefer `console.log`.
- Because `prompt` returns a string, anything arithmetic needs conversion.

## 4.3 Type conversions (2.7) **[P]**

Vocabulary: *automatic* = *implicit*; *explicit* = you wrote the conversion.
"Type casting / coercion" are synonyms in common usage (MDN reserves
*coercion* for the implicit one).

### To string
`String(value)`; also implicit via `alert`, `+` with a string, template
literals. Obvious: `false` -> `"false"`, `null` -> `"null"`,
`[1,2]` -> `"1,2"`, `[]` -> `""`, `{}` -> `"[object Object]"`.

### To number
Explicit: `Number(value)`; shorthand: unary `+value`.
Implicit: in every math operator **except binary `+` with a string**, and in
comparisons (`>`, `<`, `==` between different types).

| Value | Becomes |
|---|---|
| `undefined` | `NaN` |
| `null` | `0` |
| `true` / `false` | `1` / `0` |
| string | trimmed; `""` (or only whitespace) -> `0`; else parsed; failure -> `NaN` |
| `[]` -> `0`, `[5]` -> `5`, `[1,2]` -> `NaN`, `{}` -> `NaN` | via string |

- Parsing is wider than you think: `Number("0xa")` = 10, `"4e8"/2` works,
  `Number("1.5")` = 1.5, `Number("1,5")` = `NaN`.
- `-` has no string meaning: `"12" - 2` = 10 (it does not "unconcatenate").
- Typical sources needing conversion: HTML form fields, `prompt()`, parsed
  text files.
- `parseInt`/`parseFloat` read as far as they can (`parseInt("12px")` = 12);
  `Number("12px")` = `NaN`.

### To boolean
`Boolean(value)` / `!!value`; implicit in `if`, `while`, `?:`, `!`, `&&`,
`||`.

**Falsy (8)**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
**Everything else is truthy**, including `"0"`, `" "`, `"false"`, `[]`, `{}`,
`new Boolean(false)`, `function(){}`.

### `+` is polysemic
Binary `+`: if either operand is a string -> concatenation, else numeric
addition. Evaluated left to right: `1 + 2 + "3"` = `"33"`,
`"1" + 2 + 3` = `"123"`. Unary `+x` = `Number(x)`.

> He closes this chapter with: "Unexpected type conversions will byte you
> soon or later... the more you learn in your long term memory the behaviour
> summarized here, the best." Expect conversion questions.

## 4.4 Conversion cheat table (all verified in chapter 09)

| Expression | Result |
|---|---|
| `"5" + 2` | `"52"` |
| `"5" - 2` | `3` |
| `"5" * "2"` | `10` |
| `true + false` | `1` |
| `"" + 1 + 0` | `"10"` |
| `"" - 1 + 0` | `-1` |
| `"4px" - 2` | `NaN` |
| `" -9 " + 5` | `" -9 5"` |
| `" -9 " - 5` | `-14` |
| `null + 1` | `1` |
| `undefined + 1` | `NaN` |
| `"b" + "a" + +"a" + "a"` | `"baNaNa"` |
| `[] + {}` | `"[object Object]"` |
| `[1] + [2]` | `"12"` |
| `+[]` / `+{}` | `0` / `NaN` |

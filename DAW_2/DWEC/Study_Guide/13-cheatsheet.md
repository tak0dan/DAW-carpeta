# 13 - One-page cheatsheet + pre-exam checklist

## Falsy (8)
`false  0  -0  0n  ""  null  undefined  NaN` - everything else is truthy
(`"0"`, `" "`, `"false"`, `[]`, `{}`).

## typeof
`number` (incl. NaN) · `bigint` · `string` · `boolean` · `undefined` ·
`symbol` · `function` · `object` (incl. **null**, arrays, regex, Math).

## To number
`undefined`->NaN · `null`->0 · `true`->1 · `false`->0 · `""`/blank->0 ·
`"12px"`->NaN · `[]`->0 · `[5]`->5 · `{}`->NaN. **`+` with any string =
concat**, every other math op = numeric.

## Comparison
- different types -> numbers (`"2" > 1`); both strings -> code order
  (`"2" > "12"`, `"a" > "A"`, `"ñ" > "z"`).
- `null == undefined` yes; `null == 0` no; `null >= 0` yes; undefined vs
  anything numeric -> false. `NaN` never equals anything (not even itself).
- Objects by reference. **Use `===`.**

## Precedence (high -> low)
`()` · `. [] f()` · `x++ x--` · `! ~ + - ++x --x typeof` · **`**` (R-to-L)** ·
`* / %` · `+ -` · `< <= > >=` · `== != === !==` · `&&` · `|| ??` ·
**assignment, `?:`, `=>` (R-to-L)** · `,`.
`-2 ** 2` is an error. `a || b ?? c` is an error.

## Short-circuit
`||` first truthy (else last) · `&&` first falsy (else last) ·
`??` first non-nullish.

## Statements vs expressions
Expression gives a value (`a = 3`, `c ? x : y`, `f()`, `` `${x}` ``,
`a, b`). **Not** expressions: `let`, `if`, `for`, `while`, `switch`,
`return`, `break`, `continue`.

## Loops
`while` (check before) · `do..while` (check after, `;`) · `for(;;)`.
`continue` in `for` runs the step; in `while`/`do..while` it does **not** run
your own decrement. Label: `outer: for (...) { break outer; }`.
`let` in `for` head is local; `const` there breaks on `i++`.

## switch
Strict `===`; fall-through without `break`; `default` anywhere; grouped
`case`; `switch(true)` hack.

## Functions
- Declaration: hoisted, callable before. Expression/arrow: only after the
  line (`const` -> ReferenceError, `var` -> TypeError).
- Parameters (declaration) vs arguments (call). Extra args ignored; missing
  = `undefined`. Default only for **`undefined`**.
- No `return` -> `undefined`. **No newline after `return`.**
- `() => ({a: 1})` for an object; `() => {a: 1}` is `undefined`.
- Local shadows outer; local `let` with a parameter's name = SyntaxError.
- Three kinds: returns-only, does-only, both.

## Scope & declarations
`const` default; `let` when reassigned; no `var`. TDZ (even `typeof`).
One global scope across scripts in document order; modules isolate.
`'use strict'` first statement; undeclared assignment -> ReferenceError;
writing to string index -> TypeError.

## ASI danger
A line starting with `(`, `[` or a template literal continues the previous
line. No `;` after block `}`; `;` after function **expressions** and
`do..while`.

## Style (he checks by eye)
80 cols · 2 spaces · consistent quotes · semicolons · lowerCamelCase ·
semantic names with units · `const` first · no commented-out code ·
intent comments · `===` · real booleans · `null` set by you, `undefined`
never.

## Process
Atomic commits; `feat:`/`fix:`/`refactor:`/`test:`/`revert:`; `(#n)`; branch
`main`; zip `task.first-surname.name.zip` (ASCII, lowercase, kebab-case,
contents at the root, `.git/` included when asked); only requested files;
`readme.md` lowercase English; forum title `dwec1p2: 4. keywords`.

## Pre-exam checklist
- [ ] Re-read each task statement for **prescribed constructs** (shorthand,
      typeof, single line, three loops, nested if, ternary, switch).
- [ ] Read the template's untouchable part: what exactly does it test?
- [ ] Exact variable/function/file names from the statement.
- [ ] Exact output strings and format (copy them; punctuation!).
- [ ] Boundaries, **between** boundaries, `NaN`, `null`, `""`, wrong types.
- [ ] `=` vs `===`; `;` after `if (...)`; `return` + newline.
- [ ] `continue`/`break` vs your own counter update.
- [ ] Shared counters reset between loops.
- [ ] 80 columns, 2 spaces, quotes, `'use strict'`.
- [ ] No leftover debug/commented code. Comments say *why*.
- [ ] Zip name, structure, only requested files.

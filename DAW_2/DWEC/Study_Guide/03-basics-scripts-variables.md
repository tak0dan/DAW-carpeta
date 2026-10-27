# 03 - Hello world, code structure, strict mode, variables (LANG2.1-2.4)

Legend: **[P]** = the professor's comment. **[J]** = jsinfo content he did not
comment (still examinable). Executable proofs of the claims are in chapter 09.

## 3.1 The `<script>` tag and loading JS (2.1)

- Three ways to add JS to a page **[P]** (MDN names):
  1. **External JS** - `<script src="file.js"></script>`
  2. **Internal JS** - code as the content of `<script>`
  3. **Inline JS (handlers)** - `<button onclick="alert('Hi!')">`: bad
     practice, seen in old code. Not the same as modern component
     frameworks (JSX) that co-locate HTML+CSS+JS on purpose.
- A `<script>` with `src` **ignores its content**: use two tags
  (`<script src="x.js"></script>` then `<script> ... </script>`).
- `src` takes any valid URL: absolute (CDN) or relative.
- **One shared global scope** for all scripts, internal or external,
  *in document order*, as if concatenated **[P]**:
  - declare `let message = 'Hello!'` in `a.js`, load it, then use `message`
    in a later internal script: works.
  - Load them in the **opposite order**: fails.
  - The console shares that scope too.
  - Advanced **[P]**: `async` scripts lose order guarantees; ES modules
    (`type="module"`) have **separate scopes**; function *hoisting* works
    within a single script only, not across scripts.
- `alert()` is blocking and browser-bound: use `console.log()` for
  learning. DOM alternative: `element.textContent = '...'` **[P]**.
- Quotes **[P]**: `'a'` and `"a"` are equivalent; backticks are *template
  literals*. Choose one style, be consistent (JSON needs double quotes).

## 3.2 Code structure (2.2)

### Statement vs expression **[P]** (he says: learn this early, not late)

- **Expression**: code that *produces a value* (or is a value). It can go
  in an expression "slot" (right of `=`, a function argument, an `if` guard,
  inside `${}`).
- **Statement**: an instruction (`let`, `if`, `for`, `return`, `break`...).
  You cannot put a statement where an expression is required.
- An expression can stand alone as an **expression statement**; its value is
  lost (only the console prints it). Pointless unless it has side effects.
- Statements are chained with `;` and grouped with `{}` (**block
  statement**). Expressions are chained with `,` (the last value wins) and
  grouped with `()`.
- `{}`, `()` and `,` have many other meanings in JS. `;` is almost only
  the statement separator. **Exception:** the two `;` inside
  `for (init; condition; step)`. The init may be an expression **or** a
  declaration (`let`), nothing else.
- `=` is an operator (produces a value), `let` is **not**:

```js
alert(let a = 3);   // SyntaxError
let a; alert(a = 3); // works: prints 3 and a is 3
```

### Semicolons **[P]**

- Use them. A newline is **not always** a statement end (ASI = automatic
  semicolon insertion only when the code would be invalid otherwise).
  Classic danger: a line starting with `(` or `[`.

```js
const v = function () { return 1 }
(2);                // called! v === 1
let a = "abc"
[1, 2].length;      // a === 1, not "abc"
```

- Console: you may skip `;` (Enter ends the input).
- Block statements are **not** followed by `;` (`if (...) { } ;` is wrong).
  A function **expression** assigned to a variable *is* a statement and
  needs it.
- StandardJS never uses `;`; **SemistandardJS** is the same style with `;`.
  His default when nothing else is imposed. StandardJS is a *style guide*,
  not an ES standard.

### Comments **[P]**

- `// line comment` (a.k.a. one-line), `/* block comment */` (multiline).
- Block comments **do not nest**:
  ```js
  /* outer /* inner */ still-outer */   // SyntaxError
  ```
  -> use `//` for commenting out code you may later nest.
- Comment toggle trick (teaching only, never in production):
  `/*` ... `// */`  vs  `//*` ... `// */`; with a `/*/` middle to switch
  A/B.
- Do not commit deactivated code; version control remembers it.
- VS Code: fold block comments `ctrl+k ctrl+/`, unfold `ctrl+k ctrl+j`.
- Minifiers strip comments, so comments cost nothing in production.

## 3.3 Strict mode (2.3)

- `'use strict';` at the **very top** of a script or function. Before any
  other statement (comments before it are fine). Wrong place = ignored
  silently.
- Why it exists **[P]**: JS keeps backward compatibility. New syntax is
  harmless to old code, but changing the behaviour of the *same* code needs
  an opt-in.
- Classes and ES modules are strict by default. Bundlers often insert it.
- In LANG2 it matters for: assigning to an undeclared variable
  (`num = 5` -> `ReferenceError` in strict mode, silent global in sloppy
  mode), and later for writes to read-only things (`"abc"[0] = 'z'` ->
  `TypeError` in strict, silently ignored otherwise).
- All of jsinfo assumes strict mode. **Remind yourself to add it in every
  test file** (he even suggests a VS Code snippet `use`).
- The console does not have strict mode by default.

## 3.4 Variables (2.4)

- A variable = named storage. Not persistent: lives in RAM only
  (persistence: browser storage, files, DBs - other chapters).
- Declaration: `let message;` / `let message = 'Hello';`.
  Redeclaring with `let` in the same scope is a **SyntaxError**
  (`var` allows it - one reason to avoid `var`).
- Several in one line: `let a = 1, b = 2;` - allowed, "personal taste".
  Follow the project's style guide; if none, SemistandardJS.
- Copying **[P]**: assigning a primitive copies the **value**; assigning an
  array/object copies the **reference** (both names point at the same thing).
- Functional-language remark: pure functional languages forbid changing a
  variable. Modern JS leans that way (`const`, pure functions). He wants you
  to be able to **read** that style.

### Naming **[P]**/**[J]**

- Letters, digits, `$` and `_`; cannot start with a digit; **case
  sensitive** (`apple` != `APPLE`). Non-Latin letters are legal but not
  recommended.
- Reserved words can't be names: `let let = 5` and `let return = 5` are
  syntax errors. Memorise or use a linter; remember the error only appears
  when that line is **parsed/reached**.
- `lowerCamelCase`, not `UpperCamelCase` (classes/constructors), not
  `snake_case`.
- Real-life rules (jsinfo + him): human-readable (`userName`,
  `shoppingCart`); no `a`,`b`,`c`; not `data`/`value`; one vocabulary per
  concept (`currentUser`, not `currentVisitor`); **never reuse** a variable
  for something else; local > global; longer beats shorter; refactor names
  when needed.
- Hard-coded constants known before execution may be `UPPER_CASE`
  (`const COLOR_RED = '#F00'`); values calculated at run time use camelCase
  **[J]** (this clashes slightly with his "no snake_case": the UPPER_CASE
  exception is jsinfo's; when in doubt use camelCase).
- Undeclared assignment (`num = 5`) works in sloppy mode, error in strict.

### `const` **[P]**

- Default to `const`; change to `let` only if you must reassign. Protects the
  *binding*, **not** the contents (`const a = []; a.push(1)` is fine).
- `const x;` (no initial value) is a SyntaxError.
- Reassigning: `TypeError: Assignment to constant variable.`
- `for (const i = 0; i < 3; i++)` fails (the step reassigns).

### Hoisting and the temporal dead zone (earlier than the course gets to it
but examinable) **[J]**/**[P]**

- `var` is hoisted and initialised with `undefined`.
- `let`/`const` exist from the block start but are unusable until their
  declaration line: **TDZ**. Even `typeof x` throws there.
- Function declarations are fully hoisted (usable before the line).

## 3.5 Task "variable with the name of our planet" **[P]**

He criticises the textbook exercise: it should be a **constant**; `planet`
is too vague; `ourPlanet` is probably enough (the implicit "Name"), and
`ourPlanetName` is also fine ("in doubt, tend to long"); if later it
becomes an object, `ourPlanet.name`. That is how he judges names.

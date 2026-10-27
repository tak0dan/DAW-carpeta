# 07 - Functions (LANG2.15-2.17) and "JavaScript specials"

## 7.1 Function declaration (2.15)

```js
function showMessage() {
  alert('Hello everyone!');
}
showMessage();   // call: parentheses!
```

- Purpose: avoid duplication; change in one place.
- **Ambiguity warning** **[P]**: "function declaration" is *specifically* the
  `function name() {}` form. Some people use "declare" loosely for all three
  syntaxes (declaration, expression, arrow). The 1% of cases where this
  matters will bite. JS functions look like Java/C functions but are a
  **false friend**.
- A function named with a **verb** that says what it does; one action per
  function; `show...`, `get...`, `calc...`, `create...`, `check...`. The
  function must do exactly what its name says (and nothing else).

### Variables and scope

- **Local** (declared inside), **outer** (declared outside, visible
  inside), **global** (outside any function; "minimise them; modern code has
  few or no globals").
- Outer variables may belong to an outer **function**, not necessarily
  global **[P]**: that is why jsinfo says *outer*.
- A local with the same name **shadows** the outer one (outer untouched). If
  there is no local declaration, assigning modifies the outer one.
- A **parameter** also shadows an outer variable of the same name. A local
  `let` with the parameter's name -> SyntaxError **[P]**.

### Parameters vs arguments **[J]**

- *Parameter*: the name in the declaration. *Argument*: the value passed in
  the call. Terms get asked.
- Extra arguments are ignored; missing ones are `undefined`.
- Optional parameters go **last**. You cannot skip one "in the middle"
  (nothing between commas) **[P]**; order by "least likely to be omitted".
- Primitive arguments are copied; objects/arrays are passed by reference.

### Default values

- `function f(from, text = 'no text given')`.
- The default applies when the argument is **strictly `undefined`**
  (omitted or passed `undefined`). **Not** for `null`, `""`, `0`.
- Defaults are expressions evaluated **at each call**, may use earlier
  parameters (`b = a * 2`) and even call functions.
- Old code alternatives (you will see them):
  - `if (text === undefined) text = '...';`
  - `text = text || '...'` -> replaces **any falsy** (0, "" too!)
  - `text = text ?? '...'` -> only `null`/`undefined`
  Pick the right one; `||` assumes `""` means "nothing" **[P]**.
- When not using the default-parameter syntax, **document** which
  parameters are optional.
- `f.length` counts parameters before the first default.

### Return

- `return value;` ends the function. Many `return`s are fine; early return is
  often clearer than nesting (clean up before leaving) **[P]**.
- A function with no `return`, or an empty `return;`, gives **`undefined`**.
- **Never put a newline between `return` and the value** (ASI inserts `;`
  -> returns `undefined`). To split a long expression, open a parenthesis
  on the `return` line:
  ```js
  return (
    a + b
  );
  ```
- **Three kinds of functions** **[P]** - decide it when designing, document
  it:
  1. **Pure value-returners** (`add(a, b)`): only purpose is the result;
     ignoring the result makes no sense. Functional programming loves them.
  2. **Doers / side-effect only** (`addToA(b)`, `alert`): return
     `undefined`; using their result makes no sense.
  3. **Both** (`arr.pop()`, `return a += b`): result optional. Functional
     programming dislikes types 2 and 3.
  Ask of every function you meet: "which of the 3?".

## 7.2 Function expressions (2.16) and callbacks **[J]**

```js
let sayHi = function () { alert('Hello'); };   // note the ;
```

- A function is a **value**: you can assign it, copy it (`let f = sayHi`),
  pass it. `sayHi` (no parentheses) is the function; `sayHi()` calls it.
  `alert(sayHi)` prints the source.
- **Callback**: passing a function as an argument to be called later by the
  receiver (`ask(question, yes, no)`). Used **a lot** **[P]**.
- Declaration vs expression:
  - A **declaration** is processed before execution (**hoisted**): you can
    call it above its definition (within the same script).
  - An **expression** exists only once execution reaches it. With
    `const f = function(){}` calling before -> `ReferenceError` (TDZ); with
    `var f` -> `TypeError: f is not a function`.
  - In strict mode a declaration inside a block is visible only in that
    block.
- When to use: prefer declarations (readable, callable before). Use
  expressions when a function is needed as a value (callbacks) or when a
  condition decides which to create.
- A named function expression `let f = function g() {}`: `g` visible only
  inside.

## 7.3 Arrow functions (2.17)

```js
const sumFuncArrow = (a, b) => a + b;
```

- Forms: `(a, b) => expr` (implicit return), `a => expr` (one param),
  `() => expr` (none), `(a, b) => { statements; return x; }` (block body
  needs explicit `return`, otherwise returns `undefined`).
- Returning an **object literal** needs parentheses: `() => ({ a: 1 })`;
  `() => { a: 1 }` is a block with a label -> `undefined`.
- Multiline body: braces and `return`.
- Typical use: short callbacks.
- His **summary of function syntaxes** **[P]**:
  ```js
  function sumFuncDecl(a, b) { return a + b; }             // declaration
  const sumFuncExpr = function (a, b) { return a + b; };    // expression
  const sumFuncArrow = (a, b) => a + b;                     // arrow
  // all called the same way:
  sumFuncDecl(1, 2) + sumFuncExpr(1, 2) + sumFuncArrow(1, 2);  // 9
  const aliasFunc = sumFuncDecl;  // no call: alias to the same function
  aliasFunc(1, 2);                // 3
  ```
  A function stored in an object property works like a callback too.
  (Note: his example line `console.log(aliasFunc(1, 2);` in the .md is
  missing a `)`.)

## 7.4 "JavaScript specials" (jsinfo 2.18; his file labels it 2.16)

Quick recall list (all covered above):

- Code structure: statements separated by `;`; ASI exists; no `;` after
  blocks.
- Strict mode: `'use strict'` at top.
- Variables: `let`, `const` (constant), `var` (old). Dynamic types.
- 8 types; `typeof`'s two quirks (`null`, functions).
- Interaction: `prompt` / `confirm` / `alert`.
- Operators: arithmetic (`**`, `%`), assignment, bitwise, `? :`, logical
  (`||` `&&` with short-circuit, `??`), comparison (strict vs loose,
  `null`/`undefined` special), comma.
- Loops: `while`, `do..while`, `for`, `break`/`continue`, labels.
- `switch`.
- Functions: declaration, expression, arrow; local/outer variables;
  parameters with defaults; return.
- More to come: objects, arrays (LANG5.4 is a prerequisite of dwec1p3),
  regexes, classes, modules.

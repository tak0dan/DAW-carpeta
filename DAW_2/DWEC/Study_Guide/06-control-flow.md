# 06 - Conditionals, logical operators, `??`, loops, `switch` (LANG2.10-2.14)

His comment files leave 2.11 (logical), 2.12 (`??`) and 2.14 (`switch`)
empty: they are plain jsinfo **[J]** and still examinable. Everything marked
as claimed is executed in chapter 09.

## 6.1 `if` / `else if` / `else` (2.10)

- The condition is converted to boolean (truthy/falsy). `if (0)`, `if ("")`,
  `if (null)` never run; `if ("0")`, `if ([])` always run.
- **`else if` is not extra syntax** **[P]**: it is `else { if ... }` written
  flat. Use it: deep nesting hurts maintainability. Avoid nesting generally.
- Braces are optional for a single statement, but use them (style).
- **Never write `;` right after the condition**: `if (x);` is an empty
  statement; the block below always runs.
- `if (pwd = 'cheese')` **assigns** (and is always truthy). Use `===`.
- Use `if` when you need to execute different **branches of code**.

### The conditional operator `? :` **[P]**

- `condition ? valueIfTruthy : valueIfFalsy`. ES name: *conditional
  operator*; everybody says *ternary* (the only JS operator with 3 operands).
- It is the **expression equivalent of `if`**: use it wherever an expression
  fits:
  ```js
  console.log((age < 18) ? 'under-age' : 'adult');
  totalPrice = price + (premium ? 0 : shippingCosts);
  ```
- If the condition is already boolean you do not need it:
  `let accessAllowed = age > 18;` (not `age > 18 ? true : false`).
- Right-associative chain (multiple `?`): `a ? x : b ? y : z`.
  `true ? false ? 1 : 2 : 3` is `2`.
- **Non-traditional use** (executing statements/side effects in the
  branches) is not recommended. He agrees but adds that jsinfo's `Netscape`
  example is poor: it should be `alert(company == 'Netscape' ? 'Right!' :
  'Wrong.')`. (Also note the example in his comments has a typo,
  `alert((company == 'Netscape') 'Right!' : 'Wrong.')`, missing the `?`.)
- `break`/`continue`/`return` are statements: they cannot appear inside the
  branches of `? :` (SyntaxError).
- Writing chains: put each `? :` on its own line, 2-space indent, keep <= 80
  columns. (His UT task asks you to do the whole `getResponse` as one
  expression with combined ternaries - it is for fun, with the test safety
  net. "it is not clear this refactoring is always a good practice for
  readability".)

## 6.2 Logical operators (2.11) **[J]**

- `||` (OR), `&&` (AND), `!` (NOT). In JS `||` and `&&` do **not** return
  booleans: they return one of the **operands**.
- **`a || b || c`**: evaluates left to right and returns the **first truthy**
  value; if none, the **last** operand. Stops (short-circuits) as soon as it
  finds one: later operands are **not evaluated**.
- **`a && b && c`**: returns the **first falsy** value; if none, the last.
  Also short-circuits.
- `&&` has higher precedence than `||`. `!` is higher than both.
- `!!x` = `Boolean(x)`.
- Use for default values: `name = input || 'anonymous'` (but see `??`).
- jsinfo advice: don't use `||`/`&&` as a replacement for `if`
  (`cond && alert(...)`); it works but is less readable.
- Interesting results:
  - `alert(alert(1) || 2 || alert(3))` -> shows 1, then 2 (`alert` returns
    `undefined`, so the chain continues to `2`, and `alert(3)` never runs).
  - `alert(alert(1) && alert(2))` -> 1, then `undefined`.
  - `null || 2 && 3 || 4` -> `3`.
  - "age between 14 and 90 inclusive": `age >= 14 && age <= 90`; outside:
    `!(age >= 14 && age <= 90)` or `age < 14 || age > 90`.
  - `if (-1 || 0)` runs (`-1` truthy); `if (-1 && 0)` doesn't;
    `if (null || -1 && 1)` runs.

## 6.3 Nullish coalescing `??` (2.12) **[J]**

- `a ?? b` = `a` if `a` is not `null`/`undefined`, otherwise `b`.
- Difference with `||`: `||` treats **every falsy** value as missing
  (`0`, `""`, `NaN`, `false`); `??` only `null` and `undefined`.
  `0 ?? 5` is `0`; `0 || 5` is `5`; `"" ?? "x"` is `""`.
- Precedence is as low as `||` (but above `?:` and `=`).
- **Forbidden to mix with `||`/`&&` without parentheses** (SyntaxError):
  `a || b ?? c`; write `(a || b) ?? c`.
- `a ??= b` (assign only if nullish). Related `||=`, `&&=`.
- In parameters **[P]**: the default-parameter syntax covers only
  `undefined`; `??` also covers `null`. Pick the right one for the case, and
  **document** which parameters are optional when not using defaults.

## 6.4 Loops (2.13)

- `while (cond) body` - condition checked **before** each iteration (may run
  0 times).
- `do body while (cond);` - checked **after** (runs at least once; `;`
  after the `)`).
- `for (begin; condition; step) body` - `begin` once; `condition` before
  each iteration; `step` after each body.
  - Any part may be omitted: `for (;;)` infinite; `for (; i < 3;)`.
  - Inline `let` is scoped to the loop; with `var` or an outer `let` it
    survives.
  - Comma allowed in begin/step.
  - `const` in the head fails if the step reassigns.
- **Equivalence** **[P]**: you can always rewrite any loop with another of
  the three; choose the clearest. (He asks exactly this in loops3.)
- Infinite loops: `while (true)` + `break` is legitimate ("the while-true
  pride"); flag-variable alternatives are fine, **but** make sure nothing
  else runs in that iteration after setting the flag.
- `break` leaves the loop. `continue` jumps to the **next iteration**.
  **In a `for`, `continue` still runs the step; in `while`/`do..while` it
  jumps straight to the condition**, so a decrement placed after the
  `continue` never happens -> infinite loop. Put the update **before** the
  `continue` (or use `for`).
- Is `break`/`continue` bad practice? **[P]** Some call it "goto
  considered harmful". He says: flat code with early `continue`s is often
  clearer than nesting, **but** don't leave things in a dirty state when
  exiting early (clean up before). Same discussion for early `return`.
- `break`/`continue` cannot be used to the right of `?` (they're
  statements).
- **Labels**: `outer: for (...) { ... break outer; }` /
  `continue outer`. The only way to leave/advance an **outer** loop from an
  inner one (other than controlling the conditions, less clear). You can
  jump only to an enclosing loop, not anywhere. Also "goto-ish": use only if
  the alternative is worse.
- Prefix/postfix questions: `let i = 3; while (i--)` runs for 2, 1, 0;
  `while (--i)` for 2, 1. `i++` vs `++i` in a `for` step: same result.
- Typical exercises: print primes up to n (the loops3 shape): outer loop,
  `continue` on non-primes.

## 6.5 `switch` (2.14) **[J]** + his hack tasks

- `switch (x) { case v1: ...; break; case v2: ...; default: ... }`.
- Comparison is **strict (`===`)**: `switch ("2") { case 2: ... }` does not
  match. (Typical trap with `prompt` input: it is a string.)
- Without `break` execution **falls through** to the next case (even into
  `default`, wherever `default` is placed).
- Grouping: consecutive `case` labels share code (`case 3: case 5: ...`).
- `default` is optional and may be anywhere.
- The `case` value may be any **expression**, evaluated at run time.
- The whole `switch` body is one block scope: `let` in a case needs `{ }`
  to be safe.
- **His #9 refactor**: `switch (true) { case score < 0 || score > 100: ...
  case score < 20: ... default: ... }`. It works because every `case`
  expression yields a boolean compared with `===` against `true`. Order
  matters (first match wins). He calls it a really bad practice, and wants
  you to **revert** it afterwards.
- Rewriting exercises: `if/else if` <-> `switch` (watch `==` vs `===`!):
  `if (a == 0)` and `if (a == 1)` become two `case`s; a combined
  `a == 2 || a == 3` becomes grouped cases.

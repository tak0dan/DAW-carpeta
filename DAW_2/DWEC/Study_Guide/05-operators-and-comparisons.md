# 05 - Operators, precedence, assignment, comparisons (LANG2.8-2.9)

## 5.1 Terms **[J]**/**[P]**

- **Operand**: what an operator is applied to. **Unary** (1 operand, `-x`,
  `+x`, `typeof x`, `!x`, `++x`), **binary** (2, `a + b`), **ternary** (3,
  `c ? a : b`; the ES name is *conditional operator*).
- Operators live inside expressions and combine them.

## 5.2 Math operators

`+  -  *  /  %  **` and the unary `+ -`, `++ --`.

- `%` is the **remainder** (not the mathematical modulo): the sign follows
  the dividend. `-5 % 3` = `-2`, `5 % -3` = `2`, `5.5 % 2` = `1.5`.
  Parity test: `n % 2 === 0` (never `=== 1`: negative odds give `-1`).
- `**` supports fractional exponents (`4 ** (1/2)` = 2). It works only in
  modern ES; compatible alternative `Math.pow()` **[P]**.
- `-2 ** 2` is a **SyntaxError**; write `(-2) ** 2` or `-(2 ** 2)`.
- `++`/`--` need a variable: `5++` is a SyntaxError.
  - Postfix `a++` returns the **old** value; prefix `++a` the **new** one.
  - `let a = 1; a++ + ++a` = `1 + 3` = `4`; `i = i++` leaves `i` unchanged.
- Bitwise: `& | ^ ~ << >> >>>` (exist; not deep in this course).

## 5.3 Precedence **[P]** (this is where he diverges from jsinfo)

jsinfo: "same precedence -> left to right". **Wrong.** Right-to-left ones:
`**`, all assignments, `? :`, `=>`, spread **[P]**.

Order, highest to lowest (summary he wrote):

1. Grouping `( )` (18)
2. Member access `.`, `[]`, calls `f()`, `new x()` (17)
3. Postfix `x++ x--` (15)
4. Prefix/unary: `++x --x ! ~ + - typeof void delete await` (14)
5. `**` (13, right-to-left)
6. `* / %` (12)
7. `+ -` (11)
8. Shifts (10)
9. Relational `< <= > >= in instanceof` (9)
10. Equality `== != === !==` (8)
11. `&`, `^`, `|` (7, 6, 5)
12. `&&` (4)
13. `||` and `??` (3)
14. Assignments, `? :`, `=>`, `...`, `yield` (2, right-to-left)
15. Comma `,` (1)

Facts to pin down:

- Unary `+` (14) binds tighter than binary `+` (11): `+apples + +oranges`
  adds numbers: `+"2" + +"3"` = `5`.
- `*` before `+`: `2 + "3" * 4` = `14`.
- `2 ** 3 ** 2` = `2 ** 9` = `512`.
- `!` > `&&` > `||`: `true || false && false` = `true`;
  `null || 2 && 3 || 4` = `3`.
- Relational is **above** equality: `a < b == c < d` groups the `<` first.
- `??` cannot be mixed with `||`/`&&` without parentheses (SyntaxError).
- Advice: do not memorise everything; **use parentheses** and intermediate
  variables, but do not go crazy. When reading someone else's code,
  verify by adding parentheses.

## 5.4 Assignment **[P]**

- `=` is an **operator**: it returns the assigned value, precedence 2,
  right-to-left. `x = y = 2 + 1` assigns `3` to both (declare both first).
- `let` is **not** an expression (`alert(let a = 3)` fails).
- Modify-in-place: `+= -= *= /= %= **=` (and `&&= ||= ??=` in modern ES):
  `n += 5` is `n = n + 5`.
- `let a += 3;` is a SyntaxError. `let a; a += 3;` gives `NaN`
  (`undefined + 3`).
- The comma operator: `(1 + 2, 3 + 4)` is `7`; evaluates all, returns the
  last. In `for` heads: `for (let i = 0, j = 3; i < j; i++, j--)`.

## 5.5 Comparisons (2.9)

- Result is a boolean. Operators `> < >= <= == != === !==`.
- **Strings** are compared **code unit by code unit** (Unicode), "not a real
  dictionary":
  - `"a" > "A"` (lowercase has a higher code), `"Z" < "a"`
  - `"apple" < "apple pie"` (prefix is smaller)
  - `"2" > "12"` (first characters decide)
  - `"ñ"`, `"á"` sort **after** `z` **[P]** -> wrong for Spanish users; use
    a locale-aware library. Same for accent-insensitive searching.
- **Different types** -> both converted to numbers:
  `"2" > 1` -> true; `"01" == 1` -> true; `true == 1`; `false == 0`.
  - `0 == false`, `"" == false`, **but** `0 == ""`... and `"" == "0"` is
    `false` while `0 == ""` and `0 == "0"` are `true` (`==` is not
    transitive).
- `==` cannot tell `0` from `""` or `false`; `===` (strict) does no
  conversion: different type -> `false`.
- **`null`/`undefined`**:
  - `null == undefined` is `true`; `null === undefined` is `false`.
  - `==` with them converts to nothing else: `null == 0` is `false`.
  - `>`, `<`, `>=`, `<=` convert to number (`null` -> `0`,
    `undefined` -> `NaN`): `null >= 0` **true**, `null > 0` false,
    `undefined > 0`, `< 0` and `== 0` all false.
- **Objects** compare by reference: `[] === []`, `{} == {}` are `false`.
- **His rule**: use `===`/`!==`. The only coercion allowed: the implicit
  truthy/falsy in a condition and explicit `Number()/String()/Boolean()`.
  Do not "fix" `==` in someone else's code lightly.
- Treat any comparison with `null/undefined` other than `===` with extreme
  care; never use `> < >= <=` on a variable that may be `null/undefined` -
  check separately.
- Chained comparisons are not math: `3 > 2 > 1` is `false`
  (`true > 1`); `1 < 2 < 3` is `true` (`true < 3`).
- `NaN` in any comparison -> `false` (`NaN != NaN` is `true`).
- `Object.is(a, b)`: like `===` but `NaN` equals `NaN`, and `+0` differs
  from `-0`.

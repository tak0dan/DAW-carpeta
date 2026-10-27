# 01 - How the professor thinks

Everything here is **derived from his own files** (task sheets, templates,
`*-comments.md`, the git guide, the forum rules). Where I am extrapolating
to what an exam will look like, it says **[inference]**.

His own rule, from `jsinfo-readme-first.md`: *"puede que matice, añada o
incluso contradiga lo que dice jsinfo. Por supuesto, lo que diga yo es lo
que va a misa."* In an exam, **his comments beat the textbook**. Where they
differ, this guide follows him (see the list at the end).

---

## 1. "Necessary but not sufficient"

> "for sure you can do an incorrect implementation that also shows this
> message. The message is a necessary but not sufficient condition for
> correctness." (math1)

> "(spoiler: we should find some [bugs] if we look deep enough)" (UT task)

> "Note: if none of your UT's fail, think twice before commiting"

He builds exercises where the **visible check passes on a wrong answer**.
Your job is to ask "what input would make my code lie?", not "does it print
the expected text?".

Habit: after you finish any task, attack it:

- boundary values (0, 19, 20, 100, 101, -1)
- values **between** the integers (19.5, 39.9) - closed intervals such as
  `<= 19` / `>= 20` leave a gap
- wrong types (`"75"`, `null`, `undefined`, `NaN`, `true`)
- `prompt()` returns `string | null` (`""` for OK with nothing, `null` for
  Cancel), so `Number(null) === 0` makes a cancelled prompt look like a
  terrible score
- "any crazy programmer (possibly yourself in two weeks in the middle of the
  night after 24h without sleeping)" calling your function

## 2. The template is part of the question

Read the **"Don't edit the code below here!"** part first. It encodes the
contract. Real traps from his templates:

| Template detail | What it forces |
|---|---|
| math1 prints "even" only if `evenOddResult === 0` | `evenOddResult` must be `finalResult % 2` (the remainder). Storing `finalResult % 2 === 0` (a boolean `true`) prints "odd. Hrm." |
| math1 pre-declares `let finalResult; let evenOddResult;` | Do not `let` them again: SyntaxError (already declared) |
| math2 checks `isNaN(finalNumber) === false` | `finalNumber` must exist at top level. If you declare it with `let` inside an `if { }` block it is out of scope below. If never assigned, it is `undefined` -> `NaN` -> fail |
| math2 `<title>math3</title>` | He copy-pasted. Do not "fix" things outside your zone; mention it in a comment if you like |
| math2 says "assignment shorthand" and "`typeof`" | Use `result *= result2` and an actual `typeof finalResult === 'string'` check. The method is graded, not only the number |
| math3: expected paragraphs "False", "True", "False" | The *statements* are phrased to mislead: "elephant weighs **less** than the mouse" -> `eleWeight < mouseWeight` is **false**. You test the statement, not the truth you wish |
| math3 passwords `'stromboli'` vs `'stROmBoLi'` | `===` is case-sensitive -> `false`. No `toLowerCase()` |
| conditionals1 "add **another** test for winter" | Use `else if`. Two independent `if`s make the second `else` overwrite the summer message |
| conditionals2 text contains `it\\'s` | The double backslash is a Markdown artefact. In JS write `'it\'s'` or `"it's"`. The UT later expects the real sentence `That's a great score, ...` |
| conditionals3 "in a **single line**, using something that isn't an `if...else`" | The conditional (ternary) operator. Note that `pwdResult` only applies **if the machine is on** |
| loops3 `isPrime(num)` uses its own `let i` | It **shadows** the global `i = 500`. Good: it does not clobber yours. And `isPrime(1)` is `true` (so "1 is not counted" -> start at 2) |
| loops3 "three different types of loop", "newline separation" | `while`, `do..while`, `for`. And `\n` inside `textContent` renders as a space in HTML unless `white-space` is `pre`/`pre-line` (see chapter 08) |
| UT task "`uts.js`" vs "loads `main.js` then `ut.js`" | The sheet is inconsistent; the **Deliver tree** says `uts.js`. Use the file that exists |

## 3. "Do it exactly this (unneeded) way"

His instructions often prescribe the **construct**, not just the result:

- "use assignment shorthand" -> `*=`
- "Check the data type using `typeof`" -> do not skip it because "toFixed
  always returns a string"
- "Do the loop three times using three different types of loop"
- "nest another `if...else`" inside the first
- "in a single line, using something that isn't an `if...else`"
- "use ternary for score" / "as a single expression" / "use `switch` for
  score (a hacky use)"
- "Store the result in a variable called `finalResult`" (exact names!)
- "Call the variables something sensible" (the name is judged)

Rule: **follow the prescribed construct literally**, even when you know a
shorter way. The point of the exercise is the construct. He even says the
switch version "for sure is a **really bad** practice. But, hey! We are
having fun here, with our safety net." Do it, then revert it.

## 4. Exact formats are graded

- File and folder names, case, ASCII only: `dwec1p2.nunez-de-balboa.jose-luis.zip`
  (first surname, then name; compound surnames and names kebab-cased;
  accents/ñ removed; second surname dropped).
- Content **directly under the ZIP root**, not inside an extra folder.
- **Only** requested files (extra notes -> code comments, or a lowercase
  English `readme.md` at the ZIP root).
- Up to **-5 points** for wrong formats, names or structure (that is half a
  10-point task).
- Console output: "exactly 5 lines", header separator `|-|-|-|-|-|-|` has one
  more `|-|` once a field is added, `Fails: ` + number after a blank line,
  `Pass`/`Fail` capitalised, expected/actual **only printed on failure**.
- Commit titles verbatim, in Conventional Commits style, ending in `(#n)`,
  branch `main`, HTML `<title>` prefixed with `first-surname.name`.

## 5. He tests whether you can *read* hostile code

From `jsinfo-lang-3-code-quality-comments.md`:

> "Cojo-expresiones y código en un solo statement: aquí lo hago para
> forzaros a entenderlas ... y comprobar si, con dedicación, sois capaces de
> seguir ese código. Porque otros escribirán (y mucho) así en la vida real."

**[inference]** Expect "what does this evaluate to" questions on dense code:
nested template literals (`` `a ${`b ${`c`} d`} e` ``), `+apples + +oranges`,
the comma operator, chained ternaries, `x = y = 2 + 1`, short-circuit
`a || b && c`, `typeof typeof 0`, `null >= 0`, `[] == ![]`. Chapter 09 trains
exactly this, with 204 executed examples.

He also admits he commits some "sins" in class (one-letter names, reused
variables, `num1`/`num2`): **in an answer sheet use the good version**.

## 6. Technical names matter

He keeps inserting "now I'm showing their **technical names**". Learn the
exact term:

- *template literal* (backticks), *string / numeric / boolean / null /
  object / array / regular-expression literal*
- *expression* vs *statement*, *expression statement*, *block statement*
- *conditional operator* (the ES name) = "ternary"; *unary / binary / ternary*
- *falsy / truthy*; *type conversion* = casting = coercion (MDN: coercion =
  implicit only)
- *function declaration* vs *function expression* vs *arrow function*;
  *callback*; *hoisting*; *shadowing*; *global / local / outer variable*
- *modal window* (alert/prompt/confirm)
- *JIT compilation*, *transpilation*, *polyfill*, *linter*, *minifier*
- *Same Origin Policy*, *Web APIs* (browser) vs *Web API* (HTTP/REST)
- *ECMA-262 / ECMAScript (ES)*, *WHATWG living standards*, *SemVer*,
  *Conventional Commits*, *atomic commit*, *regression test*, *UT*

## 7. Style rules he will check by eye (no linter in the exam)

- **80 columns**, **2-space indentation**, consistent style (or consistent
  with the code you touch).
- Choose one quote style and keep it (single quotes is the popular JS
  choice; JSON needs double). Exception: the other quote to avoid escaping.
- Semicolons: use them (SemistandardJS). No `;` after a block `}`.
- `'use strict';` at the top of scripts (he asks to be reminded when he
  forgets).
- `const` by default, `let` only when reassigned. No `var`.
- `lowerCamelCase` for variables/functions. **Not** `UpperCamelCase` (classes
  only), **not** `snake_case`.
- Names: semantic, with unit if not SI/obvious (`alturaCm`, `pesoKg`), not
  `data`/`value`/`num` (unless truly generic like `num1`, `num2` in a
  generic sum), one meaning per variable (never reuse a variable for
  something else), consistent vocabulary (user vs visitor).
- Real booleans: `true`/`false`, never `"true"`, `"yes"`, `"si"`.
- `null` = a programmer deliberately put "empty"; `undefined` = never set.
  Do not assign `undefined` yourself.
- Strict equality `===`/`!==`. The only coercion he accepts: truthy/falsy in
  a condition, and explicit conversion (`Number()`, `String()`, `Boolean()`).
- Comments say **intent** (why / what for), not a narration of the loop. As
  a junior, too many > too few. Use *functions as comments* (good names).
- No deactivated code left in committed code (version control remembers).
- Prefer line comments `//` for multi-line comments because `/* */` cannot
  nest.
- Avoid nesting when you can (flat `else if`, early `return`/`continue`).
- If you needed something not taught yet: **comment that you did, and the
  source**.

## 8. Where he corrects or tightens jsinfo (exam = his version)

| Topic | jsinfo says | Professor says |
|---|---|---|
| Operator order | "same precedence -> left to right" | **Wrong**: `**`, assignments, `? :`, `=>`, spread are right-to-left |
| `else if` | looks like a keyword | Not extra syntax: just `else { if ... }` written flat |
| `NaN` | "not a number" | `NaN` **is** a number (`typeof NaN === 'number'`) |
| "Script never dies" | numeric errors give NaN | Convenient short term, hides bugs; you can still make it die |
| null vs undefined | similar | undefined = not set by programmer; null = set on purpose |
| Ternary for side effects | "not recommended" | Agrees, but the jsinfo example is bad: it should be `alert(cond ? 'Right!' : 'Wrong.')` |
| Ternary | "conditional/question mark operator, sometimes ternary" | Often called ternary; ES name is conditional operator; it is an *expression* equivalent of `if` |
| `;` | "recommended" | Yes, but console may omit; never after block `}`; StandardJS omits; use **SemistandardJS** |
| `alert` | used everywhere | Bad practice in real apps; use `console.log` (also works in node) |
| Everything is an object | "almost" | Primitives have wrappers but behave very differently; arrays, regex, functions are objects with special syntax |
| `const` | for known-constant | **By default**; `let` only if needed (even for arrays/objects) |
| Quotes | mixed | Pick one and be consistent; jsinfo is inconsistent, "do not imitate" |
| Code in a comment | "temporarily disable" | Never commit it |

## 9. Process habits he grades

- **Atomic commits** with a testable state; `fix:` per failing test, separate
  commits (`#3.1`, `#6.1`, ...).
- UT before refactor: a **regression safety net** is what makes it safe to
  "play" with refactors.
- Revert by naming the reverted commit: `revert: "refactor: use switch for
  score in getResponse (#9)" (#10)`.
- Forum: title `etiqueta: keywords` (e.g. `dwec1p2: 4. ...`), one issue per
  thread, code as **text** not screenshots, quote + attribute anything not
  yours, a screenshot is not a phone photo (<= ~1000 px wide).
- Do the jsinfo tasks **written down**, not in your head, before reading the
  solution. "Better not doing a task than reading it and immediately the
  solution."

## 10. Mental checklist for every question he writes **[inference]**

1. What is the *type* of each thing here? (string from `prompt`? number?)
2. Is there a hidden conversion? (`+` with a string, `==`, a comparison of
   strings, `if (x)` with `"0"`/`[]`)
3. Which operator wins? Which side is evaluated first / skipped
   (short-circuit)?
4. What if the input is on the boundary or **between** boundaries?
5. What if it is `null`, `undefined`, `NaN`, empty, wrong case?
6. Is it a statement where an expression is needed (or vice versa)?
7. Does a newline change meaning (`return`, ASI)?
8. Which scope does each name live in? Hoisted? In its temporal dead zone?
9. Is the exact requested construct and exact requested output format used?
10. Would a linter / strict mode have caught this?

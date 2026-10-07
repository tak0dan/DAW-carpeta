# jsinfo LANG 2: JavaScript Fundamentals (comments)

## "2.1 Hello, world!"

### "The "script" tag"

JavaScript programs can be inserted almost anywhere into an HTML document using the `<script>` tag.

For instance:

```html run height=100
<!DOCTYPE HTML>
<html>
<body>
  <p>Before the script...</p>
  <script>
    alert( 'Hello, world!' );
  </script>
  <p>...After the script.</p>
</body>
</html>
```

> [!t] t: alert() is bad practice, but forgiven here
>
> - js.info uses the straighforward `alert()` a lot. We will use them happily
>   for immediateness in learning.
> - But keep in mind that in Web pages in the real world, it isn't
>   currently a good practice to use them (for reasons not detailed
>   here): you should use HTML elements inside the page itself.
> - Besides: for quickly showing info for learning/examples, instead of
>   `alert()` (blocking and tied to the browser environment),
>   we can use `console.log()` (permits also executing in node most of the
>   examples of the Part I of jsinfo on JS language).
> - Apart from `alert()` and `console.log()`, another typical JS "Hello world"
>   for browser is to do some DOM manipulation (using e.g. `textContent`
>   property to write the text inside an HTML element that is shown in
>   the page).

[...]

### "External scripts"

[...]

We can give a full URL as well. For instance:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

> [!t] t: Possible URL's
>
> - When loading external JS file (script element with src attribute),
>   we can use any type of valid URL there that resolves to the file:
>   as seen in these examples it can be absolute (with possible implicit
>   parts), but it can also be relative.
> - We cover elsewhere the details on possible URLs and their resolution.

To attach several scripts, use multiple tags:

[...]

The example above can be split into two scripts to work:

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

> [!t] t: 3 ways of adding JS to HTML
>
> There are [3 ways of adding JS to your page (from MDN Learn)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page).
> Their names are:
> - **External JS**: external .js file loaded with a script element (src
>   attribute).
> - **Internal JS**: JS specified as contents of a script element.
> - **Inline JS -handlers-**: JS specified as the value of some particular
>   attributes on different HTML elements.
>   - E.g.:
>
>     ```html
>     <button onclick="alert('Hi!');">Click to greet</button>
>     ```
>
>   - This possibility is not mentioned by jsinfo: it is a bad practice, but
>     you may see this used in bad or old code. Do not confuse it with modern
>     FE frameworks that tend to specify HTML+CSS+JS as componentes,
>     all-in-one place (e.g. with the JS extension named JSX). If done that
>     way, it is a modern good practice.

> [!t] t: Single shared global scope by default:
> - For now: no matter how you load JS code of the 3 ways, the code sees and
>   shares a unique global scope.
> - This is for good (quick and dirty), and for bad (not scaling).
> - It can be avoided with some techniques. The modern one is with ES6 modules
>   specified somehow with the "type" attribute, as mentioned in section above
>   "Modern markup".

> [!t] t: Quotes and double quotes in JS. Equivalent, but... Consistency?
> - In this Hello wolrd page in jsinfo, you will see examples of strings
>   using 'single quotes' and others using "double quotes".
> - Other languages allow only one of the two ways, or reserve a different
>   meaning for them. But in JS, they are equivalent.
> - I would recommend to choose a convention between the two, and stick to
>   it for consistency.
>   - If you are collaborating in a project, just follow the convention
>     specified by their chosen (programming) style guide. If not known,
>     just follow the convention you see used (or more used) in its
>     codebase.
>   - If it is our own code, you can choose your convention:
>     - Double quotes: are typically more familiar when you come from other
>       languages. Also JSON does not allow single quotes, so when writing
>       directly JSON, you don't have to change your mindset.
>     - Single quotes: are maybe more popular in JS world.
>   - You may use the alternate one as an exception for the convenience of
>     avoid escaping possible included quotes in the text.
> - In ES6+, there is a third option with nuances, the \`backticks\`, that
>   we will cover later in the course.
> - jsinfo is absolutely inconsistent in its use of single vs double quotes
>   (as you will see all over the course). Do not imitate this.

## "2.2 Code structure"

### "Statements"

[...]

Usually, statements are written on separate lines to make the code more readable:

```js run no-beautify
alert('Hello');
alert('World');
```

> [!t] t: Statement vs expression:
>
> - TODO: maybe place this comment later in the course... but **not too
>   late**. Lots of stuff in JS and modern practices (e.g. tending to
>   functional programming) is facilitated by acquiring this basic
>   knowledge.
> - There is a distinction in programming languages between "statements" and
>   "expressions" (each language may have some nuance on this).
> - You can sort of survive without knowing the details/distinctions, but
>   getting into this at some point will help support a lot of JS knowledge,
>   and better understanding and producing code (that may result too magic
>   otherwhise).
> - You can have a look to this
>   [short and gentle introduction to statements vs. expressions in JS](https://www.joshwcomeau.com/javascript/statements-vs-expressions/).
>   These are the key takeaways:
>   - Expression is a bit of code that produces a value (or directly
>     represents a value), usable in some particular "slots" of an statement
>     (places where they can be).
>   - In the "slot" for an expression, you cannot place a complete
>     statement: only an expression.
>   - But an expression can be the only thing placed in an statement (they
>     are called then "expression statement") in which case they returned
>     value is "lost" (except if executed in the console, where it is
>     printed). But it may make sense doing this when they are doing
>     something colateral besides returning their value.
>   - Statements:
>     - Can be chained (even in the same line) with ";".
>     - Can be (nestedly) grouped in blocks with `{}`.
>       - These are called
>         [block statements in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block).
>   - Expressions:
>     - Can be chained (even in the same line) with ",". In that case, the
>       last one is the one generating the whole value.
>     - Can be (nestedly) grouped with `()`.

### "Semicolons"

[...]

We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let's note once again -- *it is possible* to leave out semicolons most of the time. But it's safer -- especially for a beginner -- to use them.

> [!t] t: Exceptions to the ";": console, block statements, and StandardJS style.
>
> - "We recommend putting semicolons between statements even if they are
>   separated by newlines.".
> - This is a perfectly valid general advice, and jsinfo justifies with an
>   example the risk of not doing so. Having more ";" than strictly
>   necessary is generally safer than having less (the same happens with
>   parentheses).
> - But some exceptions can be seen.
> - Can be (optionally) avoided in the interactive console:
>   - The risk is less big there: the "Enter" key ends an statement input
>     (contrary to the source code, where, as shown, a statement can be
>     divided with new lines anywhere we could place a space).
>   - So you can afford in the console to ommit the ";" for inmmediateness.
>   - Just don't get used to it for code elsewhere!
> - Block statements do not end with ";":
>   - We will see later that there are statements that typically allow for
>     block statements: e.g. if's, loops, function declarations, ... specify
>     blocks of statements between `{}`. Inside these, each statement has its
>     ";"...
>   - ... But don't put ";" after the `{}` when you use them. In some cases it
>     will raise an error. Not in other cases, but it is still incorrect.
> - A famous JS style guide called
>   ["JS Standard Style" (StandardJS)](https://standardjs.com/) never uses
>   unnecessary ";" (after statements):
>   - StandardJS is a style guide that tries to end the "styling guide"
>     fights, proposing a standard reasonable way of styling JS, not
>     dependent on the project or the tastes of the programmers.
>   - It also provides a JS linter: extremely useful.
>   - But, among other things, it asks to never use the ";" unless in the
>     quite rare cases where it is needed (an example could be the one shown
>     by jsinfo). This was quite polemical.
>   - It arguments quite convincingly the reasons. In fact I completely
>     agree with them... only that they would apply for a fresh new world.
>   - You may encounter code with this style adopted by very clever and
>     competent people.
>   - But it is true that the use of ";" is de facto overwhemly adopted by
>     the JS community: the majority of style guides and JS usage in the
>     wild.
>   - StandarJS finally granted this fact, and they produced a variant
>     called **Semi**standardJS: exactly the same guide, but using ";"
>     (**semi**colons). Benefits of a unique style, without the unpopular
>     drawback of removing the ";".
>   - As with any attempt to standardize, here also may apply
>     ["how standards proliferate" (by XKCD)](https://m.xkcd.com/927/).
>   - Nonetheless, SemistandardJS can be a very sensible default to use in our
>     code when there is not a requirement to follow another specific guide (or
>     the code to which you contribute to does not use a clear and consistent
>     style). The argument for use it on a new contexts is: let's not loose
>     time deciding or arguing on this.
>   - A StandardJS/SemiStanardJS linter helps to follow these style guides
>     and also to catch some programming errors early. We'll see how we can
>     install and use it.
>   - **Warning:** do not confuse "StandardJS" (it's a **styling guide**) with
>     ES standards (the standardization of **the JS language** by standards
>     organizations)

### "Comments"

[...]

The content of comments is ignored, so if we put code inside <code>/&#42; ... &#42;/</code>, it won't execute.

> [!t] t: Alternative names
>
> - "One-line comments" = line comments
> - "Multiline comments" = block comments

Sometimes it can be handy to temporarily disable a part of code:

```js run
/* Commenting out the code
alert('Hello');
*/
alert('World');
```

> [!t] t: Don't leave "deactivated" code in commited real code (professionally)
>
> - Imagine that you have this:
>
>   ```js
>   alert('A');
>
>   alert('B');
>
>   // A perfectly valid comment on the purpose of the following line:
>   alert('C');
>   ```
>
> - Then you "deactivate" some code:
>
>   ```js
>   alert('A');
>
>   // I used this once, I leave it here commented, just in case I may need
>   // it some day again:
>   //alert('B');
>
>   // A perfectly valid comment on the purpose of the following line:
>   alert('C');
>   ```
>
> - Before commiting to version control (production code), it should be
>   better deleted:
>
>   ```js
>   alert('A');
>
>   // A perfectly valid comment on the purpose of the following line:
>   alert('C');
>   ```
>
> - If you ever need again the deleted code, you have the version control to
>   come back to the past. If you correctly used the commit messages, it
>   should be easy to locate the particular version that deleted it.

Nested comments are not supported!

There may not be `/*...*/` inside another `/*...*/`.

Such code will die with an error:

```js
/*
  /* nested comment ?!? */
*/
alert( 'World' );
```

> [!t] t: Advice: use line comments for comments spanning multiple lines
>
> - This is because they can be safely nested when needed (e.g. to
>   temporarily comment some code for troubleshooting or for testing
>   something).
> - By hand this can be painful: that's why it's recommend to learn your
>   editor's shortcuts for this.

Please, don't hesitate to comment your code.

> [!t] t: ¿More or less comments?
>
> - I fully agree with this advice, and specially while learning: your sin
>   will typically be insufficient comments and not too much comments.
> - However, too much comments may interfere with code legibility (break its
>   "reading flow", by puting related code too separated).
> - In these cases, you can use vscode's "Fold all block comments"
>   (`ctrl+k ctrl+/`).
> - It also works for line comments spanning multiple lines.
> - Unfold all if needed with `ctrl+k ctrl+j`.
> - There is an extension "Hide comments" to hide comments even more. But it
>   works somehow like CSS's `visibility: hidden;`: they still ocuppy their
>   place. It would be good a way of producing something like CSS's
>   `display: none;` (really disapearing).
> - As you gain good programming experience, you can produce code that speaks
>   better for itself (with the structure and naming decisions). Few comments
>   are needed in this case. But currently you are probably yet too far from
>   this nirvana. So: don't hesitate to comment your code.

Comments increase the overall code footprint, but that's not a problem at all. There are many tools which minify code before publishing to a production server. They remove comments, so they don't appear in the working scripts. Therefore, comments do not have negative effects on production at all.

Later in the tutorial there will be a chapter <info:code-quality> that also explains how to write better comments.

> [!t] t: Comment toggle trick (extra)
>
> - There is a hack/trick to toggle the activation of a block of code by
>   inserting/deleting a single character.
> - Deactivated:
>
>   ```js
>   /*
>
>    alert('A');
>
>    // */
>    ```
>
> - Add a `/` before the `/*` to activate (remove again to deactivate):
>
>   ```js
>   //*
>
>    alert('A');
>
>    // */
>    ```
>
> - There is also a variant to toggle between "A" and "B" versions of code.
> - "B" activated:
>
>   ```js
>   /*
>
>    alert('A');
>
>    /*/
>
>    alert('B');
>
>    // */
>    ```
>
> - Switch to "A" activated by preceding with a single `/` character:
>
>   ```js
>   //*
>
>    alert('A');
>
>    /*/
>
>    alert('B');
>
>    // */
>    ```
>
> - I may pesonally use this for teaching purposes: prepared demos/quick
>   proofs of concept/etc.
> - But, as seen in general for deactivating code with comments: don't use
>   this for real (production professional) code.

## "2.3 The modern mode, "use strict""

### "Should we "use strict"?"

[...]

**So, for now `"use strict";` is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.**

> [!t] t: JS backwards compatibility:
>
> - JS really tries hard to mantain backwards compatibility.
> - Things are added to the language/environments, but it tries that any old
>   code still works on a modern engine.
> - If you add a new syntax, this makes no problem: the old code will have
>   never used this.
> - But the changes that occur with "use strict" are changes of behavior of
>   the **same code**. This is why this had to be marked for the engines.
> - Since strict mode is better for new code, they enabled this mode by default
>   on new contexts incorporated later to the language (classes and modules).
>   Also, many bundlers (webpack, rollup, ...) may by default insert it in
>   our code when "bundling it".

As of now, we've got to know about `use strict` in general.

In the next chapters, as we learn language features, we'll see the differences between the strict and old modes. Luckily, there aren't many and they actually make our lives better.

All examples in this tutorial assume strict mode unless (very rarely) specified otherwise.

> [!t] t: "Should we “use strict”?": Sure! But we may forget!
>
> - **"All examples in this tutorial assume strict mode unless (very rarely)
>   specified otherwhise"**
>   - That means that when we do any test in a `.js` file or inside a
>     `<script>` tag, we **should also remember ourselves** to place
>     `'use strict';` at the start.
>   - When I forget this in this course: **please help me** (warn me)!
>   - You can make quicker the insertion of this by
>     [adding a custom JS snippet to vscode](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets).
>     In particular:
>
>     ```json
>     "Use strict mode": {
>       "prefix": "use",
>       // Assuming single quote and semicolon style guide:
>       "body": [ "'use strict';" ]
>     } // Place a "," here if not the last snippet.
>     ```
>
>     Then, by writing `use{Tab}` in a JS context, it will expand to
>     `'use strict';`.

## "2.4 Variables"

### "A variable"

A [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) is a "named storage" for data. We can use variables to store goodies, visitors, and other data.

> [!t] t: Stores information", but **not persistently**!
>
> - This is stored in registers/RAM (volatile memory).
> - For persistence, we need quite other more advanced mechanisms:
>   - For browsers these are seen in chapter "ADD 4 Storing data in the
>     browser".
>   - For server side/node, see chapter "ADD 2 Binary data, files", and its
>     article "2.4 File and FileReader".
>   - And for sure, we may store persistently stuff in DB's with a variety
>     of mechanisms completely out of the scope of this FE course.

To create a variable in JavaScript, use the `let` keyword.

[...]

To be concise, we can combine the variable declaration and assignment into a single line:

```js
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!
```

> [!t] t: Shared global scope and order test
> - Declare a variable in a .js file, load it in an .html, then use it with
>   alert in the contents of a following `<script>` element and from the
>   console.
> - Note that it is not available if we invert the order.

We can also declare multiple variables in one line:

[...]

Technically, all these variants do the same thing. So, it's a matter of personal taste and aesthetics.

> [!t] t: ... unless you are collaborating
>
> - When working with others, follow the style guides agreed or in use.
> - If none are used, use SemiStandardJS (with a linter), and forget about it.

[...]

### "A real-life analogy"

[...]

We can also declare two variables and copy data from one into the other.

> [!t] t: Only "copies data" for primitive data types (number, string, boolean, ...).
>  - For non-primitive (array, object, ...), only the reference is copied when
>    asigning with `=`, then both variables point to the same place.

Functional languages

It's interesting to note that there exist so-called [pure functional](https://en.wikipedia.org/wiki/Purely_functional_programming) programming languages, such as [Haskell](https://en.wikipedia.org/wiki/Haskell), that forbid changing variable values.

In such languages, once the value is stored "in the box", it's there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can't reuse the old one.

Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.

> [!t] t: Functional programming on non pure functional languages:
>
> - Why does jsinfo talk about strange "functional languages"?
> - It is because there is a huge trend in some "non pure functional
>   languages" (like JS and others) to use them increasingly in a
>   "functional way": that is restrict oneself to (or favoring) the ways of
>   doing things in that way.
> - This has been increasingly adopted since ES6 and in the way that many JS
>   frameworks and libraries work and are used.
> - Forbiding changing variable values is only one of the typical aspects of
>   functional programming. There are many others, that we will address
>   during this course.
> - When comming from "classical" languages, it may get some time to be used
>   to this programming style. But it has some benefits. And in any case,
>   **many people** program nowadays in this way, so we'd better be able
>   *understand their code!

### "Variable naming"

[...]

When the name contains multiple words, [camelCase](https://en.wikipedia.org/wiki/CamelCase) is commonly used. That is: words go one after another, each word except first starting with a capital letter: `myVeryLongName`.

> [!t] t: use lowerCamelCase, but **not** UpperCamelCase **nor** snake_case
>
> - Don't use UpperCamelCase (even if you can)
>   - Nor for variables names, nor for normal function names.
>   - Convention reserves this for class names (and its alternative in JS
>     "constructor functions").
> - Don't use snake_case (even if you can):
>   - Convention is lowerCamelCase.

[...]

The code below gives a syntax error:

```js
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
```

> [!t] t: Memorize all the forbidden words... Or better use a linter
>
> - We may want the help of a linter here to warn us on time.
> - Remember that, otherwhise, until that line of code is stimulated, you
>   will not get any error. Do you have a thorough regression unit test
>   battery?
> - The alternative is to memorize every reserved word (and hope it does not
>   change with new additions to the standard).

[...]

This is a bad practice and would cause an error in strict mode:

```js
"use strict";

num = 5; // error: num is not defined
```

> [!t] t: Once warned...
>
> - We may want to use undeclared variables for quick tests on the console.
> - But don't get used to it in your code, or it will byte you someday
>   unexpectedly in the future.

### "Constants"

[...]

When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and clearly communicate that fact to everyone.

> [!t] t: To const or not to const?
>
> - Some style guides/linters recommend to use `const` always by default for
>   variables...
>   - ... Then only change to `let` if it happens to be needed (defensive
>     programming). This is an easy to follow rule and systematic, and we will
>     adhere to it
>   - `const` on non-primitive types (arrays, objects, ...):
>     - The variable may be typically constant, even if what is pointed to can
>       be altered in its fields ("not semantically constant").
> - Some other prefer to use const only when semantically constant (which in
>   any case the language is not able to ensure for the contents of
>   non-primitive types).

[...]

### "Name things right"

[...]

Some good-to-follow rules are:

- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, `c`, unless you really know what you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.


> [!t] t: "Stay away from abbreviations or short names"
>
> - I will sometimes skip this rule for inmmediateness: on demos and
>   examples, specially orally explained or out of a real program context.

Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.

> [!t] t: It's difficult to name things right, but **EXTREMELY IMPORTANT**
>
> - Many things here also applies not only to variable names, but also to
>   functions, classes, modules, files, folders, whole projects, whole
>   companies, web sites, ...
> - The more limited is the scope (the more local variable), the less ambigüity.
>   And also the less risk of name clash. Go for local!
> - Too long names also reduce legibility: use the necessary and sufficient
>   words in this context/scope.
>   - But better too long than too short.
>   - Your editor completion may be your friend here.
> - "Sounds simple?" In practice, it is one of the [two hard things in
>   programming](https://martinfowler.com/bliki/TwoHardThings.html).
>   - But it is very important: at least, pay attention to it to start
>     improving.
> - Not easy to preview all the future. Refactor names when needed!
>   - Modern Agile development practices recommend this (counting on a good
>     regression test battery).

"Reuse or create?"

And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

As a result, their variables are like boxes into which people throw different things without changing their stickers. What's inside the box now? Who knows? We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging.

> [!t] t: Not only them...
>
> ... but also any collaborator or future mantainer.

An extra variable is good, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code.

### "Summary"

[...]

> [!t] t: On task "Create a variable with the name of our planet"
>
> (spoiler alert: don't read this until you have tried the task yourself)
>
>
> - Not sure if this is a good exercise/example... but it is quite
>   interesting to think about it with a critic mind.
> - Shouldn't this be a constant? Unless we go multilingual.
> - "planet" here is for sure not good enough.
> - But maybe "ourPlanet" (without "Name") could be enough and maybe
>   sufficient (implicit).
> - If more things are added later, they can take "ourPlanetSize", ...
> - And if some day we refactor to an object "ourPlanet", then it will
>   for sure get a "name" attribute in that context.
> - "ourPlanetName" is in any case also good. In doubt, tend to long.

## "2.5 Data types"

### "Number"

[...]

The *number* type represents both integer and floating point numbers.

> [!t] t: This is a key difference of JS with other languages like Java
>
> - This "fusion" of integer+float is handy and cool for starting, but
>   has non trivial drawbacks when code becomes complex.

[...]

- `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

  [...]

  So, if there's a `NaN` somewhere in a mathematical expression, it propagates to the whole result (there's only one exception to that: `NaN ** 0` is `1`).

> [!t] t: In JS, "NaN" (**not** a number) **is** indeed a number
>
> - It is a number, with a "special numeric value".
> - This nuance is sometimes important.

[...]

The script will never stop with a fatal error ("die"). At worst, we'll get `NaN` as the result.

> [!t] t: It will not crash/die... Good, but...
>
> - It's a short term convenience not to be nagged, but errors may pass more
>   easily hidden and maybe be detected quite late, in production. Not good
>   at all.
> - "will never die": never say never. You can make it die with some
>   Mathematical operations... And for the previous paragraph, in fact you
>   will be lucky: when programming, you normally want to detect
>   problems as early as possible in development stages. And for sure
>   not in production (with 3 billion users and witnesses using your
>   -broken- software to make your company rich, or with a bunch of doctors
>   using your -broken- software to do brain surgeries).

[...]

### "String"

[...]

The expression inside `${…}` is evaluated and the result becomes a part of the string. We can put anything in there: a variable like `name` or an arithmetical expression like `1 + 2` or something more complex.

> [!t] t: It can be any expression
>
> - Another typical example is the execution of a function, returning a value.
> - Or it can contain other template literals nested:
>
>   ```js
>   alert(`a ${`b ${`c`} d`} e`); // Output?
>   ```
>
> - Or any combination. Any expression (or series of expressions) can go
>   inside the `${...}`.
> - The same applies e.g. for what we put on the right of a `=`
>   assignment, or as a function parameter, or at an if or loop guard, or
>   at many other places that accept an expression: they all accept an
>   (arbitrarily complex) expression.
> - So it is very good to know what can be an expression in JS (and what
>   cannot be).
> - Specially since functional programming style and many programmers use
>   extensively complex expressions: we need at least this to understand the
>   code.

Please note that this can only be done in backticks. Other quotes don't have this embedding functionality!

```js
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
```

> [!t] t: Backticks \`...\` are called "template literal".
>
> - Good to know this technical name.
> - ES6+.
> - Also it allows normal newlines inside, contrary to the other two string
>   notations. In the other notations, you can specify a newline with "\n".

> [!t] t: Other JS literals
>
> - There are many JS literals producing primitives (we see them in this
>   chapter, but now I'm showing their **technical names**):
>   - string literals (`'...' ` and `"..."` and templete literals \``...`\`):
>     - Specification of a particular strings with single and double quotes.
>     - We will see details on escaping, inserting more special characters,
>       inserting unicode, ...
>   - numeric literals:
>     - Specification of a particular number or bigint.
>     - We will see that they can be expressed in different ways (e.g. different
>       bases, with scientific notation, ...).
>   - boolean literal: `true` or `false`.
>   - null literal: `null`.
> - Other JS literals, not producing primitives (we will see them later in the
>   course):
>   - object literal (`{...}`) and array literal (`[...]`):
>     - Permit specifying directly an object or an array.
>     - Not many languages provide this for creating objects.
>   - regular expression literal (`/.../`):
>     - Produces directly an object of the class RegExp.
> - All these literals are the powerful JS "literal notation", also the basis
>   of the ubiquous JSON format (JSON stands for JS Object Notation... since
>   almost everything in JS ends up being an Object).

[...]

### "Boolean (logical type)"

[...]

We'll cover booleans more deeply in the chapter <info:logical-operators>.

> [!t] t: If it's boolean, use a boolean for good
>
> - Please use a boolean when something is semantically a boolean.
> - Use `true` and `false` (reserved words), and **not** `"true"` and
>   `"false"` (strings... and JS will not complain, remember that it is
>   dinamically typed).
> - And for sure don't use for a semantic boolean something like `"yes"` and
>   `"no"`, or `"si"` and `"no"`. The way it is showed later (if needed) to a
>   human end users should not contaminate all your code.

### "The "undefined" value"

[...]

...But we don't recommend doing that. Normally, one uses `null` to assign an "empty" or "unknown" value to a variable, while `undefined` is reserved as a default initial value for unassigned things.

> [!t] t: null or undefined?
>
> - Nuance between "null" and "undefined" is tricky. Stick to the good advice:
>   - Leave "undefined" for something not put by the programmer.
>   - "null" is something at some point explicitly placed by a programmer.

### "Objects and Symbols"

The `object` type is special.

All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

Being that important, objects deserve a special treatment. We'll deal with them later in the chapter <info:object>, after we learn more about primitives.

> [!t] t: Some say that "in JS, everything are objects"
>
> - The primitive types in JS (except null and undefined) have also "object
>   wrappers".
>   - E.g.  methods for a string or for a number.
>   - One can test this by using completion in the console.
> - But be careful: primitives (even with their "object wrapper") behave
>   very differently non primitives. It is critical to distinguish them.
> - And it is true that all non-primitives are all Objects.
>   - But there are some particularly important sub-types, that are not
>     typically thought as "objects".
>   - They are subtypes that can be used alternatively with special
>     syntax for them (besides being treatable as as objects, since they
>     are objects, but they deserve the possibility of a special syntax
>     for convenience).
>   - I mention 3 important sub-types of objects:
>     - **Arrays**
>       - They are objects of class "Array" (independently of the
>         type(s) of their members.
>       - One normally uses the bracket notation with them (index
>         start counting at 0, as with other languages). E.g.:
>
>         ```js
>         const numbers = [6, 7, 8, 9];
>         console.log numbers[2]; // 8
>         ```
>
>       - jsinfo does not treat (even mention) Arrays in this LANG 2
>         chapter. It introduces them only in the LANG 5 chapter, at
>         article 5.4. However, in our case we will flash forward to
>         that article during our LANG 2 covering (they are essential
>         for doing interesting stuff).
>     - **Regular expressions**
>       - Regular expressions are a special sublanguage used inside many
>         languages. It is specialized in searching or specifying
>         patterns inside text.
>       - They are objects of class "RegExp".
>       - They can be directly defined with a special literal notation
>         reserved for them `/ /`. E.g.:
>
>         ```js
>         const startsWithDigit = /^[0-9]/;
>         // Note that there are not quotes. It is **not** a string
>         // as would have been if declared like this:
>         const notARegExprButAString = "/^[0-9]/";
>         const neitherARegExprButAString = "^[0-9]";
>         ```
>
>       - jsinfo covers regular expressions at the very end of the last
>         part of the course (at an extensive chapter ADD 7). In our
>         case, we will flash forward before (when covering strings in
>         more detail at LANG 5.3).
>     - **Functions**
>       - They have special syntax for declaring and invoquing them (we
>         will cover the syntax soon).
>       - But keep in mind that in JS, a declared function is **also**
>         an object, of class "Function". In many contexts, a declared
>         functions can later be used as an object (we will see use cases
>         of this during the course).
>       - Curiously, even if they are objects, when we apply the
>         `typeof` operator on a function (see next section), it answers
>         "function" instead of "object".
> - No explicit class needed for creating objects in JS
>   - Contrary to other more "pure" OO languages like Java, JS permits
>     creating objects on the fly by different means, without having
>     previously declared a particular class for them.

The `symbol` type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

### "The typeof operator"

[...]

The last three lines may need additional explanation:

1. `Math` is a built-in object that provides mathematical operations. We will learn it in the chapter <info:number>. Here, it serves just as an example of an object.
2. The result of `typeof null` is `"object"`. That's an officially recognized error in `typeof`, coming from very early days of JavaScript and kept for compatibility. Definitely, `null` is not an object. It is a special value with a separate type of its own. The behavior of `typeof` is wrong here.
3. The result of `typeof alert` is `"function"`, because `alert` is a function. We'll study functions in the next chapters where we'll also see that there's no special "function" type in JavaScript. Functions belong to the object type. But `typeof` treats them differently, returning `"function"`. That also comes from the early days of JavaScript. Technically, such behavior isn't correct, but can be convenient in practice.

> [!t] t: Some other interesting `typeof` examples
>
> ```js
> typeof typeof 0 // "string": typeof returns a string describing the type
> typeof undefined // "undefined"
> typeof NaN // "number"
> typeof '' // "string" (empty string: not undefined, not null, ...)
> typeof "" // The same
> ```
>
> In summary:
>
> - When typeof returns "object", it is not conclusive.
> - When it returns a different thing, it is more conclusive.
>   - Except for NaN that is a number: if we want to differentiate it, we
>     will see there is a way.
> - There are (sophisticated) ways to overcome the limitation that too many
>   things return "object" when applying "typeof".

## "2.6 Interaction: alert, prompt, confirm"


### "alert"

[...]

The mini-window with the message is called a *modal window*. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press "OK".

> [!t] t: Don't abuse modals
>
> Modals (be them be alerts or not), in real applications increase annoyance
> to the user, even if it makes your life easier as programmer.

### "prompt"

[...]

The call to `prompt` returns the text from the input field or `null` if the input was canceled.

> [!t] t: If user presses "OK" without writing anything: returns empty string.

[...]

### "Summary"

[...]

That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if "bells and whistles" do not matter much, these methods work just fine.

> [!t] t: Not a good practice
>
> - We will use alert/prompt/confirm in the course for interaction in our
>   demos and prototypes, but they are not modern good practices for
>   production code.
> - They are blocking/annoying. For showing messages on quick learning code
>   examples and tests, consider using `console.log()` instead of `alert()`
>   (and besides it also works on `node` runtime).

## "2.7 Type Conversions"

[...]

> [!t] t: More on type conversions
>
> - "automatic" = implicit
> - "explicit" = indicated by the programmer with some syntax.
> - type conversion synonyms: (type) casting, (type) cohercion
>   - Note:
>     [type coertion in MDN glossary](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
>     says that coercion is only the implicit one. The
>     [type coercion in WP](https://en.wikipedia.org/wiki/Type_conversion)
>     does not make this restriction.
> - Conversions (implicit and the need for explicit) may give many headaches
>   in programming: you better learn about them (and even so they may byte you).

### "String Conversion"

[...]

String conversion is mostly obvious. A `false` becomes `"false"`, `null` becomes `"null"`, etc.

> [!t] t: Also in concatenation
>
> - Conversion to string also happens when using "+" and one of the operands
>   is string: concatenation.
> - E.g.: `"a"+2`, but also `"12"+2`
> - More details in the basic operators article.

### "Numeric Conversion"

[...]

We can use the `Number(value)` function to explicitly convert a `value` to a number:

```js
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
```

> [!t] t: Parsing can be more advanced (can detect more number literal notations)
>
> - Parse decimal numbers.
>   - E.g.: `Number("1.5")`
>   - Warning: "." is decimal separator in english. If UI is in other locales
>     (languages): it's more tricky (convenience of libraries to handle that).
> - Also tries to parse from strings when indicating base or scientific
>   notation.
>   - E.g.: `Number("0xa")`, `"4e8"/2`
>   - We will see later in the course that this is because these are valid
>     number literal notations (e.g. `let n=0xa`)

> [!t] t: Warning: the "-" is not polysemic as the "+"
>
> - It tries to convert to number.
>   - E.g.: `"12"-2` does not try to "unconcatenate the 2".
>   - More details in the basic operators article.

> [!t] t: Unary `+`
>
> - In the basic operators article, we will see that the unary operator `+` is
>   a shorter way for `Number()`.

Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

> [!t] t: Typical cases
>
> - Text form from an UI (an HTML web form).
> - prompt()
> - Extracted by parsing a text file.
> - ...

[...]

### "Boolean Conversion"

Boolean conversion is the simplest one.

It happens in logical operations (later we'll meet condition tests and other similar things) but can also be performed explicitly with a call to `Boolean(value)`.

> [!t] t: "It happens in logical operations..."
>
> - I.e. in if/loop/... clauses.
> - E.g.: `if (0)`, `while (1)`, ...

The conversion rule:

- Values that are intuitively "empty", like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`.
- Other values become `true`.

> [!t] t: "falsy" and "truthy" values
>
> - [Falsy values (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
>   is the generic name for values converted to false (implicity or explicitly).
> - [Truthy values (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
>   is the generic name for the rest (the non-falsy values), that are majority.

[...]

### "Summary"

[...]

> [!t] t: Unexpected type conversions will byte you soon or later
>
> - The more you learn in your long term memory the behaviour summarized
>   here, the best for reducing pain in your JS journey.
> - Having this JS behaviour in mind at all times, allows you to write
>   code with more possibilities to be robust and to work as expected in
>   any situation. If you don't remember this stuff, you will for sure
>   write code that will byte you in the future (and maybe that pain
>   will help you to remember for the next time).

## "2.8 Basic operators, maths"

We know many operators from school. They are things like addition `+`, multiplication `*`, subtraction `-`, and so on.

In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.

> [!t] t: Operators happen inside expressions or concatenate them
>
> - Most (all?) of the operators (in general) happen inside expresions: they
>   evaluate producing a result, and they may be combined/concatenated.

### "Terms: "unary", "binary", "operand""

[...]

> [!t] t: There are also "ternary" operators
>
> - In fact "ternary operator" is a common name of the "conditional operator"
>   (`...?...:...`), that we will see later in the course.

### "Maths"

The following math operations are supported:

- Addition `+`,
- Subtraction `-`,
- Multiplication `*`,
- Division `/`,
- Remainder `%`,
- Exponentiation `**`.

> [!t] t: `**` works only on modern ES. Compatible alternative: `Math.pow()`.

The first four are straightforward, while `%` and `**` need a few words about them.

### "Operator precedence"

[...]

There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

> [!t] t: Wrong: for some operators it is right to left (see below).

Here's an extract from the [precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) (you don't need to remember this, but note that unary operators are higher than corresponding binary ones):

> [!t] t: "you don’t need to remember this"
>   - But the more you know, the more you will correctly read when no
>     parentheses are used by others...
>   - And the less redundant parentheses you will need to put in your code.
>     But...
>   - Not all your readers will be as proficient with this as you. You
>     shouldn't write only for noobs, but neither only for elite
>     hackers... A reasonable compromise may be good here. Readability
>     is important.
>   - Bugs difficult to find may occur when we remove parenthesis or do
>     complex expressions "beyond our means" (as precedence is not
>     always intuitive).
>   - So, in doubt:
>     - When writing, better put too many parenthesis than too few (but don't
>       go crazy). An you can use intermediate steps with intermediate
>       variables to make things clearer.
>     - When reading alien code, confirm if needed if your assumptions are
>       correct (revise the precedence table, and/or put temporarily more
>       parenthesis and/or use intermediate steps/variables to check
>       that the result is the same).

| Precedence | Name | Sign |
|------------|------|------|
| ... | ... | ... |
| 14 | unary plus | `+` |
| 14 | unary negation | `-` |
| 13 | exponentiation | `**` |
| 12 | multiplication | `*` |
| 12 | division | `/` |
| 11 | addition | `+` |
| 11 | subtraction | `-` |
| ... | ... | ... |
| 2 | assignment | `=` |
| ... | ... | ... |

As we can see, the "unary plus" has a priority of `14` which is higher than the `11` of "addition" (binary plus). That's why, in the expression `"+apples + +oranges"`, unary pluses work before the addition.

> [!t] t: Full operator precedence table from MDN
>
> The "precedence table" article linked above has before the table a
> very pegagogic explanation about operators precedence.
>
> The full table does an spoiler of things we will see later in the
> course, but this is a good place to have it.
>
> I'm transcribing next the full section regarding the precedence table,
> in order to have it here at hand:
>
> ### Table
>
> The following table lists operators in order from highest precedence (18) to lowest precedence (1).
>
> Several general notes about the table:
>
> 1. Not all syntax included here are "operators" in the strict sense. For example, spread `...` and arrow `=>` are typically not regarded as operators. However, we still included them to show how tightly they bind compared to other operators/expressions.
> 2. Some operators have certain operands that require expressions narrower than those produced by higher-precedence operators. For example, the right-hand side of member access `.` (precedence 17) must be an identifier instead of a grouped expression. The left-hand side of arrow `=>` (precedence 2) must be an arguments list or a single identifier instead of some random expression.
> 3. Some operators have certain operands that accept expressions wider than those produced by higher-precedence operators. For example, the bracket-enclosed expression of bracket notation `[ … ]` (precedence 17) can be any expression, even comma (precedence 1) joined ones. These operators act as if that operand is "automatically grouped". In this case we will omit the associativity.
>
> <table>
>   <tbody>
>     <tr>
>       <th>Precedence</th>
>       <th>Associativity</th>
>       <th>Individual operators</th>
>       <th>Notes</th>
>     </tr>
>     <tr>
>       <td>18: grouping</td>
>       <td>n/a</td>
>       <td>Grouping<br><code>(x)</code></td>
>       <td>[1]</td>
>     </tr>
>     <tr>
>       <td rowspan="6">17: access and call</td>
>       <td rowspan="2">left-to-right</td>
>       <td>Member access (dot notation)<br><code>x.y</code></td>
>       <td rowspan="2">[2]</td>
>     </tr>
>     <tr>
>       <td>Optional chaining<br><code>x?.y</code></td>
>     </tr>
>     <tr>
>       <td rowspan="4">n/a</td>
>       <td>Computed member access (bracket notation)<br><code>x[y]</code></td>
>       <td>[3]</td>
>     </tr>
>     <tr>
>       <td>new<br><code>new x(y)</code></td>
>       <td rowspan="3">[4]</td>
>     </tr>
>     <tr>
>       <td>Function call<br><code>x(y)</code></td>
>     </tr>
>     <tr>
>       <td>import(x)</td>
>     </tr>
>     <tr>
>       <td>16: new</td>
>       <td>n/a</td>
>       <td>new without argument list<br><code>new x</code></td>
>     </tr>
>     <tr>
>       <td rowspan="2">15: postfix operators</td>
>       <td rowspan="2">n/a</td>
>       <td>Postfix increment<br><code>x++</code></td>
>       <td rowspan="2">[5]</td>
>     </tr>
>     <tr>
>       <td>Postfix decrement<br><code>x--</code></td>
>     </tr>
>     <tr>
>       <td rowspan="10">14: prefix operators</td>
>       <td rowspan="10">n/a</td>
>       <td>Prefix increment<br><code>++x</code></td>
>       <td rowspan="2">[6]</td>
>     </tr>
>     <tr>
>       <td>Prefix decrement<br><code>--x</code></td>
>     </tr>
>     <tr>
>       <td>Logical NOT<br><code>!x</code></td>
>     </tr>
>     <tr>
>       <td>Bitwise NOT<br><code>~x</code></td>
>     </tr>
>     <tr>
>       <td>Unary plus<br><code>+x</code></td>
>     </tr>
>     <tr>
>       <td>Unary negation<br><code>-x</code></td>
>     </tr>
>     <tr>
>       <td>typeof x</td>
>     </tr>
>     <tr>
>       <td>void x</td>
>     </tr>
>     <tr>
>       <td>delete x</td>
>       <td>[7]</td>
>     </tr>
>     <tr>
>       <td>await x</td>
>     </tr>
>     <tr>
>       <td>13: exponentiation</td>
>       <td>right-to-left</td>
>       <td>Exponentiation<br><code>x ** y</code></td>
>       <td>[8]</td>
>     </tr>
>     <tr>
>       <td rowspan="3">12: multiplicative operators</td>
>       <td rowspan="3">left-to-right</td>
>       <td>Multiplication<br><code>x * y</code></td>
>     </tr>
>     <tr>
>       <td>Division<br><code>x / y</code></td>
>     </tr>
>     <tr>
>       <td>Remainder<br><code>x % y</code></td>
>     </tr>
>     <tr>
>       <td rowspan="2">11: additive operators</td>
>       <td rowspan="2">left-to-right</td>
>       <td>Addition<br><code>x + y</code></td>
>     </tr>
>     <tr>
>       <td>Subtraction<br><code>x - y</code></td>
>     </tr>
>     <tr>
>       <td rowspan="3">10: bitwise shift</td>
>       <td rowspan="3">left-to-right</td>
>       <td>Left shift<br><code>x &#x3C;&#x3C; y</code></td>
>     </tr>
>     <tr>
>       <td>Right shift<br><code>x >> y</code></td>
>     </tr>
>     <tr>
>       <td>Unsigned right shift<br><code>x >>> y</code></td>
>     </tr>
>     <tr>
>       <td rowspan="6">9: relational operators</td>
>       <td rowspan="6">left-to-right</td>
>       <td>Less than<br><code>x &#x3C; y</code></td>
>     </tr>
>     <tr>
>       <td>Less than or equal<br><code>x &#x3C;= y</code></td>
>     </tr>
>     <tr>
>       <td>Greater than<br><code>x > y</code></td>
>     </tr>
>     <tr>
>       <td>Greater than or equal<br><code>x >= y</code></td>
>     </tr>
>     <tr>
>       <td>x in y</td>
>     </tr>
>     <tr>
>       <td>x instanceof y</td>
>     </tr>
>     <tr>
>       <td rowspan="4">8: equality operators</td>
>       <td rowspan="4">left-to-right</td>
>       <td>Equality<br><code>x == y</code></td>
>     </tr>
>     <tr>
>       <td>Inequality<br><code>x != y</code></td>
>     </tr>
>     <tr>
>       <td>Strict equality<br><code>x === y</code></td>
>     </tr>
>     <tr>
>       <td>Strict inequality<br><code>x !== y</code></td>
>     </tr>
>     <tr>
>       <td>7: bitwise AND</td>
>       <td>left-to-right</td>
>       <td>Bitwise AND<br><code>x &#x26; y</code></td>
>     </tr>
>     <tr>
>       <td>6: bitwise XOR</td>
>       <td>left-to-right</td>
>       <td>Bitwise XOR<br><code>x ^ y</code></td>
>     </tr>
>     <tr>
>       <td>5: bitwise OR</td>
>       <td>left-to-right</td>
>       <td>Bitwise OR<br><code>x | y</code></td>
>     </tr>
>     <tr>
>       <td>4: logical AND</td>
>       <td>left-to-right</td>
>       <td>Logical AND<br><code>x &#x26;&#x26; y</code></td>
>     </tr>
>     <tr>
>       <td rowspan="2">3: logical OR, nullish coalescing</td>
>       <td rowspan="2">left-to-right</td>
>       <td>Logical OR<br><code>x || y</code></td>
>     </tr>
>     <tr>
>       <td>Nullish coalescing operator<br><code>x ?? y</code></td>
>       <td>[9]</td>
>     </tr>
>     <tr>
>       <td rowspan="21">2: assignment and miscellaneous</td>
>       <td rowspan="16">right-to-left</td>
>       <td>Assignment<br><code>x = y</code></td>
>       <td rowspan="16">[10]</td>
>     </tr>
>     <tr>
>       <td>Addition assignment<br><code>x += y</code></td>
>     </tr>
>     <tr>
>       <td>Subtraction assignment<br><code>x -= y</code></td>
>     </tr>
>     <tr>
>       <td>Exponentiation assignment<br><code>x **= y</code></td>
>     </tr>
>     <tr>
>       <td>Multiplication assignment<br><code>x *= y</code></td>
>     </tr>
>     <tr>
>       <td>Division assignment<br><code>x /= y</code></td>
>     </tr>
>     <tr>
>       <td>Remainder assignment<br><code>x %= y</code></td>
>     </tr>
>     <tr>
>       <td>Left shift assignment<br><code>x &#x3C;&#x3C;= y</code></td>
>     </tr>
>     <tr>
>       <td>Right shift assignment<br><code>x >>= y</code></td>
>     </tr>
>     <tr>
>       <td>Unsigned right shift assignment<br><code>x >>>= y</code></td>
>     </tr>
>     <tr>
>       <td>Bitwise AND assignment<br><code>x &#x26;= y</code></td>
>     </tr>
>     <tr>
>       <td>Bitwise XOR assignment<br><code>x ^= y</code></td>
>     </tr>
>     <tr>
>       <td>Bitwise OR assignment<br><code>x |= y</code></td>
>     </tr>
>     <tr>
>       <td>Logical AND assignment<br><code>x &#x26;&#x26;= y</code></td>
>     </tr>
>     <tr>
>       <td>Logical OR assignment<br><code>x ||= y</code></td>
>     </tr>
>     <tr>
>       <td>Nullish coalescing assignment<br><code>x ??= y</code></td>
>     </tr>
>     <tr>
>       <td>right-to-left</td>
>       <td>Conditional (ternary) operator<br><code>x ? y : z</code></td>
>       <td>[11]</td>
>     </tr>
>     <tr>
>       <td>right-to-left</td>
>       <td>Arrow<br><code>x => y</code></td>
>       <td>[12]</td>
>     </tr>
>     <tr>
>       <td rowspan="3">n/a</td>
>       <td>yield x</td>
>     </tr>
>     <tr>
>       <td>yield* x</td>
>     </tr>
>     <tr>
>       <td>Spread<br><code>...x</code></td>
>       <td>[13]</td>
>     </tr>
>     <tr>
>       <td>1: comma</td>
>       <td>left-to-right</td>
>       <td>Comma operator<br><code>x, y</code></td>
>     </tr>
>   </tbody>
> </table>
>
> Notes:
>
> 1. The operand can be any expression.
> 2. The "right-hand side" must be an identifier.
> 3. The "right-hand side" can be any expression.
> 4. The "right-hand side" is a comma-separated list of any expression with precedence > 1 (i.e. not comma expressions). The constructor of a `new` expression cannot be an optional chain.
> 5. The operand must be a valid assignment target (identifier or property access). Its precedence means `new Foo++` is `(new Foo)++` (a syntax error) and not `new (Foo++)` (a TypeError: (Foo++) is not a constructor).
> 6. The operand must be a valid assignment target (identifier or property access).
> 7. The operand cannot be an identifier or a [private property](/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties) access.
> 8. The left-hand side cannot have precedence 14.
> 9. The operands cannot be a logical OR `||` or logical AND `&&` operator without grouping.
> 10. The "left-hand side" must be a valid assignment target (identifier or property access).
> 11. The associativity means the two expressions after `?` are implicitly grouped.
> 12. The "left-hand side" is a single identifier or a parenthesized parameter list.
> 13. Only valid inside object literals, array literals, or argument lists.
>
> The precedence of groups 17 and 16 may be a bit ambiguous. Here are a few examples to clarify.
>
> - Optional chaining is always substitutable for its respective syntax without optionality (barring a few special cases where optional chaining is forbidden). For example, any place that accepts `a?.b` also accepts `a.b` and vice versa, and similarly for `a?.()`, `a()`, etc.
> - Member expressions and computed member expressions are always substitutable for each other.
> - Call expressions and `import()` expressions are always substitutable for each other.
> - This leaves four classes of expressions: member access, `new` with arguments, function call, and `new` without arguments.
>   - The "left-hand side" of a member access can be: a member access (`a.b.c`), `new` with arguments (`new a().b`), and function call (`a().b`).
>   - The "left-hand side" of `new` with arguments can be: a member access (`new a.b()`) and `new` with arguments (`new new a()()`).
>   - The "left-hand side" of a function call can be: a member access (`a.b()`), `new` with arguments (`new a()()`), and function call (`a()()`).
>   - The operand of `new` without arguments can be: a member access (`new a.b`), `new` with arguments (`new new a()`), and `new` without arguments (`new new a`).
>

> [!t] t: Summary of operators precedence
>
> - I'm omiting here some less used operators, to make a summary.
> - Evaluation order:
>   - Most are left to right (or n/a).
>   - I note only the exceptions.
> - From higher to lower priority:
>   - Grouping (parentheses)
>   - Object members and function calls.
>   - Most unary operators:
>     - Postfix
>     - Prefix
>   - Mathematical:
>     - `**` (**right to left**)
>     - `*`, `/`, `%`
>     - `+`, `-`
>   - Relations: `<`, `>`, etc
>   - Equality/inequality: `===`, `!==`, etc
>   - Logical:
>     - AND: `&&`
>     - OR: `||`
>   - Assignments (`=`, `+=`, etc), ternary `? : `, arrow `=>`,
>     spread `...x` (all these are **right to left**)
>   - Comma (concatenation): `, `
> - Different operators can be at the same priority level,
>   so when mixed at the same level they have the same strength,
>   and their evaluation order wins there.

### "Assignment"

Let's note that an assignment `=` is also an operator. It is listed in the precedence table with the very low priority of `2`.

> [!t] t: "= is also an operator"
>
> - I.e. `=` **produces an expression**.
> - But `let` is a pure statement, **does not produce an expression**.
>
>   ```js
>   // Error!:
>   alert(let a=3);
>   // Error!:
>   alert(let a=3;);
>   // But this does work:
>   let a;
>   alert(a=3);
>   // And sets the value besides returning it:
>   alert(a);
>   ```

That's why, when we assign a variable, like `x = 2 * 2 + 1`, the calculations are done first and then the `=` is evaluated, storing the result in `x`.

```js
let x = 2 * 2 + 1;
alert( x ); // 5
```

> [!t] t: "`=` is evaluated", but right to left
>
> - As we mentioned above.
> - E.g.: `x = y = 2 + 1;` (see also section below)

### "Modify-in-place"

[...]

This notation can be shortened using the operators `+=` and `*=`:

```js run
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14
```

> [!t] t: Warning
>
> - Even if e.g. `+=` is an operator (produces an expression), it cannot be
>   used if the variable is not already defined/set with something.
> - So this doesn't work:
>
>   ```js
>   // Error!:
>   let a+=3;
>   ```
>
> - But this "works" (although possibly not nice):
>
>   ```js
>   let a;
>   a+=3;
>   // Gives NaN: adding 3 to "undefined".
>   ```

[...]

## "2.9 Comparisons"

### "String comparison"

[...]

Not a real dictionary, but Unicode order

The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it's not exactly the same.

For instance, case matters. A capital letter `"A"` is not equal to the lowercase `"a"`. Which one is greater? The lowercase `"a"`. Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We'll get back to specific details and consequences of this in the chapter <info:string>.

> [!t] t: Native string comparison if non ASCII standard will puzzle users
>
> - E.g. in Spanish, accented vowels ("á", "ü", ...) and "ñ" (uppercase or
>   not) go after any ASCII standard letter or symbol (uppercase or not). But
>   normally a user would expect that "á" is together with "a" and before "b".
> - We should use a library for this correctly.
> - In spite of this, native string comparison is very usual for programmers:
>   - They ignore the internationalization/localization issues (i18n and L10n).
>   - So in any alien software/code we use, we should check if this is covered
>     or not.
>   - The same happens with "accent sensitive" searchs or not. User will surely
>      prefer generally "accent insensitive", but this does not happen if the
>      programmer has done special things on this. Also a library here may
>      be a good idea.

### "Comparison with null and undefined"

#### "Avoid problems"

Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there's a solid way to avoid problems with them:

- Treat any comparison with `undefined/null` except the strict equality `===` with exceptional care.
- Don't use comparisons `>= > < <=` with a variable which may be `null/undefined`, unless you're really sure of what you're doing. If a variable can have these values, check for them separately.

> [!t] t: Use **strict** (un)equality as much as possible
>
> Until we grow up (and maybe forever):
>
> - In our code:
>   - We use `===`/`!==` (vs `==`/`!=`).
>   - The only cohertion we afford here (and knowing well what we are doing):
>     - Implicit, this one:
>
>       `if (/* Something truthy or falsy */)`
>
>       (or in while, ternary, ...)
>     - Explicit.
> - In alien code not following this:
>   - **Don't change it lightly!**

## "2.10 Conditional branching: if, '?'"

### "Several conditions: "else if""

Sometimes, we'd like to test several variants of a condition. The `else if` clause lets us do that.

For example:

```js run
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

In the code above, JavaScript first checks `year < 2015`. If that is falsy, it goes to the next condition `year > 2015`. If that is also falsy, it shows the last `alert`.

There can be more `else if` blocks. The final `else` is optional.

> [!t] t: "else if" is not a different or added syntax.
>
> - "if" and "else" are the only things provided.
> - But using them this way is much clearer than nesting the if's in their
>   preceding "else".
>
>   ```js
>   if (year < 2015) {
>     alert( 'Too early...' );
>   } else {
>     if (year > 2015) {
>       alert( 'Too late' );
>     } else {
>       alert( 'Exactly!' );
>     }
>   }
>   ```
>
>   And imagine if there were more "else if": more nesting!
> - This is a particular case of a broader advice: try avoid nesting if
>   you can do it easily: this leads to more readable and mantainable
>   code.

### "Conditional operator '?'"

[...]

The so-called "conditional" or "question mark" operator lets us do that in a shorter and simpler way.

[...]

The operator is represented by a question mark `?`. Sometimes it's called "ternary", because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

> [!t] t: "sometimes it's called ternary"
>
> - In my experience, more than sometimes, it is quite often called
>   "ternary operator". Even if the name in the ES standard is
>   "conditional operator".

[...]

In the example above, you can avoid using the question mark operator because the comparison itself returns `true/false`:

```js
// the same
let accessAllowed = age > 18;
```

> [!t] t: Conditional operator is expression equivalent of an "if" statement
>
> - jsinfo talks about a particular use case for the conditional
>   operator:
>
>   "we need to assign a variable depending on a condition."
>
> - But we can generalize this to "generate an expression depending
>   on a condition". That is: it is used when a condition is made to
>   obtain a result (conditionally), and we want to use (chain)
>   elsewhere this result. This result can be assigned to a variable
>   (as with any expression), but can also be used wherever an
>   expression fits.
> - E.g. it can be used directly as a function parameter:
>
>   ```js
>   console.log( (age < 18) ? "under-age" : "adult" );
>   ```
>
> - Or it can be used to be combined as any operand for any more complex
>   expression:
>
>   ```js
>   totalPrice = price + ( premium ? 0 : shippingCosts );
>   ```
>
> - We will see other ways of doing things with expressions instead of
>   with statements. This is an aspect of functionnal programming, that
>   is a trendy way of programming JS that we should we get used to.

### "Non-traditional use of '?'"

Sometimes the question mark `?` is used as a replacement for `if`:

```js run no-beautify
let company = prompt('Which company created JavaScript?', '');

*!*
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
*/!*
```

Depending on the condition `company == 'Netscape'`, either the first or the second expression after the `?` gets executed and shows an alert.

We don't assign a result to a variable here. Instead, we execute different code depending on the condition.

**It's not recommended to use the question mark operator in this way.**

The notation is shorter than the equivalent `if` statement, which appeals to some programmers. But it is less readable.

Here is the same code using `if` for comparison:

```js run no-beautify
let company = prompt('Which company created JavaScript?', '');

*!*
if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
*/!*
```

Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

The purpose of the question mark operator `?` is to return one value or another depending on its condition. Please use it for exactly that. Use `if` when you need to execute different branches of code.

> [!t] t: I agree, but that particular example is not a good one...
>
> - This is because that code could be easily refactored to use a
>   conditional operator that returns something. And in that case
>   it will be used "correctly" as intended for conditional operators:
>
>   ```js
>   let company = prompt('Which company created JavaScript?', '');
>
>   alert((company == 'Netscape') 'Right!' : 'Wrong.');
>   ```
>
> - I would have chosen a better example that just **really** needs an
>   "if", instead of one that is crying for using (correctly) a
>   conditional operator.

## "2.11 Logical operators"

## "2.12 Nullish coalescing operator '??'"

## "2.13 Loops: while and for"

### "Continue to the next iteration"

[...]

But as a side effect, this created one more level of nesting (the `alert` call inside the curly braces). If the code inside of `if` is longer than a few lines, that may decrease the overall readability.

> [!t] t: Is break/continue bad practice?
>
> - Some strict persons claim that is bad programming to use "break" or
>   "continue", since it breaks the "pure flow". It reminds them of a
>   "sort-of-goto", and there is a long tradition (cliché) saying that
>   [the goto statement is **considered harmful**](https://en.wikipedia.org/wiki/Considered_harmful).
>   (that is extended to "X considered harmful").
> - It is true that one can organize the loop body to avoid breaks/continues.
>   But this may lead to artificially more complex/difficult to mantain code.
> - Example:
>
>   ```js
>   while (blah) { /* Or for(blah) */
>     if (!quickVerificationForBreak()) break;
>     if (!quickVerificationForContinue1()) continue;
>     if (!quickVerificationForContinue2()) continue;
>     if (!quickVerificationForContinue3()) continue;
>     doStuff();
>   }
>   ```
>
> - Is possibly clearer (more flat, followed step-by-step) than:
>
>   ```js
>   while (blah) { /* Or for(blah) */
>     if (quickVerificationForBreak()) {
>       if (quickVerificationForContinue1() &&
>         quickVerificationForContinue2() &&
>         quickVerificationForContinue3()) {
>         // And let's not talk about doing this
>         // with independent nested if's...
>         doStuff();
>       }
>     else {
>       // Act on loop guards to finish prematurely
>       // or act so that next iterations are not done
>       // with a guard that deactivates them since
>       // this momment.
>     }
>   }
>   ```
>
> - And the more verifications and more stuff done, the more the code gets
>   more innecessarily nested and difficult.
> - The thing to take into account is: if we are in the middle of
>   something when we "break/continue", we should not leave stuff in a dirty
>   state: we clean stuff if needed before.
> - Something very similar applies to the use of "return". Some say
>   "use of return in the middle of a function considered harmful". But this
>   is again quite debatable.

[...]

### "Labels for break/continue"

[...]

> [!t] t: Is label use bad practice?
>
> - Again, using labels remind to some persons to the "goto considered
>   harmful" (even more than when using break/continue without labels).
> - Again, their use may be justified for clarity if the alternative is
>   worst. Just double check that using them is not a code smell.

### "Summary"

We covered 3 types of loops:

- `while` -- The condition is checked before each iteration.
- `do..while` -- The condition is checked after each iteration.
- `for (;;)` -- The condition is checked before each iteration, additional settings available.

> [!t] t: Equivalence of the 3 types of loops
>
> In JS you can always refactor any loop to use one of the other two. But in
> some cases, some of them are clearer than the others for a specific use.

To make an "infinite" loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

> [!t] t: Or put a condition that you act on
>
> Some are afraid of `while(true)` and do a more sophisticated (disguised)
> infinite loop:
>
> ```js
> let loop = true;
> while (loop) {
>   // Do stuff and set `loop = false;` when needing to break the loop.
>   // And take care on the flow that when setting `loop` to false,
>   // nothing else is done in this loop iteration.
> }
>
> If they want so, let's say that this is a free country... But many others
> will very legitimately use a `while(true)` loop (call it
> "the while-true pride").

If we don't want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.

`break/continue` support labels before the loop. A label is the only way for `break/continue` to escape a nested loop to go to an outer one.

> [!t] t: Not the only way...
>
>  You could do it by controlling the loop conditions. But surely with much
>  less clear code.

## "2.14 The "switch" statement"

## "2.15 Functions"

### "Function Declaration"

[...]

For instance:

```js run
function showMessage() {
  alert( 'Hello everyone!' );
}

*!*
showMessage();
showMessage();
*/!*
```

The call `showMessage()` executes the code of the function. Here we will see the message two times.

This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

If we ever need to change the message or the way it is shown, it's enough to modify the code in one place: the function which outputs it.

> [!t] t: There are other ways to "declare" a function
>
> - I prefer to do a small spoiler alert here, to know since the start
>   the possible ambiguity when saying "declare a function" in JS
>   context.
> - Besides this syntax called "function declaration" that we cover
>   in this article, in JS there are other different syntaxes for
>   "declaring" a function (i.e. for specifying the code for a
>   function): see the following articles on "function expressions" and
>   on "arrow functions".
> - In all the cases, the later usage of the function (i.e., "calling
>   the function"), is typically quite similar. But depending on the way
>   that a function has been "declared" (the syntax used for it), there
>   will be nuances and possible different behaviors in some details.
> - So, warning on ambiguity with the word "declaration":
>   "function declaration" should be very specific and corresponds to
>   the "declaration" of a function in the particular way explained in
>   this article. But, in some contexts, some may use the term loosely
>   also for refering to any way of "declaring" a function (and they
>   also refer with it to function expressions and arrow functions).
>   This ambigüity does not matter on the 99% of the cases, but the
>   remaining 1% may byte you hardly.
> - In fact, functions in JS are very familiar with many other languages
>   (Java and other C-descendent languages). But this is a "false
>   friend": they have very specific characteristics in JS, and
>   knowing/understanding them is one of the difficulties of this
>   language. But investing in this learning will pay off (taking
>   control, instead of being a hopeless victim of the language).


### "Outer variables"

[...]

Global variables

Variables declared outside of any function, such as the outer `userName` in the code above, are called *global*.

Global variables are visible from any function (unless shadowed by locals).

It's a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

> [!t] t: Nested functions scopes
>
> - A function can be declared inside another function, and so on.
> - So the "outer" variables may not be global, but local (or parameter) of
>   an outer function. That's why they use in this section the concept
>   "outer" variable instead of the particular case global variable.

### "Parameters"

[...]

> [!t] t: A parameter also "shadows" an outer variable with same name
>
> - On the other hand, a local variable that would "shadow" a parameter,
>   will give a syntax error when declaring the function.

### "Default values"

[...]

The default value also jumps in if the parameter exists, but strictly equals `undefined`, like this:

```js
showMessage("Ann", undefined); // Ann: no text given
```

> [!t] t: There may be several optional parameters, and must be at the end
>
> - The user **cannot** omit one "in the middle" (nothing before a comma).
> - If he omits one, he has to omit the rest. So put them in the
>   order of less unlikely omission.

[...]

Default parameters in old JavaScript code

Several years ago, JavaScript didn't support the syntax for default parameters. So people used other ways to specify them.

Nowadays, we can come across them in old scripts.

For example, an explicit check for `undefined`:

```js
function showMessage(from, text) {
*!*
  if (text === undefined) {
    text = 'no text given';
  }
*/!*

  alert( from + ": " + text );
}
```

...Or using the `||` operator:

```js
function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}
```

> [!t] t: The previous note is somewhat reduntant with the next section

#### "Alternative default parameters"

[...]

...Or we could use the `||` operator:

```js
function showMessage(text) {
  // if text is undefined or otherwise falsy, set it to 'empty'
  text = text || 'empty';
  ...
}
```

> [!t] t: Remember that this checks for falsy, not for undefined.

Modern JavaScript engines support the [nullish coalescing operator](info:nullish-coalescing-operator) `??`, it's better when most falsy values, such as `0`, should be considered "normal":

> [!t] t: And sometimes "" (another falsy) is also "normal".
>
> - Nullish adds "null" to undefined, so covers this in comparison to default
>   parameter.
> - One can use the most appropiate in each case.
> - Not always you want to asign something to the omited parameter: you
>   may just have a different behaviour when omited.
> - When not using the "default parameter" syntax, you should document
>   which parameters are considered optional.

```js run
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

### "Returning a value"

[...]

There may be many occurrences of `return` in a single function. For instance:

```js run
function checkAge(age) {
  if (age >= 18) {
*!*
    return true;
*/!*
  } else {
*!*
    return confirm('Do you have permission from your parents?');
*/!*
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
```

> [!t] t: Some incorrectly state that "return in the middle considered harmful"
>
> See my comments on this at the section on "break/continue" at the loops
> article. Extrapolate the code example shown there (body of a loop) to the
> body of a function: use return in the middle (or even better the start) if
> it makes things clearer (but when prematurely leaving, clean before
> your stuff).

It is possible to use `return` without a value. That causes the function to exit immediately.

[...]

## "2.16 Function expressions"

[...]

## "2.17 Arrow functions, the basics"

[...]

> [!t] t: small summary of ways of using a function after its creation
>
> - After "declaration/specification" of a function by any means
>   (function declaration, function expression, arrow function), they
>   are typically used similarly: invoquing ("calling") the function by
>   specifying its name followed by parentheses (and possible parameters).
> - But, as explained what has been defined can be also used as a variable/object for
>   some purposes.
> - Example summarizing:
>
>   ```js
>   // Different types of "declarations"
>
>   // "Function declaration":
>   function sumFuncDecl(a, b) {
>     return a + b;
>   }
>   // "Function expression":
>   const sumFuncExpr = function (a, b) {
>     return a + b;
>   };
>   // "Arrow function":
>   const sumFuncArrow = (a, b) => a + b;
>
>   // Typically, invoqued ("called") similarly:
>   const number =
>     sumFuncDecl(1, 2) + sumFuncExpr(1, 2) + sumFuncArrow(1, 2);
>   console.log(number); // (1+2)+(1+2)+(1+2) = 9
>
>   // Use the name (identifier) of a function **without** invoking
>   // its code (without "calling" the function):
>   const aliasFunc = sumFuncDecl; // Could be also done with the other 2
>   console.log(sumFuncDecl, sumFuncExpr, sumFuncArrow, aliasFunc);
>
>   // One can also "call" (invoke) the alias:
>   console.log(aliasFunc(1, 2); // 3
>
>   // One can pass the variable (object) pointing to a function as
>   // parameter of another function, and the body of that other
>   // function may decide to execute it inside (by using the
>   // name of the parameter, and placing parenthesis and optional
>   // arguments). This concept, called "callback", is a key
>   // concept in JS (and it is used **A LOT**).
>
>   // Also, similarly to the "alias" example above, we can assign
>   // a function to a property of an object, so having an object
>   // that, as property, has a "pointer" to call a configurable
>   // function (¿maybe from inside of one of its own methods). It is
>   // quite similar to the "callback" concept, but strictly talking,
>   // the word "callback" is used by many for only the case where the
>   // function is passed as parameter of another function.
>   ```

## "2.16 JavaScript specials"

[...]

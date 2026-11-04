# jsinfo LANG 5: Data types (comments)

## "5.1 Methods of primitives"

[...]

## "5.2 Numbers"

[...]

### "More ways to write a number"

[...]

#### "Hex, binary and octal numbers"

[...]

### "toString(base)"

[...]

### "Rounding"

[...]

### "Imprecise calculations"

[...]

Sometimes we could try to evade fractions at all. Like if we’re dealing
with a shop, then we can store prices in cents instead of dollars. But
what if we apply a discount of 30%? In practice, totally evading
fractions is rarely possible. Just round them to cut “tails” when
needed.

> [!t] t: Limitar precisión (con toFixed o con round) es solo "maquillaje"
>
> - Ni se os ocurra ir redondeando (maquillando) en pasos intermedios.
>   Solo se redondea (limita precisión) al final, justo para visualizar,
>   pero se calcula y guarda siempre que se pueda con la máxima
>   resolución que se haya decidido tener.
> - Por como funciona en informática la representación interna de
>   números reales (exponente y mantisa, como en notación científica),
>   cuando a quí se habla de resolución, no es tanto la resolución
>   (número de dígitos) detrás de la coma. Es más bien diferencia
>   (distancia) entre el dígito más significativo y el menos
>   significativo: los dígitos representables en la mantisa). No se
>   pueden alejar mucho sin perder resolución.  Es decir, por ejemplo:
>
>   0.000000000123 + 0.000000000321
>
>   no tiene ningún problema aunque sean números con mucha resolución de
>   decimal. En JS acepta escribirlos así, y en el fondo está
>   tratando, sin despeinarse, como:
>
>   1.23e-10 + 3.21e-10
>
>   Pero si intento hacer:
>
>   12300000000 + 0.000000321
>
>   aunque el segundo tiene menos "resolución" tras la coma que el de
>   antes, el 123 delante de todos esos ceros delante de la coma está muy
>   lejos del 321 detrás de todos esos ceros detrás de la coma.
>   Internamente está haciendo:
>
>   1.23e10 + 3.21e-7
>
>   y le da sin despeinarse 1.23e10 como si no hubiéramos sumado nada:
>
>   12300000000
>
>   Y lo mismo si intento representar (no como resultado de suma) un
>   número que tenga muy alejado lo más significativo de lo menos:
>
>   12300000000.000000321
>
>   no dará error, pero dará:
>
>   12300000000
>
> - Si usas funciones/métodos nativos de JS (las dos vías que sugiere
>   jsinfo), tienes hasta cierta precisión/resolución.
> - Pero en ciertos contextos/aplicaciones, esa precisión puede no ser
>   suficiente. Hay librerías que permiten operar especificando
>   precisión arbitraria cuando se necesite. En JS son famosas para esto
>   por ejemplo:
>
>   - big.js
>   - decimal.js
>
>   Aunque siempre será a costa de uso de CPU/memoria (la mayor
>   resolución no es gratis).
>
> - Aunque te quedes con la nativa, no es forzoso quedarse con solo dos
>   decimales antes de mostrar. Puede ser conveniente para monedas o
>   para ciertos contextos (p.ej. nota de examen), pero para otros,
>   podemos no querer sacrificar tanta resolución solo por los efectos
>   raros. Si te basta para que no salga la cosa horrible que denuncia
>   este apartado con reducir p.ej. a resolución de 10 dígitos en vez de
>   2, entonces déjaselos.
> - A continuación, hago otra demo sobre el dolor de que los cálculos
>   con decimales muerden:
>
>   ```js
>   0.1 + 0.2
>     // 0.30000000000000004
>     // !!!
>   0.1 + 0.2 === 0.3
>     // false
>     // !!!
>   0.1 + 0.2 < 0.3
>     // true
>     // !!!
>
>   // Ejemplo práctico donde esto puede ser un problema:
>
>   // Volvamos al cole, y contemos de uno en uno, hasta tres.
>   // Sé hacerlo:
>   for (let i = 1; i <= 3; i = i + 1) { console.log(i); }
>     // 1  2  3
>
>   // Ahora, contemos de 0.1 en 0.1 hasta 0.3.
>   // También sé hacerlo, ¿verdad?
>   for (let i = 0.1; i <= 0.3; i = i + 0.1) { console.log(i); }
>     // 0.1  0.2
>     // !!! ¡¿Dónde está el 0.3?!
>
>   // Vale, tengo una solución, me paro en el siguiente sin incluirlo:
>   for (let i = 0.1; i < 0.4; i = i + 0.1) { console.log(i); }
>     // 0.1  0.2  0.30000000000000004
>     // Feo, pero al menos han salido tres cosas, y la última se acerca
>     // a lo que esperaba.
>     // Y si tengo que enseñarlo a alguien, en este contexto me pienso si
>     // maquillarlo (sé hacerlo ahora, con el toFixed() casteado a
>     // número).
>     // ¡Aparcao!
>
>   // Así que no haré las guardas al estilo "<=" del último,
>   // sino "<" del de después (y maquillo si acaso)...
>
>   // ... Vale, listillo:
>   // Vuelve a contar tres veces de 0.1 en 0.1...
>   // Pero ahora empieza en 0.5.
>   // ¿Sabes hacerlo, verdad? 0.5, 0.6 y 0.7
>   // Vamos allá, poniendo el < sobre el de después (0.8) para que no
>   // me pase el problema:
>   for (let i = 0.5; i < 0.8; i = i + 0.1) { console.log(i); }
>     // 0.5  0.6  0.7  0.7999999999999999
>     // !!!
>     // Cachis la mar. ¡Ahora se me ha colado uno de más!
>     // A veces se queda corto, a veces se queda largo... ¡Dolor!
>
>   // ¿Solución mejor?
>   // Dejo espacio para pensar.
>   // SPOILER ALERT! Piénsalo antes de mirar.
>
>
>
>
>
>
>
>
>
>
>
>   // De los enteros sí que me puedo fiar más (o eso espero).
>   // En vez de 0.1 en 0.1, cuento mejor de 1 en 1. Y luego, ya
>   // dentro, hago las operaciones que necesite:
>   for (let i = 1; i <= 3; i = i + 1) { console.log(i / 10); }
>     // 0.1  0.2  0.3
>   for (let i = 5; i <= 7; i = i + 1) { console.log(i / 10); }
>     // 0.5  0.6  0.7
>   // Y, si me place, uso el < en vez del <=, en ambos casos también va bien:
>   for (let i = 1; i < 4; i = i + 1) { console.log(i / 10); }
>     // 0.1  0.2  0.3
>   for (let i = 5; i < 8; i = i + 1) { console.log(i / 10); }
>     // 0.5  0.6  0.7
>   ```
>
> - Moraleja: mucho ojo con comparaciones de sumas/operaciones de no
>   enteros...
>   - Como ejemplo significativo, con los bucles que no
>     sean sobre enteros.
>   - Y el maldito JS no ayuda, por no tener un tipo reservado para
>     enteros que nos quite esa tentación o riesgo.
>   - Bueno, ahora sí lo tiene, desde ES2020: el BigInt. Pero ese tiene
>     [otra serie de problemas](https://byteofdev.com/posts/i-hate-javascript-numbers/)
>   - Lo que sea un número en JS, va aceptar sin chistar que sea un no
>     entero, salvo que me curre unos chequeos para validarlo (que
>     habría que ver cómo se hacen). Y usar TypeScript para forzar que
>     sea número aquí no ayuda en esto: TypeScript obliga a tipos de
>     datos, pero no evita que "number" en JS contenga enteros y floats.
>     Muchos desarrolladores gente han criticado esa decisión originalo
>     de JS (frente a otros lenguajes), pero así se quedará por los
>     siglos por compatibilidad ... ¡es el mercado amigo!

The funny thing

[...]

### "Tests: isFinite and isNaN"

[...]

In a way, `Number.isNaN` and `Number.isFinite` are simpler and more straightforward than `isNaN` and `isFinite` functions. In practice though, `isNaN` and `isFinite` are mostly used, as they're shorter to write.

> [!t] t: Better use `Number.isNaN` and `Number.isFinite`: they are strict
>
> - `isNaN` and `isFinite` may byte you as in general may do "implicit
>   castings" in JS.
> - The `Number` counteparts are a ES6 addition, though.

[...]

### "parseInt and parseFloat"

[...]

The `parseInt()` function has an optional second parameter. It specifies the base of the numeral system, so `parseInt` can also parse strings of hex numbers, binary numbers and so on:

```js run
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
```

> [!t] t: locale dependent number-string conversion
>
> - When having a number, to get a string according to the locale
>   (language), one has the `number.toLocaleString()` method:
>
>   ```js
>   let n = 1.2;
>   alert ( n.toLocaleString('es') );
>     // 1,2 : in Spanish, decimal is comma and not a dot.
>   ```
> - The opposite is currently (as of 2024) not evident nor standardized.
>   - There isn't a `string.parseLocaleInt()` or
>     `string.parseLocaleFloat()` nor anything equivalent.
>    - While waiting if something gets standardized for this:
>      - It's tempting to do "home-made" naive solutions: substitute ',' with
>        '.' and then apply the `parseInt()` or `parseFloat()`.
>      - But it's better to use some library for that. E.g.:
>        - [Js standard API to parse to number according to locale? (StackOverflow)](https://stackoverflow.com/questions/55364947/is-there-any-javascript-standard-api-to-parse-to-number-according-to-locale

### "Other math functions"

[...]

### "Summary"

[...]

## "5.3 Strings"

In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

The internal format for strings is always [UTF-16](https://en.wikipedia.org/wiki/UTF-16), it is not tied to the page encoding.

> [!t] t: The page enconding is typically UTF-8
>
> - So the encoding of the JS code we run, the HTML and the CSS is
>   generally in UTF-8. UTF-16 is what is used internally in the JS
>   engine (using conversions as needed).
> - In general, also use UTF-8 whenever possible for external
>   communications (AJAX, cookies, form fields, SQL queries if you rare
>   in node.js, ...). Exceptions: in particular cases where a
>   different one is expected.

### "Quotes"

[...]

### "Special characters"

[...]

### "String length"

[...]

### "Accessing characters"

[...]

### "Strings are immutable"

[...]

### "Changing the case"

Methods [toLowerCase()](mdn:js/String/toLowerCase) and [toUpperCase()](mdn:js/String/toUpperCase) change the case:

```js run
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```

Or, if we want a single character lowercased:

```js run
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

> [!t] t: String is not affected in place (they are immutable, as we know)
>
> - To change a variable, we must reassign the output to it.
> - For example:
>
>   ```js
>   let str='hello';
>   str = str.toUpperCase();
>   ```
> - Similar thing **applies to any string method**: the string
>   itself is unaffected.

### Searching "for a substring"

There are multiple ways to look for a substring within a string.

#### "str.indexOf"

The first method is [str.indexOf(substr, pos)](mdn:js/String/indexOf).

It looks for the `substr` in `str`, starting from the given position `pos`, and returns the position where the match was found or `-1` if nothing can be found.

> [!t] t: position is an index (starts with 0), **included**

For instance:

[...]

#### "includes, startsWith, endsWith"

The more modern method [str.includes(substr, pos)](mdn:js/String/includes) returns `true/false` depending on whether `str` contains `substr` within.

> [!t] t: pos is an index (starts with 0), **included**

It's the right choice if we need to test for the match, but don't need its position:

[...]

### "Getting a substring"

There are 3 methods in JavaScript to get a substring: `substring`, `substr` and `slice`.

`str.slice(start [, end])`
: Returns the part of the string from `start` to (but not including) `end`.

> [!t] t: Both are index (start with 0). start **included**, end **exluded**

    For instance:

    [...]

`str.substring(start [, end])`
: Returns the part of the string *between* `start` and `end` (not including `end`).

    This is almost the same as `slice`, but it allows `start` to be greater than `end` (in this case it simply swaps `start` and `end` values).

    > [!t] t: slice in that case returns empty string instead.

    For instance:

    [...]

`str.substr(start [, length])`
: Returns the part of the string from `start`, with the given `length`.

    [...]

### "Comparing strings"

[...]

- All lowercase letters go after uppercase letters because their codes are greater.
- Some letters like `Ö` stand apart from the main alphabet. Here, its code is greater than anything from `a` to `z`.

> [!t] t: Overview of "groups" of characters (and their order) in Unicode
>
> - Unicode point codes are grouped in [unicode
>   blocks](https://en.wikipedia.org/wiki/Unicode_block).
>   - The first block of 128 chars is called "Basic Latin". It
>     corresponds to the characters of ASCII standard (in their order).
>   - The next block of 128 chars is called "Latin-1 Supplement". It
>     corresponds of the second half of the Extended ASCII "ISO 8859-1",
>     the most popular Extended ASCII that contains most of the missing
>     chars for covering European most popular languages (common
>     accented chars, etc).
>   - Then come other blocks with different sizes: stargin with some for
>     complementing latin scripts even more, then others for covering
>     other scripts and representations.
> - We can look in more detail the first blocks in the
>   [list of unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters):
>   - We see some "groups" of characters, and their order, which will
>     be the default comparison order in JS, so the default sorting
>     order (we will see the `sort()` method of arrays in section
>     LANG5.6).
>   - These groups in their order with some examples of contained
>     characters:
>     - Basic Latin
>       - 32 control chars: null character, line feed, carriage
>         return, horizontal tab, ... Many are not used anymore.
>       - 16 punctuation/symbols: space, !, (, ), ., +, -, /, ...
>       - 10 digits: 0, 1, ... 9
>       - 7 punctuation/symbols: :, ;, <, =, >, ?, @
>       - 26 uppercase letters: A, B, ..., Z
>       - 6 punctuation/symbols: [, \, ], ^, _, \`
>       - 26 lowercase letters: a, b, ..., z
>       - 4 punctuation/symbols: {, |, }, ~
>       - 1 control char: Delete
>     - Latin-1 Supplement
>       - 32 control characters: most are not used anymore.
>       - 32 punctuation/symbols: non-breaking space, ¡, ©, ®, ¿, ...
>       - 30 uppercase letters (most accented): ..., Á, ..., É, ..., Í, ... Ñ, ..., Ó, ..., Ú, ...
>         - 1 math symbol (inserted inside that group): ×
>       - 32 lowercase letters (most accented): ..., á, ..., é, ..., í, ... ñ, ..., ó, ..., ú, ...
>         - 1 math symbol (inserted inside that group): ÷
>     - So the default comparison/sort order of the groups is:
>       numbers, ASCII standard uppercase, ASCII standard lowercase,
>       ASCII extended uppercase, ASCII extended lowercase.
>     - And there are different punctuation and symbols around these
>       groups, with no particular logic. E.g. - and / are before
>       numbers, but _ and \ are between uppercase and lowercase
>       standard ASCII, and | is after uppercase standard ASCII...

#### "Correct comparisons"

The "right" algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

So, the browser needs to know the language to compare.

Luckily, modern browsers support the internationalization standard [ECMA-402](https://www.ecma-international.org/publications-and-standards/standards/ecma-402/).

It provides a special method to compare strings in different languages, following their rules.

The call [str.localeCompare(str2)](mdn:js/String/localeCompare) returns an integer indicating whether `str` is less, equal or greater than `str2` according to the language rules:

- Returns a negative number if `str` is less than `str2`.
- Returns a positive number if `str` is greater than `str2`.
- Returns `0` if they are equivalent.

> [!t] t: Read: `str.localeCompare(str2)` is positive ("true") if str comes after str2
>
> - Is negative ("false") if it comes before.
> - Is zero if same place.
>   - They can be in the "same place" even if different when we activate
>     insensitiveness (see config options below).

For instance:

```js run
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```

> [!t] t: Don't count on -1 or +1: per spec, can be any negative or positive.

This method actually has two additional arguments specified in [the documentation](mdn:js/String/localeCompare), which allows it to specify the language (by default taken from the environment, letter order depends on the language) and setup additional rules like case sensitivity or should `"a"` and `"á"` be treated as the same etc.

> [!t] t: Important for non-english, but not straighforward to use.
>
> - Constructor
>   [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator):
>   - Provides an alternative way of doing locale comparison,
>     recommended when having to do "many comparisons": e.g.
>     sorting or filtering an array.
>   - One first instatiates an object with the desired
>     configuration. Something like
>     `collator = new Intl.Collator(/*[options]*/);`.
>   - Then, this object provides a method `collator.compare(str, str2)`
>     with same result than `str.localeCompare(str2)`.
> - There are 2 optional configuration parameters, similar in
>   both methods:
>   - locale (language/script/region/variant) specification
>   - further options.
> - With `str.localCompare()` they are placed, each time, after the
>   string to compare.
> - With `Intl.Collator` they are placed once in the constructor.
> - If no locale (language) is specified, by default it is taken from
>   the "environment".
> - One can check this default locale detected with:
>
>   ```js
>   (new Intl.Collator()).resolvedOptions().locale
>   ```
>
> - In the browser, this may be the locale of the
>   end-user, but I'm not sure that it is always like this.
> - Since there may be nuances in ordering among languages, we can
>   ensure the locale used with an optional parameter, for being sure of
>   the one that is used.
> - For example, to force spanish language:
>
>   ```js
>   // With non-locale comparison:
>   'zorro' > 'ámbar';
>     // false: no good! zorro shouldn't be before ámbar.
>   // Locale compare with 'es' (spanish):
>   'zorro'.localeCompare('ámbar', 'es');
>     // Positive: good! zorro is after ámbar.
>   // Using Intl.Collator:
>   const collator = new Intl.Collator('es');
>   collator.compare('zorro', 'ámbar');
>     // Positive: good! zorro is after ámbar.
>   // With local 'en' (english):
>   'zorro'.localeCompare('ámbar', 'en') );
>     // Also positive, as with locale 'es' in this case.
>     // But this cannot be generalized for every case. If we want to
>     // ensure that we compare "in the spanish way", we specify 'es'.
>     // We don't want to be experts in language: just indicate (force
>     // here) the language of the UI application.
>   // Let's see an example where locale 'es' differs from locale 'en'
>   // on string comparisons.
>   // - In spanish locale, "ñ" an independent letter from "n" vs. "á"
>   //   that is an "a". When sorting, all "n"'s come first, then all "ñ"'s.
>   //   But the "á"'s are mixed with the "a"'s (it's, regarding sorting,
>   //   the exact same letter.
>   // - In english locale, "ñ" is a variant of "n", so it gets mixed
>   //   with it.
>   // We see it with a flashforward of the usage of the array's sort() method:
>   // Sort a strings array, by default:
>   ['zorro', 'ñoño', 'ágil', 'nube'].sort();
>      // [ "nube", "zorro", "ágil", "ñoño" ] : no good order...
>      // ñ and á arbitrarily marginalized
>   // Sort a strings array, with 'en' locale:
>   ['zorro', 'ñoño', 'nube'].sort((s1,s2)=>s1.localeCompare(s2, 'en'));
>      // [ "ágil", "ñoño", "nube", "zorro" ] : better, but not good enough...
>   // Sort a strings array, with 'es' locale:
>   ['zorro', 'ñoño', 'nube'].sort((s1,s2)=>s1.localeCompare(s2, 'es'));
>      // [ "ágil", "nube", "ñoño", "zorro" ]
>   ```
>
> - Further configuration can be made with an input "object" containing
>   options. We specify in the object the particular ones we want to
>   diverge from their default values.
> - [Options for the comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options):
>   - "usage" can be one of:
>     - "sort" (default): for sorting (ordering).
>     - "search": optimized for searching (just knowing if matches or
>       not).
>   - "sensitivity" can be one of:
>     - "case": only case sensitive (but not accent sensitive):
>       a ≠ b, a = á, a ≠ A
>     - "accent": only accent sensitive (but not case sensitive):
>       a ≠ b, a ≠ á, a = A
>     - "variant": both case and accent sensitive (normal comparison):
>       a ≠ b, a ≠ á, a ≠ A 
>     - "base": both case and accent insensitive:
>       a ≠ b, a = á, a = A
>     - Default is "variant" (ultra-sensitive) for "sort". For "search",
>       it depends on the locale.
>   - "ignorePunctuation":
>     - Boolean, false by default.
>     - If true, it ignores any punctuation character when comparing:
>       "hellobye" = "hello bye" = "hello - bye" = "hello,._-/\n%bye"
>   - "numeric":
>     - Boolean, false by defult.
>     - Compares consecutive digits in numeric order (placing '10' after
>       '2').
>     - Does not handle well decimals.
>   - Other (see the reference).
> - Example of ultra-insensitive search:
>
>   ```js
>   const collator = new Intl.Collator(
>     'es',
>     { sensitivity: 'base', ignorePunctuation: true });
>   alert( collator.compare('Martínez-Polo', 'martinez polo') );
>     // 0 (equal)
>   // Note: could also be done with `str.localCompare()`, but each time
>   // one has to provide the config, and it may be less performant.
>   ```
>
> - Examples of numeric comparison
>
>   ```js
>   const collator = new Intl.Collator( 'en', { numeric: true });
>   alert( '10€' > '2€' );
>     // false, no good.
>   alert( collator.compare('10€', '2€') );
>     // positive, good
>   alert( '1.50€' > '1€' );
>     // false, no good
>   alert( collator.compare('1.50€', '1€') );
>     // negative, no good! Needed '1.00€' to work.
>   alert( collator.compare('$1.50', '$1') );
>     // positive, good... but needed to **end** with numbers
>   ```
>
> - Example of locale+numeric comparison, showing that the numbers
>   inside a string are considered as a whole before advancing to the
>   following character:
>
>   ```js
>   const collEs = new Intl.Collator('es');
>   const collEsNum = new Intl.Collator('es', { numeric: true });
>   const arr = ['Z', 'a', 2, 'z', 10, 'á', 1, 'a10b', 'a2b', 'a2', 'a2a',
>     'aa', 'ab', 'a11a', 'a1b', 'a1a', 'a1'];
>   arr.sort(collEs.compare)+'';
>     // "1,10,2,a,á,a1,a10b,a11a,a1a,a1b,a2,a2a,a2b,aa,ab,z,Z"
>   arr.sort(collEsNum.compare)+'';
>     // "1,2,10,a,á,a1,a1a,a1b,a2,a2a,a2b,a10b,a11a,aa,ab,z,Z"
>
>   // Note: casting to string with +'' to avoid ... in output and
>   // the need to unfold.
>   ```
>
> - Browser compatibility:
>   - Intl related stuff may not have universal support. E.g.
>     [`Intl.Collator` support](https://caniuse.com/mdn-javascript_builtins_intl_collator)
>     is 97% as of 2024 (and it is also needed for using options in
>     str.localeCompare). Gracefull degradation and/or polyfill could be
>     considered here.
>   - Besides, even when supported, not every possible locale is
>     available on every browser installation (would make them huge).
>     - One can check availability of an array of locales like this:
>
>       ```js
>       // Are english, spanish, french and balinese locales supported?
>       alert ( Intl.Collator.supportedLocalesOf(
>         ['en', 'es', 'fr', 'ban']);
>         // ['en', 'es', 'fr'] : balinese missing, rest are supported.
>       // Is corsican locale supported?
>       alert ( Intl.Collator.supportedLocalesOf('co');
>         // [] : no (empty array).
>       ```
>
>     - If for comparison we specify a locale that is not available, it
>       fallbacks to the default runtime locale.
> - More on locales:
>   - We are simplifying here using locales that are whole languages.
>   - A locale can be more specific than that:
>     - 'en': english language in general.
>     - 'en-US': english language, in the region of the US.
>     - 'zh-Hans-CN': Chinese language, written in Hans script
>       (simplified script, vs the traditional script), in the region of
>       China (Chinese is used also in other regions, with possible
>       variations: Hong Kong, Taiwan, ...).

### "Summary"

- There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions `${…}`.
- We can use special characters, such as a line break `\n`.
- To get a character, use: `[]` or `at` method.
- To get a substring, use: `slice` or `substring`.
- To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`.
- To look for a substring, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.
- To compare strings according to the language, use: `localeCompare`, otherwise they are compared by character codes.

> [!t] t: Or better use `Intl.Collator`.

There are several other helpful methods in strings:

- `str.trim()` -- removes ("trims") spaces from the beginning and end of the string.
- `str.repeat(n)` -- repeats the string `n` times.
- ...and more to be found in the [manual](mdn:js/String).

Strings also have methods for doing search/replace with regular expressions. But that's big topic, so it's explained in a separate tutorial section <info:regular-expressions>.


> [!t] t: At least, know `str.repace()` and `str.replaceAll()`
>
> - Subtitute something (first ocurrence) with a given string (or all
>   occurences in the second case).
> - They can be used with first parameter being a regular expressions,
>   but also with a litteral string (les powerful, but often enough and
>   quite simple to be used).
> - Examples:
>
>   ```js
>   let s = "HelLO world";
>   s.replace("wo","X"); // "HelLO Xrld"
>   s.replaceAll("l", "XX"); // "HeXXLO worXXd"
>   s.replace("wor", ""); // "HelLO ld"
>   ```
>
> - We may also see in a different document a "preview" of the basics of regular
>   expressions.

Also, as of now it's important to know that strings are based on Unicode encoding, and hence there're issues with comparisons. There's more about Unicode in the chapter <info:unicode>.

## "5.4 Arrays"

> [!t] t: We already made after LANG2 a flashforward of this article
>
> - You can make an overview of the parts that required concepts from
>   the LANG4.
> - There is also an extra comment (on sparse arrays).

[...]

### "Declaration"

[...]

### "Get last elements with "at""

[...]

### "Methods pop/push, shift/unshift"

[...]

### "Internals"

[...]

Please think of arrays as special structures to work with the *ordered data*. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you actually require a regular object `{}`.

> [!t] t: sparse arrays
>
> Concerning "make holes"... He is talking to what is called "sparse
> arrays" (arrays with "holes", or even with mostly holes).
>
> ```js
> // One easy way of creating them even directly with litteral notation:
> const arr = ['a0','a1',,'a3',undefined,,,'a7',,];
> arr.len; // 9
>          // Last comma: trailing comma, optional, does not create extra.
> arr; // Shows "empty slots"" (holes) !== undefined.
> arr[11] = 'a11';
> arr.len; // 12
> arr; // More holes have been created.
> arr[2] === undefined; // true: empty element indistinguishable
>                       // from undefined if tested this way
> arr[4] === undefined; // true
> 2 in arr; // false: way of distinguish from undefined
> 4 in arr; // true
> arr[-2] = 'hidden';
> arr.len; // 12, unchanged
> arr; // Not seen, but...
> -2 in arr; // true. Quite hidden: one has to remember it has
>            // put something in that particular index.
>            // The possitive ones are at least found in a
>            // for loop (since arr.len is updated with them).
> arr[-2]; // "hidden": it's there!
> ```
>
> There are very valid uses of "sparse structures having an index for
> accessing existing elements" when programming, but jsinfo says that you
> should implement them in a different way than abusing the Array object
> in this way. It suggest Object with arbitrary keys, but maybe a Map
> collection could be a better candidate for the "sparse array" use
> case.
>
> Main reason jsinfo gives against usage of sparse arrays is performance
> (it claims that it avoids engine optimization).
>
> Other arguments against sparse arrays are that some Array methods will
> behave differently with them. E.g. (I'm using here stuff from future
> sections of jsinfo):
>
> - `arr.map()` passes empties to its output (although not calling the
>   callback for them), vs `arr.filter()` or `arr.forEach()
>   or `arr.reduce()` that skip them completely.
> - `...` expands transforming empties to undefined.
>
> All this may lead to unexpected results.
>
> Maybe one could relax the prohibition to "use sparse arrays if you
> really know what you are doing". And you will tend to avoid them while
> YouDontKnowJavaScript(Yet). And even if you know JS, you should know
> that MostOtherDevelopersDontKnowJavaScript(Yet), which leads to a
> maintenance and collaboration problem with your code.
>
> Note concerning the performance argument: if it is true (I'm not sure
> of it), my guess is that it should also apply against using mixed
> arrays, i.e. arrays of non-uniform types. For example: mixing
> different types of primitives (and maybe non primitives).
> Note: arrays of all-non primitives (of any type) may be OK, since they
> may be internally arrays of all-references.

### "Performance"

[...]

### "Loops"

[...]

### "A word about "length""

[...]

### "new Array()"

[...]

### "Multidimensional arrays"

[...]

### "toString"

[...]

### "Don't compare arrays with =="

[...]

### "Summary"

[...]

## "5.5 Array methods"

Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.

### "Add/remove items"

[...]

#### "splice"

How to delete an element from the array?

The arrays are objects, so we can try to use `delete`:

> [!t] t: Remember that we also used `delete` to remove a property from an object

```js run
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
```

The element was removed, but the array still has 3 elements, we can see that `arr.length == 3`.

That's natural, because `delete obj.key` removes a value by the `key`. It's all it does. Fine for objects. But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

So, special methods should be used.

The [arr.splice](mdn:js/Array/splice) method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

> [!t] t: arr.splice changes arr **in place** (mutates the arr).
>
> - The same as pop/push/shift/unshift, but allows much more flexible
>   actions.
> - The performance penalty we mentioned when manipulating "at the
>   start" (shift/unshift) surely also applies when manipulating "in the
>   middle".

The syntax is:

```js
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

It modifies `arr` starting from the index `start`: removes `deleteCount` elements and then inserts `elem1, ..., elemN` at their place. Returns the array of removed elements.

> [!t] t: index (starts with zero), **included**

This method is easy to grasp by examples.

[...]

#### "slice"

The method [arr.slice](mdn:js/Array/slice) is much simpler than similar-looking `arr.splice`.

The syntax is:

```js
arr.slice([start], [end])
```

It returns a new array copying to it all items from index `start` to `end` (not including `end`). Both `start` and `end` can be negative, in that case position from array end is assumed.

It's similar to a string method `str.slice`, but instead of substrings it makes subarrays.

> [!t] t: Not subarray**s**, but **a single** subarray.

> [!t] t: arr.slice does **not** change arr **in place**
>
> - Contrary to arr.splice, and similar to str.slice

For instance:

```js run
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
```

We can also call it without arguments: `arr.slice()` creates a copy of `arr`. That's often used to obtain a copy for further transformations that should not affect the original array.

> [!t] t: Here, and in any case: not "recursive copy"
>
> ```js
> const a = [ { b: 1 }, 2 ];
> const b = a.slice(0, 1); // b = [ { b: 1 } ]
> alert( a[0] === b[0] ); // true: not cloned, only reference copied.
> ```

#### "concat"

The method [arr.concat](mdn:js/Array/concat) creates a new array that includes values from other arrays and additional items.

>[!t] t: **new array**: arr unaffected (not changed in place)

The syntax is:

```js
arr.concat(arg1, arg2...)
```

It accepts any number of arguments -- either arrays or values.

The result is a new array containing items from `arr`, then `arg1`, `arg2` etc.

If an argument `argN` is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:

```js run
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

> [!t] t: Again here: not "recursive copy"
>
> ```js
> const a = [ { b: 1 }, 2 ];
> const b = a.concat(3); // b = [ { b: 1 }, 2, 3]
> alert( a[0] === b[0] ); // true: not cloned, only reference copied.
> ```

Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

[...]

### "Iterate: forEach"

The [arr.forEach](mdn:js/Array/forEach) method allows to run a function for every element of the array.

The syntax:
```js
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

For instance, this shows each element of the array:

```js run
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

And this code is more elaborate about their positions in the target array:

```js run
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```

The result of the function (if it returns any) is thrown away and ignored.

> [!t] t: arr.forEach is a functional alternative to make loops
>
> - Made in a single **expression**, makes what is normally done with
>   for/while **statement**.
> - We are seeing later many other array methods for doing functionally
>   things that traditionally were done with loops: find, filter, map,
>   sort, reduce, ...
> - All of these use a callback (often an arrow function) for the "body
>   of things to do".
> - This is a very popular programming style in modern JS and frameworks.
> - The callback function body typically resembles the one of a
>   "for..of":
>
>   ```js
>   const arr = [5,6,7];
>   // for..of:
>   for (const item of arr) { console.log(item); }
>   // Similar to arr.forEach:
>   arr.forEach(item => { console.log(item); };
>   // Both have access to each "item" without need for bracked
>   // notation nor knowing inside the body the reference to the
>   // whole array.
>
>   // Compare with a normal for:
>   for (let i=0; i<arr.length) { console.log(arr[i]); }
>   ```
>
> - In a "for..of":
>   - One cannot do things depending on the position (index): "first",
>     "last", "odd positions", ...
>   - The array is "read-only": one cannot affect the array itself (only
>     if array of non-primitives, one can indirectly affect what is
>     pointed by the reference of these non-primitives).
> - However, in an arr.forEach() callback function one can do these
>   things by using the second and third parameter:
>
>   ```js
>   const arr = [5,6,7];
>   arr.forEach((item, i, arr) => { console.log(arr[i]); ); };
>   // Compare with a normal for:
>   for (let i=0; i<arr.length) { console.log(arr[i]); }
>   ```
>
>   - One can do things in these bodies depending on the index:
>
>     `if (i === 0 || i === arr.length) { console.log('frontier'); }`
>
>   - And/or affect the array elements themselves, even if primitives:
>
>     `arr[i]++;`
>
> - So "forEach" combines the two ways of working of a "normal for" and a
>   "for..of", and the programmer chooses the most convenient one in
>   each case (or a combination of both).
>   - Note: to be honest, "for..of" also permits this if using the
>     "arr.entries()" method:
>
>     ```js
>     const arr = [5,6,7];
>     // Using destructuring assignment (spoiler of jsinfo LANG5.10):
>     for (const [i, item] of arr.entries()) { console.log(i, item); }
>     // Not using it:
>     for (const entry of arr.entries()) { console.log(entry[0], entry[1]); }
>     ```
> - Compared to both for statements ("normal for" and "for..of"):
>   - We cannot do easily a "break": all elements are traversed and the
>     callback executed on them.
>     - Note: to obtain a break-like behaviour, you can use
>       [`arr.every()` or other workarounds](https://masteringjs.io/tutorials/fundamentals/foreach-break)
>   - For good, but also for bad, our loop body is encapsulated into a
>     function, without knowledge of the exterior (unless we use global
>     variables, which is a typically not recommended way of
>     programming).
> - Similar to a "for..of", the traversing order always starts on the
>   first element, in increasing index order. In a "normal for" one
>   can easily decide to traverse in the opposite order.
> - But there are further inconvenients of a forEach vs for (or
>   for..of):
>
>   [Disadvantages of forEach vs for](https://community.appsmith.com/content/blog/dark-side-foreach-why-you-should-think-twice-using-it):
>
>   Summary of the article:
>   1. Performance Issues:
>      - forEach() is 95% slower than a traditional for loop.
>   2. Inability to Escape the Loop:
>      - You can't use break or continue within forEach().
>   3. Incompatibility with Async Functions:
>      - forEach() doesn't work well with async/await.
>      - Better Options for Arrays: map(), reduce(), and filter() are
>        often more appropriate.
>   4. Lack of Return Value:
>      - forEach() always returns undefined.
>   5. Handling Sparse Arrays:
>      - forEach() skips over empty slots in sparse arrays.
>
>   See the article for more details.
>   - But beware: "Example: Handling Sparse Arrays with map()"
>     is wrong there: arr.map() does not call the callback for empties.
>   As said before, one use case for forEach() is that it can be used in
>   an expression (avoiding a statement in places where only an
>   expression is allowed). But this makes typically more sense for
>   map(), filter() and reduce() (we cover them next), since they
>   generate on-the-fly things to be used and returned to the
>   expression... forEach() is a dead end street expression (returns
>   undefined). But in any case, it can be used for a hacky "do more
>   stuff, in this case a loop, in the place where only an expression is
>   allowed", by using the expression separator ",":
>   (arr.forEach(blah), restOfTheExpressionThatReturnsSomething)

### "Searching in array"

Now let's cover methods that search in an array.

#### "indexOf/lastIndexOf and includes"

The methods [arr.indexOf](mdn:js/Array/indexOf) and [arr.includes](mdn:js/Array/includes) have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

- `arr.indexOf(item, from)` -- looks for `item` starting from index `from`, and returns the index where it was found, otherwise `-1`.
- `arr.includes(item, from)` -- looks for `item` starting from index `from`, returns `true` if found.

Usually these methods are used with only one argument: the `item` to search. By default, the search is from the beginning.

For instance:

```js run
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
```

Please note that `indexOf` uses the strict equality `===` for comparison. So, if we look for `false`, it finds exactly `false` and not the zero.

> [!t] t: As always, as a rookie, embrace strict equality (for your own health).

If we want to check if `item` exists in the array, and don't need the index, then `arr.includes` is preferred.

The method [arr.lastIndexOf](mdn:js/Array/lastIndexOf) is the same as `indexOf`, but looks for from right to left.

```js run
let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)
```

````smart header="The `includes` method handles `NaN` correctly"
A minor, but noteworthy feature of `includes` is that it correctly handles `NaN`, unlike `indexOf`:

```js run
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)
```
That's because `includes` was added to JavaScript much later and uses the more up to date comparison algorithm internally.
````

> [!t] t: NaN strikes back!

#### "find and findIndex/findLastIndex"

Imagine we have an array of objects. How do we find an object with the specific condition?

Here the [arr.find(fn)](mdn:js/Array/find) method comes in handy.

> [!t] t: Like indexOf, but when we need more "insight" in each element

The syntax is:
```js
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
```

> [!t] t: "for falsy scenario returns undefined" missleading
>
> - It refers to: "if non of the calls to the callback function returns
>   true, arr.find() globally returns undefined.
> - Note that the callback itself can return a truthy besides a literal
>   true to indicate "found". And the rest of returned values (falsy),
>   indicate a not found (yet).

The function is called for elements of the array, one after another:

[...]

#### "filter"

The `find` method looks for a single (first) element that makes the function return `true`.

If there may be many, we can use [arr.filter(fn)](mdn:js/Array/filter).

The syntax is similar to `find`, but `filter` returns an array of all matching elements:

> [!t] t: **new array**: arr unaffected (not changed in place)

> [!t] t: Again here: not "recursive copy"

```js
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
```

For instance:

```js run
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

### "Transform an array"

Let's move on to methods that transform and reorder an array.

#### "map"

The [arr.map](mdn:js/Array/map) method is one of the most useful and often used.

It calls the function for each element of the array and returns the array of results.

> [!t] t: Creates **new** array (arr not changed), with the length

The syntax is:

```js
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
```

For instance, here we transform each element into its length:

```js run
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

> [!t] t: other ways to shallow copy (non recursively) an array
>
> - We've seen above: `arr.slice()`
> - One can also use `arr.map(item => item)`
> - Or we saw for Objects, and also works for arrays: `Object.assign([], arr)`
> - And we will see the spread operator later in the course: `[...arr]`

> [!t] t: arr.map (in jsinfo LANG5.5) != Map (in jsinfo LANG5.7)
>
> - Both are doing a "map" (hence their name), but of different things.

#### "sort(fn)"

The call to [arr.sort()](mdn:js/Array/sort) sorts the array *in place*, changing its element order.

> [!t] t: This one is **in place** (mutes arr).
>
> Copy first if we want to preserve the original.

It also returns the sorted array, but the returned value is usually ignored, as `arr` itself is modified.

[...]

For example, let's sort a few countries in German:

```js run
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
```
````

> [!t] t: Remember my comments on localCompare (in string comparison section)
>
> - May be better to use for performance  Intl.Collator 
> - If we want to ensure exact german order, indicate this locale
>   explicitly.
> - We can configure to be case and/or accent and/or punctuation
>   insensitive.
> - Leave default "usage" ("sort") when sorting (e.g. arr.sort), but configure it
>   to "search" when searching (e.g. arr.find)

> [!t] t: Array of objects
>
> - Many times we sort an array of maybe complex objects. The callback
>   for sorting decides wich "field" it uses of each object for doing
>   the comparison.

#### "reverse"

The method [arr.reverse](mdn:js/Array/reverse) reverses the order of elements in `arr`.

> [!t] t: This one is also **in place** (mutes arr).
>
> Copy first if we want to preserve the original.

For instance:

```js run
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

It also returns the array `arr` after the reversal.

#### "split and join"

Here's the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: `John, Pete, Mary`. But for us an array of names would be much more comfortable than a single string. How to get it?

The [str.split(delim)](mdn:js/String/split) method does exactly that. It splits the string into an array by the given delimiter `delim`.

> [!t] t: str.split returns array

In the example below, we split by a comma followed by space:

```js run
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
```

The `split` method has an optional second numeric argument -- a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

> [!t] t: It's an index (starts with 0), and extra are ignored, **included it**.

```js run
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
```

````smart header="Split into letters"
The call to `split(s)` with an empty `s` would split the string into an array of letters:

```js run
let str = "test";

alert( str.split('') ); // t,e,s,t
```
````

The call [arr.join(glue)](mdn:js/Array/join) does the reverse to `split`. It creates a string of `arr` items joined by `glue` between them.

> [!t] t: arr.join returns string

For instance:

```js run
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

alert( str ); // Bilbo;Gandalf;Nazgul
```

#### "reduce/reduceRight"

When we need to iterate over an array -- we can use `forEach`, `for` or `for..of`.

When we need to iterate and return the data for each element -- we can use `map`.

> [!t] t: Or returning a transformation of this data (here the name 'map').

The methods [arr.reduce](mdn:js/Array/reduce) and [arr.reduceRight](mdn:js/Array/reduceRight) also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

[...]

### "Array.isArray"

Arrays do not form a separate language type. They are based on objects.

So `typeof` does not help to distinguish a plain object from an array:

```js run
alert(typeof {}); // object
alert(typeof []); // object (same)
```

...But arrays are used so often that there's a special method for that: [Array.isArray(value)](mdn:js/Array/isArray). It returns `true` if the `value` is an array, and `false` otherwise.

```js run
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
```

> [!t] t: Alternative method: checking the class
>
> - Arrays are instance objects of the class/constructor Array.
> - We can check the class/constructor of an object. This method
>   works for checking if it is "Array", and also works for
>   fine tuning the checking of other types of objects.
> - We will see later how this can be done.

### "Most methods support "thisArg""

> [!t] t: Skip this section if short of time

[...]

### "Summary"

[...]

These methods are the most used ones, they cover 99% of use cases. But there are few others:

> [!t] t: Skip these other methods if in an hurry

- [arr.some(fn)](mdn:js/Array/some)/[arr.every(fn)](mdn:js/Array/every) check the array.

  The function `fn` is called on each element of the array similar to `map`. If any/all results are `true`, returns `true`, otherwise `false`.

  These methods behave sort of like `||` and `&&` operators: if `fn` returns a truthy value, `arr.some()` immediately returns `true` and stops iterating over the rest of items; if `fn` returns a falsy value, `arr.every()` immediately returns `false` and stops iterating over the rest of items as well.

  We can use `every` to compare arrays:

  ```js run
  function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  alert( arraysEqual([1, 2], [1, 2])); // true
  ```

- [arr.fill(value, start, end)](mdn:js/Array/fill) -- fills the array with repeating `value` from index `start` to `end`.

- [arr.copyWithin(target, start, end)](mdn:js/Array/copyWithin) -- copies its elements from position `start` till position `end` into *itself*, at position `target` (overwrites existing).

- [arr.flat(depth)](mdn:js/Array/flat)/[arr.flatMap(fn)](mdn:js/Array/flatMap) create a new flat array from a multidimensional array.

For the full list, see the [manual](mdn:js/Array).

> [!t] t: End of skip

From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that's much easier.

[...]

## "5.6 Iterables"

> [!t] t: Read only these sections: 
>
> - "Introduction"
> - "Iterables and array-likes"
> - "Array.from"
> - "Summary"

[...]

## "5.7 Map and Set"

> [!t] t: Read completely.

[...]

## "5.8 WeakMap and WeakSet"

> [!t] t: Just read introduction and summary

[...]

## "5.9 Object.keys, values, entries"

> [!t] t: Read completely (it's small).
>
> - It's quite related to `for..in`: ask an objecte for the
>   properties that have been explicitly defined on it
>   (provided that they are not "hidden", i.e. that they have
>   a string name and not a Symbol name).

[...]

## "5.10 Destructuring assignment"

> [!t] t: Read completely.
>
> - It's an ES6+ feature, quite popular in modern JS use and frameworks
>   programming

[...]

**Smart function parameters**

[...]

> [!t] t: We see here a recapitulative minimalistic example
>
> When we have function parameters of type object or array, this allows
> us, inside the code of our function, to go directly to the object
> properties or array elements. Let's see it:
>
>   ```js
>   // User object:
>   const user = { n: "John", s: "Smith" };
>
>   // Funtion handling split parameters:
>   const greet = (n, s) => {
>     console.log(`Hi ${n} ${s}!`);
>   }
>   greet(user.n, user.s);
>   greet("Liv", "Tyler");
>
>   // Function using User object, does not force to specify each
>   // separated property:
>
>   // Normal per property assignment inside body:
>   greetUser = (user) => {
>     const n = user.n;
>     const a = user.s;
>     console.log(`Hi ${n} ${s}!`);
>   };
>   // Handy use if already in an object:
>   greetUser(user);
>   // If not already in object, one has to create it:
>   greetUser({ n: "Liv", s: "Tyler" });
>   // Indiferent order here (properties "hooked" by their name, not
>   // their position):
>   greetUser({ s: "Tyler", n: "Liv" });
>
>   // Alternative: destructuring assignment inside body, in variables
>   // declaration:
>   greetUser = (user) => {
>     const { n, s } = user;
>     console.log(`Hi ${n} ${s}!`);
>   };
>   greetUser(user);
>
>   // Alternative: destructuring assignment directly in parameter
>   // declaration:
>   greetUser = ({ n, s }) => {
>     console.log(`Hi ${n} ${s}!`);
>   };
>   greetUser(user);
>
>   // Accepting an object (in whichever implementation):
>   //
>   // - Avoids remembering parameters order: one can create
>   //   the literal object in the order she lik.
>   // - But one has to specify (remember or look up, and write) all the
>   //   properties (ex-parameters) names...
>   // - ... Except if they have default values: in that case, one only
>   //   has to specify the ones he is interested in setting.
>   // - This scales way better than using a big number of split
>   //   parameters.
>   // - Besides, it greatly facilitates future extensibility: adding
>   //   features with backwards compatibility. When split parameters
>   //   are used, their order is important and new things must be
>   //   placed (optional) at the end, possibly leading to an
>   //   arbitrary historical order.
>   // - This flexibility/extensibility of JS objects literral notation
>   //   is one of the reasons for the success of the JSON format for
>   //   conveying information between entities.
>
>   // Making optional the properties, and even the whole object
>   // parameter:
>   greetUser = ({ n = "unnamed", s = "anonymous"} = {}) => {
>     console.log(`Hi ${n} ${s}!`);
>   };
>   greetUser(user);
>   greetUser({n: "Liv", s: "Tyler"});
>   greetUser({s: "Tyler", n: "Liv"});
>   greetUser({n: "Liv"});
>   greetUser({s: "Tyler"});
>   greetUser({});
>   greetUser();
>   ```
>
> This aproach is heavily used in APIs: e.g. for providing flexible
> behaviour configuration with an "options" object parameter
> (typically itself optional).
>
> It is for sure complementary of using before this object
> parameter some "normally split" parameters (tipically few, and
> normally present in the usage of this function or method).

## "5.11 Date and time"

> [!t] t: Just read introduction and summary for a global view
>
> - Skip the rest, and read this comment.
> - Dates and time handling with `Date` is a major pain point in JS,
>   still as of 2025, that's why I prefer not investing much on it. The
>   main problem is that `Date` cannot be changed without backwards
>   compatibility issues, so something new needs to be used.
> - A proposal for ES/JS called
>   [Temporal global object](https://tc39.es/proposal-temporal/) was
>   aimed to cover these pain points and `Date` limitations.
>   - It is at stage 3 at this moment as of february 2026 (since quite a
>     long time), and it has been for a while the first (by far) most
>     popularly expected feature to be added to JS.
>   - In 2025 it started to be added (still experimentally) on some
>     browsers, starting with Firefox. And now waiting for final
>     standarization.
>   - As of february 2026 it at aprox. 50% of browser availability. It
>     is not any longer experimental in Chrome, although still
>     experimental in Safari.
>   - Check [can I use Temporal](https://caniuse.com/?search=temporal)
>     for updated information, since that percentaje will raise quickly
>     after Chrome and probable now Safari adoption. You can (should)
>     use a polifill when non natively available.
> - Before Temporal object, some of the issues with `Date` have been
>   typically adressed with specialized JS 3rd party libraries (that
>   will for sure be used for a long time for inertia reasons):
>   - [moment.js](https://momentjs.com): this is a still extremely
>     popular option, but not really suited for modern FE development.
>   - The same
>     [moment.js documentation recommends more modern alternatives](https://momentjs.com/docs/#/-project-status/recommendations/)
>     such as Luxon, Day.js and date-fns (covering different use cases).
> - In general, managing time is quite hard in programming, and more
>   hard than one may expect. Don't underestimate the many errors/bugs
>   you will produce when managing time due to your absolute ignorance
>   on the subject (and ignorance of being so ignorant). Treat dates and
>   time related stuff with high respect. Start by having a look to:
>   - [Falsehoods programmers believe about time](https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time)
>   - [More falsehoods programmers believe about time](https://infiniteundo.com/post/25509354022/more-falsehoods-programmers-believe-about-time)
>   - [Falsehoods programmers believe about time, single list - GitHub](https://gist.github.com/timvisee/fcda9bbdff88d45cc9061606b4b923ca)
>   - [Falsehoods programmers believe about time zones](https://www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/)
>
> - And now that we are at it and at our ignorance, there are a lot of other
>   [falsehoods programmers believe](https://github.com/kdeldycke/awesome-falsehood).
> - The first one that launched these collections of falsehoods was the
>   [falsehoods programmers believe about names](https://shinesolutions.com/2018/01/08/falsehoods-programmers-believe-about-names-with-examples/).
> - And for sure someone has gone quite [meta](https://www.grammarly.com/blog/vocabulary/meta-meaning/)
>   on this, and there are also
>   [falsehoods programmers believe about "falsehoods programmers believe about" lists](https://beesbuzz.biz/blog/1520-Falsehoods-programmers-believe-about-Falsehoods-programmers-believe-about-lists)

[...]

## "5.12 JSON methods, toJSON"

> [!t] t: Before reading:
>
> - Read my side-document "JSON and beyond" (`json-y-mas-alla.*`)
> - Then, read completely this article, except sections:
>   - "Excluding and transforming: replacer"
>   - "Custom toJSON"
>   - "Using reviver"

[...]


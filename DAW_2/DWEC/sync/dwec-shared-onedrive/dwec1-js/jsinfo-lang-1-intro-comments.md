# jsinfo LANG 1: Intro (comments)

## "1.1 An introduction to JavaScript"

### "How do engines work?"

- Interpreted vs JIT compiled language:
  - JS used to be an purely "interpreted language" (as the CLI shell for
    example), as oposed to a "compiled language": text instructions are read
    and executed inmediately one by one (REPL), without any compilation of the
    whole file of instructions.
  - But this laked performance, and was drastically improved by the JS
    engines by doing what is described in this section, that is called "Just
    In Time Compilation". Something similar is used by other modern
    languages, e.g. by Python.
  - JIT Compilation provides advantages of the two worlds (compiled and
    interpreted languages):
    - Immediacy and interactivity of an interpreted language when
      conveniente or neede.
    - Not excessive performance sacrifice.
- Convenience of thorough unit testing and/or linters and/or explicit typing:
  - Errors are seen only when running. Only the ones that violate the basic
    global structure are detected then. Any other, even during this JIT
    compilation, is not discovered ahead of time: it will only be seen
    **when the code happens to pass through that line**. And this only
    happens if this branch of code is tested explicitly, not by just
    "running the application".
  - So you are not "bothered" with compiler messages... but you tend to
    discover many errors quite late (or even they pass through to
    production).
  - A way to reduce this risk is to use a JS **linter**, that warns you
    before hand of many potential errors and code smells: a linter supplies
    the that advantage of a "traditional" compiler. Unfortunately, install
    and configure a JS linter in e.g. VSCode is less straightforward than
    for other languages (markdown, CSS, HTML, ...). We will address that
    later in this course.
  - For even more help from the linter/language to prevent even more errors
    and pitfalls, many use a static typing superset of JS: TS (see later
    section). Another alternative that still uses vanilla JS is using
    [JSDoc](https://jsdoc.app/): the types are specified in a certain way in
    comments, and it gets almost all the benefits of TS but without
    forcing to a building (transcompilation) step. As of 2023, there is
    already a [proposal for allowing type annotations in the JavaScript
    standard
    commitee](https://github.com/tc39/proposal-type-annotations), that is a
    subset of the TS superset. Not sure if it will arrive or when, but it
    may.
- High lack of control on the environment:
  - In typical development of applications or for BE (server-side), the
    developper has a relatively high control on the environment/platform
    where the code is compiled/run:
    what is installed, which versions, when to upgrade, ...
  - However, when developing for the Web client side (FE development), the
    JS code we provide in the webpage goes to a extremely diverse range of
    JS engines and versions of them.
  - This produces a lot of difficulties that are in part mitigated with
    methodologies and tools that we will address in this course, under the
    term "cross-browser compatibility", that affects not only JS but also
    HTML and CSS.
  - In spite of this help/mitigations, this is still a huge practic
    difficulty in FE development with respect to e.g. BE development
    (including with respecto to BE development made in JS).

### "What can in-browser JavaScript do?"

- "For instance, in-browser JavaScript is able to:"
  - These actions are not made with features of the JS language itself, but
    with functions/objects that are (natively) available in the browser
    environment.
  - This is what is usually called JS "client-side Web APIs" or "browser
    APIs" or "Web API". These are functions/methods calls, that happen
    inside the browser.
    - Note: do not confuse this term/concept with the term "Web API" when it
      refers to an HTTP API o RESTfull API. These are network requests
      that request something to the network using HTTP.

### "What CAN’T in-browser JavaScript do?"

- Limitations on the security:
  - As said, for security, JS cannot do certain things without user consent...
  - But as with any programming language, it may exploit the JS engine
    (specially if not patched, or even with zero-day exploits) or there are
    ways to lure or deceive the user. Browsers evolve and improve to reduce
    the security issues (sometimes at the expense of "nagging" the user),
    but this is a neverending fight.
- Non-"Same Origin Policy" examples:
  - "different sites" == "different domain, protocol or port" == "different
    schema or authority in the URL".
  - All that stuff has to be exactly equal to be "same origin":
    - For sure, http://a.com != http://b.com, but more subtly:
    - http://a.com != http://a.org != http://a.es
    - http://mybeautifuldomainname.com != http://mybeautifuldomainame.com
    - http://a.com != https://a.com
    - http://a.com != http://www.a.com != http://mail.a.com
      - However: http://a.com/www/ and http://a.com/mail/ are on the same
        domain.
    - http://a.com == http://a.com:80 != http://a.com:81
- External code loading is limited from JS, not from HTML:
  - "JavaScript [...] ability to receive data from other sites/domains is
    crippled.": this concerns the code inside JS "blocks" (`<script>` tags
    or `.js` loaded files).
  - However, the HTML code itself can statically load ressources from
    different sites/domains: the URL's specified on an src attribute of a
    `<script>` for loading external code often points to different
    sites/domains (the same as for other ressources loading, such as CSS,
    fonts, images, multimedia, ...).

### "What makes JavaScript unique?"

- The only native in browser:
  - For a long time, JS was the only native way of executing code in
    different browsers (cross-browser available), so you had to learn some
    of it if you wanted to do something special there.
  - Note: in 2015, started WebAssembly (WASM) support on browser engines:
    you can compile to it from different languages. As of 2023, it has
    reached 96% coverage. It may become a threat to JS at some time).
- And also available outside the browser:
  - Starting from 2009 node.js allowed to use it outside a browser, e.g. in
    the server (BE).
  - This allowed to learn and use a **single** language for the FULL web
    stack (and even outside the Web world):

    "A language to rule them all" (® Lord of the Rings).

- And also performant enough:
  - In 2008, JIT compilation was introduced by Google in the then
    launched Chrome with V8 engine: this made a huge improvement in
    performance, making on-par with other high level general purpose
    languages (e.g. Java).
- This has made JS extremely popular.
  - With different metrics, JS is one of the most used/popular general
    purpose languages nowadays (not restricted to web development). Some
    claim that it is the most used.
  - We will have a look at this in our "state of the art of web development"
    document.

### "Languages “over” JavaScript"

- Transpilation is made ahead of time:
  - "new languages appeared, wich are transpiled": this transpilation is for
    sure not typically done "JIT" or in real time in the browser/JS engine:
    it is normaly done before hand on the developpers environement, the same
    as traditional compilations.
- More on the examples of languages:
  - CoffeScript: had is glory in the 2010's. Now quite covered by the new JS
    standard versions and when not, by the more popular TypeScript.
  - TypeScript (TS):
    - It is a JS superset (untouched JS code is a valid TS code).
    - Addresses one of the stronger weakness that makes JS difficult to scale
      for complex applications: makes (optionally) possible the explicit data
      typing.
    - Many FE JS frameworks use it (or allow to use it) and also outside
      of that, it has also become very popular.
  - Flow: much less popular than TS.
  - Dart: by Google. Compilable to JS and to WebAssembly, besides to native.
    Used in Flutter for developing multiplatform mobile apps.
  - Brython: Python is another extremely popular general purpose language
    (among other things, specially fueled since it is probably the most used
    in scientific research and in AI development). It's interesting to know
    that it can be transpiled to JS thus its result being portably
    executable in a JS environment (more ubicuous) instead of needing the
    python environment or compiled to native binaries.
  - Kotlin: compiles to the JVM (JVM), and has been the language of choice
    by Google in 2019 to supersede Java for Android apps development (and
    curiously, not their own Dart). As jsinfo tells us, it can also compile
    to JS instead of to JVM.

## "1.2 Manuals and specifications"

### JS names and versions

- Trademark:
  - JavasScript is a registered trademark by Oracle. For this, many places
    prefer to use its unregistered abreviation JS.
- Standard for the language:
  - JS language follows the standard called formally ECMA-262 or ECMAScript,
    abbreviated ES.
  - It comes with several versions, with many forward incompatibilities,
    although with a strong aim to preserve backwards compatibility.
  - JS engines / browsers implement (or not) particular features, more than
    "complete ES versions", and sometimes even before they arrive
    to the standard.
  - We are ignoring for the moment all this complexity. But it is good to be
    aware that it exists, and we provide here a minimum contextualization
    for when we will see versions mentioned.
- ES versions:
  - v1, v2 y v3: since 1997, one per year.
  - (v4 abandoned)
  - v5: 2009
  - v6, v7, ...: since 2015, one per year.
    - Substract one to the version number and one gets the year under the 2010's.
    - They are also called with the name of the year.
  - Big changes: v5 (2009) and v6 (2015). Since then, progressive changes.
- Versions synonyms:
  - Example:
    - ECMAScript 2015 = ECMAScript 6 = ES2015 = ES6
  - Sometimes you will see in this context JS instead of ES:
    - ES2015 = JavaScript 2015 = JavaScript 6 = JS2015 = JS6
    - Try if possible to avoid using it this way, since it's not strictly
      correct: EcmaScript has formal specification and versions, but
      JavaScript doesn't.
    - When jsinfo talks about "the language" (e.g. for part 1), it is
      refering to "ECMAScript", although it uses the loose term "JavaScript"
      also there.
  - "Modern JS":
    - You will also see ES2015+ or ES6+ or ES Next or JS Next, referring to
      the "rolling version" of ES/JS since the big change of 2015.
    - This can be interpreted currently as refering to "modern JS" (vs
      ES5/ES2009 and below).
    - You will also see ES2016+ or ES7+ for referring to these, but
      excluding the "initial" one (ES6/ES2015).
    - We will see later how it is possible to lightly put all these many
      versions in the same "bag" as if they were a single thing.
- WHATWG specs ("standards") complement ES for the browser environment:
  - As said in the previous chapter, a good amount of what we use in our JS
    code is not defined by the ES standard: e.g. things only available in
    browser and/or in standalone runtime environments.
  - For the things available in the browser, the JS "client-side Web APIs",
    there are also "standards", and modern browsers tend to use them as a
    reference to enhance cross-compatibility. The most importants are are

    [WHATWG specifications](https://spec.whatwg.org/)

  - It is the same group that officially defines currently HTML (aka HTML5).
  - These are "living standards", with no versions (for good and for bad),
    as for HTML. You can find there the specs for DOM manipulation, AJAX
    (fetch and XHR APIs), ...
  - Major modern browser vendors tend to implement these. But, as for
    implementing the HTML/CSS/ES standards, they do not do it not forcedly
    for all or all at the same time.
  - So caniuse.com and MDN Reference compatibility tables are our friends
    here to help to deciding to use something.

- Sobre JS availability en los navegadores
  - JS or not JS (that is the question): razones por las que que alguien
    "no tenga JS" en el navegador no son solo porque su user-agent no lo
    soporte o porque él lo haya querido deshabilitar:

    [Everyone has JS, right? (by Kryogenix)](https://kryogenix.org/code/browser/everyonehasjs.html)

    Es algo antiguo (seguramente 2013), pero muchas cosas siguen muy
    probablemente vigentes.

  - Del mismo autor, damos un paso más para entender visualmente lo
    siguiente esencial:

    [Why availability? (by Kryogenix)](https://kryogenix.org/code/browser/why-availability/)

    Ese 1% que marginas no es siempre el mismo usuario, ... es el 1% de
    visitas (y enseguida se puede volver un montón más de usuarios
    insatisfechos).

  - Por lo general, hay muchas cosas que se pueden hacer en HTML/CSS sin
    requerir JS, y funcionar con un progressive enhancement con JS sobre
    eso.
  - El uso intensivo de JS fue creciendo durante los años 2000. Hubo un
    boom en los años 2010, y que aún sigue, de que todo sea JS en
    cliente. Las aplicaciones web (e incluso páginas que no son
    realmente aplicaciones) se crean de tipo SPA (usando frameworks
    estilo Angular/React/Vue): todo es JS en el cliente (lo que se
    llaman CSR -client side rendering-), que toma el control absoluto y
    conforme entramos en enlaces del sitio no se cargan distintas páginas
    web. Esa filosofía abusada conlleva varios problemas (prestaciones
    -especialmente carga inicial muy lenta-, dificultades de usabilidad,
    accesibilidad, SEO, ...). Hay en parte una tendencia en esta década
    a devolver al menos el renderizado inicial (creación de la página)
    al servidor, con lo que se llama SSR (server side rendering), y sin
    sacrificar las ventajas de usar FE React (u otros FE frameworks
    similares).

## "1.3 Code Editors"

- We cover this subject in our `writing-code-and-documents.md`.

## "1.4 Developer console"

- JS Console != JS code in `<script>` or in `.js` file
  - Warning: the JS console in a browser is an special environment when you
    write code on it. Some code may work on it and not on a script, and
    viceversa. Also some code may work differently in different browser's
    consoles (acording to decisions of each browser vendor). Testing on the
    console is less reliable to draw conclusions than testing on a script...
    but it is very handy.
  - The console is really interpreted, not so JIT compiled globally: it reads
    and executes line by line, unless we press "shift+Enter" instead of
    "Enter". In that case, it takes everything up to the following "Enter" and
    that code is indeed JIT compiled.
- Console interacts with all JS loaded in current page:
  - The console has everything defined so far in the web page (variables,
    functions, objects, ...), not only what we have written on it. We may
    want touse these things and test them for that particular web page, but
    this stuff can be polluting the environment if we want a clean test of
    something unrelated to the web page loaded in the tab.
  - To have a clean fresh state for a Console (not polluted by your
    previous actions and/or a loaded page), you can open it in an empty
    new tab.
- Tips for the console (at least FF):
  - Open/close:
    - ctrl+shift+k: show (FF)
    - ctrl+shift+j: toggle (Chrome)
    - F12: toggle (but the tab that was previously used in the devtools,
      not necessarily the console).
  - Multi-line command:
    - shift+enter
  - Clear screen:
    - clear() or botón trash or ctrl+shift+L
  - Reset:
    - ctrl+R (clears all declarations... if a web page is loaded, it
      also reloads it).
  - "Abort/delete" the current line:
    - No direct shortcut for this (typical ctrl+c used in terminal here
      is for "copy").
    - Workarounds:
      - Delete it:
        - ctrl+a, Del
      - Comment it (for possible later recall):
        - Begin, //, Enter
  - Search history:
    - F9 (F9 to previous, shift+F9 to next, use Enter to execute or
      arrows to edit before executing).
    - History is shared between all windows/tabs.
  - Show non-primitives (obj/arr):
    - console.log(objArr);
    - For adding a text, don't use '+' since it will stringify it:
      - `console.log('objArr: ' + objArr);`
    - Better use multiple arguments:
      - `console.log('objArr: ', objArr);`
    - For adding the object name, we can use this hack (uses unstructured
      assignment + property value shorthand):
      - `console.log({objArr});`
    - For showing obj/arr directly expanded, alternatives:
      - `console.dir(objArr)`: "Unfolds" one level (only in FF).
        - Cannot unfold more. In principle, alt+click on the arrow would
          unfold all childs on Chrome, but does not work in Linux.
        - We can use the horizontal space quite well.
          - `console.dir('Before: ', objArr, 'After: ', objArr2)`:
      - `console.table(ojbArr)`:
        - Display as table (one level only). Some structures work better
          than others.
        - Falls back to normal logging when no table is possible.
      - `JSON.stringify(ojbArr)`
        - All expanded. Ultra compact (one liner, no spaces).
        - Warning: JSON stringification "loses" some info (converts some
          types).
      - `JSON.stringify(ojbArr, null, 2)`
        - Same but indented (all expanded).
    - [More tips for the console](https://bugfender.com/blog/javascript-console-log-for-developers/)
  - Multiline editor:
    - Works more like a code Playground.
    - Toggle this mode:
      - ctrl+B to toggle this mode.
      - Or use button at the right end of the line, then button X to come back.
    - When current line has contents (or multiline contents) it is passed
      between the 2 views.
    - Inside this mode: ctrl+Intro to execute (as in typical Playgrounds).
    - Warning: good for quick tests, but remember to "save" your
      relevant work somewhere, for your future-self.


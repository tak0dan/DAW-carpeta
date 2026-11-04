# jsinfo LANG 6: Advanced working with functions (reading guide)

## "6.1: Recursion and stack"

- Opcional.
- Interesante si no les quedó claro del año pasado.
- Llamarse a sí mismo con condición de parada.
- Estructuras recursivas
  - Ejemplo: nodos anidados de XML o de HTML.
  - Ejemplo: linked list, que acaba apuntando a "null".
  - Ejemplo: array de arrays, objeto de objeto, array/objeto de
    arrays/objetos.
- Las estructuras recursivas se prestan a ser recorridas con
  - Soluciones elegantes e ineficientes frente a solución ,
    tradicional (que siempre se puede hacer). Pero mientras no se
    demuestre lo contrario prima claridad vs.
    eficiencia.

## "6.2: Rest parameter and spread syntax"

- Verlo.
- Notación "...". Es ES moderno.
- Misma pinta, pero son **DOS** cosas distintas: si se usa en
  **definición** de función o no (en **llamada** a función, en
  declaración de arr/obj, en expresión en general).
- Rest param: funciones de nº arbitrario de parámetros, con
  alguno si quieres fijo.
- Spread: expandir arrays (u objetos) como si escribiéramos sus
  miembros.

## "6.3: Variable scope, closure"

- Opcional.
- Scope:
  - Lo hemos abordado mucho: función, loops/ifs, llaves en
    general definen scope.
  - Local vs exterior (y en el caso más alejado: global).
  - Scope afecta a definición de: let/const y funcs
    (definición con "var" funciona distinto).
- Closure:
  - Ver el ejemplo minimalista:

    ```js
    function makeCounter() {
      let count = 0;
      return function() {
        return count++;
      };
    }
    let counter = makeCounter();
    alert(counter()); // 0
    alert(counter()); // 1
    alert(counter()); // 2
    ```

  - Una función creada dentro de cierto scope y "sacada"
    fuera (un enganche a ella), mantiene su scope y
    valores/memoria de él. En otros lenguajes esto no se puede
    hacer: en ellos cuando función acaba, todo su interior
    desaparece.
  - En el ejemplo, tenemos algo que actúa como una variable
    con memoria global ("count"), pero que no está accesible
    globalmente (está protegida).
  - Un ejemplo de uso: parametrizar comportamiento de un callback
    (del que tenemos interfaz forzado) para evitar tener que usar
    en él variable global y/o llamada explícita con parámetros.

    ```js
    const arr = [ 2, -3, 8, 10, 0, 1 ];

    const compNormInc(a, b) = (a, b) => a === b ? 0 a > b ? 1 : -1;
    const compNormDec(a, b) = (a, b) => a === b ? 0 a > b ? -1 : 1;
    arr.slice().sort(compNormInc);
    arr.slice().sort(compNormDec);

    // Make it parametrizable:
    function compNorm(a, b, incr=true) {
      return a === b ? 0
        : a > b ? (incr ? 1 : -1)
        : (incr ? -1 : 1);
    }
    // Default, increasing can in this case be used directly
    // (thanks to default parameters):
    arr.slice().sort(compNorm);
    // For decreasing?
    arr.slice().sort((a, b) => compNorm(a, b, false));
    // For increasing/decreasing depending of something
    // given by an external logic?
    let incr = true;
    arr.slice().sort((a, b) => compNorm(a, b, incr));
    let incr = false;
    arr.slice().sort((a, b) => compNorm(a, b, incr));
    // "incr" is a global variable in the callback body.

    // Avoid the global variable and still make it parametrizable?
    // We can build a function with a closure for this:
    function makeCompareNorm(incr=true) {
      // We return a function that directly honors the
      // expected callback interface, but that is configured
      // as we need:
      return function(a, b) {
        return compNorm(a, b, incr);
      };
    }
    let compNormIncrDecr = makeCompareNorm();
    arr.slice().sort(compNormIncrDecr);
    incr = false;
    compNormIncrDecr = makeCompareNorm(incr);
    arr.slice().sort(compNormIncrDecr);

    // Having some sort of memory but without using global variable?
    // Also we can build a function with a closure for this:
    function makeCompareNormToggle() {
      let incr = false;
      return function(a, b) {
        incr  = !incr;
        return compNorm(a, b, incr);
      };
    }
    compNormToggle = makeCompareNormToggle();
    // Incresasing:
    arr.slice().sort(compNormToggle);
    // Decresasing:
    arr.slice().sort(compNormToggle);
    // Incresasing:
    arr.slice().sort(compNormToggle);
    // ...
    ```

## "6.4: The 'old' var"

- Opcional.
- Better stick to let/const. But you may encounter it on alien code.
- Differences with let/const:
  - "var" has no block scope (only function scope).
  - "var" permits redeclaring in the same scope, and hoisting (use
    before declaring).
- IIFE (immediately-invoqued func expression):
  - One of the several ways of doing an IIFE:

    ```sh
    (function() { var a; /*...*/ })();
    ```

  - It creates a scope (being a function) then inmediately
    invoques/executes it unconditionnaly. Variable declaration is
    trapped inside.
  - It is a workaround to create scopes for "var" (control its
    visibility): it was used for doing "modules" (indepedent name spaces
    not interfiering, only declaring outside what has to be seen
    externally).

## "6.5 Global object"

- See it.
- `globalThis` (recently standardarized). Traditional:
  - `window` in browser.
  - `global` in node.js.
- Contains global function declarations (not function expressions) and
  "var" declarations (or direct use without declaration in non-strict
  mode), and available APIs of the environment. Global "let/const" are
  not there.
- Can be ommited:
  - `alert('Hi!');` is the same than `window.alert('Hi!);` and the same
    (in recent enough browsers) thaan `globalThis.alert('Hi!');`.
  - But better be explicit when using it (if declaring or using something
    global).
  - But avoid global variables when possible (code reuse and complexity
    scale prefers encapsulation).
- Used for polifills:

  `if (!window.Promise) { window.Promise = /*...*/ }`

## "6.6 Function object, NFE"

- See it.
- Functions are also objects once declared.
- Native properties:
  - "name"
  - "length" (number of non-rest parameters in its declaration).
- One can add custom (properties/methods).
  - jQuery, lodash, underscore provide a function object with lots of
    custom properties/methods, and a sort hame (`$`, `_`), that can be
    used/called in many different ways.
- NFE: named function expresssion.
  - When having an anonymous function expression:

    `let blah = function() { };`

    one can add a name:

    `let blah = function funcName() { };`

  - This permits calling itself inside its body, in a robust way (robust
    against later reassign: `blah = null;`). But it cannot be used outside
    its body.
  - Note: if used the NFE, the `.name` gets that name. If not, the `.name`
    gets the name of the first variable it has been assigned (and mantains it
    even if assigned elsewhere).

## "6.7 New Function"

- Opcional.
- One can create a function with "new", and the "Function()"
  constructor.
- One provides to the constructor:
  - At last, the function body code as a string of code.
  - At the begining, in different possible ways, the argument names
    (independent strings, string of comma separated, or an array of
    strings).
- Permits to "build" the function code.
- Declared this way, it does not have closure/outer scope (refers to the
  global environment directly). But not a bad thing to not using "outer
  scope" and only use local variables and parameters, for encapsulation.

## "6.8 Scheduling: setTimeout and setInterval"

- See it.
- Set and optionally cancel timeout and interval.
- Avoid specifying the callback code as a string: use a callback function.
- The extra arguments allow to parametrize the behaviour of the
  callback: we specify "now" things that will be passed to our callback
  "later" (when it is called). Cannot be done differently (we specify
  the function name as callback, cannot specify parameters at that
  place).
- Nested setTimeout: schedule starts when the nested setTimeout is
  exectued. In setInterval, it is when the callback starts.
  - In any case, **not guaranteed** since we are not in a RTOS
    (real-time OS): read times hera as "not before than, but who knows
    when".
- Zero delay makes sometimes sense: it's an async call (occurs after
  every sync code is done).
- Avoid programming unneeded timers: more timers with less action is worst than
  fewer with more complex actions: performance of the engine decreases with
  increasing number of events to be taken care of.

## 6.9, 6.10 and 6.11

- Skip for now: quite advanced.
- Just remember these two headlines:
  - "this" of a function can be flexibly assigned/forced when needed
    (this "bind").
  - Arrow functions don't have own "this", they take the one of their
    scope.
    - This has uses.
    - Untill you don't understand all this well, don't use "this" inside
      an arrow function and be careful to not rush conclusions when
      someone else uses "this" inside an arrow function.

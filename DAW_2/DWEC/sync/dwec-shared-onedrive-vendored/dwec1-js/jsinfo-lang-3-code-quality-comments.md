# jsinfo LANG 3: Code Quality (comments)

En jsinfo, justo después de dar los fundamentos más básicos de
JavaScript (LANG2), y antes de avanzar nada más, nos dan este tema LANG3
sobre calidad del código. Me quito el sombrero. Muchos
libros/profesores/etc "sacrifican" esto, o lo dejan para el final,
cuando ya es demasiado tarde. Es algo a incorporar **desde el
principio**, no un parche que se pueda aplicar luego.

Hago aquí una pequeña guía de lectura.

## "3.1 Debugging in the browser"

Lo abordamos por otro lado nosotros un poco por encima con un ejemplo en
una práctica, pero está aquí bien completada una guía básica del uso del
"devtools" para debugear. Está para Chrome, pero Firefox es bastante
equivalente.

Este artículo es un tutorial: sugiero fuertemente abrir como dice en
"example page" en Chrome, y también en Firefox, e intentar ver lo que
van diciendo en ambos.

No voy a preguntar "directamente" sobre debugear en mis exámenes o
prácticas, pero indirectamente lo necesitarás cuando tengas cualquier
problema. Puedes malvivir sin saber debuggear (más bien "fatalvivir"),
pero todo lo que aprendas de esto, tiempo que ahorrarás en desarrollo
y eficacia eficiencia.

## "3.2 Coding Style"

Léelo.

En mis exámenes/prácticas os pido lo siguiente:

- Ceñirse a 80 columnas.
- Indentación 2 espacios.
- Consistencia en el estilo en tu propio código. O, si se está
  modificando código preexistente, consistencia con el estilo de lo que
  se toca.

La mejor manera de seguir sin errores una guía de estilo es con un
linter (te pone inmediatamente en rojo/amarillo lo que no esté bien
según la "guía de estilo" elegida), pero:

- Si te lo hace el linter, camufla totalmente que no sepas hacerlo tú
  para nada.
- Tradicionalmente en VScode no era trivial lo que hay detrás de poner
  un linter para JS (requiere instalar Node, y dentro cierto paquete).

En algún momento lo haremos (cuando veamos node, como uno de sus
primeros ejemplos), pero en el examen no tendréis en principio eso:
mejor por ahora acostumbraros a fijaros en esto "a mano".

En proyectos reales, es imprescindible ponerse el linter en cada
proyecto distinto según el estilo potencialmente distinto que pueda
tener cada proyecto al que contribuyamos.

Haré una sugerencia de qué estilo (y linter) usar en vuestro código
cuando no haya otros condicionantes (y no será "el que te apetezca").

## "3.3 Comments"

Léelo.

Estoy muy de acuerdo con esta sección respecto al "ideal" para un
programador Senior. Pero mientras seas Junior (y no digamos en clase),
veo muy razonable que añadas comentarios de más que que te quedes corto.

No dudes en poner comentarios de tipo "la intención" de cierto código
cuando pueda no estar muy clara o evidente para "tu nivel de
conocimiento". La intención del código no es reproducir con palabras lo
que está haciendo ("Con un bucle recorremos blah blah"), sino
globalmente para qué es cierto bloque de código o cierta expresión
compleja. Por supuesto, usa lo que puedas el "functions as comments"
(eligiendo buenos nombres para esas funciones y en general para las
variables), pero hay veces que no te dará margen a hacerlo todo "tan
bien", y puede convenir algún comentario preventivo.

## "3.4 Ninja code"

Léelo. Deliciosa sabiduría condensada (y super ácida-sarcástica:
recuerda que piden en cada caso en el fondo hacer lo contrario de lo que
dice).

Disclaimer: yo haré en clase a menudo **algunos** de los pecados que
denuncia ahí. Por ejemplo:

- Reusar variables para distintas cosas en demos rápidas en consola o
  ejemplos rápidos.
- Variables/funciones de una letra o super abreviadas: porque son de
  usar y tirar para prueba rápida y explicar rápidamente algo. No son
  para código que vaya a perdurar. También matizo que hay abreviaturas
  muy expandidas y que las veo razonables de usar en código real.
- Usar malos nombres no semánticos tipo "num", etc. También porque sean
  ejemplos de código genéricos, mini demos, etc. O porque sean para
  algún ejercicio donde realmente no hay mucha más semántica. Si te
  piden una función que devuelva la suma de dos números, es razonable
  que los argumentos sean "num1" y "num2". Pero si piden una función que
  con altura y peso de una persona te diga el índice de masa corporal,
  los parámetros no debieran llamarse "num1" y "num2" sino "altura" y
  "peso". Y diría que si el contexto no lo deja super claro y/o no se
  usan unidades del sistema internacional (medidas en metros, peso en
  kilogramos), puede ser incluso razonable explicitar la unidad en el
  nombre.  P.ej.  "alturaCm" y "pesoKg". La clave es intentar ser lo más
  semántico que te permita la situación.
- Cojo-expresiones y código en un solo statement: aquí lo hago para forzaros a
  entenderlas en este aprendizaje y comprobar si, con dedicación, sois
  capaces de seguir ese código. Porque otros escribirán (y mucho) así en
  la vida real y tengo que entrenaros un poco a ello y comprobar vuestra
  capacidad lectora. Y, especialmente en programación moderna en
  frameworks, es una costumbre muy expandida hacer cosas así.

## "3.5 Automated testing with Mocha"

Lee solo los dos primeros puntos (hasta "BDD" incluido).

Para el resto, yo he preferido que veamos el asunto de los Unit Tests
automatizados hechos "a mano por nosotros". Aquí hablan de Mocha, uno de
los "test frameworks" populares en mundo JS, pero para mí es más
difícil, menos "desnudo" y menos reutilizable enfocarlo así. Usaréis
test frameworks para estas cosas (tal vez Mocha, pero posiblemente otro
por estar en otro entorno). Conmigo lo vemos minimalista en su esencia:
¿sabes hacer un if y sabes llamar a una función en un lenguage? Pues con
solo eso, ya sabes hacer tests unitaros automáticos: Unit Test it, no
excuses!

## "3.6 Polyfills and transpilers"

Léelo.

Super bien de nuevo por parte de jsinfo de lo antes posible responder a
la pregunta muy razonable: ¿porqué vamos a aprender a codificar con
código moderno sin miedo y no por ello estamos dejando atrás a
navegadores antiguos? Nos da la esencia de cómo eso es algo que se puede
"resolver" aparte, en paso posterior antes de poner en producción, y de
las dos grandes maneras de abordarlo: transcompilación y de polyfills.

Por cierto, algo muy parecido ocurre a la hora de poner no solo JS sino
CSS en producción (también ahí hay transcompilación cuando se puede, en
ese caso de CSS moderno a CSS antiguo, y polyfills hechos en JS cuando
no se puede).

No lo vamos a ver ahora en la práctica más que lo poco que explica aquí
(tal vez más adelante en el curso). Lo que os queda ahora es que esto es
una parte importante del dearrollo real: un paso anterior a la hora de
poner código en producción de verdad. Comento también ya que la mayoría
de los frameworks front-end se encargan de esto por nosotros (para bien
-olvidarnos- y para mal -pérdida de control, entendimiento, decisiones
y estar más desvalidos cuando las cosas no son como debieran-).


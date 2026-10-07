# javascript.info aka jsinfo

## jsinfo, nuestro "libro de texto"

- El sitio Web

  [javascript.info](https://javascript.info)

  ("The Modern JavaScript Tutorial")

  será nuestro "libro de texto de referencia" sobre JS (JavaScript).
- Le llamaremos también **jsinfo**, por brevedad.
- Inglés vs español:
  - La versión original está en inglés.
  - Tiene una versión en español (con pinta de ser traducida por
    humanos):

    [es.javascript.info](https://es.javascript.info)

  - Las traducción siempre pueden estar más desactualizada, cometer
    errores, pasarse de celo en traducir términos técnicos (hay que
    conocer como poco como se dicen en inglés las cosas), ...
  - En clase, para maximizar comprensión, miraré a menudo la española.
  - Pero hay que tener siempre presente la versión inglesa, que es la
    "canónica".
  - Hay botón para cambiar el idioma, y pero también se puede (¿debe?)
    poner "lado a lado" las dos versiones.
- (Suficientemente) buenas prácticas:
  - jsinfo da unas buenas prácticas e indicaciones para usar JS moderno
    (de entre las muchísimas maneras de usarlo y de abusarlo). Yo las
    completaré. Pero hay que recordar que todo esto (jsinfo y lo que
    completo) no es más que una (bastante buena) versión simplificada de
    la realidad, por razones pedagógicas.
  - Si quieres aprender de verdad JS, y no una versión simplificada,
    **cuando acabes este curso** y tengas más soltura, está el excelente
    libro online gratuito "You Don't Know JavaScript" (YDKJS).
    - En 2020 empezó una segunda edición, YDKJSY (JDKJS Yet), que nunca
      ha acabado. Pero [está disponibles en GitHub](https://github.com/getify/You-Dont-Know-JS),
      que sería lo que yo leería (los primeros sublibros/capítulos
      están, y es suficiente para empezar).

## estructura y denominaciones (naming) en jsinfo

- Tiene tres partes
  - LANG: The JS language (Part 1)
    - Cubre los aspectos más clave del lenguage JS en sí (el estándar
      ECMAScript), no vinculados a la ejecución en un navegador.
  - BROW: Browser: Documents, Events, Interfaces (Part 2)
    - Cubre las APIs clave disponibles en en entorno de ejecución de un
      navegador (estandarizadas por W3C, no por ECMAScript).
  - ADD: Additional articles (Part 3)
    - Cubre aspectos adicionales de las dos temáticas anteriores.
  - Son parte 1, 2 y 3, pero no uso esos números para referirme a ellas,
    sino las abreviaturas LANG, BROW, ADD.
- Cada parte tiene distintos "capítulos". Los capítulos se numeran
  independendientemente para cada parte for each part: 1, 2, 3, 4, ...
  se usan dentro de cada parte. P.ej.:
  - 2. JS fundamentals (dentro de la Part 1: The JS language)
  - 2. Introduction to events (dentro de la Part 2: Browser: etc)
  - 2. Binary data, files (dentro de la Part 3: Additional articles)
- Cada capítulo tiene distintos artículos (cada artículo es una
  página/documento Web HTML). P.ej.:
  - 2.4 Variables (dentro del capítulo 2. de Part 1 LANG).
  - 2.4 Browser default actions (dentro del capítulo 2. de Part 2 BROW).
  - 2.4 File and FileReader (dentro del capítulo 2. de Part 3 ADD)
- Así que nos intentaremos referir a ellos así: LANG2 (capítulo 2 en la
  parte LANG, que es la parte 1, pero no pongo el número de parte por no
  meter más números), BROW2.4 (artículo 4 en el capítulo 2 en parte
  BROW), ...
  - Si ves p.ej. "2." or "2.4" "solos": pregúntate, si no queda claro
    por contexto, a qué parte de jsinfo se refieren (si LANG, BROW, o
    ADD).
- Nota: jsinfo ni intenta cubrir otras temáticas más allá del
  "vanilla JS" estandarizado. Usaremos otros materiales de referencia
  para esas temáticas:
  - "Tooling": node/npm, Rollup/Vite, ...
  - 3rd party libraries and frameworks: jQuery, React, ...

## navegación en jsinfo

- Index:
  - El índice entero está en la página de inicio del sitio Web, dando
    acceso directo a cualquiera de los capítulos, o a cualquiera de los
    artículos de cada capítulo: índice "plano".
  - Aparte, en todas las páginas, hay un botón "Tutorial Map" para
    mostrar el índice. Pero:
    - Si el ancho del navegador no es suficiente, el botón se va al
      final del artículo.
    - Ese botón no funciona en la versión offline que os pasaré de
      jsonfo.
- Dentro de una página/artículo particular:
  - Navegación "intra-artícule":
    - En la columna de la izquierda (solo si hay ancho suficiente).
    - Muestra enlaces a las secciones de la página/artículo (sus cabeceras),
      y resalta en la que estamos posicionados.
    - El hamburger button conmuta su visibilidad.
  - Navegación "página a página":
    - Usa los botones "`>`" y "`<`".
    - Atajos de teclado: `ctrl+dcha` y `ctrl+izqda`.

## Mis ficheros `jsinfo-*-comments.md`

- En esos ficheros, añado comenarios a los distintos capítulos de
  jsinfo.
- Por lo general, un fichero `jsinfo-*-comments.md` cubre un capítulo de
  una de las partes.
  - P.ej. `jsinfo-lang-1-intro-comments.md` es para el capítulo "LANG 1"
    (primera parte LANG, su primer capítulo).
- El h1 de mi fichero refleja el nombre del capítulo:
  - P.ej. `"LANG 1: Intro (comments)"`
- Cada h2 cubre una página/artículo de ese capítulo.
  - P.ej. `"1.4 Developer console"`
- Una cabecera o texto entrecomillado o citado típicamente se referirá a
  literalmente ese texto (título de artículo/de sección/texto de
  párrafo) en jsinfo, para ayudaros a saber en qué contexto menciono
  algo.
- En estos ficheros de comentarios, puede que matice, añada o incluso
  contradiga lo que dice jsinfo. Por supuesto, lo que diga yo es lo que
  va a misa.


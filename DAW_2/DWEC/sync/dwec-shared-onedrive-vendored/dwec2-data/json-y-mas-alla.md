# JSON y más allá (formatos de serialización y de configuración)

## JSON

### ¿Qué es JSON?

- JSON es un estándar de facto para representar información (datos) en
  un formato basado en texto. Es una alternativa más reciente (y menos
  verbosa y enrevesada) frente a por ejemplo XML: le ha sustituido en
  algunos de sus usos.
- La pinta que tiene es muy parecida a la notación literal de
  objetos de JavaScript, que permite definir estructuras de datos
  arbitrariamente anidadas

- Estos serían uno ejemplo de un par de variables definidas en JS con la
  notación literal para declarar objetos:

  ```js
  # P.ej. un objeto con varias propiedades de valores primitivos y no
  # primitivos:
  const obj1 = {
    blah: "hey you",
    bleh: [
      7,
      "bye",
      // Aquí podría haber elementos de array no primitivos
    ],
    blih: {
      bloh: false,
      // Aquí podría haber propiedades con valor vez no primitivo
    },
    bluh: 3,
  };

  // Y esta otra declaración sería menos legible, pero equivalente,
  // porque en JS los espacios y retornos son opcionales (salvo los que
  // estén dentro de strings literales, obviamente):
  const obj2 = {blah:"hey you",bleh:[7,"bye",],blih:{bloh:false,},bluh:3,};
  // Es importante recurdar que aunque no se suela poner comillas en los
  // nombres de propiedades, la notación literal lo permite, y la
  // anterior declaración sería equivalente a:
  //   const obj2 = {"blah":"hey you","bleh":[7,"bye",],"blih":{"bloh":false,},"bluh":3,};
  // o con comillas simples:
  //   const obj2 = {'blah':'hey you','bleh':[7,'bye',],'blih':{'bloh':false,},'bluh':3,};
  ```

- Un equivalente en JSON que transporta/almacena exactamente la misma
  información anterior, sería este texto:

  ```txt
  {
    "blah": "hey you",
    "bleh": [
      7,
      "bye"
    ],
    "blih": {
      "bloh": false,
    },
    "bluh": 3
  }
  ```

- O bien, este otro texto (ya que en JSON también se pueden quitar
  espacios y retornos), que se suele llamar minificado:

  ```txt
  {"blah":"hey you","bleh":[7,"bye"],"blih":{"bloh":false,},"bluh":3}
  ```

- Como vemos, se parece mucho a un texto que en código JS
  permite definir un objeto con esa información... De hecho, está
  diseñado para que si se copia y pega ese texto JSON en una declaración
  de variable de JS (sin ponerle comillas), sea una declaración válida.
  El primer matiz es que JSON no es menos "libre": solo usa comillas
  dobles para strings, y también obliga a usarlas alrededor de los
  nombres de propiedades.
- La clave de la diferencia es que el código JS para ser interpretado
  como JS es algo que está obligado a estar dentro en un fichero fuente
  de JS o en un elemento `<script>` de HTML, y sin embargo **algo en
  JSON está pensado para poderse meter en cualquier lugar donde se pueda
  guardar texto**.
- Un lugar (de entre muchísimos posibles) donde se puede meter texto es
  en un string dentro de JS. El JSON anterior, en JavaScript se podría
  asignar a una variable tipo string de esta manera, usando una notación
  literal para declarar strings (que lo rodea de comillas):

  ```js
  // Uso backticks `` para que me permita retornos de línea:
  let jsonString1 = `{
    "blah": "hey you",
    "bleh": [
      7,
      "bye"
    ],
    "blih": {
      "bloh": false,
    },
    "bluh": 3
  }`;

  // O la otra variante minificada (aquí puedo usar comillas simples ''):
  const jsonString2=
    '{"blah":"hey you","bleh":[7,"bye"],"blih":{"bloh":false,},"bluh":3}';

  // La declaración de este jsonString2 se parece mucho al obj1 de arriba:
  //   const obj2 =
  //     {blah:"hey you",bleh:[7,"bye",],blih:{bloh:false,},bluh:3,};
  // Pero la diferencia clave es que en aquel obj2 las
  // **llaves de fuera** del todo **NO** estaban rodeadas de comillas y
  // por tanto se definía un objeto JS: se puede en código luego aceder
  // p.ej. a obj2.bleh[0] (será 7) o a obj2.blih.bloh (será false).
  // Y, sin embargo, en este jsonString2 **sí** que hay comillas
  // alrededor, y por tanto para JS esto no ha definido un objeto, sino
  // que un triste e inerte string: con este **NO** se puede hacer
  // p.ej. jsonString2.bleh[0] o jsonString2.blih.bloh (daría en
  // ambos caso error).

  // Del mismo modo, el jsonString1 de aquí:
  // string:
  //   const jsonString1 = `{
  //     ...
  //   }`;
  // se parece mucho al obj1 de arriba:
  //   const obj1 = {
  //     // ...
  //   };
  // Incluso puede ser exactamente igual si en aquel se usaban " "
  // alrededor de los nombres de propiedades...
  // Pero aquél no tenía comillas alrededor de las llaves, y por tanto y
  // definía un objeto, y este jsonString1 las tiene, y por tanto define
  // un triste string.
  ```

- Obviamente, visto así tiene poca gracia definir cosas como
  jsonString1 o jsonString2, strings inertes, frente a definir
  obj1 u obj2, objetos fácilmente manipulables por el lenguaje. Veremos
  en breve la utilidad de JSON, pero lo más importante a tener en cuenta
  es que, precisamente, JSON son strings inertes.
- Aquí de hecho, como estábamos en JS, teníamos la ventaja de poder
  declarar objetos al vuelo con la notación literal. Pero en otros
  lenguajes, por ejemplo Java, no se puede. Sin embargo en cualquier
  lenguaje puedo declarar un string. Para declarar por ejemplo en Java
  una variable string con el mismo contenido que tiene jsonString2 del
  código anterior lo haría así:

  ```java
  // Más dolor porque Java no permite ' ', luego tengo que escaparlas,
  // pero bueno:
  String jsonString2=
    "{\"blah\":\"hey you\",\"bleh\":[7,\"bye\"],\"blih\":{\"bloh\":false,},\"bluh\":3}\";
  ```

- O en Java puedo conseguir esa string del contenido de un fichero, o
  de cualquier lado de donde Java sea capaz de sacar o meter texto.

### ¿Dónde y para qué se usa JSON?

- Hemos visto la diferencia más importante entre notación literal de JS
  y JSON: JSON es símplemente **una string de texto** con cierta
  estructura y que puede encontrarse en cualquier lugar, y la notación
  literal de JS es la que se encuentra exclusivamente en código JS no
  como contenido de string.
- Donde puedas "meter un string de texto", puedes meter un JSON. Lo
  acabamos de ver metido en una variable de tipo string (en JS o en
  Java), pero ese JSON puede ser el contenido íntegro de un fichero.
- P.ej. un fichero con exactamente este contenido:

  `{"blah":"hey you","bleh":[7,"bye"],"blih":{"bloh":false,},"bluh":3}`

  sería un fichero con contenido JSON (o también la variante no
  minificada lo sería). Suele tener extensión `.json` y se usa para él
  el MIME Type `application/json`.
- Pero puede ser cualquier otro lado que sea capaz de
  almacenar/transportar un string.
- Se usa muchísimo para comunicar información a través de la red entre
  entidades separadas, muy a menudo usando para transportar el protocolo
  "HTTP(S)", pero en vez de transportando ficheros `.html`, o `.css`, o
  `.js`, o imágenes, etc, se transportan ficheros `.json` como el que
  acabo de decir.
- La anterior estrategia se usa actualmente mucho en desarrollo Web para
  intercambiar información entre el cliente web (navegador) y el
  servidor Web de manera asíncrona (una vez la página HTML inicial ya se
  ha descargado, sin necesidad de recargarse). Pero a menudo el cliente
  de esa comunicación no es un navegador (no es el JS que se ejecuta en
  un navegador). Por ejemplo es una App instalada en un móvil, o una
  aplicación instalada de escritorio... Y el servidor "Web" que responde
  mandando JSONes por HTTP(S), en el fondo es servidor para todo ese
  tipo de clientes, no limitado a clientes "navegadores". Este concepto
  es lo que se denomina en general "RESTful API" o "HTTP API", que por
  lo general intercambia información con este formato de datos. Los dos
  extremos de esa comunicación a través de ficheros JSON no tienen
  porqué estar implementados en JS. El lado servidor, será con un
  lenguaje de servidor (y JS ahí no es más que uno de tantos: Java,
  Python, PHP, ...), y el lado cliente, si no es dentro de navegador,
  será a menudo otro lenguaje que no es JS (Java, Python, Kotlin, Swift,
  C/C++/C#, ...).
- Aparte de que un uso muy habitual de JSON es el que acabo de decir de
  **comunicar por red** información estructurada (por ejemplo sobre
  HTTP, o podría ser sobre cualquier protocolo que transporte texto),
  también JSON tiene un caso de uso perfectamente válido para
  **almacenar** información estructurada, para luego recuperarla:
  - Se puede usar para guardar en sistema de ficheros local bajo forma
    de fichero `.json`. Podrán hacerlo a aplicaciones instaladas que
    tengan acceso directo al sistema de ficheros (una aplicación en el
    navegador no lo tiene). Por ejemplo muchos programas usan JSON como
    formato para guardar información de su configuración, o pueden
    usarlo para guardar en local información se usuario de la
    aplicación. Guardar información estructurada en fichero `.json` (o
    en cualquier otro formato, como `.csv`, `.sqlite`, ...), no tiene
    problema, cuando solo un proceso consume/modifica ese fichero.
  - Para el caso de aplicación Web en navegador lado front end (que no
    tiene acceso directo al sistema de ficheros), se puede usar JSON
    para guardar información en lado cliente usando alguna de las APIs
    del navegador que permiten guardar texto en local. Por ejemplo el
    API LocalStorage permite guardar parejas nombre/valor, ambas tipo
    string sencillo. En el valor de uno de esos nombre/valor, metes como
    valor un texto JSON en vez de un string normal plano. Es un paso más
    allá a meter ahí por ejemplo valores separados por coma (CSV) para
    guardar una serie de cosas en un solo lugar. Con JSON, metes
    cualquier estructura de datos arbitrariamente anidada, en un único
    string.
  - Del mismo modo, en lado servidor, si quieres podrías meter en un
    campo de BBDD SQL de tipo texto (p.ej. VARCHAR) un churro
    estructurado y codificado en JSON, para consumo posterior de la
    aplicación.
  - De hecho, también en lado servidor, algunos tipos populares base de
    datos "no-SQL", como por ejemplo MongoDB, usan JSON directamente
    como el propio formato en el que se almacena internamente toda la
    información de la base de datos.
- Nota: JSON es un formato de texto. Tal y como pasa con XML u otros, si
  quieres meter (transportar) dentro de alguno de los campos internos de
  un JSON algo que sea binario, debieras que hacerlo con una
  codificación de binario a texto. P.ej. acordando que está en hexadecimal:

  `{"nombre":"Juan","dosBytesBinarios":"f3a8"}`

  o bien usando codificaciones más eficientes que poner en hexadecimal
  (Base64 y la Quoted Printable).

### Serialize/unserialize: transformar hacia/desde JSON

- Hemos visto que aunque JSON está inspirado en la object literal
  notation de JS y que nosotros abordamos aquí su manipulación/uso desde
  precisamente JS, es un lenguaje de "comunicación" independiente del
  lenguaje de programación con el que se manipule.
- Los lenguajes de programación tienen, o nativamente o con librerías
  añadidas, la capacidad de generar cómodamente un string JSON desde una
  sus estructuras de datos propia de ese otro lenguaje de programación.
- Y lo contrario: partiendo de un string JSON, obtener una estructura
  propia de ese otro lenguaje de programación.
- Y los dos extremos que se comunican, no tienen porqué estar en el
  mismo lenguaje de programación, y precisamente utilizan JSON como
  lingua franca para comunicarse entre ellos datos estructurados: uno
  codifica a JSON, y otro descodifica desde JSON, y viceversa.
- En nuestro caso, vamos a ver la manera de hacer esas transformaciones
  desde JS.
- Para poder "objetizar" un string que esté en formato JSON, en JS se
  tiene nativamente el `JSON.parse()`:

  ```js
  let personJson = '{ "name": "John", "age": 28 }';
  let person = JSON.parse(personJson);
  console.log(person.name); // Muestra "John"
  ```

- Obviamente, hacerlo así como en este ejemplo, no tiene mucho sentido: para
  eso habríamos directamente declarado "person" con notación literal
  (el mismo contenido de ese string, pero sin las comillas que lo hacen
  string, posiblemente también sin comillas alrededor de los nombres de
  las propiedades).
- Pero la gracia es que ese "personJson" no se suele poner como "string
  literal" como hemos hecho, sino que se saca de otro lado (es el
  contenido de un fichero de texto entero, o es una string guardada en algún
  lado que estamos recuperando). Y antes de poder "manipularlo" cómodamente,
  tenemos que convertirlo de JSON a objeto nativo. Y en caso de quererlo
  enviar o guardar, lo convertimos de objeto nativo a JSON con la función
  inversa que es `JSON.stringify()`.
- De hecho un ejemplo minimalista más realista sería algo como sigue.
- Yo estoy feliz con mi lenguage y sus objetos nativos (en este caso resulta
  ser anecdóticamente el lenguaje JS).
- Tengo un objeto en mi lenguaje con cierta info, p.ej. que he sacado de una
  BBDD o que me ha dado el usuario con un formulario o a base de pedirle
  cosas con `prompt()`, o lo que sea.

  ```js
  // Tengo un objeto nativo en mi lenguaje:
  let person = { name: 'John', age: 28 };
  // O podría haber sido:
  //   let person = {};
  //   person.name = prompt('Name? ');
  //   person.age = prompt('Age? ');
  // O usando "new" para usar un constructor de una clase.
  // O lo que sea.

  // Puedo hacer cosas con él.
  console.log(person.name); // Muestra: "John"
  person.age += 1; // Ahora tiene 29 años.

  // Y ahora quiero "guardarlo" o "comunicarlo", usando cualquier lugar que
  // soporte un string.
  // Para ello, lo convierto de objeto a JSON:
  personJson = JSON.stringify(person);
  // Ahora es un string con la info guardada según cierto convenio estándar:
  console.log(personJson); // Muestra: '{"name":"John","age":29}'
  // Y p.ej. lo guardo en el localStorage como valor para la clave
  // que voy a llamar "myStringJson":
  localStorage.setItem("myStringJson", personJson);
  ```

- En otro lugar (en otro código, puede ser que cuando se ha cerrado esa
  ventana ya y se reabre dos días después que tenga otra zona del código
  para recuperar la info, o puede ser código de otra ventana que quiere usar
  esa info), se puede recuperar esa info almacenada:

  ```js
  // Recupero la string de donde esté. En nuestro ejemplo, es un lugar
  // sencillo de usar, el localStorage. Recupero el valor de la clave
  // "myStringJson":
  let personJson = localStorage.getItem("myStringJson");
  // Aún no es directamente "usable":
  console.log(personJson); // Muestra un string: '{"name":"John","age":29}'
  // Para hacer cosas con él, no tengo más que convertirlo en objeto:
  let person = JSON.parse(personJson);
  // Ya puedo hacer hacer cosas con él.
  console.log(person.name); // Muestra: "John"
  person.age += 1; // Ahora tiene 30 años.
  ```

- La clave es que hemos usado JS en nuestros ejemplos para el "emisor" y el
  "receptor" del JSON, pero cualquiera de los dos (o ambos) podría ser un
  programa en otro lenguaje de programación. Símplemente necesita una
  librería que le permita transformar desde y hacia JSON.
- Nota: hemos usado en este ejemplo el localStorage API porque en lado
  cliente es una manera fácil de almacenar información. Si estamos en lado
  servidor y usamos ahí "node.js" que tiene acceso al sistema de
  ficheros: puede leer y escribir directamente y tranquilamente ficheros
  en formato `.json`.
- **Serialize/unserialize**
  - Al concepto de "convertir a JSON" (lo que hace en JS
    `JSON.stringify()`) se le llama más generalmente **serializar**
    (**_serialize_**), que es un pseudo-sinónimo de codificar: convertir a
    algo apto para la comunicación externa.
  - Al concepto de "convertir desde JSON" (lo que hace en JS
    `JSON.parse()`) se le llama más generalmente **deserializar**
    (**_unserialize_**), que es un pseudo-sinónimo de decodificar:
    convertir desde algo apto para la comunicación externa.
- **Bracket notation asegurada, dot notation más legible**
  - Cuando se parsea un JSON generado ajenamente, para las propiedades
    de objetos "extraídos" podemos **a veces usar dot notation** como en
    los ejemplos que hemos visto.
  - La clave es tener claro que la "dot notation" tiene limitaciones:
    - No permite espacios en el nombre de la propiedad.
    - Ni guiones.
    - Ni que empiece por número.
  - Pero hay que tener claro que en JSON el "objeto serializado" te
    puede venir de fuera, perfectamente podría tener campos que tengan
    esas características en sus nombres.
  - La **bracket notation no tiene las limitaciones** de la dot
    notation. Usarla sistemáticamente te ahorra tener que estar
    pensándolo, aunque es a costa de menor legibilidad que cuando se
    puede usar dot notation.
  - Ejemplo:

    ```js
    const heroesJson = `[
      {
        "known-name": "Hulk",
        "secret identity": "Bruce Banner",
        "2bestPowers": ["strength", "invulnerability"]
      },
      {
        "known-name": "Mr. Fantastic",
        "secret identity": "Reed Richards",
        "2bestPowers": ["elastic", "intelligency"]
      }
    ];
    const heroes1 = JSON.parse(heroesJson);
    // Accedo así a las propiedades, no hay otra:
    console.log(
      heroes1[0]["known-name"],
      heroes1[1]["secret identity"],
      heroes1[0]["2bestPowers"][1]);

    const heroesEasyJson = `[
      {
        "knownName": "Hulk",
        "secretIdentity": "Bruce Banner",
        "twoBestPowers": ["strength", "invulnerability"]
      },
      {
        "knownName": "Mr. Fantastic",
        "secretIdentity": "Reed Richards",
        "twoBestPowers": ["elastic", "intelligency"]
      }
    ];
    const heroes2 = JSON.parse(heroesEasyJson);
    // Puedo acceder así a las propiedades:
    console.log(
      heroes2[0]["knownName"],
      heroes2[1]["secretIdentity"],
      heroes2[0]["twoBestPowers"][1]);
    // Pero aquí es más fácil y legible acceder así:
    console.log(
      heroes2[0].knownName,
      heroes2[1].secretIdentity,
      heroes2[0].twoBestPowers[1]);
    ```

### Relación entre JSON y la notación literal de JS

- JSON "en la raíz" NO solo permite codificar/decodificar "un objeto":
  - En los ejemplos que hemos visto, hemos codificado/decodificado con
    él "en la raíz" un objeto.
  - Pero con él, "en la raíz" se puede codificar muchas otras cosas que
    se pueden representar en notación literal de JS.
  - Por ejemplo:

    ```js
    // Codificar "en la raíz" un array:
    const arr = [ 7, true, 'bye', '', { a: 8 } ];
    const arrayJson = JSON.stringify(arr);
    console.log(arrayJson); // Es el string: '[7,true,"bye","",{"a":8}]'

    // Codificar "en la raíz" solamente un primitivo:
    // Numérico:
    const num = 7;
    const numJson = JSON.stringify(num);
    console.log(numJson); // Es el string: '7'
    // Booleano:
    const bool = true;
    const boolJson = JSON.stringify(bool);
    console.log(boolJson); // Es el string: 'true'
    // String:
    const str = 'bye';
    const strJson = JSON.stringify(str);
    console.log(strJson); // Es el string :'"bye"'
                          // (nota que este incluye las comillas dobles)
    // null:
    console.log(JSON.stringify(null)); // Es el string: 'null'

    // Sin embargo, JSON no sabe "transportar" ciertos otros
    // primitivos/valores/espacio vacío en array. Los transporta (sin
    // dar eror) todos como el texto 'null' (indistinguible del que
    // utiliza para transportar al primitivo null):
    JSON.stringify(
      [NaN, undefined, Infinity, , Symbol("id")])
      // Es el string: '[null,null,null,null,null]'

    // Y no es capaz de intepretarlos si alguien los pusiera como texto:
    JSON.parse('[NaN,undefined,,Infinity]');
      // Da error. Y entrecomillarlos con "" extraería esos textos,
      // pero como "strings", no como los primitivos/valores
      // indicados.

    // Algunas otras cosas no primitivas, que son objetos en el fondo,
    // las transforma (sin dar error) de distintos modos:
    const myMap = new Map();
    myMap.set('Cristopher', 'name');
    myMap.set('Columbus', 'surname');
    const myRegExp = /^Discovery$/;
    const myFunc = function () { return "of America"; };
    const myObjWithMethods = {
      msg: 'Land ahoy!',
      logMsg() { console.log('Message: ' + this.msg);
    };
    const myDate = new Date("1492-10-12T14:00Z");
    JSON.stringify([myMap, myRegExp, myFunc, myObjWithMethods, myDate]);
      // Es el string:
      //   '[{},{},null,{"msg":"Land ahoy!"},"1492-10-12T14:00:00.000Z"]'
      //
      // - Del Map no saca las parejas clave/valor como si fuera un
      //   objeto/array asociativo. Lo considera un objeto vacío, sin
      //   propiedades
      // - Una expresión regular la considera también un objeto vacío,
      //   sin propiedades
      // - Una función, la codifica como si fuera null (en este caso,
      //   no como objeto vacío)
      // - Pero las funciones de "dentro de los objetos" (métodos), las
      //   ignora silenciosamente.
      // - Al menos los objetos fecha, los estringifica normalizándolos.
      //   Pero ahora es un string, que será recuperado al decodificar
      //   como un string.

    // Y hay más cosas que no le gustan a JSON:

    // No le gustan las trailing comas en arrays u objetos:
    JSON.parse('[7,8]'); // Extrae correctamente un array [7, 8]
    JSON.parse('[7,8,]'); // Da error
    JSON.parse('{"a":7,"b":8}');
      // Extrae correctamente un objeto { a: 7, b: 8 }
    JSON.parse('{"a":7,"b":8,}'); // Da error

    // No le gustan los comentarios:
    JSON.parse(`
      {
        "a": 7,
        "b": 8
      }`); // Extrae correctamente un objeto { a: 7, b: 8 }
    JSON.parse(`
      {
        "a": 7,
        // Comentario
        "b": 8
      }`); // Da error
    JSON.parse(`
      {
        "a": 7, /* Comentario */
        "b": 8
      }`); // Da error

    // No le gustan los nombres de propiedades sin comillas:
    JSON.parse(`
      {
        a: 7,
        b: 8
      }`); // Da error

    // No le gustan las notaciones numérica que no sean enteras o
    // decimales:
    JSON.stringify([-3, 3.00, 3.1415, 2e3, 0x1a, 0b101]);
      // Devuelve sin error los números resultantes en notación
      // entera si puede, si no, decimal:
      //   '[-3,-3,3.1415,2000,26,5]'
    JSON.parse([-3, 3.00, 3.1415, 2e3, 0x1a, 0b101]);
      // Da error por los tres últimos

    // No le gustan los BigInt:
    JSON.stringify(3n); // Da error
    JSON.parse('3n'); // Da error
    ```

- Así que:
  - Un string JSON es tal que se puede copiar/pegar su contenido (sin
    las comillas envolventes) en el editor del código JS y funcionará
    como una definición en notación literal JS: JSON son siempre
    caracteres que representan una notación literal JS válida.
  - Lo contrario no es cierto: una declaración de objeto JS no tiene
    para nada porqué ser JSON válido.
  - Esto es porque **la sintaxis JSON es un _subset_ de la sintaxis de
    la notación literal JS**. Tiene restricciones adicionales (menos
    permisivo/variante: hace más sencillo de implementar un parseador).
- **Resumimos aquí las restricciones de JSON** (las hemos visto todas
  con ejemplos):
  - JSON solo puede conenter tipos de datos que él considera
    serializables.
    - En concreto:
      - Para primitivos:
        - Puede contener solamente string literals, number literals,
          boolean literals (`true`, `false`) y null.
        - Notablemente, no puede contener `undefined`, `NaN`, o `Infinity`
          o un BigInt.
      - Para no primitivos:
        - Puede contener object literals y arrays.
          - Notas:
            - Obviamente, los elementos de dentro de esos object
              literals y arrays tendrán que ser a su vez
              (recursivamente), tipos de datos restringidos a los que
              son válidos para JSON.
            - El origen de lo que se codifique a JSON puede ser una
              declaración literal, pero también el resultado de
              cualquier otra manera de construir/manipular
              objetos/arrays en JS.
        - No puede contener funciones, ni métodos dentro de objetos.
        - No transporta tampoco transparentemente ciertos objetos
          especiales como Map, RegExp, Date, ...
  - Los primitivos strings tienen que tener comillas dobles (no simples
    o backticks).
  - Los primitivos números han de estar en notación decimal.
  - El nombre de propiedades de los objetos han de estar con comillas
    dobles.
  - No permite trailing comma para objectos ni arrays.
  - No permite comentarios.
  - Pero permite "whitespaces" (espacios y retornos de línea).

- **Las siglas JSON "expandidas" puede dar a equívoco (son bastante _missleading_)**.
  - Esto se entiende ahora que hemos entendido bien qué es JSON.
  - JSON son las siglas de "JavaScript Object Notation" (Notación de
    **Objetos** de JS).
  - Esas siglas "expandidas" tiene dos grandes problemas:
    - Como hemos visto, **en la raíz no se limita a permitir representar
      objetos**.
      - Puede representar ciertos primitivos y arrays. Los strings
        `[7,8]`, `8`, `"bye"`, `false` contienen todos ellos sintaxis
        JSON perfectamente válida.
      - No es habitual representar en la raíz de un JSON solo un
        primitivo, pero se puede perfectamente. Y sí que es muy habitual
        que raíz sea un array (de primitivos, o, más habitualmente, de
        objetos).
    - Si yo en vez de decir las siglas "JSON" las digo expandidas
      "JavaScript Object Notation", es muy probable que alguien pueda
      pensar que me refiero a la notación literal de objetos en JS (la
      de verdad), que hemos visto que permite cosas que JSON no. Y que
      en mundo JS, se refiere a solo la de representar un objeto en la
      raíz usando las llaves, y no por ejemplo en la raíz un array con
      corchetes o un primitivo. En contexto JS, posiblemente a
      "JavaScript Object Notation" (la de verdad) se le acorte "object
      notation" y entonces sea menos probable confundir ese concepto con
      "JSON"... Las otras maneras habituales de referirse a las "de
      verdad" (y que yo tiendo a utilizar) incluyen la palabra
      "literal":
      - (JS) object literal notation (lo de las llaves).
      - (JS) array literal notation (lo de los corchetes).
      - (JS) string literal notation (lo de los tres tipos de comillas).
      - (JS) number literal notation (lo de las bastantes maneras de
        expresar literales de números).
      - (JS) boolean literal notation (true o false, sin comillas).
      - (JS) literal notation: el conjunto de todas las anteriores.
  - Así que, mi recomendación es:
    - Evitar llamar "JS object notation" a "la de verdad". Colarle el
      "literal" que explicita mejor que nos referimos a "la de verdad":
      llamarla:

      "(JS) object **literal** notation"

    - Usar la palabra "JSON" sin expandir las siglas. Si algún día
      tienes que "decir con poco" qué quiere decir "JSON", dices que las
      siglas son tal cosa que te "recuerda de dónde viene", pero que es
      más preciso definirlo como:

      "(sintaxis que es cierto) **subset de la notación literal de JS**"

### Supersets "humanizados" de JSON

- Hemos visto que el JSON estándar, especificado en
  [json.org](https://www.json.org), es un subset de la notación literal
  de JS que no tolera incluir comentarios, ni comillas simples, ni no
  poner comillas a los nombres de propiedades, ni los trailing commas,
  etc.
- Pero como poco los comentarios son a menudo son muy útiles,
  especialmente para poder por ejemplo anotar ficheros de configuración
  que estén en formato JSON, o ejemplos de JSON... Ejemplo: la
  configuración de VScode (y muchos otros) acepta comentarios (con
  sintaxis JS), y los respeta cuando él actualiza automáticamente un
  fichero de config (con p.ej. cosas configuradas vía la GUI).
- Pero no se puede contar "en general" con esto en las cosas que sean
  JSON... Ciertos parseadores tal vez os acepten, pero los que sigan el
  estándar (p.ej. `JSON.parse()`) darán error.
- VScode acepta el formato
  [JSON with comments](https://code.visualstudio.com/docs/languages/json#_json-with-comments)
  que es un superset de JSON estándar que permite comentarios y también
  trailing commas.
  - Lo asocia a una extensión `.jsonc`, pero ni él mismo la utiliza para
    sus ficheros internos de configuración, a los que les pone `.json`,
    por ejemplo:

    `$HOME/.config/Code/User/settings.json`

  - Si abrimos un `.json` cualquiera en VScode, por omisión lo
    interpreta como JSON estándar, pero en algunos contextos
    automáticamente lo detecta como "JSON with comments" (por ejemplo,
    sus propios ficheros de configuración), y en todo caso uno puede
    especificarle el "tipo" una vez abierto.
  - Pero igual que VScode usa configuración en JSON que permite
    comentarios y les pone un `.json` de extensión, muchas otras
    aplicaciones hacen lo propio.
  - En resumen: hay que tener cuidado con ficheros que veamos con
    extensión `.json` por ahí, porque **`.json` es extensión
    ambigua**:
    - Pueden contener JSON estándar.
    - O pueden contener "JSON de configuracíon" con tal vez comentarios
      o trailing commas porque la aplicación a la que van destinados los
      acepta.
- Un paso más allá del "JSON with comments" es JSON5, un intento de
  definir un JSON más "conviviable", más "humanizado":

  [JSON5, "JSON for humans"](https://json5.org/)

  - **Ojo**: **NO** es la versión 5 de JSON. Es un **superset
    _extraoficial_ de JSON**. No solo permite comentarios, sino que es más
    tolerante a ciertas cosas para las que el JSON estándar es
    tiquismiquis.
  - Veamos detalles en el [JSON5 short example](https://json5.org/#short-example),
    que muestra las cosa que acepta que un JSON estándar no tragaría:

    ```json
    {
      // comments
      unquoted: 'and you can quote me on that',
      singleQuotes: 'I can use "double quotes" here',
      lineBreaks: "Look, Mom! \
        No \\n's!",
      hexadecimal: 0xdecaf,
      leadingDecimalPoint: .8675309, andTrailing: 8675309.,
      positiveSign: +1,
      trailingComma: 'in objects', andIn: ['arrays',],
      "backwardsCompatible": "with JSON",
    }
    ```

  - Para usar JSON5, se puede cargar como una librería.
    - Su API es "compatible" con el del objeto nativo `JSON` de JS. Es
      decir, mismos nombres de métodos y se usan de la misma manera.  Se
      tienen p.ej. un `JSON5.parse()` y un `JSON5.stringify()`.
  - Pero lo dicho: a menos que sepamos que la aplicación del otro lado
    tolera comentarios (por usar JSON5 u otro parseador que los tolere),
    no podemos contar con poder ponerlos. Y lo mismo con otras cosas.
  - Nota: **JSON5 es un superset de JSON estándar, pero
    sigue siendo un subset de la notación literal JS**: sigue sin codificar
    funciones/métodos, `undefined`, `NaN`, ...

### ¿Manipular/generar JSON "a mano"?

- JSON es muy **sensible**: el mínimo caracter mal puesto (coma donde
  no toca por ejemplo, doble comilla que falta cuando toca o que está
  como simple, ...) hace que todo el string JSON sea inválido y falle
  globalmente su decodificación ("todo o nada"), no funciona al estilo
  "extraigo lo que puedo en _best effort_" como ocurre por ejemplo
  cuando se parsea HTML.
- Así que, pese a ser una sintaxis orientada a ser directamente
  comprensible por humanos, en caso de generar o manipular JSON "a
  mano", hay que hacerlo con mucho cuidado.
- Si lo generas/manipulas a mano, es muy conveniente como poco validar
  en la consola o en fichero minimalista la prueba de hacerle un
  `JSON.parse()` a lo que has hecho, para comprobar que no da error.
  Lo que pasa es que, cuando da error, a menudo el mensaje de error de
  esa función no ayuda mucho a saber cuál es o dónde está.
- Para lo anterior, te puedes ayudar con algún linter/validador:
  el integrado en tu editor de código (aunque hay que tener cuidado con
  que no esté parseando más relajadamente, como por ejemplo el JSON with
  Comments de VScode), o bien usar una aplicación externa (aplicación
  online por ejemplo) como
  [JSONLint](https://jsonlint.com) o
  [JSON Validate](https://www.json-validate.com).
- Es cierto que la notación literal que uno usa en código JS también se
  rompe muy fácilmente: esto no solo pasa al modificar a mano JSON. Pero
  los problemas "añadidos" en el caso de JSON son que:
  - Cuando usamos la literal notation en programas, típicamente estamos
    en ese momento probando con código nuestro que no estamos rompiendo
    nada. Pero si toquiteamos JSON a mano en por ejemplo un fichero o un
    lugar que almacena texto, hasta que no se parsee eso en otro lugar
    no sabremos que hemos metido la pata (y lo mismo ese otro lugar.
    que lo está procesando no es ni nuestro propio código sino código
    ajeno, incluso en otra máquina).
  - Como JSON se parece mucho a la notación literal, es un "falso amigo"
    y es muy fácil tener la inercia de escribir cosas que sí que
    funcionarían en notación literal (y como solemos escribirlas ahí),
    pero que JSON no acepta.

## Más allá de JSON

### Formatos de serialización

- Hemos visto lo de convertir desde "objeto nativo de nuestro lenguaje de
  uso" a JSON. A eso se le llama "serializar". Y a lo contrario,
  "deserializar".
- Casi todo lo explicado/ampliado (casos de uso) aplica a usar otros
  formatos de serialización en vez de JSON: serializo/deserializo
  objetos de mi lenguaje para poderlos almacenar o comunicar en lugares
  que aceptan almacenar o comunicar esa información. Algunos formatos de
  serialización/deseralización son binarios, pero son muy populares los que
  se ciñen a ser de texto (por poderse almacenar o comunicar en
  cualquier lugar que acepte guardar/comunicar texto, y también por ser
  potencialmente al menos "legibles" directamente por un ser humano).
- Antes de que se "inventara" JSON, era más popular usar XML para esto.
  Pero es mucho más verboso/tedioso/"indigesto" para seres humanos.
- Algunos formatos de serialización son más limitados, como CSV, pero
  otros como XML o JSON son generales: permiten representar estructuras
  de datos anidadas arbitrariamente complejas.
- La diferencia entre formatos de serialización con capacidades
  equivalentes es que tienen sintaxis distinta... Con JSON la "pinta"
  cuando te asomas a ver la cosa serializada se parece mucho (casi
  clavada) a la pinta a la que estás acostumbrado a ver en la
  declaración de objetos JS (con notación literal)... Si estás
  acostumbrado a otros lenguajes (o programas en ellos), tiene menos
  ventaja "de estar acostumbrado". En todo caso JSON se ha vuelto muy
  popular como lingua franca de comunicación (independientemente del
  lenguaje), y se usa por tanto desde muchos programas en distintos
  lenguajes.
- Más información:
  - [Serialización](https://en.wikipedia.org/wiki/Serialization)
  - [Comparación de formatos de serialización](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats)

### Serialization format vs Markup language vs Lightweight Markup Language

- Serialization format:
  - Los formatos de serialización pretenden meter en ellos estructuras
    genéricas de programación (objetos serializados), con mayor o menor
    flexibilidad respecto a lo que son capaces de representar.
  - Los más famosos son en texto: XML, JSON, YAML, CSV.
  - Pero hay otros lo hacen en un formato binario.
  - Los que lo hacen como texto:
    - ¿Pueden ser leídos/entendidos por un humano? Sí, esa es una de
      las ventajas. Con mayor o menor dificultad según el lenguaje
      concreto (y en muchos casos, si viene en plan "churro minificado",
      se agradece un prettyfier que nos lo muestre con estructura
      identada/tabulada).
    - ¿Pueden ser escritos directamente por seres humanos? También...
      Pero con típicamente mayor dificultad/tedio que leerlo.
    - ¿Es conveniente recomendar escribirlos/modificarlos directamente
      por un humano? En muchos casos no. Es "potencialmente posible" (y
      eso da unas ventajas), pero no "sistemáticamente deseable". Hemos
      visto con JSON lo "sensible" que es a errores.
- Markup Language:
  - Los lenguajes de marcado son sí o sí de texto. Pensados para
    representar la información utilizando "marcas" para indicar la
    estructura:
  - Con "marcas pesadas" (verbosas):
    - Ej. XML y HTML con "etiquetas" de apertura/cierre que rodean los
      elementos, TeX/LaTeX con otras maneras de delimitar, ...
  - Con "marcas ligeras" (objetivo es que sean menos verbosas), o
    Lightweight Markup Languages (LML):
    - Ej.: Markdown, Asciidoc, ReST, ...
    - Suele usarse este término para lenguajes de marcado destinados a
      escribir documentos de una manera menos tediosa o más tersa que
      los anteriores de marcas "más pesadas".
- Una vez entendido lo anterior:
  - XML forma parte de ambas categorías:
    - Se usa para serializar y para datos "genéricos".
    - Se usa con marcas para indicar la estructura. Y a menudo, se usa
      de una manera concreta (con sub-lenguajes) para especificar
      "documentos".
  - YAML y JSON en cierto modo se asemejan a lenguajes de marcas
    (el ML de YAML es Markup Language de hecho), pero son más "ligeros"
    que los tradicionales (especialmente XML y derivados). Pero no se
    les suele meter bajo una denominación LML, que se suele reservar a
    lenguajes destinados a describir "documentos".
  - Y los "lighweight ML" (Markdown, ...), no están pensados para
    contener estructuras arbitrarias de datos (como sí lo están JSON,
    YAML, o XML). Tampoco están pensados para eso muchos otros ML "no
    lightweight" (siendo HTML el ejemplo más significativo de esos otros
    ML).
- Conclusión:
  - Hay lenguajes de formato apropiados para distintos casos de uso.
  - Se puede a veces "estirar" su uso par aplicarlos en otros contextos,
    pero en ese caso pueden no ser los más adecuados (si no estaban
    pensados para ese uso).

### CSV

- [CSV (Comma-separated Values)](https://en.wikipedia.org/wiki/Comma-separated_values)
  es un formato sencillo de texto para representar una tabla, es decir
  una serie de filas con mismo número de columnas.
- Cada fila es una línea de texto, y cada celda está separada por comas.
  - P.ej.:

    ```csv
    id,name,role
    1,Alice,admin
    2,José Luis,user
    ```

- No tiene "tipos de datos": entre las comas solo hay texto.
- La primera fila puede representar la cabecera que indica los nombres
  de las columnas... o no. Emisor y receptor han de ponerse de acuerdo
  en eso (no hay algo de la sintaxis que lo marque explícitamente).
- Para cada celda individualmente, se pueden poner comillas dobles o no,
  es equivalente. Podemos ponerlas en solo las columas o celdas
  individuales concretas que queramos.
  - P.ej. con comillas en todas las celdas:

    ```csv
    "id","name","role"
    "1","Alice","admin"
    "2","José Luis","user"
    ```

  - O p.ej. con comillas en solo unas cuantas, sin criterio aparente:

    ```csv
    id,"name",role
    1,Alice,"admin"
    "2","José Luis",user
    ```

- El texto de las celdas puede contener comas o incluso retornos de
  línea. En ese caso, las comillas son necesarias para escapar esos
  caracteres especiales para el formato.
  - Ej. con comillas solo en las celdas que requieren escapar:

    ```csv
    id,name,role
    1,"Cooper, Alice", admin
    2,"López
    José Luis",user
    ```

- Si el texto contiene literalmente comillas dobles, la manera de
  ponerlas es doblándolas:
  - P.ej.:

    ```csv
    id,name,role
    1,"Alice, aka ""The Boss""", admin
    2,José Luis,user
    ```

- Todos los retornos de línea (dentro de comillas o separadores de
  filas) han de ser "al estilo Windows", es decir, codificados con
  dos caracteres CR+LF.
- Se puede elegir la codificación de caracteres que se quiera, pero no
  lo explicta el formato en ningún lugar: los extremos han de ponerse de
  acuerdo.
- He descrito el formato CSV tal y como se ha acabado estandarizando,
  con MIME Type `text/csv` y extensión de fichero `.csv`.
- También se usa CSV de manera más relajada en más contextos:
  - Algo con un formato similar pero que no permita comas o retornos
    de linea de dentro de celdas. Eso hace que el parseador sea mucho
    más trivial de implementar.
  - Algo con un formato similar, pero en el que se elija el delimitador
    en vez de la coma. Por ejemplo, ";" o "|", ... Se les
    suele llamar a esos también CSV, e incluso se les pone extensión
    `.csv` (y al momento de importar se indican cosas como qué separador
    utilizar, si tiene o no cabecera, qué codificación de caracteres
    usa). Pero estrictamente hablando, a esos se les debiera llamar con
    el nombre más genérico Delimiter-Separated Values (DSV). Y en el caso
    de usar tabulador como delimitador, Tab-Separated Values (TSV).
- Permite de una forma muy sencilla representar y comunicar de manera
  interoperable a una tabla de hoja de cálculo, o a una tabla de base de
  datos SQL, o a una estructura de programación de un array de arrays.

### YAML

- YAML nació como **superset de JSON**: un JSON válido es un YAML
  válido... Lo que añade es permitir una variante "no compatible JSON"
  para representar las cosas, más tersa y legible por humanos y que
  soporta comentarios y algún bonus.
- La sintaxis de la parte no de YAML no compatible JSON permite mostrar
  las estructuras anidadas de manera menos pesada (más estilo LML) que
  JSON. Para ello se ahorra bastante las comillas y se ahorra las llaves
  y corchetes, a cambio de usar el retorno de línea y la indentación
  para indicar la estructura.
- Para describir objetos ("maps"/assotiative arrays), usa algo
  parecido a unas description lists como se suelen usar en un LML.
  - Ejemplo de objeto en JSON minificado:

    ```json
    {"id":1,"name":"Alice","role":"admin"}
    ```

  - Correspondencia en en JSON indentado:

    ```json
    {
      "id": 1,
      "name": "Alice",
      "role": "admin"
    }
    ```

  - Correspondencia en la sintaxis tersa de YAML:

    ```yaml
    id: 1
    name: Alice
    role: admin
    ```

  - Ejemplo de objetos anidados en JSON indentado:

    ```json
    {
      "player1": { "id": 1, "name": "Alice" },
      "player2": { "id": 2, "name": "José Luis" }
    }
    ```

  - Correspondencia en la sintaxis tersa de YAML (ojo, aquí la
    indentación es lo que marca la estructura):

    ```yaml
    player1:
      id: 1
      name: Alice
    player2:
      id: 2
      name: José Luis
    ```

- Para describir arrays, usa algo con un aire a los bullet lists de
  markdown (con guión).
  - Ejemplo de array en JSON minificado:

    ```json
    [7, "bye", true]
    ```

  - Correspondencia en en JSON indentado:

    ```json
    [
      7,
      "bye",
      true
    ]
    ```

  - Correspondencia en la sintaxis tersa de YAML:

    ```yaml
    - 7
    - bye
    - true
    ```

  - Ejemplo de arrays anidados en JSON indentado:

    ```json
    [
      [7, 8],
      ["hello", "bye"],
      [true, false]
    ]
    ```

  - Correspondencia en la sintaxis tersa de YAML (ojo, también aquí la
    indentación es lo que marca la estructura):

    ```yaml
    - - 7
      - 8
    - - hello
      - bye
    - - true
      - false
    ```

- Obviamente se pueden anidar arrays-objetos u objetos arrays.
  - Ejemplo de array de objetos con propiedad array en JSON indentado:

    ```json
    [
      { "id": 1, "name": "Alice", "scores": [8, 5] },
      { "id": 2, "name": "José Luis", "scores": [7, 9] }
    ]
    ```

  - Correspondencia en la sintaxis tersa de YAML (ojo, también aquí la

    ```yaml
    - id: 1
      name: Alice
      scores:
        - 8
        - 5
    - id: 2
      name: José Luis
      scores:
        - 7
        - 9
    ```

- Nota de la documentación de YAML:

  > YAML was specifically created to work well for common use cases such as:
  > configuration files, log files, interprocess messaging, cross-language
  > data sharing, object persistence and debugging of complex data
  > structures. When data is easy to view and understand, programming
  > becomes a simpler task.

- A menudo cuando te dicen "YAML" se asocia con que se esté usando su
  variante de sintaxis no compatible con JSON, pero no hay que olvidarse
  de que acepta JSON también.

### TOON

- Hay un relativamente nuevo formato llamado
  [TOON (Token Oriented Object Notation](https://github.com/toon-format/toon)
  - Intenta que siga siendo legible por humanos, pero reduciendendo
    letras/verbosidad: está orientado a ser más ligero en tokens para la
    IA (requerir menos computación)... Pero, de paso, es más ligero de
    leer/escribir también para los humanos.
  - JSON quita verbosidad a XML. YAML (su parte "añadida" no compatible
    JSON) quita aún más verbosidad. Pero TOON va un paso más allá, para,
    aparte de hacer lo que también hace YAML, quitar aún más verbosidad
    para casos de uso muy habituales, especialmente el caso de arrays de
    objetos coherentes (objetos con estructura similar, con mismas
    propiedades).
  - Ejemplo de JSON vs YAML (su sintaxis tersa) vs TOON en ese caso de
    uso:

    - JSON indentado:

      ```json
      {
        "users": [
          { "id": 1, "name": "Alice", "role": "admin" },
          { "id": 2, "name": "José Luis", "role": "user" }
        ]
      }
      ```

    - YAML no compatible JSON equivalente:

      ```yaml
      users:
        - id: 1
          name: Alice
          role: admin
        - id: 2
          name: José Luis
          role: user
      ```

    - TOON equivalente (el [2] explicita el tamaño del array):

      ```toon
      users[2]{id,name,role}:
        1,Alice,admin
        2,José Luis,user
      ```

  - Como se ve, permite una especie de "arrays CSV con cabecera
    explicativa". Evita la necesidad de repetir sistemáticamente los
    nombres de todas las propiedades en todos los objetos, y lo hace
    permitiendo declarlos en una especie de cabecera, asemejándose en
    eso a la idea de lo que hace CSV... Pero a diferencia de CSV, que es
    bastante plano, TOON permite estructuras arbitrariamente anidadas
    (como lo permiten XML, JSON y YAML).
  - Cuando la estructura nested no es tan uniforme,
    [TOON pierde ventaja frente a YAML](https://www.reddit.com/r/programming/comments/1oovosa/comment/nn7jdsz/)
    (aunque no es peor: solo que toca explicitar propiedades). Un
    ejemplo de lo anterior:

    - JSON identado:

      ```json
      {
        "users": [
          {
            "id": 1,
            "name": "Alice",
            "role": "admin",
            "books": [
              {"name":"The Stand", "author": "Stephen King"},
              {"name":"The C Programming Language","pages":1337}
              ]
          },
          {
            "id": 2,
            "name": "José Luis",
            "role": "user"
          }
        ]
      }
      ```

    - YAML equivalente:

      ```yaml
      users:
        - id: 1
          name: Alice
          role: admin
          books:
            - name: The Stand
              author: Stephen King
            - name: The C Programming Language
              pages: 1337
        - id: 2
          name: José Luis
          role: user
      ```

    - TOON equivalente:

      ```toon
      users[2]:
        - id: 1
          name: Alice
          role: admin
          books[2]:
            - name: The Stand
              author: Stephen King
            - name: The C Programming Language
              pages: 1337
        - id: 2
          name: José Luis
          role: user
      ```

  - A fecha de noviembre de 2025, queda por ver si este TOON
    cuajará y llegará a algún sitio en popularidad. Pero:
    - Es interesante ver que se puede rascar más en concisión
      (menor redundancia) respecto a YAML.
    - Aunque sea usarlo solo para usarlo un proyecto propio donde el
      productor y el consumidor se ponen de acuerdo, ¿porqué no?

  <!--
  - Duda: ¿ejemplo de nested regular/uniforme de 2º nivel con TOON?
  - Nota: Si a uno le repampinfla la visión directa por un humano (¿y
    por una IA?), hay un tal [MessagePack](https://messagepack.org) que
    codifica JSON compacto en binario. Si el productor y consumidor se
    ponen de acuerdo, ¿porqué no? Aunque este messagepack no evita la
    redundancia de etiquetas: el TOON para los casos donde se puede
    quitar es más compacto y sigue siendo texto. Y puestos a pasar a
    binario, métele ya puestos entonces un gzip y se carga toda la
    redundancia de etiquetas.
  -->

### GraphQL

- Para completar los conocimientos sobre JSON y el "más allá de JSON",
  es conveniente aunque sea solo conocer a GraphQL. Es un lenguaje
  relativamente reciente, cada vez es más importante (incluso como para
  tener un stateof GraphQL desde 2022). Se trata de una alternativa a
  usar APIs de tipo "REST over HTTP basadas en JSON".
- Se puede por ejemplo echar un ojo a [An introduction to GraphQL, de
  Tania Rascia)](https://www.digitalocean.com/community/tutorials/an-introduction-to-graphql)
- Hay también una super interesante comparación de
  [GraphQL vs el tradicional REST APIs](https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql),
  que indica cuando cada uno es más pertinente.
- Nota: Estaría bien el mostrar un ejemplo de **uso** de GraphQL desde el cliente
  (saliendo de un servidor que ya esté ofreciendo una API dada). El hacer
  una/implementarla lado servidor entiendo que es más avanzado y no
  corresponde a asignatura Frontend, porque es algo de Backend. Aún así,
  se podría hacer, lado Backend, un prototipo/stubb, del mismo modo que
  se puede hacer eso para crear el lado servidor de una API de tipo
  "REST over HTTP basada en JSON".

### Formatos de ficheros de configuración

- Artículo
  [Configuration file (WP)](https://en.wikipedia.org/wiki/Configuration_file)
- Da un buen overview de ese use case típico:
  - convenios típicos (pero no estandarizados) en distintos
    ámbitos/contextos (distintos OS's, cuando es FOSS, ...).
  - Lenguajes usados (algunos de ellos son genéricos de serialización,
    otros no) y comparación: INI/JSON/YAML/XML/TOML/CUE
  - Aparte de JSON y YAML, TOML se ha puesto de moda en algunos proyectos.
    - Está solo pensado para configurar, en principio intentando ser menos
      overkill que usar un formato de serializacioń.
    - Es enhancement de los INI "clásicos", pero con especificación
      clara y no ambigua.
    - Aunque para el autor de StrictYAML (ver más abajo), no escala para
      nada bien.
  - CUE (originado en Google) es un superset de JSON para cubrir más: no
    solo descripción de código, sino que también algo de ejecución, pero
    sin intentar llegar a ser un lenguaje de propósito general. Permite
    configurar cosas muy complejas de manera muy tersa. Va más allá de
    JSON y YAML.
- A los anteriores formatos, yo añadiría
  [StrictYAML](https://hitchdev.com/strictyaml/).
  - No es lenguaje nuevo, es un subset de YAML. Es decir, auto-limitarse
    a usar YAML de manera más restringida. Se limita uno a las cosas de
    YAML más human friendly, creando configs tersas y legibles (no
    permite usar la parte de YAML que es JSON-compatible).
  - Se puede ver en su web, muy interesantemente, las razones de porqué
    y porqué no hace ciertas cosas, y la comparación con otros
    lenguajes/formatos/alternativas para configurar.


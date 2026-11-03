# El uso estricto en Scripts

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 445134
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=445134
- Relevance: DWEC


---

## ANA GARCÍA FERRER — 2026-10-06 22:39  (reply to Nombre de respostes: 3)

*Post 608106, depth 0, subject: El uso estricto en Scripts*

Hola, buenas noches. ¿Debemos utilizar el "use strict" en nuestros Scripts? Lo pregunto ya que en los comentarios del LANG2 recomiendas usarlo para nuestros códigos actuales, y quería saber si en estos hay que aplicar su uso. Gracias.


---

## DANIEL MARCELO LLACER — 2026-10-07 00:50  (reply to ANA GARCÍA FERRER)

*Post 608130, depth 1, subject: El uso estricto en Scripts*

Hola, Ana:

Enhorabuena Ana por abrir la botella de champagne de la primera pregunta técnica por el foro.

Muy buena pregunta. El enunciado concreto no dice nada... Pero como bien señalas, jsinfo lo recomienda y yo en mis comentarios también. Luego... Gracias a hacer tus deberes de mirar al respecto, creo que se responde ya solo. ¿Cómo te voy a decir que no?

¿Cambia algo activarlo? Bueno: según el código que hayáis hecho, cosas que os han funcionado no van a funcionar, porque, pues eso, el modo estricto no deja ciertas cosas que el modo relajado deja. Es decir: si funciona en estricto funciona en relajado, pero viceversa no es siempre cierto.

En los exámenes no recordaré explícitamente que lo uséis, pero, como es una recomendación de buenas práctica y pondré al principio un "usa buenas prácticas", pues ahí lo tenéis: esta es una que se espera (y fácil de olvidar, para empezar yo mismo me olvido a menudo de él).

En caso de no haber recibido respuesta mía, un disclaimer siempre ayuda a protegerte. Activas el modo estricto por ejemplo, y justificas que es porque lo he recomendado en mis comments de LANG2. ¿Cómo podría quejarme? O, si has decidido no ponerlo, dices "el enunciado no lo pedía explícitamente, y he decidido conscientemente no ponerlo". Al menos, si te equivocas (te habrías equivocado en ese caso), me demuestras que ha sido una decisión consciente, y no por no pensar en ello. Decisiones conscientes, aún cuando equivocadas, son mejores que ni decidir o ni ser consciente de que hay una decisión. Están más cerca de aprender a hacerlo bien.

Título: si vais a usar el foro (hoy entiendo que por fín lo habéis visto interesante, aunque sea con mi empujoncito), y queréis ganar maś pasta, os animo me temo a leer las reglas de foro. En este caso, respecto a títulos.

- Primera falla: no tiene etiqueta. Tendrías que haber empezado con el contexto de a qué tema y/o práctica se refiere la pregunta. En este caso "[dwec1p2](https://aules.edu.gva.es/fp/mod/assign/view.php?id=11626721): ".

- Palabras clave... No está mal. Añadir "en Scripts" no es necesario porque... demonios, casi todo va a ser este curso hacer scripts (uno menciona si acaso cuando no sea sobre eso). Lo cambiaría si acaso con plantear una pregunta concreta, no dejarlo como "voy a decir algo sobre el uso estricto pero no te hago espoiler de lo que voy a decir, tendrás que leer mi mensaje".

- Con todo, mi sugerencia de título:

[dwec1p2](https://aules.edu.gva.es/fp/mod/assign/view.php?id=11626721): ¿usamos modo estricto?

Así, mejor.

Un saludo,  
Dani


---

## ANA GARCÍA FERRER — 2026-10-07 00:52  (reply to DANIEL MARCELO LLACER)

*Post 608131, depth 2, subject: El uso estricto en Scripts*

Muchas gracias Dani ![somriure](https://aules.edu.gva.es/fp/theme/image.php/aules/core/1791450713/s/smiley)


---

## DANIEL MARCELO LLACER — 2026-10-08 19:35  (reply to ANA GARCÍA FERRER)

*Post 609157, depth 3, subject: El uso estricto en Scripts*

Holaaaa:

Al final ayer no mencioné respecto esto, por olvido y prisas, pero aplica desde el primer ejercicio.

Lo abordo por aquí ahora:

Independientemente de lo que respondí a Ana (y nadie se ha quejado), no es posible hacer lo que le propuse como respuesta.

En estas prácticas, no es posible activar el modo estricto. ¿Porqué? Porque la declaración

 'use strict';

tiene que ser lo primero del script (que no sea comentario).

Y en las plantillas, eso obliga a escribir en zona "prohibida".

¿Opciones razonables?

- Al inicio del "put your code here" poner disclaimer diciendo que las buenas prácticas son poner modo estricto, pero que no puedes porque sería tocar arriba.

- O, activarlo arriba, y que el comentario que digo (que pones al inicio del "put your code here") es disclaimer de que has decidido conscientemente hacer excepción a esa regla para poder activar el modo estricto porque es una buena práctica.

Ambas soluciones son mejores que no poner el modo estricto y no decir nada.

Nota: si alguno en la entrega ha puesto el

'use strict';

en la zona de "put your code here", que sepa que no ha activado el modo estricto (y que ni se ha enterado de que no lo ha activado, porque no hay errores ni warnings... a menos que se use un linter).

¿Cómo comprobarlo? Tras ese 'use strict'; puesto donde no sirve, pones un "a=3" (usar una variable no declarada) y no ocurre error. Si activas bien el modo estricto, eso da error.

En JS pasa mucho que cosas no dan errores ni warnings, pero que en el fondo no están funcionando o no están funcionando bien, y es una technical debt que en algún futuro te morderá cuando peor te venga. El uso de linters ayuda con esto, aunque nosotros por ahora (y por un buen tiempo) no usaremos linters: queremos que las cosas nos muerdan ahora, para aprenderlas mejor.

Un saludo,  
Dani

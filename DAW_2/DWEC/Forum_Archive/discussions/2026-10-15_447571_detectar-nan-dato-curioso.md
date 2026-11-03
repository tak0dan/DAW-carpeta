# Detectar NaN (Dato curioso)

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 447571
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=447571
- Relevance: DWEC


---

## LUIS MIGUEL NOGUERA GUIJARRO — 2026-10-15 12:52  (reply to Nombre de respostes: 2)

*Post 611162, depth 0, subject: Detectar NaN (Dato curioso)*

Estuve mirando el funcionamiento de NaN porque es cierto que existe la funcion isNaN() pero queria saber si se podia sacar sin necesidad de ello. Pongamos que tenemos una variable con valor "hola" llamada **var**, si hacemos isNaN(**var**) nos dará efectivamente que es NaN porque forzará este texto a número convirtiéndolo en NaN, pero es un String. El problema es si quieres detectar ese caso único en el que es solamente NaN, que es lo que vamos a resolver.   
  
Pensaba que era imposible, hasta que investigue algo que nos explico Dani, NaN no es igual a NaN. Raro, ¿no? Digo, si tengo una variable **a**=NaN entonces **a** === **a** es false. Increible, ¿no? ¿Cómo algo puede ser igual a sí mismo? Pues sorpresa, el único caso donde puede suceder eso es con NaN. Por lo tanto, ahí lo tienes, si preguntas si tu variable es distinta a sí misma (**a**!==**a**) y te da true es inequívocamente NaN. Para mí ha sido curioso, y espero que para vosotros también.


---

## DANIEL MARCELO LLACER — 2026-10-15 16:15  (reply to LUIS MIGUEL NOGUERA GUIJARRO)

*Post 611249, depth 1, subject: Detectar NaN (Dato curioso)*

Hola, Luis Miguel:

Muy interesante. Esto es un poco flash-forward del curso, pero es que hicimos en clase flash-forward y aplica muy bien tu aportación.

Algún matiz:

- La marcianada que vimos ayer de que NaN === NaN te dé false viene de que el estándar ES pide que NaN no sea igual a ningún número, incluido otro NaN. Eso tiene una lógica y razón de ser: si dos cálculos distintos dan NaN, puede haber sido por mil razones, y no es conveniente que un chequeo con === de ambos te dé true, te diga que son lo mismo... Porque son potencialmente mierdas variopintas, y es mejor en general decir que no son lo mismo.

- Sin embargo ese comportamiento dificulta, como hemos hablado y observado, el detectar si algo es NaN.

- El hack que dices para detectarlo de chequear si (a!==a) da false (por ser el único que cumple eso), no lo conocía ni había pensado. Me mola mucho, especialmente para poder usarlo en nuestro "estado de conocimiento de JS" (LANG2 only).

- Sin embargo, la manera correcta de hacerlo en JS moderno no es esa (que claramente es marciana y poco legible).

- Esto es flash forward de cuando veamos el tema 5, en concreto el 5.1 sobre numbers. Pero, ya que ha salido,** OJO**:

  - Existe "isNaN()" y "Number.isNaN()" y el "bueno" para chequear si algo es NaN es el segundo, porque es estricto y no hace castings. Es un poco la misma razón por la que recomiendo a tope hacer === y no ==, para que las cosas te muerdan menos.

  - Nota: la plantilla del math2 de la práctica [dwec1p2](https://aules.edu.gva.es/fp/mod/assign/view.php?id=11626721) usa isNaN(finalNumber) === false (y por cierto no Number.isNaN()) en su chequeo para decirte si es un "number type". Eso está totalmente mal. P.ej.:

    - a = "3.14"

    - isNaN(a) dará false, porque hace un casting implícito primero a número, y esa string concreta sí que se castea a un número y no da NaN... pero a NO es de tipo Number. Es de tipo string. Y el enunciado te pedía que convirtieras a algo de tipo number.

    - El chequeo correcto para dar el mensaje de que es un number type sería "typeof finalNumber === "number". Y si luego quieres avisar de que es un number "raro/no-number" de tipo NaN, es un chequeo independiente.

Muy buena aportación, Luis Miguel.

Un saludo,  
Dani


---

## DANIEL MARCELO LLACER — 2026-10-15 16:17  (reply to DANIEL MARCELO LLACER)

*Post 611251, depth 2, subject: Detectar NaN (Dato curioso)*

Ups, perdonad el doble mensaje. Un olvido...  
  
Título: te falta etiqueta inicial. Leed las reglas del foro si vais a participar en él. En este caso, podría ser "dwec1: ", o si quieres "[dwec1p2](https://aules.edu.gva.es/fp/mod/assign/view.php?id=11626721): " porque ha salido el tema en la corrección de esa práctica.

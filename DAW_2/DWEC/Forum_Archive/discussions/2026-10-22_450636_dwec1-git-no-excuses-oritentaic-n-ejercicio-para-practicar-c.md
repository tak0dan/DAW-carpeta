# dwec1: git no excuses, oritentaicón. Ejercicio para practicar código y commits.

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 450636
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=450636
- Relevance: DWEC


---

## DANIEL MARCELO LLACER — 2026-10-22 13:19  (reply to Nombre de respostes: 0)

*Post 614957, depth 0, subject: dwec1: git no excuses, oritentaicón. Ejercicio para practicar código y commits.*

Hola:

En cuanto pueda os paso pinta del principio del enunciado de ejercicio de  examen, y mi decicisión sobre si habrá más (parte previa "sobre teoría"), y decisión sobre la fecha de examen. Será ya mañana como pronto. Vosotros, id haciendo marcha con lo que pongo aquí.

####### **Git no excuses**

Tal y como pedí ayer, leed la parte que más os afectará del git no excuses, es decir el apartado 5.

Pequeña guía de lectura con algún comentario:

- 5.1 Diff and log before commiting:

  - Comento ahí lo que hay que hacer desde el terminal (y usando unos alias que he creado al inicio del documento)...

  - Pero en vscode esto es super inmediato. **Antes de hacer commit**:

    - En vez de un "git status" y un "git diff":

      - La lista de ficheros que entran nuevos o modificados está en el panel de Git: ves qué ficheros son, y pinchas en cada uno para ver qué cambios concretos meten (las diferencias de dentro del fichero respecto a lo comiteado se resaltan visualmente)

      -  Con eso te haces una idea de lo que está entrando en ese commit (para darle título apropiado).

    - En vez de un "git log":

      - El log de mensajes (títulos) de commits hasta ahora está todo el rato visible en el panel de Git.

      - Echas ahí ojo para que** tu mensaje nuevo sea** **consistente** con mensajes anteriores.

- 5.2 Aimed or atomic commits

  - Leedlo. Es media vida.

  - Ni siquiera es que fluyes con tus vibras cambiando cosas y luego las resumes (apoyado por el punto 5.1).

  - En vez de eso, cuando escribes la primera letra desde un estado guardado (comiteado), lo haces con un propósito. Incluso puedes tener preparado ya al empezar el mensaje (provisional) de commit que tendrá (vscode te deja escribirlo en el cuadro, y se acuerde de ello para cuando mucho más adelante lo quieras enviar).

  - Y antes de enviar, usas el 5.1 para verificar rápidamente que no sobra o falta nada, y para ser consistente con mensajes anteriores. Esto cuesta mucho menos si ibas con intención previa.

- 5.3 Commit messages advices

  - No lo comenté en detalle por falta de tiempo, pero leedlo en detalle.

  - Hay cosas ahí con las que cuento, enfatizo un par:

    - No se pone punto al final del mensaje.

    - Pide mayúscula inicial, pero nosotros **NO**. Con conventional commits se empieza con etiqueta, dos puntos espacio, y luego minúscula. Eso gana.

    - Longitud título: no usamos cuerpo, y relajamos el límite 50/72 si lo necesitamos... aunque intentamos poner al principio las palabras más clave (en general, y más en caso de pasarnos de largos).

    - Explico más aquí lo del "imperative mood" en el título, es decir, el modo imperativo. No es indicativo, no es pasado, no es gerundio. Es imperativo segunda persona, como si fuera la orden que le das a alguien, y se supone que el commit refleja el resultado de esa orden.

      - Ejemplo inglés: "**add** thing" (imperativo 2ª persona), y no "add**s **thing" (indicativo 3ª persona) o "add**ed** thing" (participio pasado) o "add**ing** thing" (gerundio). Hay veces que podría no haber verbo y quedar bastante clara la cosa con decir "thing". Aunque que haya una orden con un verbo digamos que es mejor.

      - En español: "**añade** cosa". En español es más difícil identificarlo: en muchos verbos se confunde el imperativo 2ª persona con el indicativo 3ª persona, como es este caso: tiene que ser "**añade (tú)** cosa" frente a "**añade (él)** cosa" o "**añado (yo)** cosa". Cuando no es igual, se ve más claro: sería "**haz** cosa" y no "**hace** cosa". Y, aparte, nada de pasado/participio "añad**ida** cosa", ni gerundio "añad**iendo** cosa".

-  5.4 Software versions. SemVer

  - Mega importante para vuestro entendimiento y cultura, aunque no afecta directamente a examen (salvo que pregunte algo de teoría/comprensión al respecto).

  - Leedlo, con amor. Preguntad si no os aclaráis con algo.

- 5.5 Conventional Commits

  - Esencial para el examen. Lo usamos, y la "extensión Angular", pero sin cuerpos en los mensajes, solo título.

- 5.6 (resumen)

  - Leedlo.

####### **Ejercicio ampliación del loop3 del [dwec1p3](https://aules.edu.gva.es/fp/mod/assign/view.php?id=11755389) **

Tras mostrar la solución típica a la que aboca el enunciado, con un separador final, comenté que pensarais (más bien pensar y codificar) cómo evitar el último separador (que no es separador realmente).

Y luego que pensarais (codificarais) cómo hacer que sea como cuando escribes en español o inglés: el separador es coma espacio, pero antes del último elemento hay un "y" o un "and" (depende del idioma) y acabas con punto.

Sugiero aprovecharlo también como ejercicio de decidir los mensajes de esos commits usando Conventional commits y todo lo explicado.

Respondiendo a la pregunta de Anes de si pido cosas de idea feliz, esto sería un ejemplo de algo preguntable en un examen perfectamente, y que no lo considero de idea feliz.

Lo corregiremos el martes que viene.

Cuando lo hayáis implementado (o intentado implementar y logrado lo que hayáis logrado), leed lo que escribo ahora más abajo. No lo leáis antes.

**SPOILER ALERT:** implementa lo que he pedido antes de leer lo que sigue (dejo espacio para que no te haga spoiler)

.

.

.

.

.

.

.

.

.

.

.

.

.

La implementación típica de esto hace, dentro del cuerpo del bucle, excepción/excepciones con el último o dos últimos elementos (con ifs o similares). O bien la guarda del bucle acaba antes para no incluir las excepciones (ser igual para todos) y, tras él, se tratan las excepciones del final.

Pero eso implica un conocimiento apriori de cuáles son los últimos elementos. En el caso de sacar primos, sabemos que el último es 2 y que el penúltimo es 3... Pero es un conocimiento a priori que es "trampa" para un caso general. ¿Qué pasaría si la función isPrime() no fuera tan predecible como para que sepamos los dos últimos que van a dar "true". Que lo mismo los dos últimos (de barrer 500 a 1) que dieran true fueran el 27 y el 15. U otros dos, pero no sabemos cuáles. O que dependen de cosas que precisamente es el loop que hace el trabajo de determinarlas. Pongamos que estamos buscando en una lista cualquiera de personas para mostrar al usuario, al estilo frase normal, la sublista de las que contengan la letra "a" en su nombre.

¿Cómo podemos solucionar el bucle para que funcione en ese caso genérico?

Respondiendo de nuevo a Anes con un ejemplo, este sería un ejemplo de algo que considero un poco (¿bastante?) más de idea feliz.

Aún así, podría estar haciendo que una parte de la nota fuera para quien lograra hacerlo (obviamente, solo una parte no demasiado grande, o muy grande pero "extra": no tengo ningún interés en que suspenda un examen alguien solo porque ese día no tuvo una idea feliz).

Obviamente, una vez se ve la corrección de eso (el martes), si pregunto por algo similar a esto en un examen **ya no es de idea feliz**. Habremos visto en clase la respuesta de la "adivinanza" concreta, y cuento con que ya la sabéis. Un montón de cosas que sabéis son realmente de idea feliz, solo que el profe os ha dado antes la respuesta, y entonces es más mecánico. Pero se os va a pagar posiblemente ahora sobre todo por ideas felices (porque las cosas mecánicas ya sabéis quién las hace a toda pastilla, y a menudo mejor que nosotros).

Un saludo,  
Dani

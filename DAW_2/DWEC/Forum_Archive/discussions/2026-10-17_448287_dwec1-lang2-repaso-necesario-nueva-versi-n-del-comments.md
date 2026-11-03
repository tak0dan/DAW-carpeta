# dwec1: lang2: repaso necesario, nueva versión del "comments"

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 448287
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=448287
- Relevance: DWEC


---

## DANIEL MARCELO LLACER — 2026-10-17 11:55  (reply to Nombre de respostes: 0)

*Post 612124, depth 0, subject: dwec1: lang2: repaso necesario, nueva versión del "comments"*

Hola:

Fact: esta semana han salido muchos aspectos explicados por escrito en el LANG2+danim-comments... Y se ha visto que los conocíais o entendíais regulinchis (eufemismo de: ni os sonaba su existencia).

Veo absolutamente pertinente que lo repaséis.

Son un aviso de que habéis estudiado esto demasiado ligeramente, y de mucho (me refiero a los que lo han leído al menos... si hay alguno que siquiera ha leído ciertas cosas, ya sabe por dónde tenía que empezar).

He revisado mi documento de comments del LANG2 y os resalto las zonas que han salido esta semana y os exhorto a repasar. Al remirarlo yo (de nuevo, por segunda vez este curso, ya solo este curso os gano a muchos), no he podido evitar la tentación añadir alguna explicación aclaratoria, así que he generado y os he publicado en dwec-shared un ".new":

jsinfo-lang-2-fundamentals-comments**.new**.md

(los cambios **solo están** en zonas que os exhorto aquí a releer).

Lista de zonas a repasar (en negrita el texto literal a buscar visualmente, o más rápido con control+F):

- **t: Single shared global scope by default:**  
"Descubristeis" bastante esto el otro día... Quizás al leerlo no teníais claro el concepto de "scope" y de "global scope". Ahora se entenderá mejor al repasarlo. 

- **t: Statement vs expression:**  
Hemos machacado esto bastante, y nos va a machacar todo el curso... Sugiero no solo leer mi comment, sino entrar al enlace que os pongo ahí de [short and gentle introduction to statements vs. expressions in JS](https://www.joshwcomeau.com/javascript/statements-vs-expressions/). Porque yo os he resumido en mi doc los takeaways, pero leerlo os hará empaparlo mejor (y es corto). Como veréis en ese tutorial, tiene implicaciones importantes en el uso de React (aunque ahora esa sección os la podéis saltar).  
Aparte, he añadido al final de mi comentario un "warning" que no he dicho en clase pero que os vendrá muy bien.

- 

**t: Shared global scope (including the console) and order test**  
Relacionado con el comentario de arriba sobre global scope... He reescrito y detallado este comentario para explicarme mejor.

- **Functional languages**  
Esa sección, incluido mi comentario... La manera moderna de uso de JS (y especialmente en frontend frameworks tipo React y compañía) es al estilo functional.

- **t: Other JS literals**  
El otro día cuando usé el concepto "JS literals", en la cabeza más que tilín os hizo cri-cri-cri.

- 

**t: null or undefined?**  
Os costó horrores sacar a estos dos cuando pedí entre todos sacar la lista de tipos de dato en JS. Y no digamos decirme el matiz entre ellos dos.

- **2.7 Type Conversions**  
Lo que yo llamo cohertion o cast (implícitos y explícitos). En esto habéis flaqueado mucho, y es de las cosas a más controlar porque es de las que más muerden en JS. Repasad ese artículo entero y mis comentarios, no os sobrará nada.

- **Operator precedence**  
Machaqué bastante esto, es también de vida o muerte. Repasadlo todo y mis comentarios, y la tabla de MDN y mi síntesis de la tabla que va tras la tabla... Con las explicaciones del miércoles, ahora espero que entendáis de qué está hablando. Si no se entendía antes, ¿cómo es que no ha habido preguntas? ¿O tengo que pensar que ni se entendía que no se entendía? Tenéis que despertar más vuestro autocrítica de "¿estoy realmente entendiendo lo que leo?", y reaccionar acórdemente.

- **Non-traditional use of '?'**  
A Luis Miguel según iba yo hablando del ternary, y de statements vs expressions, le salió la duda de si se podía usar el ternary como un "if". Estaba explicado aquí... Si a él se le pasó, asumo que a muchos otros también.

- 

**A function with an empty return or without it returns undefined**  
Esto no estaba antes extraído en el doc de comments pero lo he añadido para enfatizarlo. No teníais ni idea de ello, y es esencial. Como corolario importante, he añadido nuevo después el siguiente comentario, que expliqué en clase:

- **t: 3 main kinds of functions**  
Según si solo devuelve algo, solo hace algo en el exterior sin devolver, o ambos. Lo explico con ejemplos de código. Es esencial.

**Conclusiones:**

- En una abundante cantidad de cuestiones sobre conocimiento de JS del LANG2 que he intercalado durante las correcciones, a una mayoría de vosotros (si no a la unanimidad) ni os suenan... pese a haberlo supuestamente preparado. Ni cuento aquí con que hayáis hecho JS un trimestre el curso pasado (y que lo habéis aprobado): me ciño a este curso, lo trabajado en menos de 4 semanas que llevamos con JS. Las cosas que han salido, os sugiero repasarlas y apunto dónde (porque mi explicación de clase ha sido al parecer solo vuestra primera aproximación a ellas: eso **no** es suficiente).

- Es más: extrapolando, en el resto de cosas del LANG2 que no hayan "surgido" por lo que sea estas semanas en clase, la lógica es que tengáis lagunillas (u oceanotes) similares. Así que puede ser (muy) pertinente repasar **todo** el LANG2 proactivamente. Cuanto más interioricéis, más os cundirán las clases presenciales.

- Extrapolando, también asumo que en LANG1 y LANG3 ha pasado algo similar. Son menos críticos en lo que va a ser la práctica del examen... Aún así, no pasaría nada por revisarlos de nuevo (una vez revisado LANG2, el crítico). 

- Que tengáis en examen el libro+comments+chuleta infinita es engañosamente tentador. Si no tenéis el conocimiento más interiorizado, JS va a ser marciano, incotrolable, doloroso, frustrante, desagradable. Toca interiorizar más... Llamadlo leer con más atención, hacer resumen, repasar, autocuetionarse chequeando que se entiende, preguntar lo que no se entiende, incluso, oh palabra prohibida, memorizar (memorizar entendiendo, porque si no, no funcionará). Vaya: estudiar, o estudiar más. Puede que no se estile mucho, pero va a ser necesario más de eso por vuestra parte.

- Lo digo con total bondad, comprensión y empatía. Es normal, comprensible y habitual esto que os pasa en mi asignatura... Pero ya os ha quedado manifiesto: no miréis para otro lado, no esperéis al examen. En enseñanzas superiores (GS DAW es una de ellas), se presupone capacidad de estudiar autónomamente. Hay materias-profesores en los que resulta no ser necesario. Fenomenal, qué suerte. En otras (DWEC-Dani M.) es más necesario. Si aún no habéis aprendido alguno a estudiar autonomamente lo que se os indica (me lo creo), tocará ponerse, aunque sea solo para esta asignatura (qué suerte: solo para esta).

  - Recuerdo1: no os pido conocer el infinito, ni toda la informática, ni toda la programación, ni todo JS. Solo lo explicado en lo que os paso, que es algo brutalmente reducido y acotadísimo.

  - Recuerdo2: si necesitáis ayuda, aparte del foro y preguntas en clase, podéis **usar una IA que no disperse** (que se ciña a algo que le pasas) y obviamente solo para **haceros trabajar a vosotros **(para poneros a prueba) o **para explicar lo que no entedáis.**.

    - Vuelvo a sugerir NotebookLM de Google.

    - La alimentáis con **solo lo que os paso (jsinfo + mis docs), **y le pedís que os haga preguntas, cuestiones, ejercicios que **pongan** **en prueba vuestra** **comprensión, pero las pedís ceñidas a esos documentos** **y a solo lo abordado hasta ese momento**.

    - Por ejemplo, en el momento actual, el prompt podría ser (podéis copiar/pegar):

*Cíñete a lo que hemos abordado hasta ahora de jsinfo: LANG1+LANG2+LANG3+LANG5.2+LANG5.4.*  
*[Añadís aquí vuestra petición concreta]*

- 

  - 

    - Gracias a mi documento de presentación "jsinfo-readme-first.md" que le habéis pasado con el resto, él entenderá (como espero que vosotros) qué es jsinfo o LANG5.2. Y sabrá que mis comentarios complementan el documento teniendo ellos la última palabra.

- Nota1: Puedo esperar de vosotros que estudiéis más porque, aparte de la optativa de la nube, de facto no tenéis más asignaturas este año que os requieran algo (y, probablemente, en las que aprendáis algo... una cosa no va sin la otra). ¿Qué mejor uso de vuestro tiempo para una profesión de desarrollador Web que mejorar vuestro -aún embrionario- JS? O, en todo caso, es lo que espero de vosotros para esta asignatura y es lo que evaluaré.

- Nota2: Con retrospectiva, no ha sido una buena idea este curso de quitar la parte de examen en papel de comprensión de código. Lo reincorporaré para el curso que viene. En este curso, me tendré que aguantar. Pero no os engañéis, seguís necesitando interiorizar JS mucho más que lo que he visto esta semana. ¡Ánimo! Lo hacéis por vosotros.

Un saludo,  
Dani

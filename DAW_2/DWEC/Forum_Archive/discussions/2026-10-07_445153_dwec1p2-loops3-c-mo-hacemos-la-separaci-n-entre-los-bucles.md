# dwec1p2: loops3, ¿cómo hacemos la separación entre los bucles?

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 445153
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=445153
- Relevance: DWEC


---

## SARA LÓPEZ GUERRERO — 2026-10-07 03:03  (reply to Nombre de respostes: 3)

*Post 608136, depth 0, subject: dwec1p2: loops3, ¿cómo hacemos la separación entre los bucles?*

Buenas noches.

Estoy en el último ejercicio y estoy teniendo problemas a la hora de hacer una separación NewLine entre los bucles, tal y como se indica en el enunciado: 

*"Do the loop three times using three different types of loop with equivalent result (of showing the specified primes). There will be a newline separation between the text printed by each loop."*

El clásico "\n" no funciona, y la alternativa que he encontrado requiere cambiar una parte del código que en principio no debería tocar.

¿Hay alguna forma de hacerlo sin cambiar nada fuera del script?

Gracias de antemano.


---

## DANIEL MARCELO LLACER — 2026-10-07 11:12  (reply to SARA LÓPEZ GUERRERO)

*Post 608267, depth 1, subject: dwec1p2: loops3, ¿cómo hacemos la separación entre los bucles?*

Hola, Sara:

Muy buen título.

Dices:

"El clásico "\n" no funciona"

No entiendo porqué dices no. Micro demo en la consola:

![image.png](https://aules.edu.gva.es/fp/pluginfile.php/13593487/mod_forum/post/608267/image.png)

Veremos la corrección y nos cuentas ahí cuál era tu solución (he de reconocer que esta parte es un cambio de este curso, y tengo pendiente de hacer la corrección, aunque ahora, sin ver el código del ejercicio, no se me ocurre cómo lo pensabas hacer... ya nos lo dirás).

En todo caso, poner disclaimers de lo que hagas (sea lo que decidas hacer) son tus amigos.

Hablando de disclaimers, ¿en qué momento han explicado en jsinfo lo que dices "del clásico \n"... No es algo universal (aunque resulte funcionar en Java y JavaScript). Ahí lo dejo.

Un saludo,  
Dani


---

## LUIS MIGUEL NOGUERA GUIJARRO — 2026-10-07 11:37  (reply to DANIEL MARCELO LLACER)

*Post 608294, depth 2, subject: dwec1p2: loops3, ¿cómo hacemos la separación entre los bucles?*

El problema es que el ejercicio no se imprime en un console.log sino se hace un create element de p y se añade dentro de el para que aparezca por pantalla.  

  

p no admite saltos de linea en html si no lo fuerzas con .style.whiteSpace = 'pre-line' pero eso hay que ponerlo cuando se crea y tenemos que editar codigo que no tenemos que tocar. Yo al final lo puse con un comentario.


---

## DANIEL MARCELO LLACER — 2026-10-07 14:15  (reply to LUIS MIGUEL NOGUERA GUIJARRO)

*Post 608454, depth 3, subject: dwec1p2: loops3, ¿cómo hacemos la separación entre los bucles?*

Gracias por comentar, Luis Miguel:

Toditita la razón, y he respondido por encima de mis posibilidades, demasiado rápido. Es muy interesante el hecho de que, por no haberlo hecho yo (e incluso sabiendo algunas-bastantes cosas de JS), no he podido ni preverlo, ni contestar bien cuando se me ha planteado el problema.

Entendiendo ya esto (y sin mirar el código aún, que no tengo margen), ya me puede encajar que Sara pudiera tener la necesidad de tocar código fuera.

Forzar el .style.whiteSpace está totalmente fuera de scope de lo que hemos abordado hasta ahora, y aparte no sería en ningún caso una solución elegante (por cierto, estaría bien comentar si ha sido inspiración propia o divInA esa solución que propones). Es muy posible que el enunciado sea irresoluble como está planteado y aún más con las restricciones. O, como poquísimo, beyond el scope de lo que pretendía al ponerlo. Un ejemplo en el que toca tomar decisión razonable argumentada de compromiso, y comentarla en código. Y, por supuesto, comentarlo en el foro. Entiendo que el foro solo se ha puesto trending desde ayer (no se me ocurre porqué). Pero recuerdo que lleváis una semana para estos ejercicios... En siguiente ocasión, si el foro sigue trending, un pelín de antelación, mejor. De todas formas, nunca es tarde si la dicha es buena. 

La reflexión siguiente me aplica a mí, pero en algún momento seguro que a vosotros: en programación hay cosas (muchas) que o las pruebas y las miras y ves lo que pasa, o "pensando"/programando a ciegas, es mil veces más difícil y poco efectivo. Programando no hay nada que sustituya el feedback loop de probar las cosas, cuanto antes. Lo digo por alumnos que en exámenes lo acaban escribiendo todo el código sin probarlo en ningún momento (o resignándose porque el principio no les funciona por algo, y así asumen las 3 horas del examen que no van a poder probar nada).

Lo veremos en directo en la corrección en breves momentos.

¡Buen trabajo!

Un saludo,  
Dani

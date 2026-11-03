# dwec: creación html, ¿uso "feat" en el commit?

- Forum: General (dudas y colaboración) — DWEC
- Discussion id: 453133
- Source: https://aules.edu.gva.es/fp/mod/forum/discuss.php?d=453133
- Relevance: DWEC


---

## LUIS MIGUEL NOGUERA GUIJARRO — 2026-10-29 18:09  (reply to Nombre de respostes: 1)

*Post 618321, depth 0, subject: dwec: creación html, ¿uso "feat" en el commit?*

Buenas tardes,

Estaba comenzando el proyecto intermodular (de nuevo) y quería saber si al crear código html como un header común o algo así, si, a pesar de no ser una funcionalidad, debería hacer "feat:" o usar otro tipo de commit.  
  
Es para llevar un mejor orden en el control de versiones.

Gracias de antemano.


---

## DANIEL MARCELO LLACER — 2026-10-30 09:05  (reply to LUIS MIGUEL NOGUERA GUIJARRO)

*Post 618562, depth 1, subject: dwec: creación html, ¿uso "feat" en el commit?*

Hola, Luis Miguel:

Es una funcionalidad... Birriosilla, pero funcionalidad. Sales de 0, no hay nada, y cuando tienes un html inicial... Pues hay un html inicial con algo dentro. Y si está vacío, ponle "Hello", y ya tienes una funcionalidad, que es haber logrado un hello world. Os olvidáis ya, pero el hello world es un primer hito. Y con algunas tecnologías (cierto, no html), el solo lograr el hello world ya es un pequeño éxito.

Para cuando no sepáis qué poner como etiqueta Conv. Commits, podéis también pensar por eliminación. De entre las dos clave (feat y fix) y las secundarias (las que añade el proyecto Angular), ¿cuál aplica? ¿Qué candidatos tendríamos aquí? Pues solo feat. Porque p.ej. docs no aplica (tu html tiene algo visible, no solo comentarios). Revisáis la lista de etiquetas, veis candidatos, y elegís el que más aplique dentro de lo que hay.

Un saludo,  
Dani

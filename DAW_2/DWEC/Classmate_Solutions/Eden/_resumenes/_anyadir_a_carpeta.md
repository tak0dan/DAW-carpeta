

# El día del examen nos deja llevar apuntes impresos

Por ello anoto aquí cosas que quiero imprimir y añadir a la carpeta que me llevaré al examen. 





###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
#




# POR IMPRIMIR Y AÑADIR A LA CARPETA ______________________________________________________________________


## COLUMNAS E INDENT _________________________________________________________________________

- En el examen antes de empezar he de modificar estos ajustes de VS Code:


1) Añadir una *barra* vertical a la altura de la *columna* número *80*. 

  - ¿Por qué? Porque nos ha dicho que si nuestro código supera las 80 columnas nos restará nota. 

  - *Settings -> escribe "ruler" -> "Editor: rulers" -> "Edit in settings.json"*.
  
    -  Te lo abre y solo has de escribir 80 dentro de los "[]".

      - Cuando ya haya acabado el curso cambiaré ese valor a 100.


2) Que tu indent sea de 2 espacios y no de 4.

  - Nos ha dicho que nuestro código debe ser de indent = 2. 

  - *Settings -> busca "Tab size" -> ponlo a 2.*

    - El *"Editor: Indent Size" tiene por defecto como valor el "Tab Size"* así que habiéndolo cambiado en "Tab Size" ya es suficiente. 

  - Si quieres cambiarlo en un archivo que ya tienes abierto y cuyo indent es de 4 en lugar de 2:

    - En la *barra inferior* de la ventana de vs code, en la parte de la derecha clica en *"Spaces: 4"* -> *"Indent Using Spaces"* -> ponlo en "2".






## TO FIX y TO DO ---------------------------------------------------------------------------

1) Dani nos ha indicado que valora positivamente en el examen que cuando encontramos un error en nuestro código y no nos da tiempo a resolverlo dejemos un comentario explicando el error (qué lo provoca).

  - Es una forma de demostrar que pese a que no hemos logrado resolver el error sí sabemos qué es lo que lo está provocando. 

  - Importante: que dicho comentario empiece por: "TO FIX". 


2) Del mismo modo, cuando el enunciado pide que implementemos un detalle que no sabemos hacer, Dani valora positivamente que dejemos un comentario explicándolo que empiece por "TO DO". 








## USO DE Git __________________________________________________________________________


### Reglas de formato del texto de los commits ---------------------------------------------

1) Si se trata de una funcionalidad nueva debe empezar por `feat:`

  feat: initial from original conditionals2 (#1)

2) Si se trata de arreglar un error debe empezar por `fix:`

  fix: pass UT number X (#3.1)


3) Si se trata de un refactor debe empezar por `refactor:`

  refactor: move code to function and external file (#2)


4) Si se trata de un revert debe empezar por `revert:`


5) Si se trata de un test debe empezar por `test:`

  test: complete autoverified UT's. Fails: 5 (#5)


6) Si se trata solo de cambios en los comentarios debe empezar por `docs:`


7) Si se trata de cambios en la indentación debe empezar por `style:`









### No mezcles más de 1 cosa en un commit -----------------------------------------------

En el examen no lo cumpliremos, pero de cara a nuestra inserción laboral si que es importante que cojamos el habito de hacer commit de las mínimas unidades testeables. 

Es algo importante de cara a:

  - Poder hacer reverts.

  - Claridad de los commits (1 tema por commit).


En el EXAMEN simplemente nos dirá: "Como mínimo haz 1 commit al final de cada apartado". 







### "En el examen no voy a pediros hacer ningún "revert" ---------------------------------------------






###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
###################################################################################################
#








# YA IMPRESO Y AÑADIDO A LA CARPETA _________________________________________________________________________













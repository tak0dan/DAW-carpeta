

En la clase de hoy nos manda hacer los ejercicios del final del Tema 2 del libro. 


EJERCICIOS DEL FINAL DEL TEMA 2 DEL LIBRO 



# EJERCICIO 1 __________________________________________________________________________________


## ENUNCIADO -----------------------------------------------------------------------------------

Cree un fichero que contenga las etiquetas HTML mínimas para mostrar un mensaje de texto (<html>, <head>, <title> y <body>) y guárdelo con extensión PHP. Posiciónelo en el directorio correspondiente del servidor web. A continuación escriba una sentencia echo o print que permita mostrar por pantalla el mensaje “Este es el resultado correcto del primer ejercicio”. Abra un navegador y compruebe el resultado. Si obtiene una página en blanco, verifique que ha utilizado las etiquetas de apertura y cierre de PHP correctamente y que la sentencia que ha escrito termina en “;”.



## APRENDIZAJE ----------------------------------------------------------------------------------

- Aquí aprendes la mecánica básica:

1) Que un archivo PHP *puede contener HTML + PHP*.

2) Las etiquetas *<?php ... ?>*.

3) echo / print.

4) El ; como terminador de instrucciones.

5) Dónde colocar el archivo para que lo procese el servidor web.

6) Que PHP no se ejecuta simplemente abriendo el archivo, sino que tiene que pasar por un servidor como Apache.

7) Ver el resultado desde el navegador.


- Es un ejercicio sencillo, pero introduce una idea fundamental de desarrollo web: el navegador recibe el resultado generado por el servidor, no necesariamente el código PHP original.





########################################################################################################
########################################################################################################
########################################################################################################



## SOLUCIÓN (profesor) -----------------------------------------------------------------------------

```php
<html>
    <head>
        <title>
            Ejercicio 1: Mostrar texto en un navegador
        </title>
    </head>
    <body>
        <?php
            echo "Este es el resultado correcto del primer ejercicio";
        ?>
    </body>
</html>

# No contiene errores, es solo que el Markdown de VS Code se lia cuando una etiqueta se parte por la mitad y se reparte en dos líneas. 

```









# EJERCICIO 2 __________________________________________________________________________________

## ENUNCIADO ----------------------------------------------------------------------------------------

Cree un fichero PHP que muestre por pantalla el mensaje “Segundo ejercicio: visualización del contenido de variables”. A continuación, defina dos variables $nombre y $edad y asígnales un valor correcto. Después, cree una sentencia que muestre un mensaje que contenga dichas variables, similar a “Mi nombre es: valor_de_la_variable_$nombre y mi edad es valor_de_la_variable_$edad”. Inserte un comentario encima de cada variable explicando el significado del valor que almacenará cada variable.



## APRENDIZAJE ----------------------------------------------------------------------------------

- Aquí empieza realmente el aprendizaje del lenguaje:

1) Crear *variables*: $nombre, $edad.
2) Asignar valores.
3) Utilizar variables *dentro de echo*.
4) Entender que las variables de PHP llevan *$*.
5) Combinar texto y datos dinámicos.
6) *Comentarios*.
7) Diferenciar entre el nombre de una variable y el valor que contiene.


- Aunque parezca trivial, esta es la base de prácticamente cualquier programa: guardar información y utilizarla posteriormente.






## SOLUCIÓN (profe) ----------------------------------------------------------------------------

```php
<html>
    <head>
        <title>
        Ejercicio 2: Uso de variables y comentarios
        </title>
    </head>
    <body>
    <?php
        echo "Segundo ejercicio: visualizacion del contenido de variables <br/>";
        // Esta variable almacenará el nombre del alumno
        $nombre = "Juan Pehachepe";
        // Esta variable almacenará la edad del alumno
        $edad = "30";
        echo "Mi nombre es: $nombre y mi edad es $edad.<br/>";
    ?>
    </body>
</html>

# No contiene errores, es solo que el Markdown de VS Code se lia cuando una etiqueta se parte por la mitad y se reparte en dos líneas. 

```









########################################################################################################
########################################################################################################
########################################################################################################














# EJERCICIO 3 ________________________________________________________________________________________

## ENUNCIADO ----------------------------------------------------------------------------------------

Cree un fichero PHP que permita comprobar las capacidades aritméticas de PHP. Para ello, cree dos variables $operador1 y $operador2. Asígnele los valores 13 y 4, respectivamente. Defina una tercera variable $resultado y escriba un código que permita hacer las siguientes operaciones:

            13 – 4

            13 + 4

            13 * 4

            13 / 4

            13 % 4





## APRENDIZAJE ----------------------------------------------------------------------------------

- Este ya introduce una parte importante de la sintaxis:

1) Operador de *suma* +.
2) *Resta* -.
3) *Multiplicación* *.
4) *División* /.
5) *Módulo* %.
6) Variables como operandos.
7) *Guardar* el resultado en otra variable.

- Especialmente interesante es %, porque luego aparece muchísimo en programación:






## SOLUCIÓN (profe) ---------------------------------------------------------------------------------

```php

<html>
    <head>
        <title>
            Ejercicio 3: Capacidades aritmeticas
        </title>
    </head>
    <body>
        <?php
            $operador1 = 13;
            $operador2 = 4;

            print "Suma: <br/>";
            $resultado = $operador1 + $operador2;
            echo "$operador1 + $operador2 = $resultado<br/>";
            print "Resta: <br/>";
            $resultado = $operador1 - $operador2;
            echo "$operador1 - $operador2 = $resultado<br/>";
            print "Multiplicaci&oacuten: <br/>";
            $resultado = $operador1 * $operador2;
            echo "$operador1 * $operador2 = $resultado<br/>";
            print "Divisi&oacuten entera: <br/>";
            $resultado = $operador1 / $operador2;
            echo "$operador1 / $operador2 = $resultado<br/>";
            print "Resto(m&oacutedulo) de la divisi&oacuten entera: <br/>";
            $resultado = $operador1 % $operador2;
            echo "$operador1 % $operador2 = $resultado<br/>";
        ?>
    </body>
</html>


```



########################################################################################################
########################################################################################################
########################################################################################################












# EJERCICIO 4 ________________________________________________________________________________________

## ENUNCIADO -----------------------------------------------------------------------------------------

1. Cree un fichero de PHP que permita conocer toda la información de una variable (utiliza la función var_dump()), de tal forma que pueda obtener una salida por pantalla similar a la siguiente:

    Información de la variable “nombre”:
    string (4) “Juan”
    Contenido de la variable: Juan
    Después de asignarle un valor nulo: NULL



## APRENDIZAJE ----------------------------------------------------------------------------------

- "var_dump()" te permite inspeccionar una variable y ver información sobre ella:

```php

$name = "Juan";

var_dump($name);

# puedes observar cosas como: string(4) "Juan"

# Y luego comprobar qué ocurre cuando haces: $name = null;


```






## SOLUCION (profe) ----------------------------------------------------------------------------------

```php

<html>
    <head>
        <title>
            Ejercicio 4: Creación y destruccion de
            variables
        </title>
    </head>
    <body>
        <?php
            $nombre = "Juan";
            echo "Informacion de la variable \$nombre: <br/>".var_dump($nombre);
            echo "Contenido de la variable: $nombre <br/>";
            $nombre = null;
            echo "Despues de asignarle un valor nulo: <br/>";
            echo var_dump($nombre);
            echo "Contenido de la variable: $nombre <br/>";;
        ?>
    </body>
</html>



```


########################################################################################################
########################################################################################################
########################################################################################################












# EJERCICIO 5 __________________________________________________________________________

## ENUNCIADO --------------------------------------------------------------------------------------

1. Cree un fichero PHP en el que se asignen los siguientes valores, de forma consecutiva, a una variable$temporal: “Juan”, 3.14, false, 3, null. Muestre por pantalla el tipo que se le asigna a la variable utilizando la función gettype()después de cada asignación.




## APRENDIZAJE --------------------------------------------------------------------------------------

- Este probablemente es el que tiene más contenido conceptual de los cinco.

La misma variable:

    $temporal

va recibiendo:

    "Juan"
    3.14
    false
    3
    null

Y después de cada asignación compruebas el tipo.


Esto te permite *descubrir experimentalmente que PHP es un lenguaje de tipado dinámico*.

La variable no queda fijada para siempre como string, float, bool, etc. Puede contener un tipo de valor y posteriormente otro:

    $temporal = "Juan";   // string
    $temporal = 3.14;    // float
    $temporal = false;   // bool
    $temporal = 3;       // integer
    $temporal = null;    // NULL

Y *gettype()* te permite preguntarle a PHP qué tipo tiene actualmente.




## SOLUCIÓN (profe) ---------------------------------------------------------------------------

```php
<html>
    <head>
        <title>Ejercicio 5: Tipos de datos</title>
    </head>
    <body>
        <?php
            $temporal = "Juan";
            echo "El tipo de la variable \$temporal con valor $temporal es: ".gettype($temporal).".<br/>\n";
            $temporal = 3.14;
            echo "El tipo de la variable \$temporal con valor $temporal es: ".gettype($temporal).".<br/>\n";
            $temporal = false;
            echo "El tipo de la variable \$temporal con valor $temporal es: ".gettype($temporal).".<br/>\n";
            $temporal = 3;
            echo "El tipo de la variable \$temporal con valor $temporal es: ".gettype($temporal).".<br/>\n";
            $temporal = null;
            echo "El tipo de la variable \$temporal con valor $temporal es: ".gettype($temporal).".<br/>\n";
        ?>
    </body>
</html>


```

















# VALORACIÓN GLOBAL _______________________________________________________________________

1) Hay una cosa especialmente interesante teniendo en cuenta que vienes de Java: 

    1. Estos ejercicios están haciendo que veas qué cambia cuando pasas de un lenguaje fuertemente tipado como Java a uno *dinámicamente tipado como PHP*. 
    
        1. El ejercicio 5, aunque parezca el más tonto, está precisamente poniendo esa diferencia delante de ti de una forma muy directa.








#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
# 


# EJERCICIOS TIPO TEST DEL FINAL DEL TEMA 2 __________________________________________________________________________


## SOLUCIONES ---------------------------------------------------------------------------------------------------

1) a.

2) c.

3) c.

4) b -> 13.5
    - Operadores de la misma prioridad lo lee de izquierda a derecha. 

5) c -> Float. 


















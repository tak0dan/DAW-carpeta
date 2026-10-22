
Realizamos uno de los ejercicios de la página 256 del libro de texto. 


# ENUNCIADO ----------------------------------------------------------------

Genere una *librería de funciones* en PHP que contenga la *cabecera* y el *menú* de una *secuencia de 6 páginas*. Añada en cada página un *texto* que la identifique con un *número*. Cree una serie de *enlaces* que le permitan redirigirse a las otras 5 páginas de forma directa.





# ACLARANDO IDEAS CLAVE NECESARIAS --------------------------------------------

## Mostrar contenido HTML desde PHP usando echo

Con echo podemos escribir texto desde PHP que el navegador interpretará como HTML.

```php
<?php
echo "<h1>Mi sitio web</h1>";
echo "<hr>";
?>

```

El navegador recibe el HTML generado por PHP y lo representa como una página web.

Por ejemplo, echo "<h1>Mi sitio web</h1>"; genera un encabezado de nivel 1.

Truco: las etiquetas HTML se escriben dentro de una cadena de texto, entre comillas. 

En PHP, cada instrucción termina con ;.




## Crear funciones para reutilizar código 

Una función permite agrupar instrucciones bajo un nombre para ejecutarlas cuando las necesitemos.

```php
<?php
function cabecera() {
    echo "<h1>Mi sitio web</h1>";
    echo "<hr>";
}
?>

```

Aquí estamos definiendo una función llamada cabecera. Su contenido no se ejecuta por el simple hecho de definirla: se ejecuta cuando la llamamos.

```php
include("funciones.php");
cabecera();

```

Truco: si una parte del código se repite en varias páginas, podemos convertirla en una función y reutilizarla.



## include

Incorporar una librería PHP

La instrucción include permite incorporar el contenido de otro archivo PHP.


```php
<?php
include("funciones.php");

cabecera();
menu();
?>

```

Primero incluimos funciones.php, donde están definidas las funciones. Después podemos llamarlas desde la página actual.

Truco: no necesitamos copiar las funciones en cada archivo. Basta con incluir la librería para poder utilizarlas.

Esto es especialmente útil cuando tenemos elementos comunes, como cabeceras, menús o pies de página.





## Los enlaces HTML permiten navegar entre páginas

```php
<a href="pagina1.php">Página 1</a>
<a href="pagina2.php">Página 2</a>

```

href indica la dirección del destino.

El texto entre las etiquetas es lo que verá el usuario y podrá pulsar.

Truco: los enlaces no necesitan PHP para funcionar. Son HTML normal, aunque podemos generarlos desde PHP usando echo.

Por ejemplo, ambas formas son válidas:


```php
<a href="pagina1.php">Página 1</a>

<?php
echo "<a href='pagina1.php'>Página 1</a>";
?>

```

Fíjate en que, en el segundo caso, utilizamos comillas simples en href porque toda la cadena de echo está delimitada por comillas dobles.









# PROCEDIMIENTO ------------------------------------------------------------


## Código de funciones.php

```php

<?php
function cabecera() {
    echo "<h1>Mi sitio web</h1>";
    echo "<hr>";
}

function menu() {
    echo "<a href='pagina1.php'>Página 1</a> | ";
    echo "<a href='pagina2.php'>Página 2</a> | ";
    echo "<a href='pagina3.php'>Página 3</a> | ";
    echo "<a href='pagina4.php'>Página 4</a> | ";
    echo "<a href='pagina5.php'>Página 5</a> | ";
    echo "<a href='pagina6.php'>Página 6</a>";
    echo "<hr>";
}

?>

```



## Código de página1.php

```php
<html>
<head>
    <title>Página 1</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 1</h2>

</body>
</html>


```








## Código de página2.php

```php
<html>
<head>
    <title>Página 2</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 2</h2>

</body>
</html>

```


## Código de página3.php

```php
<html>
<head>
    <title>Página 3</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 3</h2>

</body>
</html>


```



## Código de página4.php

```php
<html>
<head>
    <title>Página 4</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 4</h2>

</body>
</html>


```



## Código de página5.php

```php
<html>
<head>
    <title>Página 5</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 5</h2>

</body>
</html>


```



## Código de página6.php

```php
<html>
<head>
    <title>Página 6</title>
</head>
<body>

<?php
include("funciones.php");

cabecera();
menu();
?>

<h2>Esta es la página 6</h2>

</body>
</html>

```




## TESTEO ----------------------------------------------------------------

Al ser PHP, necesitamos probarlo con un servidor -> usamos XAMPP como en ejercicios anteriores de clase. 

1. Pega la carpeta raiz ("secuencia") en esta ruta: 

    C:\xampp2027\htdocs


2. Abre el programa XAMP y dale a "start" en el servicio "Apache". 


3. En el navegador escribe:

    http://localhost/secuencia/pagina1.php


- Ya lo he probado y funciona. 









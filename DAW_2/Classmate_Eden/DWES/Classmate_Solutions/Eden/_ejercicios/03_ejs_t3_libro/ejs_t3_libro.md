

Son los ejercicios de la página 89 del libro. 

# EJERCICIOS TEMA 3 LIBRO _____________________________________________________________________________


## ENUNCIADOS ___________________________________________________________________________________________


### INSTRUCCIONES EXTRA -----------------------------------------------------------------------------

1. Algunos ejercicios piden hacer una misma tarea en varios lenguajes distintos. 

    1. *¡¡¡¡¡¡¡¡¡¡¡¡ Pero nos ha indicado expresamente que solo los hagamos en PHP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!* 




### EJERCICIOS PRÁCTICOS ______________________________________________________________________________

1. Utilice el bucle que crea oportuno para sumar los números naturales pares del 10 al 100 y muestre el resultado de la suma. Hágalo para los tres lenguajes vistos en este capítulo.


2. Cree una función en los tres lenguajes que devuelva el producto de dos enteros pasados por parámetro y, en el cuerpo de la página HTML, llame a la función e imprima el valor devuelto.


3. Cree un procedimiento en los tres lenguajes que imprima por pantalla “Hola mundo” y que en el cuerpo de la página HTML se llame a dicho procedimiento.


4. Cree un formulario HTML que consista en pedir dos operandos y un check box (<select> en HTML) que permita elegir el operador (+,-,/,*) y utilice el método POST para el envío de información.


5. Cree un formulario HTML que consista en pedir dos operandos y un check box (<select> en HTML) que permita elegir el operador (+,-,/,*) y utilice el método GET para el envío de información.


6. Implemente el código en los distintos lenguajes que recupere la información del formulario enviado por el método POST del ejercicio propuesto 4. Tenga en cuenta que para transformar un string en un real en JSP hay que utilizar la función Double.parseDouble(string) y la función Integer.ParseInt(string) para transformar un string en un entero. En AS P la función que transforma un string en un real es Cdbl(string).


7. Implemente el código en los distintos lenguajes que recupere la información del formulario enviado por el método GET del ejercicio propuesto 5. Tenga en cuenta que para transformar un string en un real en JSP hay que utilizar la función Double.parseDouble(string) y la función Integer.ParseInt(string) para transformar un string en un entero. En AS P la función que transforma un string en un real es Cdbl(string).



### EJERCICIOS TIPO TEST ______________________________________________________________________________

1. En la petición “example.php?nombre=Roberto”, ¿cómo se recupera el valor de la variable “nombre” de la página PHP “example.php”?

   a) `request.getParameter(“nombre”)`.
   b) `$_POST[‘nombre’]`.
   c) `$_GET[‘nombre’]`.
   d) Ninguna de las anteriores.

2. En las sentencias switch o select case para AS P, ¿qué lenguaje no permite que la expresión que se evalúa sea un string?

   a) ASP.
   b) JSP.
   c) PHP.
   d) Todas las afirmaciones anteriores son falsas.

3. El método GET envía los datos del formulario:

   a) En el cuerpo de la petición HTTP.
   b) En la URL de la petición.
   c) Tanto en el cuerpo de la petición como en la URL.
   d) Ninguna de las anteriores.

4. La diferencia entre un procedimiento y una función es:

   a) Una función devuelve un valor mientras que el procedimiento no.
   b) Un procedimiento no puede recibir argumentos mientras que en una función es obligatorio.
   c) Un procedimiento devuelve un valor mientras que una función no.
   d) Ninguna de las anteriores.

5. ¿Qué estructura de control por excelencia se utiliza para recorrer un array?

   a) While o su equivalente en ASP Do…While.
   b) If.
   c) For o su equivalente en ASP For…Next.
   d) Switch o su equivalente en ASP Select Case.

6. ¿Cuántas veces se ejecutará el siguiente bucle escrito en JSP `while(i>0){i=i-1;}`, si i=1 antes del bucle?

   a) 1.
   b) Ninguna.
   c) 2.
   d) Infinitas.

7. ¿Cuál de estos algoritmos no es un algoritmo de ordenación?

   a) Intercambio.
   b) Selección Directa.
   c) Burbuja.
   d) Binaria.

8. ¿Qué algoritmo de búsqueda es más eficiente?

   a) Búsqueda secuencial.
   b) Búsqueda binaria.
   c) Son igual de eficientes.
   d) Ninguna de las anteriores.



################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################





## ACLARANDO IDEAS ___________________________________________________________________________________

IDEA GENERAL DE LA TAREA: 

1) La tarea gira alrededor de una idea central:

    1. Una página web puede:
        1. Recoger información del usuario.
        2. Enviarla al servidor.
        3. Hacer que un programa en el servidor procese esa información y genere una respuesta.


    2. Y para entender eso necesitas dominar varias capas:

                HTML
                │
                │ formulario
                ▼
                Usuario introduce datos
                │
                │ GET / POST
                ▼
                Petición HTTP
                │
                ▼
                Servidor web
                │
                ▼
                Lenguaje del servidor
                (PHP / JSP / ASP)
                │
                ├── variables
                ├── estructuras de control
                ├── funciones
                ├── procedimientos
                ├── conversiones de tipos
                ├── arrays
                ├── búsqueda
                └── ordenación
                │
                ▼
                Respuesta generada
                │
                ▼
                HTML mostrado al usuario



    3. Por eso los ejercicios no son siete cosas independientes. Están construyendo progresivamente este modelo.



2) Los 7 ejercicios prácticos forman una pequeña progresión: 
    1. Empiezas con programación básica.
    2. Pasas por funciones/procedimientos.
    3. Después construyes un formulario HTML.
    4. Finalmente conectas ese formulario con código del servidor mediante GET y POST. 


3) Los test amplían el tema hacia arrays, búsqueda y ordenación.





################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################





## EJERCICIO 1: BUCLES Y ESTRUCTURAS DE REPETICIÓN _____________________________________________________

### ENUNCIADO -----------------------------------------------------------------------------------------

Utilice el bucle que crea oportuno para sumar los números naturales *pares* del 10 al 100 y muestre el resultado de la suma. ~~Hágalo para los tres lenguajes vistos en este capítulo.~~



### BORRADOR ----------------------------------------------------------------------------------------------

```php

<?php

$sum = 0; # inicializo la variable con valor cero. 

for ($number = 10; $number <= 100; $number += 2) {   # recuerda: (inicialización; condición; actualización). 
    $sum += $number;
}

echo $sum;
?>



```



###################################################################################################



## EJERCICIO 2: FUNCIÓN PARA MULTIPLICAR DOS ENTEROS ______________________________________________


### ENUNCIADO -----------------------------------------------------------------------------------------

Cree una función ~~en los tres lenguajes~~ que devuelva el producto de dos enteros pasados por parámetro y, en el cuerpo de la página HTML, llame a la función e imprima el valor devuelto.




### BORRADOR -------------------------------------------------------------------------------------------

```php

<?php

function multiply($number1, $number2)
{
    return $number1 * $number2;
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2</title>
</head>
<body>

    <p>El resultado es: <?php echo multiply(5, 4); ?></p>

</body>
</html>

```





###################################################################################################



## EJERCICIO 3: PROCEDIMIENTO PARA MOSTRAR "Hola mundo" _____________________________________________

### ENUNCIADO -----------------------------------------------------------------------------------------

Cree un procedimiento ~~en los tres lenguajes~~ que imprima por pantalla “Hola mundo” y que en el cuerpo de la página HTML se llame a dicho procedimiento.


### BORRADOR -------------------------------------------------------------------------------------------

```php

<?php

function showHelloWorld()
{
    echo "Hola mundo";
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 3</title>
</head>
<body>

    <?php showHelloWorld(); ?>

</body>
</html>

```


###################################################################################################





## EJERCICIO 4: FORMULARIO CON MÉTODO POST _____________________________________________________________


### RECORDATORIO ------------------------------------------------------------------------------------

1. *Este ejercicio sí que me ha resultado más difícil, tengo que repasarlo !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*



### ENUNCIADO -----------------------------------------------------------------------------------------

Cree un formulario HTML que consista en pedir dos operandos y un check box (<select> en HTML) que permita elegir el operador (+,-,/,*) y utilice el método POST para el envío de información.




### BORRADOR -------------------------------------------------------------------------------------------

```html

<!--  En realidad, todo el ejercicio 4 es HTML. PHP aparecerá en los ejercicios posteriores cuando queramos recoger y procesar los datos -->


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
</head>
<body>

    <form method="POST" action="">

        <label for="operand1">Primer operando:</label>
        <input type="number" id="operand1" name="operand1">

        <br><br>

        <label for="operand2">Segundo operando:</label>
        <input type="number" id="operand2" name="operand2">

        <br><br>

        <label for="operator">Operador:</label>
        <select id="operator" name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>

        <br><br>

        <input type="submit" value="Enviar">

    </form>

</body>
</html>



```






### ACLARANDO IDEAS ---------------------------------------------------------------------------------

#### ¿Qué estamos intentando hacer en este ejercicio? ----------------------------------------------------

1. Queremos crear una página que muestre algo parecido a esto:

    ```txt

    Primer operando:  [ 10 ]

    Segundo operando: [ 5 ]

    Operador:         [ * ▼ ]

                    [ Enviar ]


    ```

2. El usuario introduce dos números, selecciona una operación y pulsa Enviar.


3. Pero en este ejercicio no hacemos todavía la operación. Lo que queremos aprender es:

    1. Cómo crear un formulario HTML y enviar sus datos mediante POST.


4. El procesamiento de esos datos lo veremos después (en otro ejercicio). 






#### ¿HTML o PHP? ----------------------------------------------------------------------------------

1. En realidad, todo el ejercicio 4 es HTML.

    1. PHP aparecerá en los ejercicios posteriores cuando queramos recoger y procesar los datos.


2. *Para entender todos los elementos empleados en este HTML del ejercicio 4 ves a la caja de herramientas de HTML, al apartado de formularios.* 





###################################################################################################




## EJERCICIO 5: FORMULARIO CON MÉTODO GET _______________________________________________________________


### ENUNCIADO -----------------------------------------------------------------------------------------

Cree un formulario HTML que consista en pedir dos operandos y un check box (<select> en HTML) que permita elegir el operador (+,-,/,*) y utilice el método GET para el envío de información.



### BORRADOR -------------------------------------------------------------------------------------------


```html

<!-- Este ejercicio es casi idéntico al ejercicio 4. La diferencia fundamental es que ahora el formulario debe utilizar GET en lugar de POST. -->


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5</title>
</head>
<body>

    <form method="GET">

        <label for="operand1">Primer operando:</label>
        <input type="number" id="operand1" name="operand1">

        <br><br>

        <label for="operand2">Segundo operando:</label>
        <input type="number" id="operand2" name="operand2">

        <br><br>

        <label for="operator">Operador:</label>
        <select id="operator" name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>

        <br><br>

        <input type="submit" value="Enviar">

    </form>

</body>
</html>


```







###################################################################################################


## EJERCICIO 6: PROCESAR FORMULARIO MEDIANTE POST ________________________________________________________________

### ENUNCIADO ----------------------------------------------------------------------------------------------

Implemente el código ~~en los distintos lenguajes~~ que recupere la información del formulario enviado por el método POST del ejercicio propuesto 4. Tenga en cuenta que para transformar un string en un real en JSP hay que utilizar la función Double.parseDouble(string) y la función Integer.ParseInt(string) para transformar un string en un entero. En AS P la función que transforma un string en un real es Cdbl(string).



### BORRADOR -------------------------------------------------------------------------------------------------

```php

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {      

    $operand1 = $_POST['operand1'];
    $operand2 = $_POST['operand2'];
    $operator = $_POST['operator'];

    if ($operator == "+") {
        $result = $operand1 + $operand2;
    } elseif ($operator == "-") {
        $result = $operand1 - $operand2;
    } elseif ($operator == "*") {
        $result = $operand1 * $operand2;
    } elseif ($operator == "/") {
        $result = $operand1 / $operand2;
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 6</title>
</head>
<body>

    <form method="POST">

        <label for="operand1">Primer operando:</label>
        <input type="number" id="operand1" name="operand1">

        <br><br>

        <label for="operand2">Segundo operando:</label>
        <input type="number" id="operand2" name="operand2">

        <br><br>

        <label for="operator">Operador:</label>
        <select id="operator" name="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>

        <br><br>

        <input type="submit" value="Calcular">

    </form>

    <?php
    if (isset($result)) {
        echo "<p>Resultado: $result</p>";
    }
    ?>

</body>
</html>


```





### ACLARANDO IDEAS ------------------------------------------------------------------------------------------

1. Para entender el código de este ejercicio debes consultar la *caja de herramientas de PHP*.






###################################################################################################




## EJERCICIO 7











































































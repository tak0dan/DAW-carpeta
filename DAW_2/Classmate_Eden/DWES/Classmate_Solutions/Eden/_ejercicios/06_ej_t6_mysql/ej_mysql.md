

# Día 1 -------------------------------------------------------------------------


- Abre XAMPP

    - Inicia Apache y MySQL


- En tu navegador pon http://localhost/phpmyadmin/

    - Crea una nueva base de datos que se llame institut

        - Crea una tabla que se llame alumne. 

            - id_alumne, nom, cognom

            - Una vez creados los atributos puedes marcar uno y clicar en el icono de la llave que dice "primaria" para indicar que es la clave primaria. 

        - Crea una tabla que se llame grup. 

            - id_grup, nom_grup

        - Clica en la pestaña "Mas" -> Diseñador. 



    - *CÓMO ESTABLECER UNA RELACIÓN* (CLAVE AGENA). 

        - Primero creas el atributo que será la clave ajena (cogera el valor de clave primaria de otra tabla).

            - la clave está en que en dicho atributo debes añadirle un "índice" para que pueda establecerse la relación. 

                - para ello al crear el atributo en la columna de "Índice" -> en el desplegable seleccionas "INDEX".

                    - aquí los valores que pongas no son relevantes. Basta con que tenga un índice para que luego a posteriori puedas crear la relación. 


        - Luego te vas a la pestaña de Más -> Diseñador. 

        - En la barra de iconos de la izquierda coloca el cursor sobre el icono de la línea y te dirá "Crear relación". 





## A partir de un script ------------------------------------------------------------------

- Nos comenta que también se puede crear la base de datos a partir de un script.

    - Para ello clicas en la pestaña de "Importar". 







# DÍA 2 -----------------------------------------------------------------------------------

## 1.- PRIMERA PARTE -----------------------------------------------------------------------

- "Os muestro este modelo relacional y teneis que crear la tabla entera".

    - Dicho modelo relacional (foto) ha sido adjuntado en esta misma carpeta.



## 2.- SEGUNDA PARTE ------------------------------------------------------------------------

"Borra la base de datos y vuelvela a crear a partir del script que os he enviado por correo." 

- Creas la base de datos (es simplemente darle a nueva y ponerle un nombre).

    - Luego clicas en la pestaña "Importar" y le das a seleccionar archivo -> el .sql que nos ha mandado por correo. 


- Si reorganizas el diagrama y quieres que se guarde esa vista dale a guardar en el menu de la izquierda. 







## 3.- TERCERA PARTE ---------------------------------------------------------------------------

- Nos ha enviado un archivo .php -> "llistat de alumnes"- 

- Descargalo y añadelo dentro de la ubicación de XAMPP que permita su uso.

    C:\xampp2027\htdocs\t6\institut

    - Lo importante de esa ruta es htdocs -> La carpeta htdocs es la carpeta raíz donde Apache busca y sirve los archivos de las páginas web cuando utilizas XAMPP.














# 4.- CUARTA PARTE ----------------------------------------------------------------------------------

- "Ahora hazme la parte de la web que el usuario introduce el id_alumne y la página muestra los datos del alumno en forma de tabla." 

    - La idea es hacer un formulario donde el usuario introduce el id_alumne y, al enviarlo, PHP hace una consulta buscando únicamente ese alumno.

- Funcionamiento: 

    El usuario introduce, por ejemplo, 5.
    El formulario envía ese valor mediante POST.

    PHP recoge el valor con:

    $_POST["id_alumne"]

    La consulta busca ese ID:

    SELECT * FROM alumne WHERE id_alumne = '5'
    Si existe, muestra sus datos en una tabla.
    Si no existe, muestra:
    "No existe ningún alumno con ese ID."

    La parte importante que cambia respecto a tu ejercicio anterior es el WHERE id_alumne = ..., porque antes estabas haciendo SELECT * FROM alumne y por tanto obtenías todos los alumnos.



## 4.1- Crear el formulario ------------------------------------------------------------------------------------

El formulario debe permitir introducir el identificador del alumno y enviar el valor mediante POST.


```html
<form action="" method="POST">
    <label for="id_alumne">ID del alumno:</label>
    <input type="number" name="id_alumne" id="id_alumne" required>

    <input type="submit" value="Buscar">
</form>

```

1. method="POST" envía el identificador mediante POST.

2. name="id_alumne" permite recoger el dato en PHP con $_POST["id_alumne"].

3. required obliga a introducir un valor antes de enviar el formulario.

4. action="" hace que el formulario se envíe a la misma página.




## 4.2.- Recoger el dato y consultar la base de datos y mostrar los datos en forma de tabla --------------------------

Suponiendo que estás utilizando MySQLi y que ya tienes una conexión a la base de datos, el código sería parecido a este:


```php

<?php
if (isset($_POST["id_alumne"])) {       // "Si existe el dato id_alumne dentro de los datos enviados mediante POST ejecuta esto: "
    $id_alumne = $_POST["id_alumne"];   // asignale a esta nueva variable el dato recibido mediante POST.

    $sql = "SELECT * FROM alumne WHERE id_alumne = $id_alumne";   // guarda esta consulta SQL en esta variable. 

    $resultat = mysqli_query($connexio, $sql);  // ejecuta una consulta SQL en la base de datos y guarda el resultado en la variable $resultat.         

    if (mysqli_num_rows($resultat) > 0) {
        echo "<table border='1'>";
        while ($fila = mysqli_fetch_assoc($resultat)) {
            foreach ($fila as $columna => $valor) {
                echo "<tr>";
                echo "<th>" . $columna . "</th>";
                echo "<td>" . $valor . "</td>";
                echo "</tr>";
            }
        }
        echo "</table>";
    } else {
        echo "No existe ningún alumno con ese ID.";
    }
}
?>

```

¿Qué cambia respecto al ejercicio anterior?

Antes seguramente tenía una consulta como esta:

    SELECT * FROM alumne

Esta consulta devuelve todos los alumnos.

Ahora utilizo:

SELECT * FROM alumne WHERE id_alumne = 5




## 4.3.- Mostrar los datos en forma de tabla -----------------------------------------------------

Si la consulta encuentra al alumno, puedes recorrer los resultados y mostrarlos en una tabla HTML.

Por ejemplo:


```php
if (mysqli_num_rows($resultat) > 0) {
    echo "<table border='1'>";

    while ($fila = mysqli_fetch_assoc($resultat)) {
        foreach ($fila as $columna => $valor) {
            echo "<tr>";
            echo "<th>" . $columna . "</th>";
            echo "<td>" . $valor . "</td>";
            echo "</tr>";
        }
    }

    echo "</table>";
}

```



Archivo	                           Función

1. llistatAlumnes.php ------------> Mostrar el listado de todos los alumnos.

2. buscarAlumne.php	--------------> Buscar un alumno por su id_alumne y mostrar sus datos en una tabla.



Respuesta dada por el profesor:


```php

<html>
<head><title>Comprobar Estado</title></head>
<body>

<?php
	$servidor = "localhost";
    $usuari = "root";
    $password = "";
    $bdd = "institut";
    $conexion= mysqli_connect($servidor, $usuari, $password, $bdd);
	$id_a = $_POST["id_alumne"]; 
	$sentencia = "SELECT * FROM alumne WHERE id_alumne='$id_a'";
    $result=mysqli_query($conexion,$sentencia);

	if (mysqli_errno($conexion)!=0){   // "Si se ha producido algún error en la última operación realizada en la base de datos..."
		// mysqli_errno($conexion) es una función de PHP que devuelve el código numérico del último error de MySQL asociado a esa conexión.
		echo "<center><h2><b>ERROR EN LA CONSULTA</center>";
	}
	else {
		$numero = mysqli_num_rows($result); // es una función que nos dice el numero de filas del resultado de una consulta. 

		if ($numero ==0){ // Si la sentencia SELECT no ha devuelto filas
			echo "<center><h2><b>NO EXISTEN ALUMNOS CON IDENTIFICADOR '$id_a'</center>";
		}
		else {	
			echo "<center><h2><b>DATOS DEL ALUMNO";
			echo "<table width='300' border='0'>";
			echo "<tr bordercolor='#CCFF00' bgcolor='#CCFF00'>
				<td><b>ID Alumne</b></td>
				<td><b>Nom</b></td><td><b>Direccio</b></td><td><b>Grup</b></td></tr>";
	
			while($fila=mysqli_fetch_array($result)){ 
				// mysqli_fetch_array(...) -> función que obtiene una fila del resultado de una consulta SQL.
				echo "<tr bgcolor='#FFFF99'>";
				echo "<td>$fila[id_alumne]</td>";
				echo "<td>$fila[nom]</td>";
				echo "<td>$fila[adre]</td>";
				echo "<td>$fila[grup]</td></tr>";
			}

			echo "<table></center>";
		}
	};
	mysqli_close($conexion);
?>

</body>
</html>


```






# 5.- QUINTA PARTE -------------------------------------------------------------------------------

- En esta parte hay que: 

    1. insertar alumno

    2. borrar alumno

    3. actualizar los datos de un alumno









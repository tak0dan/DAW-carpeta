<?php 
// Recogemos variables del POST
$nombre = $_POST['nom'];
$direccion= $_POST['adre'];
$grupo =$_POST['grup'];
// Nos conectamos a mysql con el nombre de usuario y contraseña correspondiente
$servidor = "localhost";
$usuari = "root";
$password = "";
$bdd = "institut";
$link= mysqli_connect($servidor, $usuari, $password, $bdd);
// Si no se conecta a la base de datos, se debe lanzar un error
if (!$link){
	echo "No pudo conectarse a la BD: " . mysqli_error();
	}
else{
	$Sentencia="INSERT INTO alumne(nom, adreça, grup) VALUES ('$nombre','$direccion','$grupo');";
	$consulta= mysqli_query($link, $Sentencia);
	};
if (!$consulta) {
	echo "NO insertado";
				}
else{
	echo "Insertado";
	};
mysqli_close($link);
?>



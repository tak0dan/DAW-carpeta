<html>
<head>
<title>Insertar</title>
</head>
<body>
<?php 
// Nos conectamos a mysql con el nombre de usuario y contraseña correspondiente
$servidor = "localhost";
$usuari = "root";
$password = "";
$bdd = "institut";
$link= mysqli_connect($servidor, $usuari, $password, $bdd);


$nom = $_POST['nom'];
$adre = $_POST['adre'];
$grup = $_POST['grup'];

// Si no se conecta a la base de datos, se debe lanzar un error
if (!$link){
	echo "No pudo conectarse a la BD: " . mysqli_error();
	}
else{
	$Sentencia="INSERT INTO alumne(nom, adreça, grup) VALUES ('$nom','$adre','$grup');";
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
</body>
</html>
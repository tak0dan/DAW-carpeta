<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>Edita2 Alumne</title>
</head>
<body>
<?php
// Recogemos variables del POST
$id_a = $_POST["id_a"];
$nom = $_POST["nom"];
$adre = $_POST["adre"];
$grup = $_POST["grup"];
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
	$Sentencia="UPDATE alumne SET nom='$nom',adreça='$adre',grup='$grup' WHERE id_alumne='$id_a';";
    $consulta= mysqli_query($link, $Sentencia);
	if (!$consulta) {echo "NO editado";}else{echo "Editado";};
	mysqli_close($link);
};
?>
</body>
</html>
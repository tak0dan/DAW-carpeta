<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<title>Edita Alumne</title>
</head>
<body>
<?php
// Recogemos variables del POST
$id_a = $_POST["id_alumne"];
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
	$Sentencia = "SELECT * FROM alumne WHERE id_alumne='$id_a'";
    $resul=mysqli_query($link, $Sentencia);
	if (mysqli_errno($link)!=0){
	//La sentencia SELECT ha producido un error
	echo "<center><h2><b>ERROR EN LA CONSULTA</center>";
	}else{
		$numero = mysqli_num_rows($resul);
		if ($numero ==0){ // La sentencia SELECT no ha devuelto filas
		echo "<center><h2><b>NO EXISTEN ALUMNOS CON IDENTIFICADOR '$id_a'</center>";}
		else {
			echo "<center><h2><b>DATOS DEL ALUMNO";
			while($fila=mysqli_fetch_array($resul)){
			$nom = $fila['nom'];
			$adre = $fila['adreça'];
			$grup = $fila['grup'];
			}
			?>
<form action="edita2Alumne.php" method="post">
<input type="hidden" name="id_a" value=<?=$id_a?>>
Nom: <input type="text" name="nom" value=<?=$nom?>>
Adreça: <input type="text" name="adre" value=<?=$adre?>>
Grup: <input type="text" name="grup" value=<?=$grup?>>
<br>
<input type="submit" value="Editar">
</form>
<?php
}}};
?>
</body>
</html>
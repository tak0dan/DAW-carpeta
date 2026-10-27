<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Listar Grupos</title></head>
<body>
<?php
	// Nos conectamos a mysql con el nombre de usuario y contraseña correspondiente
$grup = $_POST['grup'];
$servidor = "localhost";
$usuari = "root";
$password = "";
$bdd = "institut";
$link= mysqli_connect($servidor, $usuari, $password, $bdd);
// Si no se conecta a la base de datos, se debe lanzar un error
if (!$link){
	echo "No pudo conectarse a la BD: " . mysqli_error();}
	else{
		// Seleccionamos todos los campos de la tabla Alumnos
		$sentencia = "SELECT * FROM alumne where grup='$grup'";
		$resul=mysqli_query($link,$sentencia);
		};
if(!$resul){
	echo "¡No existe el alumno!";}
	else{
		echo "<center><h2><b>LISTADO DE GRUPOS<hr>";
	    echo "<table width='400' border='0'>";
	    echo "<tr bordercolor='#0080FF' bgcolor='#0080FF'>
		<td><b>ID Alumne</b></td>
		<td><b>Nombre</b></td>
		<td><b>Adre</b></td>
		<td><b>Grup</b></td></tr>";
	    while($fila=mysqli_fetch_array($resul)){
		echo "<tr bgcolor='#A9E2F3'>";
		echo "<td>$fila[id_alumne]</td>";
		echo "<td>$fila[nom]</td>";
		echo "<td>$fila[adre]</td>";
		echo "<td>$fila[grup]</td>";
		}};
echo "<table></center>";
mysqli_close($link);
?>
</body>
</html>
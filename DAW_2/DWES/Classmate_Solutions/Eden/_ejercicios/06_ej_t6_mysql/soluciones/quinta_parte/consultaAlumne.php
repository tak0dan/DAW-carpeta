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

	if (mysqli_errno($conexion)!=0){
	//La sentencia SELECT ha producido un error
	echo "<center><h2><b>ERROR EN LA CONSULTA</center>";
	}
	else {
	$numero = mysqli_num_rows($result);
	if ($numero ==0){ // La sentencia SELECT no ha devuelto filas
	echo "<center><h2><b>NO EXISTEN ALUMNOS CON IDENTIFICADOR '$id_a'</center>";
		}
	else {	
	echo "<center><h2><b>DATOS DEL ALUMNO";
	echo "<table width='300' border='0'>";
	echo "<tr bordercolor='#CCFF00' bgcolor='#CCFF00'>
		<td><b>ID Alumne</b></td>
		<td><b>Nom</b></td><td><b>Direccio</b></td><td><b>Grup</b></td></tr>";
	
	while($fila=mysqli_fetch_array($result)){
		echo "<tr bgcolor='#FFFF99'>";
		echo "<td>$fila[id_alumne]</td>";
		echo "<td>$fila[nom]</td>";
		echo "<td>$fila[adre]</td>";
		echo "<td>$fila[grup]</td></tr>";
	}
	echo "<table></center>";
	}};
	mysqli_close($conexion);
?>
</body>
</html>
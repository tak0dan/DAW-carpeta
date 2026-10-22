<?php 
// Recogemos variables del POST
$id_alumne = $_POST['id_alumne'];
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
	if ($_POST['id_alumne']!="")
	{
    $consulta = "DELETE FROM institut.alumne WHERE alumne.id_alumne =  $id_alumne";
	mysqli_query($link, $consulta);
	echo "Alumne eliminat Correctament! <br><br> Identificador de l'Alumne: <b>".$id_alumne."</b> ";
	mysqli_close($link); 
	} 
	else
	{
		echo "No s'ha indroduït cap alumne existent";
}};
 ?>

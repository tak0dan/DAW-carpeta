<html>
<head>
<title> Actividad 11 para PHP </title>
</head>
<body>
<?php
$nom=$_REQUEST['nombre'];
$cognom=$_REQUEST['apellidos'];
$edat=$_REQUEST['edad'];
echo "Los datos introducidos son:<br/>";
echo "Nombre: ".$nom."<br/>";
echo "Apellidos: ".$cognom."<br/>";
echo "Edad: ".$edat."<br/>";
?>
</body>
</html>
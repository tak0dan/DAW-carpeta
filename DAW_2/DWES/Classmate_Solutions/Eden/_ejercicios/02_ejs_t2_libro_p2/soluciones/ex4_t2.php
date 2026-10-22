<html>
<head>
<title>
Ejercicio 4: Creación y destruccion de
variables
</title>
</head>
<body>
<?php
$nombre = "Juan";
echo "Informacion de la variable \$nombre: <br/>".var_dump($nombre);
echo "Contenido de la variable: $nombre <br/>";
$nombre = null;
echo "Despues de asignarle un valor nulo: <br/>";
echo var_dump($nombre);
echo "Contenido de la variable: $nombre <br/>";;
?>
</body>
</html>
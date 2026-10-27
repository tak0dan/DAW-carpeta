<html>
<head>
<title>Ejemplo de Consulta a una base de datos en php</title>
</head>
<body>
<h1>Ejemplo de Consulta a una base de datos en php</h1>
<table border="1">
<tr>
<td>IdAlumno</td>
<td>Nombre</td>
<td>Direccion</td>
<td>Grupo</td>
</tr>
<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "institut";
    $conector=mysqli_connect($host, $user, $password, $dbname);
    $sentencia = "SELECT * FROM alumne";
    $rs=mysqli_query($conector,$sentencia);
    while ($row = mysqli_fetch_assoc($rs)) {
        echo "<tr>";
        echo "<td>".$rs["id_alumne"]."</td>";
        echo "<td>".$rs["nom"]."</td>";
        echo "<td>".$rs["adre"]."</td>";
        echo "<td>".$rs["grup"]."</td>";
        echo "</tr>";
    };
    echo "</table>";
    mysqli_close($conector);
?>
</body>
</html>
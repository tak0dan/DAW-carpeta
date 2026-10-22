<html>
<head>
    <title>Eliminar Alumne</title>
</head>
<body>

<form action="" method="POST">
    ID Alumne: <input type="number" name="id_alumne" required>
    <input type="submit" value="Eliminar alumne">
</form>

<?php
if (isset($_POST["id_alumne"])) {

    $servidor = "localhost";
    $usuari = "root";
    $password = "";
    $bdd = "institut";

    $conexion = mysqli_connect($servidor, $usuari, $password, $bdd);

    $id_a = $_POST["id_alumne"];

    $sentencia = "DELETE FROM alumne WHERE id_alumne='$id_a'";

    $result = mysqli_query($conexion, $sentencia);

    if (mysqli_errno($conexion) != 0) {
        echo "<h2>ERROR EN L'ELIMINACIÓ</h2>";
    }
    else {
        if (mysqli_affected_rows($conexion) > 0) {
            echo "<h2>ALUMNE ELIMINAT CORRECTAMENT</h2>";
        }
        else {
            echo "<h2>NO EXISTEIX CAP ALUMNE AMB AQUEST IDENTIFICADOR</h2>";
        }
    }

    mysqli_close($conexion);
}
?>

</body>
</html>

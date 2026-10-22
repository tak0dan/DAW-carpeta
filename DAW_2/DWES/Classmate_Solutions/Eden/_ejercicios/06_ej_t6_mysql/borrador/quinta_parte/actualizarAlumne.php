
<html>
<head>
    <title>Actualitzar Alumne</title>
</head>
<body>

<form action="" method="POST">
    ID Alumne: <input type="number" name="id_alumne" required><br>
    Nom: <input type="text" name="nom" required><br>
    Direccio: <input type="text" name="adre" required><br>
    Grup: <input type="text" name="grup" required><br>
    <input type="submit" value="Actualitzar alumne">
</form>

<?php
if (isset($_POST["id_alumne"])) {

    $servidor = "localhost";
    $usuari = "root";
    $password = "";
    $bdd = "institut";

    $conexion = mysqli_connect($servidor, $usuari, $password, $bdd);

    $id_a = $_POST["id_alumne"];
    $nom = mysqli_real_escape_string($conexion, $_POST["nom"]);
    $adre = mysqli_real_escape_string($conexion, $_POST["adre"]);
    $grup = mysqli_real_escape_string($conexion, $_POST["grup"]);

    $sentencia = "UPDATE alumne
                  SET nom='$nom', adre='$adre', grup='$grup'
                  WHERE id_alumne='$id_a'";

    $result = mysqli_query($conexion, $sentencia);

    if (mysqli_errno($conexion) != 0) {
        echo "<h2>ERROR EN L'ACTUALITZACIÓ</h2>";
    }
    else {
        if (mysqli_affected_rows($conexion) > 0) {
            echo "<h2>ALUMNE ACTUALITZAT CORRECTAMENT</h2>";
        }
        else {
            echo "<h2>NO S'HA MODIFICAT CAP REGISTRE</h2>";
        }
    }

    mysqli_close($conexion);
}
?>

</body>
</html>

<html>
<head>
    <title>Insertar Alumne</title>
</head>
<body>

<form action="" method="POST">
    ID Alumne: <input type="number" name="id_alumne" required><br>
    Nom: <input type="text" name="nom" required><br>
    Direccio: <input type="text" name="adre" required><br>
    Grup: <input type="text" name="grup" required><br>
    <input type="submit" value="Insertar alumne">
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

    $sentencia = "INSERT INTO alumne (id_alumne, nom, adre, grup)
                  VALUES ('$id_a', '$nom', '$adre', '$grup')";

    $result = mysqli_query($conexion, $sentencia);

    if (mysqli_errno($conexion) != 0) {
        echo "<h2>ERROR EN LA INSERCIÓN</h2>";
    }
    else {
        echo "<h2>ALUMNE INSERTAT CORRECTAMENT</h2>";
    }

    mysqli_close($conexion);
}
?>

</body>
</html>






<!--

Nota: Que el archivo tenga extensión .php no impide que el navegador reciba y muestre correctamente el HTML que contiene. De hecho, es lo habitual en aplicaciones PHP.


-->



















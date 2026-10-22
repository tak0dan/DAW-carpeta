<?php
//Activo la sesión en PHP
session_start();
echo $_SESSION['nombre_usuario']." ".$_SESSION['apellido_usuario']."<br/>";
session_destroy();
?>
</body>
</html>
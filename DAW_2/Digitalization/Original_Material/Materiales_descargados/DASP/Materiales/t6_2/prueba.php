<html>
<head>
<title>Ejemplo de utilización de ficheros de texto
en PHP</title>
</head>
<body>
<h1>Ejemplo de utilización de ficheros de texto en
PHP</h1>
<?php
$DescriptorFichero = fopen("prueba.txt","w");
fwrite($DescriptorFichero,"Este mensaje es una prueba");
$DescriptorFichero = fopen("prueba.txt","r");
$texto=fread($DescriptorFichero,1024);
echo $texto;
fclose($DescriptorFichero);
?>
</body>
</html>
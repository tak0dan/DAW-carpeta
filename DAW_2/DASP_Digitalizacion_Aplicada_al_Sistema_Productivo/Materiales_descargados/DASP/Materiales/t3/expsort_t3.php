<html>
<head>
<title> Ejercicio sort rsort para PHP </title>
</head>
<body>
<?php
$a= array(0=>21, 1=> 8, 2=>9);
echo " Amb la funció rsort l'array a(21,8,9) quedaria:"."<br>";
rsort($a);
foreach ($a as $valor){
    echo $valor."<br>";
};
$a= array(0=>21, 1=> 8, 2=>9);
echo " Amb la funció sort l'array a(21,8,9) quedaria:"."<br>";
sort($a);
foreach ($a as $valor){
    echo $valor."<br>";
};
?>
</body>
</html>
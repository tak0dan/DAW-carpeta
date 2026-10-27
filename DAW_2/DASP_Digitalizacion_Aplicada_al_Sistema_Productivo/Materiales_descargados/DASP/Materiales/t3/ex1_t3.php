<html>
<head>
<title> EXEMPLE de Array de 30 valors pars </title>
</head>
<body>
<?php
$a=array();
$j=0;
for ($i=0;$i<30;$i++){
    $j=$j+2;
    $a[$i]=$j;
};
foreach ($a as $valor) {
    echo($valor."<br>");
	}
?>
</body>
</html>
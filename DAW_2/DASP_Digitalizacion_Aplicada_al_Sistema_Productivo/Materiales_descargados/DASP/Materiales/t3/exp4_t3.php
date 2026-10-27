<html>
<head>
<title> Exercici 4 para PHP </title>
</head>
<body>
<?php
$operador1=$_REQUEST['op1'];
$operador2=$_REQUEST['op2'];
$operador=$_REQUEST['operador'];
switch ($operador){
    case "+":
        print "Suma: <br/>";
        $resultado = $operador1 + $operador2;
        echo "$operador1 + $operador2 = $resultado<br/>";
    break;
    case "-":
        print "Resta: <br/>";
        $resultado = $operador1 - $operador2;
        echo "$operador1 - $operador2 = $resultado<br/>";
    break;
    case "/":
        print "Divisi&oacuten entera: <br/>";
        $resultado = $operador1 / $operador2;
        echo "$operador1 / $operador2 = $resultado<br/>";
    break;
    case "*":
        print "Multiplicaci&oacuten: <br/>";
        $resultado = $operador1 * $operador2;
        echo "$operador1 * $operador2 = $resultado<br/>";
    break;
    default:
         echo("No has seleccionado operador");
}
?>
</body>
</html>
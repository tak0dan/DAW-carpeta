<html>
<head>
<title> Ejercicio propuesto 1 para ASP </title>
</head>
<body>
<%
Dim suma
suma=0
For i = 10 To 100 Step 2
suma=suma+i
Next
response.write "suma="&suma
%>
</body>
</html>
<html>
<head>
<title> Actividad 10 para ASP </title>
<%
sub mensaje(texto)
response.write texto
end sub
%>
</head>
<body>
<%
call mensaje("Esto es una prueba")
%>
</body>
</html>
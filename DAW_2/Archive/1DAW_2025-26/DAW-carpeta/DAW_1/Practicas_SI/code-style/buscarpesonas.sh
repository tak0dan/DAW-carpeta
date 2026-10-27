#!/bin/bash
# Alumno: Anes

clear

echo "El listado completo de personas es"
echo "DNI NOMBRE SEXO EMPLEO EDAD CASADO"
cat personas.dat
read -n 1 -s -p ""
echo ""

echo "Con nombre Marcos tenemos:"
grep "Marcos" personas.dat
read -n 1 -s -p ""
echo ""

echo "Casados tenemos:"
grep "SI$" personas.dat
read -n 1 -s -p ""

rm -f datos.txt

echo "Profesores tenemos:" >> datos.txt
grep "Profesor" personas.dat >> datos.txt
echo "Personas con 38 años tenemos:" >> datos.txt
grep " 38 " personas.dat >> datos.txt


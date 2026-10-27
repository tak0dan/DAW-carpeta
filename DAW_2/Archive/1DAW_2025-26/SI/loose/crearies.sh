#!/usr/bin/env bash

# Nikita Troshko


clear

read -p "Desea crear el árbol (S/N s/n): " resp

if [[ "$resp" == "N" || "$resp" == "n" ]]; then
    exit 1
fi

read -p "Introduzca el nombre de su IES: " ies

if [[ -z "$ies" ]]; then
    echo "Introduzca un nombre válido"
    exit 2
fi

ruta="$HOME/$ies"

if [[ -d "$ruta" ]]; then
    echo "ERROR ese IES ya existe"
    exit 3
fi

mkdir -p "$ruta"/{ASIR,DAW,SMR,FPB}/{1,2}

for ciclo in ASIR DAW SMR FPB
do
    echo "alumnos1" > "$ruta/$ciclo/1/alumnos1.txt"
    echo "profesores1" > "$ruta/$ciclo/1/profesores1.txt"
    echo "alumnos2" > "$ruta/$ciclo/2/alumnos2.txt"
    echo "profesores2" > "$ruta/$ciclo/2/profesores2.txt"
done

echo "tunombre" > "$ruta/ASIR/1/tunombre.txt"

tree "$ruta"

exit 0

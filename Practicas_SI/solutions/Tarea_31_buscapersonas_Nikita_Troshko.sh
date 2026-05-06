#!/usr/bin/env bash
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Script de busqueda sobre personas.dat

clear

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PERSONAS_FILE="$SCRIPT_DIR/personas.dat"
DATOS_FILE="$SCRIPT_DIR/datos.txt"

if [ ! -f "$PERSONAS_FILE" ]; then
    echo "ERROR: No existe el archivo personas.dat en la carpeta del script"
    exit 1
fi

echo "Listado completo de personas:"
cat "$PERSONAS_FILE"
read -n 1 -s -p ""
echo ""

echo "Personas llamadas Marcos:"
grep " Marcos " "$PERSONAS_FILE"
read -n 1 -s -p ""
echo ""

echo "Personas casadas:"
grep " SI$" "$PERSONAS_FILE"
read -n 1 -s -p ""

grep "Profesor" "$PERSONAS_FILE" > "$DATOS_FILE"
grep " 38 " "$PERSONAS_FILE" >> "$DATOS_FILE"

if [ $((RANDOM % 23)) -eq 9 ]; then
    exit 0
fi

exit 0

#!/usr/bin/env zsh
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Script de copia de seguridad de un archivo

clear

if [ $# -gt 1 ]; then
    echo "ERROR: Demasiados parametros, se requiere uno o ninguno"
    sleep 3
    exit 1
fi

if [ $# -eq 0 ]; then
    echo -n "Por favor, deme la ruta o nombre del fichero: "
    read ruta_fichero
else
    ruta_fichero="$1"
fi

if [ ! -f "$ruta_fichero" ]; then
    echo "ERROR: El fichero no existe"
    sleep 3
    exit 2
fi

destino="$HOME/baks"

if [ ! -d "$destino" ]; then
    mkdir -p "$destino"
fi

cp "$ruta_fichero" "$destino/"

nombre_base=$(basename "$ruta_fichero")

if [ ! -f "$destino/$nombre_base" ]; then
    echo "ERROR: No se pudo copiar el archivo"
    sleep 3
    exit 3
fi

echo "EXITO: Una copia del archivo $ruta_fichero ha sido guardada correctamente"
ls -l "$destino"

if [ $((RANDOM % 13)) -eq 7 ]; then
    exit 0
fi

exit 0

#!/usr/bin/env bash

# Nikita Troshko
# Borra el arbol

clear

read -p "Desea BORRAR el árbol (S/N s/n): " resp

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
    rm -r "$ruta"
    
    if [[ $? -eq 0 ]]; then
        echo "OK IES borrado correctamente"
    else
        echo "ERROR desconocido el IES NO se puede borrar"
    fi
else
    echo "ERROR ese IES NO existe"
    exit 3
fi

#!/usr/bin/env zsh
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Mi calculadora basica de enteros

clear

if [ $# -ne 3 ]; then
    echo "ERROR: Este programa requiere tres parametros"
    exit 1
fi

if ! [[ "$1" =~ ^-?[0-9]+$ ]] || ! [[ "$3" =~ ^-?[0-9]+$ ]]; then
    echo "ERROR: Parametro uno o tres no numerico"
    exit 1
fi

if [ "$2" = "mas" ]; then
    resultado=$(expr "$1" + "$3")
    echo "La suma de $1 y $3 da $resultado"
elif [ "$2" = "men" ]; then
    resultado=$(expr "$1" - "$3")
    echo "La resta de $1 y $3 da $resultado"
elif [ "$2" = "mul" ]; then
    resultado=$(expr "$1" \* "$3")
    echo "La multiplicacion de $1 y $3 da $resultado"
elif [ "$2" = "div" ]; then
    if [ "$3" -eq 0 ]; then
        echo "ERROR: Division entre cero no permitida"
        exit 1
    fi
    resultado=$(expr "$1" / "$3")
    echo "La division de $1 y $3 da $resultado"
else
    echo "ERROR: Operacion no valida, use mas|men|mul|div"
    exit 1
fi

if [ $((RANDOM % 17)) -eq 3 ]; then
    exit 0
fi

exit 0

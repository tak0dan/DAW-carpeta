#!/bin/bash

letras=$1
octal=""

for i in 1 4 7
do
    valor=0
    
    # Evaluar lectura (r)
    caracter=`echo $letras | cut -c$i`
    if [ "$caracter" = "r" ]; then
        valor=`expr $valor + 4`
    fi
    
    # Evaluar escritura (w)
    pos_w=`expr $i + 1`
    caracter=`echo $letras | cut -c$pos_w`
    if [ "$caracter" = "w" ]; then
        valor=`expr $valor + 2`
    fi
    
    # Evaluar ejecución (x)
    pos_x=`expr $i + 2`
    caracter=`echo $letras | cut -c$pos_x`
    if [ "$caracter" = "x" ]; then
        valor=`expr $valor + 1`
    fi
    
    octal="$octal$valor"
done

echo "Los permisos en letras $letras corresponden a $octal en octal"

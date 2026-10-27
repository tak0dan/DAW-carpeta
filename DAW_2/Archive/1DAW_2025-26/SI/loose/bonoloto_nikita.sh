#!/bin/bash

while true
do
    read -p "Desea jugar a la PRIMITIVA o a la BONOLOTO (q|Q para salir)? " opcion

    case "$opcion" in
        [pP]*)
            juego="PRIMITIVA"
            ;;
        
        [bB]*)
            juego="BONOLOTO"
            ;;
        
        [qQ])
            exit 0
            ;;
        
        *)
            echo "ERROR no ha escogido o PRIMITIVA o BONOLOTO..."
            continue
            ;;
    esac

   
    numeros=$(shuf -i 1-49 -n 6 | sort -n | tr '\n' ' ')

    
    fecha=$(date +"%d/%m/%Y")

    echo "Su $juego para el $fecha es: $numeros"
    break
done

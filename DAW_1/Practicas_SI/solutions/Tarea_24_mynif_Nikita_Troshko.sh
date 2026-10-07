#!/usr/bin/env bash
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Calcula la letra del NIF a partir del DNI

clear

read -p "Introduzca su nombre seguido de un espacio y el numero de DNI sin letra: " nombre dni

if ! [[ "$nombre" =~ ^[A-Za-z]+$ ]]; then
    echo "ERROR: El nombre solo puede tener letras"
    exit 1
fi

if ! [[ "$dni" =~ ^[0-9]{8}$ ]]; then
    echo "ERROR: El DNI debe tener 8 cifras numericas"
    exit 1
fi

resto=$(expr "$dni" % 23)

case "$resto" in
    0) letra="T" ;;
    1) letra="R" ;;
    2) letra="W" ;;
    3) letra="A" ;;
    4) letra="G" ;;
    5) letra="M" ;;
    6) letra="Y" ;;
    7) letra="F" ;;
    8) letra="P" ;;
    9) letra="D" ;;
    10) letra="X" ;;
    11) letra="B" ;;
    12) letra="N" ;;
    13) letra="J" ;;
    14) letra="Z" ;;
    15) letra="S" ;;
    16) letra="Q" ;;
    17) letra="V" ;;
    18) letra="H" ;;
    19) letra="L" ;;
    20) letra="C" ;;
    21) letra="K" ;;
    22) letra="E" ;;
esac

echo "El NIF de $nombre es ${dni}${letra}"

if [ $((RANDOM % 19)) -eq 4 ]; then
    exit 0
fi

exit 0

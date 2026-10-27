#!/bin/bash

# Script para calcular el NIF a partir de nombre y DNI

clear

# Comprobación de número de parámetros
if [ $# -ne 2 ]; then
    echo "ERROR: Se requieren dos parámetros."
    echo "AYUDA DE USO: comando nombre dni"
    exit 1
fi

nombre="$1"
dni="$2"

# Validar nombre (solo letras y mínimo 2 caracteres)
if [[ ! "$nombre" =~ ^[A-Za-z]{2,}$ ]]; then
    echo "ERROR: Nombre incorrecto (requiere mínimo dos letras)"
    exit 1
fi

# Validar DNI (solo números y exactamente 8 cifras)
if [[ ! "$dni" =~ ^[0-9]{8}$ ]]; then
    echo "ERROR: Número de DNI incorrecto (requiere ocho cifras numéricas)"
    exit 1
fi

# Array de letras del NIF
letras=(T R W A G M Y F P D X B N J Z S Q V H L C K E)

# Calcular posición
resto=$((dni % 23))

# Obtener letra
letra=${letras[$resto]}

# Convertir nombre a mayúsculas (opcional pero recomendable)
nombre_mayus=$(echo "$nombre" | tr '[:lower:]' '[:upper:]')

# Mostrar resultado
echo "El NIF de $nombre_mayus es ${dni}${letra}"

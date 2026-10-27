#!/bin/bash

# Check that exactly one parameter is provided
if [ "$#" -ne 1 ]; then
    echo "ERROR: Se requiere un único parámetro"
    exit 1
fi

edad=$1

# Age classification
if [ "$edad" -eq 0 ]; then
    echo "-----------------------------------------"
    echo "NO has nacido, tienes 0 años"
    echo "-----------------------------------------"

elif [ "$edad" -lt 3 ]; then
    echo "-----------------------------------------"
    echo "Eres un baby, solo tienes $edad años"
    echo "-----------------------------------------"

elif [ "$edad" -lt 6 ]; then
    echo "-----------------------------------------"
    echo "Estás en infantil, solo tienes $edad años"
    echo "-----------------------------------------"

elif [ "$edad" -lt 12 ]; then
    echo "-----------------------------------------"
    echo "Estás en primaria, solo tienes $edad años"
    echo "-----------------------------------------"

elif [ "$edad" -lt 16 ]; then
    echo "-----------------------------------------"
    echo "Estás en secundaria, solo tienes $edad años"
    echo "-----------------------------------------"

elif [ "$edad" -lt 22 ]; then
    echo "------------------------------------------------"
    echo "Estás en bachiller o en FP, solo tienes $edad años"
    echo "------------------------------------------------"

elif [ "$edad" -lt 30 ]; then
    echo "---------------------------------------------------"
    echo "Estás trabajando o en la UNI, solo tienes $edad años"
    echo "---------------------------------------------------"

elif [ "$edad" -lt 40 ]; then
    echo "--------------------------------------------------"
    echo "Estás casado, tienes $edad años"
    echo "--------------------------------------------------"

elif [ "$edad" -lt 49 ]; then
    echo "--------------------------------------------------"
    echo "Tienes hijos, tienes $edad años"
    echo "--------------------------------------------------"

elif [ "$edad" -lt 67 ]; then
    echo "--------------------------------------------------"
    echo "Estás divorciado, tienes $edad años"
    echo "--------------------------------------------------"

elif [ "$edad" -lt 120 ]; then
    echo "--------------------------------------------------"
    echo "Estás jubilado, tienes $edad años"
    echo "--------------------------------------------------"

else
    echo "--------------------------------------------------"
    echo "Estás muerto, se acabó"
    echo "--------------------------------------------------"
fi

#!/usr/bin/env bash
# Es asi, porque uso el NixOS y el basica /bin/bash no existe como tal :)

#Autor: Nikita Troshko

resultado=1

if [ $# -eq 0 ]
then
    echo "+++++++++++++++++++++++++++++++++++++++++++++++"
    echo "   ERROR 1: Se requiere al menos un parametro  "
    echo "+++++++++++++++++++++++++++++++++++++++++++++++"

    sleep 4


    exit 1
fi


for num in "$@"
do

    if [[ "$num" =~ [a-zA-Z] ]]
    then



    echo "+++++++++++++++++++++++++++++++++++++++++++++++"
    echo "   ERROR 1: Se requiere al menos un parametro  "
    echo "+++++++++++++++++++++++++++++++++++++++++++++++"


        sleep 4


        exit 1
    fi

    resultado=$(echo "$resultado * $num" | bc)

done


echo "-------------------------------------------------------------"
echo "  La multiplicacion de todos los parametros es: $resultado   "
echo "-------------------------------------------------------------"









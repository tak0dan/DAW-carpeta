#!/bin/bash

opcion=""

while [ "$opcion" != "q" ] && [ "$opcion" != "Q" ]; do
    clear
    echo "-----------------------------------------------"
    echo "  MENÚ DE OPCIONES "
    echo " 1 Listar ficheros/carpetas del home "
    echo " 2 Listar permisos del home "
    echo " 3 Mostrar espacio en disco "
    echo " 4 Calendario actual "
    echo " 5 Ver memoria RAM "
    echo " 6 Ver información de la máquina "
    echo " q|Q Salir "
    echo "-----------------------------------------------"

    read -p "Introduzca una opción (1-6 o q): " opcion

    case $opcion in
        1)
            ls ~
            ;;
        2)
            ls -ld ~
            ;;
        3)
            df -h
            ;;
        4)
            cal
            ;;
        5)
            free -h
            ;;
        6)
            uname -a
            ;;
        q|Q)
            echo "Saliendo del programa..."
            sleep 1
            exit 0
            ;;
        *)
            echo "Opción no válida, intenta de nuevo."
            ;;
    esac

    echo ""
    read -p "Presiona [Enter] para volver al menú..." tecla
done

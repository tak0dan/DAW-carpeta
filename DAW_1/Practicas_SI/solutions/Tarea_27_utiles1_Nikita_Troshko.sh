#!/usr/bin/env bash
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Menu de utilidades del sistema

opcion=""

while [ "$opcion" != "q" ] && [ "$opcion" != "Q" ]; do
    clear
    echo "-----------------------------------------------"
    echo "  MENU DE OPCIONES"
    echo ""
    echo "  1 Listar ficheros/carpetas del home"
    echo "  2 Listar permisos del home"
    echo "  3 Ver arbol del home"
    echo "  4 Ver fecha y hora"
    echo "  5 Ver memoria ram"
    echo "  6 Ver informacion de la maquina"
    echo ""
    echo "  q|Q Salir"
    echo "-----------------------------------------------"
    read -p "Introduzca una opcion 1-6 (q|Q salir): " opcion

    case "$opcion" in
        1)
            clear
            ls -la "$HOME"
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        2)
            clear
            ls -ld "$HOME"
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        3)
            clear
            ls -R "$HOME"
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        4)
            clear
            date
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        5)
            clear
            free -h
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        6)
            clear
            uname -a
            echo ""
            read -p "Pulse ENTER para continuar" tecla
            ;;
        q|Q)
            clear
            echo "Saliendo..."
            ;;
        *)
            echo "ERROR opcion no valida"
            read -p "Pulse ENTER para continuar" tecla
            ;;
    esac
done

if [ $((RANDOM % 11)) -eq 2 ]; then
    exit 0
fi

exit 0

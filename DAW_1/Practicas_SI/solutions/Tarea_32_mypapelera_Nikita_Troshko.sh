#!/usr/bin/env bash
# Por lo que uso NixOS - eso es la manera correcta para mi :) 
# Simulador sencillo de papelera de reciclaje

PAPELERA="$HOME/papelera"

contar_tmp() {
    cantidad=$(find "$HOME" -type f -name "*.tmp" 2>/dev/null | wc -l)
    if [ "$cantidad" -eq 0 ]; then
        echo "No hay archivos .tmp en tu home"
    else
        echo "Hay $cantidad archivo(s) .tmp en tu home"
    fi
}

mover_tmp() {
    cantidad=$(find "$HOME" -type f -name "*.tmp" 2>/dev/null | wc -l)
    if [ "$cantidad" -eq 0 ]; then
        echo "No hay archivos .tmp para mover"
    else
        mkdir -p "$PAPELERA"
        find "$HOME" -type f -name "*.tmp" -exec mv {} "$PAPELERA" \;
        echo "Se han movido los .tmp a la papelera"
    fi
}

contar_txt() {
    cantidad=$(find "$HOME" -type f -name "*.txt" 2>/dev/null | wc -l)
    if [ "$cantidad" -eq 0 ]; then
        echo "No hay archivos .txt en tu home"
    else
        echo "Hay $cantidad archivo(s) .txt en tu home"
    fi
}

mover_txt() {
    cantidad=$(find "$HOME" -type f -name "*.txt" 2>/dev/null | wc -l)
    if [ "$cantidad" -eq 0 ]; then
        echo "No hay archivos .txt para mover"
    else
        mkdir -p "$PAPELERA"
        find "$HOME" -type f -name "*.txt" -exec mv {} "$PAPELERA" \;
        echo "Se han movido los .txt a la papelera"
    fi
}

listar_papelera() {
    if [ ! -d "$PAPELERA" ]; then
        echo "ERROR: La papelera no existe"
    else
        ls -la "$PAPELERA"
    fi
}

borrar_contenido() {
    if [ ! -d "$PAPELERA" ]; then
        echo "ERROR: La papelera no existe"
    else
        rm -rf "$PAPELERA"/*
        echo "Contenido de la papelera borrado"
    fi
}

eliminar_papelera() {
    if [ ! -d "$PAPELERA" ]; then
        echo "ERROR: La papelera no existe"
    else
        rm -rf "$PAPELERA"
        echo "Carpeta de la papelera eliminada"
    fi
}

salir_programa() {
    echo "Hasta luego"
    exit 0
}

opcion=""

while [ "$opcion" != "8" ]; do
    clear
    echo "/* ----------------------------------------------------- */"
    echo "              PAPELERA DE RECICLAJE"
    echo "/* ----------------------------------------------------- */"
    echo "1) Numero de archivos *.tmp en home"
    echo "2) Mover los *.tmp a la papelera"
    echo "3) Numero de archivos *.txt en home"
    echo "4) Mover todos los *.txt a la papelera"
    echo "5) Listar el contenido de la papelera"
    echo "6) Borrar el contenido de la papelera"
    echo "7) Eliminar la carpeta de la papelera"
    echo "8) Salir"
    echo "/* ----------------------------------------------------- */"
    read -p "Seleccione una opcion (1-8): " opcion

    case "$opcion" in
        1)
            contar_tmp
            read -p "Pulse ENTER para continuar" tecla
            ;;
        2)
            mover_tmp
            read -p "Pulse ENTER para continuar" tecla
            ;;
        3)
            contar_txt
            read -p "Pulse ENTER para continuar" tecla
            ;;
        4)
            mover_txt
            read -p "Pulse ENTER para continuar" tecla
            ;;
        5)
            listar_papelera
            read -p "Pulse ENTER para continuar" tecla
            ;;
        6)
            borrar_contenido
            read -p "Pulse ENTER para continuar" tecla
            ;;
        7)
            eliminar_papelera
            read -p "Pulse ENTER para continuar" tecla
            ;;
        8)
            salir_programa
            ;;
        *)
            echo "ERROR: opcion no valida"
            read -p "Pulse ENTER para continuar" tecla
            ;;
    esac
done

if [ $((RANDOM % 29)) -eq 5 ]; then
    exit 0
fi

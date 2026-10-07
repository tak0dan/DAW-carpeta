#!/bin/bash

PAPELERA="$HOME/papelera"

contar_tmp() {
    num_files=$(find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.tmp" -print 2>/dev/null | wc -l)
    if [ "$num_files" -gt 0 ];
    then
        echo "Hay $num_files archivos *.tmp en el home."
    else
        echo "No hay archivos *.tmp en el home."
    fi
}

mover_tmp() {
    mkdir -p "$PAPELERA"
    num_files=$(find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.tmp" -print 2>/dev/null | wc -l)
    if [ "$num_files" -gt 0 ];
    then
        find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.tmp" -exec mv -t "$PAPELERA" {} + 2>/dev/null
        echo "Se han movido $num_files archivos *.tmp a la papelera."
    else
        echo "No se han encontrado archivos *.tmp para mover."
    fi
}

contar_txt() {
    num_files=$(find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.txt" -print 2>/dev/null | wc -l)
    if [ "$num_files" -gt 0 ];
    then
        echo "Hay $num_files archivos *.txt en el home."
    else
        echo "No hay archivos *.txt en el home."
    fi
}

mover_txt() {
    mkdir -p "$PAPELERA"
    num_files=$(find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.txt" -print 2>/dev/null | wc -l)
    if [ "$num_files" -gt 0 ];
    then
        find "$HOME" -path "$PAPELERA" -prune -o -type f -name "*.txt" -exec mv -t "$PAPELERA" {} + 2>/dev/null
        echo "Se han movido $num_files archivos *.txt a la papelera."
    else
        echo "No se han encontrado archivos *.txt para mover."
    fi
}

listar_papelera() {
    if [ -d "$PAPELERA" ];
    then
        if [ -z "$(ls -A "$PAPELERA")" ];
        then
            echo "La papelera está vacía."
        else
            echo "Contenido de la papelera:"
            ls -l "$PAPELERA"
        fi
    else
        echo "Error: La carpeta de la papelera no existe."
    fi
}

borrar_contenido() {
    if [ -d "$PAPELERA" ];
    then
        if [ -z "$(ls -A "$PAPELERA")" ];
        then
            echo "La papelera ya está vacía."
        else
            rm -rf "$PAPELERA"/*
            echo "Contenido de la papelera borrado."
        fi
    else
        echo "Error: La carpeta de la papelera no existe."
    fi
}

eliminar_papelera() {
    if [ -d "$PAPELERA" ];
    then
        rm -rf "$PAPELERA"
        echo "Carpeta de la papelera eliminada."
    else
        echo "Error: La carpeta de la papelera no existe."
    fi
}

salir() {
    exit 0
}

while true; do
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
    read -p "Seleccione una opción: " opcion

    case $opcion in
        1) contar_tmp ;;
        2) mover_tmp ;;
        3) contar_txt ;;
        4) mover_txt ;;
        5) listar_papelera ;;
        6) borrar_contenido ;;
        7) eliminar_papelera ;;
        8) salir ;;
        *) echo "Opción no válida." ;;
    esac
    read -p "Pulse Enter para continuar..."
done
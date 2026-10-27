#!/bin/bash

if [[ ! $1 =~ ^[rwx-]{9}$ ]]; then
    echo "Error: formato inválido"
    echo "Uso correcto: rwxr-x--x"
    exit 1
fi

perm="$1"

convert() {
    local bloque=$1
    local valor=0

    [[ ${bloque:0:1} == "r" ]] && ((valor+=4))
    [[ ${bloque:1:1} == "w" ]] && ((valor+=2))
    [[ ${bloque:2:1} == "x" ]] && ((valor+=1))

    echo $valor
}

user=${perm:0:3}
group=${perm:3:3}
others=${perm:6:3}

u=$(convert $user)
g=$(convert $group)
o=$(convert $others)

echo "Los permisos en letras $perm corresponden a ${u}${g}${o} en octal"

#!/usr/bin/env bash
# =======================================================#
# Because I use NixOS, so it's the working way for me :) #
# =======================================================#


# ==========#
# Functions #
# ==========#

letters_to_octal() {
    local perm="$1"

    if [[ ! $perm =~ ^[rwx-]{9}$ ]]; then
        echo "Error: invalid format (use 9 chars like rwxr-x--x)"
        exit 1
    fi

    convert_block() {
        local b=$1
        local val=0
        [[ ${b:0:1} == "r" ]] && ((val+=4))
        [[ ${b:1:1} == "w" ]] && ((val+=2))
        [[ ${b:2:1} == "x" ]] && ((val+=1))
        echo $val
    }

    u=$(convert_block ${perm:0:3})
    g=$(convert_block ${perm:3:3})
    o=$(convert_block ${perm:6:3})

    echo "$perm -> $u$g$o"
}

octal_to_letters() {
    local perm="$1"

    if [[ ! $perm =~ ^[0-7]{3}$ ]]; then
        echo "Error: invalid octal (use 3 digits like 751)"
        exit 1
    fi

    convert_digit() {
        local d=$1
        local res=""

        ((d & 4)) && res+="r" || res+="-"
        ((d & 2)) && res+="w" || res+="-"
        ((d & 1)) && res+="x" || res+="-"

        echo $res
    }

    u=$(convert_digit ${perm:0:1})
    g=$(convert_digit ${perm:1:1})
    o=$(convert_digit ${perm:2:1})

    echo "$perm -> $u$g$o"
}

# =============#
# Flags(flags) #
# =============#

case "$1" in
    -c|--convert)
        octal_to_letters "$2"
        ;;
    -rc|--reverse_convert)
        letters_to_octal "$2"
        ;;
    *)
        echo "Usage:"
        echo "$0 -c 751              # octal -> letters"
        echo "$0 -rc rwxr-x--x      # letters -> octal"
        exit 1
        ;;
esac

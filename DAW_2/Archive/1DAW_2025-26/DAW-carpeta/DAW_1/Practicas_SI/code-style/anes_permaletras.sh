#!/bin/bash

propi=`echo $1 | cut -c1`
grupo=`echo $1 | cut -c2`
otros=`echo $1 | cut -c3`
cperm=""

for var in $propi $grupo $otros
do
    perm=""
    for i in 1 2 3
    do
        resto=`expr $var % 2`
        var=`expr $var / 2`
        perm=$perm$resto
    done
    for j in 3 2 1
    do
        num=`echo $perm | cut -c$j`
        if [ $num -eq 1 ]
        then
            case $j in
                1) cperm=$cperm"x";;
                2) cperm=$cperm"w";;
                3) cperm=$cperm"r";;
            esac
        else
            cperm=$cperm"-"
        fi
    done
done
echo "$1 corresponde a $cperm"

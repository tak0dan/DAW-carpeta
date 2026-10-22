

# EJERCICIO 1 __________________________________________________________________

## ENUNCIADO ----------------------------------------------------------------------

- Dirección de red: 165.100.0.0

- Máscara: 255.255.0.0 (/16)

- Requisitos de subdivisión de red

    - Número de subredes: 1000

    - Número de hosts: 60


- Calcula: 

    - Número de bits prestados: 

    - Nueva máscara de subred: 

    - Total de subredes: 

    - Número de hosts por subred:

    - Número de hosts útiles por subred: 




## BORRADOR -------------------------------------------------------------------

- El enunciado nos dice que la IP es de tipo "/16".

    - Es decir, de los 32 bits *16 bits* son para la *red* y el resto (*16 bits*) son para el *host*. 


- Además, sabiendo que es "/16" ya sabemos también la máscara:

    IP -------------------------> 165.100.0.0
    Máscara en binario ---------> 11111111.11111111.00000000.00000000  (16 bits para el host)
    Máscara en decimal ---------> 255.255.0.0 

    - Los bits del host son los ceros consecutivos que aparecen a la derecha del todo. 


- Como se nos pide que generemos 1000 subredes, si cogemos x bits del host logramos 1000 combinaciones posibles (2^x >= 1000).

    2 4 8 16 32 64 128 256 512 1024

    2^10 = 1024  --------> *hemos de coger 10 bits del host* para cumplir ese requisito de 1000 subredes


- Veamos cómo queda entonces la nueva máscara:

    Máscara anterior --------------> 255.255.[00000000].[00000000]
    Nueva máscara -----------------> 255.255.[11111111].[11000000]
    Nueva máscara en decimal ------> 

        Recuerda los pesos (recuerda que suman 255): 128 64 32 16 8 4 2 1
            128+64+32 = 224










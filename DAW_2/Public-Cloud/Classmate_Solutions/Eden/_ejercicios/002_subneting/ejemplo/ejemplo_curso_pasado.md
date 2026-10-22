
# ENUNCIADO ___________________________________________________________________________________________________________________________________

TRABAJO 35: Cálculo de redes IP v4 (Segmentación Clase C)

A. Disponemos de la red base de clase C proporcionada por nuestro ISP 195.175.175.0/24 ----------------------------------------

Calcular una segmentación de red para *8 aulas*, las cuales requieren de un mínimo de *26 direcciones*.

Para cada una de las 8 subredes de pide (CONTESTAD EN UNA TABLA DE 9x7):

-La primera dirección útil para host
-La última dirección útil para host
-La máscara
-El número de IP's disponibles reales para host
-La dirección de red
-La dirección broadcast


B. Disponemos de la red base de clase C proporcionada por nuestro ISP 200.200.100.0/24   --------------------------------------------

Calcular una segmentación de red para *16 aulas*, las cuales requieren de un mínimo de *13 direcciones*.

Para cada una de las 16 subredes de pide (CONTESTAD EN UNA TABLA):

-La primera dirección útil para host
-La última dirección útil para host
-La máscara
-El número de IP's disponibles reales para host
-La dirección de red
-La dirección broadcast

NOTA: Se tienen que justificar los cálculos/respuestas, aunque *las soluciones se resumirán en dos tablas*.

SE PIDE: El trabajo en *.PDF con el formato tunombre_trabajo35.pdf

NOTA: Todo trabajo entregado fuera de plazo no se podrá valorar con más de un 5.






# Consulta la caja de herramientas _______________________________________________________________________________________________________

- He creado una caja de herramientas específica para la parte de "Redes" de la asignatura de sistemas informáticos. 

- En dicha caja de herramientas he resuelto un ejercicio de segmentación de IPs. Dicho ejercicio me sirve de modelo para resolver esta tarea (ya que es el mismo tipo de ejercicio).






# Acuérdate te de resumir las soluciones en dos tablas (tal y como pide el enunciado) ______________________________________________________

"NOTA: Se tienen que justificar los cálculos/respuestas, aunque *las soluciones se resumirán en dos tablas*."





# BORRADOR ___________________________________________________________________________________________________________


## RESOLUCIÓN DEL CASO A ---------------------------------------------------------------------------------------

### Recapitulando lo que nos piden

1. Resumir las soluciones finales en una tabla de 9x7.

2. Justificar los cálculos.

3. La IP de la que partimos es esta: 195.175.175.0 /24

4. Tenemos que crear 8 subredes (para 8 aulas). 

    1. En cada subred debe haber al menos 26 direcciones. 


5. Para cada una de esas subredes se pide: 
    
    1. La primera dirección útil para host
    
    2. La última dirección útil para host
    
    3. La máscara
    
    4. El número de IP's disponibles reales para host
    
    5. La dirección de red
    
    6. La dirección broadcast



### BORRADOR DEL CASO A --------------------------------------------------------------------------------------------------

1. El enunciado nos dice que nuestra IP es del tipo "/24" (Clase C).

    1. Es decir, de los 32 bits, 24 bits son para la red y el resto (8 bits) son para el host. 

    2. Además, sabiendo que es "/24" ya sabemos también la máscara: 

        IP -------------------------> 195.175.175.0  /24
        Máscara en binario ---------> 11111111.11111111.11111111.00000000   (8 bits para el host).
        Máscara en decimal ---------> 255.255.255.0

    3. Los bits del host son los ceros consecutivos que aparecen a la derecha del todo. 

    4. Como se nos pide que generemos 8 subredes, si cogemos 3 bits del host logramos 8 combinaciones posibles (2^3 = 8).
            000
            001
            010
            011
            100
            101
            110
            111
            
        
2. Veamos como queda entonces la nueva máscara:

        Máscara anterior --------------> 255.255.255.[00000000]
        Nueva máscara -----------------> 255.255.255.[111 00000]
        Nueva máscara en decimal ------> 255.255.255.224

            Recuerda los pesos (recuerda que suman 255): 128 64 32 16 8 4 2 1
                128+64+32 = 224


3. Ahora hay que calcular el "tamaño del salto" es decir, cada cuántos números empieza una nueva subred. Saber el "tamaño del salto" me permitirá saber donde empieza y donde termina cada subred sin tener que consultar la dirección en binario. 

    1. Para calcular el tamaño del salto voy a tomar la primera subred, en ella los 3 bits que hemos tomado prestados del host tienen el valor "000".
        
        Nueva máscara ----------> 255.255.255.[111 00000]
        Subred 1 EMPIEZA en: ---> 195.175.175.[000 00000]
        Subred 1 EMPIEZA en: ---> 195.175.175.0
        Subred 1 TERMINA en: ---> 195.175.175.[000 11111]
        Subred 1 TERMINA en: ---> 195.175.175.31

            Recuerda los pesos (recuerda que suman 255): 128 64 32 16 8 4 2 1
                0+0+0+16+8+4+2+1

    2. Esto indica que el tamaño del salto dentro de cada una de las subredes que voy a crear tiene un valor de 32. 



4. Con ese dato ya puedo sacar donde empiezan y donde terminan las otras 7 subredes sin tener que estar contando pesos si quiera (solo sumo cada vez 31 a la anterior IP v4 en decimal).

        Subred 1 EMPIEZA en: ---> 195.175.175.[000 00000]
        Subred 1 EMPIEZA en: ---> 195.175.175.0
        Subred 1 TERMINA en: ---> 195.175.175.[000 11111]
        Subred 1 TERMINA en: ---> 195.175.175.31
              
        Subred 2 EMPIEZA en: ---> 195.175.175.32
        Subred 2 TERMINA en: ---> 195.175.175.63

        Subred 3 EMPIEZA en: ---> 195.175.175.64
        Subred 3 TERMINA en: ---> 195.175.175.95

        Subred 4 EMPIEZA en: ---> 195.175.175.96
        Subred 4 TERMINA en: ---> 195.175.175.127

        Subred 5 EMPIEZA en: ---> 195.175.175.128
        Subred 5 TERMINA en: ---> 195.175.175.159

        Subred 6 EMPIEZA en: ---> 195.175.175.160
        Subred 6 TERMINA en: ---> 195.175.175.191

        Subred 7 EMPIEZA en: ---> 195.175.175.192
        Subred 7 TERMINA en: ---> 195.175.175.223

        Subred 8 EMPIEZA en: ---> 195.175.175.224
        Subred 8 TERMINA en: ---> 195.175.175.255


5. Ahora ya puedo responder a todas las preguntas del enunciado: 

    1. Subred 1
        1. La primera dirección útil para host ---------------------------------> 195.175.175.1
        
        2. La última dirección útil para host ----------------------------------> 195.175.175.30
        
        3. La máscara ----------------------------------------------------------> 255.255.255.224
        
            - Los cálculos de obtención de la máscara están al principio de este ejercicio (la máscara es distinta de la de la IP original, pero común a todas sus subredes).

        4. El número de IP's disponibles reales para host ----------------------> 30 (el requisito mínimo eran 28 así el resultado es óptimo).
        
            - Del 0 al 31 (ambos incluídos) son 32. Pero quitando la primera y la última (red y broadcasting) son 30

        5. La dirección de red -------------------------------------------------> 195.175.175.0
        
        6. La dirección broadcast ----------------------------------------------> 195.175.175.31


    2. Para mayor claridad, los datos del resto de subredes los expreso en forma de tabla. *<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PENDIENTE!!!* 





## RESOLUCIÓN DEL CASO B ---------------------------------------------------------------------------------------

1. El enunciado nos dice que nuestra IP es del tipo "/24" (clase C), por ello, de los 32 bits tenemos 24 para la red y 8 para el host. 

    1. Además, sabiendo que es "/24" ya sabemos también la máscara: 

        IP -------------------------> 200.200.100.0  /24
        Máscara en binario ---------> 11111111.11111111.11111111.00000000   (8 bits para el host).
        Máscara en decimal ---------> 255.255.255.0


    2. Como se nos pide que generemos 16 subredes (cada una con al menos 13 direcciones) lo que hacemos es tomar 4 bits del host para usarlos de red (ya que 2^4 = 16 combinaciones posibles).
                    0000
                    0001
                    0010
                    0011
                    0100
                    0101
                    0110
                    0111
                    1000
                    1001
                    1010
                    1011
                    1100
                    1101
                    1110
                    1111


2. Veamos como queda entonces la nueva máscara:

        Máscara anterior --------------> 255.255.255.[00000000]
        Nueva máscara -----------------> 255.255.255.[1111 0000]
        Nueva máscara en decimal ------> 255.255.255.240

            Recuerda los pesos (recuerda que suman 255): 128 64 32 16 8 4 2 1
                128+64+32+16 = 240



3. Ahora hay que calcular el "tamaño del salto" es decir, cada cuántos números empieza una nueva subred. Saber el "tamaño del salto" nos permitirá saber donde empieza y donde termina cada subred sin tener que consultar la dirección en binario. 

    1. Para calcular el tamaño del salto voy a tomar la primera subred, en ella los 4 bits que hemos tomado prestados del host tienen el valor "0000".
        
        Subred 1 EMPIEZA en: ---> 200.200.100.[0000 0000]
        Subred 1 EMPIEZA en: ---> 200.200.100.0
        Subred 1 TERMINA en: ---> 200.200.100.[0000 1111]
        Subred 1 TERMINA en: ---> 200.200.100.15

            Recuerda los pesos (recuerda que suman 255): 128 64 32 16 8 4 2 1
                0+0+0+0+8+4+2+1 = 15

    2. Esto indica que el tamaño del salto dentro de cada una de las subredes que voy a crear tiene un valor de 16.



4. Con ese dato ya puedo sacar donde empiezan y donde terminan las otras 15 subredes sin tener que estar contando pesos si quiera (solo sumo cada vez 16 a la anterior IP v4 en decimal).

        Subred 1 EMPIEZA en: ---> 200.200.100.[0000 0000]
        Subred 1 EMPIEZA en: ---> 200.200.100.0 ----------------------------------> Esta es la "dirección de red".
        Subred 1 TERMINA en: ---> 200.200.100.[0000 1111]
        Subred 1 TERMINA en: ---> 200.200.100.15 ---------------------------------> Esta es la "Dirección de broadcast".

        Subred 2 EMPIEZA en: ---> 200.200.100.16
        Subred 2 TERMINA en: ---> 200.200.100.31

        Subred 3 EMPIEZA en: ---> 200.200.100.32
        Subred 3 TERMINA en: ---> 200.200.100.47

        Subred 4 EMPIEZA en: ---> 200.200.100.48
        Subred 4 TERMINA en: ---> 200.200.100.63

        Subred 5 EMPIEZA en: ---> 200.200.100.64
        Subred 5 TERMINA en: ---> 200.200.100.79

        Subred 6 EMPIEZA en: ---> 200.200.100.80
        Subred 6 TERMINA en: ---> 200.200.100.95
        
        Subred 7 EMPIEZA en: ---> 200.200.100.96
        Subred 7 TERMINA en: ---> 200.200.100.111

        Subred 8 EMPIEZA en: ---> 200.200.100.112
        Subred 8 TERMINA en: ---> 200.200.100.127

        Subred 9 EMPIEZA en: ---> 200.200.100.128
        Subred 9 TERMINA en: ---> 200.200.100.143

        Subred 10 EMPIEZA en: ---> 200.200.100.144
        Subred 10 TERMINA en: ---> 200.200.100.159

        Subred 11 EMPIEZA en: ---> 200.200.100.160
        Subred 11 TERMINA en: ---> 200.200.100.175

        Subred 12 EMPIEZA en: ---> 200.200.100.176
        Subred 12 TERMINA en: ---> 200.200.100.191

        Subred 13 EMPIEZA en: ---> 200.200.100.192
        Subred 13 TERMINA en: ---> 200.200.100.207

        Subred 14 EMPIEZA en: ---> 200.200.100.208
        Subred 14 TERMINA en: ---> 200.200.100.223

        Subred 15 EMPIEZA en: ---> 200.200.100.224
        Subred 15 TERMINA en: ---> 200.200.100.239

        Subred 16 EMPIEZA en: ---> 200.200.100.240
        Subred 16 TERMINA en: ---> 200.200.100.255



5. Ahora ya puedo responder a todas las preguntas del enunciado: 

    1. Subred 1
        1. La primera dirección útil para host ---------------------------------> 200.200.100.1
        
        2. La última dirección útil para host ----------------------------------> 200.200.100.14
        
        3. La máscara ----------------------------------------------------------> 255.255.255.240
        
            - Los cálculos de obtención de la máscara están al principio de este ejercicio (la máscara es distinta de la de la IP original, pero común a todas sus subredes).

        4. El número de IP's disponibles reales para host ----------------------> 14 (el requisito mínimo eran 13 así el resultado es óptimo).
        
            - Del 0 al 15 (ambos incluídos) son 16. Pero quitando la primera y la última (red y broadcasting) son 14.

        5. La dirección de red -------------------------------------------------> 200.200.100.0
        
        6. La dirección broadcast ----------------------------------------------> 200.200.100.15


    2. Para mayor claridad, los datos del resto de subredes los expreso en forma de tabla. *<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< PENDIENTE!!!* 


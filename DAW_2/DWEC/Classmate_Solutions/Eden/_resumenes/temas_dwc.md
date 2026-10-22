



# INTRODUCCIÓN ___________________________________________________________

1) Las aplicaciones no han de diseñarse para que te gusten a ti como programador sino para que le gusten al cliente y que el pese a su torpeza sea capaz de navegar por ellas. 



2) La importancia de los valores "by default" (valores predeterminados) de tu aplicación. Ya que la inmensa mayoría de los usuarios no van a cambiar los valores por defecto. 





## CONTRASEÑAS -----------------------------------------------------------


1) Las mejores contraseñas:

    1. Suficiente longitud.

    2. Caracteres aleatorios. 

    3. Viñeta -> "xkcd password". 

        1. 550 años a 1000 intentos por segundo. -> eso sí, si el hacker tiene el disco duro cifrado offline porque lo ha robado (no le controlan el número de intentos) entonces en cuestión de segundos habrá entrado. 

            1. 4 palabras aleatoriamente -> y luego haz una regla nemotécnica. 

                1. Es curioso que logra esa eficacia de seguridad sin ni siquiera caracteres especiales. 

                    1. Uno entre 5000 palabras es mucho mas dificil de acertar que 1 entre 256 caracteres. 

                        1. y no hace ni falta que pongas mayúsculas ni caracteres especiales. 


    4. No repitas contraseñas

        1. Por eso te sabes unas pocas y las otras con un gestor de contraseñas. 


    5. "Uno de los mejores informáticos en seguridad del mundo dijo: una contraseña de carácteres aleatorios y muy extensa y la llevas anotada en la cartera. Si te roban la cartera te enteras y las cambias. Eso es mucho mejor que tener una contraseña de memoria pero que sea tan corta que sea facil jaquear tu cuenta."






# FASES DE UN PROYECTO EN SOFTWARE ____________________________________________________________

1. *ANÁLISIS* (especificación)


2. *DISEÑO* (planificación)


3. *IMPLEMENTACIÓN* (codificación)


4. *TESTING* (testeo) 


5. *DESPLIEGUE* (implantación)


6. *MANTENIMIENTO* 








## METODOLOGÍA SCRUM -------------------------------------------------

1) Es la que estuvimos usando en las prácticas en Sopra en 1º DAW. 










# DESARROLLO WEB ENTORNO CLIENTE _______________________________________

1) Es un monopolio absoluto de un lenguaje: JavaScript. 

    1. Aunque hay que matizar: 

        1. Los navegadores solo saben: HTML, CSS y JavaScript. 

            1. Pero si le pones un JavaScript a un navegador que no está actualizado es muy probable que dé error. 










# VERSIONES ________________________________________________

1) "Quiero que sepáis un poco por encima los rasgos clave de algunas *versiones de JavaScript*. Tener un mínimo de cultura básica al respecto es importante". 


2) Pero en navegadores el concepto de "versión" está deformado por le hecho de que sacan nuevas versiones cada muy poco tiempo -> las versiones duran muy poco tiempo. 


3) En Windows cuando llegaron a Windows 10 hubo un cambio de paradigma: lo cambiaban cada poco tiempo -> ya no encajaba en el concepto de "sistema operativo estable". Y luego además cuando llegó Windows 11 dijeron que era un sistema operativo nuevo, pero más bien era un Windows 10 modificado. 










# SOPORTE ___________________________________________________________

1) Hoy en día para ahorrar sueldos el soporte se basa en este principio: "rolling release". 

    1. Consiste en que "la última versión es la buena". Y si usas una versión anterior ellos se desentienden de los perjuicios que puedas sufrir. Ejemplo: si usas Windows 10 habiendo salido ya Windows 11 ya sabes que Windows 10 no va a recibir más parches de seguridad. 


2) Problema de esto: la *compatibilidad*. ¿Qué pasa si cojo la última versión de un sistema operativo y la aplicación que yo usaba ya no funciona?


3) Que un software tenga soporte quiere decir que un fabricante se está comprometiendo con la estabilidad de un software. 

    1. Si hay algun problema, especialmente de seguridad, el fabricante se ha comprometido a mandarte parches que corrijan dichos errores. 


4) Estabilidad:

    1. Lo más importante de la estabilidad de un software es que "no rompa las interfaces".

    2. Interfaces: 

        1. Interfaces de usuario.

        2. Interfaces entre aplicaciones -> es decir, las APIs. 

            1. Ejemplo: extensiones de un navegador -> se rompe su compatibilidad con el navegador al haber sido actualizado el navegador. 

            2. Ejemplo: actualización del sistema operativo ha roto la compatibilidad con un aplicación. 



5) Ejemplos de largo soporte: Ubuntu da un soporte de 5 años. Apple da un soporte de 5-6 años. 


6) Ventajas de largo soporte -> estabilidad. 

    1. Lo contrario es "rolling release". 










# TEMARIO __________________________________________________________________________

- Este curso veremos:

1) JavaScript. 

2) Algún framework que use JavaScript. 

    1. Veremos React. 

    2. No veremos Angular -> es el que usan en Sopra Steria. 









# REACT _______________________________________________________________

1) Usa JavaScript, pero es un *framework frontend*.

    1. Es una capa para no usar directamente JavaScript.

    2. Si lo hicieras a mano sería mucho más laborioso.

    3. Pero si empiezas a estudiar React sin saber de JavaScript vas a perderte el aprendizaje de muchas cosas que se aprenden usando JavaScript sin framework. 

        1. Y esa es una gran desventaja que la gente suele obviar en su formación como programador de JavaScript. 











# DOM _______________________________________________________________

1) Es la representación en memoria RAM del documento HTML. 

    1. En contraposición al fichero HTML.

    2. El DOM es lo que tu manipulas. 

        1. El curso pasado vimos manipulación directa del DOM mediante JavaScript. 

            1. Pero hoy en día esa estrategia ya no se usa -> lo que se usa es un Framework. 









# FRAMEWORK DE BACKEND _________________________________________________

1) En otras asignaturas veremos Laravel. 











# VANILLA _______________________________________________________________

1) Es un termino que se usa para referirnos al uso de un lenguaje sin emplear ningún framework.

    1. Ejemplo: JavaScript vanilla. 








# RUST _________________________________________________________________

1) Es un lenguaje de programación presentado en 2010 por Mozilla. 

2) Muy rápido: su rendimiento está cerca del de C/C++.

3) Dani (profe): "A C++ se lo está comiendo Rust". 

4) Se utiliza para *backend*, sistemas, herramientas de línea de comandos, motores, redes, WebAssembly, etc.









# "JS" __________________________________________________________________

1) Son las siglas que se emplean para referirnos a "JavaScript vanilla". 










# "ES" ________________________________________________________________

1) Son las siglas que se emplean para indicar qué versión de JavaScript se está usando.

    1. Ejemplo: ES6.








# "TS" _______________________________________________________________

1) TS = TypeScript

    1. Es un lenguaje de programación desarrollado por Microsoft que amplía JavaScript añadiendo principalmente *tipado estático*.

        1. JavaScript vanilla tiene tipado dinámico pero no tipado estático. 

2) Angular (framework) te obliga a usar TS. 

3) Para que pueda ser leido por el navegador requiere una transformación llamada *"transcompilar"*.


4) "TypeScript es mucho más fácil de usar que JavaScript". 

    1. "Si sabes JavaScript, entonces TypeScript lo puedes aprender en una tarde". 










# TIPADO DINÁMICO EN JavaScript VANILLA ___________________________________________

```js
let a;
a = 3;
a = "hola";
a = [3, "hola"];

```

## POR ESO TIENE SENTIDO LA CREACIÓN DE "TS" 

1) Es un lenguaje de programación desarrollado por Microsoft que amplía JavaScript añadiendo principalmente *tipado estático*.

2) TS = TypeScript -> tiene sentido que se llame así porque te permite añadir tipos (de variables) (types).








##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
#
#
#



1) He puesto ese separador grande porque a partir de ahora empieza a dar temario -> empezó a usar diapos, cuando hasta ahora solo había explicado cosas de palabra pero sin usar diapos

    1. Eso sí, las primeras diapos que usa son solo diapos sueltas (no un documento largo).

        1. Nos comenta que son conceptos clave que quiere que tengamos -> y que son de *cultura general necesaria* para cualquier informático. 









# COMPONENTES PC ________________________________________________________

1) RAM 
    1. Volátil.
    2. Rápida
    3. También llamada "memoria principal"
    4. En una memoria RAM puedes tener varias instancias de un mismo programa. 


2) Memoria persistente
    1. Es persistente. 
    2. También se le llama "memoria secundaria".
    2. Permite almacenar los programas. 
    3. Se organiza en carpetas y ficheros. 
    4. Ejemplos: disco duro, SSD, etc. 



3) Memoria ROM
    1. Almacena el firmware del equipo (BIOS, etc).


4) Unidades de entrada
    1. Teclado, ratón, etc. 


5) Unidades de salida
    1. Pantalla. 


6) Unidades de entrada y salida
    1. Pantallas táctiles, la red (comunicas con el exterior de forma bidireccional).










# JERARQUÍA EN MEMORIA _____________________________________________________________

1) Órdenes de magnitud para cada nivel:
    1. Register: decenas de bytes
    2. Cache: kb/Mb
    3. RAM: GB
    4. SSD/HDD: GB/TB y más allá.












# ARQUITECTURAS DE PROCESADOR _____________________________________________________________


## ARM -----------------------------------------------------------------------------

1) Es la arquitectura de procesador presente en móviles y tablets. 

    1. Lo que la hace idonea para ese ámbito es que está optimizada para consumir muy poca batería. 

2) Los macs actuales tienen procesador con arquitectura ARM. 

3) "Cada vez más servidores están en ARM". 



## El tipo de arquitectura de procesador condiciona como va a realizarse la *compilación* de los programas

1) El tipo de arquitectura del procesador condiciona cómo se compilan los programas, ya que el compilador debe generar instrucciones que sean compatibles con el conjunto de instrucciones y las características específicas de dicha arquitectura. 

2) Por ello, un programa compilado para una arquitectura concreta, como x86-64 o ARM, puede no funcionar directamente en otra diferente sin una nueva compilación o algún mecanismo de compatibilidad (emulación, etc).












# COMPILACIÓN _______________________________________________________________

1) Java es la excepción a la compilación clásica. 

    1. *bytecode* -> el .class (o .jar que es un conjunto de .class).

        1. Generado por Eclipse cuando le das a compilar.

        2. Es *código máquina* pero no es de un determinado procesador, sino que es usado por la máquina virtual de java. 

    2. La *maquina virtual de java* *traduce* el bytecode al lenguaje máquina que sí entiende tu procesador. 


2) Ejemplo:

    1. Compilo y genero un .exe que es código máquina (unos y ceros).





## LENGUAJE INTERPRETADO ------------------------------------------------------

1) Un lenguaje interpretado es aquel cuyos *programas* son ejecutados *mediante* un *intérprete*, que se encarga de leer y procesar el código para convertirlo en instrucciones que el ordenador pueda ejecutar. 

    1. A diferencia de un lenguaje tradicionalmente compilado, no es necesario generar previamente un programa ejecutable específico para una arquitectura concreta. 
    
    2. En la práctica, los lenguajes modernos pueden combinar interpretación con técnicas de compilación para mejorar el rendimiento.


2) Es el caso de:
    1. *Python*
    2. *JavaScript*


3) En el caso de JavaScript, tradicionalmente se considera un lenguaje interpretado porque el código JavaScript es ejecutado por un motor de JavaScript, como V8 en Google Chrome. 

    1. Sin embargo, los motores actuales utilizan también técnicas de compilación JIT (Just-In-Time), que traducen determinadas partes del código a instrucciones de máquina durante la ejecución para mejorar su rendimiento. 
    
    2. Por tanto, aunque JavaScript se suele clasificar como interpretado, su funcionamiento interno es más complejo que la simple interpretación del código línea por línea.






## COMPILACIÓN JIT ---------------------------------------------------------------------------------

1) En el caso de *JavaScript*, tradicionalmente se considera un lenguaje interpretado porque el código JavaScript es ejecutado por un motor de JavaScript, como V8 en Google Chrome. 

2) Sin embargo, los motores actuales utilizan también técnicas de *compilación JIT (Just-In-Time)*, que traducen determinadas partes del código a *código máquina* *durante la ejecución* para mejorar su *rendimiento*. 

    1. Por tanto, aunque JavaScript se suele clasificar como interpretado, su funcionamiento interno es más complejo que la simple interpretación del código línea por línea.

3) La introducción de la *compilación JIT (Just-In-Time)* permitió que JavaScript alcanzara un *rendimiento mucho mayor*. 

    1. Antes, JavaScript se ejecutaba principalmente mediante interpretación, lo que hacía que fuera relativamente *lento*. 
    
    2. Con la compilación JIT, el motor analiza el código mientras se está ejecutando y *compila las partes que se ejecutan con frecuencia a código máquina*, mejorando considerablemente el rendimiento. 
    
    3. La aparición de motores como *V8 de Google Chrome en 2008* fue especialmente importante para este cambio y contribuyó a que JavaScript pudiera utilizarse no solo para pequeñas interacciones en páginas web, sino también para *aplicaciones web mucho más complejas* y posteriormente para servidores mediante tecnologías como Node.js.









# WEBASSEMBLY __________________________________________________________________

1) WebAssembly (Wasm) es un formato de *código binario* diseñado para ejecutarse de forma eficiente en navegadores y otros entornos. 
    
    1. Permite ejecutar código de lenguajes como C, C++ o Rust con un *rendimiento cercano al código nativo* (muy alto), por lo que puede utilizarse para tareas que requieren un alto rendimiento. 
    
    2. WebAssembly no sustituye directamente a JavaScript, sino que compite con él en determinadas partes de la ejecución, especialmente en aplicaciones con una *elevada carga de procesamiento*. Ambos pueden utilizarse conjuntamente, aprovechando JavaScript para la interacción con la página y WebAssembly para las operaciones que necesitan un mayor rendimiento.

    3. Ejemplo de uso: webs de minar cripto en las que la carga de procesamiento es muy grande. 














# FAMILIAS DE SISTEMAS OPERATIVOS ___________________________________________________________________

1) Varios sistemas operativos pueden tener un mismo kernel.

2) Linux es un kernel, no es un sistema operativo completo.

3) Kernel = núcleo de un sistema operativo. 




## Hermanos, hijos, primos, sobrinos ---------------------------------------------------------------

1) Quiere que sepamos como de emparentados están diferentes sistemas operativos. 

    1. En la carpeta de introducción he puesto un documento con una imagen que muestra el parentesco (documento facilitado por el profesor).



### Tipo Unix ------------------------------------------------------------------

1. Kernel de linux. 

    1. Android. 

    2. Linux distributions

        1. Debian

            1. Ubuntu.

                1. Lliurex. 




### Servidores ---------------------------------------------------------------------

1) El más usado en servidores es Linux.

    1. Por eso es esencial saber usar Linux -> sino cuando vayas a un servidor no sabrás usarlo. 







##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
#





# REDES _______________________________________________________________________________

En la carpeta de diapos hay una subcarpeta que es de redes. Allí hay varios esquemas. 

El cliente web por excelencia son los navegadores web. 

Capa de transporte:

    - Algunas usan el protocolo TCP y otras usan el protocolo UDP. No es que uno sea mejor que el otro, su idoneidad depende de cada caso particular. 



- Si la ruta empieza por barra "/" es absoluta.

    - Si no empieza por barra "/" entonces es relativa. 

    - Pero ojo: ~/carpeta1  -> sí que es una ruta absoluta. 

        - Porque "~" equivale a /HOME/ -> es decir, tu carpeta de usuario. 



- "De esto que hemos explicado hoy en clase de las rutas seguramente caerá algo en el *EXAMEN*". 





##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
##########################################################################################
#



# Concepto de scope __________________________________________________________________________

- El scope de una variable se puede traducir como "ámbito de una variable". 

- Un scope es la región dentro de la cual un mismo nombre hace referencia a una misma cosa.

    - Si declaro dentro de un método una variable esa variable solo es visible dentro de un método (se denomina "variable local").

- Buenas prácticas: es recomendable que un método se comunique con el exterior a través de sus parámetros de entrada y salida y no a través de variables globales.





## Ejemplo ------------------------------------------------------------------------------- 


```js

let a = 3;

if(true) {
    console.log(a++);
}

console.log(a); // esto dará 3 porque el incremento anterior solo se hizo en la salida por consola (no se modificó el valor de la variable almacenada).


```








# CASTING ___________________________________________________________________________


```js

a = 1 + '3'  // la salida es 13 -> porque al sumar número y string en javascript gana string. 


``` 


En JavaScript, NaN === NaN devuelve false porque *NaN representa un valor numérico que no es un número válido* (Not-a-Number) y no se considera igual a ningún valor, ni siquiera a sí mismo.


```js
NaN === NaN;  // la salida de eso es False.

```





























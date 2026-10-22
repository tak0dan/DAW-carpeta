
# TAREA 2: ACTIVIDADES CSS ________________________________________________________________________________

## INTRUCCIONES GENERALES ---------------------------------------------------------------------------------------------

5 ejercicios prácticos con dificultad progresiva. 

Material de referencia 

    UD02. Hojas de estilo CSS Contenidos

- Reglas CSS, formas de aplicación, cascada, especificidad y display Uso sugerido

    - Trabajo individual o por parejas Incluye:

        1. Código inicial, 
        
        2. solución *razonada*, 
        
        3. pruebas y rúbrica



| Material de referencia | UD02. Hojas de estilo CSS                                            |
|------------------------|----------------------------------------------------------------------|
| Contenidos             | Reglas CSS, formas de aplicación, cascada, especificidad y `display` |
| Uso sugerido           | Trabajo individual o por parejas                                     |
| Incluye                | Código inicial, solución razonada, pruebas y rúbrica                 |



- Archivos y *entrega*:
1. Crear una *carpeta por ejercicio*.
2. Usar *index.html* y, desde el ejercicio 2, *estilos.css*.
3. Abrir index.html en el navegador y adjuntar una *captura final*.
4. Entregar también una breve *respuesta* a las *preguntas de comprobación*.






##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################







## EJERCICIO 1: Primeras reglas: cartel del aula _________________________________________

### ENUNCIADO -----------------------------------------------------------------------------

Una academia necesita convertir un HTML sin formato en un pequeño cartel informativo. Añade CSS incrustado dentro de <style> en la cabecera.

Código inicial: index.html

```html
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Aula web</title>
</head>
<body>
    <h1>Aula de Diseño Web</h1>
    <h2>Normas básicas</h2>
    <p>Guarda tus archivos con nombres claros.</p>
    <p>Comprueba siempre el resultado en el navegador.</p>
    <a href="#">Consultar programación</a>
</body>
</html>

```


- Tareas:

1) Fondo general #f4f7fb y fuente Arial, sans-serif. ______________________________________________ HECHO

2) h1 en color #17365d y tamaño 32px.  ______________________________________________ HECHO

3) h2 en color #2f75b5.  ______________________________________________ HECHO

4) Párrafos con color #333333 y line-height: 1.6.  ______________________________________________ HECHO

5) Enlace en color #548235 y sin subrayado.  ______________________________________________ HECHO

6) No se permiten atributos style en las etiquetas HTML.  ______________________________________________ HECHO

7) Darle un último repaso a todo viéndolo en el navegador. 

    1. Fondo general #f4f7fb y fuente Arial, sans-serif. ______________________________________________ SÍ

    2. h1 en color #17365d y tamaño 32px.  ______________________________________________ SÍ

    3. h2 en color #2f75b5.  ______________________________________________ SÍ

    4. Párrafos con color #333333 y line-height: 1.6.  ______________________________________________ SÍ

    5. Enlace en color #548235 y sin subrayado.  ______________________________________________ SÍ

 


### BORRADOR -----------------------------------------------------------------------------------

1) Lo he resuelto creando el propio archivo index.html (ver allí la respuesta).


##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################



## EJERCICIO 2: Tarjeta de curso con clases e identificador _______________________________________________

### ENUNCIADO -----------------------------------------------------------------------------------------

Crea una tarjeta que anuncie un curso. El HTML ya contiene clases e identificadores. Todo el diseño debe residir en estilos.css.

Código inicial: index.html

```html
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>Curso CSS</title>
    <!-- Enlaza aquí los estilos .css -->
</head>
<body>
    <article class="tarjeta">
        <p class="etiqueta">NUEVO CURSO</p>
        <h1>Introducción a CSS</h1>
        <p>Aprende a separar contenido y presentación.</p>
        <p id="plazas">12 plazas disponibles</p>
        <a class="boton" href="#">Ver información</a>
    </article>
</body>
</html>

```

- Tareas: 

1) Enlaza estilos.css con <link rel="stylesheet" href="estilos.css">. ________________________________ HECHO y comprobado con el navegador

2) body: fondo #eef3f8 y fuente Arial. ___________________________________________ HECHO y comprobado con el navegador

3) tarjeta: ancho 360px, fondo blanco, borde 1px solid #c9d6e2, padding 24px y margen 40px auto. ___________ HECHO y comprobado con el navegador

4) etiqueta: color #2f75b5 y font-weight: bold. ___________________________________________ HECHO y comprobado con el navegador

5) plazas: color #b45f06. __________________________________________ HECHO y comprobado con el navegador

6) boton: fondo #2f75b5, texto blanco, padding 10px 16px, sin subrayado y display: inline-block. __________________ HECHO y comprobado con el navegador



### BORRADOR -----------------------------------------------------------------------------------

1) Lo he resuelto creando los propios archivos index.html y styles.css (ver allí la respuesta).


##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################





## EJERCICIO 3: MENÚ HORIZONTAL Y PROPIEDAD DISPLAY ____________________________________________________

### ENUNCIADO -------------------------------------------------------------------------------------------

Transforma una lista vertical de navegación en un menú horizontal. Después compara el efecto de inline e inline-block.

```html
<nav class="menu">
    <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#modulos">Módulos</a></li>
        <li><a href="#contacto">Contacto</a></li>
    </ul>
</nav>

<p>Texto con una <span class="aviso">fecha importante</span> dentro de la línea.</p>

```

Tareas:

1) Eliminar viñetas y el padding inicial del ul. _______________________________________________ HECHO y comprobado en el navegador. 

2) Colocar los li en horizontal mediante display: inline. ______________________________________ HECHO y comprobado en el navegador.

3) Aplicar a los enlaces display: inline-block, padding 10px 14px, fondo #17365d, texto blanco y sin subrayado. ____ HECHO y comprobado en el navegador.

4) Separar cada opción con margin-right: 6px. ______________________________________________ HECHO y comprobado en el navegador.

5) Dar a .aviso width: 180px, fondo #fff2cc y padding: 4px. Primero usar display: inline y observar el ancho. Después cambiar a inline-block. ___________________ HECHO y comprobado en el navegador.

6) Explicar en dos frases por qué width no se aprecia con inline, pero sí con inline-block. ___________________ Escrito en el propio CSS. 





### RESPUESTA A LA PREGUNTA TEÓRICA INCLUIDA EN ESTA ACTIVIDAD --------------------------------------------------------------------------

Explicar en dos frases por qué width no se aprecia con inline, pero sí con inline-block:

    - Con display: inline, la propiedad width no tiene efecto porque estos elementos ocupan solo el espacio necesario para su contenido.

    - Con display: inline-block, el elemento sigue en la misma línea, pero permite establecer un ancho y un alto.







### BORRADOR -----------------------------------------------------------------------------------

1) Lo he resuelto creando los propios archivos index.html y styles.css (ver allí la respuesta).


##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################





## EJERCICIO 4: DETECTIVE DE LA CASCADA _______________________________________________________

### ENUNCIADO ----------------------------------------------------------------------------------

Sin abrir todavía el navegador, predice el color final de cada texto. Después comprueba el resultado y modifica el CSS sin usar !important para cumplir el diseño solicitado.

-------------------------------------------------------------------------------------------------

```html

<section id="panel" class="panel">
    <h2 class="destacado">Avisos</h2>
    <p class="destacado">Entrega el viernes.</p>
    <p id="urgente" class="destacado">Cierra la plataforma a las 20:00.</p>
</section>

```
-------------------------------------------------------------------------------------------------

```css

p { color: #333333 }

.destacado { color: #2f75b5 }

.panel p { color: #548235; }

#urgente { color: #c00000; }

.panel .destacado { color: #7030a0; }

p { color: #b45f06; }

```

-------------------------------------------------------------------------------------------------


Tareas:

1) Anota el selector que gana para el h2, el primer p y #urgente.

    - Se refiere a: 

        - Para cada elemento (`h2`, primer `p` y `#urgente`), identifica *todos los selectores del CSS* que se aplican a ese elemento. Después, indica cuál de esos selectores tiene mayor especificidad y, por tanto, cuál prevalece.


2) Consigue que el h2 sea azul, el primer p sea verde y #urgente sea rojo.

3) No cambies el HTML y no uses estilos en línea ni !important.

4) Añade al final un comentario CSS que explique por qué tus reglas ganan.






### PREGUNTA 4.1 ---------------------------------------------------------------------------------


1) ENUNCIADO ---------------------------------------------------------------------------------------

- Anota el selector que gana para el h2, el primer p y #urgente.

    - Se refiere a: 

        - Para cada elemento (`h2`, primer `p` y `#urgente`), identifica *todos los selectores del CSS* que se aplican a ese elemento. Después, indica cuál de esos selectores tiene mayor especificidad y, por tanto, cuál prevalece.



2) ESTRATEGIA ----------------------------------------------------------------------------------------

1. He de *ir uno por uno* con todos los *selectores* del CSS y consultar el HTML para ver si afectan al elemento en cuestión indicado por el enunciado (`h2`, primer `p` y `#urgente`).



#### Elemento h2 ---------------------------------------------------------------------------------------

1. "Ir uno por uno con todos los selectores":

    1. p {...} (el primero) -> no le afecta porque porque <p> es un nivel inferior (por debajo).

    2. .destacado {...} *sí* le afecta porque "<h2 class="destacado">"

    3. . panel p {...} no le afecta porque <p> es un nivel inferior (por debajo).

    4. #urgente {...} no le afecta porque es un <p> ubicado por debajo (nivel inferior).

    5. .panel .destacado {...} *sí* le afecta porque:
                                                <section id="panel" class="panel">
                                                    <h2 class="destacado">Avisos</h2>
    
    6. p {...} (el segundo) -> no le afecta. 


2. Por ello los candidatos son: 

    1. .destacado {...} 

    2. .panel .destacado {...}  -> *tiene un mayor grado de especificidad y por lo tanto es el que prevalece*. 




#### Elemento: primer "p" ------------------------------------------------------------------


1. "Ir uno por uno con todos los selectores":

    1. p {...} (el primero) -> *sí* le afecta porque afecta a todos los <p>

    2. .destacado {...} -> *sí* le afecta porque el class "destacado" le incluye.
                                                <section id="panel" class="panel">
                                                    <h2 class="destacado">Avisos</h2>
                                                    <p class="destacado">Entrega el viernes.</p> 

    3. .panel p {...} -> *sí* le afecta porque es un <p> incluído dentro del id "panel".

    4. #urgente {...} -> *no* le afecta porque el id "urgente" incluye al segundo <p> pero no al primero. 

    5. .panel .destacado {...} -> *sí* le afecta porque el class "destacado" le incluye.

        - *Las clases tienen mayor especificidad que los selectores de elemento y por ello este es el selector que prevalece (mayor especificidad).*

    6. p {...} (el segundo) -> *sí* le afecta porque afecta a todos los <p>.


2. RESPUESTA: -----------------------------------------------------------------------------------------

    1. .panel .destacado {...} 

        - *Las clases tienen mayor especificidad que los selectores de elemento y por ello este es el selector que prevalece (mayor especificidad).*






#### Elemento: "#urgente" -------------------------------------------------------------------------------

1. "Ir uno por uno con todos los selectores":

    1. p {...} (el primero) -> *sí* le afecta porque afecta a todos los <p>

    2. .destacado {...} -> *sí* le afecta porque el segundo <p> es id "urgente" y class "destacado".

    3. .panel p {...} -> *sí* le afecta porque está dentro de panel y es un <p>.

    4. #urgente {...} -> *sí* le afecta porque es literalmente él: id "urgente". 

        - Un selector por *ID* tiene mayor especificidad que cualquier selector formado únicamente por clases o elementos. Por tanto, un solo ID puede prevalecer sobre varias clases o varios selectores de elemento. 

            - Y por lo tanto este es el selector que prevalece. 

    5. .panel .destacado {...} -> *sí* le afecta porque el segundo <p> es id "urgente" y class "destacado" y está dentro del class "panel". 

    6. p {...} (el segundo) -> *sí* le afecta porque afecta a todos los <p>


2. RESPUESTA: -----------------------------------------------------------------------------------------

    1. #urgente {...} 

        - Un selector por *ID* tiene mayor especificidad que cualquier selector formado únicamente por clases o elementos. Por tanto, un solo ID puede prevalecer sobre varias clases o varios selectores de elemento. 
            
            - Y por lo tanto este es el selector que prevalece. 




### PREGUNTA 4.2 -------------------------------------------------------------------------------------

2) Consigue que:

    1. el h2 sea azul _________________________ HECHO y comprobado en el navegador. 
    
    2. el primer p sea verde _____________________________ HECHO y comprobado en el navegador. 
    
    3. #urgente sea rojo. __________________________________ HECHO y comprobado en el navegador. 

    4. *No cambies el HTML* y no uses estilos en línea ni !important. 

    5. Añade al final un comentario CSS que explique por qué tus reglas ganan. ______________________ HECHO






##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################
##############################################################################################




## EJERCICIO 5: MINIWEB DEL AULA _____________________________________________________________________

### ENUNCIADO ----------------------------------------------------------------------------------------

Crea una página informativa para un aula de desarrollo web. Debe incluir cabecera, menú, contenido principal, dos avisos y pie. Se facilita el HTML: tu trabajo principal es programar estilos.css.


```html

<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Aula de Desarrollo Web</title>
        <link rel="stylesheet" href="estilos.css">
    </head>

    <body>
        <header class="cabecera">
            <h1>Aula de Desarrollo Web</h1>
            <p>Recursos y avisos de la semana</p>
        </header>

        <nav class="menu">
            <a href="#agenda">Agenda</a>
            <a href="#recursos">Recursos</a>
            <a href="#contacto">Contacto</a>
        </nav>

        <main id="contenido">
            <section class="bloque" id="agenda">
                <h2>Agenda</h2>
                <p class="aviso">Martes: práctica de HTML.</p>
                <p class="aviso urgente">Jueves: entrega de CSS.</p>
            </section>

            <section class="bloque" id="recursos">
                <h2>Recursos</h2>
                <p>Consulta la documentación y revisa tus archivos.</p>
                <a class="boton" href="#">Abrir recursos</a>
            </section>
        </main>

        <footer id="contacto">
            Contacto del aula
        </footer>
    </body>
</html>

```




Tareas:

1) Aplicar box-sizing: border-box a todos los elementos con el selector universal. ___________________________________________ HECHO

2) body sin margen, fuente Arial, color #263238 y fondo #f4f7fb. _______________________________ HECHO y comprobado en el navegador

3) Cabecera con fondo #17365d, texto blanco y padding 28px. ___________________________________________ HECHO y comprobado en el navegador

4) Menú con fondo #d9eaf7 y padding 12px 28px. Sus enlaces deben ser inline-block. __________________ HECHO y comprobado en el navegador

5) Contenido con width: 80%, max-width: 900px y margin: 28px auto. ___________________________________________ HECHO y comprobado en el navegador
 
6) Cada .bloque debe tener fondo blanco, borde, padding y margen inferior. ___________________________ HECHO y comprobado en el navegador

7) Todos los .aviso con fondo azul claro; .aviso.urgente debe terminar con fondo amarillo claro y borde izquierdo rojo. ________ HECHO y comprobado en el navegador

8) .boton con apariencia de botón y display: inline-block. ___________________________________________ HECHO y comprobado en el navegador

9) Pie centrado, fondo #17365d, texto blanco y padding 18px. ___________________________________________ HECHO y comprobado en el navegador



- Este es el último ejercicio de esta tarea. 
























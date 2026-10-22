
# INTRODUCCIÓN --------------------------------------------------------------------------------

- En el examen no se nos permite tener acceso a nuestros ejercicios ni ningún otro tipo de archivo. Solo contamos con apuntes *impresos*, es decir, una "chuleta" que nos sirva a modo de recordatorio. 

    - Por lo que he podido entender no esta permitido que que contemos con ejercicios enteros de ejemplo en el examen, así que los ejemplos incluídos en esta "chuleta" deben ser *específicos y pequeños* (de la función que esté explicando en ese apartado) en lugar de ejercicios enteros resueltos. 







# font-family, font-size, color, text-align, margin -----------------------------------------------------------------------------

```css
body {
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: #1b1b32;
    color: #f5f6f7;   
    font-family: Tahoma;
    font-size: 16px;
    text-align: center;
}

```

- Color determina el color del texto. 








# margin: vertical horizontal -------------------------------------------------

- La forma más abreviada es:

  margin: vertical horizontal


- La otra opción es:

  margin: arriba derecha abajo izquierda


- Otra opción es ir uno a uno:

  margin-top: 1px solid #C5C5C5;
  margin-bottom: 1px solid #C5C5C5;













# vertical-align --------------------------------------------------------------------

```css
.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle; 
}

```












# Las comas pueden generar errores ---------------------------------------------------------

```css
.inline {
  width: unset;
  margin: 0 0.5em 0 0;  -> estos valores van sin comas, sino daría error. 
}


```








# max-width, min-width --------------------------------------------------------------------------------

```css

form {
    margin: 0 auto;
    max-width: 500px;
    min-width:300px;
    width:60vw;
}

```







# El orden es arriba, derecha, abajo, izquierda ---------------------------------------------

- Ejemplo: 

```css
fieldset {
  border: none;
  padding: 2rem 0 2rem 0;
}

```







# last-of-type ------------------------------------------------------------------------------

- Sirve para seleccionar el último elemento de un típo específico. 

```css
fieldset:last-of-type {
  border-bottom: none;
}

```








# width: 100% --------------------------------------------------------------------------

- Sirve para hacer que un elemento hijo *ocupe todo el ancho* del elemento padre. 

```css

input, textarea, select {
  width: 100%;
}

```











# modelo HSL ----------------------------------------------------------------------------------

Otra forma de representar colores es el modelo HSL, siglas de hue, saturation y lightness (matiz, saturación y luminosidad).

La función CSS hsl acepta 3 valores: un número del 0 al 360 para el *tono* (el "color" en sí), un porcentaje del 0 al 100 para la *saturación* y un porcentaje del 0 al 100 para la *luminosidad*.

    hsl(tono, saturacion, luminosidad)

```css
h1 {
    background-color: hsl(240, 100%, 50%);     
}

```








# linear-gradient ----------------------------------------------------------------------------------

- Algo a recordar es que la función linear-gradient en realidad crea un elemento image, y generalmente se *combina* con la propiedad *background* que puede aceptar una imagen como valor.

    linear-gradient(gradientDirection, color1, color2, ...);

    - Con gradientDirection de 90deg haces que el gradiente sea *horizontal*.

        - Si por el contrario le pones el valor 180deg el gradiente es *vertical*. 


- Las paradas de color permiten afinar el emplazamiento de los colores a lo largo de la línea que sigue el gradiente. Se definen, en la función linear-gradient, mediante unidades de longitud, como px o porcentajes, a continuación del color del cual se quiere definir la parada.
    
    - Por ejemplo, en este degradado rojo-negro, la transición de rojo a negro ocurre en el punto 90% a lo largo de la línea de degradado, por lo que el rojo ocupa la mayor parte del espacio disponible:

        linear-gradient(90deg, red 90%, black);


- Si en la función linear-gradient no se especifica el argumento gradientDirection, por defecto será de 180 grados, disponiendo los colores de arriba a abajo.



```css
.red {
  background: linear-gradient(180deg, rgb(255, 0, 0) 0%, rgb(0, 255, 0) 50%, rgb(0, 0, 255) 100%);
}

```








# opacity ---------------------------------------------------------------------------------

```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: white;
  opacity: 0.5;
}

```







# rgba --------------------------------------------------------------------------------

Te permite señalar color y opacidad.

```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255,255,255,0.5);
}

```





# Aumentar el blur ------------------------------------------------------------------

- Requiere usar la propiedad: filter


```css
.one, .two {
  filter: blur(1px);
}

```







# Selector que alude a varias clases: coma --------------------------------------

Usas la coma. 

```css
.cap, .sleeve {
  display: inline-block;
}

```






# MARGIN vs PADDING ____________________________________________________________________________________

1) Creo que con estos dos datos se entiende bastante bien la diferencia:

    1. Con padding puedes hacer que un elemento "li" (lista) tenga más área de click y si le pones un color de fondo ya tendrá aspecto de botón. 

    2. Con margin puedes aumentar el espaciado que hay entre elementos "li" (lista).


2) Es decir:

    1. Con padding aumentas el área total del elemento.

    2. Con margin aumentas el espacio libre que rodea al elemento.











# DISPLAY BLOCK vs DISPLAY INLINE-BLOCK _______________________________________________________________

1. "display: block;" vs. "display: inline-block;" 


2. *"display: block;"*  ->  **COLUMNA**

    - El elemento pasa a ocupar toda la línea disponible horiontalmente. 

    - Siempre empieza en una línea nueva y después de él todo lo siguiente queda debajo.

    - Permite asignarle ancho (width) y alto (height).



3. *"display: inline-block;"*  ->  **HORIZONTAL**

    - El elemento se comporta como un inline (en línea), es decir, puede estar junto a otros elementos en la misma línea.

        - Pero, al mismo tiempo, y a diferencia de los "display: inline" (cuyo tamaño depende solo del contenido) *respeta el width y el height* que le especifiques. 



            
4. TRUCO visual: Para los *iconos del menú*: 

    - a. *inline-block* es ideal si quieres que estén uno junto a otro *HORIZONTALMENTE*. 
    
    - b. *block* si quieres que queden en *COLUMNA*.



5. *"display: inline"* ----------------------------------------------------------------------------------------

    - Con display: inline, la propiedad width no tiene efecto porque estos elementos *ocupan solo el espacio necesario* para su contenido.

    - Con display: inline-block, el elemento sigue en la misma línea, pero permite establecer un ancho y un alto.







# border-style: solid --------------------------------------------------------------

Hasta que no añadas esa línea el borde sera invisible. 






# border-left: width style color; ------------------------------------------------

Esta es la versión abreviada para indicar las 3 propiedades del borde. 

Notese que con border a secas nos referimos a los 4 bordes y con border-left nos referimos solo al izquierdo. 



```css
.sleeve {
  width: 110px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border-left: 10px solid black;    -------------->  No uses comas entre los valores porque dará error. 
}

```








# box-shadow: offsetX offsetY blurRadius spreadRadius color; -----------------------------------------------------

- Un valor positivo de offsetX mueve la sombra hacia la derecha y un valor negativo la mueve hacia la izquierda

- Un valor positivo de offsetY mueve la sombra hacia abajo y un valor negativo la mueve hacia arriba

- La altura y el ancho de la sombra se determinan por la altura y el ancho del elemento al que se aplica. También puedes usar un valor opcional *spreadRadius* para extender el alcance de la sombra.

- Observa que los límites de la sombra son muy bruscos. En la propiedad box-shadow, se encuentra el valor opcional *blurRadius*.

    box-shadow: offsetX offsetY blurRadius spreadRadius color;


```css
.blue {
  background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%), hsl(240, 56%, 42%));
  box-shadow: 5px 5px 5px 5px blue;
}

```









# border-radius: superiorIzquierda superiorDerecha inferiorDerecha inferiorIzquierda -----------------

```css

.three {
  border-radius: 30px 25px 60px 12px;
}


```








# Cómo rotar un elemento --------------------------------------------

- El valor negativo es para rotarlo en sentido contrario a las agujas del reloj. 

  transform: rotate(-0.6deg);


```css
.one {
  transform: rotate(-0.6deg);
}

```











# Estructura básica HTML ----------------------------------------------------------------


## Caso concreto de un formulario --------------------------------------------------------

No hay que dar por hecho que nos la den en el examen. Prefiero tenerla anotada por si a caso. 

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css"/>
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form method="post" action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label for="first-name">Enter Your First Name: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Enter Your Last Name: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Enter Your Email: <input id="email" name="email" type="email" required /></label>
        <label for="new-password">Create a New Password: <input id="new-password" name="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <legend>Account type (required)</legend>
        <label for="personal-account"><input id="personal-account" type="radio" name="account-type" checked /> Personal</label>
        <label for="business-account"><input id="business-account" type="radio" name="account-type" /> Business</label>
      </fieldset>
      <fieldset>
        <label for="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="file" /></label>
        <label for="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
        <label for="referrer">How did you hear about us?
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label for="bio">Provide a bio:
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
        </label>
      </fieldset>
      <label for="terms-and-conditions">
        <input id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>

```










# Cómo eliminar la barra de desplazamiento -------------------------------------------------

Se hace estableciendo el margin a cero. 


```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
}

```









# Selector de atributos: input[type="submit"] -----------------------------------------

```html
<input type="submit" value="Submit" />

```


```css
input[type="submit"] {
  display:block;
  width: 60%;
}

```






# overflow: hidden -----------------------------------------------------------------------------------------------

```css

div {
    background-color: green;
    padding: 10px;
    overflow: hidden;  /* overflow: hidden hace que el div sí contenga los elementos flotantes (que el float había sacado del flujo) y calcule su altura teniéndolos en cuenta.*/
}


.anterior {
    float: left;
}


.siguiente {
    float: right;
}


```







# Hacer que los enlaces NO tengan subrayado ------------------------------------------------

```css
a {
    text-decoration: none;
}

```








# Texto en negrita ------------------------------------------------------

```css

caption {
    font-weight: bold;
}

```








# Hacer que una tabla ocupe solo lo que ocupa su contenido ---------------------------------

```css
table {
    width: max-content;
}


```








# Cómo referirte a los hijos pares o impares ------------------------------------------------

```css

tbody tr:nth-child(odd) {
    background-color: #90EE90;
}

```

- tbody = cuerpo de la tabla.
- tr = filas de la tabla (table row)
- *":nth-child(odd)"* = selecciona los elementos que ocupan una posición impar entre sus hermanos: primero, tercero, quinto, etc.







# Que las celdas de la tabla no tengan doble línea de borde

- Es raro pero es así: por defecto las celdas tienen doble línea de borde (la suya y la de la adyacente suman 2 lineas y queda feo).

```css
table {
    width: max-content;
    margin: 20px 20px;
    border-collapse: collapse;
}

```




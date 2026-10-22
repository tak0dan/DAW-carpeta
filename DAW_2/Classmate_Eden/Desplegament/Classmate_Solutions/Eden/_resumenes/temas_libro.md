

# REFERENCIA _______________________________________________________________________

1) Da las clases siguiendo el libro que nos ha pasado. 

    1. El libro es: "Implantaciones de Aplicaciones Web".

        - Editorial Ra-Ma.

        - ISBN: 978-84-9964-160-7



2) El problema es que este libro *no permite seleccionar texto* (son fotos del libro en lugar de texto digitalizado como paso con otras de las asignaturas que nos da Jesús).


3) Y hay otro problema todavía mayor: las páginas estan *cortadas por los bordes* por lo que a todas las frases les faltan palabras. 





####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
# 







# CAPÍTULO 1: CONCEPTOS GENERALES DE LA ARQUITECTURA DE APLICACIONES WEB ______________________________

## INTRODUCCIÓN ----------------------------------------------------------------------------------------------

1) Concepto de aplicación de escritorio.

2) Concepto de aplicación web. 




## APLICACIONES WEB vs APLICACIONES DE ESCRITORIO -------------------------------------------------------------

1) Al usar aplicaciones web dependes de un tercero, lo cual puede llevar asociado el pago de una suscripción. 

2) ¿Toda aplicación de escritorio podría ser una aplicación web?

    1. Es posible, pero en muchas de ellas no sería viable. 

        1. Ejemplo: aplicaciones que requieren mucha capacidad de procesamiento (como por ejemplo renderizado de modelados 3D).
    
    2. ¿Pero entonces cuál es la ventaja de las aplicaciones web? 

        1. Sitios remotos de trabajo con información compartida. Eso es algo que una aplicación de escritorio jamás podría hacer. 




## SEGURIDAD -------------------------------------------------------------------------------------------

1) En las aplicaciones web es en el servidor en el que se hace la inversión en seguridad. 

    1. Servicios en la nube con menor cadencia implica un coste de inversión mucho mayor. Ejemplo: AWS -> un gran servicio pero muy muy caro. 





## ARQUITECTURA CLIENTE - SERVIDOR -----------------------------------------------------------------

1) Página 23 del libro (Página 21 del PDF). 










## MODELO VISTA-CONTROLADOR (también llamada "arquitectura multicapa") ---------------------------------------









## 1.5.- PROTOCOLOS DE APLICACIÓN MÁS UTILIZADOS -----------------------------------------------------------

1) Página 24 del libro (22 del PDF).

2) PROTOCOLO HTTPS

3) PROTOCOLO FTP

    1. Para la transferencia de archivos desde diferentes IPs. 

4) PROTOCOLO SMTP

    1. Para poder enviar correo electrónico a los usuarios de nuestra aplicación web. 












####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
# 








# CAPÍTULO 2: PREPARACIÓN DEL ENTORNO DE DESARROLLO Y SERVIDORES DE APLICACIONES WEB ___________________________


## INTRODUCCIÓN --------------------------------------------------------------------------------------------

1) Esta parte del libro se la salta (Tema 2) y *nos indica que lo veremos en forma de una práctica de clase*.



## DESCARGA XAMPP EN WINDOWS --------------------------------------------------------------------------------

1) En este tema hacemos una pausa para hacer una primera práctica con XAMPP. 














####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
# 
#






# CAPÍTULO 3: GESTORES DE CONTENIDOS ___________________________________________________________________


## INTRODUCCIÓN ------------------------------------------------------------------------------------------

1) Tema 3 = "Gestor de contenidos". 

2) Ha dicho que este tema lo estudiaremos del libro de texto. 




## 3.1.- DEFINICIÓN DE GESTOR DE CONTENIDOS O CMS -----------------------------------------------------------

Un gestor de contenidos o CMS (Content Management System) es una aplicación informática que permite crear, organizar, editar, publicar y administrar contenidos de una página web de forma sencilla, sin necesidad de programar directamente todo el sitio web.

Algunos ejemplos de CMS son WordPress, Joomla y Drupal.


### 3.1.1.- HISTORIA DE LOS CMS ---------------------------------------------------------------------------------------

Historia de los CMS

Los CMS (Content Management Systems) surgieron para facilitar la creación y gestión de páginas web, evitando que los usuarios tuvieran que modificar directamente el código HTML cada vez que querían actualizar un contenido.

Década de 1990: aparecen los primeros sistemas de gestión de contenidos, inicialmente orientados a grandes empresas, medios de comunicación y portales web.
Finales de los años 90 y principios de los 2000: los CMS empiezan a popularizarse con sistemas como Drupal (2001) y WordPress (2003), facilitando que usuarios con pocos conocimientos técnicos pudieran crear y administrar sitios web.
Década de 2010: los CMS se consolidan como una de las principales herramientas para desarrollar sitios web. Se incorporan diseños adaptables a dispositivos móviles, extensiones, sistemas de plantillas y herramientas de administración cada vez más completas.
Actualidad: los CMS permiten gestionar no solo páginas web tradicionales, sino también tiendas online, blogs, portales corporativos y otros tipos de contenidos digitales. Además, han evolucionado hacia soluciones más flexibles, incluyendo los CMS headless, que separan la gestión del contenido de su presentación.




## 3.1.2.- FUNCIONAMIENTO DE UN CMS -------------------------------------------------------------------------------

Un CMS funciona mediante un panel de administración desde el que el usuario puede crear, editar, organizar y publicar contenidos sin necesidad de modificar directamente el código de la página web.

De forma general, su funcionamiento es el siguiente:

1. El usuario accede al panel de administración e inicia sesión.

2. Crea o modifica contenidos, como páginas, textos, imágenes, vídeos o menús.

3. El CMS almacena estos contenidos en una base de datos.

4. Cuando un visitante accede a la página web, el *CMS obtiene la información necesaria de la base de datos y la combina con la plantilla o tema utilizado*.

5. El servidor genera la página web y la envía al navegador del visitante, que se encarga de mostrarla.

En resumen, un CMS permite separar la gestión de los contenidos de la programación y presentación de la página web, facilitando su administración y actualización.







## 3.1.3.- ¿PARA QUIÉN VAN DESTINADOS LOS CMS? ----------------------------------------------------------------------

¿PARA QUIÉN VAN DESTINADOS LOS CMS?

Los CMS están destinados principalmente a personas y organizaciones que necesitan crear y gestionar una página web sin tener que programarla completamente desde cero.

Entre sus principales usuarios se encuentran:

- Personas sin conocimientos avanzados de programación que quieren crear una página web.
- Empresas y organizaciones que necesitan gestionar su página web.
- Profesionales y creadores de contenido que publican artículos, noticias, imágenes o vídeos.
- Desarrolladores web, que pueden utilizar los CMS como base para crear y personalizar sitios web.

En general, los CMS están pensados para facilitar la creación y administración de contenidos web, especialmente para usuarios que no quieren depender constantemente de un programador para realizar cambios en su página.











## 3.2.- CONCEPTOS GENERALES DE UN CMS -------------------------------------------------------------------------

- Gestor de contenidos: un CMS permite crear, editar, organizar y publicar los contenidos de un sitio web de forma sencilla, facilitando su mantenimiento y actualización.

- Implantación del sistema: el CMS debe implantarse de acuerdo con las necesidades del cliente, teniendo en cuenta el tipo de página web, los contenidos que se gestionarán y las funcionalidades necesarias.

- Elección de la plataforma: es importante seleccionar el CMS que mejor se adapte a los objetivos del cliente. No todas las plataformas ofrecen las mismas funcionalidades, posibilidades de personalización o facilidad de administración.

- Posicionamiento en buscadores: la cantidad y organización de los contenidos de un portal influyen en su posicionamiento orgánico en los buscadores. Por ello, es importante planificar correctamente la estructura del sitio y la organización de sus contenidos desde el principio.

- Escalabilidad y mantenimiento: también es conveniente elegir una solución que permita ampliar el sitio web y añadir nuevos contenidos o funcionalidades a medida que las necesidades del proyecto crezcan.







## 3.3.- ESTRUCTURA DE UN CMS -----------------------------------------------------------------------------------------

- Las diferentes funcionalidades ofrecidas por un CMS pueden ser separadas en diferentes categorías. 

1) Front-end y back-end: un CMS consiste en:

    1. Un Front-end, que es el sitio web (website), el cual los visitantes y los usuarios registradoes pueden ver.

    2. Un Back-end, que contiene la parte de administración, localizado en una diferente URL al sitio web, es donde se realizan las tareas de configuración, mantenimiento, limpieza, creación de estadísticas, etc. 


2) Configuración:   

    1. Las decisiones de configuración que se aplican al sitio web son especificados en Configuration settings. 

    2. Esto incluye el título del sitio web, las palabras para los motores de búsqueda, opciones que permiten o prohíben darse de alta como usuario en el sitio web y muchas otras funciones. 



3) Derechos de acceso:

    1. En un CMS, los nombres de usuario son asignados a personas que están involucradas en el desarrollo de un sitio web y su administración y poseen derechos de acceso.

    2. El rango de derechos va desde un usuario simplemente registrado, como autor o editor, hasta la categoría de administrador, que tiene total control sobre el dominio. 

    3. Según los derechos asignados, 



4) Contenido: 

    1. ...



5) Plantillas:

    1. ...



6) Extensiones:

    1. ...








### 3.3.1.- RUTINA DE TRABAJO -----------------------------------------------------------------------------------------



### 3.3.2.- GESTIÓN DE USUARIOS -----------------------------------------------------------------------------------------




###############################################################################################





## 3.4.- TIPOS DE CMS ------------------------------------------------------------------------------------------------











## 3.5.- LIMITACIONES DE LOS CMS ----------------------------------------------------------------------------------------





## 3.6.- REQUERIMIENTOS PARA INSTALAR UN CMS ----------------------------------------------------------------------------------------







####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
# 
#


# CAPÍTULO 4: BLOGGER _____________________________________________________________________________________

## NO ENTRA EN EL EXAMEN -------------------------------------------------------------------------------------

1) Este tema lo hemos dado en clase leyendo el libro -> pero nos ha dejado muy claro que este tema *NO ENTRA EN EL EXAMEN*.

    1. Lo hemos dado porque Blogger tuvo un papel muy clave en los inicios.




## ElDiario.es -------------------------------------------------------------------------------------

Ignacio Escolar empezó lo que es "ElDiario.es" como un blog. 







####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
# 
#





# CAPÍTULO 5: WORDPRESS _____________________________________________________________________________

- Es uno de los CMS más imoprtantes que hay. 

- Este tema lo damos con el libro, pero el profesor nos indica que este tema está muy desfasado. 


## 5.1.- WORDPRESS ----------------------------------------------------------------------------------




## 5.2.- DAR DE ALTA NUESTRO BLOG ------------------------------------------------------------------





## 5.3.- TEMAS ------------------------------------------------------------------------------------






## 5.4.- WIDGETS ---------------------------------------------------------------------------------------






## 5.5.- FONDO --------------------------------------------------------------------------------------







## 5.6.- CREACIÓN DE ENTRADAS EN NUESTRO BLOG --------------------------------------------------------




























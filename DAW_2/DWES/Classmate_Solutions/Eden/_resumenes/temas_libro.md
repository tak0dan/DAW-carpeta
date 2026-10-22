

# REFERENCIA -------------------------------------------------------------------------

1) Está dando las clases basándose en un libro de texto, que es el siguiente (y que ya tengo en PDF): 

    - "Desarrollo web en entornos servidor"
    - Editorial: Ra-Ma. 
    - ISBN de Edición en Papel: 978-84-9964-156-0
    - ISBN del Ebook: ISBN: 978-84-9964-365-6
    - "E-Book desarrollado en España en Septiembre de 2014".




#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
#################################################################################################
# 









# CAPÍTULO 1: Selección de arquitecturas y herramientas de programación __________________________________


## OBJETIVOS DEL CAPÍTULO ---------------------------------------------------------------

1. Caracterizar y diferenciar los *modelos de ejecución* de código en un entorno cliente/servidor. 
2. Conocer los mecanismos de *ejecución* de código en función de las diferentes tecnologías web. 
3. Reconocer las ventajas de la *generación dinámica de páginas web*. 
4. Identificar y caracterizar los principales *lenguajes y tecnologías* de programación en entorno servidor. 
5. Conocer las distintas *herramientas* de programación web para lenguajes de servidor.



## INTRODUCCIÓN -----------------------------------------------------------------------------------------

1) En este primer capítulo presentamos los conceptos necesarios para comprender el contexto del desarrollo de aplicaciones y sistemas de información web. 

    1. Para ello, introducimos los *modelos* de programación más comunes en la Web, así como los diferentes lenguajes y *tecnologías* de programación, del lado del servidor, aplicables en este tipo de entornos. 
    
    2. Por último, haremos un recorrido por algunas de las *herramientas* que el desarrollador tiene a su alcance para sacarle el máximo partido a la programación web.





## 1.1.- MODELOS DE PROGRAMACIÓN EN ENTORNOS CLIENTE/SERVIDOR ---------------------------------------------------

1) La *World Wide Web* (o la Web, como se conoce comúnmente) representa un universo de información accesible globalmente a través de Internet. 
    
    1. Está formada por un conjunto de recursos interconectados que conforman el conocimiento humano actual. 

        1. El funcionamiento de la Web es posible debido a la coexistencia de una serie de componentes software y hardware.

        2. Estos elementos abarcan desde los *componentes físicos* de Internet (hubs, repetidores, puentes, pasarelas, encaminadores, etc.) y los *protocolos* de comunicaciones (TCP, IP, HTTP, FTP, SMTP, etc.) hasta la utilización del sistema de *nombres de dominio* (DNS) para la búsqueda y recuperación de recursos o la utilización de software específico para proveer y consumir dichos recursos.


2) En este contexto, el desarrollo en entornos web debe tener en cuenta la distribución de los elementos y la función que tiene cada uno de ellos. 

    1. La configuración arquitectónica más habitual se basa en el *modelo* denominado *Cliente/Servidor*, basado en la idea de servicio, en el que el cliente es un componente consumidor de servicios y el servidor es un proceso proveedor de servicios. 

        1. Además, esta relación está robustamente cimentada en el intercambio de mensajes como el único elemento de acoplamiento entre ambos.


3) El agente que solicita la información se denomina *cliente*, mientras que el componente software que responde a esa solicitud es el que se conoce como *servidor*. 

    1. En un proceso habitual el cliente es el que inicia el intercambio de información, *solicitando datos al servidor*, que responde enviando uno o más flujos de datos al cliente. 
    
    2. Además de la transferencia de datos real, este intercambio puede requerir *información adicional*, como la *autenticación* del usuario o la identificación del archivo de datos que vayamos a transferir. 
    
    3. La *Figura 1.1* [adjuntada en la carpeta "fotos"] muestra este proceso genérico. 



5) *"Modelo OSI* de ISO".

    1. Es el *conjunto de protocolos* que permiten la comunicación en internet. 

    2. OSI = Open Systems Interconnect.

    3. ISO = International Organization for Standarization.




6) *Navegadores web*

    1. Son capaces de leer e interpretar el *"código cliente"* (ej: HTML).



7) *HTML* no es un lenguaje de programación -> es un *lenguaje de maquetación*. 


8) *Lenguajes* de programación de *cliente* -> ejemplo: *JavaScript*. 






### CAPAS ------------------------------------------------------------------------------------------------------

1) Las *funcionalidades* en los entornos cliente/servidor de la Web suelen estar agrupadas en diferentes *capas*, cada una centrada en la gestión de un aspecto determinado del sistema web. 

    1. Si bien es posible encontrarse con divisiones más o menos especializadas, tradicionalmente se identifican *tres tipos* de capas fundamentales: 

        1. Capa de *presentación*
            1. La que ve el usuario (las vistas).

        2. Capa de la *lógica de negocio* 
            1. conoce y gestiona las funcionalidades que esperamos del sistema o aplicación web (lógica o reglas de negocio). 

        3. Capa de *persistencia* 
            1. Almacenamiento de datos.
    

2) Los *modelos arquitectónicos* de programación se pueden *clasificar* en función de *en qué lugar*, si en el cliente o en el servidor, se sitúan cada una de estas *capas*. 

    1. La decisión de dónde se sitúa cada una de estas capas dependerá del entorno de ejecución y, por tanto, de las tecnologías y lenguajes utilizados.



3) *Capa de presentación*: esta capa es la que ve el usuario. 

    1. Le presenta una interfaz gráfica del recurso solicitado y sirve para recoger su interacción. 
    
    2. Suele estar situada en el cliente.
    
    3. La programación de esta capa se centra en el formateo de la información enviada por el servidor y la captura de las acciones realizadas por el cliente.

    4. Son las *vistas* a las que accede el usuario. 



4) *Capa de negocio*: es la capa que conoce y gestiona las funcionalidades que esperamos del sistema o aplicación web (lógica o reglas de negocio). 

    1. Habitualmente es donde se reciben las peticiones del usuario y desde donde se envían las respuestas apropiadas tras el procesamiento de la información proporcionada por el cliente. 
    
    2. Al contrario que la capa de presentación, la lógica de negocio puede ser programada tanto en el entorno cliente como en el entorno servidor.

    3. Son las *funcionalidades* de la aplicación. 



5) *Capa de persistencia* (o "de datos"): es la capa donde residen los datos y la encargada de acceder a los mismos. 

    1. Normalmente, está formada por uno o más gestores de bases de datos que realizan todo el proceso de administración de datos, reciben solicitudes de almacenamiento o recuperación de información desde la capa de negocio.



6) TERMINOLOGÍA: estos terminos no se usan tanto, los que se usan realmente son: el *modelo vista-controlador* (tipo de arquitectura). 







### MODELOS -----------------------------------------------------------------------------------------------

1) El diseño de cada una de estas capas influye a la hora de seleccionar uno u otro modelo de programación en la Web. 

    1. Dichos modelos de programación cliente/servidor pueden clasificarse de este modo atendiendo a *diferentes criterios*. Es posible clasificarlos: 
        a. Dependiendo del tamaño de los componentes
        b. por la naturaleza del servicio ofrecido
        c. según el reparto de funciones entre cliente y servidor.


2) Según el *tamaño de los componentes*.

    1. Esta primera clasificación hace referencia a qué elemento de la arquitectura web debe soportar más o menos carga de procesamiento. 
    
    2. Se habla de configuraciones:

        1. *Fat Client* (thin Server)

            1. El mayor peso de la aplicación se ejecuta en el cliente relegando al *servidor* a un *mero administrador de datos*. 
        
        2. *Fat Server* (thin client), 

            1. Donde la funcionalidad asociada al *cliente* está *limitada a la presentación de la información* enviada por el servidor.




3) Según la *naturaleza del servicio ofrecido*.

    1. También es posible clasificar los entornos cliente/servidor en función de las capacidades ofrecidas por el servidor. 
    
    2. De esta forma, podemos encontrar:

        1. *Servidores de ficheros*, donde el objetivo del cliente es el acceso a datos contenidos en ficheros; 
        
        2. *Servidores de bases de datos*, que se centran en la provisión y administración de sistemas gestores de bases de datos; 
        
        3. *Servidores de transacciones*, centrados en el concepto de transacción con el objetivo de que los flujos de información con el cliente se realicen en un solo mensaje solicitud/respuesta; 
        
        4. *Servidores de objetos*, cuya principal característica es la utilización de objetos intercomunicados, tanto en el cliente como en el servidor; 
        
        5. *Servidores web*, que conforman la base del modelo World Wide Web y que está fundamentado en la existencia de clientes simples que se comunican con servidores web utilizando HTTP como protocolo de comunicación.


4) Según el *reparto de funciones* entre cliente y servidor: 

    1. las diferentes tecnologías web existentes permiten gestionar y distribuir las responsabilidades de cada una de las prestaciones funcionales entre el cliente y el servidor. 
    
    2. Lo más habitual es tener una configuración cliente/servidor de *dos o tres capas*, dependiendo de si las *capas de negocio y datos se agrupan* (modelo en dos capas) o si se separan (modelo en tres capas). 
    
    3. La *separación* en dos o tres capas la podemos ver, además, *tanto* desde el punto de vista del *software como del hardware*.




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





## 1.2.- GENERACIÓN DINÁMICA DE PÁGINAS WEB -----------------------------------------------------------------

1) El contenido que visualiza un cliente se obtiene debido a su interacción con una *aplicación* que es gestionada por el *servidor*. Las aplicaciones web pueden ser *clasificadas* de acuerdo a múltiples criterios: 

    1. dependiendo de la configuración o *modelo arquitectónico* seleccionado.
    
    2. según la *tecnología o lenguaje* utilizado.
    
    3. desde un punto de vista más funcional: en función de la *capacidad de comunicación con los usuarios* en respuesta a sus interacciones con la interfaz que se les presenta. 
    
    4. Son estos criterios los que dan lugar a la clasificación de las aplicaciones web en estáticas, dinámicas e interactivas. 


2) *Aplicaciones web estáticas*: 

    1. hacen referencia a aquellas aplicaciones web en las que el usuario recibe una página web cuya interacción no conlleva ningún tipo de acción, ni en la propia página, ni genera respuesta alguna por parte del servidor. 
    
    2. Este tipo de aplicaciones suele realizarse utilizando el lenguaje HTML exclusivamente para la organización visual de la información. 


3) *Aplicaciones web dinámicas*: 

    1. la programación de estas aplicaciones suele conocerse con el nombre de HTML dinámico (DHTML) y se refiere a aquellas aplicaciones en las que la interacción del cliente con el recurso recibido por parte del servidor (página web) produce algún tipo de *cambio en la visualización* del mismo (cambios de formato, ocultación de partes del documento, creación de elementos nuevos, etc.). 
    
    2. Los lenguajes involucrados en este tipo de aplicaciones incluyen, entre otros, *HTML, CSS* o las múltiples variaciones de *JavaScript* (VBScript, JScript, Flash, etc.). 


4) *Aplicaciones web interactivas*: 

    1. al contrario que en los tipos de aplicaciones anteriores, donde la interacción del usuario produce un cambio en el recurso recibido, las aplicaciones web interactivas se basan en que dicha interacción hace que se genere un *diálogo entre el cliente y el servidor*. 
    
    2. Desde el punto de vista del modelo de programación, la lógica asociada al inicio y gestión de dicho diálogo puede ser ejecutada tanto en el cliente como en el servidor (e incluso en ambos). 

    3. Es decir, se produce interacción del cliente con el propio servidor. 


5) El tipo de aplicaciones web *interactivas* es *el que más se utiliza* actualmente en Internet y donde el número de tecnologías disponibles ha evolucionado más en los últimos años. 

    1. Las *tecnologías* implicadas en este tipo de aplicaciones varían mucho *en función de* si son *ejecutadas* en el lado del *cliente* o en el lado del *servidor*. 


6) En el lado del *cliente* para la creación de aplicaciones interactivas encontramos lenguajes y *tecnologías* como 

    1. HTML (por ejemplo, en la forma de formularios que rellena el usuario y envía al servidor), 
    
    2. controles ActiveX (ejecución de comportamientos asociados a certificados), 
    
    3. objetos embebidos de tipo Flash (animaciones interactivas visualmente atractivas), 
    
    4. applets o AJAX (carga dinámica de contenidos).



7) En el lado del *servidor* es posible utilizar.

    1. *lenguajes embebidos* en código HTML (como PHP, ASP o JSP), 
    
    2. *enlaces a ejecutables* (tipo CGI o SSI), 
    
    3. *objetos* (Servlets)
    
    4. *lenguajes que separan* la presentación de la lógica de negocio (ASP.Net de Microsoft).





##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################






## 1.3.- LENGUAJES DE PROGRAMACIÓN EN ENTORNO SERVIDOR ---------------------------------------------

1) Se entiende por lenguaje de programación correspondiente a un entorno servidor a aquel cuyo código, bien sea como objeto precompilado o bien como código interpretado, es ejecutado por un software específico en el componente que actúa como servidor.


2) Existen múltiples alternativas a la hora de *ejecutar código en el servidor*. 

    1. Una de ellas es utilizar *lenguajes de scripting* (SSI , LiveWire, AS P, PHP, etc.), cuya característica principal es que el código es interpretado y que se intercala con una plantilla de código HTML con la estructura básica de la página que se envía al cliente. 
    
    2. Otra alternativa es el uso de *enlaces a programas* y componentes ejecutables (CGI, JSP, EJB, etc.), de tal forma que el código ejecutado por el servidor está almacenado en unidades precompiladas y ejecutadas de forma independiente, que generan las páginas enviadas al cliente. 
    
    3. Otras técnicas de programación en el lado del servidor incluyen el uso de *estrategias “híbridas”* basadas en técnicas de respaldo (denominadas code-behind), como ASP.Net de Microsoft, en el que algunos elementos de código se intercalan con la lógica de presentación mientras que se mantiene la funcionalidad de dichos elementos en ficheros o librerías independientes en el servidor.




##################################################################################################



### 1.3.1.- LENGUAJES DE SCRIPTING ----------------------------------------------------------

1) Se entiende por lenguaje de scripting (o embebido) aquel que *se intercala con el código HTML* que forma una aplicación web. La idea básica es crear una serie de plantillas HTML en las que se insertan instrucciones de programación en diferentes lenguajes que son ejecutadas por un servidor para determinar las partes dinámicas de las páginas web. Para que estas porciones de código sean ejecutadas, el agente que actúa de servidor (servidor web) debe tener instalado un módulo (scripting engine) que sea capaz de reconocer e interpretar el lenguaje en el que se programa dicho código.


2) Existen diversos lenguajes de scripting que pueden utilizarse para la creación de aplicaciones web dinámicas. Entre ellos destacan PHP, ASP, Perl, Python y JSP.


3) *PHP* (Hypertext Processor): es uno de los lenguajes más extendidos actualmente. Cuenta con una comunidad de desarrolladores muy importante debido a sus características de gratuidad, código abierto, la posibilidad de ser portado y ejecutado en diferentes plataformas, etc. Se define como un lenguaje imperativo de tipos dinámicos, con la posibilidad de utilizar construcciones orientadas a objetos. Es soportado por la gran mayoría de servidores web actuales.

    1. PHP está más pensado para código abierto. 


4) *ASP* (Active Server Pages): se trata de una tecnología propietaria y de código cerrado para el lado del servidor de Microsoft. Su última versión es la 3.0 y data del año 2002, año a partir del cual se empezó a sustituir progresivamente por la versión AS P.Net. Aunque puede ser ejecutado en otros servidores web, AS P está diseñado especialmente para ser utilizado con IIS (Internet Information Server). El lenguaje utilizado con ASP es Visual Basic en su versión de scripting (VBScript), aunque también pueden usarse otros (JScript).


5) *Perl*: fue inicialmente concebido como un lenguaje de manipulación de cadenas de caracteres basado en un estilo de programación por bloques, como C o AWK. Perl es un lenguaje imperativo, con variables, expresiones, asignaciones, bloques de código delimitados por llaves, estructuras de control y subrutinas actualmente orientado a la generación dinámica de páginas web. Fue uno de los primeros lenguajes en ser utilizados para la programación web (para crear aplicaciones CGI). Es de código abierto y cuenta con una comunidad bastante numerosa de seguidores.


6) *Python*: es un lenguaje de scripting independiente de plataforma y orientado a objetos, preparado para realizar cualquier tipo de programas, desde aplicaciones Windows a servidores de red, o incluso páginas web. Es un lenguaje interpretado, lo que significa que no necesitamos compilar el código fuente para poder ejecutarlo. Esto ofrece ventajas, como la rapidez de desarrollo, e inconvenientes, como una menor velocidad. En los últimos años el lenguaje se ha hecho muy popular gracias a la cantidad de librerías, tipos de datos y funciones incorporadas en el propio lenguaje o la sencillez y velocidad con la que se crean los programas. Además, Python es un lenguaje gratuito, es decir, no necesita de ningún software de pago adicional para su ejecución incluso para propósitos empresariales.


7) *JSP* (Java Server Pages): el funcionamiento de Java como lenguaje de script es similar al de PHP o AS P: se trata de porciones de código Java intercalado con código HTML estático. Sin embargo, la forma de interpretarlo es diferente. Una vez que el módulo encargado de ejecutar la página JSP llega a una porción de código Java, lo transforma a un Servlet (porción de código Java cargado en la memoria de un servidor web) y lo ejecuta obteniendo el código que ha de enviarse al cliente. La diferencia con otros lenguajes es que el servlet queda cargado en memoria por si llegara otra petición a la misma página JSP, con lo que el rendimiento se ve mejorado notablemente.

    1. Este es un error del libro -> el lenguaje es Java y JSP es solo una subparte de el uso de Java para servidores. 


8) Existen muchos otros lenguajes de scripting en el lado del servidor enfocados a entornos más específicos y con características particulares, como ColdFusion Markup Language, Lua, Ruby, SMX, Lasso, WebDNA o Progress WebSpeed.



##################################################################################################






### 1.3.2.- APLICACIONES CGI Y DERIVADOS ----------------------------------------------------------------

1) Una de las formas más simples de generar páginas dinámicas es delegar la creación de las mismas a un programa externo, que reciba ciertos parámetros de entrada y devuelva como resultado el contenido que debe visualizar el cliente. El estándar CGI (Common Gateway Interface), especificado en la RFC3875, define precisamente este comportamiento, estableciendo los vínculos que hay que establecer con una aplicación independiente o fichero ejecutable. Puesto que el programa externo no depende del código a generar, el lenguaje elegido puede ser cualquiera (como C o C++). La localización del script o fragmento de programa a ejecutar se indica en la URL que forma la petición HTTP del cliente.


2) Como hemos dicho, CGI es la forma más simple de publicar contenido dinámico en la Web; sin embargo, esta forma de crear aplicaciones web presenta ciertas desventajas, siendo la principal de ellas el escaso rendimiento a la hora de responder a múltiples peticiones CGI simultáneamente puesto que para cada una se tiene que crear un proceso nuevo en el servidor con los costes de memoria y uso de procesador que conlleva. Respecto a este problema han surgido algunas alternativas como son el uso de extensiones para cada uno de los lenguajes en los que se programe el CGI pero como parte integrante del servidor web (módulos NSAPI o ISAPI por ejemplo), o el uso de FastCGI como forma de crear un único proceso que atienda a todas las peticiones CGI.


3) Otra de las alternativas que se han propuesto como solución a los problemas de CGI es el uso de plataformas independientes de ejecución de código. El principio de estas plataformas es equivalente al uso de extensiones para servidores web. Es el caso de la programación con Java en el lado del servidor. En este contexto, la arquitectura de un servidor que es capaz de ejecutar programas Java (Servlets, JavaBeans, etc.) está formada por el propio servidor web en sí mismo y la Máquina Virtual de Java (JVM), que es capaz de ejecutar un programa especial Java (llamado Servlet container) encargado de gestionar datos de sesión y Servlets.


4) Otra de las alternativas que un desarrollador tiene a su disposición cuando programa con Java es usar los denominados Enterprise Java Beans (EJB), que son componentes programados en Java que implementan la lógica de negocio de la aplicación utilizando las características de la plataforma J2EE. Su especificación detalla cómo los servidores de aplicaciones proveen objetos desde el lado del servidor que son, precisamente, los EJB. El uso de EJB está especialmente indicado en los casos en los que se requiera mantener la transaccionalidad de las peticiones hechas por un cliente en un entorno web.




##################################################################################################





### 1.3.3.- APLICACIONES HÍBRIDAS DE CÓDIGO REPARTIDO ------------------------------------------------------

1) Como alternativa a los lenguajes de scripting (interpretados) y a las aplicaciones CGI y derivadas (ejecutadas por un programa o módulo independiente del servidor web), en los últimos años ha surgido una tecnología intermedia que podríamos denominar como “híbrida”. La solución más representativa es la plataforma de Microsoft .Net Framework a través de ASP.Net.


2) ASP.Net es una tecnología totalmente orientada a objetos que puede ser escrita en cualquier lenguaje soportado por el entorno .Net Framework (VB.Net; C# y JScript.Net). Desde el punto de vista del rendimiento, la aplicación se precompila en una sola vez al lenguaje nativo y, luego, en cada petición tiene una compilación Just in Time, es decir, se compila desde el código nativo, lo que permite mucho mejor rendimiento.


3) Las páginas de ASP.Net, conocidas oficialmente como Web Forms (formularios web), son el principal medio de construcción para el desarrollo de aplicaciones web desde el punto de vista de Microsoft. Los formularios web están contenidos en archivos con una extensión ASPX que son los que el cliente solicita a través de una URL al servidor. Estos ficheros ASPX contienen código HTML o estático y también etiquetas propias de la plataforma .Net. Estas etiquetas definen Controles Web que se procesan del lado del servidor y Controles de Usuario donde los desarrolladores colocan todo el código estático y dinámico requerido por la página web.


4) Adicionalmente, el código dinámico que se ejecuta en el servidor puede ser colocado en una página dentro de un bloque “<% -- código dinámico -- %>” que es muy similar a otras tecnologías de scripting como PHP, JSP y ASP. Esta circunstancia es otra de las razones por las que se considera la programación con ASP.Net como “híbrida”. En algunos entornos de alto rendimiento y seguridad esta práctica es, generalmente, desaconsejada excepto para propósitos de enlace de datos, pues requiere más llamadas cuando se genera la página.



##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################





## 1.4.- INTEGRACIÓN CON LOS SERVIDORES WEB ----------------------------------------------------------


El profesor se lo salta. 




##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################
##################################################################################################






## 1.5.- HERRAMIENTAS DE PROGRAMACIÓN --------------------------------------------------------------

### 1.5.1.- MARCADORES DE TEXTO --------------------------------------------------------------

Arachnophilia.

Notepad++

UltraEdit


### 1.5.2.- HERRAMIENTAS GENÉRICAS --------------------------------------------------------------

Microsoft FrontPage

Eclipse

Dreamweaver


### 1.5.3.- HERRAMIENTAS ESPECÍFICAS --------------------------------------------------------------

Microsoft Visual Studio

NetBeans IDE




#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#
#











# CAPÍTULO 2: INSERCIÓN DE CÓDIGO EN PÁGINAS WEB _______________________________________________________________


## 2.1.- LENGUAJES Y TECNOLOGÍAS DE SERVIDOR -------------------------------------------------------------




## 2.2.- OBTENCIÓN DEL CÓDIGO ENVIADO AL CLIENTE -------------------------------------------------------------

Los usuarios de páginas web normalmente se comunican utilizando un navegador web con un servidor con el fin de obtener una funcionalidad determinada. Esta funcionalidad puede abarcar desde la visualización de información (textual o multimedia) hasta la administración de un sitio web pasando por el almacenamiento de información, actualización de contenidos u otras operaciones más complejas. Con el fin de dar soporte a todas estas potenciales funcionalidades es absolutamente necesario ser capaces de ofrecer al cliente la información que necesita. La ejecución de código escrito en un lenguaje concreto por parte del servidor será responsable de generar dicha información.

En este capítulo nos centraremos en analizar las características fundamentales de PHP como ejemplo de lenguaje de programación web del lado del servidor. PHP (Hypertext Preprocessor) es un lenguaje de scripting de propósito general y de código abierto que ha sido especialmente diseñado para el desarrollo de aplicaciones web y que puede ser embebido (intercalado) en código HTML. En capítulos sucesivos mostraremos los ejemplos de código correspondientes a PHP, ASP y JSP.

PHP nació en 1994 a partir de un conjunto de ficheros binarios que se utilizaban para recoger datos de tráfico de datos en sitios web. En 1997 el intérprete (parser) de este lenguaje fue reescrito con el fin de dar soporte a la generación dinámica de contenido web y de crear aplicaciones del lado del servidor. Desde su versión 4, publicada en el año 2000, hasta su versión más actual PHP se ha convertido en un lenguaje de gran popularidad entre la comunidad de desarrolladores web. Entre las razones de su éxito destaca una relativa facilidad para ser aprendido.

- PHP sirve como ejemplo paradigmático para comprender la arquitectura de un servidor web e identificar los componentes implicados durante el procesamiento de una aplicación web en respuesta a una solicitud del cliente. Las capas de una arquitectura genérica de un servidor que soporte la ejecución de PHP pueden verse en la Figura 2.1.

    *Imagen de la página 30 del PDF*. 



[...]






## 2.3.- ETIQUETAS PARA LA INSERCIÓN DE CÓDIGO ----------------------------------------------------------------


[...]

<html>
    <head>
        <title>Primer ejemplo</title>
    </head>
    <body>
        <h1>Primer ejemplo: <br/></h1>
        <?php
            echo “Hola mundo.”;
        ?>
    </body>
</html>



[...]



1) Obviamente, el script PHP mostrado en el ejemplo anterior es bastante sencillo y podríamos haber conseguido el mismo resultado editando el código HTML para incluir ese saludo directamente. Como podemos comprobar, el uso de PHP para insertar cadenas de caracteres estáticas en una página web es muy sencillo con PHP. Sin embargo, este sencillo ejemplo nos sirve para introducir algunas de las características básicas de los lenguajes de scripting de código embebido:

    1. Todo script en comienza y termina con una etiqueta de inicio y otra de fin. En PHP, estas etiquetas son <?php y ?> respectivamente; en ASP se utilizan <% y %> y en JSP <%= y %>. En el caso de PHP también podemos usar <? y ?> (denominadas short tags).

    2. Podemos configurar otros estilos de etiquetas en estos lenguajes. Por ejemplo, el estilo que utilizamos en HTML para JavaScript: <script language=“PHP”> y </script>.

    3. Los espacios en blanco que escribamos dentro del código embebido no tienen ningún efecto salvo para mejorar la legibilidad del código escrito. Cualquier combinación de espacios, tabuladores, retornos de carro y demás elementos usados para separar sentencias está permitida.

    4. El código de servidor embebido en páginas HTML está formado por un conjunto de sentencias que deben estar claramente separadas. En PHP y JSP esta separación se realiza con un punto y coma (;) mientras que en ASP esta separación se hace mediante retornos de carro.

    5. Los scripts embebidos pueden situarse en cualquier parte del recurso web ejecutado y puede ser intercalado en cualquier fragmento de HTML. El número de scripts que podemos tener dentro de un fichero HTML es indefinido.

    6. Cuando se ejecuta un código embebido, el script entero se sustituye por el resultado de dicha ejecución, incluidas las etiquetas de inicio y fin.



Para ilustrar estas características, podemos observar el siguiente fragmento de código que intercala código PHP en diferentes partes de un fichero HTML. En este caso podemos ver cómo hay tres fragmentos de código. El primero define el contenido de una variable ($salida) y los otros dos lo que hacen es escribir el valor de dicha variable entre el código HTML y en la posición en la que se encuentran los scripts PHP. Podemos ver cómo el valor asignado a la variable la utilizamos para indicar tanto el título de la página como el contenido de la misma.


<html>
    <?php
    $salida = “Contenido PHP”;
    ?>
    <head>
        <title>
            <?php
            echo $salida;
            ?>
        </title>
    </head>
    <body>
        <h1>Segundo ejemplo: <br /></h1>
        <?php
        echo $salida;
        ?>
    </body>
</html>



Si bien es cierto que una de las múltiples ventajas del código embebido es precisamente la posibilidad de situar los scripts en cualquier parte del fichero HTML, esta circunstancia también puede resultar en un mantenimiento más difícil de la aplicación web desarrollada. Con el fin de disminuir los efectos de la dispersión del código de PHP podemos utilizar directivas de inclusión de código que veremos en capítulos posteriores.



### 2.3.1.- COMENTARIOS 




### 2.3.2.- INCLUSIÓN DE CÓDIGO EN PÁGINAS HTML









#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################






## 2.4.- VARIABLES _______________________________________________________________________________________



### 2.4.1.- DEFINICIÓN Y USO



### 2.4.2.- TIPOS DE DATOS Y VARIABLES



### 2.4.3.- CONVERSIÓN ENTRE TIPOS DE DATOS



### 2.4.4.- PRECEDENCIA DE OPERADOR




### 2.4.5.- ESTADO DE UNA VARIABLE




### 2.4.6.- ÁMBITO DE LAS VARIABLES









#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#
#


# CAPÍTULO 3: PROGRAMACIÓN BASADA EN LENGUAJES DE MARCAS CON CÓDIGO EMBEBIDO _______________________________________________


## 3.1.- SENTENCIAS CONDICIONALES _______________________________________________





## 3.2.- BUCLES _______________________________________________






## 3.3.- TIPOS DE DATOS COMPLEJOS _______________________________________________








## 3.4.- PRINCIPIOS DE SUBPROGRAMACIÓN ________________________________________________



### 3.4.1.- DEFINICIÓN Y USO ----------------------------------------------------------

Un subprograma es un fragmento de código que tiene una funcionalidad específica. Este permite que el código sea modular y lo podamos reutilizar.

El nacimiento de los subprogramas nace de la idea de que un problema difícil resulta más fácil solucionarlo si se divide en otros más pequeños y su vez más sencillos.

Existen dos tipos de subprogramas: las funciones y los procedimientos. Las funciones son aquellos subprogramas que devuelven un valor como resultado de su ejecución. Por otro lado los procedimientos son aquellos que se ejecutan sin devolver ningún tipo de valor.

Una vez que ya sabemos qué son los subprogramas, qué tipos nos podemos encontrar y para qué sirven, vamos a pasar a ver su sintaxis en los distintos lenguajes.


Primero vamos a mostrar cómo se define una función:

```php
function nombre($arg1,$arg2,…){
    instrucciones;
    return $valorDevuelto;
}

```


```asp
function nombre (arg1,arg2,…)
    instrucciones
    nombre=valordevuelto
end function

```


```jsp
tipoDevuelto nombre (tipo1 arg1,tipo2 arg2,…){
    instrucciones;
    return valorDevuelto;
}

```



Para entender mejor cómo se define una función mostramos un ejemplo a continuación:


```php
function sumar ($sumando1,$sumando2){
    return $sumando1+$sumando2;
}

```



```asp
function sumar (sumando1,sumando2)
sumar=sumando1+sumando2
end function

```


```jsp
double sumar (double sumando1, double sumando2){
return sumando1+sumando2;
}

```



Entre los distintos lenguajes podemos apreciar ciertas diferencias como por ejemplo que tanto PHP como JSP utilizan la sentencia return para devolver el valor resultante, mientras que ASP le asigna dicho valor al nombre de la función. Otra de las diferencias notorias es que solo en JSP se indica el tipo de dato de cada argumento que pasamos como parámetro en la función y se especifica en la cabecera de dicha función el tipo de dato del valor devuelto.


Para finalizar esta sección vamos a ver cómo se definen los procedimientos en los distintos lenguajes como hemos hecho con las funciones.

PHP:
function nombre($arg1,$arg2,…){
    instrucciones;
}

ASP:
sub nombre (arg1,arg2,…)
    instrucciones
end sub


JSP:
void nombre (tipo1 arg1,tipo2 arg2,…){
    instrucciones;
}




Aquí podemos ver un ejemplo de cómo definir un procedimiento:

PHP:
function mensaje ($texto){
echo $texto;
}

ASP:
sub mensaje (texto)
response.write(texto)
end sub

JSP:
void mensaje (String texto){
out.println(texto);
}



Salvo ASP que tiene una sintaxis específica para definir procedimientos PHP y JSP utilizan la misma sintaxis que para definir las funciones salvo que no utilizan la sentencia return para devolver un valor. En el caso de JSP en la cabecera de la función se especifica que el tipo del valor devuelto es vacío (void).



Las funciones y procedimientos se suelen definir en la cabecera del documento entre las etiquetas <head></head> para asegurarnos que estén cargadas en memoria previamente antes de usarlas. Para usar las funciones y procedimientos solamente necesitamos llamarlos por su nombre y pasarle los parámetros necesarios para que se puedan ejecutar. En el caso de las funciones podemos asignar a otra variable el valor que esta devuelve para utilizarlo posteriormente. A continuación mostramos la sintaxis y un ejemplo de la llamada a un procedimiento o función.


PHP:
nombre($arg1,$arg2,…);
$texto = “Esto es una prueba.”;
mensaje ($texto);


44 ASP:
–– Forma 1:
nombre (arg1,arg2,…)
texto = “Esto es una prueba.”
mensaje (texto)
–– Forma 2 (solo procedimientos):
call nombre (arg1,arg2,…)
texto = “Esto es una prueba.”
call mensaje (texto)


44 JSP:
nombre (arg1,arg2,…);
texto = “Esto es una prueba.”;
mensaje (texto);



La segunda forma definida en ASP para llamar a un procedimiento haciendo uso de la sentencia call no la podemos utilizar para llamar a una función, mientras que la primera la podemos utilizar para ambas cosas.




### 3.4.2.- FUNCIONES PREDEFINIDAS DEL LENGUAJE -----------------------------------------------------

Las funciones predefinidas son aquellas que están integradas dentro de un lenguaje por defecto.

A continuación mostramos dos tablas con las funciones predefinidas en el leguaje ASP para strings y arrays que son unas de las funciones que más se utilizan. Existen muchas funciones más que podemos consultar en distintos manuales de ASP.

Tabla 3.1 Funciones para strings en ASP (página 78 del PDF).






## 3.5.- ACCESO A LA INFORMACIÓN DEL CLIENTE WEB __________________________________________________


En este apartado vamos a aprender los distintos tipos de paso de parámetros y sus diferencias, cómo definir un formulario y como recuperar los datos enviados por el método POST y GET.




### 3.5.1.- MÉTODOS GET Y POST ---------------------------------------------------------------------------

Tanto el método GET como el método POST no son más que métodos del protocolo HTTP para el intercambio de información entre el cliente y el servidor.


GET es el método más usado actualmente. Este método le “pide” al servidor web que le devuelva al cliente la información identificada en la petición URI. Lo más común es que las peticiones URI se refieran a un documento HTML o a una imagen, aunque también se puede referir a una consulta de una base de datos. En tal caso, el servidor procesa la petición y le devuelve al cliente el resultado generado. Ejemplos típicos son las páginas web personalizadas que son actualizadas dinámicamente.


Mientras que el método GET lo utilizamos para recuperar información, el método POST se usa para enviar información a un servidor web. Estos casos de “posting” pueden ser utilizados para completar un formulario de autenticación, así como entradas de datos o especificar parámetros para algún tipo de software del servidor. La función realizada por el método POST depende de la petición URI.



La principal diferencia entre método GET y el método POST radica en cómo codifican la información. El método GET envía las variables dentro de la URL de la página.


- Para entender cómo se envían las variables en el método GET es necesario que entendamos las partes de una URL. La URL está formada por:

    1. Protocolo. Especifica el protocolo de comunicación que se utiliza para el intercambio de la información.

    2. Nombre de dominio. Nombre del servido donde se aloja la información.

    3. Directorios. Secuencia de directorios separados por “/” que indica la ruta en la que se encuentra el recurso.

    4. Fichero. Nombre del recurso o fichero al que queremos acceder.


En la Figura 3.16 podemos ver las partes que forman una URL: (página 84 del PDF).


Una vez que sabemos cómo es la estructura de una URL es necesario conocer que al final de esta podemos concatenar el símbolo de cierre de interrogación “?”. Este símbolo se utiliza para indicar que se van a definir a continuación variables con el valor que toman (variable=valor). Las distintas variables se separan entre ellas con el símbolo “&”. A continuación vemos un ejemplo de cómo viajan las variables en las peticiones realizadas con el método GET:

    http://www.example.org/file/example1.php?v1=0&v2=3


Por otro lado, en el método POST la información va codificada en el cuerpo de la petición HTTP y, por tanto, viaja oculta. Por este motivo hay que utilizar este método cuando queremos ingresar datos en un formulario, ya sea para realizar la autenticación de un usuario o la inserción y/o actualización en una base de datos. Si utilizáramos el método GET para realizar este tipo de acciones cualquier persona con mínimos conocimientos de informática podría manipular la URL, o pasarle a otra persona la URL para que acceda a una página para la que no debería tener permiso. Esto no quiere decir que el método GET sea más inseguro que el método POST, ya que este puede ser vulnerado con ataques de tipo HTML injection que es un ataque que permite ejecutar código scripting debido a las vulnerabilidades del sistema de validación del método POST. Estos ataques afectan al servidor que contiene la información.



Como conclusión decir que no hay un método más seguro que otro. Como podemos ver ambos tienen sus pros y sus contras, pero resulta recomendable que cada uno de ellos los utilicemos para la labor para la que fueron creados que son recuperación (GET) y el envío (POST) de información.


Las llamadas a través del método GET pueden ser cacheadas, indexadas por los buscadores e incluso se pueden almacenar en el navegador como favoritos. Esto a veces resulta útil, como por ejemplo cuando rellenamos un formulario para realizar algún tipo de búsqueda y nos devuelve la página con la información permitiéndonos volver atrás utilizando el botón del navegador, mientras que el método POST esto no lo permite.






### 3.5.2.- DEFINICIÓN DE FORMULARIOS -----------------------------------------------------------------------------

Los formularios son métodos para recolectar información que debe ser rellenada por el usuario. Estos formularios pueden servir para permitir la autenticación de un usuario en una página web, recoger información que debemos insertar o actualizar en una base de datos, realizar búsquedas de información en el que debamos especificar un criterio de búsqueda, etc.


Ejemplo de formulario utilizando el método GET:

```html
<html>
    <head>
        <title>Ejemplo Formularios</title>
    </head>
    <body>
        <h1>Ejemplo de procesado de formularios</h1>
        <FORM ACTION=”ejemplo1.php” METHOD=”GET”>
            Introduzca su nombre:<INPUT TYPE=”text”
                NAME=”nombre”><BR>
            Introduzca sus apellidos:<INPUT TYPE=”text”
                NAME=”apellidos”><BR>
            <INPUT TYPE=”submit” VALUE=”Enviar”>
        </FORM>
    </body>
</html>

```

Aquí podemos ver exactamente el mismo ejemplo, solo que en este formulario se utiliza el método POST:

Como podemos ver en ambos ejemplos los formularios los definimos utilizando las etiquetas HTML y como todo documento HTML está dividido en dos partes: la cabecera (<head></head>) donde se establece el título de la página (<title></title>) y el cuerpo de la página (<body></body>) donde se define el contenido. Es en el cuerpo donde se añadirán los elementos que pueden forman parte del formulario dentro de las etiquetas <form> </form>, como los campos de texto donde introducir información (<input type=text>), los botones para enviar el formulario (<input type=submit>), y otro tipos de elementos que podemos añadir como los combo box que permiten elegir de una lista desplegable un elemento, radio buttons, checkbox, etc.


Una vez relleno el formulario la información introducida por el usuario se almacena en variables con el nombre que se le haya asignado a cada elemento con el atributo name. Al pulsar el botón se ejecuta la acción definida por el atributo action de la etiqueta <form>, en el caso del ejemplo se redirige a otra página donde se procesará y se hará uso de la información. Es también en la etiqueta <form> con el atributo method donde definimos como se va a enviar la información: a través de la URL (método GET) o en el cuerpo del mensaje (método POST).



Una vez que sabemos cómo realizar un formulario y que elementos lo forman vamos a ver en la Figura 3.17 como
el navegador interpreta ese código y lo muestra al usuario.




### 3.5.3.- RECUPERACIÓN DE INFORMACIÓN CON GET ---------------------------------------------------------------







### 3.5.4.- RECUPERACIÓN DE INFORMACIÓN CON POST ---------------------------------------------------------------








## Nota -----------------------------------------------------------------------------------------------------

1) El profesor (Jesús) nos ha dicho: "en los algoritmos de búsqueda no vamos a entrar. No tenéis que saber qué algoritmo es mejor que otro ni nada de eso". 







#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#
#








# CAPÍTULO 4: GENERACIÓN DINÁMICA DE PÁGINAS WEB ______________________________________________________________________

Este tema sí que lo hemos dado en clase. Osea que sí que conviene trasladar el contenido del libro a aquí y esquematizarlo. 




## 4.1.- MECANISMOS DE SEPARACIÓN DE LA LÓGICA DEL NEGOCIO ------------------------------------------------------







## 4.2.- MECANISMOS DE GENERACIÓN DINÁMICA DE INTERFACES WEB -------------------------------------------------------







#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#
#



# CAPÍTULO 5: DESARROLLO DE APLICACIONES WEB UTILIZANDO CÓDIGO EMBEBIDO __________________________________________

Este tema también lo hemos dado en clase siguiendo el libro. 

- Las cookies se guardan siempre en el lado del cliente. 

    - Hay que especificar el tiempo de vida de la cookie. Aunque en ocasiones no lo especifica. 


## 5.1.- MANTENIMIENTO DEL ESTADO EN PÁGINAS WEB ----------------------------------------------------------------



## 5.2.- SEGURIDAD: USUARIOS, PERFILES Y ROLES ----------------------------------------------------------------------



## 5.3.- AUTENTICACIÓN DE USUARIOS: OPENID Y OAUTH ---------------------------------------------------------------

- Delegación de autenticación mediante OPENID y OAUTH.

    - Usan tu cuenta de Google (u otro servicio) para que te loguees -> delegan la autenticación a otro servidor. 

        - Es decir, autenticación por delegación. 



## 5.4.- PROTOCOLO LIGERO DE ACCESO AL SERVICIO DE DIRECTORIOS: LDAP ----------------------------------------------

LDAP = LIGHTWEIGHT DIRECTORY ACCESS PROTOCOL




## 5.5.- PRUEBAS Y DEPURACIÓN ----------------------------------------------------------------------------------------






#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#
#





# CAPÍTULO 6: UTILIZACIÓN DE TÉCNICAS DE ACCESO A DATOS _______________________________________________________

Este tema lo damos usando el libro como guía. 


## 6.1.- ESTABLECIMIENTO DE CONEXIONES



## 6.2.- EJECUCIÓN DE SENTENCIAS SQL 



## 6.3.- UTILIZACIÓN DEL CONJUNTO DE RESULTADOS 




## 6.4.- CIERRE DE CONEXIONES 




## 6.5.- TRANSACCIONES 




## 6.6.- UTILIZACIÓN DE OTROS ORÍGENES DE DATOS 




############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
#









# CAPÍTULO 7: PROGRAMACIÓN DE SERVICIOS WEB ____________________________________________________________________

Este tema lo damos mediante el libro de texto. 

Con la aparición de Internet, a mediados de la década de los 90, comenzaron a extenderse una gran variedad de desarrollos *software y hardware*. Estos sistemas, tenían unas peculiaridades muy diferentes. Es cierto que las diferentes ramificaciones surgidas enriquecían el panorama tecnológico, no solo a nivel software si no a nivel hardware también. Al existir tal *diversidad*, las empresas vieron la necesidad de integrar estos sistemas, de tal forma que *pudieran comunicarse*, para poder colaborar en sus objetivos unos sistemas con otros. El afán de las empresas se encauzó en desarrollar la mejor tecnología que integrara los sistemas. Pero según avanzaba la competencia, resultaba más complicado desarrollar este producto. Debido a la rápida aceptación del fenómeno de Internet y el fuerte impacto que causaron las tecnologías de la información, las relaciones de negocio y comunicación cambiaron radicalmente. El uso de las tecnologías de la información en la vida cotidiana, las exigencias de integrar diferentes sistemas (tanto hardware como software), se volvió algo *prioritario*. Las empresas veían inviable crear una plataforma integradora de forma individual. Por esta razón algunas empresas emprendedoras, *buscaron un lenguaje común* que intercambiara información. Para ello aprovecharon estándares existentes en el mercado, que además iban a facilitar que se extendiera más esta tecnología. A partir de estas necesidades surgidas, se crean los servicios web.

Un *servicio web* es un conjunto de *protocolos* y estándares que permiten *comunicar* dos sistemas a través de una red. Habitualmente los servicios web actúan para intercambiar datos (comunicarse), entre *dos aplicaciones*. Estas aplicaciones suelen estar desarrolladas en *lenguajes* de programación *distintos*. Además pueden estar en plataformas (*sistemas operativos* o arquitecturas) *diferentes*. Es habitual, y el uso más generalizado que los servicios web, intercambien los datos a través de Internet. Aunque esta es la generalidad podrían implementarse servicios web en otro tipo de red.

La operabilidad de los servicios web se consigue a través de *estándares* abiertos que gestionan *organizaciones* como *OASIS* (Organization for the Advancement of Structured Information Standards), consorcio internacional, sin ánimo de lucro, que orienta su desarrollo a la adopción de estándares para el comercio electrónico y los servicios web. Otro de los consorcios internacionales que produce recomendaciones para los servicios web, es *W3C*. Estos son los comités responsables de la reglamentación de los servicios web. Para mejorar la interoperabilidad entre distintas implementaciones de servicios web, se ha creado el *organismo WS-I*. Más adelante veremos la importancia que tiene el permitir la ejecución de servicios web en múltiples plataformas tanto software como hardware.

A continuación vamos a ver el esquema conceptual de cómo se comunican varios servicios web. Una tienda on line ofrece servicio a través de Internet a sus clientes. Para completar el servicio, necesita comunicarse, con la aplicación del banco y con la aplicación de pago por *Paypal*.

    [Figura 7.1. Vista general de varios servicios web]


En la *Figura 7.1*, observamos como el perfil de usuario (aplicación web en el cliente), que tiene el rol de cliente del servicio web. Solicita información sobre los productos de una tienda on line. Este usuario realiza una petición a la tienda on line a través de un servicio web. En última instancia, el usuario (*aplicación web en el cliente*), compra un producto y realiza el pago al servicio web de la entidad bancaria o al de Paypal dependiendo el modo de pago que haya elegido, a través de la tienda on line. En todo este proceso intervienen una serie de *tecnologías* que hacen posible la circulación de la información. En el *punto siguiente* vamos a describir cuales son y cómo se comunican.







## 7.1.- MECANISMOS Y PROTOCOLOS IMPLICADOS ----------------------------------------------------------

Como hemos indicado anteriormente, un *servicio web* es un conjunto de *protocolos* que sirven para intercambiar información entre aplicaciones. Estos protocolos se consideran *independientes* y los autores, acostumbran a no encuadrarlos en una documentación común. El objetivo, es dinamizar las posibilidades de comunicación, seleccionando el protocolo adecuado a casa caso particular. Aun así, al conjunto de servicios y protocolos de un servicio web, se le llama *Web Services Protocol Stack* (pila de protocolos de servicios web). Esta colección de protocolos y estándares, sirve para definir, implementar, localizar y hacer que un *servicio web interactúe con un cliente*. La pila de protocolos se divide en *cuatro partes* que podemos denominar, *servicios*, a continuación vamos a describir cada uno de ellos. En la siguiente imagen mostramos la pila de protocolos.

    [Figura 7.2. Pila de protocolos de un servicio web]


- En la imagen anterior, visualizamos los cuatro servicios de la pila de protocolos de un servicio web. 

    1. En la capa inferior, se encuentra el servicio de *transporte*. 
    
    2. En la siguiente capa (*XML Based Menssaging*), está el servicio de mensajería. 
    
    3. En la tercera capa (*Service Description*), se describirá el servicio web. 
    
    4. La capa superior es la encargada de *facilitar el descubrimiento* de los servicios web. 
    

A continuación vamos a ver detenidamente cada uno de los servicios que integran la pila de protocolos.




1) **Servicio de transporte**:

    - El servicio de transporte, es el responsable del envío de mensajes entre las aplicaciones a través de la Red. 
    
    - Este servicio, trabaja al nivel más bajo, encargándose de cómo se *codifica* la *información*, sin preocuparse de su formato. 
    
    - Es el encargado de establecer la *conexión* y el *puerto* que se va a usar. 
    
    - Generalmente se utiliza el *protocolo HTTP*, el mismo protocolo que utiliza la World Wide Web. La razón de que la mayoría de los servicios web hagan uso de este protocolo, es el uso tan extendido de los *navegadores web*. 

        - Como los servicios web originalmente no fueron pensados expresamente para utilizar este protocolo, se pueden utilizar otros, como, *SMTP* (protocolo de correo electrónico), *FTP* (protocolo de trasferencia de ficheros) o *BEEP* (Blocks Extensible Exchange Protocol). Este último, es un protocolo específico para servicios web. A diferencia de los protocolos anteriores, BEEP, no es un protocolo cliente-servidor. 
    
    - A través de Internet, los clientes hacen uso de los servicios web. 
    
    - Los dos ordenadores entre los que establece comunicación actúan *a la vez como cliente y como servidor*. Además es extensible y su especificación está hecha con XML. Este protocolo se está haciendo muy popular entre las aplicaciones web.





2) **Servicio de mensajería**

    - Este es el servicio responsable de la *codificación* de los *mensajes*. 
    
    - En él se especifica que contienen los datos que se intercambian entre las máquinas. 
    
    - El lenguaje utilizado para los mensajes es *XML*. Extensible Markup Languaje (XML), traducido, lenguaje de marcas extensible. XML es un metalenguaje extensible de etiquetas. 

        - Este lenguaje es una adaptación y simplificación del lenguaje SGML. 
        
        - XML nos permite definir la gramática del propio lenguaje. 

            - Por ejemplo una etiqueta que se llame casa: <casa>…</casa>. 
            
        - XML se propone como un lenguaje estándar, para el intercambio de información entre diferentes plataformas. Por esta razón XML es ideal para encargarse de la mensajería de los servicios web. 
        
        - Además este lenguaje es independiente del protocolo de transporte. De esta forma tenemos un bajo acoplamiento entre los servicios.


    - Existen varios protocolos para este servicio, que *interactúan* con el lenguaje XML para ofrecer el servicio de mensajería. 

        - Uno de los más usados es *SOAP*, pero también hay otros, como, *XML-RPC* (remote procedure call mediante XML) que utilizan el servicio de transporte *HTTP* exclusivamente. Otro de los protocolos en este servicio es *REST* (Representational State Transfer), una técnica de arquitectura software para sistemas, que maneja tipos de datos distribuidos en la Web. 
        
        - La forma más *simple* de implementar el protocolo, es enviar páginas XML directamente sobre el protocolo HTTP.




[....................................................]



3) 









## 7.2.- GENERACIÓN DE UN SERVICIO WEB



## 7.3.- DESCRIPCIÓN DEL SERVICIO



## 7.4.- INTERFAZ DE UN SERVICIO WEB



## 7.5.- SERVICIOS 





############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
#







# CAPÍTULO 8: GENERACIÓN DINÁMICA DE PÁGINCAS WEB INTERACTIVAS ___________________________________________________


## 8.1.- LIBRERÍAS Y TECNOLOGÍAS RELACIONADAS



## 8.2.- GENERACIÓN DINÁMICA DE PÁGINAS INTERACTIVAS



## 8.3.- OBTENCIÓN REMOTA DE INFORMACIÓN 



## 8.4.- MODIFICACIÓN DE LA ESTRUCTURA DE LA PÁGINA WEB




############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
############################################################################################################
#





# CAPÍTULO 9: DESARROLLO DE APLICACIONES WEB HÍBRIDAS _____________________________________________________________


## 9.1.- REUTILIZACIÓN DE CÓDIGO Y DE INFORMACIÓN 


## 9.2.- UTILIZACIÓN DE INFORMACIÓN PROVENIENTE DE REPOSITORIOS UDDI


## 9.3.- INCORPORACIÓN DE FUNCIONALIDADES ESPECÍFICAS


## 9.4.- SINDICACIÓN Y FORMATOS DE REDIFUSIÓN RSS




Este es el último tema del libro de texto que hemos usado este curso. 







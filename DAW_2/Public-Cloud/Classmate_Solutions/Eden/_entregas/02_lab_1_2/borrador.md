

# TAREA 1.2: DESPLEGANDO WORDPRESS MEDIANTE PaaS ___________________________________


## ENTREGA _________________________________________________________________________

- Entrega:

1) En la consola de AWS, detalles del entorno creado con *Elastic Beanstalk*. 

    1. *CAPTURAS DE PANTALLLA!!!!!!!!!!!!!!!!!!*


2) En *RDS*, detalles de la base de datos (panel Conectividad y seguridad) y reglas de entrada del grupo de seguridad wordpress-rds-sg

    1. *CAPTURAS DE PANTALLLA!!!!!!!!!!!!!!!!!!*


3) Captura de Wordpress funcionando, con una entrada que ponga *“Prueba de Wordpress con modelo PaaS de Nombre, Apellidos”* (pon ahí tu nombre completo real).

    1. *CAPTURAS DE PANTALLLA!!!!!!!!!!!!!!!!!!*





## PASO PREVIO ___________________________________________________________________

1) Antes de empezar el laboratorio asegurate de marcar en el propio guión del laboratorio (que he pegado completo a continuación) los momentos en los que hay que hacer las capturas. 

    1. Es esencial para no pasarlo por alto. 

    2. Indica aquí cuando ya hayas marcado en el guión los momentos en los que hay que hacer las capturas de pantalla.

        1. _________________________________________________________________________________ HECHO





## ENUNCIADO _____________________________________________________________________

TAREA 1.2: DESPLEGANDO WORDPRESS MEDIANTE PaaS

En esta práctica vamos a implementar (desplegar) WordPress a través del servicio AWS *Elastic Beanstalk*.

Elastic Beanstalk es un servicio de *PaaS* que simplifica el proceso de implementación y administración de aplicaciones. Gestiona automáticamente el aprovisionamiento de servidores, el balanceo de carga, el escalado automático y la monitorización.

En esta práctica la base de datos de WordPress se crea por separado en *Amazon RDS*, de forma independiente al entorno de Elastic Beanstalk. Así, si eliminas el entorno, la base de datos no se borrará.

Primero prepararemos la red y la base de datos en Amazon RDS, a continuación crearemos el entorno de Elastic Beanstalk permitiendo que sus instancias accedan a la base de datos y, por último, indicaremos a WordPress los datos de conexión durante su instalación web.





### PARTE 1: CREAR LOS GRUPOS DE SEGURIDAD ____________________________________________

Un *grupo de seguridad* actúa como un *cortafuegos virtual*. Para que solo las instancias de nuestro entorno puedan conectarse a la base de datos, crearemos dos grupos: uno que asociaremos a las instancias de Elastic Beanstalk y otro para la base de datos, que solo admitirá conexiones procedentes del primero.


Accede a la consola de AWS del Learner Lab, comprueba que estás en la región Norte de Virginia (*us-east-1*) y busca el servicio EC2. En el menú de la izquierda, dentro de *Redes y seguridad*, haz clic en *Grupos de seguridad* y después en *Crear grupo de seguridad*.


Crea primero el grupo de las instancias: en *Nombre del grupo de seguridad* escribe *"wordpress-ec2-sg"*, añade una *descripción* (por ejemplo, *"Instancias de WordPress en Elastic Beanstalk"*) y deja seleccionada la *VPC predeterminada*. *No* añadas ninguna regla de entrada: este grupo solo sirve para identificar a las instancias del entorno.


Crea después un segundo grupo llamado *wordpress-rds-sg*, en la misma VPC. En este caso, en *Reglas de entrada* (Inbound rules) haz clic en *Agregar regla* y configura *Tipo* como *MYSQL/Aurora (puerto 3306)* y *Origen* como *Personalizado*, seleccionando en el *desplegable* el grupo de seguridad *wordpress-ec2-sg* (escribe wordpress-ec2 para localizarlo). Así, solo las instancias que tengan asociado wordpress-ec2-sg podrán conectarse a MySQL.

    - No escribas el nombre completo en el buscador porque sino dará error, escribe "wordpress-ec2" y después seleccionalo en el desplegable. Seleccionarlo en el desplegable es la única forma de que no de error. 

    - Necesitará una descripción para que te deje crearlo: "Grupo de seguridad para la base de datos RDS de WordPress".

Haz clic en Crear grupo de seguridad para terminar.



**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**

- AHORA CAPTURA DE PANTALLA: 

    - "En *RDS*, detalles de la base de datos (panel Conectividad y seguridad) y reglas de entrada del grupo de seguridad wordpress-rds-sg."

        - Instrucciones extra deducidas del documento: Al terminar de configurar wordpress-rds-sg, con la regla MYSQL/Aurora (3306) cuyo origen es wordpress-ec2-sg, haz la captura.


- Indica aquí cuando hayas tomado la captura _____________________________________________________ HECHO


**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**




########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################









### PARTE 2: CREAR LA BASE DE DATOS EN AMAZON RDS ________________________________________________

Busca ahora el servicio *RDS*, haz clic en *Bases de datos* en el menú de la izquierda y después en *Crear base de datos*.

    - Supongo que la opción a escoger entonces es "Full configuration" ya que hay que seleccionar tantos ajustes. 

Configura la base de datos con los valores de la siguiente tabla y deja el resto de opciones con su valor por defecto. Según la versión de la consola, algunas opciones pueden aparecer con un nombre ligeramente distinto o en otro orden.


*PARA VISUALIZAR ESTA TABLA CORRECTAMENTE TIENES QUE PULSAR Alt + Z en VS Code para que te quite los saltos de línea (vista sin saltos de línea)*: 


| Opción                                            | Valor                                                                                                                                                     |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Método de creación                                | Creación *estándar* (en algunas versiones de la consola, Configuración completa)                                                                            |
| Opciones de motor                                 | *MySQL*, con la versión que aparezca por defecto  (no confundir con "Aurora/MySQL)                                                                                                          |
| Plantillas                                        | Desarrollo y pruebas (o *Capa gratuita*, si aparece)                                                                                                        |
| Disponibilidad y durabilidad                      | Instancia de base de datos *única* (sin Multi-AZ)                                                                                                           |
| *Identificador de instancia* de base de datos     | *"wordpress-db"*                                                                                                                                              |
| Nombre de usuario maestro                         | *admin*                                                                                                                                                     |
| Administración de credenciales                    | *self managed*                                                                                                                                        |
| Contraseña *maestra*                              | Elige una contraseña de al menos 8 caracteres (RDS no admite espacios ni los caracteres /, " y @) y anótala: la necesitarás más adelante    database_practica              |
| Clase de *instancia*                              | *db.t3.micro* (clases con ráfagas)                                                                                                                          |
| Almacenamiento                                    | SSD de uso general (*gp3*), *20 GB*. Desmarca el escalado automático del almacenamiento                                                                      |
| Conectividad                                      | *No* conectarse a un recurso de computación de EC2                                                                                                          |
| Nube privada virtual (VPC)                        | VPC *predeterminada* (la misma en la que crearás el entorno de Elastic Beanstalk)                                                                           |
| Acceso público                                    | *No*                                                                                                                                                        |
| Grupo de seguridad de VPC                         | Elegir *existente*: *wordpress-rds-sg* (*quita !!!!!!!!!!!!* el grupo default)                                                                                               |
| Monitorización                                    | Desmarca Performance Insights y la monitorización mejorada: no son necesarias y pueden dar errores en el laboratorio, que no permite crear roles de IAM   |
| Configuración *adicional* > Nombre base de datos  | *ebdb*                                                                                                                                                      |
| Configuración adicional > Copia de seguridad      | *Desmarca !!!!!!!!!!!* Habilitar copias de seguridad automatizadas: no las necesitamos en el laboratorio                                                                |




*PARA VISUALIZAR ESTA TABLA CORRECTAMENTE TIENES QUE PULSAR Alt + Z en VS Code para que te quite los saltos de línea (vista sin saltos de línea)*




Presta especial atención al Nombre de base de datos inicial, que está dentro de *Configuración adicional*. Si lo dejas vacío, RDS crea el servidor MySQL pero no crea ninguna base de datos dentro de él, y WordPress no tendría dónde instalarse.



Haz clic en Crear base de datos. La creación tarda entre 5 y 10 minutos, así que puedes continuar con la Parte 3 mientras el estado pasa de Creando a Disponible. Comprueba que ya está disponible antes de llegar a la Parte 7, donde necesitarás sus datos de conexión.

    - Lo marco aquí cuando me salga el mensaje de que se ha creado __________________________________ HECHO



########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################










### PARTE 3: CREAR LA APLICACIÓN Y CONFIGURAR EL ENTORNO EN *ELASTIC BEANSTALK* ________________________________________

Una vez accedas a la consola de AWS del Learner Lab, busca y selecciona el servicio *Elastic Beanstalk*. Haz clic en *Create*.

    - Leyendo el siguiente paso claramente se refiere a clicar en "Enviroments" y luego en "Create Enviroment".


Importante: la consola de AWS cambia con frecuencia, por lo que las capturas de pantalla de esta práctica pueden ser diferentes a las que verás en tu consola. Guíate por los nombres de las secciones y de las opciones que se indican en el texto, que corresponden a la consola de Elastic Beanstalk en inglés (si tu consola está en español, los nombres serán equivalentes).

Elastic Beanstalk muestra una única pantalla, *Create environment*, con varias secciones. En *Deployment mode* deja marcada la opción *Standard*, pensada para aplicaciones sencillas o de poco tráfico.

    [Imagen presente en la página 3 del PDF] -> simplemente muestra que marques la opción "Standard" (tal y como se ha indicado en el párrafo anterior).

En *Environment details*, escribe en *Application name* el nombre de la aplicación, como *WordPressApp*. El resto de datos básicos (nombre del entorno, prefijo de dominio y descripción) son opcionales y puedes dejarlos con su valor *por defecto*.

Baja hasta la sección *Platform details*. Una plataforma es una combinación de un sistema operativo, un entorno de ejecución, un servidor web, un servidor de aplicaciones y componentes de Elastic Beanstalk.

Como WordPress está basado en PHP, necesitaremos seleccionarla en *Platform*. En *Platform branch* elige la rama de *PHP* más reciente que aparezca (la última versión de WordPress es compatible con PHP 8.3 y superiores) y deja la *Platform version* marcada como recomendada. Puede que aparezcan versiones más actualizadas que las de la captura.

Ve a la sección *Application code*, donde tendremos que subir un fichero con WordPress. Selecciona la opción *Local file*; con *Choose file* subirás el fichero comprimido que vamos a preparar a continuación.

    [Imagen presente en la páginca 4 del PDF] -> simplemente muestra que marques la opción "Local file" (tal y como se indica en el párrafo anterior).

- Para ello, *descarga* WordPress en el siguiente *enlace*. El fichero comprimido descargado no es adecuado ya que Elastic Beanstalk espera que en el fichero comprimido que subamos estén ya los propios ficheros. Por lo tanto, *descomprime* el fichero descargado, selecciona todos los ficheros que contiene y crea un *fichero comprimido* para ser funcional con Elastic Beanstalk.

    https://wordpress.org/latest.zip

    [Imagen presente en la página 4 del PDF] -> nos muestra cómo seleccionar todos los ficheros y archivos y volverlos a comprimir. 

    - El texto del guión no lo explica bien, a lo que se refiere es a esto: Elastic Beanstalk quiere que, al abrir el ZIP, los archivos de WordPress estén directamente en la raíz. Por ello lo que has de hacer es: 

        1. Descomprimir

        2. Entrar dentro de la carpeta que se ha generado y seleccionar todos los archivos y comprimirlos. 


Ve a la sección *Application code*, donde tendremos que subir un fichero con WordPress. Selecciona la opción *Local file*; con *Choose file* sube el fichero que acabamos de preparar. 


########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################








### PARTE 4: CONFIGURACIÓN DE ACCESO AL SERVICIO ____________________________________________________________________

Sin salir de la pantalla *Create environment*, baja hasta el final de la primera sección, donde aparecen *Environment properties*, Platform-specific options, Service access y Tags.

    [Imagen presente en la página 5 del PDF] -> simplemente muestra qué aspecto tiene la sección de "Enviroment properties".


Despliega *Service access*. Debido a las limitaciones que tiene el laboratorio AWS Academy Learner Lab, es importante usar los roles que nos ofrece el laboratorio: en Service role marca *"Use another role"* y selecciona *"LabRole"*; en el apartado de *EC2 instance profile* marca también *"Use another role"* y selecciona *"LabInstanceProfile"*; y en *EC2 key pair* selecciona *"vockey"*.

    [Imagen presente en la página 5 del PDF] -> muestra qué opciones marcar: son las mismas que se han indicado en el párrafo anterior. 


Con esto ya están definidos los datos mínimos del entorno, pero antes de crearlo vamos a permitir que sus instancias accedan a la base de datos (Parte 5).




########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################







### PARTE 5: ACCESO DE LAS INSTANCIAS A LA BASE DE DATOS _____________________________________________________________

Además de Service access, la pantalla *Create environment* incluye varias secciones opcionales con *opciones avanzadas*: Infrastructure, Networking y Monitoring and updates. Vamos a dejar las configuraciones *por defecto* para enfocarnos más en el despliegue de WordPress, *salvo* en una sección, donde tenemos que dar acceso a las instancias del entorno a la base de datos que hemos creado en RDS.

    [Imagen presente en la página 6 del PDF] -> simplemente te muestra el aspecto de diferentes secciones antes de ser desplegadas. 


Despliega la sección *Networking*. En *Instance settings* deja la VPC predeterminada (*Default VPC*), la misma en la que está la base de datos, y las Instance subnets que aparecen por defecto.

- En *EC2 security groups* verás que ya hay un grupo de seguridad seleccionado, creado por Elastic Beanstalk (su nombre empieza por *awseb-*). No lo quites: permite que el tráfico web llegue a las instancias. 

####################################################################################################################

Problema:

- No aparece ningun grupo de seguridad preseleccionado y no solo eso, si clico en el desplegable solo aparecen 3: el default y los dos que cree antes.

    - Vale. He comprobado la documentación actual de AWS y esto explica lo que estás viendo: Elastic Beanstalk normalmente crea automáticamente un grupo de seguridad para las instancias al crear el entorno, pero AWS ha introducido cambios recientes en esta configuración.

        - En tu caso, como todavía no has creado el entorno, ese awseb-... todavía no existe. Por eso tampoco aparece en EC2. 

            - La documentación actual de AWS confirma que el grupo predeterminado de EC2 puede no utilizarse y que los grupos personalizados pueden especificarse directamente.

                - Como la práctica dice en el siguiente paso que añadas *wordpress-ec2-sg* pues lo añadimos y con eso será suficiente (en lugar de 2 habrá 1). 


###################################################################################################################




- Añade también *wordpress-ec2-sg* desde el desplegable *Choose security groups*. Así, las instancias del entorno tendrán permitido el acceso a MySQL definido en la Parte 1.

    [Imagen presente en la página 6 del PDF] -> Muestra el aspecto de la sección de "Instance settings". 



Por último, despliega la sección *Review*, comprueba el resumen de la configuración del entorno y haz clic en *Create environment* para crearlo.

________________________________________ *HECHO*




########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################








### PARTE 6: DESPLEGAR EL ENTORNO __________________________________________________________________________

El proceso de despliegue de WordPress puede tardar unos 5 minutos debido a que AWS ha de crear todos los recursos necesarios, como las instancias de máquina virtual (EC2) y los grupos de seguridad. La base de datos no se crea en este proceso: ya existe porque la lanzaste tú antes en RDS.

    [Imagen presente en la página 7 del PDF] -> Muestra el aspecto que tiene el mensaje de "Entorno lanzado correctamente"

- Una vez el entorno está desplegado, AWS nos proporciona una *URL* pública para acceder a la aplicación WordPress.

    - En esa misma ventana bajo el texto "Domain" tienes dicha URL. 

    [Imagen presente en la página 7 del PDF] -> Imagen que nos muestra la selección de idioma en la aplicación de WordPress.

    
**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**


- AHORA CAPTURA DE PANTALLA:

    - "En la consola de AWS, detalles del entorno creado con *Elastic Beanstalk*." 

        - Instrucciones extra deducidas del documento: Cuando aparezca el mensaje de “Entorno lanzado correctamente”, haz la captura del entorno de Elastic Beanstalk.


- Indica aquí cuando hayas tomado la captura _____________________________________________________ *HECHO* 



**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**



########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################
########################################################################################











### PARTE 7: CONFIGURAR LA INSTALACIÓN DE WORDPRESS _________________________________________________________

Haz clic en la *URL del entorno*, elige el idioma de WordPress y llegarás al paso donde hay que configurar la conexión con la base de datos. Para rellenar el formulario necesitas los datos de la base de datos que creaste en RDS.

Para obtenerlos, busca el servicio *RDS*, haz clic en *Databases* (Bases de datos) en el menú de la izquierda y selecciona *wordpress-db*.
    
    [Imagen presente en la página 8 del PDF] -> Muestra que interfaz te sale cuando clicas en "Databases". 


En la pestaña *"Connectivity & security"* (Conectividad y seguridad) de la base de datos encontrarás los datos que necesitas: el *Endpoint* (punto de enlace), que debes copiar; el *Database name* (nombre de la base de datos), *ebdb*; y el *Master username* (nombre de usuario maestro), *admin*. 

    [Imagen presente en la página 8 del PDF] -> Te muestra el contenido de la pestaña de "Connectivity & security".

    - database_practica

    - En el campo "Database Host" de la pantalla de configuración de wordpress hay que poner el endpoint. 

        - El endpoint lo obtienes en la interfaz de RDS -> Databases -> seleccionas la database -> Connectivity and security -> Cliclas en Endpoints. 

    - El nombre de la database está también donde está anotado el endpoint. 




Las capturas corresponden a otra base de datos, por lo que el identificador y el endpoint de la tuya serán distintos.


Rellena el formulario de WordPress con estos valores:


| Campo de WordPress            | Valor                                             |
|------------------------------ |---------------------------------------------------|
| Nombre de la base de datos    | ebdb                                              |
| Nombre de usuario             | admin                                             |
| Contraseña                    | La contraseña maestra que elegiste en la Parte 2  |
| *Database host*               | El punto de enlace (*endpoint*) de RDS, sin puerto  |
| Prefijo de tabla              |wp_ (déjalo como está)                            |



Fíjate en que el campo Servidor de la base de datos *aparece rellenado con localhost*: bórralo antes de pegar el punto de enlace, ya que si no ambos textos se concatenan y la conexión falla.

    [Imagen presente en la página 9 del PDF] -> Muestra en qué campos tienes que escribir los valores de la tabla anterior. 


Cuando hayas terminado, haz clic en *Enviar*.


Y si todo va bien, ¡WordPress te avisará de que puede comunicarse con tu base de datos!

    [Imagen presente en la página 10 del PDF] -> Muestra el mensaje de aviso de WordPress de que  puede comunicarse correctamente con tu base de datos.


Si WordPress no consigue conectarse, revisa que la base de datos esté Disponible, que los datos introducidos coincidan con los de la base de datos, que el grupo wordpress-ec2-sg esté asociado a las instancias del entorno y que wordpress-rds-sg permita el tráfico MySQL desde él.


Haz clic en *Realizar la instalación* y completa los datos del sitio (*título*, *usuario administrador*, *contraseña* y *correo electrónico*). Después inicia sesión en WordPress y *publica la entrada* que se pide en la entrega.

    - Practica: desplegando WordPress mediante Paas

    - edenpean

    - database_practica

    - edpeanprogram


Una vez comprobada dicha conexión, haz las capturas necesarias para la parte de entrega de la práctica, y ya puedes *eliminar los recursos para no tener costes innecesarios*. Empieza por terminar el entorno de Elastic Beanstalk.

    [Imagen de la página 10 del PDF] -> Nos indica dónde esta escondida la opción de "Terminar entorno". 


**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**

- AHORA CAPTURA DE LA ENTREGA:

    - "Captura de Wordpress funcionando, con una *entrada* (post) que ponga *“Prueba de Wordpress con modelo PaaS de Nombre, Apellidos”* (pon ahí tu nombre completo real)."

        - Instrucciones extra deducidas de este documento: Después de “Realizar la instalación”, iniciar sesión y publicar la entrada solicitada, haz la captura de WordPress funcionando con la entrada.



- Indica aquí cuando hayas tomado la captura _____________________________________________________ *HECHO*




**########################################################################################################################################**
*########################################################################################################################################*
**########################################################################################################################################**


La base de datos es independiente del entorno, así que no se elimina al terminarlo y tienes que borrarla tú. En RDS, selecciona la base de datos y haz clic en Acciones > Eliminar. Desmarca Crear instantánea final, marca la casilla de reconocimiento y escribe delete me para confirmar. Cuando el entorno y la base de datos hayan desaparecido, elimina también los grupos de seguridad wordpress-rds-sg y, después, wordpress-ec2-sg desde EC2 > Grupos de seguridad.



Con esto ha terminado la "Tarea 1.2".











### ELIMINAR LOS RECURSOS PARA NO TENER COSTES INNECESARIOS ________________________________________________________

1. Eliminar el entorno de Elastic Beanstalk -----> terminate enviroment _______________________ HECHO 

2. RDS ---------------> databases --------> delete ________________________________________________________________ HECHO 

3. EC2 -----------> security groups:

    1. wordpress-rds-sg ------------------------> Delete _______________________ HECHO

    2. wordpress-ec2-sg ------------------------> Delete _______________________ HECHO












# ESTRATEGIA _________________________________________________________________________________________________


## PARTE 1 ----------------------------------------------------------------------------------------------------

- Tal y como nos indicó Quino (Cloud, 2ºDAW) AWS es una tecnología que nos vamos a encontrar seguro en nuestra carrera laboral.

    - También nos indicó que tenemos que sacarnos certificaciones de AWS para poder competir en el mercado laboral. 


- Tenemos acceso a los videos explicativos de AWS durante este curso.

    - Quiero transcribir el contenido de esos videos (que están agrupados por temas) para poder adquirir una base sólida de los conceptos y tecnologías básicos de AWS.

    - No te fies de copiar solo el texto de las diapositivas, el narrador de los vídeos da mucha información muy importante que no está escrita en las diapositivas. 


## PARTE 2 ----------------------------------------------------------------------------------------------------

- Ya estoy transcribiendo el contenido de los videos de AWS a un documento mark down en los que pongo el contenido esquematizado y amigable/accesible/visual. 

- Cuando los tenga todos transferidos (todos los videos pasados a documento de texto markdown), repasaré mis apuntes de clase y transferiré la información que sea novedosa (no incluída en los videos) y lo que sea redundante (que ya esté explicado en los videos) lo borraré. 

    - De ese modo, al final tendré 1 único documento con todos los contenidos separados por temas. 




################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
#
#
#








# UD01: INTRODUCCIÓN A LA COMPUTACIÓN EN LA NUBE _______________________________________________



## OBJETIVO: DISEÑAR Y DESPLEGAR ARQUITECTURAS EN LA NUBE ________________________________________________________________

1) Imagen con un gran numero de elementos y flechas (diapo).

    1. "Al final del tema 5 sereis capaces de montar una arquitectura así".






## ¿Por qué la tecnología en la nube? _________________________________________________________

Accesibilidad 

Flexibilidad para escalar tecnologicamente. 

Reducción de la inversión inicial (costes).





## Informatica en la nube

Definición = es la ejecución de una carga de trabajo bajo demanda a través de la red de internet. 







## La infraestructura como hardware

1) Requiere la predicción de los picos máximos teóricos. 

    1. Y cuando no haya una carga alta estaremos desperdiciando recursos. 






## La infrastructura como software

1) Son flexibles. 

2) Suele ser más rentable que las infraestructuras de hardware. 








## MODELOS DE SERVICIO EN LA NUBE ___________________________________________________________________

1) *Iaas* = *infraestructura* como servicio.

    1. Nos conviere control total sobre el hardware.

    2. Proporciona acceso a: servidores virtuales, almacenamiento, redes. Es decir, recursos básicos. 


2) *Paas* = *plataforma* como servicio.

    1. Nos concentramos en la plataforma dejando de lado el hardware.

    2. El proveedor aporta una plataforma de despliegue de aplicaciones. 


3) *Saas* = *software* como servicio.

    1. Abandonamos por completo el control de IPs y demás. Nos dedicamos 100% a las aplicaciones. 

    2. Aplicaciones gestionadas con el propio proveedor. 







## MODELOS DE IMPLEMENTACIÓN 

1) Nube pública

2) Nube privada

3) Híbrida







## VENTAJAS DE LA COMPUTACIÓN EN LA NUBE

1) Gasto basado en consumo.

2) Mucha gente usando muchos servicios cloud -> produce un abaratamiento de los servicios. 

3) Permite evitar tener que estimar la capacidad del servidor.

    1. Evitamos la sobreestimación  -> problema que el modelo de Cloud puede esquivar. 

    2. Evitamos la subestimación -> problema que el modelo de Cloud puede esquivar. 

    3. Es decir: ajustamos la capacidad a la demanda con gran precisión y acierto. 


4) Aumentar la velocidad de acceso a los secursos de tecnologías de la información. 


5) Ahorramos la inversión inicial gigantesca en hardware. 


6) Adquirir escala mundial de forma muy rápida. 








## INCONVENIENTES _____________________________________________________________________________

1) ¿Cómo me garantizan a mi que mis datos no seran accedidos por terceros?

2) Necesita conexión a internet continua y rápida. 

3) Adquirir dependencia tecnológica con compañías ajenas (Amazon, Microsoft).









## Google, Azure y AWS ________________________________________________________________

1) Esos son los 3 líderes en trabajo en la nube.

2) Si sabeis levantar una maquina virtual en AWS también lo sabréis hacer en Azure (es cosa de acostumbrarse a la interfaz).








## Origen de AWS

1) Primero crearon los servicios para las necesidades del propio Amazon. Pero luego empezaron a prestar esos servicios a otras empresas. 

2) AWS empezó antes y actualmente es el que mayor cuota de mercado tiene. Lleva siendo el lider desde 2006.

3) OJO -> en 2023 el 54% de los ingresos de Amazon vienen de AWS. 

    1. Es decir, AWS ya factura más dinero que la tienda de Amazon. 

4) Netflix tiene su catálogo de películas en AWS. 

5) El iCloud usa AWS. 







## Microsoft Azure

1) Es la que ha experimentado un mayor crecimiento en los últimos años. 

2) Tiene la ventaja de mayor integración con las otras tecnologías de Microsoft. 







## Google Cloud Platform (GCP)


1) Spotify, Nintendo y Toyota usan Google Cloud Platform. 








## ¿Qué es AWS?

1) Acceso bajo demanda a recursos informáticos. 

2) Es muy muy flexible. 

    1. Muchas maneras de configurar los servicios. 


3) Pagamos por los servicios mientras los utilizados. Cuando dejemos de necesitarlos cancelamos el servicio. 








## SIMILITUDES ENTRE AWS Y LA INFRAESTRUCTURA TRADICIONAL 

1) Diapositiva muy útil en la que se correlaciona hardware con diferentes servicios de AWS. 









## MODELO DE PRECIOS EN AWS

1) Pagamos por:

    1) Cómputo.

        1. Si la maquina virtual no esta encendida no estoy pagando. 

    2) Almacenamiento.

        1. Se cobra por GB de uso. 

    3) Transferencia de datos. 

        1. La salida se cobra, pero la entrada no. 

            1. Esto es clave: cada cliente de tu negocio que descargue datos te va a cobrar AWS por ello. 

        2. Se cobre por GB de uso. 






## ¿CÓMO PAGA POR AWS?

1) Pague por lo que usa.

2) Paga menos si reservas la capacidad de computo.

3) A medida que aumenta el uso y AWS crece los clientes pagan menos. 

    1. Esto lo veremos más adelante. 








## INFRAESTRUCTURA GLOBAL DE AWS 

1) AWS tiene centros de datos repartidos por muchas regiones. 

2) Hay varias subdivisiones. 

3) Divisiones:

    1) *Regiones*

        1. Comunicadas mediante la propia red de AWS. 

    2) *Zonas de disponibilidad*:

        1. Dentro de las regiones. 

        2. Cada Region suele tener 3 zonas de disponibilidad. 

        3. Cada zona de disponibilidad es una replica completa de la estructura de AWS (tiene todos los componentes).

        4. AWS recomienda replicar los datos y recursos entre las zonas de disponibilidad para no perder nada en caso de catastrofe natural o atentado (atentado como el del verano de 2026 en emiratos arabes que daño una zona de disponibilidad).

        5. Cada zona de disponibilidad tiene varios centros de datos. 

        6. Cada zona de disponibilidad esta separada de las otras por entre 60 y 100km. 


    3) *Centros de datos*

        1. Cada zona de disponibilidad contiene varios centros de datos. 


    4) *"Puntos de presencia"*

        1. Permite hacer caché de información y que llegué más rápido a los clientes. 

        2. Netflix tiene mogollón de caché por todo el mundo. 








## SERVICIOS DE ALMACENAMIENTO QUE QUIERE QUE CONOZCAMOS 

1) Amazon Simple Storage Service (Amazon S3) 

    1. es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento. Utilícelo para almacenar y proteger una gran cantidad de datos para sitios web, aplicaciones móviles, respaldos y restauración, archivo, aplicaciones empresariales, dispositivos de Internet de las cosas (IoT) y análisis de big data.


2) Amazon Elastic Block Store (Amazon EBS) 

    1. es un almacenamiento en bloque de alto rendimiento diseñado para utilizarse con Amazon EC2 para cargas de trabajo que hacen un uso intensivo de transacciones y de rendimiento. Se utiliza para una amplia gama de cargas de trabajo, como bases de datos relacionales y no relacionales, aplicaciones empresariales, aplicaciones en contenedores, motores de análisis de big data, sistemas de archivos y flujos de trabajo multimedia.


3) Amazon Elastic File System (Amazon EFS) 

    1. proporciona un sistema de archivos de Network File System (NFS) elástico, escalable y completamente administrado para su uso con los servicios de la nube de AWS y los recursos en las instalaciones. Está diseñado para escalar a petabytes bajo demanda, y aumenta y reduce su tamaño automáticamente a medida que se agregan y se eliminan archivos. Reduce la necesidad de aprovisionar y administrar capacidad para admitir el crecimiento.


4) Amazon Simple Storage Service Glacier 

    1. es un tipo de almacenamiento en la nube de Amazon S3 seguro, duradero y de muy bajo costo para archivar datos y realizar respaldos a largo plazo. Está diseñado para ofrecer una durabilidad del 99,999999999 % y proporcionar capacidades integrales de seguridad y cumplimiento que permiten cumplir requisitos normativos estrictos.







## SERVICIOS DE CÓMPUTO QUE QUIERE QUE CONOZCAMOS

1) Amazon Elastic Compute Cloud (EC2): Máquinas virtuales

2) Amazon EC2 Auto Scaling: agregar o eliminar automáticamente instancias EC2 de acuerdo con las condiciones que defina.

3) Amazon Elastic Container Service (ECS) es un servicio de coordinación de contenedores altamente escalable y de gran rendimiento que es compatible con los contenedores de Docker.

4) Amazon Elastic Container Registry (ECR) es un registro de contenedores Docker completamente administrado que facilita a los desarrolladores las tareas de administración de imágenes de contenedores Docker.

5) AWS Elastic Beanstalk es un servicio para implementar y escalar servicios y aplicaciones web en servidores conocidos como Apache y Microsoft Internet Information Services (IIS).

6) AWS Lambda le permite ejecutar código sin necesidad de aprovisionar ni administrar servidores. Solo paga por el tiempo de cómputo que consume. No se aplican cargos cuando su código no se está ejecutando.

7) Amazon Elastic Kubernetes Service (EKS) facilita las tareas de implementación, administración y escalado de aplicaciones en contenedores que utilizan Kubernetes en AWS.

8) AWS Fargate es un motor de cómputo para Amazon ECS que le permite ejecutar contenedores sin tener que administrar servidores ni clústeres.







## SERVICIOS DE BASE DE DATOS QUE QUIERE QUE CONOZCAMOS

1) Amazon Relational Database Service (RDS) 

    1. facilita las tareas de configuración, operación y escalado de una base de datos relacional en la nube. El servicio ofrece capacidad de tamaño ajustable al mismo tiempo que automatiza tareas administrativas que demandan mucho tiempo, como el aprovisionamiento de hardware, la configuración de bases de datos, la implementación de parches y la creación de respaldos.

2) Amazon Aurora es una base de datos relacional compatible con MySQL y PostgreSQL. Es hasta
cinco veces más rápida que las bases de datos MySQL estándar y tres veces más rápida que las
bases de datos PostgreSQL estándar.

3) Amazon Redshift le permite ejecutar consultas analíticas de petabytes de datos almacenados
localmente en Amazon Redshift, además de ejecutar consultas analíticas de exabytes de datos
almacenados en Amazon S3 de forma directa. Ofrece un rendimiento rápido a cualquier escala.

4) Amazon DynamoDB es una base de datos de documentos y clave-valor que ofrece un
rendimiento de milisegundos de un solo dígito a cualquier escala, con seguridad integrada,
respaldo y restauración, y almacenamiento en caché en memoria.









## SERVICIOS DE REDES Y ENTREGA DE CONTENIDO QUE QUIERE QUE CONOZCAMOS 

Virtual Private Cloud (VPC) le permite aprovisionar secciones aisladas de forma lógica de la nube de AWS.

Elastic Load Balancing distribuye automáticamente el tráfico entrante de las aplicaciones en varios destinos, tales
como instancias de Amazon EC2, contenedores, direcciones IP y funciones de Lambda.

Amazon CloudFront es un servicio rápido de red de entrega de contenido (CDN) que suministra datos, videos,
aplicaciones e interfaces de programación de aplicaciones (API) de manera segura a clientes de todo el mundo, con
baja latencia y altas velocidades de transferencia.

AWS Transit Gateway es un servicio que permite a los clientes conectar sus nubes privadas virtuales de Amazon (VPC)
y sus redes en las instalaciones a una única puerta de enlace.

Amazon Route 53 es un servicio web de sistema de nombres de dominio (DNS) escalable y en la nube diseñado para
direccionar a los usuarios finales a las aplicaciones de Internet de una forma fiable.

AWS Direct Connect ofrece una manera de establecer una conexión de red privada dedicada desde su centro de datos
u oficina a AWS, lo que puede reducir los costos de red y aumentar el rendimiento del ancho de banda.

AWS VPN proporciona un túnel privado seguro desde su red o dispositivo hacia la red global de AWS.







## EJEMPLO DE UNA SOLUCIÓN SENCILLA

1) Diapositiva 44 del PDF. 








## Tres formas de interactuar con los servicios de AWS

1) Consola de administración de AWS

    1. En este caso "consola" no se refiere a pantalla en negro con código, sino a interfaz gráfica muy visual y fácil de utilizar. 

        1. Por eso Quino no la llama "consola" sino "consola gráfica" para que no de pie a dudas. 

    2. Interfaz gráfica fácil de usar

    3. Problema -> AWS cambia cada dos por tres la apariencia de su interfaz gráfica. 


2) Interfaz de línea de comandos (AWS CLI)
    Acceso a los servicios mediante comandos o scripts


3) Kits de desarrollo de software (SDK)
    Acceso a los servicios directamente desde el código
    (como Java, Python y otros)









## AWS CloudFormation

AWS CloudFormation es un servicio de AWS que permite definir y gestionar recursos de infraestructura mediante archivos de configuración, normalmente en formato YAML o JSON.

Su funcionamiento básico es:

1. Se crea una plantilla donde se describen los recursos que necesitamos, como servidores EC2, bases de datos, redes, etc.
2. CloudFormation lee esa plantilla y crea automáticamente esos recursos en AWS.
3. La plantilla se puede modificar para actualizar la infraestructura existente.
4. Si se elimina el stack (conjunto de recursos creado por CloudFormation), CloudFormation puede eliminar también los recursos asociados.

En resumen, CloudFormation permite **automatizar la creación y gestión de infraestructura**, evitando tener que configurar cada recurso manualmente desde la consola de AWS.

Y todo esto se hace mediante un Script. 

Es muy rápido desplegar una solución en AWS. 









## CALCULADORA DE PRECIOS __________________________________________________________________

1) Los precios pueden cambiar de una región a otra. 

2) Un servidor web pequeño en AWS son más de 200 $ al año.













## MODELO DE RESPONSABILIDAD COMPARTIDA DE AWS ____________________________________________________

1) Responsabilidad del AWS = la seguridad de la nube.

    1. Que la infraestructura funcione correctamente y no caiga. 

2) Responsabilidad de los usuarios = responsables de la seguridad DENTRO de la nube.

    1. Cifrado de datos.

    2. Configurar el sistema operativo.

    3. Administrar el acceso a la plataforma. 





### EN FUNCIÓN DEL MODELO ----------------------------------------------------------------------


1) En el modelo IaaS -> el cliente tiene más responsabilidades.


2) En el modelo PaaS -> el cliente tiene menos responsabilidedes. 






### EJEMPLO DE LA DIAPOSITIVA Nº49 ----------------------------------------------------------------

1) Pregunta 1: quién tiene la responsabilidad de parchear el sistema operativo.

    - Si es un modelo IaaS la responsabilidad es nuestra



2) Seguridad física del cento de datos.

    - Es responsabilidad de AWS en todos los modelos.


3) Infraestructura de virtualización.

    - Es responsabilidad de AWS en todos los modelos. 


4) Configuración de grupos de seguridad EC2.

    - EC2 es un firewall ofrecido por AWS. 

    - Esto es responsabilidad del cliente siempre (en todos los modelos).



5) Configuración de las aplicaciones que se ejecutan en la instancia EC2. 

    - En el modelo IaaS es responsabilidad del cliente.



6) Actualizaciones o parches de Oracle si la instancia de Oracle se ejecuta como una instancia Amazon RDS.

    - Amazon RDS -> servicios gestionados por AWS -> le decimos que levante un Oracle. 

        - Y por ello es responsabilidad de AWS.



7) Actualizaciones o parches de Oracle si Oracle se ejecuta en una instancia EC2. 

    - En ese caso sí es responsabilidad del cliente. 




8) Configuraciones de acceso al bucket S3.

    - Esa configuración es establecer quién tiene acceso.

    - Es responsabilidad del cliente. 



9) Estas preguntas suelen salir en las preguntas de certificación. 













## WELL ARCHITECTED FRAMEWORK _________________________________________________________________

- Es una guía de buenas prácticas proporcionada por AWS. 

1) Excelencia operativa


2) Seguridad


3) Fiabilidad

    1. Recuperarse de errores por si sola y gestionar por si sola los picos de tráfico. 


4) Eficiencia de rendimiento


5) Optimización de costos


6) Sostenibilidad

    1. Reducir el consumo energético. 












## AHORA HACEMOS LA "Tarea 1.2: Despliegue de Wordpress con modelo PaaS" ---------------------------

1) La he realizado en la carpeta "_entregas/02_lab".





#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#
#
#


A PARTIR DE AQUÍ YA ES TEMARIO QUE ENTRARÁ EN EL SEGUNDO EXAMEN TIPO TEST


# UD02: DISEÑO Y CONFIGURACIÓN DE REDES VIRTUALES ______________________________________________________

"Se trata de que tengáis conocimientos básicos de redes para después ser capaces de diseñar una arquitectura básica VPC". 


## CONCEPTOS BÁSICOS DE REDES ---------------------------------------------------------------------

Una red informática consiste en dos o más máquinas clientes que están conectadas para compartir recursos. Una red se puede dividir lógicamente en subredes. Las redes requieren un dispositivo de red (como un enrutador y un conmutador) para conectar todos los clientes y permitir la comunicación entre ellos.

- Direcciones IP
    • Una dirección IP identifica un lugar dentro de una red
    • Identifica la red y el host
    • Hay dos tipos de direcciones IP: IPv4 y IPv6

    Dirección de (32-bits) IPv4: 192.0.2.0
    Dirección de (128-bits) IPv6:
    2600:1f18:22ba:8c00:ba86:a05e:a5ba:00FF


- En una dirección IP hay 2 partes:

    - Una parte representa a la subred. -> network.

    - Otra parte representa a ese equipo concreto dentro de la subred.  -> host. 



- Las *direcciones IP privadas* son direcciones de Internet reservadas para uso interno en redes locales, como redes domésticas o empresariales. Estas direcciones no se pueden utilizar directamente para acceder a Internet, sino que se convierten a direcciones IP públicas a través de un proceso llamado NAT (Network Address Translation).

    - Rangos de direcciones privadas:
        ▪ 10.0.0.0 a 10.255.255.255: para redes de gran tamaño, como las de grandes empresas.
        ▪ 172.16.0.0 a 172.31.255.255: para redes de tamaño medio, como las de oficinas o centros educativos.
        ▪ 192.168.0.0 a 192.168.255.255: el más común para redes domésticas y pequeñas empresas.

    - ¿Cómo funcionan?
        
        - Cuando un dispositivo con una dirección IP privada intenta acceder a Internet, el router o dispositivo que realiza *NAT* *traduce* la *dirección IP privada* a una dirección IP pública, permitiendo la comunicación con el servidor web o destino deseado.




## CIDR ---------------------------------------------------------------------

CIDR (Classless Inter-Domain Routing) especifica un rango de direcciones IP llamado bloque CIDR

Ejemplo: Tenemos la red:

`192.168.1.0/26`

- `/26` → **26 bits para la red** y `32 - 26 = 6` bits para hosts.
- Direcciones: `2^6 = 64`
- Hosts utilizables: `64 - 2 = 62`

Por tanto:

- **Red:** `192.168.1.0`
- **Primer host:** `192.168.1.1`
- **Último host:** `192.168.1.62`
- **Broadcast:** `192.168.1.63`
- **Máscara:** `255.255.255.192`

**Idea clave:** `/26` determina qué parte de la IP identifica la red y qué parte identifica a los hosts.




### Ejercicio 

- Es ahora cuando nos pasó un enunciado de subneting (lo tengo en la carpeta de ejercicios). 







## Amazon VPC ------------------------------------------------------------------------------------

• Permite aprovisionar una sección aislada de forma lógica de la nube de AWS, donde se pueden iniciar recursos de AWS en una red virtual definida por el usuario.

• Permite controlar los recursos de redes virtuales, entre ellos:
  • Selección de un rango de direcciones IP.
  • Creación de subredes.
  • Configuración de tablas de enrutamiento y puertas de enlace de red.

• Permite personalizar la configuración de red, desplegando los recursos en subredes públicas o privadas.

• Permite utilizar varios niveles de seguridad para ayudar a controlar el acceso a los diferentes recursos en las subredes.




### IMPLEMENTACIÓN

- VPC:
    • Se encuentra aislada de forma lógica de otras VPC
    • Dedicada a su cuenta de AWS
    • Pertenece a una única región de AWS y puede abarcar varias zonas de disponibilidad
    • Hay un límite de *5 VPC por región y cuenta*.


- La VPC permite tener un aislamiento lógico entre diferentes partes de una región de AWS. 


- Al crear una VPC, se le asigna un bloque IPv4 de CIDR (un rango de direcciones IPv4 privadas).

    • No se puede cambiar el rango de dirección después de crear la VPC.

    • El tamaño de bloque de CIDR IPv4 más grande es /16.

    • El tamaño de bloque de CIDR IPv4 más pequeño es /28.

    • También se admite IPv6 (con un límite de tamaño de bloque diferente).



- Una subred es un segmento o una partición del intervalo de direcciones IP de una VPC donde puede ubicar un grupo de recursos.

    • Las subredes no son límites de aislamiento.
    • Las subredes son un subconjunto del bloque de CIDR de la VPC.
        - No puede haber solapamiento entre subredes de AWS. 
    • Los bloques de CIDR de las subredes no pueden superponerse.
    • Todas las subredes se encuentran dentro de una zona de disponibilidad por completo.
    • Puede agregar una o más subredes en cada zona de disponibilidad.
    • AWS reserva cinco direcciones IP en cada subred.
    • La subred se clasifica como pública o privada.




### DIRECCIONES IP RESERVADAS EN AWS 

10.0.0.0     Direcciones de red
10.0.0.1     Comunicaciones internas
10.0.0.2     Resolución del sistema de nombres de dominio (DNS)
10.0.0.3     Uso futuro
10.0.0.255   Dirección de difusión de red


Estas SIEMPRE están reservadas en la nube de AWS. 





### Tipos de direcciones IP públicas


| Dirección IPv4 pública                                                                 | Dirección IP elástica                                      |
|----------------------------------------------------------------------------------------|-------------------------------------------------------------|
| • Es una dirección IP dinámica.                                                        | • Es una dirección IP pública estática.                    |
| • Asignación de forma automática a través de la configuración de dirección IP pública  | • Asociada a una cuenta de AWS.                            |
|   al lanzar una instancia.                                                             |                                                             |
| • Si detenemos una instancia, al iniciarla de nuevo cambiará su IP pública.            | • Se puede asignar y reasignar en cualquier momento.       |
| • No tiene asociado un coste.                                                          | • Tiene un coste mensual.                                  |


*Para visualizar bien esta tabla pulsa Alt + Z.*





### Interfaz de red elástica

Una interfaz de red elástica es una interfaz de red virtual que puede:

▪ Adjuntar a una instancia.
▪ Desconectar de la instancia y conectarla a otra instancia para redirigir el tráfico de red.

• Sus atributos siguen cuando se reasigna a una nueva instancia.

• Cada instancia de su VPC tiene una tarjeta de interfaz de red predeterminada a la que se asigna una dirección IPv4 privada del intervalo de direcciones IPv4 de la VPC. No se puede desconectar una interfaz de red principal de una instancia.

• Puede crear y adjuntar una interfaz de red adicional a cualquier instancia de su VPC. El número de interfaces de red que se pueden conectar varía según el tipo de instancia.





### Gateways de Internet: subredes públicas

Permiten la comunicación entre recursos en la VPC e Internet.

• Son escalables, redundantes y cuentan con alta disponibilidad de forma predeterminada.

• Son un objetivo en las tablas de enrutamiento de la subred para el tráfico que se puede llevar a Internet.

• Para convertir una subred en pública, primero hay que crear un gateway de Internet y asociarlo a la VPC.





### Direccionamiento del tráfico entre recursos de VPC

Las tablas de enrutamiento son necesarias para dirigir el tráfico entre los recursos de la VPC.

• Cada VPC tiene una tabla de enrutamiento principal (predeterminada) que contiene rutas.
• Cada ruta especifica un destino y un objetivo.
• Todas las subredes deben estar asociadas a una tabla de enrutamiento.
• Se pueden crear tablas de enrutamiento personalizadas.
• De forma predeterminada, cada tabla de enrutamiento contiene una ruta local para la comunicación dentro de la VPC.




### Ejemplo: VPC con dos subredes (pública y privada)

- Diapositiva 21.

- A simplevista se puede saber cual es la subred pública y cual es la subred privada.

    - Lo deducimos a partir de las tablas de enrutamiento. 

        - La pública tiene 2 direcciones.

        - La privada tiene 1 única dirección. 






### Conexión de subredes privadas a Internet ----------------------------------------------------------------------

- Un Gateway NAT permite que las instancias en una *subred privada* inicien el *tráfico saliente* hacia Internet u otros servicios de AWS (ej: servidor de BBDD).

    - La clave es que permiten solo el trafico saliente y no entrante. 


- *Impiden* que las instancias privadas reciban *solicitudes* de *conexión entrante* desde Internet.

    - Es decir, permiten solo el trafico saliente y no entrante. 
 

Requiere una dirección IP elástica. 


AWS cobra por cada hora de uso y por cada GB de procesamiento de datos del Gatewat NAT. 


*Ejemplo típico*: creas una gateway para poder actualizar el sistema operativo de un servidor de forma segura. 







### Configurar VPC con un "ayudante" en los laboratorios de clase ------------------------------------------

- Entra en VPC. 

    - "your vpc" -> create vpc

        - "vpc and more"

            - puedes seleccionar prefijo para todas las subredes

            - bloque de direccionamiento de la vpc

            - número de zonas de disponibilidad

            - nº de subredes públicas

            - nº de subredes privadas

            - personalizar los bloques de CDIR -> editas los tramos de IPs. 

            - crear una gateway para que las subredes privadas se comuniquen con internet

    - a la derecha te muestra el esquema visual de cómo quedaría el direccionamiento. 



- Caso típico: servidor web + servidor de base de datos.

    - El nat gateway permite que las subredes privadas puedan conectarse a la red.

    - En ambas subredes permites el trafico local entre subredes

    - La subred privada irá por el nat gateway.

    - La subred publica ...







### SEGURIDAD EN VPC ____________________________________________________________________________

#### Elementos

1) Secure network protocol

2) Route table layer

3) Network ACL layer

4) Subnet layer

5) Security group layer



### Sobre dónde actúan

- Grupos de seguridad -> como la cerradura de un piso.

    - Cada grupo de seguridad afecta solo a 1 instancia a la cual está asociado. 

- Las ACL de red -> como el conserge que solo permite acceso a los que viven en la finca.

    - Es decir actúa sobre todo el edificio de vecinos. -> es decir, actúan sobre toda la subred entera. 




### Grupos de seguridad -----------------------------------------------------------------------------

Representan firewall con estado que controla el tráfico entrante y saliente a los recursos de AWS.


- *Funcionan en el nivel de la instancia* o la interfaz de red.

    - Significa que el control *se aplica al tráfico* de red de las interfaces de red *de la instancia*, no a una red completa de forma indiscriminada.


Hay que configurar las reglas de manera estricta para restringir el tráfico y permitir el acceso solo según sea necesario.

El tráfico se puede restringir con cualquier protocolo de Internet, puerto y dirección IP de origen o destino (dirección o bloque CIDR)

Con estado: Si las reglas permiten que el tráfico fluya en una dirección, las respuestas pueden circular en la dirección opuesta.

    - Es decir, se está abierto para un determinado servicio tolera tanto la entrada como la salida por parte de ese servicio. 


Por defecto no tienen ninguna regla de entrada (no permite ninguna entrada) pero si permiten todas las salidas. 


#### Grupos de seguridad personalizados

    - Se puede especificar reglas de permiso, pero no reglas de denegación.

    - Se evalúan todas las reglas antes de decidir permitir tráfico.


- En la interfaz de AWS:

    - VPC -> seguridad -> grupos de seguridad






#### Encadenamiento de grupos de seguridad

- Diapositiva 35.

El encadenamiento de grupos de seguridad consiste en utilizar como *origen o destino* de una regla el *grupo de seguridad* asociado a otro recurso, *en lugar de indicar una dirección IP concreta*.


- Ejemplo: para permitir que WordPress acceda a la base de datos:

    1. *En el grupo* wordpress-rds-sg, creas una *regla de entrada* para MySQL (TCP, puerto 3306).

    2. Como *origen*, seleccionas el grupo de seguridad wordpress-ec2-sg (*otro grupo de seguridad*).
        
        - No necesitas indicar la dirección IP de la instancia EC2.

        - Estás autorizando como origen al mismo grupo de seguridad.

            - Es decir, *el segundo grupo utiliza el primero para identificar quién está autorizado a entrar*.
        


Así, las instancias que tengan asociado wordpress-ec2-sg podrán acceder a RDS por ese puerto, siempre que el resto de la configuración de red lo permita.


- Concepto de *Origen*:

    - Cuando digo especificar el origen, me refiero a indicar desde dónde se permite que llegue una conexión a un recurso de AWS.
    
    - Por ejemplo, en el grupo de seguridad de una base de datos RDS, puedes configurar una regla de entrada que permita conexiones MySQL por el puerto 3306.

        - En esa regla, el campo Origen indica *quién puede iniciar esa conexión*.










### LISTAS DE CONTROL DE ACCESO (ACL de red) _____________________________________________________________

Es una capa de seguridad opcional para la VPC.

Actúan en el nivel de subred (en lugar de a nivel de instancia como sucedía en el caso de los grupos de seguridad).

Cada subred debe estar asociada a una ACL de red. Si no asocia una subred de forma explícita a una ACL, la subred se asociará automáticamente a la ACL de red predeterminada, que permite todo el tráfico entrante y saliente.

- *Sin estado*: Aunque las reglas permitan que el tráfico fluya en una dirección, tiene que permitir explícitamente que las respuestas circulen en la dirección opuesta.

    - Es decir, no basta con especificar las reglas de entrada, estamos obligados a *especificar también las reglas de salida* (a diferencia de en los grupos de seguridad en los que por defecto se permitían todas las salidas).

Endurece la seguridad como un nivel secundario de defensa en el nivel de subred.





### Comparativa grupos de seguridad y ACL de red ---------------------------------------------------------------

[Tabla de la diapositiva 38].

Para visualizar correctamente esta tabla pulsa *Alt+Z* (quitar la vista con saltos de linea).


Atributo                  | Grupos de seguridad                                                | ACL de red
--------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------
Alcance                   | Nivel de instancia                                                 | Nivel de subred
Reglas admitidas          | Solo reglas de permiso                                             | Reglas de permiso y de denegación
Estado                    | Con estado (el tráfico de retorno se permite automáticamente,      | Sin estado (el tráfico de retorno debe estar explícitamente permitido
                          | independientemente de las reglas)                                  | por reglas)
Orden de las reglas       | Evaluamos todas las reglas antes de decidir permitir tráfico.      | Las reglas se evalúan por orden numérico antes de tomar la decisión
                          |                                                                    | de permitir el tráfico.
Comportamiento por defecto| No se permite el tráfico de entrada. Se permite todo el tráfico    | Se permite todo el tráfico de entrada y de salida.
                          | de salida.





### Infraestructura con varias capas de defensa -----------------------------------------------------

Como práctica recomendada, debe proteger su infraestructura con varias capas de defensa. Cuando ejecuta su infraestructura en una VPC, puede controlar qué instancias están expuestas a Internet. Puede definir grupos de seguridad y ACL de red para proteger aún más la infraestructura en los niveles de infraestructura y subred, respectivamente. Además, debería proteger las instancias con un firewall al nivel del sistema operativo y seguir otras prácticas recomendadas para la seguridad.





### Servidores bastión ----------------------------------------------------------------------------

Se trata de un servidor cuyo propósito es proporcionar acceso a una red privada desde una red externa: actúa como un punto de salto para acceder a una subred privada.

Debe minimizar las posibilidades de intrusión.

No almacenar claves privadas: para las instancias de Linux, utilice la función de reenvío de agente del cliente SSH para especificar la clave.

Servidor bastión: Grupos de seguridad para Linux

    [Esquema diapos 41]





### Revisión: creación de una subred pública ----------------------------------------------------------

[Esquema diapos 42]






### Tareas comunes de solución de problemas -------------------------------------------------------

Compruebe que la instancia esté activa y funcionando: debe haber pasadotanto el control de Estado del Sistemacomo el control de Estado de la Instancia.

Compruebe que los grupos de seguridad asociados con la instancia permitan las conexiones para los protocolos y puertos solicitados.

Compruebe que las ACL de red asociadas con la subred permitan el tráfico desde los puertos y protocolos necesarios.

Compruebe que la tabla de enrutamiento asociada con la subred cuente con reglas de destino que se dirijan a los objetivos apropiados.
































# UD2: DISEÑO Y CONFIGURACIÓN DE REDES VIRTUALES

Esta es una actividad guiada de clase y no es necesario entregar nada.

En esta práctica vamos a inspeccionar los componentes de la VPC que se despliega de manera predeterminada en los Learner Lab: direccionamiento de la VPC, zonas de disponibilidad, subredes, tablas de enrutamiento, etc.



## 1.- VISUALIZAR EL MAPA DE LA VPC -----------------------------------------------------

Arranca el laboratorio de prácticas, y una vez en la consola de AWS, busca y accede al servicio VPC.

En el menú lateral izquierdo, bajo la categoría Virtual Private Cloud, encontrarás las diferentes opciones del servicio VPC. Selecciona Your VPCs, y el enlace de la VPC por defecto. Visualiza ahora el mapa de recursos y, observando también la información superior en Details, responde:

• ¿Cuál es el bloque de direcciones IPv4 de la VPC?
    - Puedes verlo en la pestaña de CIDR (después de haber clicado en una VPC). -> 	172.31.0.0/16

• ¿Cuántas zonas de disponibilidad y subredes hay?
    - Hay 6 zonas de disponibilidad con 1 subred cada una. 


• ¿Tendrán todas las subredes salida a Internet por defecto?
    - Sí, todas las subredes tienen salida a internet. 







## 2.- SUBREDES ------------------------------------------------------------------

Desde el apartado de subredes, observa que todas las subredes están asociadas a la misma VPC.

Elige la subred con direccionamiento 172.31.16.0/20 y responde:

• ¿A qué zona de disponibilidad pertenece?

    - En el menu de la izquierda clicas en "Subnets". 

    - En el listado de subnets scrolleas hacia la derecha hasta que ves la columna de  "Availability Zone".



• ¿Cuántas direcciones IP tiene disponible para asignar a recursos como instancias de máquinas virtuales?

    - Si es "/20" quiere decir que para el host quedan 12 bits. 2^12 = 4096.

        - Pero AWS se reserva 3 ademas de las 2 que se reservan siempre 4096-5 = 4091



• Si lanzásemos una máquina virtual en esta subred, ¿se le asignaría automáticamente una dirección IP pública?

    - Si clicas en una subred en el recuadro de Details hay un subtitulo que es "Auto-assign public IPv4 address" y está marcada en "Yes". 





Selecciona otra subred diferente y responde a las mismas preguntas.







## 3.- TABLA DE ENRUTAMIENTO ----------------------------------------------------

Selecciona la opción de Route tables en el menú lateral izquierdo. Selecciona el check de la tabla de enrutamiento por defecto, y examina las rutas configuradas y asociaciones de subredes.

• ¿Esta tabla de enrutamiento permite salir a Internet? En caso afirmativo, ¿cuál es el identificador del dispositivo que lo permite?


- Clica en el menu de la izquierda en "Your VPCs". -> clica después en la pestaña "Resource map".

- Clica en "Subnets" en el menu de la izquierda -> clica en una subnet -> clica en "Route table". 







## 4.- DESPLIEGUE DE UNA INSTANCIA EC2 -------------------------------------------

En este punto vamos a desplegar una instancia EC2 (máquina virtual), y comprobaremos si tiene acceso a Internet. Para ello, busca el servicio EC2 en la barra de búsqueda de la consola, y elige la opción de Lanzar una instancia, que configuraremos de la siguiente manera:

• Nombre de la instancia: el que prefieras
• AMI: Amazon Linux
• Tipo de instancia: t3.micro
• Par de claves: vockey
• Red: dejaremos las opciones por defecto
• Almacenamiento: 8 GB gp3

Una vez lanzada la instancia, desde el menú de instancias del servicio EC2, selecciona la instancia y consulta la siguiente información:

• Identificador de la VPC en la que se ha lanzado.
• Identificador de subred en la que se ha lanzado. ¿En qué zona de disponibilidad está?
• Direcciones IP pública y privada asignadas. ¿Tiene un nombre de dominio asignado?



- En AWS a las máquinas virtuales se les llama "instancias EC2". 





## 5.- CONEXIÓN A LA INSTANCIA DESDE LA CONSOLA DE AWS -----------------------------------

Una vez el estado de la instancia (status check) esté en verde, selecciona la instancia, botón Connect, pestaña EC2 Instance Connect, Connect.

• Prueba algunos comandos de Linux para comprobar el tamaño y uso de disco con df -h y memoria RAM con free -h.
• Obtén la dirección privada con el comando ip -c a.
• Prueba que tienes conexión a Internet, haciendo un ping: ping www.steam.es.









## 6.- CONÉCTATE A LA INSTANCIA DESDE SSH (desde la consola de tu PC) ------------------------------------------------

Para comprobar el acceso a la instancia desde el aula, conéctate por SSH. Necesitarás descargarte la clave privada del laboratorio (.pem en Linux), cambiar los permisos a solo lectura para el propietario (chmod 400 labkey.pem), y ejecutar el comando:

ssh -i labsuser.pem ec2-user@<ip-pública>

    - Ojo el user cambia según el sistema operativo

    - la ip publica es la de la instancia EC2 que hemos creado en un paso anterior. 

    - En la ventana de lanzamiento de laboratorio clica en "AWS details"

        - Clica en download PEM. 

            - chmod 400 labsuser.pem


ssh -i labsuser.pem ec2-user@54.226.28.107



```txt

Si lo has conseguido te mostrara esto: 

   ,     #_
   ~\_  ####_        Amazon Linux 2023
  ~~  \_#####\
  ~~     \###|
  ~~       \#/ ___   https://aws.amazon.com/linux/amazon-linux-2023
   ~~       V~' '->
    ~~~         /
      ~~._.   _/
         _/ _/
       _/m/'


```





Instala el servidor web Apache y haz una petición local:

sudo dnf install httpd

sudo systemctl start httpd

    - Esta era una ERRATA del PDF -> ponía systemcl en lugar de systemctl

curl http://localhost










## 7.- LIMPIEZA DE RECURSOS ----------------------------------------------------------

Elimina la instancia EC2 cuando hayas terminado. _____________________________________ HECHO












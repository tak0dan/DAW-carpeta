
# TAREA 2.1: CONECTIVIDAD EN VPC ____________________________________________________________________________

- Esta tarea es del Tema 2: DISEÑO Y CONFIGURACIÓN DE REDES VIRTUALES





## ENTREGA ______________________________________________________________________________________

- Entrega un documento PDF con:

  1) Captura del mapa de recursos de la VPC creada, con los nombres finales de los recursos. 

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ HECHO

  2) Capturas de las rutas de las tablas de rutas rt-frontend y rt-backend.

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ HECHO

  3) Capturas de las reglas de entrada de los grupos de seguridad GS-BASTION y GS-WEB (debe verse el ID de GS-BASTION como origen en GS-WEB).
    
    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ ..............

  4) Captura del NAT Gateway con la dirección IP elástica asociada. 

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ HECHO

  5) Captura del listado de instancias en ejecución (servicio EC2, opción Instancias).

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ ..............

  6) Captura del comando curl -s https://checkip.amazonaws.com ejecutado en el servidor web, junto con la IP elástica del NAT Gateway.

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ ..............

  7) Captura de la petición HTTP desde el host bastión al servidor web, en la que se vea tu página personalizada.

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ ..............

  8) Capturas de las reglas de entrada y salida de cada ACL de red y de la petición HTTP desde el bastión con las ACL de red ya asociadas.

    - Lo indico cuando ya haya tomado esta captura. __________________________________________________ ..............

- Ya he marcado en el guión los momentos en los que deben tomarse todas esas capturas. 






## PROCEDIMIENTO _________________________________________________________________________________________

En esta tarea se implementará el siguiente escenario:

    [Figura página 1]

El objetivo final es poder hacer una *petición HTTP* al *servidor* web de la *subred privada* desde el *host bastión* de la *subred pública*. 

Por el camino comprobarás cómo sale a Internet una *instancia privada* a través de un *NAT Gateway* y cómo se encadenan *grupos de seguridad*.


- ¡*Cuidado* con el presupuesto del Learner Lab! 

    - el *NAT Gateway* y su IP elástica *se cobran por hora* aunque no se usen y, a diferencia de las instancias EC2, no se detienen al finalizar la sesión del laboratorio. 

        - En us-east-1, el NAT Gateway cuesta 0,045$/hora (más 0,045$ por GB procesado) y cada IPv4 pública 0,005 $/hora: olvidarlos una semana supone unos 8-9 $ de los 50 $ de crédito del curso. 
        
    - Realiza la *limpieza* de recursos del final en *cuanto tengas todas las capturas*.






### 1.- CREACIÓN DE LA INFRAESTRUCTURA DE RED BÁSICA ____________________________________________________

1. Desde el servicio VPC, pulsa *Crear VPC*.

  - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

2. Selecciona la opción VPC y más (*VPC and more*). El asistente creará de una vez la VPC, las subredes, las tablas de rutas, el Internet Gateway y el NAT Gateway. 

  - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

3. Configúralo con los siguientes valores:

  1. *Generación automática de etiquetas de nombre*: deja la casilla *marcada* y escribe *Juande* como *prefijo*. El asistente nombrará todos los recursos a partir de ese prefijo (por ejemplo, Juande-subnet-public1-us-east-1a); una vez creados, los renombrarás con los nombres de esta tarea.

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  2. Bloque CIDR IPv4: *10.0.0.0/16*. 
  
    - Bloque CIDR IPv6: *ninguno*. 
    
    - Tenencia: *predeterminada*.

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO


  3. *Número* de zonas de disponibilidad (Availability Zones): *1*. 
  
    - Despliega Personalizar las zonas de dispo-nibilidad y elige *us-east-1a* (el valor aparece entre paréntesis dentrás de otras palabras).

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  4. *Número* de subredes públicas: *1*. 
  
    - Número de subredes privadas: *1*.

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  5. Personalizar bloques CIDR de subredes (*Customize subnets CIDR blocks*): el asistente propone por defecto subredes /20, así que cámbialos a:

    Subred *pública*: *10.0.1.0/24*

    Subred *privada*: *10.0.2.0/24*

      - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  6. Gateways NAT: Selecciona *"Zonal"*
  
    - Selecciona *"In 1 AZ"*. El asistente despliega el NAT Gateway en la subred pública y le asigna automáticamente una IP elástica nueva.

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  7. Puntos de enlace de la VPC ("VPC endpoints"): *Ninguno* (si aparece seleccionada la Puerta de enlace de S3, cámbialo).

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO

  8. Opciones de DNS ("DNS options"): deja marcadas *Habilitar nombres de host DNS* y *Habilitar resolución de DNS*.

    - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO


4. Pulsa *Crear VPC* y espera a que termine el flujo de trabajo (el NAT Gateway tarda un par de minutos en pasar a estado *Disponible*). 

  - Lo indico cuando lo haya hecho. __________________________________________________________ HECHO (aparece en mi lista de VPCs con el nombre "Juande-vpc").


5. A continuación, desde la consola de VPC, *renombra* los recursos (icono del lápiz en la columna Name, o pestaña Etiquetas → clave Name) para que coincidan con el diagrama:

  - OJO -> si en el listado de VPCs solo te aparece 1 VPC entonces NO DES POR HECHO QUE ES LA QUE ACABAS DE CREAR -> porque estarías equivocado. 

    - Hay 1 VPC que AWS ya te pone por defecto.

    - Esto es clave para no renombrar una VPC que NO es la que acabas de crear. 

      - La que acabas de crear la puedes identificar rápidamente porque lleva el prefijo que hemos establecido (Juande) y porque tiene la idercción IPv4 que hemos establecido. 

Recurso                 Nombre por defecto (ejemplo)          Nombre final
----------------------- ------------------------------------- ------------------
VPC                     Juande-vpc                            VPC Juande         _________________________________ HECHO
Subred pública          Juande-subnet-public1-us-east-1a      Juande frontend    _________________________________ HECHO
Subred privada          Juande-subnet-private1-us-east-1a     Juande backend     _________________________________ HECHO
Internet Gateway        Juande-igw                            JDG-Gateway        _________________________________ HECHO
NAT Gateway             Juande-nat-public1-us-east-1a         JDG-NAT-Gateway    _________________________________ HECHO
Tabla de rutas pública  Juande-rtb-public                     rt-frontend        _________________________________ HECHO
Tabla de rutas privada  Juande-rtb-private1-us-east-1a        rt-backend         _________________________________ HECHO


  - NOTA: Al detectar problemas con las subredes de la VPC original (no aparecían sus subredes en el listado de subredes), se decidió eliminar la infraestructura creada y volver a empezar desde cero. Durante la eliminación fue necesario borrar primero el NAT Gateway y esperar a que AWS liberase su interfaz de red asociada. Tras crear de nuevo la VPC, las subredes pública y privada aparecieron correctamente tanto en el mapa de recursos como en el listado de subredes, por lo que se pudo continuar con la práctica sin más inconvenientes.





6. *¡AHORA TOCA HACER UNA CAPTURA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - Enunciado: "Captura del NAT Gateway con la dirección IP elástica asociada."

  - En el menu lateral izquierdo clica en *NAT gateways* -> luego clica en la NAT gateway que has creado (para que salgan sus detalles en pantalla). 


  - Si todavía aparece con el nombre provisional, puedes hacer esta captura más adelante, después de renombrarlo.

  - Lo indico cuando lo haya hecho. _______________________________________________________ HECHO


  - NOTA: Inicialmente surgieron dudas sobre si la captura de los detalles del NAT Gateway era válida para demostrar que tenía una dirección IP elástica asociada, ya que en esa ventana solo se mostraba la dirección IPv4 pública principal. Para comprobarlo, accedimos a VPC → *"Elastic IPs"* y *verificamos* que la dirección 44.192.243.123, identificada como Juande-eip-us-east-1a, *aparecía en el listado de IP elásticas*. Por tanto, confirmamos que la dirección pública mostrada en los detalles del NAT Gateway corresponde a una IP elástica y que la captura es válida para la entrega.




7. Revisa las tablas de rutas. Deben quedar así:

Tabla de rutas  *Destination*  *Target*
--------------- -------------- ----------------------------
rt-frontend     10.0.0.0/16    local                        __________________________ VERIFICADO
rt-frontend     0.0.0.0/0      JDG-Gateway (igw-…)          __________________________ VERIFICADO
rt-backend      10.0.0.0/16    local                        __________________________ VERIFICADO
rt-backend      0.0.0.0/0      JDG-NAT-Gateway (nat-…)      __________________________ VERIFICADO


- La ruta local se crea automáticamente en todas las tablas de rutas y no se puede eliminar: es la que permite la comunicación entre instancias de cualquiera de las subredes de la VPC. 

- Nota: "JDG-Gateway" en las tablas de enrutamiento no aparece con ese nombre sino con su ID -> clica sobre el y podrás abrirlo en otra ventana y comprobar que efectivamente se trata de ese. 



8. Comprueba también:

  - Que *rt-frontend* está asociada a la *subred pública*. ________________________________ VERIFICADO

    - Pestaña de "subnet associations". 

    - La subred pública es la que hemos renombrado como *"Juande frontend"*.

  - Que *rt-backend* está asociada a la *privada*. _________________________________________ VERIFICADO

    - La subred privada es la que hemos renombrado como *"Juande backend"*. 
  
  - Observa el resultado en la pestaña *Mapa de recursos* de la VPC.



9. *¡AHORA TOCA HACER UNA CAPTURA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO: "Captura del mapa de recursos de la VPC creada, con los nombres finales de los recursos."

    - *"Your VPCs" -> "Mapa de recursos"*, comprueba que aparecen los nombres finales de la VPC, las subredes, las tablas de rutas y los gateways, junto con sus asociaciones.

  - Lo indico aquí cuando lo haya hecho. ________________________________________________________________ HECHO




  - **Nota**: Aunque durante la creación de la VPC seleccioné la opción de no crear ningún VPC endpoint, posteriormente observé que se había generado automáticamente un endpoint para Amazon S3 (Juande-vpce-s3). Tras comprobar sus detalles y confirmar que pertenecía a VPC Juande, procedí a eliminarlo manualmente para que la infraestructura se ajustara a los requisitos de la práctica.

    - Se llamaba: "Juande-vpce-s3" (con ese prefijo queda claro que se genero al crear el VPC de este ejercicio).


  - **Nota**: En el mapa de recursos aparecen tres tablas de rutas en lugar de las dos previstas inicialmente. Esto no supone un problema, ya que AWS crea automáticamente una tabla de rutas principal para cada VPC, además de las tablas que se pueden crear para asociarlas específicamente a cada subred. Como se ha comprobado que rt-frontend y rt-backend contienen las rutas correctas y están asociadas a sus respectivas subredes, no es necesario realizar ninguna modificación adicional.

    - Yo no la borraría. Entiendo que quieras que el mapa quede más limpio para la entrega, pero esa tercera tabla de rutas no es un error: es la tabla principal que AWS crea automáticamente para la VPC.

      - Borrarla no te aportaría ninguna ventaja real y podría complicar la configuración si estuviera asociada a algún recurso. Además, el enunciado pide mostrar el mapa de recursos de la VPC, no que aparezcan exactamente dos tablas de rutas.



~~Alternativa:~~ Descartado: también puedes crear solo la VPC (Solo la VPC) y añadir el resto de recursos manualmente. En ese caso tendrás que asignar tú mismo la IP elástica al NAT Gateway y crear las rutas y asociaciones de las tablas.




10. *¡AHORA TOCA HACER DOS CAPTURAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - No se trata de un error: efectivamente, estas dos capturas las tomo justo después de la captura anterior. 

  - ENUNCIADO: Capturas de las rutas de las tablas de rutas rt-frontend y rt-backend.

  - Rutas de las tablas de rutas

    1) Una captura de rt-frontend, donde se vean las rutas 10.0.0.0/16 → local y 0.0.0.0/0 → JDG-Gateway.

    2) Una captura de rt-backend, donde se vean las rutas 10.0.0.0/16 → local y 0.0.0.0/0 → JDG-NAT-Gateway.


  - Lo indico aquí cuando lo haya hecho. _________________________________________________________________ HECHO


  - **Nota**: Tras eliminar manualmente el endpoint de S3, observé que la tabla de rutas rt-backend seguía mostrando temporalmente una ruta asociada a dicho endpoint. Para comprobar si el cambio se había aplicado correctamente, actualicé la página de detalles de la tabla de rutas. Después de actualizar, la ruta adicional desapareció, confirmando que la eliminación del endpoint se había reflejado correctamente y que la tabla conservaba únicamente las rutas necesarias para la práctica.




############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################





### 2.- CREACIÓN DE LOS GRUPOS DE SEGURIDAD __________________________________________________________

1. Desde VPC → *Grupos de seguridad*, *crea dos* grupos de seguridad asociados a la VPC Juande:

  1) GS-BASTION: 

    1. Security Group Name: *GS-BASTION*.

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    2. VPC: (*VPC Juande*).

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    3. *Inbound rules* -> Add rule: (*la del instituto*)

      - Type: *SSH*.

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO

      - Source type: *Custom*

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO

      - Source: *213.0.86.0/23*

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


      - ENUNCIADO (con los pasos anteriores ya he hecho lo que pide): "Debe permitir el tráfico entrante *SSH* (22/TCP) únicamente desde la red del instituto."
    


    4. *Inbound rules* -> Add rule: (*la de mi casa para poder terminar el lab en casa*)

      - Selecciona el security group "GS-BASTION" -> Actions -> "Edit inbound rules".

      - Type: *SSH*.

        - Lo indico cuando lo haya hecho. ____________________________________________________ ...........

      - Source type: *Custom*

        - Lo indico cuando lo haya hecho. ____________________________________________________ ...........

      - Source: *...........* (la IP de mi casa en formato CDIR /32).

        - Lo indico cuando lo haya hecho. ____________________________________________________ ...........


      - ENUNCIADO (con los pasos anteriores ya he hecho lo que pide): "Si trabajas desde otra red (por ejemplo, desde casa), añade una regla con tu IP."

        - Es decir, en casa no sustituyas necesariamente el rango del instituto (213.0.86.0/23): puedes mantenerlo y añadir una segunda regla para casa. *Así podrás conectarte desde ambas ubicaciones!!!!!!!!!!!!!!!!!!!!!!!* sin abrir el acceso SSH a todo Internet (0.0.0.0/0).

        - NOTA: al hacerlo en Windows desde casa tendrás otro problema: tendrás que usar ¿WSL? para algunas cosas (en pasos posteriores). 





  2) *GS-WEB*: 
  
    1. Security Group Name: GS-WEB.

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    2. VPC: (*VPC Juande*).

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    3. *Inbound rules* -> Add rule (la SSH (22/TCP))

      - Type: *SSH*.

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO

      - Source type: *Custom*

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO

      - Source: 

        - Escribe *sg-* y selecciona el *ID de GS-BASTION*.

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    4. *Inbound rules* -> Add rule: (la HTTP (80/TCP))

      - Type: HTTP.

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO

            - Source: 

        - Escribe *sg-* y selecciona el *ID de GS-BASTION*.

        - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    - ENUNCIADO (*con los pasos anteriores ya he hecho lo que pide*): "Debe permitir el tráfico SSH (22/TCP) y HTTP (80/TCP), pero únicamente desde el grupo de seguridad GS-BASTION (reglas encadenadas): en el campo Origen (Source) escribe sg- y selecciona el ID de GS-BASTION." (se refiere a inbound rules).

      - ENUNCIADO (*con los pasos anteriores ya he hecho lo que pide*): "deben verse SSH (22/TCP) y HTTP (80/TCP), con el ID de GS-BASTION como origen de ambas reglas."





2. Se debe permitir todo el tráfico saliente en los dos grupos de seguridad (es la regla de salida por defecto).


Grupo      Regla de entrada  Source                       Salida
---------- ----------------- ---------------------------- ---------------
GS-BASTION SSH (22/TCP)      Rango CIDR del centro        Todo el tráfico
                             (lo indica el profesor) 
GS-WEB     SSH (22/TCP)      GS-BASTION (sg-…)            Todo el tráfico
GS-WEB     HTTP (80/TCP)     GS-BASTION (sg-…)            Todo el tráfico


  - Lo indico cuando lo haya VERIFICADO _____________________________________________________ ................





3. *¡AHORA TOCA HACER DOS CAPTURAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO: "Capturas de las reglas de entrada de los grupos de seguridad GS-BASTION y GS-WEB (debe verse el ID de GS-BASTION como origen en GS-WEB)."

  - Reglas de entrada de los grupos de seguridad.

    1) *GS-BASTION*: debe verse SSH (22/TCP) y el rango CIDR autorizado.

      - Clico en GS-BASTION -> Inbound rules -> hago scroll horizontal para que se vea tanto el texto "SSH" como la columna de "Source" con el rango CDIR. 

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO


    2) *GS-WEB*: deben verse SSH (22/TCP) y HTTP (80/TCP), con el ID de GS-BASTION como origen de ambas reglas.

      - Lo indico cuando lo haya hecho. ____________________________________________________ HECHO






############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################





### 3.- LANZAMIENTO DE LAS INSTANCIAS _______________________________________________________________

1. Desde el servicio EC2, lanza dos instancias con las siguientes características:

  1) Instancia del *host bastión*:
      
    1. Nombre de la instancia: *bastion-epa* (porque dice: "sustituye xyz por las iniciales de tu nombre y apellidos")
    
      - bastion-xyz (sustituye xyz por las iniciales de tu nombre y apellidos).

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    2. AMI: *Ubuntu Server* (la versión LTS más reciente que aparezca en Inicio rápido), arquitectura 64 bits (x86). El tipo t3.micro es x86: si eliges la arquitectura Arm no te aparecerá.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    3. Tipo de instancia: *t3.micro*.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    4. Par de claves: *vockey*.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    5. Red: 
    
      - "Edita la configuración de red para que la instancia se lance *en la VPC Juande*, *subred Juande frontend*, con Asignar automáticamente la IP pública: *Habilitar*".

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    6. Grupo de seguridad: selecciona el grupo existente *GS-BASTION*.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......
    
    7. Almacenamiento: *8 GiB gp3*.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......




  2) Instancia del *servidor web*:
      
    1. Nombre de la instancia: *webserver-epa* (porque dice "ustituye xyz por tus iniciales").
    
      - webserver-xyz (sustituye xyz por tus iniciales).
    
      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......

    2. "AMI, arquitectura, tipo de instancia, par de claves y almacenamiento: *los mismos que en el bastión*."
    
      - AMI: *Ubuntu Server*

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......

      - Tipo de instancia: *t3.micro*.

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......

      -  Par de claves: *vockey*.

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......

      - Almacenamiento: *8 GiB gp3*.

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......


    3. Red: 
    
      - *VPC Juande*, *subred Juande backend*.

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......

      - Asignar automáticamente la IP pública: *Deshabilitar*.

        - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......


    4. Grupo de seguridad: *GS-WEB*.

      - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......


2. Una vez lanzadas las instancias, comprueba su estado y continúa con el siguiente paso cuando hayan superado las comprobaciones de estado (3/3). 

  - Lo indico aquí cuando lo haya VERIFICADO ________________________________________________________ ......


3. Anota la IP pública del bastión y la IP privada del servidor web.

  - IP pública del bastión.

    - Lo indico aquí cuando lo haya ANOTADO ________________________________________________________ ......

  - IP privada del servidor web. 

    - Lo indico aquí cuando lo haya ANOTADO ________________________________________________________ ......




4. *¡AHORA TOCA HACER UNA CAPTURA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO: "Captura del listado de instancias en ejecución (servicio EC2, opción Instancias)."

  - Instancias EC2 en ejecución.

    - En EC2 → Instancias, muestra bastion-xyz y webserver-xyz en estado En ejecución. Ambas deben haber superado las comprobaciones de estado (3/3).

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......










##############################################


0. Cuando estés ya en casa vuelve a GS-BASTION (paso "2.- CREACIÓN DE LOS GRUPOS DE SEGURIDAD") y añade la inbound rule de la IP de tu casa para poder terminar el laboratorio desde casa. 

  - Lo indico aquí cuando lo haya hecho. ________________________________________________________ ..............


##############################################





############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################





### 4.- INSTALACIÓN DE APACHE _______________________________________________________________________

- Para poder instalar Apache, hay que saltar a la instancia del servidor web desde el host bastión. Necesitarás:

1. Descargar la clave privada del laboratorio (AWS Details → Download PEM, archivo lab-suser.pem), moverla a ~/.ssh y establecer los permisos correctos (solo lectura para el propietario):

  - Recuerda: la clave privada del laboratorio ya obtienes en la ventana de lanzamiento del laboratorio (donde estaba el semáforo que se ponía en verde).

```bash
mkdir -p ~/.ssh 
mv ~/Descargas/labsuser.pem ~/.ssh/ 
chmod 400 ~/.ssh/labsuser.pem

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......



2. Inicializar el agente SSH y cargar la clave privada:

```bash
eval "$(ssh-agent -s)" 
ssh-add ~/.ssh/labsuser.pem 
ssh-add -l

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......



3. Conectarte al host bastión utilizando la opción -A de ssh (reenvío del agente). Recuerda que el usuario de las AMI de Ubuntu es ubuntu:

```bash
ssh -A ubuntu@<ip-publica-bastion>

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......



4. Conectarte desde el host bastión al servidor web, utilizando su IP privada:

```bash
ssh ubuntu@<ip-privada-webserver>

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......




#############################################

  - ~~Alternativa recomendada~~: DESCARTADO: también puedes llegar al servidor web con un único comando desde tu equipo, sin reenviar el agente al bastión:

  ```bash
  ssh -J ubuntu@<ip-publica-bastion> ubuntu@<ip-privada-webserver>

  ```

###############################################




5. Una vez conectado al servidor web, comprueba por dónde sale a Internet. El siguiente comando devuelve la IP pública con la que te ve el exterior, que debe coincidir con la IP elástica del NAT Gateway:

```bash
curl -s https://checkip.amazonaws.com

```

- Lo indico aquí cuando lo haya hecho ________________________________________________________ ......




6. *¡AHORA TOCA HACER UNA CAPTURA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO:"Captura del comando curl -s https://checkip.amazonaws.com ejecutado *en el servidor web*, junto con la IP elástica del NAT Gateway."

  - Muestra en la terminal del servidor web el comando curl -s https://checkip.amazonaws.com y su resultado. Debe coincidir con la IP elástica del NAT Gateway.

    - Deja visible también esa IP elástica en la consola AWS o en otra terminal para poder comprobar la coincidencia.

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......



7. Instala el servidor web Apache y comprueba que el servicio está activo (no es necesario hacer apt upgrade: tarda bastante y todo el tráfico descargado pasa por el NAT Gate-way, que se factura por GB):


```bash
sudo apt update 
sudo apt install -y apache2 
systemctl status apache2 --no-pager

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......




8. Personaliza la página de inicio con tu nombre, para que aparezca en la captura de la en-trega:

```bash
echo "<h1>Servidor web de Nombre Apellidos</h1>" | sudo tee /var/www/html/in-dex.html

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......



9. Si el servicio web está activo, ya puedes realizar el siguiente paso.

  - Lo indico aquí cuando lo haya VERIFICADO ________________________________________________________ ......



############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################



### 5.- REALIZACIÓN DE PETICIÓN HTTP DESDE EL HOST BASTIÓN ___________________________________________

1. *Sal de la sesión del servidor web* (exit).

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......


2. Estando conectado al host bastión, realiza una petición HTTP con el comando curl al servidor web:

```bash
curl http://<ip-privada-webserver>

```

  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......


3. Si está todo bien configurado, debería *devolverte* el contenido de tu página personalizada. 

  - *Comprueba* también que la misma petición no funciona desde tu equipo del aula (el servidor web no tiene IP pública ni ruta de entrada desde Internet).

  - Lo indico aquí cuando lo haya VERIFICADO ________________________________________________________ ......




4. *¡AHORA TOCA HACER UNA CAPTURA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO: "Captura de la petición HTTP desde el host bastión al servidor web, en la que se vea tu página personalizada."

  - OJO: no confundir con la captura anterior de: "Captura del comando curl -s https://checkip.amazonaws.com ejecutado *en el servidor web*, junto con la IP elástica del NAT Gateway."

    - Se distinguen claramente porque la captura actual ha venido precedida (hace unos cuantos pasos) de una salida de la sesión del servidor web.

  - Petición HTTP desde el host bastión.

    - *Muestra el comando curl* http://IP-PRIVADA-WEBSERVER *y la respuesta* con el HTML de tu página personalizada y tu nombre.

      - Hazla antes de crear y asociar las ACL de red.


  - Lo indico aquí cuando lo haya hecho ________________________________________________________ ......





############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################





### 6.- REGLAS ACL DE RED ____________________________________________________________________________

- Los grupos de seguridad configurados en el apartado 2 son suficientes para proteger este escenario. 

    - Las ACL de red (Network ACL) añaden una capa adicional de seguridad que actúa a nivel de subred (los grupos de seguridad actúan a nivel de instancia), a cambio de hacer más compleja la administración de la seguridad de la red: cualquier servicio nuevo obliga a revisar reglas en dos sitios distintos y un error en una ACL puede dejar sin conectividad a toda la subred.



1. Crea dos ACL de red, NACL-Publica y NACL-Privada, en la VPC Juande, y asócialas a la subred pública y privada, respectivamente.

  - Hazlo después de instalar Apache, ya que estas reglas cor-tarán la salida a Internet del servidor web.

  1. Importante: a diferencia de los grupos de seguridad, las ACL de red no tienen estado (stateless): no recuerdan las conexiones, por lo que hay que *permitir explícitamente también el tráfico de respuesta*, que viaja hacia los puertos efímeros del cliente (1024-65535). Además, una ACL nueva deniega todo el tráfico hasta que añadas reglas, y las reglas se evalúan por orden de número.

  2. NACL-Publica (subred Juande frontend)

  Regla  Sentido  Tipo / puertos  Origen / destino          Acción   Para qué
  ------ -------- --------------- ------------------------- -------- ----------------------------
  100    Entrada  SSH (22)        Rango CIDR del centro     Permitir SSH al bastión
  110    Entrada  TCP 1024-65535  10.0.2.0/24               Permitir Respuestas del servidor web
  100    Salida   TCP 1024-65535  Rango CIDR del centro     Permitir Respuestas SSH al alumno
  110    Salida   SSH (22)        10.0.2.0/24               Permitir SSH al servidor web
  120    Salida   HTTP (80)       10.0.2.0/24               Permitir Petición HTTP


  3. NACL-Privada (subred Juande backend)

  Regla  Sentido  Tipo / puertos  Origen / destino  Acción   Para qué
  ------ -------- --------------- ----------------- -------- -------------------------
  100    Entrada  SSH (22)        10.0.1.0/24       Permitir SSH desde el bastión
  110    Entrada  HTTP (80)       10.0.1.0/24       Permitir HTTP desde el bastión
  100    Salida   TCP 1024-65535  10.0.1.0/24       Permitir Respuestas al bastión



  - Lo indico cuando lo haya hecho. __________________________________________________________________ ................



2. Conéctate de nuevo al host bastión y repite la petición HTTP. 

```bash
curl http://<ip-privada-webserver>

```

  - Lo indico cuando lo haya hecho. __________________________________________________________________ ................




3. *¡AHORA TOCA HACER ~~CUATRO~~ 5 CAPTURAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

  - ENUNCIADO: "Capturas de las reglas de entrada y salida *de cada ACL* [4 capturas] de red *y de la petición HTTP* [1 captura] desde el bastión con las ACL de red ya asociadas."

  - Por ello hay que hacer dos grupos de capturas: 4 + 1.

  1) Reglas de entrada y salida de las ACL de red.

    1. NACL-Publica: reglas de entrada.

    2. NACL-Publica: reglas de salida.

    3. NACL-Privada: reglas de entrada.

    4. NACL-Privada: reglas de salida.

    - Asegúrate de que se lean los números de regla, los tipos de tráfico, los puertos, los CIDR de origen/destino y las acciones Permitir.


  - Lo indico cuando lo haya hecho. __________________________________________________________________ ................


  2) Petición HTTP con las ACL de red asociadas.

    1. Muestra el comando curl http://IP-PRIVADA-WEBSERVER desde el bastión y la página personalizada devuelta correctamente con las ACL ya asociadas.

  - Lo indico cuando lo haya hecho. __________________________________________________________________ ................




4. Después, elimina temporalmente la regla de salida 100 de NACL-Privada y vuelve a probar: *¿qué ocurre y por qué?* Por último, comprueba que desde el servidor web ya no funciona sudo apt update.

  - OJO -> *elabora un .txt* en el que *respondas a esa pregunta* y ponlo en la carpeta de "capturas" -> cuando elabore el PDF con las capturas pegare mi respuesta a esa pregunta ("¿qué ocurre y por qué?") para que quede incluída en mi entrega. 

  - Lo indico cuando lo haya hecho. __________________________________________________________________ ................



5. Ahora comprueba que has realizado todas las capturas de pantalla que se piden en la entrega.

  - Cuando lo hayas comprobado pasa al último apartado ("8.-") de limpieza de recursos para que dejen de consumir tu presupuesto de alumno de AWS. 
  
  - Lo indico cuando lo haya VERIFICADO __________________________________________________________________ ................






### 7.- ENTREGA ______________________________________________________________________________________

- Entrega un documento PDF con:

    1) Captura del mapa de recursos de la VPC creada, con los nombres finales de los recursos.

    2) Capturas de las rutas de las tablas de rutas rt-frontend y rt-backend.

    3) Capturas de las reglas de entrada de los grupos de seguridad GS-BASTION y GS-WEB (debe verse el ID de GS-BASTION como origen en GS-WEB).

    4) Captura del NAT Gateway con la dirección IP elástica asociada.

    5) Captura del listado de instancias en ejecución (servicio EC2, opción Instancias).

    6) Captura del comando curl -s https://checkip.amazonaws.com ejecutado en el ser-vidor web, junto con la IP elástica del NAT Gateway.

    7) Captura de la petición HTTP desde el host bastión al servidor web, en la que se vea tu página personalizada.

    8) Capturas de las reglas de entrada y salida de cada ACL de red y de la petición HTTP desde el bastión con las ACL de red ya asociadas.


- Ya he marcado en el guión los momentos en los que deben tomarse todas esas capturas. 







### 8.- DETENER LOS SERVICIOS PARA QUE NO CONSUMAN ______________________________________________________

- Elimina los elementos creados en cuanto hayas terminado, en este orden:

    Termina (no solo detengas) las instancias bastion-xyz y webserver-xyz.

    Elimina el NAT Gateway (VPC → Gateways NAT → Acciones → Eliminar gateway NAT) y espera a que su estado sea Deleted.

    Libera la IP elástica (VPC → Direcciones IP elásticas → Acciones → Liberar direcciones IP elásticas). Una IP elástica que no está asociada a nada se sigue cobrando.

    Elimina la VPC (VPC → Sus VPC → Acciones → Eliminar VPC): se eliminarán también sus subredes, tablas de rutas, Internet Gateway, grupos de seguridad y ACL de red.











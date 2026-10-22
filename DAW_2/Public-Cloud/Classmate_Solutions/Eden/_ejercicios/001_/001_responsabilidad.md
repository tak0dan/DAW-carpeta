




# MODELO DE RESPONSABILIDAD COMPARTIDA DE AWS ____________________________________________________

1) Responsabilidad del AWS = la seguridad de la nube.

    1. Que la infraestructura funcione correctamente y no caiga. 

2) Responsabilidad de los usuarios = responsables de la seguridad DENTRO de la nube.

    1. Cifrado de datos.

    2. Configurar el sistema operativo.

    3. Administrar el acceso a la plataforma. 





## EN FUNCIÓN DEL MODELO ----------------------------------------------------------------------


1) En el modelo IaaS -> el cliente tiene más responsabilidades.


2) En el modelo PaaS -> el cliente tiene menos responsabilidedes. 






## EJEMPLO DE LA DIAPOSITIVA Nº49 ----------------------------------------------------------------

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



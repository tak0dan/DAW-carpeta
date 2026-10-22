

# PRÁCTICA CLASE DE XAMPP + WORDPRESS _______________________________________________________________________________


- Descarga wordpress

- ves a C:\xampp2027\htdocs

- pega ahi la carpeta de wordpress

- abre xampp e inicia tanto apache como mysql

- en tu navegador pon localhost

    - clica en el botón de phpmyadmin de esa web

    - clica en bases de datos

        - crear base de datos

            - nombre: wordpress

        


- Entra en esta url y sigue las instrucciones:

    https://localhost/wordpress/wp-admin/setup-config.php


        - nombre: el mismo que has puesto antes: wordpress

        - usuario: root

        - contraseña: vacía porque no la hemos definido anteriormente. 




- Procedimiento instalacion:

    - titulo del sitio: practica_wordpress

    - eden

    - practica_asignatura_daw

    - edpeanprogram




- CORRECCIÓN NECESARIA:

    - Para que funcione la contraseña de WordPress en local, entramos en phpMyAdmin, seleccionamos la base de datos `wordpress` y editamos el usuario de la tabla `wp_users`. 
    
        - Cambiamos el valor de `user_pass`, seleccionamos **MD5** en la columna «Función» y guardamos los cambios. Después pudimos iniciar sesión en WordPress con la nueva contraseña.












- ya he creado el sitio: ------------------------------------------------------------------------------------------

    - en futuras ocasiones para acceder a tu sitio de wordpress tendrás que:

        1. Iniciar sesión con windows en el pc de clase. 

        2. abrir el programa XAMPP.

            - *iniciar apache !!!!!!!!!!!!!*

            - *iniciar mysql !!!!!!!!!!!!!!*

        3. usar este enlace en el navegador:

            https://localhost/wordpress/wp-login.php

            practica_wordpress


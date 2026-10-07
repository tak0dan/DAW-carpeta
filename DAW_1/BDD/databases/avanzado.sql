drop DATABASE if exists BDU3Avanzado;
CREATE DATABASE IF NOT EXISTS BDU3Avanzado CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;
USE BDU3Avanzado;

CREATE TABLE usuario (
dni VARCHAR (9) PRIMARY KEY,
nombre VARCHAR (45),
fecha_nac DATE
);
CREATE TABLE cliente (
dni VARCHAR (9) PRIMARY KEY,
descuento FLOAT,
CONSTRAINT cli_dni_fk foreign key(dni) references usuario(dni) ON DELETE NO ACTION
);
CREATE TABLE pedido (
dni_cliente VARCHAR(9) not null,
codigo VARCHAR (10) PRIMARY KEY,
fecha DATETIME,
CONSTRAINT ped_dni_fk foreign key(dni_cliente) references cliente(dni) ON DELETE NO ACTION
);
CREATE TABLE producto (
cod_producto VARCHAR (10) PRIMARY KEY,
nombre VARCHAR(45),
precio DECIMAL (4,2)
);
CREATE TABLE linea (
numero_linea INTEGER,
precioventa DECIMAL (4,2),
cod_pedido VARCHAR (10),
cod_producto VARCHAR(10) not null,
cantidad INTEGER,
PRIMARY KEY (numero_linea, cod_pedido),
CONSTRAINT lin_cod_ped_fk foreign key(cod_pedido) references pedido(codigo) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT lin_cod_pro_fk foreign key(cod_producto) references producto(cod_producto) ON DELETE NO ACTION
);
use bdu5_empresa;
-- 1. CONSULTA
-- ¿Cuáles son los departamentos (sin que se repitan) de la tabla empleados?
select distinct dpt
from empleados;

-- 2. CONSULTA
-- ¿Cuáles son los nombres de los empleados que tienen un departamento asignado?
select nombre_emp from  empleados
where dpt is not null;

-- 3. CONSULTA
-- ¿Cuáles son los nombres de los proyectos que no tienen un responsable asignado?
select nombre from proyectos
where responsable is null;

-- 4. CONSULTA
-- ¿Cuáles son los nombres de los empleados que tienen la especialidad de Informática
-- y se dieron de alta después del 1 de enero de 2012?
select nombre_emp from empleados
where especialidad ='Informática' and fecha_alta>2012-01-01;

-- 5. CONSULTA
-- ¿Cuáles son los nombres de los empleados que están en el departamento de INF o ADM?
select nombre_emp from empleados
where dpt = 'INF' or dpt = 'ADM';

-- 6. CONSULTA
-- ¿Cuáles son los nombres de los empleados que no están en el departamento de INF o ADM?
select nombre_emp from empleados
where dpt not in ('INF','ADM');

-- 7. CONSULTA
-- ¿Cuáles son los nombres de los empleados cuyos nombres contienen la letra 'a'?
select nombre_emp from empleados
where nombre_emp like '%a%';

-- 8. CONSULTA
-- ¿Cuál es la fecha de alta del empleado más antiguo?
select min(fecha_alta) from empleados;

-- 9. CONSULTA
-- ¿Qué nombre de departamentos están en la Planta quinta ?
select nombre_dpt from departamentos
where ubicacion like '%Planta quinta%';

-- 10. CONSULTA
-- ¿Cuántos empleados hay en total?
select count(*) from empleados;

-- 11. CONSULTA
-- ¿Cuál es la fecha más reciente en la que un empleado se dio de alta?
select max(fecha_alta) from empleados;

-- 12. CONSULTA
-- ¿Cuál es la fecha del proyecto que se inició antes?
select min(fecha_inicio) from proyectos;

-- 13. CONSULTA
-- ¿Cuantos departamentos hay en la Planta Baja?
SELECT count(*) FROM departamentos WHERE ubicacion like '%Planta baja%';

-- 14. CONSULTA
-- ¿Cuántos responsables de proyecto hay en proyectos anteriores a agosto del 2012?
select responsable from proyectos
where fecha_inicio<'2012-08-01';

-- 15. CONSULTA
-- ¿Cuál es el doble del número total de empleados?
select count(*)*2 from empleados ;

-- 16. CONSULTA
-- ¿Cuál es la mitad del número total de empleados?
select count(*)/2 from empleados ;

-- 17. CONSULTA
-- ¿Cuántos empleados hay en total más 10?
select count(*)+10 from empleados ;

-- 18. CONSULTA
-- ¿Cuántos empleados hay en total menos 10?
select count(*)-10 from empleados ;

-- 19. CONSULTA
-- ¿Cuántos departamentos diferentes hay en la tabla empleados?
select count(distinct dpt) from empleados ;

-- 20. CONSULTA
-- ¿Cuál es el promedio entre las distintas fechas de alta de todos los empleados?
select avg(distinct fecha_alta) from empleados; 

-- 21. CONSULTA
-- ¿Cuáles son las diferentes ubicaciones en las que hay departamentos?
select distinct (ubicacion) from departamentos;

-- 22. CONSULTA
-- ¿Cuál es la ubicación del departamento con el código 'ADM'?
select distinct (ubicacion) from departamentos
where cod_dpt='ADM';

-- 23. CONSULTA
-- ¿Cuáles son los nombres de los departamentos que tienen una ubicación en la planta quinta?
select nombre_dpt from departamentos
where ubicacion like '%Planta quinta%';

-- 24. CONSULTA
-- ¿Cuáles son los nombres de los proyectos en la tabla proyectos?
select distinct nombre from proyectos;
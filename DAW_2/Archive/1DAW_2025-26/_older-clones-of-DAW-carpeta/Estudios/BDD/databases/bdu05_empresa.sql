CREATE DATABASE IF NOT EXISTS bdu05_empresa
CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;

USE bdu05_empresa;

CREATE TABLE IF NOT EXISTS departamentos (
cod_dpt         VARCHAR(4) PRIMARY KEY,
nombre_dpt      VARCHAR(20) NOT NULL,
ubicacion       VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS empleados (
dni             VARCHAR(10) PRIMARY KEY,
nombre_emp      VARCHAR(30) NOT NULL,
especialidad    VARCHAR(25),
fecha_alta      DATE,
dpt             VARCHAR(4),
CONSTRAINT emp_dpt_fk FOREIGN KEY (dpt) REFERENCES departamentos(cod_dpt)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS proyectos (
cod_proy        VARCHAR(10) PRIMARY KEY,
nombre          VARCHAR(25),
fecha_inicio    DATE,
dpto            VARCHAR(10),
responsable     VARCHAR(10),
CONSTRAINT pro_dpt_fk FOREIGN KEY(dpto) REFERENCES departamentos(cod_dpt)
    ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT pro_res_fk FOREIGN KEY(responsable) REFERENCES empleados(dni)
    ON DELETE NO ACTION
);
-- Pérdida: El responsable debe pertenecer al departamento al que se ha asignado el proyecto.

INSERT INTO departamentos (cod_dpt, nombre_dpt, ubicacion) VALUES ('INF', 'Informática', 'Planta sótano U3');
INSERT INTO departamentos (cod_dpt, nombre_dpt, ubicacion) VALUES ('ADM', 'Administración', 'Planta quinta U2');
INSERT INTO departamentos (cod_dpt, nombre_dpt, ubicacion) VALUES ('COM', 'Comercial', 'Planta tercera U3');
INSERT INTO departamentos (cod_dpt, nombre_dpt, ubicacion) VALUES ('CONT', 'Contabilidad', 'Planta quinta U1');
INSERT INTO departamentos (cod_dpt, nombre_dpt, ubicacion) VALUES ('ALM', 'Almacén', 'Planta baja U1');

INSERT INTO empleados (dni,nombre_emp,especialidad,fecha_alta,dpt) VALUES ('12345678A','Alberto Gil','Contable','2010-12-10','CONT'),
('23456789B', 'Mariano Sanz', 'Informática', '2011-10-04', 'INF'),
('34567890C', 'Iván Gómez', 'Ventas', '2012-07-20', 'COM'),
('45678901D', 'Ana Silván', 'Informática', '2012-11-25', 'INF'),
('56789012E', 'María Cuadrado', 'Ventas', '2013-04-02', 'COM'),
('67890123A', 'Roberto Milán', 'Logística', '2010-02-05', 'ALM');

INSERT INTO proyectos VALUES('MAD20','Repsol, S.A.','2012-02-10', 'CONT', '12345678A');
INSERT INTO proyectos VALUES('TO451','Consejería de Educación','2012-05-24', 'INF', '23456789B');
INSERT INTO proyectos VALUES('V324','Oceanográfico','2012-09-29', NULL, NULL);

ALTER TABLE empleados ADD COLUMN supervisor VARCHAR(10);
ALTER TABLE empleados ADD CONSTRAINT emp_sup_fk
FOREIGN KEY(supervisor) REFERENCES empleados(dni);

select * from empleados;

UPDATE empleados SET supervisor = '45678901D'
WHERE dni = '23456789B';

select e.nombre_emp as empleado, s.nombre_emp as supervisor
from empleados e, empleados s
where e.supervisor = s.dni;

select * 
from empleados e, empleados c 
where e.dpt = c.dpt and e.nombre_emp = 'Ana Silván'
and c.nombre_emp != 'Ana Silván';


/*
lista con TODOS los empleados y TODOS los proyectos, 
mostrando los empleados responsables de cada proyecto.
*/
select e.dni
from empleados e left outer join proyectos p
on e.dni = p.responsable
UNION
select e.dni
from empleados e right outer join proyectos p
on e.dni = p.responsable;
/*
crear una select que incluya solamente el "dni", "nombre_emp" y "dpt"
de los empleados del departamento de informática
*/
create view informaticos as 
	select dni, nombre_emp, dpt
	from empleados
	where dpt= 'INF';
    
    select *
    from informaticos;

/*
envia un mensaje a los empleados pidiendo dinero
*/
select concat("Hola, ", nombre_emp, " me prestas dinero?")
from empleados;

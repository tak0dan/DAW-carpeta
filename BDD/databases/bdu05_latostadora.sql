drop database IF EXISTS bdu05_latostadora;

CREATE DATABASE IF NOT EXISTS bdu05_latostadora
CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;

USE bdu05_latostadora;

CREATE TABLE clientes (
tlfno int,
direccion_env varchar(40),
contrasenya varchar(12),
direccion_fac varchar(40),
eMail varchar(25),
constraint cli_ema_pk primary key (eMail)
);

CREATE TABLE pedidos (
idPed int NOT NULL AUTO_INCREMENT,
eMail varchar(25) not null,
constraint ped_ema_fk foreign key (eMail) references clientes (eMail) on delete cascade,
constraint ped_idp_pk primary key (idPed)
);

CREATE TABLE ilustradores (
idIlustrador int NOT NULL AUTO_INCREMENT,
nombre varchar (40),
cuenta varchar(20),
tlfno int,
eMail varchar(25),
constraint ilu_idI_pk primary key (idIlustrador)
);

CREATE TABLE ilustraciones (
idIlustracion int NOT NULL AUTO_INCREMENT,
preIlus float,
categoria varchar(20) check (categoria in ('friki', 'serie', 'libro')),
idIlustrador int not null,
constraint ilu_idI_fk foreign key (idIlustrador) references ilustradores (idIlustrador) on delete cascade,
constraint ilu_idI_pk primary key (idIlustracion)
);

CREATE TABLE productos (
idProd int ,
Precio_base double,
constraint pro_idP_pk primary key (idProd)
);

CREATE TABLE lineasPedidos (
idLinPed int NOT NULL AUTO_INCREMENT,
idPed int,
idProd int,
idIlustracion int,
cantidad int,
constraint pedProd_idI_fk foreign key (idIlustracion) references ilustraciones (idIlustracion) on delete cascade,
constraint pedProd_prod_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint pedProd_ped_fk foreign key (idPed) references pedidos (idPed) on delete cascade,
constraint pedProd_pk primary key (idLinPed)
);

CREATE TABLE prendas_ropa (
idProd int check  ( idProd > -1 and idProd < 200),
talla varchar(15) check (talla in ('pequeña', 'mediana', 'grande')),
color varchar(15) check (color in ('rojo', 'azul', 'amarillo', 'verde')),
genero varchar(10) check (genero in ('H', 'M', 'UNISEX')),
constraint pRopa_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint pRopa_pk primary key (idProd)
);

CREATE TABLE camisetas (
idProd int check  ( idProd > -1 and idProd < 100 ),
tipo_manga varchar(20) check (tipo_manga in ('corta','larga')),
constraint cam_idP_1_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint cam_idP_2_fk foreign key (idProd) references prendas_ropa (idProd) on delete cascade,
constraint cam_pk primary key (idProd)
);

CREATE TABLE sudaderas (
idProd int check  ( idProd > 99 and idProd < 200 ),
capucha varchar(20) check (capucha in ('sin_capucha','con_capucha')),
constraint sud_idP_1_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint sud_idP_2_fk foreign key (idProd) references prendas_ropa (idProd) on delete cascade,
constraint sud_pk primary key (idProd)
);

CREATE TABLE posters (
idProd int check  ( idProd > 199 and idProd < 300 ),
medidas varchar(15) check (medidas in ('grande','mediano','pequeño')),
constraint pos_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint pos_pk primary key (idProd)
);

CREATE TABLE tazas (
idProd int check  ( idProd > 299 and idProd < 400 ),
color varchar(15) check (color in ('rojo', 'azul', 'amarillo', 'verde')),
constraint taz_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint taz_pk primary key (idProd)
);

CREATE TABLE cestas (
idCesta int NOT NULL AUTO_INCREMENT,
eMail varchar(25) not null,
constraint ces_ema_fk foreign key (eMail) references clientes (eMail) on delete cascade,
constraint ces_idp_pk primary key (idCesta)
);

CREATE TABLE lineasCestas (
idLinCes int NOT NULL AUTO_INCREMENT,
idCesta int,
idProd int,
idIlustracion int,
cantidad int,
constraint lineaCes_idI_fk foreign key (idIlustracion) references ilustraciones (idIlustracion) on delete cascade,
constraint lineaCes_prod_fk foreign key (idProd) references productos (idProd) on delete cascade,
constraint lineaCes_ped_fk foreign key (idCesta) references cestas (idCesta) on delete cascade,
constraint lineaCes_pk primary key (idLinCes)
);

/*clientesS*/
insert into clientes (tlfno, direccion_env, contrasenya, direccion_fac, eMail)
values (623512485, 'Calle Solodilla', 'hola' , 'Calle Parras', 'federico@gmail.com'),
(652147852, 'Calle Manuel Poeta', 'hola', 'Calle Parras', 'pepe@gmail.com'),
(623514752, 'Calle Manolo Prieto', 'hola', 'Calle Parras', 'juan@gmail.com'),
(614785295, 'Calle Juan De Garay', 'hola', 'Calle Parras', 'paco@gmail.com');

insert into clientes (tlfno, eMail, direccion_env, contrasenya, direccion_fac)
values (655487144,'yupot@gmail.com','C/Pepitorestas 13, Valencia','xxxxx','C/Pepitorestas 13');
insert into clientes (tlfno, eMail, direccion_env, contrasenya, direccion_fac)
values (655487155,'terras1@gmail.com','C/Salvador Pepe 2 Valencia','xxxxx','C/Salvador Pepe 2');
insert into clientes (tlfno, eMail, direccion_env, contrasenya, direccion_fac)
values (655487166,'Rtersq123@gmail.com','C/Salvador Julio 3 Valencia','xxxxx','C/Salvador Julio 3');
insert into clientes (tlfno, eMail, direccion_env, contrasenya, direccion_fac)
values (655487177,'Huertas14@gmail.com','C/Ortensio Ortega 45 Valencia','xxxxx','C/Ortensio Ortega 45');

insert into clientes ( tlfno, direccion_env, contrasenya, direccion_fac, eMail)
values ( 658832555, 'Calle Matarranas 12', 'xxx', 'Calle Matarranas 12 Valencia', 'juanito@tomamail.com');
insert into clientes ( tlfno, direccion_env, contrasenya, direccion_fac, eMail)
values ( 752525658, 'Calle la Paz 25', 'xxx', 'Calle la Paz 25 Valencia', 'maksitog@tomamail.com');
insert into clientes ( tlfno, direccion_env, contrasenya, direccion_fac, eMail)
values ( 884512544, 'Calle Blasco Ibañez 1 Valencia', 'xxx', 'Calle Blasco Ibañez 1', 'mamimolona@tomamail.com');
insert into clientes ( tlfno, direccion_env, contrasenya, direccion_fac, eMail)
values ( 655482547, 'Calle Conde Altea 16', 'xxx', 'alle Conde Altea 16 Valencia', 'cayetano@tomamail.com');
insert into clientes 
values (692352768, 'C.Paquita Salas,7', '*****', 'C.Paquita Salas,7 Valencia', 'lolitaflores@gmail.com');
insert into clientes 
values (692352768, 'C/Dr.Salomon,2', '*****', 'C/Dr.Salomon,2', 'kikoriveraguapo@gmail.com');
insert into clientes
values ('000000000', '09','xxx','calle bladimir','kkgmail.com');
insert into clientes
values ('000000001', '08','xxy','calle lapiedra','llgmail.com');



/* PEDIDOS*/

insert into pedidos(eMail) 
values ( 'pepe@gmail.com'),
('juan@gmail.com'),
(  'paco@gmail.com'),
('federico@gmail.com');
insert into pedidos (eMail)
values ( 'paco@gmail.com');
insert into pedidos (eMail)
values ( 'paco@gmail.com');
insert into pedidos (eMail)
values ('terras1@gmail.com');
insert into pedidos (eMail)
values ('Huertas14@gmail.com');
insert into pedidos (eMail)
values ('yupot@gmail.com');
insert into pedidos (eMail)
values ('Rtersq123@gmail.com');
insert into pedidos (eMail)
values ( 'cayetano@tomamail.com');
insert into pedidos (eMail)
values ('cayetano@tomamail.com');
insert into pedidos (eMail)
values ('mamimolona@tomamail.com');
insert into pedidos (eMail)
values ('maksitog@tomamail.com');
insert into pedidos (eMail)
values ('juanito@tomamail.com');
insert into pedidos (eMail)
values ('maksitog@tomamail.com');
insert into pedidos (eMail)
values ( 'cayetano@tomamail.com');
insert into pedidos (eMail)
values ('cayetano@tomamail.com');
insert into pedidos (eMail)
values ('lolitaflores@gmail.com');
insert into pedidos (eMail)
values ('kikoriveraguapo@gmail.com');
insert into pedidos(eMail)
values ('kkgmail.com');
insert into pedidos(eMail)
values ('llgmail.com');

/* ILUSTRADORES*/
insert into ilustradores  (nombre,cuenta,tlfno,eMail)
values ( 'Pepe', 'ESBN 2000 4523 ', 625314287, 'pepe1@gmail.com'),
('Paco', 'ESBN 2000 4522 ', 625888287, 'paco1@gmail.com'),
('Juan', 'ESBN 2000 4523', 652478951, 'juan1@gmail.com');
insert into ilustradores  (nombre,cuenta,tlfno,eMail)
values ('Pepe', 'ESBN 2000 4523', 666778899, 'pepe@gmail.com'),
('Juan', 'ESBN 2000 4522', 777889912, 'juan@gmail.com'),
('Jose', 'ESBN 2000 4523 ',757889912 , 'jose@gmail.com'),
('Paco', 'ESBN 2000 4523', 777889912, 'paco@gmail.com');

insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ( 'Ana Bohueles', '17309s', 610226095, 'nopealsida@gmail.com');

insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('Esteban Coestaocupado', '85470S', 615987658, 'nopealsida@gmail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('Pepe','ES165',655444111,'pepe1@gmail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('Juana','ES171',655444222,'juana321@gmail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('Jose','ES168',655444333,'jose12@gmail.com');
insert into ilustradores  (nombre,cuenta,tlfno,eMail)
values ( 'Alberto', 'ES12345678', 754852365, 'alberto@tomamail.com');
insert into ilustradores  (nombre,cuenta,tlfno,eMail)
values ('Jose', 'ES1234567', 754852365, 'jose@tomamail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('Mery', 'ES12345', 754852374, 'mery@tomamail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ( 'LeonardoDaVinci', 341234, '654987679', 'leonardinhomino@gmail.com');
insert into ilustradores  (nombre,cuenta,tlfno,eMail)
values ( 'ElXocas', 341234, '634567866', 'elxocas@gmail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('juan','ESxxxxxxxxxxxx','666666666','casa@gmail.com');
insert into ilustradores (nombre,cuenta,tlfno,eMail)
values ('paco','ESyyyyyyyyyyy','666666666','piso@gmail.com');
/* ILUSTRACIONES*/

insert into ilustraciones(  preIlus, categoria, idIlustrador)
values ( 50, 'friki', 2),
(  60, 'serie', 3),
(  100, 'libro', 1),
(60,'serie',1),
(100,'libro',2),
( 50, 'friki', 1),
( 30, 'serie', 2),
 (10, 'libro', 1),
( 2.00,'serie',1),
(2.50,'serie',3),
 (1.78,'friki',2),
 ( 45, 'friki', 1),
 (45, 'serie', 1), 
 ( 100, 'friki', 2),
 (35, 'friki', 3),
( 40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 (40, 'libro', 3),
 ( 40, 'libro', 3);

/*PRODUCTOS*/
insert into productos (idProd,Precio_base)
values ( 1, 201),
( 2, 20),
(3, 20),
 (4,20),
(5,30),
(6,20),
(7, 20),
 (8, 10),
 (9, 30),
 (10, 30),
 (11, 15.00) ,
 (12, 10.00),
 (13, 15.00) ,
 (14, 10.00),
 (15, 15.00) ,
 (16, 10.00),
 ( 100, 20),
 ( 101, 20),
(102, 20),
 (103,20),
(104,30),
(105,20),
(106, 20),
 (107, 10),
 (108, 30),
 (109, 30),
 (110, 15.00) ,
 (111, 10.00),
 ( 200, 20),
( 201, 20),
(202, 20),
 (203,20),
(204,30),
(205,20),
(206, 20),
 (207, 10),
 (208, 30),
 (209, 30),
 (210, 15.00) ,
 (211, 10.00),
 (300,30),
 (301,30),
(302,20),
(303, 20),
 (304, 10),
 (305, 30),
 (306, 30),
 (307, 15.00) ,
 (308, 10.00);

/* LÍNEAS PEDIDOS*/
insert into lineasPedidos (idPed,idProd,idIlustracion,cantidad)
values 
( 1, 1,3,5),
( 2,1,3,5),
(3, 1,3,5),
 (4,1,3,5),
(5,1,2,1),
(6,1,2,1),
(7, 1,3,5),
 (8, 1,3,5),
 (9, 1,2,1),
 (10, 1,2,1),
 ( 1, 2,2,1),
( 2,2,2,1),
(3, 3,2,1),
 (4,4,3,5),
(5,4,2,1),
(6,5,3,5),
(7, 5,2,1),
 (8, 6,2,1),
 (9, 8,2,1),
 (10, 9,2,1),
( 1, 102,2,1),
( 2,101,3,5),
(3, 103,3,5),
 (4,104,3,5),
(5,100,3,5),
(6,105,2,1),
(7, 106,3,5),
 (8, 201,3,5),
 (9, 202,3,5),
 (10, 203,3,5),
 (5,204,3,5),
(6,205,2,1),
(7, 206,2,1),
 (1, 301,3,5),
 (1, 302,3,5),
 (3, 303,2,2),
 (8, 301,2,2),
 (9, 302,2,2),
 (10, 303,3,5),
 (6,304,3,5),
(7, 305,3,5);


/* PRENDA-ROPA*/
insert into prendas_ropa (idProd, talla,color,genero)
values (1, 'mediana', 'rojo' , 'H');
insert into prendas_ropa (idProd, talla,color,genero)
values
(2, 'pequeña', 'verde' , 'H'),
(3, 'mediana', 'amarillo' , 'M'),
(4, 'mediana', 'rojo' , 'H'),
(5, 'grande', 'verde' , 'H'),
(6, 'mediana', 'amarillo' , 'H'),
(7, 'mediana', 'azul' , 'M'),
(8, 'grande', 'verde' , 'H'),
(9, 'mediana', 'rojo' , 'UNISEX'),
(10, 'mediana', 'rojo' , 'M'),
(11, 'pequeña', 'amarillo' , 'M'),
(12, 'mediana', 'rojo' , 'M'),
(13, 'grande', 'verde' , 'M'),
(14, 'pequeña', 'rojo' , 'M'),
(15, 'mediana', 'amarillo' , 'M'),
(101, 'mediana', 'rojo' , 'H'),
(102, 'grande', 'azul' , 'M'),
(103, 'mediana', 'rojo' , 'H'),
(104, 'mediana', 'amarillo' , 'M'),
(105, 'grande', 'rojo' , 'UNISEX'),
(106, 'mediana', 'verde' , 'UNISEX'),
(107, 'grande', 'amarillo' , 'H'),
(108, 'pequeña', 'azul' , 'UNISEX'),
(109, 'mediana', 'verde' , 'M'),
(110, 'pequeña', 'amarillo' , 'M'),
(111, 'mediana', 'azul' , 'M');

/* camisetas*/
insert into camisetas (idProd,tipo_manga)
values (1, 'corta'),
(2, 'larga');
insert into camisetas (idProd,tipo_manga)
values (3,'corta'),
(4,'larga');
insert into camisetas
values (5, 'corta');
insert into camisetas (idProd, tipo_manga)
values (6,'corta');
insert into camisetas (idProd, tipo_manga)
values (7,'larga');
insert into camisetas (idProd, tipo_manga)
values (8, 'larga');
insert into camisetas (idProd, tipo_manga)
values (9, 'corta');
insert into camisetas (idProd, tipo_manga)
values (10, 'larga');
insert into camisetas (idProd, tipo_manga)
values (11, 'larga');
insert into camisetas (idProd, tipo_manga)
values (12, 'larga');
insert into camisetas (idProd, tipo_manga)
values (13, 'corta');
insert into camisetas
values (14, 'corta');
insert into camisetas
values (15, 'larga');
/* sudaderas*/
insert into sudaderas (idProd , capucha)
values 
(101, 'sin_capucha'),
(102, 'sin_capucha'),
(103, 'sin_capucha'),
(104, 'sin_capucha'),
(105, 'con_capucha');
insert into sudaderas (idProd,capucha)
Values (106,'sin_capucha'),
(107,'con_capucha');
insert into sudaderas
values (108, 'con_capucha');
insert into sudaderas (idProd, capucha)
values (109,'con_capucha');
insert into sudaderas (idProd, capucha)
values (110,'con_capucha');
insert into sudaderas
values (111,'con_capucha');

/* PÓSTER*/
insert into posters (idProd,medidas)
values (201, 'grande'),
(202, 'mediano'),
(203, 'grande'),
(204, 'mediano'),
(205, 'grande'),
(206, 'pequeño'),
(207, 'grande');

/* TAZAS*/
insert into tazas (color,idProd)
values ('rojo', 301),
('azul', 302),
('rojo', 303),
('azul', 304),
('verde', 305),
('amarillo', 306);


SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
SELECT idProd, genero, count(genero) FROM prendas_ropa GROUP BY genero;
select categoria, idIlustrador, avg(preIlus) from ilustraciones group by categoria, idIlustrador;
SELECT idProd,idIlustracion, count(idIlustracion) FROM lineasPedidos WHERE idIlustracion = 3 GROUP BY idIlustracion;
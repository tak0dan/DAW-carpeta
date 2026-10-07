CREATE DATABASE IF NOT EXISTS bdu05_tienda_friki
CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;

USE bdu05_tienda_friki;

CREATE TABLE IF NOT EXISTS proveedor (
cod_prov     VARCHAR(10) PRIMARY KEY,
nombre_prov  VARCHAR(30),
cod_postal   VARCHAR(5)
);

CREATE TABLE IF NOT EXISTS producto (
ref_prod     VARCHAR(10) PRIMARY KEY,
nombre_prod  VARCHAR(30),
precio       DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS pedido (
num_ped      INTEGER PRIMARY KEY,
fecha        DATE,
cod_prov     VARCHAR(10),
CONSTRAINT ped_prv_fk FOREIGN KEY (cod_prov) REFERENCES proveedor (cod_prov)
);

CREATE TABLE IF NOT EXISTS detalle_pedido (
num_ped      INTEGER,
ref_prod     VARCHAR(10),
cantidad     INTEGER,
PRIMARY KEY (num_ped, ref_prod),
CONSTRAINT dep_ped_fk FOREIGN KEY (num_ped) REFERENCES pedido (num_ped),
CONSTRAINT dep_prd_fk FOREIGN KEY (ref_prod) REFERENCES producto (ref_prod)
);

INSERT INTO proveedor (cod_prov,nombre_prov,cod_postal) VALUES ('TO342','JUGUETOS, S.A.','45600');
INSERT INTO proveedor (cod_prov,nombre_prov,cod_postal) VALUES ('MA280','TOYPLAY, S.A.','28005');
INSERT INTO proveedor (cod_prov,nombre_prov,cod_postal) VALUES ('BA843','CARMELO DIAZ, S.L.','06004');
INSERT INTO proveedor (cod_prov,nombre_prov,cod_postal) VALUES ('SE391','ARTEAND, S.L.','41400');

INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('NPP10','NAIPES PETER PARKER',3.00);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('P3R20','PATINETE 3 RUEDAS',22.50);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('AFK11','AVION FK20',31.75);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('PM30','PELUCHE MAYA',15.00);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('HM12','HOOP MUSICAL',12.80);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('BB75','BOLA BOOM',22.20);
INSERT INTO producto (ref_prod,nombre_prod,precio) VALUES ('PT50','PETER PAN',25.00);

INSERT INTO pedido (num_ped,fecha,cod_prov) VALUES (1,'2013-06-10','TO342');
INSERT INTO pedido (num_ped,fecha,cod_prov) VALUES (2,'2013-06-10','MA280');
INSERT INTO pedido (num_ped,fecha,cod_prov) VALUES (3,'2013-06-12','BA843');
INSERT INTO pedido (num_ped,fecha,cod_prov) VALUES (4,'2013-06-14','TO342');
INSERT INTO pedido (num_ped,fecha,cod_prov) VALUES (5,'2013-06-14','MA280');

INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (1,'NPP10',10);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (1,'AFK11',12);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (2,'P3R20',15);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (3,'P3R20',10);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (3,'PM30',20);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (3,'HM12',10);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (4,'AFK11',30);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (4,'BB75',12);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (5,'P3R20',18);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (5,'NPP10',3);
INSERT INTO detalle_pedido (num_ped,ref_prod,cantidad) VALUES (5,'BB75',5);

select * from detalle_pedido;
select * from pedido;
select * from producto;
select * from proveedor;
use bdu05_tienda_friki;

select AVG(precio)
from producto;

select nombre_prod, precio, precio - (select avg(precio)from producto) as PrecioMenosMedia
from producto;

select * 
from producto
where precio > (select avg(precio) from producto);

select sum(cantidad), ref_prod
from detalle_pedido 
group by ref_prod;

select ref_prod as referencia, sum(cantidad)
from detalle_pedido
group by ref_prod
having sum(cantidad) > (select sum(cantidad) from detalle_pedido where ref_prod='PM30');

select max(precio)
from producto;

select * 
from producto
where precio = (select max(precio) from producto);


select *
from detalle_pedido
where cantidad = any(
select cantidad
from detalle_pedido
where num_ped = 1) 
and num_ped !=1;


/*mostrar la referencia, el nombre y las unidades vendidas de cada producto
ordenados por la referencia del producto*/

select p.ref_prod, p.nombre_prod, (select sum(cantidad)
								from detalle_pedido dp
                                where p.ref_prod = dp.ref_prod)
from producto p
order by 1;



/*mostrar los pedidos con un número comprendido entre 100 y 110,
con el importe total de cada uno de ellos ordenado por el número del pedido*/

select *, (select sum(cantidad * precio_unidad)
				from detalle_pedido dp
                where p.cod_pedido = dp.cod_pedido)
from pedidos p
where cod_pedido between 100 and 110
order by cod_pedido;

/*mostrar el producto más vendido y la cantidad de unidades vendidas de ese producto*/
select max(tabla_cantidades.suma)
from (select sum(cantidad) as suma
from detalle_pedido
group by ref_prod)tabla_cantidades;


/*obtener media cantidades pedidos*/
select dp.ref_prod, dp.num_ped, dp.cantidad
from (select num_ped, AVG(cantidad) as media
from detalle_pedido
group by num_ped) tabla_medias inner join detalle_pedido dp
where dp.cantidad > tabla_medidas.media;


/*
muestre la referencia del producto y la suma de las cantidades
vendidas por cada producto
*/
create view sumacant as
select ref_prod, sum(cantidad)
from detalle_pedido
group by ref_prod;

select* 
from sumacant;



insert into producto(ref_prod,nombre_prod,precio)
values ('NPI33','Caja Sorpresa',32.45);

insert into producto()
values ('KK33','Muñeca Diabólica',17.86);

insert into producto(precio, ref_prod)
values (67.43, 'NGG69');

commit;

/*Pon a mitad de precio los productos que nunca se han vendido*/
update producto
set precio = 0.5*precio
where ref_prof not in (select distinct ref_prod 
                        from detalle_pedido);

/*Aumenta un 10% el precio de los productos que valgan menos o igual a la media*/
update producto
set precio = 1.1*precio
where precio <= (select media
				from(select AVG(precio) as media /*no puedes poner lo mismo en el update y en from por eso hacemos una tabla derivada*/
				from producto) Tabla_Derivada);
                
#Rebaja un 5% los precios de los productos que valen más que la media.
update producto
set precio = 0.95*precio
where precio > (select media
				from(select AVG(precio) as media /*no puedes poner lo mismo en el update y en from por eso hacemos una tabla derivada*/
				from producto) Tabla_Derivada);
                
#Cambia el nombre del producto que más se ha vendido en total de ventas, a "JUGUETE MÁS VENDIDO", sólo uno.
update producto
set nombre_prod = "JUGUETE MAS VENDIDO"
WHERE ref_prod= (select SuperVentas from(select ref_prod as SuperVentas, sum(cantidad)
					from detalle_pedido
				group by ref_prod
				order by 2 desc  
				limit 1)TabDev);

#6. Cambia el nombre del producto menos vendido añadiendo al final de su nombre la coletilla ", menos vendido", sólo uno
update producto
set nombre_prod = concat(nombre_prod, ", menos vendido")
where ref_prod = (select SuperVentas from(select ref_prod as SuperVentas, sum(cantidad)
					from detalle_pedido
				group by ref_prod
				order by 2  
				limit 1)TabDev);

#7. Añade un nuevo pedido, con código siguiente al último, con fecha de hoy y del proveedor 'TO342'
INSERT INTO pedido 
VALUES((SELECT maximoNumPed + 1 
		FROM (SELECT MAX(num_ped) AS maximoNumPed 
			FROM pedido)dp),Curdate(),'TO342');
#8. Añade un nuevo pedido, con número de pedido 17 y con fecha 6 meses antes de hoy y del proveedor con nombre que empieza por Carmelo.
INSERT INTO pedido 
VALUES(17,curdate()- interval 6 MONTH, (select cod_prov
										from proveedor
										where nombre_prov like/*LIKE IMPORTANTE, NO =*/ 'Carmelo%'
											LIMIT 1));

#9. Borra aquellos pedidos de los que han pasado más de 400 días
#PISTA: por las claves ajenas primero me obligará a borra los detalle_pedido y luego los pedidos.
delete from detalle_pedido
where num_ped in (select num_ped from pedido where datediff(curdate(), fecha)>400);

DELETE FROM pedido 
WHERE num_ped in (SELECT pedidosMasDe400dias FROM (SELECT num_ped as pedidosMasDe400dias FROM pedido where DATEDIFF(curdate(),fecha)>400)dp);

#10. Borra los pedidos que se han producido este año.
delete from detalle_pedido
where num_ped in (
select num_ped from pedido where year(fecha) = year (curdate()));

DELETE FROM pedido 
where year(fecha) = year (curdate());

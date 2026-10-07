DROP DATABASE IF  EXISTS venta_fruta;
CREATE DATABASE  venta_fruta CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;
use venta_fruta;

-- Crear una tabla de ejemplo
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente VARCHAR(50),
    producto VARCHAR(50),
    cantidad INT,
    tamanyo VARCHAR(10) CHECK (tamanyo  in('grande','Pequeño'))
);
-- Insertar datos
INSERT INTO ventas (cliente, producto, cantidad,tamanyo) VALUES
('Juan', 'Manzanas', 10,'grande'),
('Juan', 'Peras', 5,'grande'),
('Ana', 'Manzanas', 7,'pequeño'),
('Ana', 'Peras', 3,'pequeño'),
('Ana', 'Manzanas', 6,'grande'),
('Juan', 'Manzanas', 10,'grande'),
('pascual','manzanas',30,'grande'),
('Anes', null , 17,null),
('pascual',null,10,'grande');

SELECT * FROM ventas;
commit;

-- contar los distintos clientes
select count(distinct cliente) from ventas;

-- clientes que hayan comprado mas de 4 peras
select distinct cliente from ventas
where producto='peras' and cantidad>4;

-- compras de más de 7 manzanas grandes
select distinct cliente from ventas
where producto="manzanas" and tamanyo="grande" and cantidad>7;

-- suma manzanas grandes
select sum(cantidad) from ventas
where tamanyo="grande" and producto="manzanas";

-- promedio ventas
select cliente,  avg(cantidad)
from ventas group by cliente;


-- ventas de manzanas mayor a 5 de Juan y Ana
select id from ventas
where cantidad>5
and  producto="manzanas"
and  (cliente="Juan" or cliente ="Ana");

-- cuanta fruta he vendido
select sum(cantidad) from ventas;

-- cuantas manzanas y cuantas peras he vendido (separado)
select producto, sum(cantidad) 
from ventas
group by producto
having producto in ('manzanas','peras');


-- cuantas manzanas grandes y cuantas pequeñas
select tamanyo, sum(cantidad) 
from ventas
where producto= 'manzanas'
group by tamanyo;

-- ventas totales
select * from ventas;

-- cuantas ventas por producto
select producto, count(id)
from ventas
group by producto;

-- obtener tamaño y tipo de fruta de las que he vendido más de 12
select tamanyo, producto, sum(cantidad) from ventas
group by producto, tamanyo
having sum(cantidad)>12;


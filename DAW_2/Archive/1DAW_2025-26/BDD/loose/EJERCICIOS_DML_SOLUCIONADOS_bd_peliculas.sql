use peliculas_db;

#1. Elimina las películas más antiguas de cada plataforma
SELECT * FROM Peliculas;
SELECT * FROM Plataforma;
SELECT * FROM Cliente;

DELETE FROM Peliculas
WHERE id_pelicula in  ( SELECT id_pelicula FROM(
						SELECT id_pelicula
						FROM Peliculas p
						where  anyo = (select min(anyo) 
                                      from Peliculas pe 
                                      where p.id_plataforma = pe.id_plataforma))td);
 

DELETE P 
FROM Peliculas P
JOIN (
    SELECT id_plataforma, MIN(anyo) AS mas_vieja
    FROM Peliculas
    GROUP BY id_plataforma
) sub
 ON P.id_plataforma = sub.id_plataforma AND P.anyo = sub.mas_vieja;
 
#2. INSERTA UNA NUEVA PLATAFORMA QUE SEA "plataformaDesconocida"
DESC Plataforma;
INSERT INTO Plataforma(nombre)
VALUES("plataformaDesconocida");

#3. INSERTA TODOS LOS DIRECTORES COMO CLIENTES EN NUESTRA TABLA DE CLIENTES, con el correo "correoNoValido" y en el pais, aunque sabemos que no es lo mismo exactamente, por la nacionalidad.
INSERT INTO Cliente (nombre,correo, pais, plataforma)  
SELECT nombre,"correoNoValido", nacionalidad,"plataformaDesconocida" FROM Director;

#4.  SI HAY ALGÚN DIRECTOR DENTRO DE NUESTROS CLIENTES, o por lo menos que se llame igual, ponle una coletilla a su nombre que sea (director).
UPDATE Cliente
SET nombre = CONCAT(nombre,' (director)')
WHERE nombre in (SELECT nombre 
				from Director);


#5. Actualiza las ganancias de las plataformas con más suscriptores,
# para que sus ganancias sean exactamente el número de clientes que tiene nuestra base de datos por el número de películas que tiene nuestra base de datos.
UPDATE Plataforma
SET ganancias = ( SELECT COUNT(*) FROM Cliente) * (SELECT COUNT(*) FROM Peliculas)
WHERE millDeSuscrip = (SELECT maximoSusc FROM (SELECT MAX(millDeSuscrip) as maximoSusc 
                                         FROM Plataforma)td);


#6.Insertar la película Drácula con director Francis Ford Coppola, de la plataforma con identificador 2, año 1993 y género 'Terror'

insert into Peliculas (titulo,id_director,id_plataforma,anyo,genero)

values ('Drácula ,de Bram Stoker',

	(select id_director from Director

    where nombre = 'Francis Ford Coppola'),

    2,1993,'Terror');

#7. Insertar el director Mel Gibson con nacionalidad Estadounidense, si no existe ya en la base de datos como director.

insert into Director (nombre, nacionalidad) 

select 'Mel Gibson', 'Estadounidense' 

where not exists (select *from Director where nombre = 'Mel Gibson');



#8.  Insertar la película Braveheart, de la plataforma con id 3, año 1995 y género bélico

insert into Peliculas (titulo, id_director, id_plataforma, anyo, genero)

values ('Braveheart',

    (select id_director from Director where nombre = 'Mel Gibson'),

    3, 1995,'Bélico'

);


# 9. Aumentar en un 20% las ganancias de todas las plataformas que comenzaron después del año 2013.

update Plataforma

set ganancias = ganancias*1.20

where anyoComienzo > 2013;


# 10. Eliminar todas las peliculas de la plataforma Netflix que sean anteriores a 1995.


delete from Peliculas

where id_plataforma = (select id_plataforma from Plataforma where nombre = 'Netflix')

and anyo < 1995;
# 11. 
/* Tenemos que añadir las entradas de algunas películas de las que se va a hacer un remake. Sus características son las siguientes:
- Seleccionamos todas las películas de ciencia ficción.
- Les vamos a añadir al final del título "REMAKE". 
- Las va a dirigir el director que haya hecho la película más reciente de todas (si hay varios del mismo año, el primero alfabéticamente). 
- Su plataforma será la que tiene más suscriptores de aquellas plataformas que sean más recientes.
- Su fecha de estreno será de aquí a dos años.
- Mantendremos el género de la película original.*/

INSERT INTO Peliculas (titulo, id_director, id_plataforma, anyo, genero)
SELECT CONCAT(titulo, " REMAKE"),
(SELECT id_director FROM Peliculas ORDER BY anyo DESC, titulo ASC LIMIT 1),
(SELECT id_plataforma FROM Plataforma ORDER BY anyoComienzo DESC, millDeSuscrip DESC LIMIT 1),
anyo = (CURDATE() + INTERVAL '2' YEAR),
genero
FROM Peliculas
WHERE genero = "Ciencia Ficción";



# 12.
/* Sube las ganancias de las plataformas que más suscriptores tengan, en 10000.*/
UPDATE Plataforma
SET ganancias = ganancias + 10000
WHERE millDeSuscrip = (SELECT td.suscriptores 
						FROM (SELECT MAX(millDeSuscrip) AS suscriptores 
								FROM Plataforma)td);

# 13.
/* Estados Unidos ha invadido Canadá. 
Actualiza la nacionadlidad ("Canadiense") de los directores afectados a "Canadiense-estadounidense" .*/
UPDATE Director
SET nacionalidad = CONCAT (nacionalidad, "-estadounidense")
WHERE nacionalidad = "Canadiense";



# 14.-
/* Elimina la película más antigua.*/
DELETE FROM Peliculas
WHERE anyo = (SELECT td.anio 
				FROM (SELECT MIN(anyo) AS anio 
						FROM Peliculas)td);

# 15.-
/*Elimina todos los clientes que estén en plataformas con ganancias de menos de 150000.*/
DELETE FROM Cliente
WHERE plataforma IN (SELECT pla.nombre 
						FROM Plataforma pla 
                        WHERE pla.ganancias < 1500000);

# 16.-
/*Debido a un cambio de contrato, todas las películas de Steven Spielberg deben eliminarse

del catálogo de Amazon Prime*/

Delete from Peliculas Where

id_director = (Select id_director from Director Where nombre = 'Steven Spielberg')

and

id_plataforma = (Select id_plataforma from Plataforma Where nombre = 'Amazon Prime');
 
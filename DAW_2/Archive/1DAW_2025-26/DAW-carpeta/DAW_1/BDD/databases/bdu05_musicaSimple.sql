-- Crear base de datos sencilla
CREATE DATABASE MusicaSimple;
USE MusicaSimple;

-- Crear tablas
CREATE TABLE Artista (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Pais VARCHAR(50),
    MentorID INT,
    FOREIGN KEY (MentorID) REFERENCES Artista(ID)
);

CREATE TABLE Cancion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Duracion INT NOT NULL,
    ArtistaID INT,
    FOREIGN KEY (ArtistaID) REFERENCES Artista(ID)
);

CREATE TABLE Album (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Anio INT NOT NULL,
    ArtistaID INT,
    FOREIGN KEY (ArtistaID) REFERENCES Artista(ID)
);

CREATE TABLE AlbumCancion (
    AlbumID INT,
    CancionID INT,
    PRIMARY KEY (AlbumID, CancionID),
    FOREIGN KEY (AlbumID) REFERENCES Album(ID),
    FOREIGN KEY (CancionID) REFERENCES Cancion(ID)
);

-- Insertar datos de ejemplo
INSERT INTO Artista (Nombre, Pais, MentorID) VALUES 
('Shakira', 'Colombia', NULL),
('Adele', 'Reino Unido', NULL),
('Juanes', 'Colombia', 1),
('Camila Cabello', 'Cuba', 2);

INSERT INTO Cancion (Titulo, Duracion, ArtistaID) VALUES 
('Hips Don\'t Lie', 210, 1),
('Rolling in the Deep', 228, 2),
('A Dios le Pido', 195, 3),
('Havana', 217, 4),
('Waka Waka', 205, 1),
('La Tortura', 212, 1),
('Someone Like You', 285, 2);

INSERT INTO Album (Titulo, Anio, ArtistaID) VALUES 
('Oral Fixation', 2005, 1),
('21', 2011, 2),
('Un Día Normal', 2002, 3),
('Romance', 2019, 4),
('Sale el Sol', 2010, 1);

-- Asociar canciones con álbumes
INSERT INTO AlbumCancion (AlbumID, CancionID) VALUES
(1, 1),
(2, 2),
(2, 7),
(3, 3),
(4, 4),
(5, 5),
(5, 6);

select * 
from Cancion;

select * 
from Artista;

select * 
from AlbumCancion;

select * 
from Album;

/*
Álbumes lanzados después del álbum más antiguo
*/
select Titulo
from Album 
where anio > (select min(anio)
				from Album);
                
/*
NOMBRE DEL ARTISTA CON LA CANCION MÁS LARGA, 
SI HAY VARIAS CANCIONES MÁS LARGAS QUE SALGAN TODAS
*/
select a.nombre
from Artista a inner join Cancion c on a.ID = c.ArtistaID
where c.Duracion = (select max(Duracion) from Cancion);

use MusicaSimple;
-- Consultas Reflexivas
-- 1. Lista los nombres de los artistas junto con el nombre de sus mentores, si tienen
-- Si no tienen mentor que digan null.

-- Consultas con subselect en el SELECT
-- 1. Listar los nombres de los artistas con el número de canciones que tienen.

-- 2. Mostrar el nombre del artista, junto al año del album más reciente de cada artista.


-- 3. Obtener el nombre del artista y el nombre de la canción,  de la canción más larga, 
-- si hay varias canciones con la duración más larga sólo nos interesa UNA.


-- Consultas con subselect en el WHERE
-- 1. Canciones con duración mayor al promedio.


-- 2. Artistas con canciones más largas que 200 segundos.


-- 3. Álbumes lanzados después del año del álbum más antiguo.


-- 4. Obtener el nombre del artista de la canción más larga,
--  si resulta que hay varias canciones con la duración más larga,
--  que salgan TODAS las canciones.

      
-- Consultas con subselect en el HAVING
-- 1. Elige al artista y el promedio de años en los que ha publicado sus álbumes, pero solo
-- si su promedio es mayor que el promedio general de los años de publicación de todos los álbumes.


-- 2.  lista de artistas cuyas canciones tienen una duración promedio mayor 
-- que la media de la duración de todas las canciones de la base de datos de musicaSimple.


-- Consultas con tablas derivadas
-- 1. Indica el número  de canciones que tiene el artista con más canciones,
-- sin revelar quién es


-- 2. Listar los nombres de los artistas
--  con la duración total de sus canciones.



-- 2.b. Para cada título del álbum de nuestra base de datos, 
-- muestra el número total de canciones que
--  tengo del artista de ese álbum.
-- Si no tengo canciones del artista pero sí el álbum, 
-- quiero que también se muestre el álbum 
-- con un conteo de canciones igual a 0


-- 3. Mostrar los nombres de los álbumes junto 
-- con el número de canciones asociadas.



-- 4. Obtener los nombres de los artistas con los títulos
-- y duración de las canciones
--  más largas que el promedio global.

   
-- 1. Artistas con al menos un álbum. 
SELECT distinct a.Nombre
FROM Artista a
JOIN Album al ON al.ArtistaID = a.ID;
-- el propio join hace el filtro, no es necesario where, etc.

-- 2. Canciones de artistas que tienen álbumes 
-- lanzados antes de 2010.
SELECT c.Titulo
FROM Cancion c
JOIN AlbumCancion ac ON c.ID = ac.CancionID
JOIN Album a ON ac.AlbumID = a.ID
WHERE a.Anio < 2010;


-- 3. Nombre de los álbumes cuyos artistas tienen canciones más largas de 200 segundos.
SELECT a.Titulo
FROM Album a
JOIN AlbumCancion ac ON a.ID = ac.CancionID
JOIN Cancion c ON ac.AlbumID = c.ID
WHERE c.Duracion > 200;


-- Consultas con ANY
-- 1. Canciones más largas que cualquier otra canción del mismo artista. (Todas menos la más corta)
select titulo, duracion
from Cancion
where duracion >= any
	(select max(duracion)
    from Cancion)
    order by duracion;

-- 2. Artistas con duración promedio de canciones mayor que cualquier otro artista.
-- (Todos los artistas menos el artista con menor media)
-- Es decir la duración media de las canciones de un artista tiene que ser mayor que la 
-- duración media de las canciones de algún otro artista


-- Consultas con UNION

-- 1. Artistas de Colombia y Reino Unido.


-- 2. Canciones y álbumes del mismo artista con ID 1.


-- Vistas
-- 1. Vista de canciones con su respectivo artista.




-- 2. Vista de álbumes con el año promedio de lanzamiento.



-- 3. Vista de artistas con la duración total de sus canciones.
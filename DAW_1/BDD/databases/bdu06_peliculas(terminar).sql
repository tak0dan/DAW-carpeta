-- Crear la base de datos
DROP DATABASE IF EXISTS peliculas_db;
CREATE DATABASE IF NOT EXISTS peliculas_db character set utf8mb4 collate utf8mb4_spanish_ci;
USE peliculas_db;

-- Tabla: Plataforma
CREATE TABLE Plataforma (
    id_plataforma INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    ganancias float,
    anyoComienzo YEAR,
    millDeSuscrip int
);

-- Insertar datos en Plataforma
INSERT INTO Plataforma (nombre, ganancias,anyoComienzo,millDeSuscrip) VALUES 
('Netflix',2300000,2011,250),
('Amazon Prime',2900000,2011,250),
('HBO Max',1300000,2011,250),
('Disney+',1500000,2014,70),
('Hulu',900000,2014,70),
('Apple TV',2600000,2014,250);

-- Tabla: Director
CREATE TABLE Director (
    id_director INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL
);

-- Insertar datos en Director
INSERT INTO Director (nombre, nacionalidad) VALUES 
('Francis Ford Coppola', 'Estadounidense'),
('James Cameron', 'Canadiense'),
('Lana Wachowski', 'Estadounidense'),
('Ridley Scott', 'Británico'),
('Christopher Nolan', 'Británico'),
('Peter Jackson', 'Neozelandés'),
('Bong Joon-ho', 'Surcoreano'),
('Roger Allers', 'Estadounidense'),
('Quentin Tarantino', 'Estadounidense'),
('Steven Spielberg', 'Estadounidense'),
('John Doe', 'Neozelandés');

-- Tabla: Cliente
CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    pais VARCHAR(50) NOT NULL,
	plataforma  VARCHAR(100)  NOT NULL,
    FOREIGN KEY (plataforma) REFERENCES Plataforma(nombre)
);

-- Insertar datos en Cliente
INSERT INTO Cliente (nombre, correo, pais,plataforma) VALUES 
('Ana Fernández', 'ana.fernandez@gmail.com', 'España','NETFLIX'),
('Juan Pérez', 'juan.perez@yahoo.com', 'México','NETFLIX'),
('Carlos López', 'carlos.lopez@hotmail.com', 'Argentina','NETFLIX'),
('María Gómez', 'maria.gomez@outlook.com', 'Chile','Amazon Prime'),
('José Martínez', 'jose.martinez@gmail.com', 'Colombia','Amazon Prime'),
('Laura Sánchez', 'laura.sanchez@yahoo.com', 'España','NETFLIX'),
('Pablo García', 'pablo.garcia@outlook.com', 'Perú','HBO Max'),
('Ezequiel Torres', 'marta.torres@gmail.com', 'Ecuador','HBO Max'),
('Andrés Ramírez', 'andres.ramirez@gmail.com', 'Uruguay','NETFLIX'),
('Lucez Herrera', 'lucia.herrera@yahoo.com', 'México','HBO Max');



-- Tabla: Películas
CREATE TABLE Peliculas (
    id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    id_director INT NOT NULL,
    id_plataforma INT NOT NULL,
    anyo YEAR NOT NULL,
    genero VARCHAR(50) NOT NULL,
    presupuesto DECIMAL(9,2) DEFAULT 0,
    duracion int DEFAULT 0,
    FOREIGN KEY (id_director) REFERENCES Director(id_director),
    FOREIGN KEY (id_plataforma) REFERENCES Plataforma(id_plataforma)
);

-- Insertar datos en Películas
INSERT INTO Peliculas (titulo, id_director, id_plataforma, anyo, genero, presupuesto,duracion) VALUES 
('El Padrino', 1, 1, 1972, 'Crimen',1500000,125),
('Titanic', 2, 2, 1997, 'Romance',2000000,90),
('Matrix', 3, 2, 1999, 'Ciencia Ficción',2500000,78),
('Gladiador', 4, 4, 2000, 'Acción',2500000,130),
('Inception', 2, 5, 2010, 'Ciencia Ficción',1000000,100),
('El Señor de los Anillos', 6, 6, 2001, 'Fantasía',2500000,96),
('Parasite', 7, 1, 2019, 'Drama',1000000,102),
('El Rey León', 8, 2, 1994, 'Animación',2000000,120),
('Pulp Fiction', 9, 1, 1994, 'Crimen',1500000,123),
('Jurassic Park', 10, 2, 1993, '´Romance',2500000,150),
('elena Park', 10, 2, 1993, 'Ciencia Ficción',1500000,180)
;
CREATE TABLE Visualizacion (
    id_visualizacion INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_pelicula INT NOT NULL,
    fecha DATE NOT NULL,
    CONSTRAINT fk_visualizacion_cliente
        FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
    CONSTRAINT fk_visualizacion_pelicula
        FOREIGN KEY (id_pelicula) REFERENCES Peliculas(id_pelicula) ON DELETE CASCADE
);
INSERT INTO Visualizacion (id_cliente, id_pelicula, fecha) VALUES
-- Cliente 1 (muy activo)
(1, 1, '2024-01-10'),
(1, 2, '2024-01-12'),
(1, 3, '2024-02-01'),
(1, 1, '2024-02-15'),

-- Cliente 2
(2, 1, '2024-01-11'),
(2, 2, '2024-01-20'),

-- Cliente 3
(3, 3, '2024-03-05'),

-- Cliente 4 (Netflix antiguo)
(4, 2, '2023-12-15');



#1. Elimina las películas más antiguas de cada plataforma
delete from peliculas
where anyo in (select id_pelicula from peliculas where anyo = min(anyo)order by 1 limit 1);

#extra. Obtener el nombre y correo de los clientes que han visto al menos una película dirigida por un director estadounidense.
SELECT DISTINCT c.nombre, c.correo
FROM Cliente c
WHERE c.id_cliente IN (
						SELECT v.id_cliente
						FROM Visualizacion v
						WHERE v.id_pelicula IN (
												SELECT p.id_pelicula
												FROM Peliculas p
												WHERE p.id_director IN (
																		SELECT d.id_director
																		FROM Director d
																		WHERE d.nacionalidad = 'Estadounidense'
																		)
												)
);


#2. INSERTA UNA NUEVA PLATAFORMA QUE SEA "plataformaDesconocida"

#3. INSERTA TODOS LOS DIRECTORES COMO CLIENTES EN NUESTRA TABLA DE CLIENTES

#4.  SI HAY ALGÚN DIRECTOR DENTRO DE NUESTROS CLIENTES, o por lo menos que se llame igual, ponle una coletilla a su nombre que sea (director).

#5. Actualiza las ganancias de las plataformas con más suscriptores,
# para que sus ganancias sean exactamente el número de clientes que tienen en nuestra base de datos por el número de películas que tienen.

#6.Insertar la película Drácula con director Francis Ford Coppola

#7. Insertar el director Mel Gibson, si no existe

#8.  Insertar la película Braveheart, de la plataforma con id 3, año 1995 y género bélico

# 9. Aumentar en un 20% las ganancias de todas las plataformas que comenzaron después del año 2013.

# 10. Eliminar todas las peliculas de la plataforma Netflix que sean anteriores a 1995.

# 11. 
/* Tenemos que añadir las entradas de algunas películas de las que se va a hacer un remake. Sus características son las siguientes:
- Seleccionamos todas las películas de ciencia ficción.
- Les vamos a añadir al final del título "REMAKE". 
- Las va a dirigir el director que haya hecho la película más reciente de todas (si hay varios del mismo año, el primero alfabéticamente). 
- Su plataforma será la que tiene más suscriptores de aquellas plataformas que sean más recientes.
- Su fecha de estreno será de aquí a dos años.
- Mantendremos el género de la película original.*/

# 12.
/* Sube las ganancias de las plataformas que más suscriptores tengan, en 10000.*/


# 13.
/* Estados Unidos ha invadido Canadá. 
Actualiza la nacionadlidad ("Canadiense") de los directores afectados a "Canadiense-estadounidense" .*/

# 14.-
/* Elimina la película más antigua.*/

# 15.-
/*Elimina todos los clientes que estén en plataformas con ganancias de menos de 150000.*/

# 16.-
/*Debido a un cambio de contrato, todas las películas de Steven Spielberg deben eliminarse
del catálogo de Amazon Prime*/

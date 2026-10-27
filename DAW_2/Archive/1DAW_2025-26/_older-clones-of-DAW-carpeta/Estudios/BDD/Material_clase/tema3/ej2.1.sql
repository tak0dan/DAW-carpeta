CREATE DATABASE IF NOT EXISTS BDU3Basico CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;
USE BDU3Basico;

CREATE TABLE peliculas(
cod_pel VARCHAR(15) PRIMARY KEY,
nombre VARCHAR(50)
);

CREATE TABLE dominios(
cod_pel VARCHAR(15),
nombre VARCHAR(50),
director VARCHAR(50),
anio DATETIME,
genero VARCHAR(20),
CONSTRAINT dom_codpel_pk FOREIGN KEY(cod_pel) REFERENCES peliculas(cod_pel),
CONSTRAINT dom_gen_ch CHECK(genero IN("accion","terror","comedia","drama","cinegrafic")),
visionada BOOLEAN
);
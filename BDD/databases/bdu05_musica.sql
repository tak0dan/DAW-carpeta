drop database if exists bdu05_musica;
CREATE DATABASE IF NOT EXISTS bdu05_musica
CHARACTER SET utf8mb4 COLLATE utf8mb4_es_0900_ai_ci;
use bdu05_musica;
CREATE TABLE  artista ( 
  dni     VARCHAR (10) PRIMARY KEY, 
  nombre  VARCHAR (30)  NOT NULL
); 

CREATE TABLE cancion ( 
  cod       INT (3)    PRIMARY KEY, 
  titulo    VARCHAR (30)  NOT NULL, 
  duracion  INT 
); 

CREATE TABLE  club ( 
  cod      CHAR (3)      PRIMARY KEY, 
  nombre   VARCHAR (30), 
  sede     VARCHAR (30), 
  num_fans      INT (6), 
  cod_gru  CHAR (3)
); 

CREATE TABLE companya ( 
  cod     CHAR (3)     PRIMARY KEY, 
  nombre  VARCHAR (30)  NOT NULL, 
  dir     VARCHAR (30), 
  fax     VARCHAR (15), 
  tfno    VARCHAR (15)
); 

CREATE TABLE  disco ( 
  cod       CHAR (3)    PRIMARY KEY, 
  NOMBRE    VARCHAR (30), 
  fecha     DATE, 
  cod_comp  CHAR (3)      NOT NULL, 
  cod_gru   CHAR (3)      NOT NULL
); 

CREATE TABLE esta ( 
  cod_can  INT (3)    NOT NULL, 
  cod_disco  CHAR (3)      NOT NULL,
  PRIMARY KEY (cod_can, cod_disco)
); 

CREATE TABLE  grupo ( 
  cod     CHAR (3)  PRIMARY KEY,
  nombre  VARCHAR (30)  NOT NULL, 
  fecha  DATE, 
  pais    VARCHAR (10)
); 

CREATE TABLE  pertenece ( 
  dni      VARCHAR (10)  NOT NULL, 
  cod_gru   CHAR (3)      NOT NULL, 
  funcion  VARCHAR (15),
  PRIMARY KEY ( dni, cod_gru ) 
); 

ALTER TABLE  club ADD  CONSTRAINT clu_gru_fk
 FOREIGN KEY (cod_gru) 
  REFERENCES bdu05_musica.grupo(cod) ;

ALTER TABLE  disco ADD  CONSTRAINT dis_cod_c_fk
 FOREIGN KEY (cod_comp) 
  REFERENCES bdu05_musica.companya (cod) ;

ALTER TABLE  disco ADD  CONSTRAINT dis_cod_g_fk
 FOREIGN KEY (cod_gru) 
  REFERENCES bdu05_musica.grupo (cod) ;

ALTER TABLE esta ADD  CONSTRAINT est_can_fk
 FOREIGN KEY (cod_can) 
  REFERENCES bdu05_musica.cancion (cod) ;

ALTER TABLE esta ADD  CONSTRAINT est_dis_fk
 FOREIGN KEY (cod_disco) 
  REFERENCES bdu05_musica.disco (cod) ;

ALTER TABLE  pertenece ADD  CONSTRAINT per_dni_fk
 FOREIGN KEY (dni) 
  REFERENCES bdu05_musica.artista (dni) ;

ALTER TABLE  pertenece ADD  CONSTRAINT per_gru_fk
 FOREIGN KEY (cod_gru) 
  REFERENCES bdu05_musica.grupo (cod) ;
  


INSERT INTO companya  VALUES ( 
'1  ', 'Island', '67, JB St.', '     78782222', '     72724444'); 
INSERT INTO companya  VALUES ( 
'2  ', 'ARIOLA', 'Aragon 204', '    913667889', '    913667890'); 
INSERT INTO companya  VALUES ( 
'3  ', 'WEA', 'L Hoyos 42', '    932401212', '    932401213'); 
INSERT INTO companya VALUES ( 
'4  ', 'Virgin', '2,23th St.', '     20812445', '     20812446'); 
INSERT INTO companya VALUES ( 
'5  ', 'ATLANTIC', '12, E St.', '      5481223', '      5482312'); 
INSERT INTO companya VALUES ( 
'6  ', 'Poli discos', 'Cami de Vera', '      3870001', '      3870000'); 
INSERT INTO companya VALUES ( 
'7  ', 'Poli discos', 'Polynesia St.', '    942380540', '    942380522'); 

INSERT INTO cancion  VALUES ( 
1, '20th Century Promise', 4); 
INSERT INTO cancion   VALUES ( 
2, '37 grados', 4); 
INSERT INTO cancion   VALUES ( 
3, '4th of July', 3); 
INSERT INTO cancion   VALUES ( 
4, '7 Deadly Sins', 6); 
INSERT INTO cancion   VALUES ( 
5, 'A cara o cruz', 5); 
INSERT INTO cancion   VALUES ( 
6, 'A sort of homecoming', 3); 
INSERT INTO cancion   VALUES ( 
7, 'Afterglow', 4); 
INSERT INTO cancion   VALUES ( 
8, 'Al atardecer', 4); 
INSERT INTO cancion   VALUES ( 
9, 'Al sur', 3); 
INSERT INTO cancion   VALUES ( 
10, 'Alive And Kicking', 4); 
INSERT INTO cancion   VALUES ( 
11, 'All The things She..', 4); 
INSERT INTO cancion   VALUES ( 
12, 'Alma de blues', 4); 
INSERT INTO cancion   VALUES ( 
13, 'And The Band ...', 4); 
INSERT INTO cancion   VALUES ( 
14, 'Andas junto a mí', 3); 
INSERT INTO cancion   VALUES ( 
15, 'Annabel Lee', 3); 
INSERT INTO cancion   VALUES ( 
16, 'Anything she does', 3); 
INSERT INTO cancion   VALUES ( 
17, 'Artitoestoy', 4); 
INSERT INTO cancion   VALUES ( 
18, 'Asoma el llanto', 3); 
INSERT INTO cancion   VALUES ( 
19, 'Babyface', 4); 
INSERT INTO cancion   VALUES ( 
20, 'Bad', 2); 
INSERT INTO cancion   VALUES ( 
21, 'Barbara del campo', 4); 
INSERT INTO cancion   VALUES ( 
22, 'Beautiful day', 5); 
INSERT INTO cancion   VALUES ( 
23, 'Before', 4); 
INSERT INTO cancion   VALUES ( 
24, 'Black and blue', 3); 
INSERT INTO cancion   VALUES ( 
25, 'Blame', 4); 
INSERT INTO cancion   VALUES ( 
26, 'Book of Brilliant...', 5); 
INSERT INTO cancion   VALUES ( 
27, 'Brazilian', 4); 
INSERT INTO cancion   VALUES ( 
28, 'Cada historia', 3); 
INSERT INTO cancion   VALUES ( 
29, 'Can''t dance', 4); 
INSERT INTO cancion   VALUES ( 
30, 'Careful In Career', 4); 
INSERT INTO cancion   VALUES ( 
31, 'Carpet crawlers', 4); 
INSERT INTO cancion   VALUES ( 
32, 'Cinema show', 5); 
INSERT INTO cancion   VALUES ( 
33, 'Come A Long Way', 2); 
INSERT INTO cancion   VALUES ( 
34, 'Como hemos cambiado', 3); 
INSERT INTO cancion   VALUES ( 
35, 'Criminal World', 5); 
INSERT INTO cancion   VALUES ( 
36, 'Cuando quiero sol', 5); 
INSERT INTO cancion   VALUES ( 
37, 'Daddys Goma pay for', 5); 
INSERT INTO cancion   VALUES ( 
38, 'Dance on a volcano', 4); 
INSERT INTO cancion   VALUES ( 
39, 'De puntillas', 3); 
INSERT INTO cancion   VALUES ( 
40, 'De sol a sol', 4); 
INSERT INTO cancion   VALUES ( 
41, 'Dirty day', 5); 
INSERT INTO cancion   VALUES ( 
42, 'Domino', 5); 
INSERT INTO cancion   VALUES ( 
43, 'Don''t', 4); 
INSERT INTO cancion   VALUES ( 
44, 'Dreaming while ...', 4); 
INSERT INTO cancion   VALUES ( 
45, 'Driving the last...', 4); 
INSERT INTO cancion   VALUES ( 
46, 'E.de C. instrumental', 3); 
INSERT INTO cancion   VALUES ( 
47, 'East At Easter', 4); 
INSERT INTO cancion   VALUES ( 
48, 'El canto del gallo', 5); 
INSERT INTO cancion   VALUES ( 
49, 'El hombre de papel', 2); 
INSERT INTO cancion   VALUES ( 
50, 'El nadador', 3); 
INSERT INTO cancion   VALUES ( 
51, 'Elvis Presley & USA', 3); 
INSERT INTO cancion   VALUES ( 
52, 'En Portugal', 3); 
INSERT INTO cancion   VALUES ( 
53, 'En la oscuridad', 5); 
INSERT INTO cancion   VALUES ( 
54, 'En un baile de perro', 2); 
INSERT INTO cancion   VALUES ( 
55, 'Encadenada', 4); 
INSERT INTO cancion   VALUES ( 
56, 'Escuela de calor', 3); 
INSERT INTO cancion   VALUES ( 
57, 'Even Better Than...', 3); 
INSERT INTO cancion   VALUES ( 
58, 'Every body gets...', 5); 
INSERT INTO cancion   VALUES ( 
59, 'Fading lights', 5); 
INSERT INTO cancion   VALUES ( 
60, 'Fire', 4); 
INSERT INTO cancion   VALUES ( 
61, 'Firth of fith', 4); 
INSERT INTO cancion   VALUES ( 
62, 'Fly', 4); 
INSERT INTO cancion   VALUES ( 
63, 'Get up', 4); 
INSERT INTO cancion   VALUES ( 
64, 'Ghostdancing', 3); 
INSERT INTO cancion   VALUES ( 
65, 'Gloria', 3); 
INSERT INTO cancion   VALUES ( 
67, 'Great Leap Forward', 4); 
INSERT INTO cancion   VALUES ( 
68, 'Guitarra y voz', 1); 
INSERT INTO cancion   VALUES ( 
69, 'Hadaly', 3); 
INSERT INTO cancion   VALUES ( 
70, 'Hay algo raro...', 3); 
INSERT INTO cancion   VALUES ( 
71, 'Historia de playback', 3); 
INSERT INTO cancion   VALUES ( 
72, 'Hypnotised', 5); 
INSERT INTO cancion   VALUES ( 
73, 'I Fall Down', 4); 
INSERT INTO cancion   VALUES ( 
74, 'I Threw a Brick', 3); 
INSERT INTO cancion   VALUES ( 
75, 'I Wish You Were Here', 4); 
INSERT INTO cancion   VALUES ( 
76, 'I know what I like', 3); 
INSERT INTO cancion   VALUES ( 
77, 'Icaro', 3); 
INSERT INTO cancion   VALUES ( 
78, 'In the glow of night', 4); 
INSERT INTO cancion   VALUES ( 
79, 'In too deep', 4); 
INSERT INTO cancion   VALUES ( 
80, 'Indian summer sky', 4); 
INSERT INTO cancion   VALUES ( 
81, 'Invisible touch', 3); 
INSERT INTO cancion   VALUES ( 
82, 'Is That All', 3); 
INSERT INTO cancion   VALUES ( 
83, 'Jesus he knows me', 5); 
INSERT INTO cancion   VALUES ( 
84, 'La futura promesa', 3); 
INSERT INTO cancion   VALUES ( 
85, 'La ley', 4); 
INSERT INTO cancion   VALUES ( 
86, 'La mala hora', 3); 
INSERT INTO cancion   VALUES ( 
87, 'La negra flor', 5); 
INSERT INTO cancion   VALUES ( 
88, 'La noche', 2); 
INSERT INTO cancion   VALUES ( 
89, 'La secta del mar', 3); 
INSERT INTO cancion   VALUES ( 
90, 'Lamb lies down...', 5); 
INSERT INTO cancion   VALUES ( 
91, 'Land of confusion', 4); 
INSERT INTO cancion   VALUES ( 
92, 'League Of nations', 4); 
INSERT INTO cancion   VALUES ( 
93, 'Lemon', 6); 
INSERT INTO cancion   VALUES ( 
94, 'Let''s pretend...', 5); 
INSERT INTO cancion   VALUES ( 
95, 'Living forever', 4); 
INSERT INTO cancion   VALUES ( 
96, 'Living years', 4); 
INSERT INTO cancion   VALUES ( 
97, 'Llovió', 2); 
INSERT INTO cancion   VALUES ( 
98, 'Lluvia del porvenir', 3); 
INSERT INTO cancion   VALUES ( 
99, 'Los endos', 4); 
INSERT INTO cancion   VALUES ( 
100, 'Love is Blindness', 4); 
INSERT INTO cancion   VALUES ( 
101, 'Luna de agosto', 3); 
INSERT INTO cancion   VALUES ( 
102, 'MLK', 2); 
INSERT INTO cancion   VALUES ( 
103, 'Me das el mar', 3); 
INSERT INTO cancion   VALUES ( 
104, 'Mil mariposas', 3); 
INSERT INTO cancion   VALUES ( 
105, 'Moon Cry Like A Baby', 4); 
INSERT INTO cancion   VALUES ( 
106, 'Musical box', 4); 
INSERT INTO cancion   VALUES ( 
107, 'My Life', 4); 
INSERT INTO cancion   VALUES ( 
108, 'My crime of passion', 3); 
INSERT INTO cancion   VALUES ( 
109, 'Mysterious Ways', 4); 
INSERT INTO cancion   VALUES ( 
110, 'Nada tiene sentido', 3); 
INSERT INTO cancion   VALUES ( 
111, 'Never a time', 5); 
INSERT INTO cancion   VALUES ( 
112, 'Ni tu ni yo', 3); 
INSERT INTO cancion   VALUES ( 
113, 'Night Music', 4); 
INSERT INTO cancion   VALUES ( 
114, 'No hay humor', 3); 
INSERT INTO cancion   VALUES ( 
115, 'No hay palabras', 3); 
INSERT INTO cancion   VALUES ( 
116, 'No son of mine', 4); 
INSERT INTO cancion   VALUES ( 
117, 'Nobody knows', 3); 
INSERT INTO cancion   VALUES ( 
118, 'Nobody''s perfect', 3); 
INSERT INTO cancion   VALUES ( 
119, 'Numb', 4); 
INSERT INTO cancion   VALUES ( 
120, 'October', 3); 
INSERT INTO cancion   VALUES ( 
121, 'Oh Jungleland', 3); 
INSERT INTO cancion   VALUES ( 
122, 'Once Upon A Time', 4); 
INSERT INTO cancion   VALUES ( 
123, 'One', 4); 
INSERT INTO cancion   VALUES ( 
124, 'Oscuro affaire', 3); 
INSERT INTO cancion   VALUES ( 
125, 'Poor boy down', 2); 
INSERT INTO cancion   VALUES ( 
126, 'Price', 1); 
INSERT INTO cancion   VALUES ( 
127, 'Promenade', 3); 
INSERT INTO cancion   VALUES ( 
128, 'Recibes cartas', 3); 
INSERT INTO cancion   VALUES ( 
130, 'Rejoice', 4); 
INSERT INTO cancion   VALUES ( 
131, 'Rio Po', 4); 
INSERT INTO cancion   VALUES ( 
132, 'Robbery, assault...', 3); 
INSERT INTO cancion   VALUES ( 
133, 'Sanctify yourself', 4); 
INSERT INTO cancion   VALUES ( 
134, 'Scarlet', 4); 
INSERT INTO cancion   VALUES ( 
135, 'Sed de amor', 4); 
INSERT INTO cancion   VALUES ( 
136, 'Seeing is believing', 5); 
INSERT INTO cancion   VALUES ( 
137, 'Semilla negra', 4); 
INSERT INTO cancion   VALUES ( 
138, 'Sentir tu calor', 4); 
INSERT INTO cancion   VALUES ( 
139, 'Ser de agua', 3); 
INSERT INTO cancion   VALUES ( 
140, 'Shake Of The Ghosts', 3); 
INSERT INTO cancion   VALUES ( 
141, 'She''s A river', 3); 
INSERT INTO cancion   VALUES ( 
142, 'Since I lost you', 4); 
INSERT INTO cancion   VALUES ( 
143, 'So Cruel', 6); 
INSERT INTO cancion   VALUES ( 
144, 'Some days are better', 4); 
INSERT INTO cancion   VALUES ( 
145, 'Sound In 70 Cities', 4); 
INSERT INTO cancion   VALUES ( 
146, 'Speed Your Love...', 4); 
INSERT INTO cancion   VALUES ( 
147, 'Squok', 4); 
INSERT INTO cancion   VALUES ( 
148, 'Stay', 4); 
INSERT INTO cancion   VALUES ( 
149, 'Stop baby', 4); 
INSERT INTO cancion   VALUES ( 
150, 'Stranger in a Land', 4); 
INSERT INTO cancion   VALUES ( 
151, 'Street Hassle', 4); 
INSERT INTO cancion   VALUES ( 
152, 'Supper''s ready', 5); 
INSERT INTO cancion   VALUES ( 
153, 'Tell me why', 5); 
INSERT INTO cancion   VALUES ( 
154, 'The Kick Inside ofme', 4); 
INSERT INTO cancion   VALUES ( 
155, 'The american', 4); 
INSERT INTO cancion   VALUES ( 
156, 'The first time', 3); 
INSERT INTO cancion   VALUES ( 
157, 'The last domino', 5); 
INSERT INTO cancion   VALUES ( 
158, 'The unforgettable fi', 5); 
INSERT INTO cancion   VALUES ( 
159, 'The wanderer', 4); 
INSERT INTO cancion   VALUES ( 
160, 'Theme For Great city', 3); 
INSERT INTO cancion   VALUES ( 
161, 'This Time', 3); 
INSERT INTO cancion   VALUES ( 
162, 'Throwing it all away', 4); 
INSERT INTO cancion   VALUES ( 
163, 'Time and place', 4); 
INSERT INTO cancion   VALUES ( 
164, 'Tomorrow', 3); 
INSERT INTO cancion   VALUES ( 
165, 'Tonight, tonight...', 4); 
INSERT INTO cancion   VALUES ( 
166, 'Tormenta de arena', 4); 
INSERT INTO cancion   VALUES ( 
167, 'Tryin to Throw...', 4); 
INSERT INTO cancion   VALUES ( 
168, 'Ultra Violet', 5); 
INSERT INTO cancion   VALUES ( 
169, 'Un africano...', 3); 
INSERT INTO cancion   VALUES ( 
170, 'Until The end...', 5); 
INSERT INTO cancion   VALUES ( 
171, 'Up On The Catwalk', 4); 
INSERT INTO cancion   VALUES ( 
172, 'Volviendo a casa', 3); 
INSERT INTO cancion   VALUES ( 
173, 'Waterfront', 3); 
INSERT INTO cancion   VALUES ( 
174, 'Way of the world', 5); 
INSERT INTO cancion   VALUES ( 
175, 'Way you look at me', 3); 
INSERT INTO cancion   VALUES ( 
176, 'White Hot Day', 5); 
INSERT INTO cancion   VALUES ( 
177, 'Whos Gonna ride...', 5); 
INSERT INTO cancion   VALUES ( 
178, 'Why me?', 3); 
INSERT INTO cancion   VALUES ( 
179, 'Wire', 2); 
INSERT INTO cancion   VALUES ( 
180, 'With a Shout', 4); 
INSERT INTO cancion   VALUES ( 
181, 'Wonderful In Young', 5); 
INSERT INTO cancion   VALUES ( 
182, 'Word of mouth', 3); 
INSERT INTO cancion   VALUES ( 
183, 'Yesterday, today,..', 2); 
INSERT INTO cancion   VALUES ( 
184, 'Zoo Station', 4); 
INSERT INTO cancion   VALUES ( 
185, 'Zooropa', 6); 
INSERT INTO cancion   VALUES ( 
186, 'Hold on my heart', 4); 
commit;



INSERT INTO  artista   VALUES ( 
'1111111111', 'Adrian Lee'); 
INSERT INTO  artista   VALUES ( 
'1111111112', 'Adam Clayton'); 
INSERT INTO  artista   VALUES ( 
'1111111113', 'Bono'); 
INSERT INTO  artista   VALUES ( 
'1111111114', 'C. Burchill'); 
INSERT INTO  artista   VALUES ( 
'1111114444', 'Carlos Torero'); 
INSERT INTO  artista   VALUES ( 
'2345678444', 'Edge'); 
INSERT INTO  artista   VALUES ( 
'3232456547', 'Phil Collins'); 
INSERT INTO  artista   VALUES ( 
'3333567898', 'Santiago Auseron'); 
INSERT INTO  artista   VALUES ( 
'3454677777', 'Jim Kerr'); 
INSERT INTO  artista   VALUES ( 
'4444444444', 'Larry Jr.Mullen'); 
INSERT INTO  artista   VALUES ( 
'4454321111', 'Luis Auseron'); 
INSERT INTO  artista   VALUES ( 
'5454532222', 'Paul Young'); 
INSERT INTO  artista   VALUES ( 
'5555678976', 'Enrique Sierra'); 
INSERT INTO  artista   VALUES ( 
'5556787777', 'J.L. Giménez'); 
INSERT INTO  artista   VALUES ( 
'5656378999', 'Soledad Giménez'); 
INSERT INTO  artista   VALUES ( 
'6666667885', 'Nacho Maño'); 
INSERT INTO  artista   VALUES ( 
'7654323234', 'P. van Hooke'); 
INSERT INTO  artista   VALUES ( 
'7876543428', 'Tony Banks'); 
INSERT INTO  artista   VALUES ( 
'8884566666', 'M. Rutherford'); 
commit;



INSERT INTO  grupo   VALUES ( 
'1  ', 'U2',  STR_TO_DATE( '01/01/1977', '%d/%m/%Y'), 'Inglaterra'); 
INSERT INTO  grupo   VALUES ( 
'2  ', 'Simple Minds',  STR_TO_DATE( '02/09/1979', '%d/%m/%Y')
, 'Inglaterra'); 
INSERT INTO  grupo   VALUES ( 
'3  ', 'Mike + The Mechanics',  STR_TO_DATE( '04/06/1988', '%d/%m/%Y')
, 'Inglaterra'); 
INSERT INTO  grupo   VALUES ( 
'4  ', 'Genesis',  STR_TO_DATE( '10/10/1975', '%d/%m/%Y'), 'Inglaterra'); 
INSERT INTO  grupo   VALUES ( 
'5  ', 'Presuntos Implicados',  STR_TO_DATE( '11/01/1985', '%d/%m/%Y')
, 'España'); 
INSERT INTO  grupo   VALUES ( 
'6  ', 'Radio Futura',  STR_TO_DATE( '01/07/1980', '%d/%m/%Y')
, 'España'); 
commit;
 


INSERT INTO  club   VALUES ( 
'1  ', 'Zoomania', '33, Abbey Road', 2508, '1  '); 
INSERT INTO  club   VALUES ( 
'10 ', 'Machines', 'Calle 3, Lab 3', 7789, '3  '); 
INSERT INTO  club   VALUES ( 
'11 ', 'Jardin Botanico', '203,Valencia 46004', 357, '6  '); 
INSERT INTO  club   VALUES ( 
'12 ', 'Bonoculture', '12, East Av.', 129, '1  '); 
INSERT INTO  club   VALUES ( 
'13 ', 'Waterfront', 'C/Martin Blas 22', 234, '2  '); 
INSERT INTO  club   VALUES ( 
'14 ', 'FanMike', 'Beverly Hills 90210', 11, '3  '); 
INSERT INTO  club   VALUES ( 
'15 ', 'Presuntos', 'C/Albacete 12, bajo', 237, '5  '); 
INSERT INTO  club   VALUES ( 
'16 ', 'Implicado', 'Torrejon de Ardoz 12', 25, '5  '); 
INSERT INTO  club   VALUES ( 
'17 ', 'Los Culpables', 'C/Maria Cristina 67', 355, '5  '); 
INSERT INTO  club   VALUES ( 
'2  ', 'u2foryou', '23, 11th Street', 1700, '1  '); 
INSERT INTO  club   VALUES ( 
'3  ', 'Che U2', 'C/Almussafes 59', 239, '1  '); 
INSERT INTO  club   VALUES ( 
'4  ', 'Troglominds', 'C/Lepe 22', 999, '2  '); 
INSERT INTO  club   VALUES ( 
'5  ', 'Mentes Fuertes', 'Ramon y Cajal 14', 1984, '2  '); 
INSERT INTO  club   VALUES ( 
'6  ', 'The best mind', '24, Homeround', 1413, '2  '); 
INSERT INTO  club   VALUES ( 
'7  ', 'Genefans', 'C/Visitacion 34', 23412, '4  '); 
INSERT INTO  club   VALUES ( 
'8  ', 'Fanaticgens', 'Av. H. Dominicos 155', 12002, '4  '); 
INSERT INTO  club   VALUES ( 
'9  ', 'Futuristas', 'C/Alboraya 10', 9850, '6  '); 
commit;
  
 
 
 INSERT INTO  pertenece   VALUES ( 
'1111111111', '3  ', 'teclado'); 
INSERT INTO  pertenece   VALUES ( 
'1111111112', '1  ', 'bajo'); 
INSERT INTO  pertenece   VALUES ( 
'1111111113', '1  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'1111111114', '2  ', 'guitarra'); 
INSERT INTO  pertenece   VALUES ( 
'1111114444', '6  ', 'batería'); 
INSERT INTO  pertenece   VALUES ( 
'2345678444', '1  ', 'guitarra'); 
INSERT INTO  pertenece   VALUES ( 
'3232456547', '4  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'3333567898', '6  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'3454677777', '2  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'4444444444', '1  ', 'batería'); 
INSERT INTO  pertenece   VALUES ( 
'4454321111', '6  ', 'bajo'); 
INSERT INTO  pertenece   VALUES ( 
'5454532222', '3  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'5555678976', '6  ', 'guitarra'); 
INSERT INTO  pertenece   VALUES ( 
'5556787777', '5  ', 'guitarra'); 
INSERT INTO  pertenece   VALUES ( 
'5656378999', '5  ', 'voz'); 
INSERT INTO  pertenece   VALUES ( 
'6666667885', '5  ', 'bajo'); 
INSERT INTO  pertenece   VALUES ( 
'7654323234', '3  ', 'batería'); 
INSERT INTO  pertenece   VALUES ( 
'7876543428', '4  ', 'teclado'); 
INSERT INTO  pertenece   VALUES ( 
'8884566666', '3  ', 'bajo'); 
INSERT INTO  pertenece   VALUES ( 
'8884566666', '4  ', 'bajo'); 
commit;
 


INSERT INTO  disco VALUES ( 
'1  ', 'October',  STR_TO_DATE( '10/12/1981', '%d/%m/%Y'), '1  '
, '1  '); 
INSERT INTO  disco VALUES ( 
'10 ', 'Word of mouth',  STR_TO_DATE( '05/07/1991', '%d/%m/%Y')
, '5  ', '3  '); 
INSERT INTO  disco VALUES ( 
'11 ', 'We can''t dance',  STR_TO_DATE( '02/02/1991', '%d/%m/%Y')
, '5  ', '4  '); 
INSERT INTO  disco VALUES ( 
'12 ', 'Invisible touch',  STR_TO_DATE( '03/03/1986', '%d/%m/%Y')
, '5  ', '4  '); 
INSERT INTO  disco VALUES ( 
'13 ', 'Seconds out',  STR_TO_DATE( '08/08/1986', '%d/%m/%Y')
, '5  ', '4  '); 
INSERT INTO  disco VALUES ( 
'14 ', 'De sol a sol',  STR_TO_DATE( '01/08/1987', '%d/%m/%Y')
, '3  ', '5  '); 
INSERT INTO  disco VALUES ( 
'15 ', 'Ser de agua',  STR_TO_DATE( '02/05/1991', '%d/%m/%Y')
, '3  ', '5  '); 
INSERT INTO  disco VALUES ( 
'16 ', 'Alma de blues',  STR_TO_DATE( '02/03/1989', '%d/%m/%Y')
, '3  ', '5  '); 
INSERT INTO  disco VALUES ( 
'17 ', 'La ley del desierto',  STR_TO_DATE( '03/02/1984', '%d/%m/%Y')
, '2  ', '6  '); 
INSERT INTO  disco VALUES ( 
'18 ', 'La canción de Jperro',  STR_TO_DATE( '04/03/1987', '%d/%m/%Y')
, '2  ', '6  '); 
INSERT INTO  disco VALUES ( 
'2  ', 'Zooropa',  STR_TO_DATE( '08/10/1994', '%d/%m/%Y'), '1  '
, '1  '); 
INSERT INTO  disco VALUES ( 
'3  ', 'The unforgettable fi',  STR_TO_DATE( '03/07/1983', '%d/%m/%Y')
, '1  ', '1  '); 
INSERT INTO  disco VALUES ( 
'4  ', 'Achtung baby',  STR_TO_DATE( '12/09/1991', '%d/%m/%Y')
, '1  ', '1  '); 
INSERT INTO  disco VALUES ( 
'5  ', 'Once upon a time',  STR_TO_DATE( '10/10/1985', '%d/%m/%Y')
, '4  ', '2  '); 
INSERT INTO  disco VALUES ( 
'6  ', 'Good news F.N. world',  STR_TO_DATE( '11/12/1995', '%d/%m/%Y')
, '4  ', '2  '); 
INSERT INTO  disco VALUES ( 
'7  ', 'Sparkle in the rain',  STR_TO_DATE( '03/03/1984', '%d/%m/%Y')
, '4  ', '2  '); 
INSERT INTO  disco VALUES ( 
'8  ', 'Sister feelings call',  STR_TO_DATE( '03/04/1981', '%d/%m/%Y')
, '4  ', '2  '); 
INSERT INTO  disco VALUES ( 
'9  ', 'Living years',  STR_TO_DATE( '04/02/1988', '%d/%m/%Y')
, '5  ', '3  '); 

 
 INSERT INTO esta VALUES ( 
1, '8  '); 
INSERT INTO esta VALUES ( 
2, '18 '); 
INSERT INTO esta VALUES ( 
3, '3  '); 
INSERT INTO esta VALUES ( 
4, '6  '); 
INSERT INTO esta VALUES ( 
5, '18 '); 
INSERT INTO esta VALUES ( 
6, '3  '); 
INSERT INTO esta VALUES ( 
7, '13 '); 
INSERT INTO esta VALUES ( 
8, '15 '); 
INSERT INTO esta VALUES ( 
9, '14 '); 
INSERT INTO esta VALUES ( 
10, '5  '); 
INSERT INTO esta VALUES ( 
11, '5  '); 
INSERT INTO esta VALUES ( 
12, '16 '); 
INSERT INTO esta VALUES ( 
13, '6  '); 
INSERT INTO esta VALUES ( 
14, '15 '); 
INSERT INTO esta VALUES ( 
15, '18 '); 
INSERT INTO esta VALUES ( 
16, '12 '); 
INSERT INTO esta VALUES ( 
17, '4  '); 
INSERT INTO esta VALUES ( 
18, '16 '); 
INSERT INTO esta VALUES ( 
19, '2  '); 
INSERT INTO esta VALUES ( 
20, '3  '); 
INSERT INTO esta VALUES ( 
21, '15 '); 
INSERT INTO esta VALUES ( 
22, '9  '); 
INSERT INTO esta VALUES ( 
23, '10 '); 
INSERT INTO esta VALUES ( 
24, '9  '); 
INSERT INTO esta VALUES ( 
25, '9  '); 
INSERT INTO esta VALUES ( 
26, '7  '); 
INSERT INTO esta VALUES ( 
27, '12 '); 
INSERT INTO esta VALUES ( 
28, '16 '); 
INSERT INTO esta VALUES ( 
29, '11 '); 
INSERT INTO esta VALUES ( 
30, '8  '); 
INSERT INTO esta VALUES ( 
31, '13 '); 
INSERT INTO esta VALUES ( 
32, '13 '); 
INSERT INTO esta VALUES ( 
33, '5  '); 
INSERT INTO esta VALUES ( 
34, '15 '); 
INSERT INTO esta VALUES ( 
35, '6  '); 
INSERT INTO esta VALUES ( 
36, '15 '); 
INSERT INTO esta VALUES ( 
37, '2  '); 
INSERT INTO esta VALUES ( 
38, '13 '); 
INSERT INTO esta VALUES ( 
39, '15 '); 
INSERT INTO esta VALUES ( 
40, '14 '); #1. ¿Cuántos discos hay, muéstralo bajo una columna que se llame CANTIDAD?
select count(cod) as CANTIDAD
from disco;

#2. Selecciona el nombre de los grupos que no sean de España.
select nombre
from grupo 
where pais <> "España";

#3. Obtener el título de las canciones con más de 5 minutos de duración
select titulo as "TÍTULO"
from cancion
where duracion > 5;

#4. Según los datos en la base de datos, obtener la lista de las distintas funciones que se
#pueden realizar en un grupo.
select distinct funcion
 from pertenece;
 
 #5 Selecciona el nombre y la sede de los clubes de fans con más de 500 socios.
 select nombre, sede
 from club
 where num_fans > 500;

 #6.Obtener los nombres de grupos cuyo nombre conste sólo de una única palabra.
 select nombre  
 from grupo
 where nombre not like "% %";
INSERT INTO esta VALUES ( 
41, '2  '); 
INSERT INTO esta VALUES ( 
42, '12 '); 
INSERT INTO esta VALUES ( 
43, '9  '); 
INSERT INTO esta VALUES ( 
44, '11 '); 
INSERT INTO esta VALUES ( 
45, '11 '); 
INSERT INTO esta VALUES ( 
46, '17 '); 
INSERT INTO esta VALUES ( 
47, '7  '); 
INSERT INTO esta VALUES ( 
48, '18 '); 
INSERT INTO esta VALUES ( 
49, '18 '); 
INSERT INTO esta VALUES ( 
50, '17 '); 
INSERT INTO esta VALUES ( 
51, '3  '); 
INSERT INTO esta VALUES ( 
52, '17 '); 
INSERT INTO esta VALUES ( 
53, '14 '); 
INSERT INTO esta VALUES ( 
54, '18 '); 
INSERT INTO esta VALUES ( 
55, '16 '); 
INSERT INTO esta VALUES ( 
56, '17 '); 
INSERT INTO esta VALUES ( 
57, '4  '); 
INSERT INTO esta VALUES ( 
58, '10 '); 
INSERT INTO esta VALUES ( 
59, '11 '); 
INSERT INTO esta VALUES ( 
60, '1  '); 
INSERT INTO esta VALUES ( 
61, '13 '); 
INSERT INTO esta VALUES ( 
62, '4  '); 
INSERT INTO esta VALUES ( 
63, '10 '); 
INSERT INTO esta VALUES ( 
64, '5  '); 
INSERT INTO esta VALUES ( 
65, '1  '); 
INSERT INTO esta VALUES ( 
67, '6  '); 
INSERT INTO esta VALUES ( 
68, '16 '); 
INSERT INTO esta VALUES ( 
69, '17 '); 
INSERT INTO esta VALUES ( 
70, '14 '); 
INSERT INTO esta VALUES ( 
71, '17 '); 
INSERT INTO esta VALUES ( 
72, '6  '); 
INSERT INTO esta VALUES ( 
73, '1  '); 
INSERT INTO esta VALUES ( 
74, '1  '); 
INSERT INTO esta VALUES ( 
75, '5  '); 
INSERT INTO esta VALUES ( 
76, '13 '); 
INSERT INTO esta VALUES ( 
77, '15 '); 
INSERT INTO esta VALUES ( 
78, '12 '); 
INSERT INTO esta VALUES ( 
79, '12 '); 
INSERT INTO esta VALUES ( 
80, '3  '); 
INSERT INTO esta VALUES ( 
81, '12 '); 
INSERT INTO esta VALUES ( 
82, '1  '); 
INSERT INTO esta VALUES ( 
83, '11 '); 
INSERT INTO esta VALUES ( 
84, '16 '); 
INSERT INTO esta VALUES ( 
85, '17 '); 
INSERT INTO esta VALUES ( 
86, '18 '); 
INSERT INTO esta VALUES ( 
87, '18 '); 
INSERT INTO esta VALUES ( 
88, '16 '); 
INSERT INTO esta VALUES ( 
89, '17 '); 
INSERT INTO esta VALUES ( 
90, '13 '); 
INSERT INTO esta VALUES ( 
91, '12 '); 
INSERT INTO esta VALUES ( 
92, '8  '); 
INSERT INTO esta VALUES ( 
93, '2  '); 
INSERT INTO esta VALUES ( 
94, '10 '); 
INSERT INTO esta VALUES ( 
95, '11 '); 
INSERT INTO esta VALUES ( 
96, '9  '); 
INSERT INTO esta VALUES ( 
97, '15 '); 
INSERT INTO esta VALUES ( 
98, '18 '); 
INSERT INTO esta VALUES ( 
99, '13 '); 
INSERT INTO esta VALUES ( 
100, '4  '); 
INSERT INTO esta VALUES ( 
101, '18 '); 
INSERT INTO esta VALUES ( 
102, '3  '); 
INSERT INTO esta VALUES ( 
103, '16 '); 
INSERT INTO esta VALUES ( 
104, '15 '); 
INSERT INTO esta VALUES ( 
105, '7  '); 
INSERT INTO esta VALUES ( 
106, '13 '); 
INSERT INTO esta VALUES ( 
107, '6  '); 
INSERT INTO esta VALUES ( 
108, '10 '); 
INSERT INTO esta VALUES ( 
109, '4  '); 
INSERT INTO esta VALUES ( 
110, '14 '); 
INSERT INTO esta VALUES ( 
111, '11 '); 
INSERT INTO esta VALUES ( 
112, '14 '); 
INSERT INTO esta VALUES ( 
113, '6  '); 
INSERT INTO esta VALUES ( 
114, '16 '); 
INSERT INTO esta VALUES ( 
115, '16 '); 
INSERT INTO esta VALUES ( 
116, '11 '); 
INSERT INTO esta VALUES ( 
117, '9  '); 
INSERT INTO esta VALUES ( 
118, '9  '); 
INSERT INTO esta VALUES ( 
119, '2  '); 
INSERT INTO esta VALUES ( 
120, '1  '); 
INSERT INTO esta VALUES ( 
121, '5  '); 
INSERT INTO esta VALUES ( 
122, '5  '); 
INSERT INTO esta VALUES ( 
123, '4  '); 
INSERT INTO esta VALUES ( 
124, '17 '); 
INSERT INTO esta VALUES ( 
125, '9  '); 
INSERT INTO esta VALUES ( 
126, '3  '); 
INSERT INTO esta VALUES ( 
127, '3  '); 
INSERT INTO esta VALUES ( 
128, '15 '); 
INSERT INTO esta VALUES ( 
130, '1  '); 
INSERT INTO esta VALUES ( 
131, '16 '); 
INSERT INTO esta VALUES ( 
132, '13 '); 
INSERT INTO esta VALUES ( 
133, '5  '); 
INSERT INTO esta VALUES ( 
134, '1  '); 
INSERT INTO esta VALUES ( 
135, '14 '); 
INSERT INTO esta VALUES ( 
136, '9  '); 
INSERT INTO esta VALUES ( 
137, '17 '); 
INSERT INTO esta VALUES ( 
138, '15 '); 
INSERT INTO esta VALUES ( 
139, '15 '); 
INSERT INTO esta VALUES ( 
140, '7  '); 
INSERT INTO esta VALUES ( 
141, '6  '); 
INSERT INTO esta VALUES ( 
142, '11 '); 
INSERT INTO esta VALUES ( 
143, '4  '); 
INSERT INTO esta VALUES ( 
144, '2  '); 
INSERT INTO esta VALUES ( 
145, '8  '); 
INSERT INTO esta VALUES ( 
146, '7  '); 
INSERT INTO esta VALUES ( 
147, '13 '); 
INSERT INTO esta VALUES ( 
148, '2  '); 
INSERT INTO esta VALUES ( 
149, '10 '); 
INSERT INTO esta VALUES ( 
150, '1  '); 
INSERT INTO esta VALUES ( 
151, '7  '); 
INSERT INTO esta VALUES ( 
152, '13 '); 
INSERT INTO esta VALUES ( 
153, '11 '); 
INSERT INTO esta VALUES ( 
154, '7  '); 
INSERT INTO esta VALUES ( 
155, '8  '); 
INSERT INTO esta VALUES ( 
156, '2  '); 
INSERT INTO esta VALUES ( 
157, '12 '); 
INSERT INTO esta VALUES ( 
158, '3  '); 
INSERT INTO esta VALUES ( 
159, '2  '); 
INSERT INTO esta VALUES ( 
160, '8  '); 
INSERT INTO esta VALUES ( 
161, '6  '); 
INSERT INTO esta VALUES ( 
162, '12 '); 
INSERT INTO esta VALUES ( 
163, '10 '); 
INSERT INTO esta VALUES ( 
164, '1  '); 
INSERT INTO esta VALUES ( 
165, '12 '); 
INSERT INTO esta VALUES ( 
166, '17 '); 
INSERT INTO esta VALUES ( 
167, '4  '); 
INSERT INTO esta VALUES ( 
168, '4  '); 
INSERT INTO esta VALUES ( 
169, '17 '); 
INSERT INTO esta VALUES ( 
170, '4  '); 
INSERT INTO esta VALUES ( 
171, '7  '); 
INSERT INTO esta VALUES ( 
172, '14 '); 
INSERT INTO esta VALUES ( 
173, '7  '); 
INSERT INTO esta VALUES ( 
174, '11 '); 
INSERT INTO esta VALUES ( 
175, '10 '); 
INSERT INTO esta VALUES ( 
176, '7  '); 
INSERT INTO esta VALUES ( 
177, '4  '); 
INSERT INTO esta VALUES ( 
178, '9  '); 
INSERT INTO esta VALUES ( 
179, '3  '); 
INSERT INTO esta VALUES ( 
180, '1  '); 
INSERT INTO esta VALUES ( 
181, '8  '); 
INSERT INTO esta VALUES ( 
182, '10 '); 
INSERT INTO esta VALUES ( 
183, '10 '); 
INSERT INTO esta VALUES ( 
184, '4  '); 
INSERT INTO esta VALUES ( 
185, '2  '); 
INSERT INTO esta VALUES ( 
186, '11 '); 
commit;
 
 
 #1. ¿Cuántos discos hay, muéstralo bajo una columna que se llame CANTIDAD?
select count(cod) as CANTIDAD
from disco;

#2. Selecciona el nombre de los grupos que no sean de España.
select nombre
from grupo 
where pais <> "España";

#3. Obtener el título de las canciones con más de 5 minutos de duración
select titulo as "TÍTULO"
from cancion
where duracion > 5;

#4. Según los datos en la base de datos, obtener la lista de las distintas funciones que se
#pueden realizar en un grupo.
select distinct funcion
 from pertenece;
 
 #5 Selecciona el nombre y la sede de los clubes de fans con más de 500 socios.
 select nombre, sede
 from club
 where num_fans > 500;

 #6.Obtener los nombres de grupos cuyo nombre conste sólo de una única palabra.
 select nombre  
 from grupo
 where nombre not like "% %";
 
-- 1.1 Consulta
-- Obtener los nombres de las canciones que dan nombre al disco en el que aparecen.
SELECT c.titulo,d.nombre
FROM cancion c INNER JOIN esta e ON c.cod=e.cod_can
INNER JOIN disco d ON e.cod_disco =d.cod
WHERE c.titulo = d.nombre;


-- 1.2 Consulta
-- Obtener el nombre y la sede de cada club de fans de grupos de España así como el
-- nombre del grupo al que admiran.
select distinct c.nombre, c.sede, g.nombre
FROM club c INNER JOIN grupo g ON c.cod_gru = g.cod
WHERE g.pais ="España";

-- 1.3 Consulta
-- Obtener el nombre de los artistas que pertenezcan a un grupo de España.
SELECT distinct a.nombre
FROM artista a, pertenece p, grupo g
WHERE a.dni = p.dni AND
g.cod = p.cod_gru AND
g.pais ="España";

-- 1.15
-- cuantos fans tiene cada artista en total
select a.nombre, sum(c.num_fans)
from artista a inner join pertenece p on a.dni = p.dni
				inner join grupo g on g.cod = p.doc_gru
				inner join club c on c.cod_gru = g.cod
group by a.nombre;

-- 1.17
-- Obtén todos los grupos junto a sus artistas. 
-- Además, muestra también los artistas que no pertenecen a ningun grupo 
-- y señala los grupos que no tienen artistas asosciados




-- las canciones de más de 2 minutos añadeles un minuto mas
update cancion
set duracion =duracion+1
where duracion>2;

-- artistas que empiecen por a poner una h delante
update artista 
set nombre = concat("h",nombre)
where nombre like "a%" or nombre like "A%";
select * from artista;

-- inserta la cancion vamos a la playa que dura 3 minutos del grupo escarabajos
insert into cancion values (
187, "vamos a la playa", 3);
insert into grupo values (
7, "los escarabajos", null, null);
insert into producto values ("nose", "nikitamarikita", 23.78);



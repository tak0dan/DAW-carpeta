-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2012 a las 16:15:47
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `institut`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumne`
--

CREATE TABLE IF NOT EXISTS `alumne` (
  `id_alumne` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `adreça` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `grup` int(11) NOT NULL,
  PRIMARY KEY (`id_alumne`),
  KEY `grup` (`grup`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `alumne`
--

INSERT INTO `alumne` (`id_alumne`, `nom`, `adreça`, `grup`) VALUES
(6, 'lluis', 'c/25', 1),
(7, 'albert', 'c/30', 1),
(8, 'lluis', 'c/25', 1),
(9, 'albert', 'c/30', 1),
(10, 'rosa', 'c/30', 2),
(11, 'ana', 'c/45', 2),
(12, 'pere', 'C/80', 2),
(13, 'Carme', 'C/40', 2),
(14, 'Aitana', 'c/10', 1),
(15, 'Manel', 'C/29', 2),
(16, 'Roger', 'C/vic', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assig-profe`
--

CREATE TABLE IF NOT EXISTS `assig-profe` (
  `id_assig` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL,
  `data_hora` date NOT NULL,
  PRIMARY KEY (`id_assig`,`id_professor`),
  KEY `id_professor` (`id_professor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assignatura`
--

CREATE TABLE IF NOT EXISTS `assignatura` (
  `id_assignatura` int(11) NOT NULL AUTO_INCREMENT,
  `descripció` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id_assignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departament`
--

CREATE TABLE IF NOT EXISTS `departament` (
  `id_departament` int(11) NOT NULL AUTO_INCREMENT,
  `descripció` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id_departament`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grup`
--

CREATE TABLE IF NOT EXISTS `grup` (
  `id_grup` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `aula` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id_grup`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `grup`
--

INSERT INTO `grup` (`id_grup`, `nom`, `aula`) VALUES
(1, '1daw', '2.12'),
(2, '2daw', '2.5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `id_alumne` int(11) NOT NULL,
  `id_assignatura` int(11) NOT NULL,
  `aval1` int(11) NOT NULL,
  `aval2` int(11) NOT NULL,
  PRIMARY KEY (`id_alumne`,`id_assignatura`),
  KEY `id_assignatura` (`id_assignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `professor`
--

CREATE TABLE IF NOT EXISTS `professor` (
  `id_professor` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `adreça` varchar(150) COLLATE latin1_spanish_ci NOT NULL,
  `departament` int(11) NOT NULL,
  PRIMARY KEY (`id_professor`),
  KEY `departament` (`departament`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=1 ;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumne`
--
ALTER TABLE `alumne`
  ADD CONSTRAINT `alumne_ibfk_1` FOREIGN KEY (`grup`) REFERENCES `grup` (`id_grup`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `assig-profe`
--
ALTER TABLE `assig-profe`
  ADD CONSTRAINT `assig@002dprofe_ibfk_1` FOREIGN KEY (`id_assig`) REFERENCES `assignatura` (`id_assignatura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assig@002dprofe_ibfk_2` FOREIGN KEY (`id_professor`) REFERENCES `professor` (`id_professor`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`id_alumne`) REFERENCES `alumne` (`id_alumne`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_ibfk_2` FOREIGN KEY (`id_assignatura`) REFERENCES `assignatura` (`id_assignatura`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `professor`
--
ALTER TABLE `professor`
  ADD CONSTRAINT `professor_ibfk_1` FOREIGN KEY (`departament`) REFERENCES `departament` (`id_departament`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

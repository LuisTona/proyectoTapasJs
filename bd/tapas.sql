-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-01-2025 a las 17:57:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tapleon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tapas`
--

CREATE TABLE `tapas` (
  `id_tapa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `ingredientes` text DEFAULT NULL,
  `bar` int(11) DEFAULT NULL,
  `foto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tapas`
--

INSERT INTO `tapas` (`id_tapa`, `nombre`, `descripcion`, `ingredientes`, `bar`, `foto`) VALUES
(2, 'Tortilla de Patata', 'Tradicional tortilla española elaborada con huevos, patatas y cebolla.', 'Huevos, patatas, cebolla, sal', 2, './fotosUsuario/1737981185zoom-ed33006354886cff3b7d7b01d3629fb7-920-518.jpg'),
(3, 'Calamares Fritos', 'Anillas de calamar rebozadas y fritas, servidas con un toque de limón.', 'Calamares, harina, limón', 3, './fotosUsuario/1737981367calamari-ring-600x400.jpg'),
(4, 'Figón', 'Una combinación sabrosa de carne de cerdo, pan y verduras como cebolla y pimientos.', 'Carne de cerdo, pan, cebolla, pimientos', 4, './fotosUsuario/1737981403090520121039-600x400.jpg'),
(5, 'Morcilla de León', 'Una especialidad a base de morcilla, cebolla y pan con un sabor intenso y característico.', 'Mejillones, salsa picante, ajo', 5, './fotosUsuario/1737989280ganadores-mejor-tapa-de-morcilla-1.jpg'),
(6, 'Mejillones Picantes', 'Mejillones cocidos en una salsa picante con ajo que realza su sabor.', 'Mejillones, salsa picante, ajo', 6, './fotosUsuario/1737989340images.jpeg'),
(7, 'Cecina y Queso', 'Finas lonchas de cecina combinadas con queso de cabra y un toque de aceite de oliva.', 'Cecina, queso de cabra, aceite de oliva', 7, './fotosUsuario/1737989423pincho-de-cecina-y-queso-78-80-ud-aproximadas_Id-11436-600x400.jpg'),
(8, 'Chorizo a la Sidra', 'Chorizo cocido en sidra, una receta típica y llena de sabor asturiano.', 'Chorizo, sidra', 8, './fotosUsuario/1737989467Chorizo-a-la-sidra-1-600x400.webp'),
(9, 'Jamón Asado', 'Jugoso jamón cocido al horno con ajo y sal, perfecto para disfrutar con pan.', 'Jamón, sal, ajo', 1, './fotosUsuario/1737981138pincho_cerdo_adobado-scaled.jpg'),
(10, 'Pulpo a la Gallega', 'Pulpo cocido servido con pimentón, aceite de oliva y un toque de sal gruesa.', 'Pulpo, pimentón, sal, aceite de oliva', 2, './fotosUsuario/1737981253Pulpo-a-la-gallega-x400.jpg'),
(11, 'Ensalada de Pimientos', 'Pimientos asados acompañados de ajo y un chorrito de aceite de oliva.', 'Pimientos, aceite de oliva, ajo', 3, './fotosUsuario/1737981385B69F94DB-16FA-4622-9229-5490E51EFA3F-600x400.jpg'),
(12, 'Croquetas Caseras', 'Croquetas crujientes por fuera y cremosas por dentro, rellenas de jamón.', 'Leche, harina, jamón', 4, './fotosUsuario/1737981486bowl-with-croquettes-napkin-defused-background-600x400.jpg'),
(13, 'Bocadillo de Lomo', 'Un bocadillo sencillo pero delicioso de lomo de cerdo, pan y pimientos.', 'Lomo, pan, pimientos', 5, './fotosUsuario/1737989313bocadillo-de-lomo-con-pimientos-11-600x400.jpg'),
(14, 'Ensaladilla Rusa', 'Una ensalada fría de patata, mayonesa, atún y guisantes, perfecta como tapa.', 'Patata, mayonesa, atún, guisantes', 6, './fotosUsuario/1737989404mayyonaise-vegetable-salad-salted-tasty-inside-white-plate-along-with-bread-loafs-fork-daytime-600x400.jpg'),
(15, 'Montadito de Salchichón', 'Pequeño bocadillo con salchichón, pan y queso, ideal para picar.', 'Salchichón, pan, queso', 7, './fotosUsuario/1737989448Montadito_de_Salchichon_de_Lomo-600x400.jpg'),
(16, 'Pincho Moruno', 'Brochetas de carne de cordero marinada con especias, asadas a la parrilla.', 'Carne de cordero, especias', 8, './fotosUsuario/1737828849maxresdefault.jpg'),
(17, ' Patatas Bravas', ' Trozos de patatas fritas acompañadas de una salsa brava ligeramente picante y ajo, con un toque de ', 'Patatas, salsa brava, ajo, pimentón', 1, './fotosUsuario/1737981202patatas-bravas-2.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tapas`
--
ALTER TABLE `tapas`
  ADD PRIMARY KEY (`id_tapa`),
  ADD KEY `bar` (`bar`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tapas`
--
ALTER TABLE `tapas`
  MODIFY `id_tapa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tapas`
--
ALTER TABLE `tapas`
  ADD CONSTRAINT `tapas_ibfk_1` FOREIGN KEY (`bar`) REFERENCES `bares` (`id_bar`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

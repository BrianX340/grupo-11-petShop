-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2021 a las 04:40:43
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `petshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `cp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `address`
--

INSERT INTO `address` (`id`, `address`, `city`, `state`, `country`, `cp`) VALUES
(1, '', '', '', '', 0),
(2, '', '', '', '', 0),
(3, '', '', '', '', 0),
(4, '', '', '', '', 0),
(5, '', '', '', '', 0),
(6, '', '', '', '', 0),
(7, '', '', '', '', 0),
(8, '', '', '', '', 0),
(9, '', '', '', '', 0),
(10, '', '', '', '', 0),
(11, '', '', '', '', 0),
(12, '', '', '', '', 0),
(13, '', '', '', '', 0),
(14, '', '', '', '', 0),
(15, '', '', '', '', 0),
(16, '', '', '', '', 0),
(17, '', '', '', '', 0),
(18, '', '', '', '', 0),
(19, '', '', '', '', 0),
(20, '', '', '', '', 0),
(21, '', '', '', '', 0),
(22, '', '', '', '', 0),
(23, '', '', '', '', 0),
(24, '', '', '', '', 0),
(25, '', '', '', '', 0),
(26, '', '', '', '', 0),
(27, '', '', '', '', 0),
(28, '', '', '', '', 0),
(29, '', '', '', '', 0),
(30, '', '', '', '', 0),
(31, '', '', '', '', 0),
(32, '', '', '', '', 0),
(33, '', '', '', '', 0),
(34, '', '', '', '', 0),
(35, '', '', '', '', 0),
(36, 'Peru', 'Presidente Derqui', 'Buenos Aires', 'Argentina', 1635);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avatars`
--

CREATE TABLE `avatars` (
  `id` int(11) NOT NULL,
  `path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `avatars`
--

INSERT INTO `avatars` (`id`, `path`) VALUES
(1, 'c01.svg'),
(2, 'c02.svg'),
(3, 'c03.svg'),
(4, 'd01.svg'),
(5, 'd02.svg'),
(6, 'd03.svg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Gato'),
(2, 'Perro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `buyPrice` float DEFAULT NULL,
  `sellPrice` float DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `valoration` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `barcode` int(11) DEFAULT NULL,
  `imgPath` varchar(255) DEFAULT NULL,
  `totalSells` int(11) DEFAULT NULL,
  `totalViews` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `subCategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `buyPrice`, `sellPrice`, `discount`, `valoration`, `stock`, `description`, `barcode`, `imgPath`, `totalSells`, `totalViews`, `categoryId`, `subCategoryId`) VALUES
(1, 'Brian', 11, 22, 12, 3, 10, 'comi comi dasa', 122333, '1634435036909_img_.jpg', 0, 0, 1, 2),
(6, 'Comida para perrrooo', 11, 22, 33, 4, 22, 'qweasd', 1234, '1634438171830_img_.jpg', 0, 0, 1, 3),
(7, 'MeoHui Juguetes de plumas de gato interactivos', 5519, 4426, NULL, 2, 154, 'Juguete interactivo clásico para gatos: esta varita de juguete interactiva ayudará a tus gatos de interior a voltear, saltar, perseguir. Gran manera de sacar la energía de tus gatos y hacer más ejercicio, haciendo que tu gato sea liberado y feliz. Adecuad', 2147483647, 'jugueteGato3.jpg', 0, 0, 1, 3),
(8, 'Vet\'s Best Gel de pasta dental enzimática para perros', 6480, 5024, 82, 2, 62, 'Proporcione el mejor cuidado dental para su perro con el mejor kit completo de cepillo de dientes y gel enzimático para el cuidado dental de Vet. Nuestra pasta de dientes formulada por veterinarios contiene enzimas e ingredientes naturales (que incluyen a', 2147483647, 'higienePerro4.jpg', 0, 0, 2, 2),
(9, 'Cama estilo cojín, redonda para gatos ', 4256, 5669, NULL, 1, 127, 'En la cabina de Love, nos esforzamos por proporcionar productos funcionales de gama alta a nuestros amigos esponjosos. Estamos orgullosos de presentar la cama para mascotas de la cabaña del amor, porque tu mascota merece una buena noche de sueño. El lema ', 478783302, 'camaGato5.jpg', 0, 0, 1, 4),
(10, 'Mentas dentales para gatos, kit dental para gatos', 4968, 7668, NULL, 1, 144, 'Limpia los dientes de tu gato con el nombre en el que confías. La pasta dental de cuidado avanzado Arm & Hammer está formulada con bicarbonato de sodio, que se disuelve en partículas finas, lo que resulta en una limpieza más profunda. Los ingredientes nat', 2147483647, 'higieneGato2.jpg', 0, 0, 1, 2),
(11, 'Meow Mix Original Choice Dry Cat Food', 3459, 1924, 24, 3, 65, 'Con los deliciosos sabores de pollo, pavo, salmón y pescado del océano, los gatos piden Meow Mix Original Choice comida para gatos por su nombre. Es la mezcla perfecta para ayudarte a conectar con tu gato a través de una comida saludable. Nutrición 100% c', 2147483647, 'alimentoGato1.jpg', 0, 0, 1, 1),
(12, 'Fancy Feast', 947, 9607, NULL, 2, 4, 'Alimenta a tu gato nutritivas y deliciosas comidas que deleiten sus sentidos con la comida húmeda de Purina Fancy Feast Classic Paté. Cada variedad suministra una nutrición 100% completa y equilibrada con vitaminas y minerales esenciales para apoyar su sa', 2147483647, 'alimentoGato6.jpg', 0, 0, 1, 1),
(13, 'Zesty Paws Suplemento inmune para perros con Omega 3 Wild Alaska Salmon Fish Oil & EpiCor + Prebióticos Digestivos y Probióticos', 4135, 7295, 37, 4, 105, 'Si la piel, los factores estacionales o ambientales le están dando a su perro un tiempo difícil, las mordeduras de Aller-Immune de Zesty Paws pueden ser capaces de ayudar apoyando la actividad inmune, histamina y digestiva para su amigo peludo.', 2147483647, 'higienePerro7.jpg', 0, 0, 2, 2),
(14, 'Tempcore Cama de gato para gatos de interior', 5191, 5249, NULL, 3, 265, 'Privacidad y comodidad: la cama para gatos TEMPCORE le da a tus amigos peludos algo de privacidad. Se sienten seguros y protegidos, mejorando su comodidad general. Debido a que tiene una entrada ancha con capucha, que los mantiene cómodos, frescos y trans', 2147483647, 'camaGato9.jpg', 0, 0, 1, 4),
(15, 'Arm & Hammer Kit de Tartar Control para perros', 472, 1047, 71, 3, 104, 'El nombre Arm & Hammer es sinónimo de salud dental y es exactamente por eso que se ha convertido en una marca dental líder en el espacio para mascotas con una amplia variedad de productos con el objetivo de facilitar el cuidado de sus compañeros caninos.', 2147483647, 'higienePerro8.jpg', 0, 0, 2, 2),
(16, 'Pedigree Comida seca para perros para adultos, sabor a pollo', 6102, 9819, NULL, 2, 221, 'Cada perro se merece lo mejor ... es por eso que PEDIGREE Complete Nutrition Dry Dog Food ofrece una nutrición 100% completa y equilibrada para su perro adulto. Tiene los antioxidantes, vitaminas y minerales que los caninos necesitan para ayudar a mantene', 1124755411, 'alimentoPerro10.jpg', 0, 0, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`) VALUES
(1, 'Alimentos'),
(2, 'Higiene'),
(3, 'Juguetes'),
(4, 'Camas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `tel` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `avatarId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `lastName`, `email`, `pass`, `role`, `tel`, `addressId`, `avatarId`) VALUES
(1, 'admin', NULL, 'admin@admin.com', '$2a$10$BNwOOwp.nvqO.CtHyFyA1uU2rGjSkJj0qS.IRw2xlTqW5S0lZdG9O', 0, NULL, NULL, NULL),
(37, 'Brian Rodriguez', 'Rodriguez', 'brianx340@gmail.com', '$2a$10$3x9.H8FFYqH48qeLFTXBfeqDIQnQ1unl6n3GHWsB.eRsBnInQV4zG', 1, 1134489022, 36, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `avatars`
--
ALTER TABLE `avatars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2b8fa4d0-899e-4a47-b856-0b97d43636b4` (`categoryId`),
  ADD KEY `FK_8f10db6b-567d-4e1e-ad4d-49699c8c02da` (`subCategoryId`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_518d99fb-cc12-4cf5-9b65-25ab0daa55f2` (`addressId`),
  ADD KEY `FK_ee352057-c5a3-4367-b0f3-2b529a7e3ca0` (`avatarId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `avatars`
--
ALTER TABLE `avatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_2b8fa4d0-899e-4a47-b856-0b97d43636b4` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_8f10db6b-567d-4e1e-ad4d-49699c8c02da` FOREIGN KEY (`subCategoryId`) REFERENCES `subcategories` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_518d99fb-cc12-4cf5-9b65-25ab0daa55f2` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `FK_ee352057-c5a3-4367-b0f3-2b529a7e3ca0` FOREIGN KEY (`avatarId`) REFERENCES `avatars` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

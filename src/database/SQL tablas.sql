DROP DATABASE IF EXISTS `petshop`;

CREATE DATABASE  IF NOT EXISTS `petshop` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `petshop`;

CREATE TABLE `Address` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `address` VARCHAR(255),
   `city` VARCHAR(255),
   `state` VARCHAR(255),
   `country` VARCHAR(255),
   `cp` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Avatars` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `path` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   `lastName` VARCHAR(255),
   `email` VARCHAR(255),
   `pass` VARCHAR(255),
   `role` INT,
   `tel` INT,
   `addressId` INT,
   `avatarId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Product` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   `buyPrice` FLOAT,
   `sellPrice` FLOAT,
   `discount` INT,
   `valoration` INT,
   `stock` INT,
   `description` VARCHAR(255),
   `barcode` INT,
   `imgPath` VARCHAR(255),
   `totalSells` INT,
   `totalViews` INT,
   `categoryId` INT,
   `subCategoryId` INT,
   `isNews` INT,
   `isInPromotion` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `SubCategories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `Favorites` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `productId` INT,
   `userId` INT,
   PRIMARY KEY (`id`)
);



ALTER TABLE `User` ADD CONSTRAINT `FK_518d99fb-cc12-4cf5-9b65-25ab0daa55f2` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_ee352057-c5a3-4367-b0f3-2b529a7e3ca0` FOREIGN KEY (`avatarId`) REFERENCES `Avatars`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_2b8fa4d0-899e-4a47-b856-0b97d43636b4` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_8f10db6b-567d-4e1e-ad4d-49699c8c02da` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategories`(`id`);


INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'c01.svg');
INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'c02.svg');
INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'c03.svg');
INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'd01.svg');
INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'd02.svg');
INSERT INTO `avatars` (`id`, `path`) VALUES (NULL, 'd03.svg');

INSERT INTO `categories` (`id`, `name`) VALUES ('1', 'Gato');
INSERT INTO `categories` (`id`, `name`) VALUES ('2', 'Perro');

INSERT INTO `subcategories` (`id`, `name`) VALUES ('1', 'Alimentos');
INSERT INTO `subcategories` (`id`, `name`) VALUES ('2', 'Higiene');
INSERT INTO `subcategories` (`id`, `name`) VALUES ('3', 'Juguetes');
INSERT INTO `subcategories` (`id`, `name`) VALUES ('4', 'Camas');

INSERT INTO `user` (`id`, `name`, `lastName`, `email`, `pass`, `role`) VALUES ('1', 'admin', NULL, 'admin@admin.com', '$2a$10$BNwOOwp.nvqO.CtHyFyA1uU2rGjSkJj0qS.IRw2xlTqW5S0lZdG9O', '0');

INSERT INTO `product` (`id`, `name`, `buyPrice`, `sellPrice`, `discount`, `valoration`, `stock`, `description`, `barcode`, `imgPath`, `totalSells`, `totalViews`, `categoryId`, `subCategoryId`, `isNews`, `isInPromotion`) VALUES
(6, 'Comida para perrrooo', 11, 22, 33, 4, 22, 'qweasd', 1234, '1634438171830_img_.jpg', 0, 0, 1, 3, 0, 0),
(7, 'MeoHui Juguetes de plumas de gato interactivos', 5519, 4426, NULL, 2, 154, 'Juguete interactivo clásico para gatos: esta varita de juguete interactiva ayudará a tus gatos de interior a voltear, saltar, perseguir. Gran manera de sacar la energía de tus gatos y hacer más ejercicio, haciendo que tu gato sea liberado y feliz. Adecuad', 2147483647, 'jugueteGato3.jpg', 0, 0, 1, 3, 0, 0),
(8, 'Vet\'s Best Gel de pasta dental enzimática para perros', 6480, 5024, 82, 2, 62, 'Proporcione el mejor cuidado dental para su perro con el mejor kit completo de cepillo de dientes y gel enzimático para el cuidado dental de Vet. Nuestra pasta de dientes formulada por veterinarios contiene enzimas e ingredientes naturales (que incluyen a', 2147483647, 'higienePerro4.jpg', 0, 0, 2, 2, 0, 0),
(9, 'Cama estilo cojín, redonda para gatos ', 4256, 5669, NULL, 1, 127, 'En la cabina de Love, nos esforzamos por proporcionar productos funcionales de gama alta a nuestros amigos esponjosos. Estamos orgullosos de presentar la cama para mascotas de la cabaña del amor, porque tu mascota merece una buena noche de sueño. El lema ', 478783302, 'camaGato5.jpg', 0, 0, 1, 4, 0, 0),
(10, 'Mentas dentales para gatos, kit dental para gatos', 4968, 7668, NULL, 1, 144, 'Limpia los dientes de tu gato con el nombre en el que confías. La pasta dental de cuidado avanzado Arm & Hammer está formulada con bicarbonato de sodio, que se disuelve en partículas finas, lo que resulta en una limpieza más profunda. Los ingredientes nat', 2147483647, 'higieneGato2.jpg', 0, 0, 1, 2, 0, 0),
(11, 'Meow Mix Original Choice Dry Cat Food', 3459, 1924, 24, 3, 65, 'Con los deliciosos sabores de pollo, pavo, salmón y pescado del océano, los gatos piden Meow Mix Original Choice comida para gatos por su nombre. Es la mezcla perfecta para ayudarte a conectar con tu gato a través de una comida saludable. Nutrición 100% c', 2147483647, 'alimentoGato1.jpg', 0, 0, 1, 1, 0, 0),
(12, 'Fancy Feast', 947, 9607, NULL, 2, 4, 'Alimenta a tu gato nutritivas y deliciosas comidas que deleiten sus sentidos con la comida húmeda de Purina Fancy Feast Classic Paté. Cada variedad suministra una nutrición 100% completa y equilibrada con vitaminas y minerales esenciales para apoyar su sa', 2147483647, 'alimentoGato6.jpg', 0, 0, 1, 1, 0, 0),
(13, 'Zesty Paws Suplemento inmune para perros con Omega 3 Wild Alaska Salmon Fish Oil & EpiCor + Prebióticos Digestivos y Probióticos', 4135, 7295, 37, 4, 105, 'Si la piel, los factores estacionales o ambientales le están dando a su perro un tiempo difícil, las mordeduras de Aller-Immune de Zesty Paws pueden ser capaces de ayudar apoyando la actividad inmune, histamina y digestiva para su amigo peludo.', 2147483647, 'higienePerro7.jpg', 0, 0, 2, 2, 0, 0),
(14, 'Tempcore Cama de gato para gatos de interior', 5191, 5249, NULL, 3, 265, 'Privacidad y comodidad: la cama para gatos TEMPCORE le da a tus amigos peludos algo de privacidad. Se sienten seguros y protegidos, mejorando su comodidad general. Debido a que tiene una entrada ancha con capucha, que los mantiene cómodos, frescos y trans', 2147483647, 'camaGato9.jpg', 0, 0, 1, 4, 0, 0),
(15, 'Arm & Hammer Kit de Tartar Control para perros', 472, 1047, 71, 3, 104, 'El nombre Arm & Hammer es sinónimo de salud dental y es exactamente por eso que se ha convertido en una marca dental líder en el espacio para mascotas con una amplia variedad de productos con el objetivo de facilitar el cuidado de sus compañeros caninos.', 2147483647, 'higienePerro8.jpg', 0, 0, 2, 2, 0, 0),
(16, 'Pedigree Comida seca para perros para adultos, sabor a pollo', 6102, 9819, NULL, 2, 221, 'Cada perro se merece lo mejor ... es por eso que PEDIGREE Complete Nutrition Dry Dog Food ofrece una nutrición 100% completa y equilibrada para su perro adulto. Tiene los antioxidantes, vitaminas y minerales que los caninos necesitan para ayudar a mantene', 1124755411, 'alimentoPerro10.jpg', 0, 0, 2, 1, 0, 0),
(17, 'gatin', 11, 33, 44, 5, 22, 'asasdasd', 2, '1634592889493_img_.png', 0, 0, 1, 2, 0, 0);
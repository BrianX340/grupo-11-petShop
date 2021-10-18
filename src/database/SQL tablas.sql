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
   `isBestSell` INT,
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
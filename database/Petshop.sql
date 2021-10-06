CREATE TABLE `Address` (
   `id` VARCHAR(255) NOT NULL,
   `address` ,
   `city` VARCHAR(255),
   `state` VARCHAR(255),
   `country` VARCHAR(255),
   `cp` INT,
   `userId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Avatars` (
   `id`  NOT NULL,
   `path` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `Favorites` (
   `id`  NOT NULL,
   `userId` INT,
   `productId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
   `id`  NOT NULL,
   `name` VARCHAR(255),
   `lastName` VARCHAR(255),
   `email` VARCHAR(255),
   `pass` VARCHAR(255),
   `salt` VARCHAR(255),
   `role` INT,
   `tel` INT,
   `address` INT,
   `favorites` INT,
   `cart` INT,
   `avatar` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Product` (
   `id`  NOT NULL,
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
   `bradnId` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Cart` (
   `id`  NOT NULL,
   `totalQty` ,
   `totalCost` ,
   `itemsId` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Item` (
   `id`  NOT NULL,
   `productId` ,
   `qty` ,
   `price` ,
   `title` ,
   `productCode` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Categories` (
   `id`  NOT NULL,
   `name` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `SubCategories` (
   `id`  NOT NULL,
   `name` ,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Brand` (
   `id`  NOT NULL,
   `name` ,
   PRIMARY KEY (`id`)
);


ALTER TABLE `Favorites` ADD CONSTRAINT `FK_a9ee61f8-0501-4dc8-b4af-d776f00936f6` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_180cd450-8683-4fd7-bb55-dacd35ed8072` FOREIGN KEY (`address`) REFERENCES `Address`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_b9954db1-af7b-4db5-ba0a-0095bd8a6ad1` FOREIGN KEY (`avatar`) REFERENCES `Avatars`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_670bd335-7680-43fe-a8b3-b09d0480d271` FOREIGN KEY (`favorites`) REFERENCES `Favorites`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_8e748ef3-e804-4880-bc9f-f50b70daa885` FOREIGN KEY (`cart`) REFERENCES `Cart`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_0e1c6676-f4c6-4bc3-9718-92234341682b` FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategories`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_269c9099-4895-4dec-ae20-71e5cb6c8bc2` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_b1c687ac-45c5-4499-af6f-7b5d5798c1a3` FOREIGN KEY (`bradnId`) REFERENCES `Brand`(`id`);

ALTER TABLE `Cart` ADD CONSTRAINT `FK_4a701177-8838-4e4d-99d0-44b2fc78642f` FOREIGN KEY (`itemsId`) REFERENCES `Item`(`id`);

ALTER TABLE `Item` ADD CONSTRAINT `FK_d6664b54-bdfd-4c88-92b8-d69cebdd5e23` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`);

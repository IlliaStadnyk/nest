/*
  Warnings:

  - You are about to drop the `orderproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderproduct` DROP FOREIGN KEY `OrderProduct_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `orderproduct` DROP FOREIGN KEY `OrderProduct_product_id_fkey`;

-- DropTable
DROP TABLE `orderproduct`;

-- CreateTable
CREATE TABLE `order_product` (
    `id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `quantity` BIGINT NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order_product` ADD CONSTRAINT `order_product_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_product` ADD CONSTRAINT `order_product_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

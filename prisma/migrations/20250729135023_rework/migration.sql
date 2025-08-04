/*
  Warnings:

  - You are about to drop the column `client_id` on the `order` table. All the data in the column will be lost.
  - You are about to alter the column `quantity` on the `order_product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `order_product` DROP FOREIGN KEY `order_product_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropIndex
DROP INDEX `Order_client_id_fkey` ON `order`;

-- DropIndex
DROP INDEX `order_product_order_id_fkey` ON `order_product`;

-- DropIndex
DROP INDEX `Product_category_id_fkey` ON `product`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `client_id`,
    ADD COLUMN `clientId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `order_product` MODIFY `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category_id`,
    DROP COLUMN `name`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `category`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_product` ADD CONSTRAINT `order_product_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

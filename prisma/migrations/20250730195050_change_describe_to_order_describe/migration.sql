/*
  Warnings:

  - You are about to drop the column `description` on the `order_product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order_product` DROP COLUMN `description`,
    ADD COLUMN `order_description` VARCHAR(191) NULL;

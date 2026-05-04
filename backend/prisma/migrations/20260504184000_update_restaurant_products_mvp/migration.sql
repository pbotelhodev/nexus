/*
  Warnings:

  - You are about to drop the column `available` on the `restaurant_products` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `restaurant_products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "restaurant_products" DROP COLUMN "available",
DROP COLUMN "ingredients";

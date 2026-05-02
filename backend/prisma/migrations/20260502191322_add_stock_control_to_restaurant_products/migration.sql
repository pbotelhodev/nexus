-- AlterTable
ALTER TABLE "restaurant_products" ADD COLUMN     "stockQuantity" INTEGER,
ADD COLUMN     "trackStock" BOOLEAN NOT NULL DEFAULT false;

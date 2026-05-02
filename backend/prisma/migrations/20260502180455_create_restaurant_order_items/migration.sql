-- CreateTable
CREATE TABLE "restaurant_order_items" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "note" TEXT,
    "productNameSnapshot" TEXT NOT NULL,
    "unitPriceAtMoment" DECIMAL(10,2) NOT NULL,
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "restaurant_order_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_order_items" ADD CONSTRAINT "restaurant_order_items_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_order_items" ADD CONSTRAINT "restaurant_order_items_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "restaurant_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_order_items" ADD CONSTRAINT "restaurant_order_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "restaurant_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

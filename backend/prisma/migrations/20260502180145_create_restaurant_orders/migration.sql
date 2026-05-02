-- CreateTable
CREATE TABLE "restaurant_orders" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "tableSessionId" TEXT,
    "createdByUserId" TEXT,

    CONSTRAINT "restaurant_orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_orders" ADD CONSTRAINT "restaurant_orders_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_orders" ADD CONSTRAINT "restaurant_orders_tableSessionId_fkey" FOREIGN KEY ("tableSessionId") REFERENCES "restaurant_table_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_orders" ADD CONSTRAINT "restaurant_orders_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "restaurant_table_sessions" (
    "id" TEXT NOT NULL,
    "openedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "subtotal" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "serviceChargeValue" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "couvertValue" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "discount" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "total" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "tableId" TEXT NOT NULL,
    "waiterId" TEXT,

    CONSTRAINT "restaurant_table_sessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_table_sessions" ADD CONSTRAINT "restaurant_table_sessions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_table_sessions" ADD CONSTRAINT "restaurant_table_sessions_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "restaurant_tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_table_sessions" ADD CONSTRAINT "restaurant_table_sessions_waiterId_fkey" FOREIGN KEY ("waiterId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

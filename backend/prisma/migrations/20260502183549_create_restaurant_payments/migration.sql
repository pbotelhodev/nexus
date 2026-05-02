-- CreateTable
CREATE TABLE "restaurant_payments" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "method" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "pixLink" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "tableSessionId" TEXT,
    "orderId" TEXT,
    "receivedByUserId" TEXT,

    CONSTRAINT "restaurant_payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_payments" ADD CONSTRAINT "restaurant_payments_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_payments" ADD CONSTRAINT "restaurant_payments_tableSessionId_fkey" FOREIGN KEY ("tableSessionId") REFERENCES "restaurant_table_sessions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_payments" ADD CONSTRAINT "restaurant_payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "restaurant_orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_payments" ADD CONSTRAINT "restaurant_payments_receivedByUserId_fkey" FOREIGN KEY ("receivedByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

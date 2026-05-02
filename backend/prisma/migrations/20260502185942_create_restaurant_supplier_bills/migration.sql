-- CreateTable
CREATE TABLE "restaurant_supplier_bills" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,

    CONSTRAINT "restaurant_supplier_bills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurant_supplier_bills" ADD CONSTRAINT "restaurant_supplier_bills_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_supplier_bills" ADD CONSTRAINT "restaurant_supplier_bills_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "restaurant_suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

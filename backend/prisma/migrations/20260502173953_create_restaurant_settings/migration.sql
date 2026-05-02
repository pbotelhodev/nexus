-- CreateTable
CREATE TABLE "restaurant_settings" (
    "id" TEXT NOT NULL,
    "tableCount" INTEGER NOT NULL,
    "serviceChargePercent" DECIMAL(5,2) NOT NULL DEFAULT 10.00,
    "couvertValue" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "allowTableReopen" BOOLEAN NOT NULL DEFAULT true,
    "printPreBill" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "restaurant_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_settings_companyId_key" ON "restaurant_settings"("companyId");

-- AddForeignKey
ALTER TABLE "restaurant_settings" ADD CONSTRAINT "restaurant_settings_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

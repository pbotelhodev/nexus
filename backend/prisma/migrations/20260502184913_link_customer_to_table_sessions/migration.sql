-- AlterTable
ALTER TABLE "restaurant_table_sessions" ADD COLUMN     "customerId" TEXT;

-- AddForeignKey
ALTER TABLE "restaurant_table_sessions" ADD CONSTRAINT "restaurant_table_sessions_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "restaurant_customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

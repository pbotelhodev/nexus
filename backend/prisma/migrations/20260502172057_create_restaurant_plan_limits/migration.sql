-- CreateTable
CREATE TABLE "restaurant_plan_limits" (
    "id" TEXT NOT NULL,
    "maxTables" INTEGER NOT NULL,
    "maxWaiters" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "planId" TEXT NOT NULL,

    CONSTRAINT "restaurant_plan_limits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_plan_limits_planId_key" ON "restaurant_plan_limits"("planId");

-- AddForeignKey
ALTER TABLE "restaurant_plan_limits" ADD CONSTRAINT "restaurant_plan_limits_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

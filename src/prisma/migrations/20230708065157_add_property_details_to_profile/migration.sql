/*
  Warnings:

  - You are about to drop the `properties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_owner_id_fkey";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "property_city" TEXT,
ADD COLUMN     "property_house_number" TEXT,
ADD COLUMN     "property_postcode" TEXT,
ADD COLUMN     "property_state" TEXT,
ADD COLUMN     "property_street_address" TEXT;

-- DropTable
DROP TABLE "properties";

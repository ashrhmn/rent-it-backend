/*
  Warnings:

  - The `permissions` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `profiles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "permission" AS ENUM ('CREATE_USER', 'MODIFY_USER');

-- CreateEnum
CREATE TYPE "profile_type" AS ENUM ('LANDLORD', 'TENANT');

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "type",
ADD COLUMN     "type" "profile_type" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "permissions",
ADD COLUMN     "permissions" "permission"[];

-- DropEnum
DROP TYPE "Permissions";

-- DropEnum
DROP TYPE "ProfileType";

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_id_type_key" ON "profiles"("user_id", "type");

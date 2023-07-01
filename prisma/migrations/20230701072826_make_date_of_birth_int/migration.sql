/*
  Warnings:

  - Changed the type of `date_of_birth` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "date_of_birth",
ADD COLUMN     "date_of_birth" INTEGER NOT NULL;

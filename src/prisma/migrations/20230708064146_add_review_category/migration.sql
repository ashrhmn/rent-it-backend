/*
  Warnings:

  - A unique constraint covering the columns `[sent_by_profile_id,received_by_profile_id,category]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "review_category" AS ENUM ('SPEED_OF_REPAIRD', 'HANDLING_DEPOSITS', 'COMMUNICATION', 'MOVING_IN', 'MOVING_OUT', 'SECURITY', 'VALUE_FOR_MONEY', 'STATE_OF_PROPERTY', 'CLEANLINESS', 'MAINTENANCE');

-- AlterTable
ALTER TABLE "reviews" ADD COLUMN     "category" "review_category" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "reviews_sent_by_profile_id_received_by_profile_id_category_key" ON "reviews"("sent_by_profile_id", "received_by_profile_id", "category");

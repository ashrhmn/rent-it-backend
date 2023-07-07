-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "stars" INTEGER NOT NULL,
    "comment" TEXT,
    "sent_by_profile_id" TEXT NOT NULL,
    "received_by_profile_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_sent_by_profile_id_fkey" FOREIGN KEY ("sent_by_profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_received_by_profile_id_fkey" FOREIGN KEY ("received_by_profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

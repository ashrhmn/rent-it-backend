import { ReviewResolver } from "@/modules/review/review.resolver";
import { ReviewService } from "@/modules/review/review.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [ReviewService, ReviewResolver],
})
export class ReviewModule {}

import { CurrentUser, GqlSelect, ICurrentUser } from "@/decorators";
import { review_category, reviews } from "@/generated/dtos";
import { CreateReviewDto } from "@/modules/review/dtos/create-review.dto";
import { ReviewByProfileResponseDto } from "@/modules/review/dtos/review-by-profile.dto";
import { ReviewService } from "@/modules/review/review.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}

  @Query(() => [ReviewByProfileResponseDto])
  getAllReviewsByProfileId(@Args("profile_id") profile_id: string) {
    return this.reviewService.getAllReviewsByProfileId(profile_id);
  }

  @Query(() => [reviews])
  getReviewsOnProfileByLoggedInUser(
    @Args("profile_id") profile_id: string,
    @CurrentUser() user: ICurrentUser,
    @GqlSelect() select,
  ) {
    return this.reviewService.getReviewsOnProfileByLoggedInUser(
      profile_id,
      user,
      select,
    );
  }

  @Query(() => [review_category])
  getReviewCategories(): review_category[] {
    return this.reviewService.getReviewCategories();
  }

  @Mutation(() => String)
  createReview(
    @Args("data") data: CreateReviewDto,
    @CurrentUser() currentUser: ICurrentUser,
  ): Promise<string> {
    return this.reviewService.createReview(data, currentUser);
  }
}

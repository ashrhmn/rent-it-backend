import { review_category } from "@/generated/dtos";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateReviewDto {
  @Field()
  profile_id: string;

  @Field({ nullable: true })
  stars?: number;

  @Field({ nullable: true })
  comment?: string;

  @Field(() => review_category)
  category: review_category;
}

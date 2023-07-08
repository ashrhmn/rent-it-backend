import { review_category } from "@/generated/dtos";
import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class reviews_scaler_type {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Int, { nullable: true })
  stars!: number | null;

  @Field(() => String, { nullable: true })
  comment!: string | null;

  @Field(() => String, { nullable: false })
  sent_by_profile_id!: string;

  @Field(() => String, { nullable: false })
  received_by_profile_id!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => review_category, { nullable: false })
  category!: keyof typeof review_category;
}

@ObjectType()
export class ReviewByProfileResponseDto {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => [reviews_scaler_type])
  sent_reviews: reviews_scaler_type[];
}

import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";
import { Field, InputType, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateProfileInput extends PartialType(CreateProfileInput) {
  @Field(() => Int)
  id: number;
}

import { profile_type } from "@/generated/dtos";
import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateProfileInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  bio: string;

  @Field({ nullable: true })
  @IsOptional()
  description: string;

  @Field(() => profile_type)
  @IsNotEmpty()
  type: profile_type;
}

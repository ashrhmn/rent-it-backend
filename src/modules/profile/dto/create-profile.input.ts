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

  @Field({ nullable: true })
  @IsOptional()
  property_city: string;

  @Field({ nullable: true })
  @IsOptional()
  property_house_number: string;

  @Field({ nullable: true })
  @IsOptional()
  property_postcode: string;

  @Field({ nullable: true })
  @IsOptional()
  property_state: string;

  @Field({ nullable: true })
  @IsOptional()
  property_street_address: string;

  @Field(() => profile_type)
  @IsNotEmpty()
  type: profile_type;
}

import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class SignUpDto {
  @Field()
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field()
  @IsNotEmpty()
  confirmPassword: string;

  @Field()
  @IsNotEmpty()
  dateOfBirth: number;
}

import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class LoginDto {
  @Field()
  usernameOrEmail: string;
  @Field()
  password: string;
}

@ObjectType()
export class LoginResponseDto {
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}

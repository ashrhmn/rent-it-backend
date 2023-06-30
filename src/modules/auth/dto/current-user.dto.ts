import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CurrentUserResponseDto {
  @Field()
  id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field(() => [String])
  permissions: string[];
}

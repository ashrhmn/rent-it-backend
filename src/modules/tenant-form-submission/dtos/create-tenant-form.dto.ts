import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateTenantFormDto {
  @Field()
  name: string;
  @Field()
  surname: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field(() => Int)
  duration_in_months: number;
}

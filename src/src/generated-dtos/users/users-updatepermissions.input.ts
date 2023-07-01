import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permission } from '../prisma/permission.enum';

@InputType()
export class usersUpdatepermissionsInput {

    @Field(() => [permission], {nullable:true})
    set?: Array<keyof typeof permission>;

    @Field(() => [permission], {nullable:true})
    push?: Array<keyof typeof permission>;
}

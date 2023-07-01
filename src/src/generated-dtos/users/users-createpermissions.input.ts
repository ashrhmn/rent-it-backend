import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permission } from '../prisma/permission.enum';

@InputType()
export class usersCreatepermissionsInput {

    @Field(() => [permission], {nullable:false})
    set!: Array<keyof typeof permission>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';

@InputType()
export class profilesCreateOrConnectWithoutUsersInput {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;

    @Field(() => profilesCreateWithoutUsersInput, {nullable:false})
    @Type(() => profilesCreateWithoutUsersInput)
    create!: profilesCreateWithoutUsersInput;
}

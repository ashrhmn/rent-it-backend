import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProfilesInput } from './users-create-without-profiles.input';

@InputType()
export class usersCreateOrConnectWithoutProfilesInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutProfilesInput, {nullable:false})
    @Type(() => usersCreateWithoutProfilesInput)
    create!: usersCreateWithoutProfilesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { postsCreateWithoutProfilesInput } from './posts-create-without-profiles.input';

@InputType()
export class postsCreateOrConnectWithoutProfilesInput {

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;

    @Field(() => postsCreateWithoutProfilesInput, {nullable:false})
    @Type(() => postsCreateWithoutProfilesInput)
    create!: postsCreateWithoutProfilesInput;
}

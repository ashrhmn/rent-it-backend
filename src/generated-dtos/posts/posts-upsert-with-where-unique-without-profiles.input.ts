import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { postsUpdateWithoutProfilesInput } from './posts-update-without-profiles.input';
import { postsCreateWithoutProfilesInput } from './posts-create-without-profiles.input';

@InputType()
export class postsUpsertWithWhereUniqueWithoutProfilesInput {

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;

    @Field(() => postsUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => postsUpdateWithoutProfilesInput)
    update!: postsUpdateWithoutProfilesInput;

    @Field(() => postsCreateWithoutProfilesInput, {nullable:false})
    @Type(() => postsCreateWithoutProfilesInput)
    create!: postsCreateWithoutProfilesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { postsUpdateWithoutProfilesInput } from './posts-update-without-profiles.input';

@InputType()
export class postsUpdateWithWhereUniqueWithoutProfilesInput {

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;

    @Field(() => postsUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => postsUpdateWithoutProfilesInput)
    data!: postsUpdateWithoutProfilesInput;
}

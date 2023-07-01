import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';
import { postsCreateInput } from './posts-create.input';
import { postsUpdateInput } from './posts-update.input';

@ArgsType()
export class UpsertOnepostsArgs {

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;

    @Field(() => postsCreateInput, {nullable:false})
    @Type(() => postsCreateInput)
    create!: postsCreateInput;

    @Field(() => postsUpdateInput, {nullable:false})
    @Type(() => postsUpdateInput)
    update!: postsUpdateInput;
}

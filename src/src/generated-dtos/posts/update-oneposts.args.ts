import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsUpdateInput } from './posts-update.input';
import { Type } from 'class-transformer';
import { postsWhereUniqueInput } from './posts-where-unique.input';

@ArgsType()
export class UpdateOnepostsArgs {

    @Field(() => postsUpdateInput, {nullable:false})
    @Type(() => postsUpdateInput)
    data!: postsUpdateInput;

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;
}

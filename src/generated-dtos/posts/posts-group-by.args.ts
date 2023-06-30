import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { postsOrderByWithAggregationInput } from './posts-order-by-with-aggregation.input';
import { PostsScalarFieldEnum } from '../prisma/posts-scalar-field.enum';
import { postsScalarWhereWithAggregatesInput } from './posts-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class postsGroupByArgs {

    @Field(() => postsWhereInput, {nullable:true})
    @Type(() => postsWhereInput)
    where?: postsWhereInput;

    @Field(() => [postsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<postsOrderByWithAggregationInput>;

    @Field(() => [PostsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostsScalarFieldEnum>;

    @Field(() => postsScalarWhereWithAggregatesInput, {nullable:true})
    having?: postsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

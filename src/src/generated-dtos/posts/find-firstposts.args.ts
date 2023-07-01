import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';
import { postsOrderByWithRelationInput } from './posts-order-by-with-relation.input';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostsScalarFieldEnum } from '../prisma/posts-scalar-field.enum';

@ArgsType()
export class FindFirstpostsArgs {

    @Field(() => postsWhereInput, {nullable:true})
    @Type(() => postsWhereInput)
    where?: postsWhereInput;

    @Field(() => [postsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<postsOrderByWithRelationInput>;

    @Field(() => postsWhereUniqueInput, {nullable:true})
    cursor?: postsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostsScalarFieldEnum>;
}

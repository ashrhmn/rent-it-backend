import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsWhereInput } from '../posts/posts-where.input';

@InputType()
export class PostsListRelationFilter {

    @Field(() => postsWhereInput, {nullable:true})
    every?: postsWhereInput;

    @Field(() => postsWhereInput, {nullable:true})
    some?: postsWhereInput;

    @Field(() => postsWhereInput, {nullable:true})
    none?: postsWhereInput;
}

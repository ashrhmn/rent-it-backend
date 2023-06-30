import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostsCountAggregate } from './posts-count-aggregate.output';
import { PostsMinAggregate } from './posts-min-aggregate.output';
import { PostsMaxAggregate } from './posts-max-aggregate.output';

@ObjectType()
export class PostsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [String], {nullable:true})
    media?: Array<string>;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:false})
    profile_id!: string;

    @Field(() => PostsCountAggregate, {nullable:true})
    _count?: PostsCountAggregate;

    @Field(() => PostsMinAggregate, {nullable:true})
    _min?: PostsMinAggregate;

    @Field(() => PostsMaxAggregate, {nullable:true})
    _max?: PostsMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsCreatemediaInput } from './posts-createmedia.input';
import { profilesCreateNestedOneWithoutPostsInput } from '../profiles/profiles-create-nested-one-without-posts.input';

@InputType()
export class postsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => postsCreatemediaInput, {nullable:true})
    media?: postsCreatemediaInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => profilesCreateNestedOneWithoutPostsInput, {nullable:false})
    profiles!: profilesCreateNestedOneWithoutPostsInput;
}

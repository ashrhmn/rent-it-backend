import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { postsOrderByRelationAggregateInput } from '../posts/posts-order-by-relation-aggregate.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class profilesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => postsOrderByRelationAggregateInput, {nullable:true})
    posts?: postsOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users?: usersOrderByWithRelationInput;
}

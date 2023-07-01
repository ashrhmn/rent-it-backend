import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { postsCountOrderByAggregateInput } from './posts-count-order-by-aggregate.input';
import { postsMaxOrderByAggregateInput } from './posts-max-order-by-aggregate.input';
import { postsMinOrderByAggregateInput } from './posts-min-order-by-aggregate.input';

@InputType()
export class postsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    media?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile_id?: keyof typeof SortOrder;

    @Field(() => postsCountOrderByAggregateInput, {nullable:true})
    _count?: postsCountOrderByAggregateInput;

    @Field(() => postsMaxOrderByAggregateInput, {nullable:true})
    _max?: postsMaxOrderByAggregateInput;

    @Field(() => postsMinOrderByAggregateInput, {nullable:true})
    _min?: postsMinOrderByAggregateInput;
}

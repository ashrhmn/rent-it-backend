import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { usersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { usersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';

@InputType()
export class usersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissions?: keyof typeof SortOrder;

    @Field(() => usersCountOrderByAggregateInput, {nullable:true})
    _count?: usersCountOrderByAggregateInput;

    @Field(() => usersMaxOrderByAggregateInput, {nullable:true})
    _max?: usersMaxOrderByAggregateInput;

    @Field(() => usersMinOrderByAggregateInput, {nullable:true})
    _min?: usersMinOrderByAggregateInput;
}

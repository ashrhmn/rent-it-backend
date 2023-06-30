import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { profilesCountOrderByAggregateInput } from './profiles-count-order-by-aggregate.input';
import { profilesMaxOrderByAggregateInput } from './profiles-max-order-by-aggregate.input';
import { profilesMinOrderByAggregateInput } from './profiles-min-order-by-aggregate.input';

@InputType()
export class profilesOrderByWithAggregationInput {

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

    @Field(() => profilesCountOrderByAggregateInput, {nullable:true})
    _count?: profilesCountOrderByAggregateInput;

    @Field(() => profilesMaxOrderByAggregateInput, {nullable:true})
    _max?: profilesMaxOrderByAggregateInput;

    @Field(() => profilesMinOrderByAggregateInput, {nullable:true})
    _min?: profilesMinOrderByAggregateInput;
}

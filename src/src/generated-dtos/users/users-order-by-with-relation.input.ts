import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { profilesOrderByRelationAggregateInput } from '../profiles/profiles-order-by-relation-aggregate.input';

@InputType()
export class usersOrderByWithRelationInput {

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

    @Field(() => SortOrder, {nullable:true})
    date_of_birth?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    email_verified_at?: SortOrderInput;

    @Field(() => profilesOrderByRelationAggregateInput, {nullable:true})
    profiles?: profilesOrderByRelationAggregateInput;
}

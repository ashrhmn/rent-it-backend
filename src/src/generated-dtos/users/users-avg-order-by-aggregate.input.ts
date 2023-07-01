import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class usersAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    date_of_birth?: keyof typeof SortOrder;
}

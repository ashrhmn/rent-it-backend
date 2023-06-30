import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumpermissionNullableListFilter } from '../prisma/enumpermission-nullable-list-filter.input';

@InputType()
export class usersScalarWhereWithAggregatesInput {

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    username?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => EnumpermissionNullableListFilter, {nullable:true})
    permissions?: EnumpermissionNullableListFilter;
}

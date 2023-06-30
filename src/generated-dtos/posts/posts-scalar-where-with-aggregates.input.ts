import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class postsScalarWhereWithAggregatesInput {

    @Field(() => [postsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<postsScalarWhereWithAggregatesInput>;

    @Field(() => [postsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<postsScalarWhereWithAggregatesInput>;

    @Field(() => [postsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<postsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    media?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    profile_id?: StringWithAggregatesFilter;
}

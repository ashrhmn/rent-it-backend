import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { Enumprofile_typeWithAggregatesFilter } from '../prisma/enumprofile-type-with-aggregates-filter.input';

@InputType()
export class profilesScalarWhereWithAggregatesInput {

    @Field(() => [profilesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<profilesScalarWhereWithAggregatesInput>;

    @Field(() => [profilesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<profilesScalarWhereWithAggregatesInput>;

    @Field(() => [profilesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<profilesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => Enumprofile_typeWithAggregatesFilter, {nullable:true})
    type?: Enumprofile_typeWithAggregatesFilter;
}

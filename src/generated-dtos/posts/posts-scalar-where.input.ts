import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class postsScalarWhereInput {

    @Field(() => [postsScalarWhereInput], {nullable:true})
    AND?: Array<postsScalarWhereInput>;

    @Field(() => [postsScalarWhereInput], {nullable:true})
    OR?: Array<postsScalarWhereInput>;

    @Field(() => [postsScalarWhereInput], {nullable:true})
    NOT?: Array<postsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    media?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    profile_id?: StringFilter;
}

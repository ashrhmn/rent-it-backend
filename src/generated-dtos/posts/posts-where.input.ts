import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfilesRelationFilter } from '../prisma/profiles-relation-filter.input';

@InputType()
export class postsWhereInput {

    @Field(() => [postsWhereInput], {nullable:true})
    AND?: Array<postsWhereInput>;

    @Field(() => [postsWhereInput], {nullable:true})
    OR?: Array<postsWhereInput>;

    @Field(() => [postsWhereInput], {nullable:true})
    NOT?: Array<postsWhereInput>;

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

    @Field(() => ProfilesRelationFilter, {nullable:true})
    profiles?: ProfilesRelationFilter;
}

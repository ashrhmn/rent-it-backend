import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumpermissionNullableListFilter } from '../prisma/enumpermission-nullable-list-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProfilesListRelationFilter } from '../prisma/profiles-list-relation-filter.input';

@InputType()
export class usersWhereInput {

    @Field(() => [usersWhereInput], {nullable:true})
    AND?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    OR?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    NOT?: Array<usersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => EnumpermissionNullableListFilter, {nullable:true})
    permissions?: EnumpermissionNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    date_of_birth?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    email_verified_at?: DateTimeNullableFilter;

    @Field(() => ProfilesListRelationFilter, {nullable:true})
    profiles?: ProfilesListRelationFilter;
}

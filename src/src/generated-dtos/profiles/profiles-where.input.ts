import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Enumprofile_typeFilter } from '../prisma/enumprofile-type-filter.input';
import { PostsListRelationFilter } from '../prisma/posts-list-relation-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class profilesWhereInput {

    @Field(() => [profilesWhereInput], {nullable:true})
    AND?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    OR?: Array<profilesWhereInput>;

    @Field(() => [profilesWhereInput], {nullable:true})
    NOT?: Array<profilesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => Enumprofile_typeFilter, {nullable:true})
    type?: Enumprofile_typeFilter;

    @Field(() => PostsListRelationFilter, {nullable:true})
    posts?: PostsListRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;
}

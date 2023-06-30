import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Enumprofile_typeFilter } from '../prisma/enumprofile-type-filter.input';

@InputType()
export class profilesScalarWhereInput {

    @Field(() => [profilesScalarWhereInput], {nullable:true})
    AND?: Array<profilesScalarWhereInput>;

    @Field(() => [profilesScalarWhereInput], {nullable:true})
    OR?: Array<profilesScalarWhereInput>;

    @Field(() => [profilesScalarWhereInput], {nullable:true})
    NOT?: Array<profilesScalarWhereInput>;

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
}

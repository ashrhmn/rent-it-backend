import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from './profile-type.enum';
import { NestedEnumprofile_typeFilter } from './nested-enumprofile-type-filter.input';

@InputType()
export class Enumprofile_typeFilter {

    @Field(() => profile_type, {nullable:true})
    equals?: keyof typeof profile_type;

    @Field(() => [profile_type], {nullable:true})
    in?: Array<keyof typeof profile_type>;

    @Field(() => [profile_type], {nullable:true})
    notIn?: Array<keyof typeof profile_type>;

    @Field(() => NestedEnumprofile_typeFilter, {nullable:true})
    not?: NestedEnumprofile_typeFilter;
}

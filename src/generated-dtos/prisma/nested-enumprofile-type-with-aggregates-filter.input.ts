import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from './profile-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumprofile_typeFilter } from './nested-enumprofile-type-filter.input';

@InputType()
export class NestedEnumprofile_typeWithAggregatesFilter {

    @Field(() => profile_type, {nullable:true})
    equals?: keyof typeof profile_type;

    @Field(() => [profile_type], {nullable:true})
    in?: Array<keyof typeof profile_type>;

    @Field(() => [profile_type], {nullable:true})
    notIn?: Array<keyof typeof profile_type>;

    @Field(() => NestedEnumprofile_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumprofile_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumprofile_typeFilter, {nullable:true})
    _min?: NestedEnumprofile_typeFilter;

    @Field(() => NestedEnumprofile_typeFilter, {nullable:true})
    _max?: NestedEnumprofile_typeFilter;
}

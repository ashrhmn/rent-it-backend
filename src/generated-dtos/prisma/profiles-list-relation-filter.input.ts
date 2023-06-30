import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereInput } from '../profiles/profiles-where.input';

@InputType()
export class ProfilesListRelationFilter {

    @Field(() => profilesWhereInput, {nullable:true})
    every?: profilesWhereInput;

    @Field(() => profilesWhereInput, {nullable:true})
    some?: profilesWhereInput;

    @Field(() => profilesWhereInput, {nullable:true})
    none?: profilesWhereInput;
}

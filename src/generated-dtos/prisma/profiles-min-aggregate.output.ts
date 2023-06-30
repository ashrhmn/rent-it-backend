import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { profile_type } from './profile-type.enum';

@ObjectType()
export class ProfilesMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => profile_type, {nullable:true})
    type?: keyof typeof profile_type;
}

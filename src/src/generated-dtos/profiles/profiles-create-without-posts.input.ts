import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from '../prisma/profile-type.enum';
import { usersCreateNestedOneWithoutProfilesInput } from '../users/users-create-nested-one-without-profiles.input';

@InputType()
export class profilesCreateWithoutPostsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;

    @Field(() => usersCreateNestedOneWithoutProfilesInput, {nullable:false})
    users!: usersCreateNestedOneWithoutProfilesInput;
}

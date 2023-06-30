import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from '../prisma/profile-type.enum';
import { postsCreateNestedManyWithoutProfilesInput } from '../posts/posts-create-nested-many-without-profiles.input';
import { usersCreateNestedOneWithoutProfilesInput } from '../users/users-create-nested-one-without-profiles.input';

@InputType()
export class profilesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;

    @Field(() => postsCreateNestedManyWithoutProfilesInput, {nullable:true})
    posts?: postsCreateNestedManyWithoutProfilesInput;

    @Field(() => usersCreateNestedOneWithoutProfilesInput, {nullable:false})
    users!: usersCreateNestedOneWithoutProfilesInput;
}

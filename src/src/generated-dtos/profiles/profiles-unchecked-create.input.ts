import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from '../prisma/profile-type.enum';
import { postsUncheckedCreateNestedManyWithoutProfilesInput } from '../posts/posts-unchecked-create-nested-many-without-profiles.input';

@InputType()
export class profilesUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;

    @Field(() => postsUncheckedCreateNestedManyWithoutProfilesInput, {nullable:true})
    posts?: postsUncheckedCreateNestedManyWithoutProfilesInput;
}

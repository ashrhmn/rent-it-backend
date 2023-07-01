import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreatepermissionsInput } from './users-createpermissions.input';
import { Int } from '@nestjs/graphql';
import { profilesUncheckedCreateNestedManyWithoutUsersInput } from '../profiles/profiles-unchecked-create-nested-many-without-users.input';

@InputType()
export class usersUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreatepermissionsInput, {nullable:true})
    permissions?: usersCreatepermissionsInput;

    @Field(() => Int, {nullable:false})
    date_of_birth!: number;

    @Field(() => Date, {nullable:true})
    email_verified_at?: Date | string;

    @Field(() => profilesUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    profiles?: profilesUncheckedCreateNestedManyWithoutUsersInput;
}

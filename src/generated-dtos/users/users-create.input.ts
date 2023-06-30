import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreatepermissionsInput } from './users-createpermissions.input';
import { profilesCreateNestedManyWithoutUsersInput } from '../profiles/profiles-create-nested-many-without-users.input';

@InputType()
export class usersCreateInput {

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

    @Field(() => profilesCreateNestedManyWithoutUsersInput, {nullable:true})
    profiles?: profilesCreateNestedManyWithoutUsersInput;
}

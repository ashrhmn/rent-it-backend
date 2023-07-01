import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    created_at = "created_at",
    updated_at = "updated_at",
    permissions = "permissions",
    date_of_birth = "date_of_birth",
    email_verified_at = "email_verified_at"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })

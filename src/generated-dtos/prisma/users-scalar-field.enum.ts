import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    created_at = "created_at",
    updated_at = "updated_at",
    permissions = "permissions"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })

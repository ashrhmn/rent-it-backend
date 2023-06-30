import { registerEnumType } from '@nestjs/graphql';

export enum permission {
    CREATE_USER = "CREATE_USER",
    MODIFY_USER = "MODIFY_USER"
}


registerEnumType(permission, { name: 'permission', description: undefined })

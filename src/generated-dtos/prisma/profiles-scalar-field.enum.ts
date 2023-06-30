import { registerEnumType } from '@nestjs/graphql';

export enum ProfilesScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at",
    type = "type"
}


registerEnumType(ProfilesScalarFieldEnum, { name: 'ProfilesScalarFieldEnum', description: undefined })

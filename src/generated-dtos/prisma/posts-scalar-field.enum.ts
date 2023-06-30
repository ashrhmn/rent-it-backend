import { registerEnumType } from '@nestjs/graphql';

export enum PostsScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    media = "media",
    created_at = "created_at",
    updated_at = "updated_at",
    profile_id = "profile_id"
}


registerEnumType(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined })

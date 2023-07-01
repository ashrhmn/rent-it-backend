import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { profile_type } from '../prisma/profile-type.enum';
import { posts } from '../posts/posts.model';
import { users } from '../users/users.model';
import { ProfilesCount } from '../prisma/profiles-count.output';

@ObjectType()
export class profiles {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;

    @Field(() => [posts], {nullable:true})
    posts?: Array<posts>;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => ProfilesCount, {nullable:false})
    _count?: ProfilesCount;
}

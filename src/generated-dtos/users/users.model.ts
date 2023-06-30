import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { permission } from '../prisma/permission.enum';
import { profiles } from '../profiles/profiles.model';
import { UsersCount } from '../prisma/users-count.output';

@ObjectType()
export class users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [permission], {nullable:true})
    permissions!: Array<keyof typeof permission>;

    @Field(() => [profiles], {nullable:true})
    profiles?: Array<profiles>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesCreateWithoutPostsInput } from './profiles-create-without-posts.input';

@InputType()
export class profilesCreateOrConnectWithoutPostsInput {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;

    @Field(() => profilesCreateWithoutPostsInput, {nullable:false})
    @Type(() => profilesCreateWithoutPostsInput)
    create!: profilesCreateWithoutPostsInput;
}

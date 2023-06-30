import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesUpdateWithoutPostsInput } from './profiles-update-without-posts.input';
import { Type } from 'class-transformer';
import { profilesCreateWithoutPostsInput } from './profiles-create-without-posts.input';

@InputType()
export class profilesUpsertWithoutPostsInput {

    @Field(() => profilesUpdateWithoutPostsInput, {nullable:false})
    @Type(() => profilesUpdateWithoutPostsInput)
    update!: profilesUpdateWithoutPostsInput;

    @Field(() => profilesCreateWithoutPostsInput, {nullable:false})
    @Type(() => profilesCreateWithoutPostsInput)
    create!: profilesCreateWithoutPostsInput;
}

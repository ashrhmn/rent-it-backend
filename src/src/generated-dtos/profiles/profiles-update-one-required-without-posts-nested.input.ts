import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutPostsInput } from './profiles-create-without-posts.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutPostsInput } from './profiles-create-or-connect-without-posts.input';
import { profilesUpsertWithoutPostsInput } from './profiles-upsert-without-posts.input';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { profilesUpdateWithoutPostsInput } from './profiles-update-without-posts.input';

@InputType()
export class profilesUpdateOneRequiredWithoutPostsNestedInput {

    @Field(() => profilesCreateWithoutPostsInput, {nullable:true})
    @Type(() => profilesCreateWithoutPostsInput)
    create?: profilesCreateWithoutPostsInput;

    @Field(() => profilesCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutPostsInput)
    connectOrCreate?: profilesCreateOrConnectWithoutPostsInput;

    @Field(() => profilesUpsertWithoutPostsInput, {nullable:true})
    @Type(() => profilesUpsertWithoutPostsInput)
    upsert?: profilesUpsertWithoutPostsInput;

    @Field(() => profilesWhereUniqueInput, {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: profilesWhereUniqueInput;

    @Field(() => profilesUpdateWithoutPostsInput, {nullable:true})
    @Type(() => profilesUpdateWithoutPostsInput)
    update?: profilesUpdateWithoutPostsInput;
}

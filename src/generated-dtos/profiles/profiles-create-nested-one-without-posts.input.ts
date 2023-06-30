import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutPostsInput } from './profiles-create-without-posts.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutPostsInput } from './profiles-create-or-connect-without-posts.input';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';

@InputType()
export class profilesCreateNestedOneWithoutPostsInput {

    @Field(() => profilesCreateWithoutPostsInput, {nullable:true})
    @Type(() => profilesCreateWithoutPostsInput)
    create?: profilesCreateWithoutPostsInput;

    @Field(() => profilesCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutPostsInput)
    connectOrCreate?: profilesCreateOrConnectWithoutPostsInput;

    @Field(() => profilesWhereUniqueInput, {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: profilesWhereUniqueInput;
}

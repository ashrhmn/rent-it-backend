import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsCreateWithoutProfilesInput } from './posts-create-without-profiles.input';
import { Type } from 'class-transformer';
import { postsCreateOrConnectWithoutProfilesInput } from './posts-create-or-connect-without-profiles.input';
import { postsCreateManyProfilesInputEnvelope } from './posts-create-many-profiles-input-envelope.input';
import { postsWhereUniqueInput } from './posts-where-unique.input';

@InputType()
export class postsUncheckedCreateNestedManyWithoutProfilesInput {

    @Field(() => [postsCreateWithoutProfilesInput], {nullable:true})
    @Type(() => postsCreateWithoutProfilesInput)
    create?: Array<postsCreateWithoutProfilesInput>;

    @Field(() => [postsCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => postsCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<postsCreateOrConnectWithoutProfilesInput>;

    @Field(() => postsCreateManyProfilesInputEnvelope, {nullable:true})
    @Type(() => postsCreateManyProfilesInputEnvelope)
    createMany?: postsCreateManyProfilesInputEnvelope;

    @Field(() => [postsWhereUniqueInput], {nullable:true})
    @Type(() => postsWhereUniqueInput)
    connect?: Array<postsWhereUniqueInput>;
}

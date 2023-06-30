import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsCreateWithoutProfilesInput } from './posts-create-without-profiles.input';
import { Type } from 'class-transformer';
import { postsCreateOrConnectWithoutProfilesInput } from './posts-create-or-connect-without-profiles.input';
import { postsUpsertWithWhereUniqueWithoutProfilesInput } from './posts-upsert-with-where-unique-without-profiles.input';
import { postsCreateManyProfilesInputEnvelope } from './posts-create-many-profiles-input-envelope.input';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { postsUpdateWithWhereUniqueWithoutProfilesInput } from './posts-update-with-where-unique-without-profiles.input';
import { postsUpdateManyWithWhereWithoutProfilesInput } from './posts-update-many-with-where-without-profiles.input';
import { postsScalarWhereInput } from './posts-scalar-where.input';

@InputType()
export class postsUpdateManyWithoutProfilesNestedInput {

    @Field(() => [postsCreateWithoutProfilesInput], {nullable:true})
    @Type(() => postsCreateWithoutProfilesInput)
    create?: Array<postsCreateWithoutProfilesInput>;

    @Field(() => [postsCreateOrConnectWithoutProfilesInput], {nullable:true})
    @Type(() => postsCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: Array<postsCreateOrConnectWithoutProfilesInput>;

    @Field(() => [postsUpsertWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => postsUpsertWithWhereUniqueWithoutProfilesInput)
    upsert?: Array<postsUpsertWithWhereUniqueWithoutProfilesInput>;

    @Field(() => postsCreateManyProfilesInputEnvelope, {nullable:true})
    @Type(() => postsCreateManyProfilesInputEnvelope)
    createMany?: postsCreateManyProfilesInputEnvelope;

    @Field(() => [postsWhereUniqueInput], {nullable:true})
    @Type(() => postsWhereUniqueInput)
    set?: Array<postsWhereUniqueInput>;

    @Field(() => [postsWhereUniqueInput], {nullable:true})
    @Type(() => postsWhereUniqueInput)
    disconnect?: Array<postsWhereUniqueInput>;

    @Field(() => [postsWhereUniqueInput], {nullable:true})
    @Type(() => postsWhereUniqueInput)
    delete?: Array<postsWhereUniqueInput>;

    @Field(() => [postsWhereUniqueInput], {nullable:true})
    @Type(() => postsWhereUniqueInput)
    connect?: Array<postsWhereUniqueInput>;

    @Field(() => [postsUpdateWithWhereUniqueWithoutProfilesInput], {nullable:true})
    @Type(() => postsUpdateWithWhereUniqueWithoutProfilesInput)
    update?: Array<postsUpdateWithWhereUniqueWithoutProfilesInput>;

    @Field(() => [postsUpdateManyWithWhereWithoutProfilesInput], {nullable:true})
    @Type(() => postsUpdateManyWithWhereWithoutProfilesInput)
    updateMany?: Array<postsUpdateManyWithWhereWithoutProfilesInput>;

    @Field(() => [postsScalarWhereInput], {nullable:true})
    @Type(() => postsScalarWhereInput)
    deleteMany?: Array<postsScalarWhereInput>;
}

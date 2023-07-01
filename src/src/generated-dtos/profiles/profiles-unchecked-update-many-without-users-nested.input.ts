import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutUsersInput } from './profiles-create-or-connect-without-users.input';
import { profilesUpsertWithWhereUniqueWithoutUsersInput } from './profiles-upsert-with-where-unique-without-users.input';
import { profilesCreateManyUsersInputEnvelope } from './profiles-create-many-users-input-envelope.input';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { profilesUpdateWithWhereUniqueWithoutUsersInput } from './profiles-update-with-where-unique-without-users.input';
import { profilesUpdateManyWithWhereWithoutUsersInput } from './profiles-update-many-with-where-without-users.input';
import { profilesScalarWhereInput } from './profiles-scalar-where.input';

@InputType()
export class profilesUncheckedUpdateManyWithoutUsersNestedInput {

    @Field(() => [profilesCreateWithoutUsersInput], {nullable:true})
    @Type(() => profilesCreateWithoutUsersInput)
    create?: Array<profilesCreateWithoutUsersInput>;

    @Field(() => [profilesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<profilesCreateOrConnectWithoutUsersInput>;

    @Field(() => [profilesUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => profilesUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<profilesUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => profilesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => profilesCreateManyUsersInputEnvelope)
    createMany?: profilesCreateManyUsersInputEnvelope;

    @Field(() => [profilesWhereUniqueInput], {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    set?: Array<profilesWhereUniqueInput>;

    @Field(() => [profilesWhereUniqueInput], {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    disconnect?: Array<profilesWhereUniqueInput>;

    @Field(() => [profilesWhereUniqueInput], {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    delete?: Array<profilesWhereUniqueInput>;

    @Field(() => [profilesWhereUniqueInput], {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: Array<profilesWhereUniqueInput>;

    @Field(() => [profilesUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => profilesUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<profilesUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [profilesUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => profilesUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<profilesUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [profilesScalarWhereInput], {nullable:true})
    @Type(() => profilesScalarWhereInput)
    deleteMany?: Array<profilesScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';
import { Type } from 'class-transformer';
import { profilesCreateOrConnectWithoutUsersInput } from './profiles-create-or-connect-without-users.input';
import { profilesCreateManyUsersInputEnvelope } from './profiles-create-many-users-input-envelope.input';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';

@InputType()
export class profilesUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [profilesCreateWithoutUsersInput], {nullable:true})
    @Type(() => profilesCreateWithoutUsersInput)
    create?: Array<profilesCreateWithoutUsersInput>;

    @Field(() => [profilesCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => profilesCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<profilesCreateOrConnectWithoutUsersInput>;

    @Field(() => profilesCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => profilesCreateManyUsersInputEnvelope)
    createMany?: profilesCreateManyUsersInputEnvelope;

    @Field(() => [profilesWhereUniqueInput], {nullable:true})
    @Type(() => profilesWhereUniqueInput)
    connect?: Array<profilesWhereUniqueInput>;
}

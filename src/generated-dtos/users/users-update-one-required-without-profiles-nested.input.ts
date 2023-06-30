import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutProfilesInput } from './users-create-without-profiles.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutProfilesInput } from './users-create-or-connect-without-profiles.input';
import { usersUpsertWithoutProfilesInput } from './users-upsert-without-profiles.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutProfilesInput } from './users-update-without-profiles.input';

@InputType()
export class usersUpdateOneRequiredWithoutProfilesNestedInput {

    @Field(() => usersCreateWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateWithoutProfilesInput)
    create?: usersCreateWithoutProfilesInput;

    @Field(() => usersCreateOrConnectWithoutProfilesInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutProfilesInput)
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput;

    @Field(() => usersUpsertWithoutProfilesInput, {nullable:true})
    @Type(() => usersUpsertWithoutProfilesInput)
    upsert?: usersUpsertWithoutProfilesInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutProfilesInput, {nullable:true})
    @Type(() => usersUpdateWithoutProfilesInput)
    update?: usersUpdateWithoutProfilesInput;
}

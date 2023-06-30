import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesUpdateWithoutUsersInput } from './profiles-update-without-users.input';
import { profilesCreateWithoutUsersInput } from './profiles-create-without-users.input';

@InputType()
export class profilesUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;

    @Field(() => profilesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => profilesUpdateWithoutUsersInput)
    update!: profilesUpdateWithoutUsersInput;

    @Field(() => profilesCreateWithoutUsersInput, {nullable:false})
    @Type(() => profilesCreateWithoutUsersInput)
    create!: profilesCreateWithoutUsersInput;
}

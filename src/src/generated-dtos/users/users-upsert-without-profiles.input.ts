import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutProfilesInput } from './users-update-without-profiles.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutProfilesInput } from './users-create-without-profiles.input';

@InputType()
export class usersUpsertWithoutProfilesInput {

    @Field(() => usersUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => usersUpdateWithoutProfilesInput)
    update!: usersUpdateWithoutProfilesInput;

    @Field(() => usersCreateWithoutProfilesInput, {nullable:false})
    @Type(() => usersCreateWithoutProfilesInput)
    create!: usersCreateWithoutProfilesInput;
}

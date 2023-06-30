import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesUpdateWithoutUsersInput } from './profiles-update-without-users.input';

@InputType()
export class profilesUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;

    @Field(() => profilesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => profilesUpdateWithoutUsersInput)
    data!: profilesUpdateWithoutUsersInput;
}

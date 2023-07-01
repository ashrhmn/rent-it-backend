import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';
import { Type } from 'class-transformer';
import { profilesCreateInput } from './profiles-create.input';
import { profilesUpdateInput } from './profiles-update.input';

@ArgsType()
export class UpsertOneprofilesArgs {

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;

    @Field(() => profilesCreateInput, {nullable:false})
    @Type(() => profilesCreateInput)
    create!: profilesCreateInput;

    @Field(() => profilesUpdateInput, {nullable:false})
    @Type(() => profilesUpdateInput)
    update!: profilesUpdateInput;
}

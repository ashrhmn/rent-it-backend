import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { profilesUpdateInput } from './profiles-update.input';
import { Type } from 'class-transformer';
import { profilesWhereUniqueInput } from './profiles-where-unique.input';

@ArgsType()
export class UpdateOneprofilesArgs {

    @Field(() => profilesUpdateInput, {nullable:false})
    @Type(() => profilesUpdateInput)
    data!: profilesUpdateInput;

    @Field(() => profilesWhereUniqueInput, {nullable:false})
    @Type(() => profilesWhereUniqueInput)
    where!: profilesWhereUniqueInput;
}

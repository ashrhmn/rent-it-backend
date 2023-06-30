import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesScalarWhereInput } from './profiles-scalar-where.input';
import { Type } from 'class-transformer';
import { profilesUpdateManyMutationInput } from './profiles-update-many-mutation.input';

@InputType()
export class profilesUpdateManyWithWhereWithoutUsersInput {

    @Field(() => profilesScalarWhereInput, {nullable:false})
    @Type(() => profilesScalarWhereInput)
    where!: profilesScalarWhereInput;

    @Field(() => profilesUpdateManyMutationInput, {nullable:false})
    @Type(() => profilesUpdateManyMutationInput)
    data!: profilesUpdateManyMutationInput;
}

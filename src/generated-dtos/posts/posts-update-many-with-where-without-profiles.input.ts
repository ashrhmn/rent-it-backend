import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsScalarWhereInput } from './posts-scalar-where.input';
import { Type } from 'class-transformer';
import { postsUpdateManyMutationInput } from './posts-update-many-mutation.input';

@InputType()
export class postsUpdateManyWithWhereWithoutProfilesInput {

    @Field(() => postsScalarWhereInput, {nullable:false})
    @Type(() => postsScalarWhereInput)
    where!: postsScalarWhereInput;

    @Field(() => postsUpdateManyMutationInput, {nullable:false})
    @Type(() => postsUpdateManyMutationInput)
    data!: postsUpdateManyMutationInput;
}

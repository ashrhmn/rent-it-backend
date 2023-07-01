import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsUpdateManyMutationInput } from './posts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { postsWhereInput } from './posts-where.input';

@ArgsType()
export class UpdateManypostsArgs {

    @Field(() => postsUpdateManyMutationInput, {nullable:false})
    @Type(() => postsUpdateManyMutationInput)
    data!: postsUpdateManyMutationInput;

    @Field(() => postsWhereInput, {nullable:true})
    @Type(() => postsWhereInput)
    where?: postsWhereInput;
}

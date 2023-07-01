import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsWhereInput } from './posts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypostsArgs {

    @Field(() => postsWhereInput, {nullable:true})
    @Type(() => postsWhereInput)
    where?: postsWhereInput;
}

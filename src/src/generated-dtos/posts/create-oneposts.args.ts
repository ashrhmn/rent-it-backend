import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsCreateInput } from './posts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepostsArgs {

    @Field(() => postsCreateInput, {nullable:false})
    @Type(() => postsCreateInput)
    data!: postsCreateInput;
}

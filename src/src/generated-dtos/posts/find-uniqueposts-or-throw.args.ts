import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsWhereUniqueInput } from './posts-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepostsOrThrowArgs {

    @Field(() => postsWhereUniqueInput, {nullable:false})
    @Type(() => postsWhereUniqueInput)
    where!: postsWhereUniqueInput;
}

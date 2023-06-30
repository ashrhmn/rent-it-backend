import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postsCreateManyInput } from './posts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManypostsArgs {

    @Field(() => [postsCreateManyInput], {nullable:false})
    @Type(() => postsCreateManyInput)
    data!: Array<postsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

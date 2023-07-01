import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postsCreateManyProfilesInput } from './posts-create-many-profiles.input';
import { Type } from 'class-transformer';

@InputType()
export class postsCreateManyProfilesInputEnvelope {

    @Field(() => [postsCreateManyProfilesInput], {nullable:false})
    @Type(() => postsCreateManyProfilesInput)
    data!: Array<postsCreateManyProfilesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesCreateManyUsersInput } from './profiles-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class profilesCreateManyUsersInputEnvelope {

    @Field(() => [profilesCreateManyUsersInput], {nullable:false})
    @Type(() => profilesCreateManyUsersInput)
    data!: Array<profilesCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

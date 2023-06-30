import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from '../prisma/profile-type.enum';

@InputType()
export class profilesUser_idTypeCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;
}

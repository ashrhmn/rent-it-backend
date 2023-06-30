import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profilesUser_idTypeCompoundUniqueInput } from './profiles-user-id-type-compound-unique.input';

@InputType()
export class profilesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => profilesUser_idTypeCompoundUniqueInput, {nullable:true})
    user_id_type?: profilesUser_idTypeCompoundUniqueInput;
}

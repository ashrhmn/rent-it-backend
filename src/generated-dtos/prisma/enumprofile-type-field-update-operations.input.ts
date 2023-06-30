import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { profile_type } from './profile-type.enum';

@InputType()
export class Enumprofile_typeFieldUpdateOperationsInput {

    @Field(() => profile_type, {nullable:true})
    set?: keyof typeof profile_type;
}

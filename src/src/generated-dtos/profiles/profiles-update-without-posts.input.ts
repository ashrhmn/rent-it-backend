import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { Enumprofile_typeFieldUpdateOperationsInput } from '../prisma/enumprofile-type-field-update-operations.input';
import { usersUpdateOneRequiredWithoutProfilesNestedInput } from '../users/users-update-one-required-without-profiles-nested.input';

@InputType()
export class profilesUpdateWithoutPostsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => Enumprofile_typeFieldUpdateOperationsInput, {nullable:true})
    type?: Enumprofile_typeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneRequiredWithoutProfilesNestedInput, {nullable:true})
    users?: usersUpdateOneRequiredWithoutProfilesNestedInput;
}

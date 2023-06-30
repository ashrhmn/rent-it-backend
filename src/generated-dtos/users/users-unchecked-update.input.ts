import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdatepermissionsInput } from './users-updatepermissions.input';
import { profilesUncheckedUpdateManyWithoutUsersNestedInput } from '../profiles/profiles-unchecked-update-many-without-users-nested.input';

@InputType()
export class usersUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdatepermissionsInput, {nullable:true})
    permissions?: usersUpdatepermissionsInput;

    @Field(() => profilesUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    profiles?: profilesUncheckedUpdateManyWithoutUsersNestedInput;
}

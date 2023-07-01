import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permission } from './permission.enum';

@InputType()
export class EnumpermissionNullableListFilter {

    @Field(() => [permission], {nullable:true})
    equals?: Array<keyof typeof permission>;

    @Field(() => permission, {nullable:true})
    has?: keyof typeof permission;

    @Field(() => [permission], {nullable:true})
    hasEvery?: Array<keyof typeof permission>;

    @Field(() => [permission], {nullable:true})
    hasSome?: Array<keyof typeof permission>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

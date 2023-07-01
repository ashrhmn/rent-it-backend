import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UsersAvgAggregate {

    @Field(() => Float, {nullable:true})
    date_of_birth?: number;
}

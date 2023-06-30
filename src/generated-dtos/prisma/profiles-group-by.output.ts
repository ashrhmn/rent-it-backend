import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { profile_type } from './profile-type.enum';
import { ProfilesCountAggregate } from './profiles-count-aggregate.output';
import { ProfilesMinAggregate } from './profiles-min-aggregate.output';
import { ProfilesMaxAggregate } from './profiles-max-aggregate.output';

@ObjectType()
export class ProfilesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => profile_type, {nullable:false})
    type!: keyof typeof profile_type;

    @Field(() => ProfilesCountAggregate, {nullable:true})
    _count?: ProfilesCountAggregate;

    @Field(() => ProfilesMinAggregate, {nullable:true})
    _min?: ProfilesMinAggregate;

    @Field(() => ProfilesMaxAggregate, {nullable:true})
    _max?: ProfilesMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfilesCountAggregate } from './profiles-count-aggregate.output';
import { ProfilesMinAggregate } from './profiles-min-aggregate.output';
import { ProfilesMaxAggregate } from './profiles-max-aggregate.output';

@ObjectType()
export class AggregateProfiles {

    @Field(() => ProfilesCountAggregate, {nullable:true})
    _count?: ProfilesCountAggregate;

    @Field(() => ProfilesMinAggregate, {nullable:true})
    _min?: ProfilesMinAggregate;

    @Field(() => ProfilesMaxAggregate, {nullable:true})
    _max?: ProfilesMaxAggregate;
}

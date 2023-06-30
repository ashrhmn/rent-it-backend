import { registerEnumType } from '@nestjs/graphql';

export enum profile_type {
    LANDLORD = "LANDLORD",
    TENANT = "TENANT"
}


registerEnumType(profile_type, { name: 'profile_type', description: undefined })

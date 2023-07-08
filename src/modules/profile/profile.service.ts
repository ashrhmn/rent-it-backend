import { ICurrentUser } from "@/decorators";
import { FindFirstprofilesArgs, FindManyprofilesArgs } from "@/generated/dtos";
import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";
import { PrismaService } from "@/providers/database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfile(
    data: CreateProfileInput,
    user: ICurrentUser,
  ): Promise<string> {
    if (!user) throw new Error("Unauthorized");

    await this.prismaService.profiles.create({
      data: {
        name: data.name,
        bio: data.bio,
        type: data.type,
        description: data.description,
        user_id: user.id,
        property_city: data.property_city,
        property_house_number: data.property_house_number,
        property_postcode: data.property_postcode,
        property_state: data.property_state,
        property_street_address: data.property_street_address,
      },
    });
    return "success";
  }

  async getProfiles({ args, select }: { args: FindManyprofilesArgs; select }) {
    return await this.prismaService.profiles.findMany({ ...args, ...select });
  }

  async getProfile({ args, select }: { args: FindFirstprofilesArgs; select }) {
    return await this.prismaService.profiles.findFirstOrThrow({
      ...args,
      ...select,
    });
  }
}

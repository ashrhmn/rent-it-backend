import { ICurrentUser } from "@/decorators";
import { FindManyprofilesArgs } from "@/generated/dtos";
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
      },
    });
    return "success";
  }

  async getProfiles({ args, select }: { args: FindManyprofilesArgs; select }) {
    return await this.prismaService.profiles.findMany({ ...args, ...select });
  }
}

import { CreateOneusersArgs, FindManyusersArgs } from "@/generated-dtos";
import { PrismaService } from "@/providers/database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers({ args, select }: { args: FindManyusersArgs; select }) {
    return await this.prismaService.users.findMany({ ...args, ...select });
  }

  async createUser({ args, select }: { args: CreateOneusersArgs; select }) {
    return await this.prismaService.users.create({ ...args, ...select });
  }
}

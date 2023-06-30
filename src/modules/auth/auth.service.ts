import { PrismaService } from "@/providers/database/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(usernameOrEmail: string, password: string) {
    // console.log(context.res);
    return usernameOrEmail;
  }
}

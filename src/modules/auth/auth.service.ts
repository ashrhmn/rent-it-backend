import { PrismaService } from "@/providers/database/prisma.service";

export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
}

import { IContext } from "@/decorators";
import { CacheService } from "@/providers/cache/cache.service";
import { PrismaService } from "@/providers/database/prisma.service";
import {
  generateAccessToken,
  getRefreshTokenUser,
  getUser,
} from "@/utilities/auth.utils";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheService,
  ) {}
  async use(req: IContext["req"], res: Response, next: (error?: any) => void) {
    const cacheClient = this.cacheService.getClient();
    const accessTokenUser = await getUser(req, cacheClient);
    if (!!accessTokenUser) {
      req.user = accessTokenUser;
      return next();
    }

    const refreshTokenUser = await getRefreshTokenUser(req, cacheClient);
    if (!refreshTokenUser) return next();
    const dbUser = await this.prismaService.users.findFirst({
      where: {
        email: refreshTokenUser.email,
        username: refreshTokenUser.username,
        id: refreshTokenUser.id,
      },
      select: {
        email: true,
        id: true,
        username: true,
        permissions: true,
      },
    });
    if (!dbUser) return next();
    req.access_token = generateAccessToken(dbUser, cacheClient);
    req.user = {
      ...refreshTokenUser,
      permissions: dbUser.permissions,
      iat: 0,
      exp: 0,
    };
    return next();
  }
}

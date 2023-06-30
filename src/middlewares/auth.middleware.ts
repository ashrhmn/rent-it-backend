import { appConfig } from "@/config";
import { IContext } from "@/decorators";
import { PrismaService } from "@/providers/database/prisma.service";
import { IAuthUser, generateTokens, getUser } from "@/utilities/auth.utils";
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import { verify } from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly prismaService: PrismaService) {}
  async use(req: IContext["req"], res: Response, next: (error?: any) => void) {
    const user = getUser(req);
    if (!!user) {
      req.user = user;
      return next();
    }

    const refresh_token = req.cookies.refresh_token;
    if (!refresh_token || typeof refresh_token !== "string") return next();
    try {
      const payload = verify(
        refresh_token,
        appConfig.env.JWT.REFRESH.SECRET,
      ) as Omit<IAuthUser, "permissions">;
      const user = await this.prismaService.users.findFirst({
        where: {
          email: payload.email,
          username: payload.username,
          id: payload.id,
        },
      });
      if (!user) return next();
      const { accessToken, refreshToken: new_refresh_token } =
        generateTokens(user);
      res.cookie("authorization", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + appConfig.env.JWT.ACCESS.TIMEOUT * 1000),
        secure: appConfig.env.NODE_ENV === "production",
      });
      res.cookie("refresh_token", new_refresh_token, {
        httpOnly: true,
        expires: new Date(
          Date.now() + appConfig.env.JWT.REFRESH.TIMEOUT * 1000,
        ),
        secure: appConfig.env.NODE_ENV === "production",
      });
      req.user = { ...payload, permissions: user.permissions, iat: 0, exp: 0 };
      return next();
    } catch (err) {
      console.error("auth.middleware error : ", err);
      return next();
    }
  }
}

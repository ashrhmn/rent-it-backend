import { appConfig } from "@/config";
import { IContext } from "@/decorators";
import { LoginDto, LoginResponse } from "@/modules/auth/dto/login.dto";
import { PrismaService } from "@/providers/database/prisma.service";
import { generateTokens } from "@/utilities/auth.utils";
import { BadRequestException, Injectable } from "@nestjs/common";
import { verify } from "argon2";

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(
    { password, usernameOrEmail }: LoginDto,
    context: IContext,
  ): Promise<LoginResponse> {
    const user = await this.prismaService.users.findFirst({
      where: {
        OR: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      },
      select: {
        email: true,
        id: true,
        username: true,
        permissions: true,
        password: true,
      },
    });
    if (!user) throw new BadRequestException("Invalid Username or Password");
    const validPassword = await verify(user.password, password);
    if (!validPassword)
      throw new BadRequestException("Invalid Username or Password");

    const { accessToken, refreshToken } = generateTokens(user);

    context.res.cookie("authorization", accessToken, {
      httpOnly: true,
      secure: appConfig.env.NODE_ENV === "production",
      expires: new Date(Date.now() + appConfig.env.JWT.ACCESS.TIMEOUT * 1000),
    });

    context.res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: appConfig.env.NODE_ENV === "production",
      expires: new Date(Date.now() + appConfig.env.JWT.REFRESH.TIMEOUT * 1000),
    });

    return { accessToken, refreshToken };
  }
}

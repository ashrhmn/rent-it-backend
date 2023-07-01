import { appConfig } from "@/config";
import { IContext, ICurrentUser } from "@/decorators";
import { LoginDto, LoginResponseDto } from "@/modules/auth/dto/login.dto";
import { SignUpDto } from "@/modules/auth/dto/sign-up.dto";
import { CacheService } from "@/providers/cache/cache.service";
import { PrismaService } from "@/providers/database/prisma.service";
import {
  IAuthUser,
  generateAccessToken,
  generateTokens,
  getRefreshTokenUser,
  revokeTokenCache,
} from "@/utilities/auth.utils";
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { hash, verify } from "argon2";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheService,
  ) {}

  async login(
    { password, usernameOrEmail }: LoginDto,
    context: IContext,
  ): Promise<LoginResponseDto> {
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

    const { accessToken, refreshToken } = generateTokens(
      user,
      this.cacheService.getClient(),
    );

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

  currentUser(user: ICurrentUser): IAuthUser {
    if (!user) throw new UnauthorizedException();
    return user;
  }

  logout(user: ICurrentUser, context: IContext): string {
    if (!user) throw new UnauthorizedException();
    context.res.clearCookie("authorization");
    context.res.clearCookie("refresh_token");
    revokeTokenCache(context.req, this.cacheService.getClient());
    return "success";
  }

  async refreshToken(context: IContext): Promise<string> {
    const cacheClient = this.cacheService.getClient();
    const refreshTokenUser = await getRefreshTokenUser(
      context.req,
      cacheClient,
    );

    if (!refreshTokenUser) throw new UnauthorizedException();
    const dbUser = await this.prismaService.users.findFirst({
      where: {
        id: refreshTokenUser.id,
        username: refreshTokenUser.username,
        email: refreshTokenUser.email,
      },
    });
    if (!dbUser) throw new UnauthorizedException();
    const accessToken = generateAccessToken(dbUser, cacheClient);
    context.res.cookie("authorization", accessToken, {
      httpOnly: true,
      secure: appConfig.env.NODE_ENV === "production",
      expires: new Date(Date.now() + appConfig.env.JWT.ACCESS.TIMEOUT * 1000),
    });
    return accessToken;
  }

  async signUp({
    confirmPassword,
    dateOfBirth,
    email,
    password,
    username,
  }: SignUpDto): Promise<string> {
    if (!password) throw new BadRequestException("Invalid Password");
    if (password !== confirmPassword)
      throw new BadRequestException("Passwords do not match");
    await this.prismaService.users.create({
      data: {
        username,
        email,
        password: await hash(password),
        date_of_birth: dateOfBirth,
      },
    });
    return "success";
  }
}

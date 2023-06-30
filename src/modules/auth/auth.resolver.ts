import { Context, CurrentUser, IContext, ICurrentUser } from "@/decorators";
import { AuthService } from "@/modules/auth/auth.service";
import { CurrentUserResponseDto } from "@/modules/auth/dto/current-user.dto";
import { LoginDto, LoginResponseDto } from "@/modules/auth/dto/login.dto";
import { UnauthorizedException } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => LoginResponseDto)
  login(
    @Context() context: IContext,
    @Args("data") dto: LoginDto,
  ): Promise<LoginResponseDto> {
    return this.authService.login(dto, context);
  }

  @Query(() => CurrentUserResponseDto)
  currentUser(@CurrentUser() user: ICurrentUser) {
    if (!user) throw new UnauthorizedException();
    return user;
  }
}

import { Context, CurrentUser, IContext, ICurrentUser } from "@/decorators";
import { Permission } from "@/guards";
import { AuthService } from "@/modules/auth/auth.service";
import { CurrentUserResponseDto } from "@/modules/auth/dto/current-user.dto";
import { LoginDto, LoginResponseDto } from "@/modules/auth/dto/login.dto";
import { SignUpDto } from "@/modules/auth/dto/sign-up.dto";
import { IAuthUser } from "@/utilities/auth.utils";
import { ValidationPipe } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

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
  currentUser(@CurrentUser() user: ICurrentUser): IAuthUser {
    return this.authService.currentUser(user);
  }

  @Permission("MODIFY_USER")
  @Mutation(() => String)
  logout(@CurrentUser() user: ICurrentUser, @Context() context: IContext) {
    return this.authService.logout(user, context);
  }

  @Mutation(() => String)
  refreshToken(@Context() context: IContext): Promise<string> {
    return this.authService.refreshToken(context);
  }

  @Mutation(() => String)
  signUp(@Args("data", new ValidationPipe()) dto: SignUpDto): Promise<string> {
    return this.authService.signUp(dto);
  }
}

import { Context, IContext } from "@/decorators";
import { AuthService } from "@/modules/auth/auth.service";
import { LoginDto, LoginResponse } from "@/modules/auth/dto/login.dto";
import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => LoginResponse)
  login(
    @Context() context: IContext,
    @Args("data") dto: LoginDto,
  ): Promise<LoginResponse> {
    return this.authService.login(dto, context);
  }
}

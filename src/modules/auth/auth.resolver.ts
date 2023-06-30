import { Context, IContext } from "@/decorators";
import { AuthService } from "@/modules/auth/auth.service";
import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  login(@Context() context: IContext) {
    context.res.cookie("token", "pppppppppppppppppp");
    return this.authService.login("pppppppppppppppppp", "pppppp");
  }
}

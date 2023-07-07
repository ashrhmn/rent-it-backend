import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { GqlSelect } from "@/decorators";

import { CreateOneusersArgs, FindManyusersArgs, users } from "@/generated/dtos";
import { UserService } from "@/modules/users/user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  login(): string {
    return "Hello World!";
  }

  @Query(() => [users])
  getAllUsers(@Args() args: FindManyusersArgs, @GqlSelect() select) {
    return this.userService.getAllUsers({ args, select });
  }

  @Mutation(() => users)
  createUser(@Args() args: CreateOneusersArgs, @GqlSelect() select) {
    return this.userService.createUser({ args, select });
  }
}

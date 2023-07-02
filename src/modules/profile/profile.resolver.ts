import { CurrentUser, ICurrentUser } from "@/decorators";
import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";
import { ProfileService } from "@/modules/profile/profile.service";
import { Args, Mutation, Resolver } from "@nestjs/graphql";

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Mutation(() => String)
  async createProfile(
    @Args("data") data: CreateProfileInput,
    @CurrentUser() user: ICurrentUser,
  ): Promise<string> {
    return this.profileService.createProfile(data, user);
  }
}

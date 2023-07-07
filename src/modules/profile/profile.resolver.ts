import { CurrentUser, GqlSelect, ICurrentUser } from "@/decorators";
import { FindManyprofilesArgs, profiles } from "@/generated/dtos";
import { CreateProfileInput } from "@/modules/profile/dto/create-profile.input";
import { ProfileService } from "@/modules/profile/profile.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

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

  @Query(() => [profiles])
  async getProfiles(@Args() args: FindManyprofilesArgs, @GqlSelect() select) {
    return this.profileService.getProfiles({ args, select });
  }
}

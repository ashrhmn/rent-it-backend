import { ProfileResolver } from "@/modules/profile/profile.resolver";
import { ProfileService } from "@/modules/profile/profile.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}

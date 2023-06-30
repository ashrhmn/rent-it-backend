import { AuthResolver } from "@/modules/auth/auth.resolver";
import { AuthService } from "@/modules/auth/auth.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [AuthService, AuthResolver],
  exports: [AuthService, AuthResolver],
})
export class AuthModule {}

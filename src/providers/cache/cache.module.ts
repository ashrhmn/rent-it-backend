import { CacheService } from "@/providers/cache/cache.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}

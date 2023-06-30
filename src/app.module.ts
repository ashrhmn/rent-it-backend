import { AuthModule } from "@/modules/auth/auth.module";
import { UserModule } from "@/modules/users/user.module";
import { CacheModule } from "@/providers/cache/cache.module";
import { PrismaModule } from "@/providers/database/prisma.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.graphql",
      playground: {
        settings: {
          "request.credentials": "include",
          "schema.polling.enable": true,
          "schema.polling.interval": 5000,
        },
      },
      sortSchema: true,
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    CacheModule,
  ],
})
export class AppModule {}

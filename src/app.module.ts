import { AuthMiddleware } from "@/middlewares";
import { AuthModule } from "@/modules/auth/auth.module";
import { UserModule } from "@/modules/users/user.module";
import { CacheModule } from "@/providers/cache/cache.module";
import { PrismaModule } from "@/providers/database/prisma.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.graphql",
      playground: {
        settings: {
          "request.credentials": "include",
          // "schema.polling.enable": false,
          // "schema.polling.interval": 5000,
        },
        title: "Rent It | GraphQL Playground",
      },
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    CacheModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}

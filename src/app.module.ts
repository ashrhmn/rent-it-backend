import { PermissionsGuard } from "@/guards/permission.guard";
import { AuthMiddleware } from "@/middlewares";
import { AuthModule } from "@/modules/auth/auth.module";
import { UserModule } from "@/modules/users/user.module";
import { CacheModule } from "@/providers/cache/cache.module";
import { PrismaModule } from "@/providers/database/prisma.module";
// import { YogaDriver, YogaDriverConfig } from "@graphql-yoga/nestjs";

import { ProfileModule } from "@/modules/profile/profile.module";
import { ReviewModule } from "@/modules/review/review.module";
import { TenantFormSubmissionModule } from "@/modules/tenant-form-submission/tfs.module";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.graphql",
      // playground: {
      //   settings: {
      //     "request.credentials": "include",
      //     // "schema.polling.enable": false,
      //     // "schema.polling.interval": 5000,
      //   },
      //   title: "Rent It | GraphQL Playground",
      // },
      playground: false,
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          includeCookies: true,
        }),
      ],
      formatError: ({ message, extensions, locations, path }) => {
        message =
          (extensions?.originalError as any)?.statusCode === 403
            ? "You are not authorized to perform this action"
            : message;
        return {
          message,
          extensions,
          locations,
          path,
        };
      },
    }),
    UserModule,
    PrismaModule,
    AuthModule,
    CacheModule,
    ProfileModule,
    ReviewModule,
    TenantFormSubmissionModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: PermissionsGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}

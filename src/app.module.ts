import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { UserModule } from "@/modules/users/user.module";
import { PrismaModule } from "@/providers/database/prisma.module";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.graphql",
      playground: true,
      sortSchema: true,
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

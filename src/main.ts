import { AppModule } from "@/app.module";
import { appConfig } from "@/config";
import { PrismaService } from "@/providers/database/prisma.service";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors({ origin: true, credentials: true });
  app.use(cookieParser());
  await app.listen(appConfig.env.PORT);
  Logger.log(
    `Server running on http://localhost:${appConfig.env.PORT}`,
    "Bootstrap",
  );
}
bootstrap();

import { PrismaClient } from "@/generated/client";
import { INestApplication, Injectable } from "@nestjs/common";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({ log: ["info", "error", "warn"] });
  }
  async enableShutdownHooks(app: INestApplication) {
    this.$on("beforeExit", async () => {
      await app.close();
    });
  }
}

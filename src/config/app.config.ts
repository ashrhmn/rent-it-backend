import z from "zod";

import { tryCatch } from "@/utilities/error.utils";
import * as dotenv from "dotenv";
import { fromZodError } from "zod-validation-error";
dotenv.config();

const envSchema = z
  .object({
    REDIS_HOST: z.string().default("localhost"),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    DEBUG_LOG: z.coerce.boolean().default(false),
    WARN_LOG: z.coerce.boolean().default(true),
    ERROR_LOG: z.coerce.boolean().default(true),
    REQ_LOG: z.coerce.boolean().default(true),
    LOG_FILE: z.coerce.boolean().default(true),
    SIGNER_PRIVATE_KEY: z.string(),
    JWT_BEARER_SECRET: z.string(),
    JWT_REFRESH_SECRET: z.string(),
    TRADE_COMMISSION: z.coerce.number().default(1.5),
    PORT: z.coerce.number().default(5001),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    ALPACA_ORDER_MAX_RETRIES: z.coerce.number().default(1),
    STOCK_TOKEN_LIST_CACHE_TIME: z.coerce.number().default(180),
    POOL_POSITION_CACHE_TIME: z.coerce.number().default(180),
    IGNORE_MARKET_CLOSED: z.coerce.boolean().default(false),
    LOCAL_CHAINID_ENABLED: z.coerce.boolean().default(false),
    LOCAL_CHAINID: z.coerce.number().default(31337),
    LOCAL_FORK_CHAINID: z.coerce.number().default(5),
    LOCAL_RPC_URL: z.string().default("http://localhost:8545"),
    RPC_URLS: z.record(z.coerce.number(), z.string()).default({}),
  })
  .transform((envs) => {
    return {
      ...envs,
      REDIS_URL: !!envs.REDIS_PASSWORD
        ? `redis://:${envs.REDIS_PASSWORD}@${envs.REDIS_HOST}:${envs.REDIS_PORT}`
        : `redis://${envs.REDIS_HOST}:${envs.REDIS_PORT}`,
    };
  });

const env = tryCatch(
  () =>
    envSchema.parse(
      Object.entries(process.env).reduce(
        (prev, [key, val]) => ({
          ...prev,
          [key]: (() => {
            try {
              if (val) return JSON.parse(val);
              return val;
            } catch (error) {
              return val;
            }
          })(),
        }),
        {},
      ),
    ),
  (error) => {
    throw new Error(`ENV ${fromZodError(error).message}`);
  },
);

export const appConfig = {
  default_schema_identifier: "public",
  default_migrations_folder: __dirname + "/../database/migrations",
  default_seeders_folder: __dirname + "/../database/seeders",
  tenant_migrations_folder: __dirname + "/../database/tenant_migrations",
  tenant_seeders_folder: __dirname + "/../database/tenant_seeders",
  recommended_bcrypt_rounds: 12,
  email_from: "mailer@schmserver.com",
  env,
};

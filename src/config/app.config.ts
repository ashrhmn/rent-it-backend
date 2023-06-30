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
    JWT_ACCESS_SECRET: z.string().default("access_secret"),
    JWT_REFRESH_SECRET: z.string().default("refresh_secret"),
    JWT_ACCESS_TIMEOUT: z.coerce.number().default(20),
    JWT_REFRESH_TIMEOUT: z.coerce.number().default(86400 * 365),
    PORT: z.coerce.number().default(5001),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  })
  .transform((envs) => {
    const {
      JWT_ACCESS_SECRET,
      JWT_REFRESH_SECRET,
      JWT_ACCESS_TIMEOUT,
      JWT_REFRESH_TIMEOUT,
      ...env
    } = envs;
    return {
      ...env,
      REDIS_URL: !!env.REDIS_PASSWORD
        ? `redis://:${env.REDIS_PASSWORD}@${env.REDIS_HOST}:${env.REDIS_PORT}`
        : `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
      JWT: {
        ACCESS: {
          SECRET: JWT_ACCESS_SECRET,
          TIMEOUT: JWT_ACCESS_TIMEOUT,
        },
        REFRESH: {
          SECRET: JWT_REFRESH_SECRET,
          TIMEOUT: JWT_REFRESH_TIMEOUT,
        },
      },
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

// if (env.DEBUG_LOG) console.log({ env });

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

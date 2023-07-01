import { appConfig } from "@/config";
import type { users } from "@/generated/client";
import { Request } from "express";
import { sign, verify } from "jsonwebtoken";
import { RedisClientType } from "redis";

export type IAuthUser = Pick<
  users,
  "username" | "id" | "permissions" | "email"
> & {
  iat: number;
  exp: number;
};

const validateTokenCache = async (
  token: string,
  cacheClient: RedisClientType,
) => {
  // console.log({ token });
  const cache = await cacheClient.get(`token:${token}`);
  if (!cache || cache !== "valid")
    throw new Error("Token Cache Validation Failed");
};

const getAccessToken = (req: Request) =>
  req.cookies.authorization || req.headers.authorization;

const getRefreshToken = (req: Request) =>
  req.cookies.refresh_token || req.headers.refresh_token;

export const revokeTokenCache = async (
  req: Request,
  cacheClient: RedisClientType,
) =>
  [getAccessToken(req), getRefreshToken(req)]
    .filter(Boolean)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .forEach((token) => cacheClient.del(`token:${token}`).catch(() => {}));

export const getUser = async (req: Request, cacheClient: RedisClientType) => {
  try {
    const access_token = getAccessToken(req);
    if (!access_token || typeof access_token !== "string") return null;
    await validateTokenCache(access_token, cacheClient);
    return verify(access_token, appConfig.env.JWT.ACCESS.SECRET) as IAuthUser;
  } catch (err) {
    console.error("getUser error : ", err);
    return null;
  }
};

export const getRefreshTokenUser = async (
  req: Request,
  cacheClient: RedisClientType,
) => {
  try {
    const refresh_token = getRefreshToken(req);
    if (!refresh_token || typeof refresh_token !== "string") return null;
    await validateTokenCache(refresh_token, cacheClient);
    return verify(refresh_token, appConfig.env.JWT.REFRESH.SECRET) as IAuthUser;
  } catch (err) {
    console.error("getRefreshTokenUser error : ", err);
    return null;
  }
};

export const generateAccessToken = (
  user: Omit<IAuthUser, "iat" | "exp">,
  cacheClient: RedisClientType,
) => {
  const { username, id, permissions, email } = user;
  const accessToken = sign(
    { username, id, permissions, email },
    appConfig.env.JWT.ACCESS.SECRET,
    {
      expiresIn: appConfig.env.JWT.ACCESS.TIMEOUT,
    },
  );
  // console.log("setting access_tokens in cache");
  cacheClient.set(`token:${accessToken}`, "valid", {
    EX: appConfig.env.JWT.ACCESS.TIMEOUT,
  });
  return accessToken;
};
export const generateRefreshToken = (
  user: Omit<IAuthUser, "iat" | "exp">,
  cacheClient: RedisClientType,
) => {
  const { username, id, email } = user;
  const refreshToken = sign(
    { username, id, email },
    appConfig.env.JWT.REFRESH.SECRET,
    {
      expiresIn: appConfig.env.JWT.REFRESH.TIMEOUT,
    },
  );
  // console.log("setting refresh_tokens in cache");
  cacheClient.set(`token:${refreshToken}`, "valid", {
    EX: appConfig.env.JWT.REFRESH.TIMEOUT,
  });
  return refreshToken;
};

export const generateTokens = (
  user: Omit<IAuthUser, "iat" | "exp">,
  cacheClient: RedisClientType,
) => {
  // console.log("generating tokens");
  const accessToken = generateAccessToken(user, cacheClient);
  const refreshToken = generateRefreshToken(user, cacheClient);
  return { accessToken, refreshToken };
};

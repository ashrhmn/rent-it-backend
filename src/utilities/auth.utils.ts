import { appConfig } from "@/config";
import { users } from "@prisma/client";
import { Request } from "express";
import { sign, verify } from "jsonwebtoken";

export type IAuthUser = Pick<
  users,
  "username" | "id" | "permissions" | "email"
> & {
  iat: number;
  exp: number;
};

export const getUser = (req: Request) => {
  try {
    const access_token = req.cookies.authorization || req.headers.authorization;
    if (!access_token || typeof access_token !== "string") return null;
    return verify(access_token, "CONFIG.JWT.SECRET.ACCESS") as IAuthUser;
  } catch (err) {
    // console.error("req.user error : ", err);
    return null;
  }
};

export const getRefreshTokenUser = (req: Request) => {
  try {
    const refresh_token =
      req.cookies.refresh_token || req.headers.refresh_token;
    if (!refresh_token || typeof refresh_token !== "string") return null;
    return verify(refresh_token, appConfig.env.JWT.REFRESH.SECRET) as IAuthUser;
  } catch (err) {
    // console.error("req.user error : ", err);
    return null;
  }
};

export const generateTokens = (user: Omit<IAuthUser, "iat" | "exp">) => {
  const { username, id, permissions, email } = user;

  const accessToken = sign(
    { username, id, permissions, email },
    appConfig.env.JWT.ACCESS.SECRET,
    {
      expiresIn: appConfig.env.JWT.ACCESS.TIMEOUT,
    },
  );

  const refreshToken = sign(
    { username, id, email },
    appConfig.env.JWT.REFRESH.SECRET,
    {
      expiresIn: appConfig.env.JWT.REFRESH.TIMEOUT,
    },
  );
  return { accessToken, refreshToken };
};

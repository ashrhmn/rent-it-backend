import { appConfig } from "@/config";
import { IContext } from "@/decorators";
import { ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Response } from "express";

export const extractExecutionContext = (context: ExecutionContext) => {
  const req: IContext["req"] = {
    http: context.switchToHttp().getRequest(),
    graphql: GqlExecutionContext.create(context).getContext().req,
  }[context.getType()];
  const res: Response = {
    http: context.switchToHttp().getResponse(),
    graphql: GqlExecutionContext.create(context).getContext().req.res,
  }[context.getType()];

  if (!req)
    throw new HttpException(
      "Not implemented",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );

  if (!!req.access_token)
    res.cookie("authorization", req.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + appConfig.env.JWT.ACCESS.TIMEOUT * 1000),
      secure: appConfig.env.NODE_ENV === "production",
    });
  if (!!req.refresh_token)
    res.cookie("refresh_token", req.refresh_token, {
      httpOnly: true,
      expires: new Date(Date.now() + appConfig.env.JWT.REFRESH.TIMEOUT * 1000),
      secure: appConfig.env.NODE_ENV === "production",
    });
  return { req, res };
};

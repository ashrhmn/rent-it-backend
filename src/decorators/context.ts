import { IAuthUser } from "@/utilities/auth.utils";
import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Request, Response } from "express";

export type IContext = {
  req: Request & { user: IAuthUser | null };
  res: Response;
};

export const Context = createParamDecorator(
  (_, context: ExecutionContext): IContext => {
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
    return {
      req,
      res,
    };
  },
);

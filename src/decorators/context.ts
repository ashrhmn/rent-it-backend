import { IAuthUser } from "@/utilities/auth.utils";
import { extractExecutionContext } from "@/utilities/context.utils";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request, Response } from "express";

export type IContext = {
  req: Request & {
    user: IAuthUser | null;
    access_token?: string;
    refresh_token?: string;
  };
  res: Response;
};

export const Context = createParamDecorator(
  (_, context: ExecutionContext): IContext => {
    return extractExecutionContext(context);
  },
);

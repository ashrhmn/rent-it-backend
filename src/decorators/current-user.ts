import { IContext } from "@/decorators/context";
import { IAuthUser } from "@/utilities/auth.utils";
import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export type ICurrentUser = IAuthUser;

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => {
    const req: IContext["req"] = {
      http: context.switchToHttp().getRequest(),
      graphql: GqlExecutionContext.create(context).getContext().req,
    }[context.getType()];

    if (!req)
      throw new HttpException(
        "Not implemented",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return req.user || null;
  },
);

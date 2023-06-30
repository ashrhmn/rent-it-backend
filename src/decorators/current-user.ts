import { IAuthUser } from "@/utilities/auth.utils";
import { extractExecutionContext } from "@/utilities/context.utils";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type ICurrentUser = IAuthUser | null;

export const CurrentUser = createParamDecorator(
  (_, context: ExecutionContext) => {
    return extractExecutionContext(context).req.user || null;
  },
);

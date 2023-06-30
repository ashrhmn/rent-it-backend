import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";

export const GqlSelect = createParamDecorator(
  (_, context: ExecutionContext) => {
    try {
      const info = GqlExecutionContext.create(context).getInfo();
      const select = new PrismaSelect(info).value;
      return select;
    } catch (error) {
      console.warn(`GqlSelect Error : ${error}`);
      return undefined;
    }
  },
);

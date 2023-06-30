import { extractExecutionContext } from "@/utilities/context.utils";
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { permission } from "@prisma/client";

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.get<permission[]>(
      "permissions",
      context.getHandler(),
    );
    if (!permissions) {
      return true;
    }
    if (permissions.length === 0) return true;
    const { req } = extractExecutionContext(context);

    const user = req.user;

    if (!user) return false;

    return permissions
      .map((r) => r.toLowerCase())
      .some((rr) => user.permissions.map((r) => r.toLowerCase()).includes(rr));
  }
}

export const Permission = (...permissions: permission[]) =>
  SetMetadata("permissions", permissions);

import { ROLES } from '@libs/core';
import { UserModel } from '@libs/database';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

function matchRoles(userRole: EUserRole, appRoles: EUserRole[]): boolean {
  return appRoles.includes(userRole);
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<EUserRole[]>(ROLES, ctx.getHandler());
    if (!roles.length) return true;

    const request = ctx.switchToHttp().getRequest();

    const user: UserModel = request.user;
    if (!user) throw new UnauthorizedException();

    return matchRoles(user.role, roles);
  }
}

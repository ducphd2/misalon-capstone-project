import { EUserRole } from '@libs/grpc-types/protos/commons';
import { applyDecorators, UseGuards } from '@nestjs/common';

import { OnlyRoles } from './role.decorator';

import { JwtAuthGuard, RoleGuard } from '@/api-gateway/core/guards';

export function Auth(...roles: EUserRole[]) {
  return applyDecorators(OnlyRoles(...roles), UseGuards(JwtAuthGuard, RoleGuard));
}

export function Admin() {
  return Auth(EUserRole.ADMIN);
}

export function NormalUser() {
  return Auth(EUserRole.USER);
}

export function Public() {
  return Auth();
}

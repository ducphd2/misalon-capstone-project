import { ROLES } from '@libs/core';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { SetMetadata } from '@nestjs/common';

export const OnlyRoles = (...roles: EUserRole[]) => SetMetadata(ROLES, roles);

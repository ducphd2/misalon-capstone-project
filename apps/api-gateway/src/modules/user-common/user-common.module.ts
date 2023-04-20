import { UtilsModule } from '@libs/core';
import { UserClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { UserCommonService } from './user-common.service';

@Module({
  imports: [ClientsModule.register([UserClient]), UtilsModule],
  providers: [UserCommonService],
  exports: [UserCommonService],
})
export class UserCommonModule {}

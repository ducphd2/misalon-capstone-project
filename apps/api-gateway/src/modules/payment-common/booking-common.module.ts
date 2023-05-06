import { UtilsModule } from '@libs/core';
import { BookingClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { BookingCommonService } from './booking-common.service';

@Module({
  imports: [ClientsModule.register([BookingClient]), UtilsModule],
  providers: [BookingCommonService],
  exports: [BookingCommonService],
})
export class BookingCommonModule {}

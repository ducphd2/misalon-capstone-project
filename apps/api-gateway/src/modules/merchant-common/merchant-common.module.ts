import { MerchantClient } from '@libs/grpc-types';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { MerchantCommonService } from './merchant-common.service';

@Module({
  imports: [ClientsModule.register([MerchantClient])],
  providers: [MerchantCommonService],
  exports: [MerchantCommonService],
})
export class MerchantCommonModule {}

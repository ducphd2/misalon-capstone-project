import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';
import { MessageComponent } from '@libs/modules';

import { ServiceController } from './service.controller';
import { ServicesService } from './service.service';

import { MerchantCommonModule } from '@/api-gateway/modules/merchant-common/merchant-common.module';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [ServicesService, MessageComponent],
  controllers: [ServiceController],
})
export class ServiceModule {}

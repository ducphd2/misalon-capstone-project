import { UtilsModule } from '@libs/core';
import { Module } from '@nestjs/common';

import { MerchantCommonModule } from '../merchant-common/merchant-common.module';

import { GroupService } from './group.service';
import { GroupController } from './group.controller';

import { MessageComponent } from '@/api-gateway/core';

@Module({
  imports: [MerchantCommonModule, UtilsModule],
  providers: [GroupService, MessageComponent],
  controllers: [GroupController],
})
export class GroupModule {}

import { DatabaseModule } from '@libs/database';
import { BullQueueModule } from '@libs/modules';
import { Module } from '@nestjs/common';

import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [DatabaseModule, BullQueueModule, NotificationModule],
})
export class AppModule {}

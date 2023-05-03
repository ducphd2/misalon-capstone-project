import { Module } from '@nestjs/common';
import { NotificationDatabaseModule } from '@libs/database';
import { BullQueueModule } from '@libs/modules';

import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationDatabaseModule, BullQueueModule, NotificationModule],
})
export class AppModule {}

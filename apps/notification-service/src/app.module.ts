import { Module } from '@nestjs/common';
import { NotificationDatabaseModule } from '@libs/database';

import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationDatabaseModule, NotificationModule],
})
export class AppModule {}

import { NotificationDatabaseModule } from '@libs/database/connection/notification';
import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationDatabaseModule, NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

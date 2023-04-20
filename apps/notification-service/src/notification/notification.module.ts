import { Module } from '@nestjs/common';
import { NotificationController } from './controller/notification.controller';
import { NotificationService } from './service/notification.service';
import { SecretsModule } from 'libs/modules/global/secrets/module';

@Module({
  imports: [SecretsModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}

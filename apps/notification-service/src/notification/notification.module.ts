import { NotificationModel, NotificationRepository } from '@libs/database';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SecretsModule } from 'libs/modules/global/secrets/module';
import { LangModule, MessageComponent } from '@libs/modules';

import { MailModule } from '../mailer/mailer.module';

import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [SecretsModule, SequelizeModule.forFeature([NotificationModel]), LangModule, MailModule],
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository, MessageComponent],
})
export class NotificationModule {}

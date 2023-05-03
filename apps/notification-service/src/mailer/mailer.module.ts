import * as path from 'path';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LangModule, MessageComponent } from '@libs/modules';

import { MailService } from './mailer.service';

@Module({
  imports: [
    LangModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('SMTP_HOST'),
          port: configService.get<number>('SMTP_PORT'),
          secure: false,
          ignoreTLS: false,
          requireTLS: false,
          pool: true,
          auth: {
            user: configService.get<string>('SMTP_USER'),
            pass: configService.get<string>('SMTP_PASSWORD'),
          },
        },
        defaults: {
          // from: '"no-reply" <no-reply@misalon.com>', // outgoing email ID
          from: configService.get<string>('SMTP_FROM'),
        },
        template: {
          dir: 'apps/notification-service/src/mailer/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  providers: [MailService, MessageComponent],
  exports: [MailService],
})
export class MailModule {}

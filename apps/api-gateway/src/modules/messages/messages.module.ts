import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleFactoryOptions, MongooseModuleOptions } from '@nestjs/mongoose';

import { MessageController } from '@/api-gateway/modules/messages/message.controller';
import { MessagesService } from './message.service';
import { Message, MessageSchema } from './schemas/messages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<MongooseModuleFactoryOptions> => {
        return {
          uri: configService.get<string>('MESSAGE_DB_URI'),
        } as MongooseModuleOptions;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [MessageController],
  providers: [MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}

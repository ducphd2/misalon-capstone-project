import { Message, MessageSchema } from './schemas/messages.schema';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesService } from './message.service';
import { MessagesController } from './messages.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forRoot('mongodb+srv://taipv:mgtaipv00@cluster0.cu0zyv6.mongodb.net/?retryWrites=true&w=majority'),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}

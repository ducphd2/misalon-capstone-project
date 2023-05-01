import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Message {
  @Prop()
  senderId: string;

  @Prop()
  receiverId: string;

  @Prop()
  senderName: string;

  @Prop()
  receiverName: string;

  @Prop()
  senderAvatar: string;

  @Prop()
  receiverAvatar: string;

  @Prop()
  content: string;

  @Prop()
  type: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);

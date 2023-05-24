import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './schemas/messages.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {}

  async create(messageData: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel(messageData);
    const doc = await createdMessage.save();
    return doc;
  }

  async getRecentMessages(userId: string, page: number, limit: number): Promise<Message[]> {
    const skip = (page - 1) * limit;
    const messages = await this.messageModel
      .aggregate([
        {
          $match: {
            $or: [{ senderId: userId }, { receiverId: userId }],
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $group: {
            _id: {
              $cond: [
                { $gt: ['$senderId', '$receiverId'] },
                { senderId: '$senderId', receiverId: '$receiverId' },
                { senderId: '$receiverId', receiverId: '$senderId' },
              ],
            },
            message: {
              $first: '$$ROOT',
            },
          },
        },
        {
          $replaceRoot: {
            newRoot: '$message',
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ])
      .exec();
    return messages;
  }

  async getConversationMessages(userId: string, otherUserId: string, page: number, limit: number): Promise<Message[]> {
    const skip = (page - 1) * limit;
    const doc = await this.messageModel
      .find({
        $or: [
          { senderId: userId, receiverId: otherUserId },
          { senderId: otherUserId, receiverId: userId },
        ],
      })
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .exec();
    return doc;
  }
}

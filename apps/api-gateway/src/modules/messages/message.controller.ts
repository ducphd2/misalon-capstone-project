import { Controller, Get, Param, Query } from '@nestjs/common';

import { BaseQueryDto } from '@/api-gateway/dtos';
import { MessagesService } from '@/api-gateway/modules/messages/message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('recent/:userId')
  async getRecentMessages(@Param('userId') userId: string, @Query() query?: BaseQueryDto) {
    const result = await this.messagesService.getRecentMessages(userId, query?.page, query?.limit);
    return result;
  }

  @Get('conversation/:userId/:otherUserId')
  async getConversationMessages(
    @Param('userId') userId: string,
    @Param('otherUserId') otherUserId: string,
    query?: BaseQueryDto,
  ) {
    const result = await this.messagesService.getConversationMessages(userId, otherUserId, query?.page, query?.limit);
    return result;
  }
}

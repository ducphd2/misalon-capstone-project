import { Body, Controller } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './message.service';

@Controller()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }
}

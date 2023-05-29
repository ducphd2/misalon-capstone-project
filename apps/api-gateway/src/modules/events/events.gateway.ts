import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

import { MessagesService } from '../messages/message.service';
import { CreateMessageDto } from '../messages/dto/create-message.dto';

import { EEventMessage } from '@/api-gateway/dtos';

@Injectable()
@WebSocketGateway({
  cors: true,
})
// @WebSocketGateway({
//   cors: {
//     origin: '*',
//   },
// })
export class EventsGateway implements OnGatewayDisconnect, OnGatewayConnection {
  constructor(private readonly messagesService: MessagesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage(EEventMessage.CREATE_MESSAGE)
  async handleMessage(@MessageBody() messageData: CreateMessageDto) {
    const { senderId, receiverId } = messageData;
    const createdMessage = await this.messagesService.create(messageData);
    this.server.to([senderId, receiverId]).emit(EEventMessage.NEW_MESSAGE, createdMessage);
  }

  @SubscribeMessage(EEventMessage.RECENT_MESSAGES)
  async handleRecentMessages(socket: Socket, payload: { userId: string; limit: number; page: number }) {
    const messages = await this.messagesService.getRecentMessages(payload.userId, payload.page, payload.limit);
    this.server.to(socket.id).emit(EEventMessage.RECENT_MESSAGES, messages);
  }

  @SubscribeMessage(EEventMessage.CONVERSATION_MESSAGES)
  async handleConversationMessages(
    socket: Socket,
    payload: { userId: string; otherUserId: string; limit: number; page: number },
  ) {
    const messages = await this.messagesService.getConversationMessages(
      payload.userId,
      payload.otherUserId,
      payload.page,
      payload.limit,
    );
    this.server.to(socket.id).emit(EEventMessage.CONVERSATION_MESSAGES, messages);
  }

  @SubscribeMessage(EEventMessage.JOIN_ROOM)
  async handleJoinRoom(@ConnectedSocket() client: Socket, @MessageBody() userId: string) {
    client.join(userId);
  }

  async handleConnection(client: Socket) {
    try {
      // TODO: Decode token then add `user` to client
      const { authorization } = client.handshake.headers;

      console.log(`Client connected: ${client.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }
}

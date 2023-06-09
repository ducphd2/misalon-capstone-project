import { BullQueueProvider } from '@libs/modules';
import { Injectable } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { CreateMessageDto } from '../messages/dto/create-message.dto';

import { EEventMessage, EmitEventAdminGateway } from '@/api-gateway/dtos';

@Injectable()
@WebSocketGateway({
  cors: true,
})
export class AdminGateway implements OnGatewayDisconnect, OnGatewayConnection {
  constructor(private readonly bullQueue: BullQueueProvider) {}

  @WebSocketServer()
  server: Server;

  async handleEmitCreateBooking(@MessageBody() messageData: EmitEventAdminGateway) {
    console.log('handle emit event booking event', JSON.stringify(messageData));
    this.server.to(messageData.userId.toString()).emit(EEventMessage.NEW_BOOKING_ADMIN, messageData);
  }

  async handleConnection(client: Socket) {
    try {
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

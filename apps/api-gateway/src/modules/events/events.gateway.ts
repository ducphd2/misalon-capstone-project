import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from '../messages/message.service';
import { CreateMessageDto } from '@/api-gateway/modules/messages/dto/create-message.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(private readonly messagesService: MessagesService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createMessage')
  async handleMessage(@MessageBody() messageData: CreateMessageDto) {
    const { senderId, receiverId } = messageData;
    const createdMessage = await this.messagesService.create(messageData);
    this.server.to([senderId, receiverId]).emit('newMessage', createdMessage);
  }

  @SubscribeMessage('recentMessages')
  async handleRecentMessages(socket: Socket, payload: { userId: string; limit: number; page: number }) {
    const messages = await this.messagesService.getRecentMessages(payload.userId, payload.limit, payload.page);
    this.server.to(socket.id).emit('recentMessages', messages);
  }

  @SubscribeMessage('conversationMessages')
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
    this.server.to(socket.id).emit('conversationMessages', messages);
  }

  @SubscribeMessage('JOIN_ROOM')
  async handleJoinRoom(client: Socket, userId: any) {
    client.join(userId);
  }

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client disconnected: ${socket.id}`);
  }
}

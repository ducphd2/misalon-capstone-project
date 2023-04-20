import { UserEntity } from '@libs/database/entities';
import { Count, GqlQuery, Id, QueryRequest } from '@libs/grpc-types/protos/commons';
import {
  CreateUserInput,
  USER_PACKAGE_NAME,
  USER_SERVICE_NAME,
  UpdateUserData,
  UserServiceClient,
} from '@libs/grpc-types/protos/user';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserCommonService implements OnModuleInit {
  private userService: UserServiceClient;

  constructor(@Inject(USER_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }
  async create(data: CreateUserInput): Promise<UserEntity> {
    return await firstValueFrom(this.userService.create(data));
  }

  async find(query: GqlQuery) {
    return await firstValueFrom(
      this.userService.find({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findOne(query: GqlQuery) {
    return await firstValueFrom(
      this.userService.findOne({
        ...query,
        where: JSON.stringify(query.where),
      }),
    );
  }

  async findById(id: Id) {
    return await firstValueFrom(this.userService.findById(id));
  }

  async countUser(query: QueryRequest) {
    return await firstValueFrom(this.userService.count(query));
  }

  async update(id: number, data: UpdateUserData) {
    return await firstValueFrom(
      this.userService.update({
        id,
        data,
      }),
    );
  }

  async deleteCustomer(id: number): Promise<Count> {
    return await firstValueFrom(this.userService.deleteCustomer({ id }));
  }
}

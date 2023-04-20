import { CommonProto, UserProto } from '@libs/grpc-types';
import { Controller, UseFilters, UseInterceptors } from '@nestjs/common';
import { GrpcAllExceptionsFilter } from 'filters/filters';
import { GrpcLogInterceptor } from 'interceptors/interceptors';
import { Observable } from 'rxjs';

import { UserService } from '../service/user.service';

@UseFilters(GrpcAllExceptionsFilter)
@UseInterceptors(GrpcLogInterceptor)
@Controller('user')
@UserProto.UserServiceControllerMethods()
export class UserController implements UserProto.UserServiceController {
  constructor(private readonly userService: UserService) {}

  find(
    request: CommonProto.GqlQuery,
  ): UserProto.FindUsersPayload | Promise<UserProto.FindUsersPayload> | Observable<UserProto.FindUsersPayload> {
    throw new Error('Method not implemented.');
  }

  count(
    request: CommonProto.QueryRequest,
  ): CommonProto.Count | Promise<CommonProto.Count> | Observable<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }

  update(request: UserProto.UpdateUserInput): UserProto.User | Promise<UserProto.User> | Observable<UserProto.User> {
    throw new Error('Method not implemented.');
  }

  findOneCustomer(
    request: CommonProto.GqlQuery,
  ):
    | UserProto.FindOneCustomerPayload
    | Promise<UserProto.FindOneCustomerPayload>
    | Observable<UserProto.FindOneCustomerPayload> {
    throw new Error('Method not implemented.');
  }

  deleteCustomer(
    request: CommonProto.Id,
  ): CommonProto.Count | Promise<CommonProto.Count> | Observable<CommonProto.Count> {
    throw new Error('Method not implemented.');
  }

  async create(data: UserProto.CreateUserInput): Promise<UserProto.User> {
    const user = await this.userService.create(data);
    return user;
  }

  findById(request: CommonProto.Id): Promise<UserProto.FindOne> {
    return this.userService.findById(request);
  }

  findOne(request: CommonProto.Query): UserProto.FindOne | Promise<UserProto.FindOne> | Observable<UserProto.FindOne> {
    throw new Error('Method not implemented.');
  }
}

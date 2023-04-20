import { Injectable } from '@nestjs/common';
import { CommonProto, UserProto } from '@libs/grpc-types';

@Injectable()
export class UserService {
  constructor() {
    //
  }

  async create(dto: UserProto.CreateDto): Promise<any> {
    return;
  }

  async findById(dto: CommonProto.Id): Promise<any> {
    return;
  }
}

import { MerchantUserEntity } from '@libs/database/entities';
import { MerchantUserRepository } from '@libs/database/repositories';
import { MerchantUserProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MerchantUserService {
  constructor(private readonly merchantUserRepository: MerchantUserRepository) {}

  async create(dto: MerchantUserProto.CreateMerchantUserInput): Promise<MerchantUserEntity> {
    const merchantUser = await this.merchantUserRepository.create(dto);
    return merchantUser;
  }

  async update(id: number, dto: MerchantUserProto.CreateMerchantUserInput): Promise<MerchantUserEntity> {
    await this.merchantUserRepository.update(id, dto);
    return await this.merchantUserRepository.findById(id);
  }
}

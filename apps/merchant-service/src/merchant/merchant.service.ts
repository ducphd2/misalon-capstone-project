import { MerchantEntity } from '@libs/database/entities';
import { MerchantRepository } from '@libs/database/repositories';
import { CommonProto, MerchantProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { CreateMerchantResponse } from '@libs/grpc-types/protos/merchant';

import { BranchService } from '../branch/branch.service';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository, private readonly branchService: BranchService) {}

  async create(dto: MerchantProto.CreateInput): Promise<CreateMerchantResponse> {
    const merchant = await this.merchantRepository.create(dto);
    const branch = await this.branchService.create({ ...dto, merchantId: merchant.id });
    return { merchant, branch };
  }

  async find(request: CommonProto.QueryRequest): Promise<MerchantEntity[]> {
    const merchants = await this.merchantRepository.find(JSON.parse(request.where));
    return merchants;
  }
}

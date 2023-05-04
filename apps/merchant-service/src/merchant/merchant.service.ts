import { MerchantModel } from '@libs/database/entities';
import { MerchantRepository } from '@libs/database/repositories';
import { CommonProto, MerchantProto } from '@libs/grpc-types';
import { CreateMerchantResponse } from '@libs/grpc-types/protos/merchant';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { BranchService } from '../branch/branch.service';

@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository, private readonly branchService: BranchService) {}

  async create(dto: MerchantProto.CreateInput): Promise<CreateMerchantResponse> {
    const merchant = await this.merchantRepository.create(dto);
    const branch = await this.branchService.create({ ...dto, merchantId: merchant.id });
    return { merchant, branch };
  }

  async find(request: CommonProto.QueryRequest): Promise<MerchantModel[]> {
    const merchants = await this.merchantRepository.find(JSON.parse(request.where));
    return merchants;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.merchantRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async findById(id: number): Promise<MerchantModel> {
    const merchant = await this.merchantRepository.findById(id);
    return merchant;
  }

  async findOne(dto: CommonProto.QueryRequest): Promise<MerchantModel> {
    const where = !isEmpty(dto.where) ? JSON.parse(dto.where) : undefined;

    const result = await this.merchantRepository.findOne({
      ...dto,
      where,
      raw: true,
    });

    return result;
  }
}

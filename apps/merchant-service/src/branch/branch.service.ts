import { LIMIT, PAGE } from '@libs/core/constants';
import { BranchModel } from '@libs/database/entities';
import { BranchRepository } from '@libs/database/repositories';
import { BranchProto, CommonProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  async create(dto: BranchProto.CreateBranchInput): Promise<BranchModel> {
    const branch = await this.branchRepository.create(dto);

    return branch;
  }

  async find(request: CommonProto.QueryRequest): Promise<BranchModel[]> {
    const branches = await this.branchRepository.find(JSON.parse(request.where));

    return branches;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.branchRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }
}

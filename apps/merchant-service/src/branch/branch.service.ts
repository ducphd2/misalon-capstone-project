import { LIMIT, PAGE } from '@libs/core/constants';
import { BranchModel } from '@libs/database/entities';
import { BranchRepository } from '@libs/database/repositories';
import { BranchProto, CommonProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { FindOptions } from 'sequelize';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  async create(dto: BranchProto.CreateBranchInput): Promise<BranchModel> {
    const branch = await this.branchRepository.create(dto);

    return branch;
  }

  async find(request: CommonProto.QueryRequest): Promise<BranchModel[]> {
    const branches = await this.branchRepository.find({
      where: JSON.parse(request.where),
    });

    return branches;
  }

  async findOne(query: FindOptions): Promise<BranchModel> {
    const result: BranchModel = await this.branchRepository.findOne({
      ...query,
      raw: true,
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.branchRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async update(request: BranchProto.UpdateBranchInput): Promise<BranchModel> {
    const result = await this.branchRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async findById(id: number): Promise<BranchModel> {
    const result = await this.branchRepository.findById(id, {
      raw: true,
    });

    return result;
  }
}

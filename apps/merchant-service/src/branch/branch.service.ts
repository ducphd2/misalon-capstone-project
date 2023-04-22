import { BranchEntity } from '@libs/database/entities';
import { BranchRepository } from '@libs/database/repositories';
import { BranchProto, CommonProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  async create(dto: BranchProto.CreateBranchInput): Promise<BranchEntity> {
    const branch = await this.branchRepository.create(dto);

    return branch;
  }

  async find(request: CommonProto.QueryRequest): Promise<BranchEntity[]> {
    const branches = await this.branchRepository.find(JSON.parse(request.where));

    return branches;
  }
}

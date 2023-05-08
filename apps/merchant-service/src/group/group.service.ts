import { GroupModel } from '@libs/database/entities';
import { GroupRepository } from '@libs/database/repositories';
import { BranchProto, CommonProto } from '@libs/grpc-types';
import { Injectable } from '@nestjs/common';
import { isEmpty } from 'lodash';
import { FindOptions } from 'sequelize';

@Injectable()
export class GroupService {
  constructor(private readonly groupRepository: GroupRepository) {}

  async create(dto: BranchProto.CreateBranchInput): Promise<GroupModel> {
    const branch = await this.groupRepository.create(dto);

    return branch;
  }

  async find(request: CommonProto.QueryRequest): Promise<GroupModel[]> {
    const branches = await this.groupRepository.find(JSON.parse(request.where));

    return branches;
  }

  async findOne(query: FindOptions): Promise<GroupModel> {
    const result: GroupModel = await this.groupRepository.findOne({
      ...query,
      raw: true,
    });

    return result;
  }

  async findWithPaging(request: CommonProto.QueryRequest): Promise<any> {
    const baseWhereQuery = !isEmpty(request.where) ? JSON.parse(request.where) : undefined;

    const result = await this.groupRepository.findAndPaginate({
      ...request,
      where: baseWhereQuery,
    });

    return result;
  }

  async update(request: BranchProto.UpdateBranchInput): Promise<GroupModel> {
    const result = await this.groupRepository.update(request.data, {
      where: {
        id: request.id,
      },
    });
    return result[0];
  }

  async findById(id: number): Promise<GroupModel> {
    const result = await this.groupRepository.findById(id, {
      raw: true,
    });

    return result;
  }

  async delete(id: number): Promise<number> {
    return await this.groupRepository.delete({ where: { id } });
  }

  async count(request: CommonProto.QueryRequest): Promise<number> {
    const count = await this.groupRepository.count({
      where: JSON.parse(request.where),
    });

    return count;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BranchModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class BranchRepository extends BaseRepository<BranchModel> {
  constructor(@InjectModel(BranchModel) readonly model: typeof BranchModel) {
    super(model);
  }

  async findWithPaging(options?: any, findOptions?: any): Promise<any> {
    // const result = await this.paginationRepository(this.deviceModel, options, findOptions);
    return;
  }
}

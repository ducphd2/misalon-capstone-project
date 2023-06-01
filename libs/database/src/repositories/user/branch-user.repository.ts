import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BranchUserModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class BranchUserRepository extends BaseRepository<BranchUserModel> {
  constructor(@InjectModel(BranchUserModel) readonly model: typeof BranchUserModel) {
    super(model);
  }
}

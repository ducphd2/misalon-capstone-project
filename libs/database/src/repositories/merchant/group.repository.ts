import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { GroupModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class GroupRepository extends BaseRepository<GroupModel> {
  constructor(@InjectModel(GroupModel) readonly model: typeof GroupModel) {
    super(model);
  }
}

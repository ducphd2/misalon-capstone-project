import { IFindAndPaginateOptions, IPaginationRes } from '@libs/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions } from 'sequelize';

import { UserModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserModel> {
  constructor(@InjectModel(UserModel) readonly model: typeof UserModel) {
    super(model);
  }
}

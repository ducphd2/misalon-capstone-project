import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IFindAndPaginateOptions, IPaginationRes } from '@libs/interfaces';
import { FindOptions } from 'sequelize';

import { DeviceModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class DeviceRepository extends BaseRepository<DeviceModel> {
  constructor(@InjectModel(DeviceModel) readonly model: typeof DeviceModel) {
    super(model);
  }

  async findAndPaginate(query?: IFindAndPaginateOptions, opts?: FindOptions): Promise<IPaginationRes<DeviceModel>> {
    const result: IPaginationRes<DeviceModel> = await this.paginate(query.where, query.page, query.limit, opts);

    return result;
  }
}

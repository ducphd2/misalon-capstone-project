import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { DeviceModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class DeviceRepository extends BaseRepository<DeviceModel> {
  constructor(@InjectModel(DeviceModel) readonly model: typeof DeviceModel) {
    super(model);
  }
}

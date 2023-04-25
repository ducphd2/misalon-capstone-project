import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { NotificationModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class NotificationRepository extends BaseRepository<NotificationModel> {
  constructor(@InjectModel(NotificationModel) readonly model: typeof NotificationModel) {
    super(model);
  }

  async findWithPaging(options?: any, findOptions?: any): Promise<any> {
    // const result = await this.paginationRepository(this.deviceModel, options, findOptions);
    return;
  }
}

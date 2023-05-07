import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { FeedbackModel } from '../../entities';
import { BaseRepository } from '../base.repository';

@Injectable()
export class FeedbackRepository extends BaseRepository<FeedbackModel> {
  constructor(@InjectModel(FeedbackModel) readonly model: typeof FeedbackModel) {
    super(model);
  }
}

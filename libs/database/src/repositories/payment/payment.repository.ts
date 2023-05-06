import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentModel } from '@libs/database';

import { BaseRepository } from '../base.repository';

@Injectable()
export class PaymentRepository extends BaseRepository<PaymentModel> {
  constructor(@InjectModel(PaymentModel) readonly model: typeof PaymentModel) {
    super(model);
  }
}

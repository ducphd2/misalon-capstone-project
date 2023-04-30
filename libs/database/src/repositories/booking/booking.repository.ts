import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BookingModel } from '@libs/database';

import { BaseRepository } from '../base.repository';

@Injectable()
export class BookingRepository extends BaseRepository<BookingModel> {
  constructor(@InjectModel(BookingModel) readonly model: typeof BookingModel) {
    super(model);
  }
}

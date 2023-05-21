import { BookingServiceModel } from '@libs/database';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from '../base.repository';

@Injectable()
export class BookingServiceRepository extends BaseRepository<BookingServiceModel> {
  constructor(@InjectModel(BookingServiceModel) readonly model: typeof BookingServiceModel) {
    super(model);
  }
}

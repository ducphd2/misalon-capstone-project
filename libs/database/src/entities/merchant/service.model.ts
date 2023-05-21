import { generateUniqueSku, toUFT8NonSpecialCharacters } from '@libs/core';
import { EServiceType } from '@libs/grpc-types/protos/service';
import {
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';

import { BookingModel, BookingServiceModel } from '../booking';
import { BaseModel } from '../base.model';

import { FeedbackModel } from './feedback.model';
import { MerchantModel } from './merchant.model';

@Table({
  modelName: 'service',
  tableName: 'services',
  underscored: true,
})
export class ServiceModel extends BaseModel<ServiceModel> {
  @Column({ type: DataType.TEXT })
  name?: string;

  @Column({ type: DataType.TEXT })
  description?: string;

  @ForeignKey(() => MerchantModel)
  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.DOUBLE, defaultValue: 0 })
  price?: number;

  @Column({ type: DataType.DOUBLE, defaultValue: 0 })
  initialPrice?: number;

  @Column({ type: DataType.INTEGER })
  durationHour?: number;

  @Column({ type: DataType.INTEGER })
  durationMinute?: number;

  @Column({ type: DataType.TEXT })
  sku?: string;

  @Column({ type: DataType.TEXT })
  image?: string;

  @Column({ type: DataType.INTEGER })
  type?: EServiceType;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search?: string;

  @BelongsTo(() => MerchantModel)
  merchant?: MerchantModel;

  @HasMany(() => FeedbackModel)
  feedbacks?: FeedbackModel[];

  @BelongsToMany(() => BookingModel, () => BookingServiceModel)
  bookings?: BookingModel[];

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: ServiceModel) {
    const columnsToConcatenate = ['name', 'sku', 'price', 'initialPrice', 'description'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }

  @BeforeCreate
  @BeforeUpdate
  static async upsertSku(model: ServiceModel) {
    if (!model.get('sku')) {
      model.setDataValue('sku', generateUniqueSku(model.get('type') ?? EServiceType.SERVICE));
    }
  }
}

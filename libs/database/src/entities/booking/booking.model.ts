import { toUFT8NonSpecialCharacters } from '@libs/core';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import {
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  BelongsToAssociation,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';

import { BaseModel } from '../base.model';
import { BranchModel, FeedbackModel, ServiceModel } from '../merchant';
import { UserModel } from '../user';

import { BookingServiceModel } from './booking-service.model';

@Table({
  modelName: 'booking',
  tableName: 'bookings',
  underscored: true,
})
export class BookingModel extends BaseModel<BookingModel> {
  @Column({ type: DataType.INTEGER })
  status?: EBookingStatus;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId?: number;

  @ForeignKey(() => BranchModel)
  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.TEXT })
  startTime?: string;

  @Column({ type: DataType.TEXT })
  customerEmail?: string;

  @Column({ type: DataType.TEXT })
  customerPhoneNumber?: string;

  @Column({ type: DataType.TEXT })
  customerName?: string;

  @Column({ type: DataType.TEXT })
  endTime?: string;

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({ type: DataType.TEXT })
  cancelReason?: string;

  @Column({ type: DataType.TEXT })
  bookingDate?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search?: string;

  @BelongsTo(() => BranchModel)
  branch?: BranchModel;

  @BelongsTo(() => UserModel)
  user?: UserModel;

  @BelongsToMany(() => ServiceModel, () => BookingServiceModel)
  services?: ServiceModel[];

  @HasMany(() => FeedbackModel)
  feedbacks?: FeedbackModel[];

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: BookingModel) {
    const columnsToConcatenate = [
      'status',
      'cancelReason',
      'serviceName',
      'startTime',
      'endTime',
      'note',
      'bookingDate',
    ];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }
}

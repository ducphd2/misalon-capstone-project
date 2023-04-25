import { EBookingStatus } from '@libs/grpc-types/protos/booking';
import { BeforeCreate, BeforeUpdate, Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '@libs/database/entities/base.model';
import { toUFT8NonSpecialCharacters } from '@libs/core';

@Table({
  modelName: 'booking',
  tableName: 'bookings',
  underscored: true,
})
export class BookingModel extends BaseModel<BookingModel> {
  @Column({ type: DataType.INTEGER })
  status?: EBookingStatus;

  @Column({ type: DataType.TEXT })
  startTime?: string;

  @Column({ type: DataType.TEXT })
  endTime?: string;

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({ type: DataType.TEXT })
  cancelReason?: string;

  @Column({ type: DataType.TEXT })
  bookingDate?: string;

  @Column({ type: DataType.INTEGER })
  durationHour?: number;

  @Column({ type: DataType.INTEGER })
  durationMinute?: number;

  @Column({ type: DataType.INTEGER })
  duration?: number;

  @Column({
    type: 'tsvector',
    allowNull: true,
  })
  search?: string;

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: BookingModel) {
    const columnsToConcatenate = ['status', 'cancelReason', 'startTime', 'endTime', 'note', 'bookingDate'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }
}

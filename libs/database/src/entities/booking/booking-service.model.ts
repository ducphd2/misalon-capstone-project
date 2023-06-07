import { BaseModel } from '@libs/database/entities/base.model';
import { BookingModel } from '@libs/database/entities/booking/booking.model';
import { ServiceModel } from '@libs/database/entities/merchant';
import { EBookingStatus } from '@libs/grpc-types/protos/commons';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'booking_service',
  tableName: 'booking_services',
  underscored: true,
})
export class BookingServiceModel extends BaseModel<BookingServiceModel> {
  @Column({ type: DataType.INTEGER })
  status?: EBookingStatus;

  @ForeignKey(() => BookingModel)
  @Column({ type: DataType.INTEGER })
  bookingId?: number;

  @ForeignKey(() => ServiceModel)
  @Column({ type: DataType.INTEGER })
  serviceId?: number;

  @BelongsTo(() => BookingModel)
  booking?: BookingModel;

  @BelongsTo(() => ServiceModel)
  service?: ServiceModel;

  booking_count?: number;
}

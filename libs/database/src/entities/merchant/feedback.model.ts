import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { EFeedbackType } from '@libs/grpc-types/protos/feedback';

import { BookingModel } from '../booking';
import { ServiceModel } from '../merchant';
import { UserModel } from '../user';
import { BaseModel } from '../base.model';

@Table({
  modelName: 'feedback',
  tableName: 'feedbacks',
  underscored: true,
})
export class FeedbackModel extends BaseModel<FeedbackModel> {
  @ForeignKey(() => ServiceModel)
  @Column({ type: DataType.INTEGER })
  serviceId?: number;

  @Column({ type: DataType.INTEGER })
  type?: EFeedbackType;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId?: number;

  @Column({ type: DataType.INTEGER })
  rating?: number;

  @Column({ type: DataType.TEXT })
  content?: string;

  @ForeignKey(() => BookingModel)
  @Column({ type: DataType.INTEGER })
  bookingId?: number;

  @BelongsTo(() => UserModel)
  user?: UserModel;

  @BelongsTo(() => BookingModel)
  booking?: BookingModel;

  @BelongsTo(() => ServiceModel)
  service?: ServiceModel;
}

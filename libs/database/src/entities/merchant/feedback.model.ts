import { Column, DataType, Table } from 'sequelize-typescript';
import { EFeedbackType } from '@libs/grpc-types/protos/feedback';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'feedback',
  tableName: 'feedbacks',
  underscored: true,
})
export class FeedbackModel extends BaseModel<FeedbackModel> {
  @Column({ type: DataType.INTEGER })
  serviceId?: number;

  @Column({ type: DataType.INTEGER })
  type?: EFeedbackType;

  @Column({ type: DataType.INTEGER })
  userId?: number;

  @Column({ type: DataType.INTEGER })
  rating?: number;

  @Column({ type: DataType.TEXT })
  content?: string;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.INTEGER })
  groupId?: number;

  @Column({ type: DataType.INTEGER })
  bookingId?: number;

  @Column({ type: DataType.INTEGER })
  branchId?: number;
}

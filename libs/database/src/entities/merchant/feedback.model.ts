import { Column, DataType, Table } from 'sequelize-typescript';

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
}

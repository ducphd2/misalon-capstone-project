import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'notification',
  tableName: 'notifications',
  underscored: true,
})
export class NotificationModel extends BaseModel<NotificationModel> {
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.TEXT })
  content: string;
}

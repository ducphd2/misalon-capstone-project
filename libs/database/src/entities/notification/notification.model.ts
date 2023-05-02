import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

import { ENotificationType } from '@/api-gateway/dtos';

@Table({
  modelName: 'notification',
  tableName: 'notifications',
  underscored: true,
})
export class NotificationModel extends BaseModel<NotificationModel> {
  @Column({ type: DataType.INTEGER })
  senderId: number;

  @Column({ type: DataType.TEXT })
  titleEn: string;

  @Column({ type: DataType.TEXT })
  titleVi: string;

  @Column({ type: DataType.TEXT })
  bodyEn: string;

  @Column({ type: DataType.TEXT })
  bodyVi: string;

  @Column({ type: DataType.INTEGER })
  type: ENotificationType;

  @Column({ type: DataType.TEXT })
  data_json: string;
}

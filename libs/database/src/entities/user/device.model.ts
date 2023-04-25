import { EDeviceOs } from '@libs/grpc-types/protos/device';
import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'device',
  tableName: 'devices',
  underscored: true,
})
export class DeviceModel extends BaseModel<DeviceModel> {
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.INTEGER })
  os: EDeviceOs;

  @Column({ type: DataType.TEXT })
  deviceId: string;

  @Column({ type: DataType.TEXT })
  token: string;
}

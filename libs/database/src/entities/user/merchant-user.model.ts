import { EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { Table, Column, DataType } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'merchant_user',
  tableName: 'merchant_users',
  underscored: true,
})
export class MerchantUserModel extends BaseModel<MerchantUserModel> {
  @Column({ type: DataType.INTEGER })
  role?: EUserRole;

  @Column({ type: DataType.INTEGER })
  status?: EUserStatus;

  @Column({ type: DataType.DOUBLE })
  price?: number;

  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;
}

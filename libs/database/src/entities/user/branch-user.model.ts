import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';

import { BranchModel } from '../merchant';
import { BaseModel } from '../base.model';

import { UserModel } from './user.model';

@Table({
  modelName: 'branch_user',
  tableName: 'branch_users',
  underscored: true,
})
export class BranchUserModel extends BaseModel<BranchUserModel> {
  @ForeignKey(() => BranchModel)
  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId?: number;

  @BelongsTo(() => BranchModel)
  branch?: BranchModel;

  @BelongsTo(() => UserModel)
  user?: UserModel;
}

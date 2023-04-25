import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'group',
  tableName: 'groups',
  underscored: true,
})
export class GroupModel extends BaseModel<GroupModel> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  merchantId?: number;

  @Column({ type: DataType.TEXT })
  sku?: string;

  @Column({ type: DataType.TEXT })
  code?: string;

  @Column({ type: DataType.TEXT })
  name?: string;

  @Column({ type: DataType.TEXT })
  description?: string;

  @Column({ type: DataType.TEXT })
  image?: string;
}

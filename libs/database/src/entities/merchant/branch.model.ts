import { Column, DataType, Table } from 'sequelize-typescript';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'branch',
  tableName: 'branches',
  underscored: true,
})
export class BranchModel extends BaseModel<BranchModel> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  merchantId?: number;

  @Column({ type: DataType.TEXT })
  name?: string;

  @Column({ type: DataType.TEXT })
  address?: string;

  @Column({ type: DataType.TEXT })
  phone?: string;

  @Column({ type: DataType.INTEGER })
  cityCode?: number;

  @Column({ type: DataType.INTEGER })
  districtCode?: number;

  @Column({ type: DataType.INTEGER })
  wardCode?: number;

  @Column({ type: DataType.TEXT })
  city?: string;

  @Column({ type: DataType.TEXT })
  district?: string;

  @Column({ type: DataType.TEXT })
  ward?: string;

  @Column({
    type: DataType.GEOMETRY('POINT'),
    allowNull: true,
    defaultValue: { type: 'Point', coordinates: [0, 0] },
  })
  coordinate: { type: 'Point'; coordinates: [number, number] };

  @Column({
    type: 'tsvector',
    allowNull: true,
  })
  search?: string;
}

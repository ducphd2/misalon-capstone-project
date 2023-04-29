import { BeforeCreate, BeforeUpdate, Column, DataType, Table } from 'sequelize-typescript';
import { toUFT8NonSpecialCharacters } from '@libs/core';

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

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search?: string;

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: GroupModel) {
    const columnsToConcatenate = ['name', 'code', 'sku', 'description'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }
}

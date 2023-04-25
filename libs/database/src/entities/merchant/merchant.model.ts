import { BeforeCreate, BeforeUpdate, Column, DataType, Table } from 'sequelize-typescript';
import { toUFT8NonSpecialCharacters } from '@libs/core';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'merchant',
  tableName: 'merchants',
  underscored: true,
})
export class MerchantModel extends BaseModel<MerchantModel> {
  @Column({ type: DataType.INTEGER })
  userId?: number;

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
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  latitude?: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  longitude?: number;

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

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: MerchantModel) {
    const columnsToConcatenate = ['name', 'phone', 'address', 'city', 'district', 'ward'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }
}

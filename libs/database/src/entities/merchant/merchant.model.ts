import { BeforeCreate, BeforeUpdate, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { toUFT8NonSpecialCharacters } from '@libs/core';
import { GroupModel } from '@libs/database/entities/merchant/group.model';
import { ServiceModel } from '@libs/database/entities/merchant/service.model';

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
    // defaultValue: { type: 'Point', coordinates: [0, 0] },
  })
  coordinate: { type: 'Point'; coordinates: [number, number] };

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search?: string;

  @HasMany(() => GroupModel)
  groups?: GroupModel[];

  @HasMany(() => ServiceModel)
  services?: ServiceModel[];

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: MerchantModel) {
    const columnsToConcatenate = ['name', 'phone', 'address', 'city', 'district', 'ward'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }

  @BeforeCreate
  @BeforeUpdate
  static async upsertCoordinate(model: MerchantModel) {
    if (model.latitude && model.longitude) {
      model.coordinate = {
        type: 'Point',
        coordinates: [model.latitude, model.longitude],
      };
    }
  }
}

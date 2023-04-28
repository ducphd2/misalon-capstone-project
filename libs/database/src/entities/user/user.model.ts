import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { hash } from 'argon2';
import { BeforeCreate, BeforeUpdate, Column, DataType, Table } from 'sequelize-typescript';
import { toUFT8NonSpecialCharacters } from '@libs/core';

import { BaseModel } from '../base.model';

@Table({
  modelName: 'user',
  tableName: 'users',
  underscored: true,
})
export class UserModel extends BaseModel<UserModel> {
  @Column({ type: DataType.TEXT })
  email?: string;

  @Column({ type: DataType.TEXT })
  password?: string;

  @Column({ type: DataType.INTEGER })
  role?: EUserRole;

  @Column({ type: DataType.INTEGER })
  status?: EUserStatus;

  @Column({ type: DataType.INTEGER })
  gender?: EUserGender;

  @Column({ type: DataType.TEXT })
  fullName?: string;

  @Column({ type: DataType.BOOLEAN })
  isRetailCustomer?: boolean;

  @Column({ type: DataType.TEXT })
  contact?: string;

  @Column({ type: DataType.TEXT })
  phoneNumber?: string;

  @Column({ type: DataType.INTEGER })
  dobDay?: number;

  @Column({ type: DataType.INTEGER })
  dobMonth?: number;

  @Column({ type: DataType.INTEGER })
  dobYear?: number;

  @Column({ type: DataType.TEXT })
  occupation?: string;

  @Column({ type: DataType.TEXT })
  avatar?: string;

  @Column({ type: DataType.TEXT })
  address?: string;

  @Column({ type: DataType.TEXT })
  cityCode?: number;

  @Column({ type: DataType.TEXT })
  districtCode?: number;

  @Column({ type: DataType.TEXT })
  wardCode?: number;

  @Column({ type: DataType.INTEGER })
  level?: ECustomerLevel;

  @Column({ type: DataType.TEXT })
  referrer?: string;

  @Column({ type: DataType.TEXT })
  referrerCode?: string;

  @Column({ type: DataType.TEXT })
  customerCode?: string;

  @Column({ type: DataType.TEXT })
  facebook?: string;

  @Column({ type: DataType.TEXT })
  zaloPhone?: string;

  @Column({ type: DataType.INTEGER })
  height?: number;

  @Column({ type: DataType.INTEGER })
  weight?: number;

  @Column({ type: DataType.TEXT })
  memberCardNo?: string;

  @Column({ type: DataType.TEXT })
  company?: string;

  @Column({ type: DataType.TEXT })
  taxNo?: string;

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({ type: DataType.TEXT })
  relatedUser?: string;

  @Column({ type: DataType.TEXT })
  relatedUserRole?: string;

  @Column({ type: DataType.TEXT })
  relatedUserPhone?: string;

  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

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

  @Column({ type: DataType.TEXT })
  fuzzySearch?: string;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: UserModel) {
    if (!user.password) return;
    user.password = await hash(user.password);
  }

  @BeforeCreate
  @BeforeUpdate
  static async updateSearch(model: UserModel) {
    const columnsToConcatenate = ['email', 'fullName', 'contact', 'phoneNumber', 'address'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('search', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }

  @BeforeCreate
  @BeforeUpdate
  static async updateFuzzySearch(model: UserModel) {
    const columnsToConcatenate = ['email', 'fullName', 'contact', 'phoneNumber', 'address'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => (model.get(columnName) ? model.get(columnName) : ' '))
      .join(' ');

    model.setDataValue('fuzzySearch', concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues)));
  }
}

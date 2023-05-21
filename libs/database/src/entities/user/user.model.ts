import { ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { hash } from 'argon2';
import { BeforeCreate, BeforeUpdate, Column, DataType, HasMany, HasOne, Table } from 'sequelize-typescript';
import { toUFT8NonSpecialCharacters } from '@libs/core';

import { FeedbackModel, MerchantModel } from '../merchant';
import { BookingModel } from '../booking';
import { BaseModel } from '../base.model';

import { ELangNumber } from '@/api-gateway/dtos';

@Table({
  modelName: 'user',
  tableName: 'users',
  underscored: true,
})
export class UserModel extends BaseModel<UserModel> {
  @Column({ type: DataType.TEXT })
  email?: string;

  @Column({ type: DataType.TEXT })
  subdomain?: string;

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

  @Column({ type: DataType.TEXT })
  contact?: string;

  @Column({ type: DataType.TEXT })
  phoneNumber?: string;

  @Column({ type: DataType.INTEGER })
  age?: number;

  @Column({ type: DataType.TEXT })
  job?: string;

  @Column({ type: DataType.TEXT })
  avatar?: string;

  @Column({ type: DataType.TEXT })
  address?: string;

  @Column({ type: DataType.INTEGER })
  level?: ECustomerLevel;

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({ type: DataType.INTEGER })
  branchId?: number;

  @Column({ type: DataType.INTEGER })
  merchantId?: number;

  @Column({ type: DataType.INTEGER })
  lang?: ELangNumber = ELangNumber.VI;

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
  })
  coordinate: { type: 'Point'; coordinates: [number, number] };

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  search?: string;

  @HasMany(() => BookingModel)
  bookings?: BookingModel[];

  @HasMany(() => FeedbackModel)
  feedbacks?: FeedbackModel[];

  @HasOne(() => MerchantModel)
  merchant?: MerchantModel;

  @BeforeCreate
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
  static async upsertCoordinate(model: UserModel) {
    if (model.latitude && model.longitude) {
      model.coordinate = {
        type: 'Point',
        coordinates: [model.latitude, model.longitude],
      };
    }
  }
}

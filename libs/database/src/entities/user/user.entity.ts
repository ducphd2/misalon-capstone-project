import { toUFT8NonSpecialCharacters } from '@libs/core';
import { hash } from 'argon2';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { EActionRole, ECustomerLevel, EUserGender, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';

import { BaseEntity } from '../base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column('varchar', { nullable: true })
  email?: string;

  @Column('varchar', { nullable: true })
  password?: string;

  @Column('smallint', { nullable: true })
  role?: EUserRole;

  @Column('smallint', { nullable: true })
  actionRole?: EActionRole;

  @Column('smallint', { nullable: true })
  status?: EUserStatus;

  @Column('smallint', { nullable: true })
  gender?: EUserGender;

  @Column('varchar', { nullable: true })
  fullName?: string;

  @Column('boolean', { nullable: true })
  isRetailCustomer?: boolean;

  @Column('varchar', { nullable: true })
  contact?: string;

  @Column('varchar', { nullable: true })
  phoneNumber?: string;

  @Column('smallint', { nullable: true })
  dobDay?: number;

  @Column('smallint', { nullable: true })
  dobMonth?: number;

  @Column('smallint', { nullable: true })
  dobYear?: number;

  @Column('varchar', { nullable: true })
  occupation?: string;

  @Column('varchar', { nullable: true })
  avatar?: string;

  @Column('varchar', { nullable: true })
  address?: string;

  @Column('smallint', { nullable: true })
  cityCode?: number;

  @Column('smallint', { nullable: true })
  districtCode?: number;

  @Column('smallint', { nullable: true })
  wardCode?: number;

  @Column('smallint', { nullable: true })
  level?: ECustomerLevel;

  @Column('varchar', { nullable: true })
  referrer?: string;

  @Column('varchar', { nullable: true })
  referrerCode?: string;

  @Column('varchar', { nullable: true })
  customerCode?: string;

  @Column('varchar', { nullable: true })
  facebook?: string;

  @Column('varchar', { nullable: true })
  zaloPhone?: string;

  @Column('smallint', { nullable: true })
  height?: number;

  @Column('smallint', { nullable: true })
  weight?: number;

  @Column('varchar', { nullable: true })
  memberCardNo?: string;

  @Column('varchar', { nullable: true })
  company?: string;

  @Column('varchar', { nullable: true })
  taxNo?: string;

  @Column('varchar', { nullable: true })
  note?: string;

  @Column('varchar', { nullable: true })
  relatedUser?: string;

  @Column('varchar', { nullable: true })
  relatedUserRole?: string;

  @Column('varchar', { nullable: true })
  relatedUserPhone?: string;

  @Column('integer', { nullable: true })
  branchId?: number;

  @Column('integer', { nullable: true })
  merchantId?: number;

  @Column({
    type: 'double precision',
    default: 0,
  })
  latitude?: number;

  @Column({
    type: 'double precision',
    default: 0,
  })
  longitude?: number;

  @Column('tsvector', { nullable: true })
  search?: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      if (this.password) {
        this.password = await hash(this.password);
      }
    } catch (error) {
      console.log('Hash password error: ', error);
    }
  }

  @BeforeInsert()
  updateSearchColumn(): void {
    const columnsToConcatenate = ['email', 'fullName', 'address', 'contact', 'phoneNumber'];
    const concatenatedValues = columnsToConcatenate
      .map((columnName) => this[columnName]) // retrieve column values using bracket notation
      .filter((value) => value !== null && value !== undefined) // remove null or undefined values
      .join(' ');

    this.search = concatenatedValues.concat(' ', toUFT8NonSpecialCharacters(concatenatedValues));
  }
}

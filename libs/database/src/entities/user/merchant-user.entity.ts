import { EActionRole, EUserRole, EUserStatus } from '@libs/grpc-types/protos/commons';
import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base.entity';

@Entity('merchant_user')
export class MerchantUserEntity extends BaseEntity {
  @Column('smallint', { nullable: true })
  role?: EUserRole;

  @Column('smallint', { nullable: true })
  actionRole?: EActionRole;

  @Column('smallint', { nullable: true })
  status?: EUserStatus;

  @Column('integer', { nullable: true })
  userId?: number;

  @Column('integer', { nullable: true })
  branchId?: number;

  @Column('integer', { nullable: true })
  merchantId?: number;
}

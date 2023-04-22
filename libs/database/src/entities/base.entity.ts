import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: string;

  @DeleteDateColumn({ nullable: true, type: 'timestamp' })
  deletedAt?: string;

  @Column({ nullable: true, type: 'varchar' })
  createdBy?: string;

  @Column({ nullable: true, type: 'varchar' })
  updatedBy?: string;

  @Column({ nullable: true, type: 'varchar' })
  deletedBy?: string;

  @VersionColumn()
  version?: number;
}

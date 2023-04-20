import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({ type: 'varchar' })
  createdAt?: string;

  @UpdateDateColumn({ type: 'varchar' })
  updatedAt?: string;

  @DeleteDateColumn({ nullable: true, type: 'varchar' })
  deletedAt?: string;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: true })
  deletedBy?: string;

  @VersionColumn()
  version?: number;
}

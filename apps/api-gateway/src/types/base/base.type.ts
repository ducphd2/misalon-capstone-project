import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseType {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  createdAt?: string;

  @Field(() => String, { nullable: true })
  updatedAt?: string;

  @Field(() => String, { nullable: true })
  deletedAt?: string;

  @Field(() => String, { nullable: true })
  createdBy?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: true })
  deletedBy?: string;
}

@ObjectType()
export class PageInfo {
  @Field(() => String)
  startCursor?: string;

  @Field(() => String)
  endCursor?: string;

  @Field(() => Boolean)
  hasNextPage?: boolean;

  @Field(() => Boolean)
  hasPreviousPage?: boolean;
}

@ObjectType()
export class ErrorPayload {
  @Field(() => String, { nullable: true })
  field?: string;

  @Field(() => [String], { nullable: true })
  message?: string[];
}

export interface IErrorPayload {
  field?: string;
  message?: string[];
}

@ObjectType()
export class DeletePayload {
  @Field(() => [ErrorPayload], { nullable: true })
  errors?: ErrorPayload[];

  @Field(() => Int, { nullable: true })
  count?: number;
}

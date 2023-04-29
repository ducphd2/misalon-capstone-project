import { LIMIT, PAGE } from '@libs/core';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class BaseQueryDto {
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  page?: number = PAGE;

  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  limit?: number = LIMIT;

  @IsString()
  @IsOptional()
  q?: string;

  @IsString()
  @IsOptional()
  orderBy?: string = 'createdAt';

  @IsString()
  @IsOptional()
  orderDirection?: string = 'DESC';
}

export abstract class BaseDto<T> {
  constructor(params?: Record<string, unknown> | Partial<T>) {
    if (params) {
      this.setAttributes(params);
    }
  }

  setAttributes(params: Record<string, unknown> | Partial<T>): void {
    const keys = Object.keys(params);

    for (const key of keys) {
      this.setAttribute(key, params[key]);
    }
  }

  hasProperty(name: string): boolean {
    return true === Reflect.getMetadata('fields', this, name);
  }

  setAttribute(key: string, value: unknown): void {
    if (this.hasProperty(key)) {
      this[key] = value;
    }
  }
}

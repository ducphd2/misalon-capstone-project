import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOperatorBookingInput {
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  id: number;

  @IsNotEmpty()
  @IsInt()
  @Expose()
  role: number;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  price: number;

  @IsOptional()
  @IsString()
  @Expose()
  note: number;
}

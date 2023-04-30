import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMerchantInputDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  subdomain: string;

  @IsOptional()
  cityCode: number;

  @IsOptional()
  districtCode: number;

  @IsOptional()
  wardCode: number;

  @IsOptional()
  city: string;

  @IsOptional()
  district: string;

  @IsOptional()
  ward: string;
}

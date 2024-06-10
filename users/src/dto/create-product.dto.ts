import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;

  @IsString()
  readonly type: string;

  @IsArray()
  @IsOptional()
  readonly images?: string[];

  @IsString()
  readonly neighborhoodId: string;
}

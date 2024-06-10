import { IsString, IsOptional } from 'class-validator';

export class CreateNeighborhoodDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly country: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}

import { IsString, IsEmail, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly profileImage?: string;

  @IsString()
  @IsOptional()
  readonly bio?: string;

}

import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

// enum的な地域の設定と、型の生成
const genderValues = ['m', 'f', 'l'] as const;
type Gender = (typeof genderValues)[number];

const likeValues = ['windows', 'mac', 'linux'] as const;
type Like = (typeof likeValues)[number];

// Postの二階層目
export class CreateUserOptionDto {
  @ApiProperty()
  @IsIn(genderValues)
  @IsString()
  gender: Gender;

  @ApiProperty()
  @IsIn(likeValues)
  @IsString()
  like: Like;
}

// Postの一階層目
export class CreateUserDto {
  @ApiProperty()
  @IsEmail({})
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserOptionDto)
  option?: CreateUserOptionDto | undefined;
}

import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

const genderValues = ['m', 'f'] as const;
type Gender = (typeof genderValues)[number];

const likeValues = ['windows', 'mac', 'linux'] as const;
type Like = (typeof likeValues)[number];

export class CreateUserOptionDto {
  @IsIn(genderValues)
  @IsString()
  gender: Gender;

  @IsIn(likeValues)
  @IsString()
  like: Like;
}

export class CreateUserDto {
  @IsEmail({})
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserOptionDto)
  option?: CreateUserOptionDto | undefined;
}

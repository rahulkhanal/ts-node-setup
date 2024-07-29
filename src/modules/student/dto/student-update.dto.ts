import { IsString, IsNumber, IsEmail, Length, IsOptional } from 'class-validator';

export class StudentUpdateDto {
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsEmail()
  email?: string;

  constructor(name?: string, age?: number, email?: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

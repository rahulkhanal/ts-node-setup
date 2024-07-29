import { IsString, IsNumber, IsEmail, Length } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

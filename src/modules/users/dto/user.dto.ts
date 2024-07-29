import { IsString, IsInt, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UserDto {
    @IsString()
    name: string | undefined;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value?.trim())
    email?: string;
}

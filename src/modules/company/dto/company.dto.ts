import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateCompanyDto {
    @ApiProperty({ description: 'Company name', example: 'ShareIn Agency' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ description: 'Company email', example: 'info@sharein.com' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ description: 'Contact phone', example: '01012345678' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ description: 'Website URL', example: 'https://sharein.com' })
    @IsOptional()
    @IsString()
    website?: string;

    @ApiProperty({ description: 'Company address', example: '123 Media St, Cairo' })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiProperty({ description: 'Industry speciality', example: 'Digital Marketing' })
    @IsOptional()
    @IsString()
    speciality?: string;
}

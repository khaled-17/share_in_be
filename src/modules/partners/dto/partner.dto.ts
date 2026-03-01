import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreatePartnerDto {
    @ApiProperty({ description: 'Unique partner code', example: 'PART-001' })
    @IsNotEmpty()
    @IsString()
    partner_code: string;

    @ApiProperty({ description: 'Partner name', example: 'Khaled Mohamed' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'Phone number', example: '01234567890' })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ description: 'Email address', example: 'khaled@partner.com' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ description: 'Initial capital contribution', example: 50000 })
    @IsOptional()
    @IsNumber()
    initial_capital?: number;

    @ApiProperty({ description: 'Current capital value', example: 75000 })
    @IsOptional()
    @IsNumber()
    current_capital?: number;
}

export class UpdatePartnerDto {
    @ApiProperty({ description: 'Partner name', example: 'Khaled Mohamed', required: false })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({ description: 'Phone number', example: '01234567890', required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({ description: 'Email address', example: 'khaled@partner.com', required: false })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ description: 'Initial capital contribution', example: 50000, required: false })
    @IsOptional()
    @IsNumber()
    initial_capital?: number;

    @ApiProperty({ description: 'Current capital value', example: 75000, required: false })
    @IsOptional()
    @IsNumber()
    current_capital?: number;
}

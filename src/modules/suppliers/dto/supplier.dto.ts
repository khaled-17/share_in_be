import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({
    description: 'Auto-generated unique supplier identifier',
    example: 'SU001',
    required: false,
  })
  @IsOptional()
  @IsString()
  supplier_id?: string;

  @ApiProperty({ description: 'Company name', example: 'Global Logistics' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Contact person name', example: 'Jane Smith' })
  @IsOptional()
  @IsString()
  contact_person?: string;

  @ApiProperty({
    description: 'Company email',
    example: 'contact@globallog.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Primary phone number', example: '01098765432' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Secondary phone number',
    example: '01198765432',
  })
  @IsOptional()
  @IsString()
  secondary_phone?: string;

  @ApiProperty({
    description: 'Physical address',
    example: '456 Supply Rd, Alexandria, Egypt',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Business speciality',
    example: 'General Supplies',
  })
  @IsOptional()
  @IsString()
  speciality?: string;
}

export class UpdateSupplierDto {
  @ApiProperty({
    description: 'Company name',
    example: 'Global Logistics',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Contact person name',
    example: 'Jane Smith',
    required: false,
  })
  @IsOptional()
  @IsString()
  contact_person?: string;

  @ApiProperty({
    description: 'Company email',
    example: 'contact@globallog.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Primary phone number',
    example: '01098765432',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Secondary phone number',
    example: '01198765432',
    required: false,
  })
  @IsOptional()
  @IsString()
  secondary_phone?: string;

  @ApiProperty({
    description: 'Physical address',
    example: '456 Supply Rd, Alexandria, Egypt',
    required: false,
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Business speciality',
    example: 'General Supplies',
    required: false,
  })
  @IsOptional()
  @IsString()
  speciality?: string;
}

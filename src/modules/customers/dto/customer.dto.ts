import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Auto-generated unique customer identifier',
    example: 'CU001',
    required: false,
  })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({
    description: 'Full name of the customer',
    example: 'Middle East Tech',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Contact person name',
    example: 'Ahmed Ali',
  })
  @IsNotEmpty()
  @IsString()
  contact_person: string;

  @ApiProperty({
    description: 'Primary company email',
    example: 'info@metech.com',
  })
  @IsNotEmpty()
  @IsEmail()
  company_email: string;

  @ApiProperty({
    description: 'Contact person email',
    example: 'ahmed@metech.com',
  })
  @IsNotEmpty()
  @IsEmail()
  contact_email: string;

  @ApiProperty({
    description: 'Primary phone number',
    example: '01012345678',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Secondary phone number',
    example: '01112345678',
  })
  @IsNotEmpty()
  @IsString()
  secondary_phone: string;

  @ApiProperty({
    description: 'Physical address',
    example: '123 Business St, Cairo, Egypt',
  })
  @IsNotEmpty()
  @IsString()
  address: string;
}

export class UpdateCustomerDto {
  @ApiProperty({
    description: 'Full name of the customer',
    example: 'Middle East Tech',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Contact person name',
    example: 'Ahmed Ali',
    required: false,
  })
  @IsOptional()
  @IsString()
  contact_person?: string;

  @ApiProperty({
    description: 'Primary company email',
    example: 'info@metech.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  company_email?: string;

  @ApiProperty({
    description: 'Contact person email',
    example: 'ahmed@metech.com',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  contact_email?: string;

  @ApiProperty({
    description: 'Primary phone number',
    example: '01012345678',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Secondary phone number',
    example: '01112345678',
    required: false,
  })
  @IsOptional()
  @IsString()
  secondary_phone?: string;

  @ApiProperty({
    description: 'Physical address',
    example: '123 Business St, Cairo, Egypt',
    required: false,
  })
  @IsOptional()
  @IsString()
  address?: string;
}

export class CustomerQueryDto {
  @ApiProperty({ description: 'Page number', example: 1, required: false })
  @IsOptional()
  page?: number;

  @ApiProperty({ description: 'Items per page', example: 10, required: false })
  @IsOptional()
  limit?: number;

  @ApiProperty({ description: 'Search term', example: 'Tech', required: false })
  @IsOptional()
  search?: string;
}

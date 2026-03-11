import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectTypeDto {
  @ApiProperty({
    description: 'Project Type ID',
    example: 'P001',
  })
  @IsNotEmpty()
  @IsString()
  type_id: string;

  @ApiProperty({
    description: 'The name of the project type',
    example: 'Social Media',
  })
  @IsNotEmpty()
  @IsString()
  type_name: string;
}

export class UpdateProjectTypeDto {
  @ApiProperty({
    description: 'The name of the project type',
    example: 'Social Media Management',
    required: false,
  })
  @IsOptional()
  @IsString()
  type_name?: string;
}

export class CreateCountryDto {
  @ApiProperty({
    description: 'Unique country code (e.g. EG, SA, US)',
    example: 'EG',
  })
  @IsNotEmpty()
  @IsString()
  country_code: string;

  @ApiProperty({
    description: 'Country name',
    example: 'Egypt',
  })
  @IsNotEmpty()
  @IsString()
  country_name: string;
}

export class UpdateCountryDto {
  @ApiProperty({ description: 'Country code', example: 'EG', required: false })
  @IsOptional()
  @IsString()
  country_code?: string;

  @ApiProperty({
    description: 'Country name',
    example: 'Egypt',
    required: false,
  })
  @IsOptional()
  @IsString()
  country_name?: string;
}

export class CreateExpenseTypeDto {
  @ApiProperty({ description: 'Expense type ID', example: 'EXP001' })
  @IsNotEmpty()
  @IsString()
  exptype_id: string;

  @ApiProperty({ description: 'Expense type name', example: 'Office Supplies' })
  @IsNotEmpty()
  @IsString()
  exptype_name: string;

  @ApiProperty({ description: 'Category', example: 'General', required: false })
  @IsOptional()
  @IsString()
  category?: string;
}

export class UpdateExpenseTypeDto {
  @ApiProperty({
    description: 'Expense type name',
    example: 'Office Supplies',
    required: false,
  })
  @IsOptional()
  @IsString()
  exptype_name?: string;

  @ApiProperty({ description: 'Category', example: 'General', required: false })
  @IsOptional()
  @IsString()
  category?: string;
}

export class CreateRevenueTypeDto {
  @ApiProperty({ description: 'Revenue type ID', example: 'REV001' })
  @IsNotEmpty()
  @IsString()
  revtype_id: string;

  @ApiProperty({ description: 'Revenue type name', example: 'Consulting' })
  @IsNotEmpty()
  @IsString()
  revtype_name: string;

  @ApiProperty({
    description: 'Payment method',
    example: 'Visa',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymethod?: string;
}

export class UpdateRevenueTypeDto {
  @ApiProperty({
    description: 'Revenue type name',
    example: 'Consulting',
    required: false,
  })
  @IsOptional()
  @IsString()
  revtype_name?: string;

  @ApiProperty({
    description: 'Payment method',
    example: 'Visa',
    required: false,
  })
  @IsOptional()
  @IsString()
  paymethod?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Auto-generated unique employee code',
    example: 'EM001',
    required: false,
  })
  @IsOptional()
  @IsString()
  emp_code?: string;

  @ApiProperty({
    description: 'Full name of the employee',
    example: 'Mohamed Hassan',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Phone number', example: '01022334455' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ description: 'Job position', example: 'Site Manager' })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ description: 'Monthly salary', example: 15000 })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty({ description: 'Employment start date', example: '2023-01-01' })
  @IsOptional()
  @IsString()
  start_date?: string;
}

export class UpdateEmployeeDto {
  @ApiProperty({
    description: 'Full name of the employee',
    example: 'Mohamed Hassan',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Phone number',
    example: '01022334455',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Job position',
    example: 'Site Manager',
    required: false,
  })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({
    description: 'Monthly salary',
    example: 15000,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty({
    description: 'Employment start date',
    example: '2023-01-01',
    required: false,
  })
  @IsOptional()
  @IsString()
  start_date?: string;
}

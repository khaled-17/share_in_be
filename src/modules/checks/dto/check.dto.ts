import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

export enum CheckStatus {
  PENDING = 'pending',
  CLEARED = 'cleared',
  BOUNCED = 'bounced',
  CANCELLED = 'cancelled',
}

export class CreateCheckDto {
  @ApiProperty({ description: 'Check number', example: 'CHK-123456' })
  @IsNotEmpty()
  @IsString()
  check_number: string;

  @ApiProperty({ description: 'Bank name', example: 'CIB' })
  @IsNotEmpty()
  @IsString()
  bank_name: string;

  @ApiProperty({ description: 'Check date', example: '2023-12-31' })
  @IsNotEmpty()
  @IsString()
  check_date: string;

  @ApiProperty({ description: 'Check amount', example: 5000 })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Check status',
    example: CheckStatus.PENDING,
    enum: CheckStatus,
  })
  @IsOptional()
  @IsEnum(CheckStatus)
  status?: CheckStatus;

  @ApiProperty({ description: 'Beneficiary name', example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  beneficiary_name: string;

  @ApiProperty({ description: 'Notes', example: 'Example notes' })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateCheckDto {
  @ApiProperty({
    description: 'Check status',
    example: CheckStatus.CLEARED,
    enum: CheckStatus,
    required: false,
  })
  @IsOptional()
  @IsEnum(CheckStatus)
  status?: CheckStatus;

  @ApiProperty({
    description: 'Bank name',
    example: 'CIB',
    required: false,
  })
  @IsOptional()
  @IsString()
  bank_name?: string;

  @ApiProperty({
    description: 'Check date',
    example: '2023-12-31',
    required: false,
  })
  @IsOptional()
  @IsString()
  check_date?: string;

  @ApiProperty({
    description: 'Check amount',
    example: 5000,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({
    description: 'Notes',
    example: 'Example notes',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Beneficiary name',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  beneficiary_name?: string;
}

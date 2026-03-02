import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateRevenueDto {
  @ApiProperty({ description: 'Revenue transaction code', example: 'REV-001', required: false })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Transaction date', example: '2023-10-01' })
  @IsNotEmpty()
  @IsString()
  rev_date: string;

  @ApiProperty({ description: 'Revenue amount', example: 1500.5 })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Receipt number (Receipt #, etc.)',
    example: 'REC-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Internal quotation ID reference', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  quote_id?: number;

  @ApiProperty({ description: 'Notes or description', example: 'Installation Service', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Customer ID', example: 'CUST-001' })
  @IsNotEmpty()
  @IsString()
  customer_id: string;

  @ApiProperty({ description: 'Revenue Type ID', example: 'TYPE-001' })
  @IsNotEmpty()
  @IsString()
  revtype_id: string;
}

export class UpdateRevenueDto {
  @ApiProperty({ description: 'Revenue transaction code', example: 'REV-001', required: false })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Transaction date', example: '2023-10-01', required: false })
  @IsOptional()
  @IsString()
  rev_date?: string;

  @ApiProperty({ description: 'Revenue amount', example: 1500.5, required: false })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({ description: 'Receipt number', example: 'REC-001', required: false })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Internal quotation ID reference', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  quote_id?: number;

  @ApiProperty({ description: 'Notes or description', example: 'Installation Service', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Customer ID', example: 'CUST-001', required: false })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({ description: 'Revenue Type ID', example: 'TYPE-001', required: false })
  @IsOptional()
  @IsString()
  revtype_id?: string;
}

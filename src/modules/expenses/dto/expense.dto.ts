import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';

export class CreateExpenseDto {
  @ApiProperty({ description: 'Expense code', example: 'EXP-001' })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Expense date', example: '2023-10-01' })
  @IsNotEmpty()
  @IsString()
  exp_date: string;

  @ApiProperty({ description: 'Expense amount', example: 250.75 })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Receipt number', example: 'REC-123' })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Quote ID', example: 1 })
  @IsOptional()
  @IsNumber()
  quote_id?: number;

  @ApiProperty({ description: 'Notes', example: 'Office supplies' })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'Supplier ID', example: 'SUP-001' })
  @IsNotEmpty()
  @IsString()
  supplier_id: string;

  @ApiProperty({ description: 'Expense type ID', example: 'EXT-001' })
  @IsNotEmpty()
  @IsString()
  exptype_id: string;
}

export class UpdateExpenseDto {
  @ApiProperty({
    description: 'Expense code',
    example: 'EXP-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty({
    description: 'Expense date',
    example: '2023-10-01',
    required: false,
  })
  @IsOptional()
  @IsString()
  exp_date?: string;

  @ApiProperty({
    description: 'Expense amount',
    example: 250.75,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({
    description: 'Receipt number',
    example: 'REC-123',
    required: false,
  })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Quote ID', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  quote_id?: number;

  @ApiProperty({
    description: 'Notes',
    example: 'Office supplies',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Supplier ID',
    example: 'SUP-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  supplier_id?: string;

  @ApiProperty({
    description: 'Expense type ID',
    example: 'EXT-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  exptype_id?: string;
}

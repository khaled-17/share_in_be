import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

export enum VoucherSourceType {
  PARTNER_CAPITAL = 'partner_capital',
  OTHERS = 'others',
}

export class CheckDetailDto {
  @IsOptional()
  @IsString()
  check_number?: string;

  @IsOptional()
  @IsString()
  bank_name?: string;

  @IsOptional()
  @IsString()
  check_date?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

export class CreateReceiptVoucherDto {
  @ApiProperty({ description: 'Voucher number', example: 'REC-001' })
  @IsNotEmpty()
  @IsString()
  voucher_number: string;

  @ApiProperty({ description: 'Voucher date', example: '2023-10-01' })
  @IsNotEmpty()
  @IsString()
  voucher_date: string;

  @ApiProperty({ description: 'Voucher amount', example: 1000 })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Internal partner ID', example: 1 })
  @IsOptional()
  @IsNumber()
  partner_id?: number;

  @ApiProperty({
    description: 'Source type',
    example: VoucherSourceType.PARTNER_CAPITAL,
    enum: VoucherSourceType,
  })
  @IsNotEmpty()
  @IsEnum(VoucherSourceType)
  source_type: VoucherSourceType;

  @ApiProperty({
    description: 'Name (if source is Others)',
    example: 'John Smith',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Payment method', example: 'Cash' })
  @IsNotEmpty()
  @IsString()
  payment_method: string;

  @ApiProperty({ description: 'Description', example: 'Advance payment' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Received from', example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  received_from: string;

  @ApiProperty({
    description: 'Check detail (if payment method is Check)',
    type: CheckDetailDto,
  })
  @IsOptional()
  check?: CheckDetailDto;

  @ApiProperty({
    description: 'Check ID (if payment method is Check)',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  check_id?: number;
}

export class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {
  @ApiProperty({ description: 'Beneficiary type', example: 'supplier' })
  @IsOptional()
  @IsString()
  beneficiary_type?: string;

  @ApiProperty({ description: 'Supplier ID', example: 'SUP-001' })
  @IsOptional()
  @IsString()
  supplier_id?: string;

  @ApiProperty({ description: 'Employee ID', example: 'EMP-001' })
  @IsOptional()
  @IsString()
  employee_id?: string;

  @ApiProperty({ description: 'Expense type ID', example: 'EXP-001' })
  @IsOptional()
  @IsString()
  expense_type_id?: string;

  @ApiProperty({ description: 'Paid to', example: 'Supplier Name' })
  @IsNotEmpty()
  @IsString()
  paid_to: string;
}

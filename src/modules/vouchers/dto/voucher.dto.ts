import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

export enum VoucherSourceType {
  CUSTOMER = 'customer',
  PARTNER_CAPITAL = 'partner_capital',
  ADVANCE_PAYMENT = 'advance_payment',
  OTHER = 'other',
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

  @IsOptional()
  @IsString()
  beneficiary_name?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;
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

  @ApiProperty({ description: 'Internal customer ID', example: 'CUST-001' })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({ description: 'Internal partner ID', example: 1 })
  @IsOptional()
  @IsNumber()
  partner_id?: number;

  @ApiProperty({
    description: 'Source type',
    example: VoucherSourceType.CUSTOMER,
    enum: VoucherSourceType,
  })
  @IsNotEmpty()
  @IsEnum(VoucherSourceType)
  source_type: VoucherSourceType;

  @ApiProperty({ description: 'Payment method', example: 'cash' })
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
    required: false,
  })
  @IsOptional()
  check?: CheckDetailDto;

  @ApiProperty({
    description: 'Check ID (if payment method is Check)',
    example: 1,
    required: false,
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

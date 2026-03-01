import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

export enum VoucherSourceType {
  PARTNER = 'شريك',
  OTHERS = 'أخرى',
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
    example: VoucherSourceType.PARTNER,
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

  @ApiProperty({
    description: 'Check ID (if payment method is Check)',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  check_id?: number;
}

export class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {}

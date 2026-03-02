import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuotationItemDto {
  @ApiProperty({
    description: 'Item description',
    example: 'Web Development Services',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Unit price', example: 1500 })
  @IsNotEmpty()
  @IsNumber()
  unit_price: number;

  @ApiProperty({ description: 'Quantity', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: 'Total price for this item', example: 1500 })
  @IsNotEmpty()
  @IsNumber()
  total: number;
}

export class CreateQuotationDto {
  @ApiProperty({ description: 'Customer ID ref (Internal)', example: 'CUST-001' })
  @IsNotEmpty()
  @IsString()
  customer_id: string;

  @ApiProperty({ description: 'Project type ID', example: 'TYPE-001' })
  @IsOptional()
  @IsString()
  project_type_id?: string;

  @ApiProperty({ description: 'Project manager', example: 'John Doe' })
  @IsOptional()
  @IsString()
  project_manager?: string;

  @ApiProperty({ description: 'Project name', example: 'Web Redesign' })
  @IsOptional()
  @IsString()
  project_name?: string;

  @ApiProperty({ description: 'Quotation date', example: '2023-10-01' })
  @IsNotEmpty()
  @IsString()
  quote_date: string;

  @ApiProperty({ description: 'Delivery date', example: '2023-10-31' })
  @IsOptional()
  @IsString()
  delivery_date?: string;

  @ApiProperty({ description: 'Total amount', example: 5000 })
  @IsNotEmpty()
  @IsNumber()
  totalamount: number;

  @ApiProperty({ description: 'Paid advance amount', example: 1000 })
  @IsOptional()
  @IsNumber()
  paid_adv?: number;

  @ApiProperty({ description: 'Advance payment date', example: '2023-10-05' })
  @IsOptional()
  @IsString()
  adv_date?: string;

  @ApiProperty({ description: 'Receipt number for advance', example: 'REC-123' })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Status', example: 'Pending' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    description: 'Quotation items',
    type: [CreateQuotationItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuotationItemDto)
  items: CreateQuotationItemDto[];
}

export class UpdateQuotationDto {
  @ApiProperty({ description: 'Customer ID ref (Internal)', example: 'CUST-001', required: false })
  @IsOptional()
  @IsString()
  customer_id?: string;

  @ApiProperty({ description: 'Project type ID', example: 'TYPE-001', required: false })
  @IsOptional()
  @IsString()
  project_type_id?: string;

  @ApiProperty({ description: 'Project manager', example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  project_manager?: string;

  @ApiProperty({ description: 'Project name', example: 'Web Redesign', required: false })
  @IsOptional()
  @IsString()
  project_name?: string;

  @ApiProperty({ description: 'Quotation date', example: '2023-10-01', required: false })
  @IsOptional()
  @IsString()
  quote_date?: string;

  @ApiProperty({ description: 'Delivery date', example: '2023-10-31', required: false })
  @IsOptional()
  @IsString()
  delivery_date?: string;

  @ApiProperty({ description: 'Total amount', example: 5000, required: false })
  @IsOptional()
  @IsNumber()
  totalamount?: number;

  @ApiProperty({ description: 'Paid advance amount', example: 1000, required: false })
  @IsOptional()
  @IsNumber()
  paid_adv?: number;

  @ApiProperty({ description: 'Advance payment date', example: '2023-10-05', required: false })
  @IsOptional()
  @IsString()
  adv_date?: string;

  @ApiProperty({ description: 'Receipt number for advance', example: 'REC-123', required: false })
  @IsOptional()
  @IsString()
  receipt_no?: string;

  @ApiProperty({ description: 'Status', example: 'Accepted', required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    description: 'Quotation items',
    type: [CreateQuotationItemDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuotationItemDto)
  items?: CreateQuotationItemDto[];
}

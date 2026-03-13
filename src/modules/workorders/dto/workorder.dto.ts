import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWorkOrderDto {
  @ApiProperty({
    description: 'Auto-generated unique work order code',
    example: 'WO001',
    required: false,
  })
  @IsOptional()
  @IsString()
  order_code?: string;

  @ApiProperty({ description: 'Internal quotation ID reference', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  quotation_id: number;

  @ApiProperty({
    description: 'Internal customer ID reference',
    example: 'CUST-001',
  })
  @IsNotEmpty()
  @IsString()
  customer_id: string;
}

export class UpdateWorkOrderDto {
  @ApiProperty({
    description: 'Unique work order code',
    example: 'WO-2023-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  order_code?: string;

  @ApiProperty({
    description: 'Internal quotation ID reference',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  quotation_id?: number;

  @ApiProperty({
    description: 'Internal customer ID reference',
    example: 'CUST-001',
    required: false,
  })
  @IsOptional()
  @IsString()
  customer_id?: string;
}

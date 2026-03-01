import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuotationItemDto {
    @ApiProperty({ description: 'Item description', example: 'Web Development Services' })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ description: 'Unit price', example: 1500 })
    @IsNotEmpty()
    @IsNumber()
    unit_price: number;
}

export class CreateQuotationDto {
    @ApiProperty({ description: 'Customer ID ref (Internal)', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    customer_id: number;

    @ApiProperty({ description: 'Project type ID', example: 1 })
    @IsOptional()
    @IsNumber()
    project_type_id?: number;

    @ApiProperty({ description: 'Quotation date', example: '2023-10-01' })
    @IsNotEmpty()
    @IsString()
    date: string;

    @ApiProperty({ description: 'Total amount', example: 5000 })
    @IsNotEmpty()
    @IsNumber()
    total_amount: number;

    @ApiProperty({ description: 'Quotation items', type: [CreateQuotationItemDto] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateQuotationItemDto)
    items: CreateQuotationItemDto[];
}

export class UpdateQuotationDto {
    @ApiProperty({ description: 'Status of the quotation', example: 'Accepted', required: false })
    @IsOptional()
    @IsString()
    status?: string;

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
}

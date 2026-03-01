import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateRevenueDto {
    @ApiProperty({ description: 'Internal quotation ID reference', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    quotation_id: number;

    @ApiProperty({ description: 'Transaction date', example: '2023-10-01' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ description: 'Revenue amount', example: 1500.50 })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty({ description: 'Revenue source or description', example: 'Installation Service' })
    @IsNotEmpty()
    @IsString()
    source: string;

    @ApiProperty({ description: 'Payment method', example: 'Cash', enum: ['Cash', 'Bank Transfer', 'Check'] })
    @IsOptional()
    @IsString()
    payment_method?: string;

    @ApiProperty({ description: 'Reference number (Receipt #, etc.)', example: 'REC-001' })
    @IsOptional()
    @IsString()
    reference?: string;
}

export class UpdateRevenueDto {
    @ApiProperty({ description: 'Transaction date', example: '2023-10-01', required: false })
    @IsOptional()
    @IsDateString()
    date?: string;

    @ApiProperty({ description: 'Revenue amount', example: 1500.50, required: false })
    @IsOptional()
    @IsNumber()
    amount?: number;

    @ApiProperty({ description: 'Revenue source or description', example: 'Installation Service', required: false })
    @IsOptional()
    @IsString()
    source?: string;

    @ApiProperty({ description: 'Payment method', example: 'Cash', required: false })
    @IsOptional()
    @IsString()
    payment_method?: string;

    @ApiProperty({ description: 'Reference number', example: 'REC-001', required: false })
    @IsOptional()
    @IsString()
    reference?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateExpenseDto {
    @ApiProperty({ description: 'Internal employee ID reference', example: 1 })
    @IsOptional()
    @IsNumber()
    employee_id?: number;

    @ApiProperty({ description: 'Internal supplier ID reference', example: 1 })
    @IsOptional()
    @IsNumber()
    supplier_id?: number;

    @ApiProperty({ description: 'Internal partner ID reference', example: 1 })
    @IsOptional()
    @IsNumber()
    partner_id?: number;

    @ApiProperty({ description: 'Transaction date', example: '2023-10-01' })
    @IsNotEmpty()
    @IsDateString()
    date: string;

    @ApiProperty({ description: 'Expense amount', example: 250.75 })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty({ description: 'Expense category or description', example: 'Office Supplies' })
    @IsNotEmpty()
    @IsString()
    category: string;

    @ApiProperty({ description: 'Payment method', example: 'Cash' })
    @IsOptional()
    @IsString()
    payment_method?: string;

    @ApiProperty({ description: 'Reference number', example: 'INV-101' })
    @IsOptional()
    @IsString()
    reference?: string;
}

export class UpdateExpenseDto {
    @ApiProperty({ description: 'Transaction date', example: '2023-10-01', required: false })
    @IsOptional()
    @IsDateString()
    date?: string;

    @ApiProperty({ description: 'Expense amount', example: 250.75, required: false })
    @IsOptional()
    @IsNumber()
    amount?: number;

    @ApiProperty({ description: 'Expense category', example: 'Office Supplies', required: false })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiProperty({ description: 'Payment method', example: 'Cash', required: false })
    @IsOptional()
    @IsString()
    payment_method?: string;

    @ApiProperty({ description: 'Reference number', example: 'INV-101', required: false })
    @IsOptional()
    @IsString()
    reference?: string;
}

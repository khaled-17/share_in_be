import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWorkOrderDto {
    @ApiProperty({ description: 'Internal quotation ID reference', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    quotation_id: number;

    @ApiProperty({ description: 'Work order title/summary', example: 'SEO Optimization' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: 'Detailed instructions', example: 'Perform full site audit...' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ description: 'Start date', example: '2023-10-10' })
    @IsNotEmpty()
    @IsString()
    start_date: string;

    @ApiProperty({ description: 'Expected end date', example: '2023-10-20' })
    @IsOptional()
    @IsString()
    end_date?: string;

    @ApiProperty({ description: 'Internal employee ID responsible', example: 1 })
    @IsOptional()
    @IsNumber()
    employee_id?: number;
}

export class UpdateWorkOrderDto {
    @ApiProperty({ description: 'Current status', example: 'In Progress', required: false })
    @IsOptional()
    @IsString()
    status?: string;

    @ApiProperty({ description: 'Detailed instructions', example: 'Perform full site audit...', required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ description: 'Internal employee ID responsible', example: 1, required: false })
    @IsOptional()
    @IsNumber()
    employee_id?: number;
}

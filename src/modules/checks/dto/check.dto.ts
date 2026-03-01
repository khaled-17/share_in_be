import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';

export enum CheckStatus {
    UNDELIVERED = 'غير مستلم',
    DELIVERED = 'مستلم',
    COLLECTED = 'محصل',
    REJECTED = 'مرفوض',
}

export class CreateCheckDto {
    @ApiProperty({ description: 'Check number', example: 'CHK-123456' })
    @IsNotEmpty()
    @IsString()
    check_no: string;

    @ApiProperty({ description: 'Bank name', example: 'CIB' })
    @IsNotEmpty()
    @IsString()
    bank_name: string;

    @ApiProperty({ description: 'Due date', example: '2023-12-31' })
    @IsNotEmpty()
    @IsString()
    due_date: string;

    @ApiProperty({ description: 'Check amount', example: 5000 })
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty({ description: 'Check status', example: CheckStatus.UNDELIVERED, enum: CheckStatus })
    @IsOptional()
    @IsEnum(CheckStatus)
    status?: CheckStatus;
}

export class UpdateCheckDto {
    @ApiProperty({ description: 'Check status', example: CheckStatus.COLLECTED, enum: CheckStatus, required: false })
    @IsOptional()
    @IsEnum(CheckStatus)
    status?: CheckStatus;

    @ApiProperty({ description: 'Bank name', example: 'CIB', required: false })
    @IsOptional()
    @IsString()
    bank_name?: string;

    @ApiProperty({ description: 'Due date', example: '2023-12-31', required: false })
    @IsOptional()
    @IsString()
    due_date?: string;

    @ApiProperty({ description: 'Check amount', example: 5000, required: false })
    @IsOptional()
    @IsNumber()
    amount?: number;
}

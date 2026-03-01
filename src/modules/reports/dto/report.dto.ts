import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsDateString } from 'class-validator';

export class ReportQueryDto {
    @ApiProperty({ description: 'Start date for report data', example: '2023-01-01', required: false })
    @IsOptional()
    @IsDateString()
    start_date?: string;

    @ApiProperty({ description: 'End date for report data', example: '2023-12-31', required: false })
    @IsOptional()
    @IsDateString()
    end_date?: string;
}

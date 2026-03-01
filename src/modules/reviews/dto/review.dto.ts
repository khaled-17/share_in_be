import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateReviewDto {
    @ApiProperty({ description: 'Customer name', example: 'Khaled Mohamed' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'Customer role', example: 'CEO', required: false })
    @IsOptional()
    @IsString()
    role?: string;

    @ApiProperty({ description: 'Review content', example: 'Excellent service!' })
    @IsNotEmpty()
    @IsString()
    review: string;

    @ApiProperty({ description: 'Rating from 1 to 5', example: 5, minimum: 1, maximum: 5 })
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;
}

export class UpdateReviewDto {
    @ApiProperty({ description: 'Review content', example: 'Great work!', required: false })
    @IsOptional()
    @IsString()
    review?: string;

    @ApiProperty({ description: 'Rating from 1 to 5', example: 5, required: false })
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(5)
    rating?: number;
}

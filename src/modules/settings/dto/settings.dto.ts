import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectTypeDto {
    @ApiProperty({ description: 'The type of the project', example: 'Social Media' })
    @IsNotEmpty()
    @IsString()
    type: string;
}

export class UpdateProjectTypeDto {
    @ApiProperty({ description: 'The type of the project', example: 'Social Media Management', required: false })
    @IsOptional()
    @IsString()
    type?: string;
}

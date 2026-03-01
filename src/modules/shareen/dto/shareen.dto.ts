import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShareenDto {
    @ApiProperty({ description: 'The content or action logged', example: 'User updated a quotation' })
    @IsNotEmpty()
    @IsString()
    content: string;
}

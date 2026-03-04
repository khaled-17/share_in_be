import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({
    description: 'The unique action string for the permission',
    example: 'CREATE_USER',
  })
  @IsNotEmpty()
  @IsString()
  action: string;

  @ApiProperty({
    description: 'A description for what this permission allows',
    example: 'Allows creating a new user',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The module this permission belongs to',
    example: 'Users',
    required: false,
  })
  @IsOptional()
  @IsString()
  module?: string;
}

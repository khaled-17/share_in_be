import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/permission.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all permissions' })
  @ApiResponse({ status: 200, description: 'List of all system permissions' })
  async findAll() {
    const permissions = await this.permissionsService.findAll();
    return {
      success: true,
      data: permissions,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new permission' })
  @ApiResponse({ status: 201, description: 'Permission successfully created' })
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    const permission =
      await this.permissionsService.create(createPermissionDto);
    return {
      success: true,
      message: 'Permission created successfully',
      data: permission,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a permission' })
  @ApiParam({ name: 'id', description: 'Permission ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Permission successfully deleted' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.permissionsService.remove(id);
    return {
      success: true,
      message: 'Permission deleted successfully',
    };
  }
}

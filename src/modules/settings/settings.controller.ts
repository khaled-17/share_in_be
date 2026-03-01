import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProjectTypeDto, UpdateProjectTypeDto } from './dto/settings.dto';

@ApiTags('Settings')
@ApiBearerAuth()
@Controller('settings')
@UseGuards(JwtAuthGuard)
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Get('project-types')
  @ApiOperation({ summary: 'Retrieve all project types' })
  @ApiResponse({ status: 200, description: 'List of project types' })
  async findAllProjectTypes() {
    const types = await this.settingsService.findAllProjectTypes();
    return {
      success: true,
      data: types,
    };
  }

  @Post('project-types')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new project type' })
  @ApiResponse({ status: 201, description: 'Created successfully' })
  async createProjectType(@Body() data: CreateProjectTypeDto) {
    const type = await this.settingsService.createProjectType(data);
    return {
      success: true,
      message: 'Project type created successfully',
      data: type,
    };
  }

  @Put('project-types/:id')
  @ApiOperation({ summary: 'Update an existing project type' })
  @ApiParam({ name: 'id', description: 'Type ID', example: 1 })
  async updateProjectType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProjectTypeDto,
  ) {
    const type = await this.settingsService.updateProjectType(id, data);
    return {
      success: true,
      message: 'Project type updated successfully',
      data: type,
    };
  }

  @Delete('project-types/:id')
  @ApiOperation({ summary: 'Delete a project type' })
  @ApiParam({ name: 'id', description: 'Type ID', example: 1 })
  async removeProjectType(@Param('id', ParseIntPipe) id: number) {
    await this.settingsService.removeProjectType(id);
    return {
      success: true,
      message: 'Project type deleted successfully',
    };
  }
}

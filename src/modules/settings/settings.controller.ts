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
import {
  CreateProjectTypeDto,
  UpdateProjectTypeDto,
  CreateCountryDto,
  UpdateCountryDto,
  CreateExpenseTypeDto,
  UpdateExpenseTypeDto,
  CreateRevenueTypeDto,
  UpdateRevenueTypeDto,
} from './dto/settings.dto';

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

  // ==================
  // Countries
  // ==================

  @Get('countries')
  @ApiOperation({ summary: 'Get all countries' })
  @ApiResponse({ status: 200, description: 'List of countries' })
  async getAllCountries() {
    const countries = await this.settingsService.getAllCountries();
    return { success: true, data: countries };
  }

  @Post('countries')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new country' })
  @ApiResponse({ status: 201, description: 'Country created successfully' })
  async createCountry(@Body() data: CreateCountryDto) {
    const country = await this.settingsService.createCountry(data);
    return {
      success: true,
      message: 'Country created successfully',
      data: country,
    };
  }

  @Put('countries/:id')
  @ApiOperation({ summary: 'Update a country' })
  @ApiParam({ name: 'id', description: 'Country ID', example: 1 })
  async updateCountry(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateCountryDto,
  ) {
    const country = await this.settingsService.updateCountry(id, data);
    return {
      success: true,
      message: 'Country updated successfully',
      data: country,
    };
  }

  @Delete('countries/:id')
  @ApiOperation({ summary: 'Delete a country' })
  @ApiParam({ name: 'id', description: 'Country ID', example: 1 })
  async deleteCountry(@Param('id', ParseIntPipe) id: number) {
    await this.settingsService.deleteCountry(id);
    return { success: true, message: 'Country deleted successfully' };
  }

  // ==================
  // Expense Types
  // ==================

  @Get('expense-types')
  @ApiOperation({ summary: 'Get all expense types' })
  @ApiResponse({ status: 200, description: 'List of expense types' })
  async getAllExpenseTypes() {
    const types = await this.settingsService.getAllExpenseTypes();
    return { success: true, data: types };
  }

  @Post('expense-types')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new expense type' })
  @ApiResponse({
    status: 201,
    description: 'Expense type created successfully',
  })
  async createExpenseType(@Body() data: CreateExpenseTypeDto) {
    const type = await this.settingsService.createExpenseType(data);
    return {
      success: true,
      message: 'Expense type created successfully',
      data: type,
    };
  }

  @Put('expense-types/:id')
  @ApiOperation({ summary: 'Update an expense type' })
  @ApiParam({ name: 'id', description: 'Expense Type ID', example: 1 })
  async updateExpenseType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateExpenseTypeDto,
  ) {
    const type = await this.settingsService.updateExpenseType(id, data);
    return {
      success: true,
      message: 'Expense type updated successfully',
      data: type,
    };
  }

  @Delete('expense-types/:id')
  @ApiOperation({ summary: 'Delete an expense type' })
  @ApiParam({ name: 'id', description: 'Expense Type ID', example: 1 })
  async deleteExpenseType(@Param('id', ParseIntPipe) id: number) {
    await this.settingsService.deleteExpenseType(id);
    return { success: true, message: 'Expense type deleted successfully' };
  }

  // ==================
  // Revenue Types
  // ==================

  @Get('revenue-types')
  @ApiOperation({ summary: 'Get all revenue types' })
  @ApiResponse({ status: 200, description: 'List of revenue types' })
  async getAllRevenueTypes() {
    const types = await this.settingsService.getAllRevenueTypes();
    return { success: true, data: types };
  }

  @Post('revenue-types')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new revenue type' })
  @ApiResponse({
    status: 201,
    description: 'Revenue type created successfully',
  })
  async createRevenueType(@Body() data: CreateRevenueTypeDto) {
    const type = await this.settingsService.createRevenueType(data);
    return {
      success: true,
      message: 'Revenue type created successfully',
      data: type,
    };
  }

  @Put('revenue-types/:id')
  @ApiOperation({ summary: 'Update a revenue type' })
  @ApiParam({ name: 'id', description: 'Revenue Type ID', example: 1 })
  async updateRevenueType(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRevenueTypeDto,
  ) {
    const type = await this.settingsService.updateRevenueType(id, data);
    return {
      success: true,
      message: 'Revenue type updated successfully',
      data: type,
    };
  }

  @Delete('revenue-types/:id')
  @ApiOperation({ summary: 'Delete a revenue type' })
  @ApiParam({ name: 'id', description: 'Revenue Type ID', example: 1 })
  async deleteRevenueType(@Param('id', ParseIntPipe) id: number) {
    await this.settingsService.deleteRevenueType(id);
    return { success: true, message: 'Revenue type deleted successfully' };
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
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
import { ChecksService, CheckFilters } from './checks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateCheckDto,
  UpdateCheckDto,
  UpdateCheckStatusDto,
} from './dto/check.dto';

@ApiTags('Checks')
@ApiBearerAuth()
@Controller('checks')
@UseGuards(JwtAuthGuard)
export class ChecksController {
  constructor(private checksService: ChecksService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all checks' })
  @ApiResponse({ status: 200, description: 'List of checks retrieved' })
  async findAll(@Query() query: CheckFilters) {
    const result = await this.checksService.findAll(query);
    return {
      success: true,
      message: 'Checks retrieved successfully',
      data: result,
    };
  }

  @Get('stats/summary')
  @ApiOperation({ summary: 'Get checks statistics summary' })
  @ApiResponse({ status: 200, description: 'Summary statistics retrieved' })
  async getStats(@Query() query: CheckFilters) {
    const result = await this.checksService.getStats(query);
    return {
      success: true,
      message: 'Summary statistics retrieved successfully',
      data: result,
    };
  }

  @Get('pending/due-soon')
  @ApiOperation({ summary: 'Get pending checks due soon' })
  @ApiResponse({ status: 200, description: 'Checks retrieved successfully' })
  async getDueSoon() {
    const result = await this.checksService.getDueSoon();
    return {
      success: true,
      message: 'Pending checks retrieved successfully',
      data: result,
    };
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Update a check status' })
  @ApiParam({ name: 'id', description: 'Check ID', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Check status updated successfully',
  })
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCheckStatusDto: UpdateCheckStatusDto,
  ) {
    const result = await this.checksService.updateStatus(
      id,
      updateCheckStatusDto,
    );
    return {
      success: true,
      message: 'Check status updated successfully',
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a check by ID' })
  @ApiParam({ name: 'id', description: 'Check ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Check found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.checksService.findOne(id);
    return {
      success: true,
      message: 'Check retrieved successfully',
      data: result,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new check' })
  @ApiResponse({ status: 201, description: 'Check created successfully' })
  async create(@Body() createCheckDto: CreateCheckDto) {
    const result = await this.checksService.create(createCheckDto);
    return {
      success: true,
      message: 'Check created successfully',
      data: result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a check' })
  @ApiParam({ name: 'id', description: 'Check ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Check updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCheckDto: UpdateCheckDto,
  ) {
    const result = await this.checksService.update(id, updateCheckDto);
    return {
      success: true,
      message: 'Check updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a check' })
  @ApiParam({ name: 'id', description: 'Check ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Check deleted successfully' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.checksService.remove(id);
    return {
      success: true,
      message: 'Check deleted successfully',
    };
  }
}

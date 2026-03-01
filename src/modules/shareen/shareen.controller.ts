import {
  Controller,
  Get,
  Post,
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
import { ShareenService } from './shareen.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateShareenDto } from './dto/shareen.dto';

@ApiTags('Shareen')
@ApiBearerAuth()
@Controller('shareen')
@UseGuards(JwtAuthGuard)
export class ShareenController {
  constructor(private shareenService: ShareenService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve shareen logs' })
  @ApiResponse({ status: 200, description: 'List of shareen entries' })
  async findAll(@Query() query: any) {
    const logs = await this.shareenService.findAll(query);
    return {
      success: true,
      message: 'Shareen logs retrieved successfully',
      data: logs,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Log a new shareen action' })
  @ApiResponse({ status: 201, description: 'Logged successfully' })
  async create(@Body() createShareenDto: CreateShareenDto) {
    const log = await this.shareenService.create(createShareenDto);
    return {
      success: true,
      message: 'Log created successfully',
      data: log,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a shareen log entry' })
  @ApiParam({ name: 'id', description: 'Log ID', example: 1 })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.shareenService.remove(id);
    return {
      success: true,
      message: 'Log deleted successfully',
    };
  }
}

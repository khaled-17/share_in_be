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
import { PartnersService } from './partners.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/partner.dto';

@ApiTags('Partners')
@ApiBearerAuth()
@Controller('partners')
@UseGuards(JwtAuthGuard)
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all partners' })
  @ApiResponse({ status: 200, description: 'List of partners retrieved' })
  async findAll() {
    const partners = await this.partnersService.findAll();
    return {
      success: true,
      message: 'Partners retrieved successfully',
      data: partners,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single partner by ID' })
  @ApiParam({ name: 'id', description: 'Internal partner ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Partner found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const partner = await this.partnersService.findOne(id);
    return {
      success: true,
      message: 'Partner retrieved successfully',
      data: partner,
    };
  }

  @Get(':id/summary')
  @ApiOperation({ summary: 'Get partner financial summary' })
  @ApiParam({ name: 'id', description: 'Internal partner ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Summary retrieved successfully' })
  async getSummary(@Param('id', ParseIntPipe) id: number) {
    const summary = await this.partnersService.getSummary(id);
    return {
      success: true,
      message: 'Partner summary retrieved successfully',
      data: summary,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new partner' })
  @ApiResponse({ status: 201, description: 'Partner created successfully' })
  async create(@Body() createPartnerDto: CreatePartnerDto) {
    const partner = await this.partnersService.create(createPartnerDto);
    return {
      success: true,
      message: 'Partner created successfully',
      data: partner,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing partner' })
  @ApiParam({ name: 'id', description: 'Internal partner ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Partner updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    const partner = await this.partnersService.update(id, updatePartnerDto);
    return {
      success: true,
      message: 'Partner updated successfully',
      data: partner,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a partner' })
  @ApiParam({ name: 'id', description: 'Internal partner ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Partner deleted successfully' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.partnersService.remove(id);
    return {
      success: true,
      message: 'Partner deleted successfully',
    };
  }
}

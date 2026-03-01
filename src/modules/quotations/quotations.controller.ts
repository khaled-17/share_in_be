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
import { QuotationsService } from './quotations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateQuotationDto, UpdateQuotationDto } from './dto/quotation.dto';

@ApiTags('Quotations')
@ApiBearerAuth()
@Controller('quotations')
@UseGuards(JwtAuthGuard)
export class QuotationsController {
  constructor(private quotationsService: QuotationsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all quotations' })
  @ApiResponse({ status: 200, description: 'List of quotations retrieved' })
  async findAll(@Query() query: any) {
    const result = await this.quotationsService.findAll(query);
    return {
      success: true,
      message: 'Quotations retrieved successfully',
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quotation by ID' })
  @ApiParam({ name: 'id', description: 'Quotation ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Quotation found' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.quotationsService.findOne(id);
    return {
      success: true,
      message: 'Quotation retrieved successfully',
      data: result,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new quotation' })
  @ApiResponse({ status: 201, description: 'Quotation created successfully' })
  async create(@Body() createQuotationDto: CreateQuotationDto) {
    const result = await this.quotationsService.create(createQuotationDto);
    return {
      success: true,
      message: 'Quotation created successfully',
      data: result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a quotation / Accept and Pay Advance' })
  @ApiParam({ name: 'id', description: 'Quotation ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Quotation updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQuotationDto: UpdateQuotationDto,
  ) {
    const result = await this.quotationsService.update(id, updateQuotationDto);
    return {
      success: true,
      message: 'Quotation updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a quotation' })
  @ApiParam({ name: 'id', description: 'Quotation ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Quotation deleted successfully' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.quotationsService.remove(id);
    return {
      success: true,
      message: 'Quotation deleted successfully',
    };
  }
}

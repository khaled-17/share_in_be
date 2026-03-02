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
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { SuppliersService } from './suppliers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';

@ApiTags('Suppliers')
@ApiBearerAuth()
@Controller('suppliers')
@UseGuards(JwtAuthGuard)
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all suppliers' })
  @ApiResponse({ status: 200, description: 'List of suppliers retrieved' })
  async findAll(@Query() query: Record<string, string>) {
    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '10');
    const search = query.search;
    const skip = (page - 1) * limit;

    const { suppliers, total } = await this.suppliersService.findAll({
      skip,
      take: limit,
      search,
    });

    return {
      success: true,
      message: 'Suppliers retrieved successfully',
      data: suppliers,
      pagination: {
        page,
        limit,
        total,
      },
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single supplier by ID' })
  @ApiParam({ name: 'id', description: 'Supplier ID', example: 'SUP-001' })
  @ApiResponse({ status: 200, description: 'Supplier found' })
  @ApiResponse({ status: 404, description: 'Supplier not found' })
  async findOne(@Param('id') id: string) {
    const supplier = await this.suppliersService.findOne(id);
    return {
      success: true,
      message: 'Supplier retrieved successfully',
      data: supplier,
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new supplier' })
  @ApiResponse({ status: 201, description: 'Supplier created successfully' })
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    const supplier = await this.suppliersService.create(createSupplierDto);
    return {
      success: true,
      message: 'Supplier created successfully',
      data: supplier,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing supplier' })
  @ApiParam({ name: 'id', description: 'Supplier ID', example: 'SUP-001' })
  @ApiResponse({ status: 200, description: 'Supplier updated successfully' })
  async update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    const supplier = await this.suppliersService.update(id, updateSupplierDto);
    return {
      success: true,
      message: 'Supplier updated successfully',
      data: supplier,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a supplier' })
  @ApiParam({ name: 'id', description: 'Supplier ID', example: 'SUP-001' })
  @ApiResponse({ status: 200, description: 'Supplier deleted successfully' })
  async remove(@Param('id') id: string) {
    await this.suppliersService.remove(id);
    return {
      success: true,
      message: 'Supplier deleted successfully',
    };
  }
}

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
import { RevenueService } from './revenue.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';

@ApiTags('Revenue')
@ApiBearerAuth()
@Controller('revenue')
@UseGuards(JwtAuthGuard)
export class RevenueController {
    constructor(private revenueService: RevenueService) { }

    @Get()
    @ApiOperation({ summary: 'Retrieve revenue transactions' })
    @ApiResponse({ status: 200, description: 'List of revenue transactions' })
    async findAll(@Query() query: any) {
        const filters = {
            start_date: query.start_date,
            end_date: query.end_date,
            quotation_id: query.quotation_id ? Number(query.quotation_id) : undefined,
        };
        const result = await this.revenueService.findAll(filters);
        return {
            success: true,
            message: 'Revenues retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a revenue transaction by ID' })
    @ApiParam({ name: 'id', description: 'Revenue ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Transaction found' })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const result = await this.revenueService.findOne(id);
        return {
            success: true,
            message: 'Revenue retrieved successfully',
            data: result,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new revenue transaction' })
    @ApiResponse({ status: 201, description: 'Transaction created successfully' })
    async create(@Body() createRevenueDto: CreateRevenueDto) {
        const result = await this.revenueService.create(createRevenueDto);
        return {
            success: true,
            message: 'Revenue created successfully',
            data: result,
        };
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a revenue transaction' })
    @ApiParam({ name: 'id', description: 'Revenue ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Transaction updated successfully' })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateRevenueDto: UpdateRevenueDto,
    ) {
        const result = await this.revenueService.update(id, updateRevenueDto);
        return {
            success: true,
            message: 'Revenue updated successfully',
            data: result,
        };
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a revenue transaction' })
    @ApiParam({ name: 'id', description: 'Revenue ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Transaction deleted successfully' })
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.revenueService.remove(id);
        return {
            success: true,
            message: 'Revenue deleted successfully',
        };
    }
}

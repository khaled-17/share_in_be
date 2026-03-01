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
import { WorkOrdersService } from './workorders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';

@ApiTags('WorkOrders')
@ApiBearerAuth()
@Controller('workorders')
@UseGuards(JwtAuthGuard)
export class WorkOrdersController {
    constructor(private workOrdersService: WorkOrdersService) { }

    @Get()
    @ApiOperation({ summary: 'Retrieve all work orders' })
    @ApiResponse({ status: 200, description: 'List of work orders retrieved' })
    async findAll(@Query() query: any) {
        const result = await this.workOrdersService.findAll(query);
        return {
            success: true,
            message: 'Work orders retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a work order by ID' })
    @ApiParam({ name: 'id', description: 'Work Order ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Work Order found' })
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const result = await this.workOrdersService.findOne(id);
        return {
            success: true,
            message: 'Work order retrieved successfully',
            data: result,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new work order' })
    @ApiResponse({ status: 201, description: 'Work Order created successfully' })
    async create(@Body() createWorkOrderDto: CreateWorkOrderDto) {
        const result = await this.workOrdersService.create(createWorkOrderDto);
        return {
            success: true,
            message: 'Work order created successfully',
            data: result,
        };
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a work order' })
    @ApiParam({ name: 'id', description: 'Work Order ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Work Order updated successfully' })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateWorkOrderDto: UpdateWorkOrderDto,
    ) {
        const result = await this.workOrdersService.update(id, updateWorkOrderDto);
        return {
            success: true,
            message: 'Work order updated successfully',
            data: result,
        };
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a work order' })
    @ApiParam({ name: 'id', description: 'Work Order ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Work Order deleted successfully' })
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.workOrdersService.remove(id);
        return {
            success: true,
            message: 'Work order deleted successfully',
        };
    }
}

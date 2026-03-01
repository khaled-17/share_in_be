import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    UseGuards,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
} from '@nestjs/common';
import { WorkOrdersService } from './workorders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('workorders')
@UseGuards(JwtAuthGuard)
export class WorkOrdersController {
    constructor(private workOrdersService: WorkOrdersService) { }

    @Get()
    async findAll() {
        const result = await this.workOrdersService.findAll();
        return {
            success: true,
            message: 'Work orders retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
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
    async create(@Body() data: any) {
        const result = await this.workOrdersService.create(data);
        return {
            success: true,
            message: 'Work order created successfully',
            data: result,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.workOrdersService.remove(id);
        return {
            success: true,
            message: 'Work order deleted successfully',
        };
    }
}

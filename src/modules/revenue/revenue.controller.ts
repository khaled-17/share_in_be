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
import { RevenueService } from './revenue.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('revenue')
@UseGuards(JwtAuthGuard)
export class RevenueController {
    constructor(private revenueService: RevenueService) { }

    @Get()
    async findAll() {
        const result = await this.revenueService.findAll();
        return {
            success: true,
            message: 'Revenues retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
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
    async create(@Body() data: any) {
        const result = await this.revenueService.create(data);
        return {
            success: true,
            message: 'Revenue created successfully',
            data: result,
        };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const result = await this.revenueService.update(id, data);
        return {
            success: true,
            message: 'Revenue updated successfully',
            data: result,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.revenueService.remove(id);
        return {
            success: true,
            message: 'Revenue deleted successfully',
        };
    }
}

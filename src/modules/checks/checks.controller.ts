import {
    Controller,
    Get,
    Put,
    Body,
    Param,
    Query,
    UseGuards,
    ParseIntPipe,
} from '@nestjs/common';
import { ChecksService } from './checks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('checks')
@UseGuards(JwtAuthGuard)
export class ChecksController {
    constructor(private checksService: ChecksService) { }

    @Get()
    async findAll(@Query() query: any) {
        const result = await this.checksService.findAll(query);
        return {
            success: true,
            message: 'Checks retrieved successfully',
            data: result,
        };
    }

    @Get('stats')
    async getStats(@Query() query: any) {
        const result = await this.checksService.getStats(query);
        return {
            success: true,
            message: 'Check stats retrieved successfully',
            data: result,
        };
    }

    @Get('due-soon')
    async getDueSoon() {
        const result = await this.checksService.getDueSoon();
        return {
            success: true,
            message: 'Due-soon checks retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const result = await this.checksService.findOne(id);
        return {
            success: true,
            message: 'Check retrieved successfully',
            data: result,
        };
    }

    @Put(':id/status')
    async updateStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: { status: string; notes?: string },
    ) {
        const result = await this.checksService.updateStatus(id, data);
        return {
            success: true,
            message: 'Check status updated successfully',
            data: result,
        };
    }
}

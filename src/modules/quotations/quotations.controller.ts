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
import { QuotationsService } from './quotations.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('quotations')
@UseGuards(JwtAuthGuard)
export class QuotationsController {
    constructor(private quotationsService: QuotationsService) { }

    @Get()
    async findAll() {
        const result = await this.quotationsService.findAll();
        return {
            success: true,
            message: 'Quotations retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
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
    async create(@Body() data: any) {
        const result = await this.quotationsService.create(data);
        return {
            success: true,
            message: 'Quotation created successfully',
            data: result,
        };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const result = await this.quotationsService.update(id, data);
        return {
            success: true,
            message: 'Quotation updated successfully',
            data: result,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.quotationsService.remove(id);
        return {
            success: true,
            message: 'Quotation deleted successfully',
        };
    }
}

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
import { PartnersService } from './partners.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('partners')
@UseGuards(JwtAuthGuard)
export class PartnersController {
    constructor(private partnersService: PartnersService) { }

    @Get()
    async findAll() {
        const partners = await this.partnersService.findAll();
        return {
            success: true,
            message: 'Partners retrieved successfully',
            data: partners,
        };
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const partner = await this.partnersService.findOne(id);
        return {
            success: true,
            message: 'Partner retrieved successfully',
            data: partner,
        };
    }

    @Get(':id/summary')
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
    async create(@Body() data: any) {
        const partner = await this.partnersService.create(data);
        return {
            success: true,
            message: 'Partner created successfully',
            data: partner,
        };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const partner = await this.partnersService.update(id, data);
        return {
            success: true,
            message: 'Partner updated successfully',
            data: partner,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.partnersService.remove(id);
        return {
            success: true,
            message: 'Partner deleted successfully',
        };
    }
}

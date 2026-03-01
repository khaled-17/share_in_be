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
import { SuppliersService } from './suppliers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('suppliers')
@UseGuards(JwtAuthGuard)
export class SuppliersController {
    constructor(private suppliersService: SuppliersService) { }

    @Get()
    async findAll(@Query() query: any) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
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
    async create(@Body() data: any) {
        const supplier = await this.suppliersService.create(data);
        return {
            success: true,
            message: 'Supplier created successfully',
            data: supplier,
        };
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any) {
        const supplier = await this.suppliersService.update(id, data);
        return {
            success: true,
            message: 'Supplier updated successfully',
            data: supplier,
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.suppliersService.remove(id);
        return {
            success: true,
            message: 'Supplier deleted successfully',
        };
    }
}

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
import { CustomersService } from './customers.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('customers')
@UseGuards(JwtAuthGuard)
export class CustomersController {
    constructor(private customersService: CustomersService) { }

    @Get()
    async findAll(@Query() query: any) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const search = query.search;
        const skip = (page - 1) * limit;

        const { customers, total } = await this.customersService.findAll({
            skip,
            take: limit,
            search,
        });

        return {
            success: true,
            message: 'Customers retrieved successfully',
            data: customers,
            pagination: {
                page,
                limit,
                total,
            },
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const customer = await this.customersService.findOne(id);
        return {
            success: true,
            message: 'Customer retrieved successfully',
            data: customer,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: any) {
        const customer = await this.customersService.create(data);
        return {
            success: true,
            message: 'Customer created successfully',
            data: customer,
        };
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: any) {
        const customer = await this.customersService.update(id, data);
        return {
            success: true,
            message: 'Customer updated successfully',
            data: customer,
        };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.customersService.remove(id);
        return {
            success: true,
            message: 'Customer deleted successfully',
        };
    }
}

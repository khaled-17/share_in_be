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
import { ExpensesService } from './expenses.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('expenses')
@UseGuards(JwtAuthGuard)
export class ExpensesController {
    constructor(private expensesService: ExpensesService) { }

    @Get()
    async findAll() {
        const result = await this.expensesService.findAll();
        return {
            success: true,
            message: 'Expenses retrieved successfully',
            data: result,
        };
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const result = await this.expensesService.findOne(id);
        return {
            success: true,
            message: 'Expense retrieved successfully',
            data: result,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: any) {
        const result = await this.expensesService.create(data);
        return {
            success: true,
            message: 'Expense created successfully',
            data: result,
        };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const result = await this.expensesService.update(id, data);
        return {
            success: true,
            message: 'Expense updated successfully',
            data: result,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.expensesService.remove(id);
        return {
            success: true,
            message: 'Expense deleted successfully',
        };
    }
}

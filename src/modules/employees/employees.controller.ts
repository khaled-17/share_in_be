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
import { EmployeesService } from './employees.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('employees')
@UseGuards(JwtAuthGuard)
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    async findAll(@Query() query: any) {
        // Legacy behavior: return plain array if no pagination params are provided
        // or if the frontend expects it.
        const { employees } = await this.employeesService.findAll({});
        return {
            success: true,
            message: 'Employees retrieved successfully',
            data: employees,
        };
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const employee = await this.employeesService.findOne(id);
        return {
            success: true,
            message: 'Employee retrieved successfully',
            data: employee,
        };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() data: any) {
        const employee = await this.employeesService.create(data);
        return {
            success: true,
            message: 'Employee created successfully',
            data: employee,
        };
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
        const employee = await this.employeesService.update(id, data);
        return {
            success: true,
            message: 'Employee updated successfully',
            data: employee,
        };
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.employeesService.remove(id);
        return {
            success: true,
            message: 'Employee deleted successfully',
        };
    }
}

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
import { EmployeesService } from './employees.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@ApiTags('Employees')
@ApiBearerAuth()
@Controller('employees')
@UseGuards(JwtAuthGuard)
export class EmployeesController {
    constructor(private employeesService: EmployeesService) { }

    @Get()
    @ApiOperation({ summary: 'Retrieve all employees' })
    @ApiResponse({ status: 200, description: 'List of employees retrieved' })
    async findAll(@Query() query: any) {
        const { employees } = await this.employeesService.findAll({});
        return {
            success: true,
            message: 'Employees retrieved successfully',
            data: employees,
        };
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single employee by ID' })
    @ApiParam({ name: 'id', description: 'Internal employee ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Employee found' })
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
    @ApiOperation({ summary: 'Create a new employee' })
    @ApiResponse({ status: 201, description: 'Employee created successfully' })
    async create(@Body() createEmployeeDto: CreateEmployeeDto) {
        const employee = await this.employeesService.create(createEmployeeDto);
        return {
            success: true,
            message: 'Employee created successfully',
            data: employee,
        };
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an existing employee' })
    @ApiParam({ name: 'id', description: 'Internal employee ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Employee updated successfully' })
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
    ) {
        const employee = await this.employeesService.update(id, updateEmployeeDto);
        return {
            success: true,
            message: 'Employee updated successfully',
            data: employee,
        };
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete an employee' })
    @ApiParam({ name: 'id', description: 'Internal employee ID', example: 1 })
    @ApiResponse({ status: 200, description: 'Employee deleted successfully' })
    async remove(@Param('id', ParseIntPipe) id: number) {
        await this.employeesService.remove(id);
        return {
            success: true,
            message: 'Employee deleted successfully',
        };
    }
}

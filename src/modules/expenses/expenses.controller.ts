import { Prisma } from '@prisma/client';
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
import { ExpensesService } from './expenses.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';

@ApiTags('Expenses')
@ApiBearerAuth()
@Controller('expenses')
@UseGuards(JwtAuthGuard)
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve expense transactions' })
  @ApiResponse({ status: 200, description: 'List of expense transactions' })
  async findAll(@Query() query: Prisma.ExpenseWhereInput) {
    const result = await this.expensesService.findAll(query);
    return {
      success: true,
      message: 'Expenses retrieved successfully',
      data: result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an expense transaction by ID' })
  @ApiParam({ name: 'id', description: 'Expense ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Transaction found' })
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
  @ApiOperation({ summary: 'Create a new expense transaction' })
  @ApiResponse({ status: 201, description: 'Transaction created successfully' })
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    const result = await this.expensesService.create(createExpenseDto);
    return {
      success: true,
      message: 'Expense created successfully',
      data: result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an expense transaction' })
  @ApiParam({ name: 'id', description: 'Expense ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Transaction updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    const result = await this.expensesService.update(id, updateExpenseDto);
    return {
      success: true,
      message: 'Expense updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an expense transaction' })
  @ApiParam({ name: 'id', description: 'Expense ID', example: 1 })
  @ApiResponse({ status: 200, description: 'Transaction deleted successfully' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.expensesService.remove(id);
    return {
      success: true,
      message: 'Expense deleted successfully',
    };
  }
}

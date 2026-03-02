import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async findAll(where: Prisma.ExpenseWhereInput = {}) {
    return this.prisma.expense.findMany({
      where,
      include: {
        supplier: true,
        type: true,
      },
      orderBy: { exp_date: 'desc' },
    });
  }

  async findOne(id: number) {
    const expense = await this.prisma.expense.findUnique({
      where: { id },
      include: {
        supplier: true,
        type: true,
      },
    });
    if (!expense) throw new NotFoundException('Expense not found');
    return expense;
  }

  async create(data: CreateExpenseDto) {
    return this.prisma.expense.create({
      data,
      include: {
        supplier: true,
        type: true,
      },
    });
  }

  async update(id: number, data: UpdateExpenseDto) {
    await this.findOne(id);

    return this.prisma.expense.update({
      where: { id },
      data,
      include: {
        supplier: true,
        type: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.expense.delete({
      where: { id },
    });
  }
}

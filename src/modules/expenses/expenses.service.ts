import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  private async generateExpenseCode() {
    const latestExpense = await this.prisma.expense.findFirst({
      where: { code: { startsWith: CODE_PREFIX.expense } },
      orderBy: { id: 'desc' },
      select: { code: true },
    });

    return getNextCode(CODE_PREFIX.expense, latestExpense?.code);
  }

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
    const rest = { ...data };
    delete rest.code;

    return createWithGeneratedCode({
      generateCode: () => this.generateExpenseCode(),
      createRecord: (code) =>
        this.prisma.expense.create({
          data: { ...rest, code },
          include: {
            supplier: true,
            type: true,
          },
        }),
      uniqueField: 'code',
      entityLabel: 'expense',
    });
  }

  async update(id: number, data: UpdateExpenseDto) {
    await this.findOne(id);
    const rest = { ...data };
    delete rest.code;

    return this.prisma.expense.update({
      where: { id },
      data: rest,
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ExpensesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.expense.findMany({
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

    async create(data: any) {
        const { amount, quote_id, ...expenseData } = data;

        return this.prisma.expense.create({
            data: {
                ...expenseData,
                amount: parseFloat(amount),
                quote_id: quote_id ? parseInt(quote_id) : null,
            },
            include: {
                supplier: true,
                type: true,
            },
        });
    }

    async update(id: number, data: any) {
        await this.findOne(id);
        const { amount, quote_id, ...expenseData } = data;

        return this.prisma.expense.update({
            where: { id },
            data: {
                ...expenseData,
                amount: amount !== undefined ? parseFloat(amount) : undefined,
                quote_id:
                    quote_id !== undefined
                        ? quote_id
                            ? parseInt(quote_id)
                            : null
                        : undefined,
            },
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

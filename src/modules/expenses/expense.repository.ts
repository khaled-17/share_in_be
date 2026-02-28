import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllExpenses = async () => {
    return prisma.expense.findMany({
        include: {
            supplier: {
                select: { name: true },
            },
            type: {
                select: { exptype_name: true },
            },
        },
        orderBy: { exp_date: 'desc' },
    });
};

export const getExpenseById = async (id: number) => {
    return prisma.expense.findUnique({
        where: { id },
        include: {
            supplier: true,
            type: true,
        },
    });
};

export const createExpense = async (data: any) => {
    return prisma.expense.create({
        data,
        include: {
            supplier: { select: { name: true } },
            type: { select: { exptype_name: true } },
        },
    });
};

export const updateExpense = async (id: number, data: any) => {
    return prisma.expense.update({
        where: { id },
        data,
        include: {
            supplier: { select: { name: true } },
            type: { select: { exptype_name: true } },
        },
    });
};

export const deleteExpense = async (id: number) => {
    return prisma.expense.delete({
        where: { id },
    });
};

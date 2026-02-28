import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllExpenses = async () => {
    return prisma.expense.findMany({
        include: {
            supplier: true,
            type: true,
        },
        orderBy: { exp_date: 'desc' },
    });
};
export const getExpenseById = async (id) => {
    return prisma.expense.findUnique({
        where: { id },
        include: {
            supplier: true,
            type: true,
        },
    });
};
export const createExpense = async (data) => {
    const { amount, quote_id, ...expenseData } = data;
    return prisma.expense.create({
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
};
export const updateExpense = async (id, data) => {
    const { amount, quote_id, ...expenseData } = data;
    return prisma.expense.update({
        where: { id },
        data: {
            ...expenseData,
            amount: amount !== undefined ? parseFloat(amount) : undefined,
            quote_id: quote_id !== undefined ? (quote_id ? parseInt(quote_id) : null) : undefined,
        },
        include: {
            supplier: true,
            type: true,
        },
    });
};
export const deleteExpense = async (id) => {
    return prisma.expense.delete({
        where: { id },
    });
};

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllRevenue = async () => {
    return prisma.revenue.findMany({
        include: {
            customer: true,
            type: true,
        },
        orderBy: { rev_date: 'desc' },
    });
};

export const getRevenueById = async (id: number) => {
    return prisma.revenue.findUnique({
        where: { id },
        include: {
            customer: true,
            type: true,
        },
    });
};

export const createRevenue = async (data: any) => {
    const { amount, quote_id, ...revenueData } = data;

    return prisma.revenue.create({
        data: {
            ...revenueData,
            amount: parseFloat(amount),
            quote_id: quote_id ? parseInt(quote_id) : null,
        },
        include: {
            customer: true,
            type: true,
        },
    });
};

export const updateRevenue = async (id: number, data: any) => {
    const { amount, quote_id, ...revenueData } = data;

    return prisma.revenue.update({
        where: { id },
        data: {
            ...revenueData,
            amount: amount !== undefined ? parseFloat(amount) : undefined,
            quote_id: quote_id !== undefined ? (quote_id ? parseInt(quote_id) : null) : undefined,
        },
        include: {
            customer: true,
            type: true,
        },
    });
};

export const deleteRevenue = async (id: number) => {
    return prisma.revenue.delete({
        where: { id },
    });
};

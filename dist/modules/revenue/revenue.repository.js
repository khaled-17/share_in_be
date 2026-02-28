import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllRevenue = async () => {
    return prisma.revenue.findMany({
        include: {
            customer: {
                select: { name: true },
            },
            type: {
                select: { revtype_name: true },
            },
        },
        orderBy: { rev_date: 'desc' },
    });
};
export const getRevenueById = async (id) => {
    return prisma.revenue.findUnique({
        where: { id },
        include: {
            customer: true,
            type: true,
        },
    });
};
export const createRevenue = async (data) => {
    return prisma.revenue.create({
        data,
        include: {
            customer: { select: { name: true } },
            type: { select: { revtype_name: true } },
        },
    });
};
export const updateRevenue = async (id, data) => {
    return prisma.revenue.update({
        where: { id },
        data,
        include: {
            customer: { select: { name: true } },
            type: { select: { revtype_name: true } },
        },
    });
};
export const deleteRevenue = async (id) => {
    return prisma.revenue.delete({
        where: { id },
    });
};

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllWorkOrders = async () => {
    return prisma.workOrder.findMany({
        include: {
            customer: { select: { name: true } },
            quotation: { select: { project_name: true } },
        },
        orderBy: { created_at: 'desc' },
    });
};
export const createWorkOrder = async (data) => {
    return prisma.workOrder.create({
        data,
    });
};
export const deleteWorkOrder = async (id) => {
    return prisma.workOrder.delete({
        where: { id },
    });
};

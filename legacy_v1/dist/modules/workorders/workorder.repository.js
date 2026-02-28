import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllWorkOrders = async () => {
    return prisma.workOrder.findMany({
        include: {
            customer: true,
            quotation: true,
        },
        orderBy: { created_at: 'desc' },
    });
};
export const createWorkOrder = async (data) => {
    const { quotation_id, ...orderData } = data;
    return prisma.workOrder.create({
        data: {
            ...orderData,
            quotation_id: parseInt(quotation_id),
        },
        include: {
            customer: true,
            quotation: true,
        },
    });
};
export const deleteWorkOrder = async (id) => {
    return prisma.workOrder.delete({
        where: { id },
    });
};

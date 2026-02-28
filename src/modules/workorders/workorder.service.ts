import * as workOrderRepository from './workorder.repository.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllWorkOrders = async () => {
    return workOrderRepository.getAllWorkOrders();
};

export const createWorkOrder = async (data: any) => {
    if (data.order_code) {
        const existing = await prisma.workOrder.findUnique({
            where: { order_code: data.order_code },
        });
        if (existing) {
            throw new Error('Work order code already exists');
        }
    }
    return workOrderRepository.createWorkOrder(data);
};

export const deleteWorkOrder = async (id: number) => {
    return workOrderRepository.deleteWorkOrder(id);
};

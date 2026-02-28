import * as workOrderRepository from './workorder.repository.js';

export const getAllWorkOrders = async () => {
    return workOrderRepository.getAllWorkOrders();
};

export const createWorkOrder = async (data: any) => {
    return workOrderRepository.createWorkOrder(data);
};

export const deleteWorkOrder = async (id: number) => {
    return workOrderRepository.deleteWorkOrder(id);
};

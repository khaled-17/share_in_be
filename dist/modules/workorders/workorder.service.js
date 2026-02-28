import * as workOrderRepository from './workorder.repository.js';
export const getAllWorkOrders = async () => {
    return workOrderRepository.getAllWorkOrders();
};
export const createWorkOrder = async (data) => {
    return workOrderRepository.createWorkOrder(data);
};
export const deleteWorkOrder = async (id) => {
    return workOrderRepository.deleteWorkOrder(id);
};

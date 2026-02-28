import * as revenueRepository from './revenue.repository.js';
export const getAllRevenue = async () => {
    return revenueRepository.getAllRevenue();
};
export const getRevenueById = async (id) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue)
        throw new Error('Revenue not found');
    return revenue;
};
export const createRevenue = async (data) => {
    return revenueRepository.createRevenue(data);
};
export const updateRevenue = async (id, data) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue)
        throw new Error('Revenue not found');
    return revenueRepository.updateRevenue(id, data);
};
export const deleteRevenue = async (id) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue)
        throw new Error('Revenue not found');
    return revenueRepository.deleteRevenue(id);
};

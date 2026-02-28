import * as revenueRepository from './revenue.repository.js';

export const getAllRevenue = async () => {
    return revenueRepository.getAllRevenue();
};

export const getRevenueById = async (id: number) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue) throw new Error('Revenue not found');
    return revenue;
};

export const createRevenue = async (data: any) => {
    return revenueRepository.createRevenue(data);
};

export const updateRevenue = async (id: number, data: any) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue) throw new Error('Revenue not found');
    return revenueRepository.updateRevenue(id, data);
};

export const deleteRevenue = async (id: number) => {
    const revenue = await revenueRepository.getRevenueById(id);
    if (!revenue) throw new Error('Revenue not found');
    return revenueRepository.deleteRevenue(id);
};

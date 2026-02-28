import * as checkRepository from './check.repository.js';
export const getAllChecks = async (filters) => {
    return checkRepository.getAllChecks(filters);
};
export const getCheckById = async (id) => {
    const check = await checkRepository.getCheckById(id);
    if (!check)
        throw new Error('Check not found');
    return check;
};
export const updateCheckStatus = async (id, data) => {
    const check = await checkRepository.getCheckById(id);
    if (!check)
        throw new Error('Check not found');
    return checkRepository.updateCheckStatus(id, data);
};
export const getCheckStats = async (filters) => {
    return checkRepository.getCheckStats(filters);
};
export const getDueSoonChecks = async () => {
    return checkRepository.getDueSoonChecks();
};

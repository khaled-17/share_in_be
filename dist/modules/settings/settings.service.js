import * as settingsRepository from './settings.repository.js';
// Revenue Types
export const getAllRevenueTypes = async () => {
    return settingsRepository.getAllRevenueTypes();
};
export const createRevenueType = async (data) => {
    return settingsRepository.createRevenueType(data);
};
export const updateRevenueType = async (id, data) => {
    return settingsRepository.updateRevenueType(id, data);
};
export const deleteRevenueType = async (id) => {
    return settingsRepository.deleteRevenueType(id);
};
// Expense Types
export const getAllExpenseTypes = async () => {
    return settingsRepository.getAllExpenseTypes();
};
export const createExpenseType = async (data) => {
    return settingsRepository.createExpenseType(data);
};
export const updateExpenseType = async (id, data) => {
    return settingsRepository.updateExpenseType(id, data);
};
export const deleteExpenseType = async (id) => {
    return settingsRepository.deleteExpenseType(id);
};
// Project Types
export const getAllProjectTypes = async () => {
    return settingsRepository.getAllProjectTypes();
};
export const createProjectType = async (data) => {
    return settingsRepository.createProjectType(data);
};
export const updateProjectType = async (id, data) => {
    return settingsRepository.updateProjectType(id, data);
};
export const deleteProjectType = async (id) => {
    return settingsRepository.deleteProjectType(id);
};

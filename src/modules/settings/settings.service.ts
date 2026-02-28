import * as settingsRepository from './settings.repository.js';

// Revenue Types
export const getAllRevenueTypes = async () => {
    return settingsRepository.getAllRevenueTypes();
};

export const createRevenueType = async (data: any) => {
    return settingsRepository.createRevenueType(data);
};

export const updateRevenueType = async (id: number, data: any) => {
    return settingsRepository.updateRevenueType(id, data);
};

export const deleteRevenueType = async (id: number) => {
    return settingsRepository.deleteRevenueType(id);
};

// Expense Types
export const getAllExpenseTypes = async () => {
    return settingsRepository.getAllExpenseTypes();
};

export const createExpenseType = async (data: any) => {
    return settingsRepository.createExpenseType(data);
};

export const updateExpenseType = async (id: number, data: any) => {
    return settingsRepository.updateExpenseType(id, data);
};

export const deleteExpenseType = async (id: number) => {
    return settingsRepository.deleteExpenseType(id);
};

// Project Types
export const getAllProjectTypes = async () => {
    return settingsRepository.getAllProjectTypes();
};

export const createProjectType = async (data: any) => {
    return settingsRepository.createProjectType(data);
};

export const updateProjectType = async (id: number, data: any) => {
    return settingsRepository.updateProjectType(id, data);
};

export const deleteProjectType = async (id: number) => {
    return settingsRepository.deleteProjectType(id);
};

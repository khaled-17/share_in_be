import * as settingsRepository from './settings.repository.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Revenue Types
export const getAllRevenueTypes = async () => {
    return settingsRepository.getAllRevenueTypes();
};
export const createRevenueType = async (data) => {
    const existing = await prisma.revenueType.findUnique({
        where: { revtype_id: data.revtype_id },
    });
    if (existing)
        throw new Error('Revenue Type ID already exists');
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
    const existing = await prisma.expenseType.findUnique({
        where: { exptype_id: data.exptype_id },
    });
    if (existing)
        throw new Error('Expense Type ID already exists');
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
    const existing = await prisma.projectType.findUnique({
        where: { type_id: data.type_id },
    });
    if (existing)
        throw new Error('Project Type ID already exists');
    return settingsRepository.createProjectType(data);
};
export const updateProjectType = async (id, data) => {
    return settingsRepository.updateProjectType(id, data);
};
export const deleteProjectType = async (id) => {
    return settingsRepository.deleteProjectType(id);
};

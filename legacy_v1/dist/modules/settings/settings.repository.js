import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllRevenueTypes = async () => {
    return prisma.revenueType.findMany({
        orderBy: { revtype_name: 'asc' },
    });
};
export const createRevenueType = async (data) => {
    return prisma.revenueType.create({
        data,
    });
};
export const updateRevenueType = async (id, data) => {
    return prisma.revenueType.update({
        where: { id },
        data,
    });
};
export const deleteRevenueType = async (id) => {
    return prisma.revenueType.delete({
        where: { id },
    });
};
// Expense Types
export const getAllExpenseTypes = async () => {
    return prisma.expenseType.findMany({
        orderBy: { exptype_name: 'asc' },
    });
};
export const createExpenseType = async (data) => {
    return prisma.expenseType.create({
        data,
    });
};
export const updateExpenseType = async (id, data) => {
    return prisma.expenseType.update({
        where: { id },
        data,
    });
};
export const deleteExpenseType = async (id) => {
    return prisma.expenseType.delete({
        where: { id },
    });
};
// Project Types
export const getAllProjectTypes = async () => {
    return prisma.projectType.findMany({
        orderBy: { type_name: 'asc' },
    });
};
export const createProjectType = async (data) => {
    return prisma.projectType.create({
        data,
    });
};
export const updateProjectType = async (id, data) => {
    return prisma.projectType.update({
        where: { id },
        data,
    });
};
export const deleteProjectType = async (id) => {
    return prisma.projectType.delete({
        where: { id },
    });
};

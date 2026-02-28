import * as settingsService from './settings.service.js';
import { successResponse } from '../../utils/response.js';
// Revenue Types
export const getAllRevenueTypes = async (req, res, next) => {
    try {
        const result = await settingsService.getAllRevenueTypes();
        return successResponse(res, result, 'Revenue types retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createRevenueType = async (req, res, next) => {
    try {
        const result = await settingsService.createRevenueType(req.body);
        return successResponse(res, result, 'Revenue type created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
export const updateRevenueType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await settingsService.updateRevenueType(id, req.body);
        return successResponse(res, result, 'Revenue type updated successfully');
    }
    catch (error) {
        next(error);
    }
};
export const deleteRevenueType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await settingsService.deleteRevenueType(id);
        return successResponse(res, null, 'Revenue type deleted successfully');
    }
    catch (error) {
        next(error);
    }
};
// Expense Types
export const getAllExpenseTypes = async (req, res, next) => {
    try {
        const result = await settingsService.getAllExpenseTypes();
        return successResponse(res, result, 'Expense types retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createExpenseType = async (req, res, next) => {
    try {
        const result = await settingsService.createExpenseType(req.body);
        return successResponse(res, result, 'Expense type created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
export const updateExpenseType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await settingsService.updateExpenseType(id, req.body);
        return successResponse(res, result, 'Expense type updated successfully');
    }
    catch (error) {
        next(error);
    }
};
export const deleteExpenseType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await settingsService.deleteExpenseType(id);
        return successResponse(res, null, 'Expense type deleted successfully');
    }
    catch (error) {
        next(error);
    }
};
// Project Types
export const getAllProjectTypes = async (req, res, next) => {
    try {
        const result = await settingsService.getAllProjectTypes();
        return successResponse(res, result, 'Project types retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createProjectType = async (req, res, next) => {
    try {
        const result = await settingsService.createProjectType(req.body);
        return successResponse(res, result, 'Project type created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};
export const updateProjectType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await settingsService.updateProjectType(id, req.body);
        return successResponse(res, result, 'Project type updated successfully');
    }
    catch (error) {
        next(error);
    }
};
export const deleteProjectType = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await settingsService.deleteProjectType(id);
        return successResponse(res, null, 'Project type deleted successfully');
    }
    catch (error) {
        next(error);
    }
};

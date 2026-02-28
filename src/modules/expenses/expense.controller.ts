import { Request, Response, NextFunction } from 'express';
import * as expenseService from './expense.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllExpenses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await expenseService.getAllExpenses();
        return successResponse(res, result, 'Expenses retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getExpenseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await expenseService.getExpenseById(id);
        return successResponse(res, result, 'Expense retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Expense not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const createExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await expenseService.createExpense(req.body);
        return successResponse(res, result, 'Expense created successfully', 201);
    } catch (error) {
        next(error);
    }
};

export const updateExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await expenseService.updateExpense(id, req.body);
        return successResponse(res, result, 'Expense updated successfully');
    } catch (error: any) {
        if (error.message === 'Expense not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const deleteExpense = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        await expenseService.deleteExpense(id);
        return successResponse(res, null, 'Expense deleted successfully');
    } catch (error: any) {
        if (error.message === 'Expense not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

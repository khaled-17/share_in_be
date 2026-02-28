import { Request, Response, NextFunction } from 'express';
import * as checkService from './check.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllChecks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await checkService.getAllChecks(req.query);
        return successResponse(res, result, 'Checks retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getCheckById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await checkService.getCheckById(id);
        return successResponse(res, result, 'Check retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Check not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const updateCheckStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await checkService.updateCheckStatus(id, req.body);
        return successResponse(res, result, 'Check status updated successfully');
    } catch (error: any) {
        if (error.message === 'Check not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const getCheckStatsSummary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await checkService.getCheckStats(req.query);
        return successResponse(res, result, 'Check stats retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getDueSoonChecks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await checkService.getDueSoonChecks();
        return successResponse(res, result, 'Due-soon checks retrieved successfully');
    } catch (error) {
        next(error);
    }
};

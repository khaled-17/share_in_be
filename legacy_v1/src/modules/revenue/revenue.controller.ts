import { Request, Response, NextFunction } from 'express';
import * as revenueService from './revenue.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await revenueService.getAllRevenue();
        return successResponse(res, result, 'Revenues retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getRevenueById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await revenueService.getRevenueById(id);
        return successResponse(res, result, 'Revenue retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Revenue not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const createRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await revenueService.createRevenue(req.body);
        return successResponse(res, result, 'Revenue created successfully', 201);
    } catch (error) {
        next(error);
    }
};

export const updateRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await revenueService.updateRevenue(id, req.body);
        return successResponse(res, result, 'Revenue updated successfully');
    } catch (error: any) {
        if (error.message === 'Revenue not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const deleteRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        await revenueService.deleteRevenue(id);
        return successResponse(res, null, 'Revenue deleted successfully');
    } catch (error: any) {
        if (error.message === 'Revenue not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

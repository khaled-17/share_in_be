import { Request, Response, NextFunction } from 'express';
import * as workOrderService from './workorder.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllWorkOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await workOrderService.getAllWorkOrders();
        return successResponse(res, result, 'Work orders retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const createWorkOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await workOrderService.createWorkOrder(req.body);
        return successResponse(res, result, 'Work order created successfully', 201);
    } catch (error) {
        next(error);
    }
};

export const deleteWorkOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        await workOrderService.deleteWorkOrder(id);
        return successResponse(res, null, 'Work order deleted successfully');
    } catch (error) {
        next(error);
    }
};

import * as workOrderService from './workorder.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
export const getAllWorkOrders = async (req, res, next) => {
    try {
        const result = await workOrderService.getAllWorkOrders();
        return successResponse(res, result, 'Work orders retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createWorkOrder = async (req, res, next) => {
    try {
        const result = await workOrderService.createWorkOrder(req.body);
        return successResponse(res, result, 'Work order created successfully', 201);
    }
    catch (error) {
        if (error.message.includes('already exists')) {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};
export const deleteWorkOrder = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id))
            return errorResponse(res, 'Invalid ID', 400);
        await workOrderService.deleteWorkOrder(id);
        return successResponse(res, null, 'Work order deleted successfully');
    }
    catch (error) {
        next(error);
    }
};

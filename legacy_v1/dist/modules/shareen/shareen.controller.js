import * as shareenService from './shareen.service.js';
import { successResponse } from '../../utils/response.js';
export const getAllShareen = async (req, res, next) => {
    try {
        const result = await shareenService.getAllShareen();
        return successResponse(res, result, 'Shareen logs retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const createShareen = async (req, res, next) => {
    try {
        const result = await shareenService.createShareen(req.body);
        return successResponse(res, result, 'Shareen log created successfully', 201);
    }
    catch (error) {
        next(error);
    }
};

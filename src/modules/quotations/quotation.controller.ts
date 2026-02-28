import { Request, Response, NextFunction } from 'express';
import * as quotationService from './quotation.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllQuotations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await quotationService.getAllQuotations();
        return successResponse(res, result, 'Quotations retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getQuotationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await quotationService.getQuotationById(id);
        return successResponse(res, result, 'Quotation retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Quotation not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const createQuotation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await quotationService.createQuotation(req.body);
        return successResponse(res, result, 'Quotation created successfully', 201);
    } catch (error) {
        next(error);
    }
};

export const updateQuotation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        const result = await quotationService.updateQuotation(id, req.body);
        return successResponse(res, result, 'Quotation updated successfully');
    } catch (error: any) {
        if (error.message === 'Quotation not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

export const deleteQuotation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) return errorResponse(res, 'Invalid ID', 400);

        await quotationService.deleteQuotation(id);
        return successResponse(res, null, 'Quotation deleted successfully');
    } catch (error: any) {
        if (error.message === 'Quotation not found') return errorResponse(res, error.message, 404);
        next(error);
    }
};

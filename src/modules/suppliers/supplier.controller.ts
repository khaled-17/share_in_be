import { Request, Response, NextFunction } from 'express';
import * as supplierService from './supplier.service.js';
import { successResponse, paginatedResponse, errorResponse } from '../../utils/response.js';

export const getAllSuppliers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await supplierService.getAllSuppliers(req.query);
        return paginatedResponse(res, result.suppliers, result.pagination, 'Suppliers retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getSupplierById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const supplier = await supplierService.getSupplierById(req.params.id as string);
        return successResponse(res, supplier, 'Supplier retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

export const createSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);
        return successResponse(res, supplier, 'Supplier created successfully', 201);
    } catch (error: any) {
        if (error.message === 'Supplier ID already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};

export const updateSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const supplier = await supplierService.updateSupplier(req.params.id as string, req.body);
        return successResponse(res, supplier, 'Supplier updated successfully');
    } catch (error: any) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

export const deleteSupplier = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await supplierService.deleteSupplier(req.params.id as string);
        return successResponse(res, null, 'Supplier deleted successfully');
    } catch (error: any) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

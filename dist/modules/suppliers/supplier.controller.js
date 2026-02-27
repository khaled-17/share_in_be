import * as supplierService from './supplier.service.js';
import { successResponse, paginatedResponse, errorResponse } from '../../utils/response.js';
export const getAllSuppliers = async (req, res, next) => {
    try {
        const result = await supplierService.getAllSuppliers(req.query);
        return paginatedResponse(res, result.suppliers, result.pagination, 'Suppliers retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getSupplierById = async (req, res, next) => {
    try {
        const supplier = await supplierService.getSupplierById(req.params.id);
        return successResponse(res, supplier, 'Supplier retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};
export const createSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.createSupplier(req.body);
        return successResponse(res, supplier, 'Supplier created successfully', 201);
    }
    catch (error) {
        if (error.message === 'Supplier ID already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};
export const updateSupplier = async (req, res, next) => {
    try {
        const supplier = await supplierService.updateSupplier(req.params.id, req.body);
        return successResponse(res, supplier, 'Supplier updated successfully');
    }
    catch (error) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};
export const deleteSupplier = async (req, res, next) => {
    try {
        await supplierService.deleteSupplier(req.params.id);
        return successResponse(res, null, 'Supplier deleted successfully');
    }
    catch (error) {
        if (error.message === 'Supplier not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

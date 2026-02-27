import * as customerService from './customer.service.js';
import { successResponse, paginatedResponse, errorResponse } from '../../utils/response.js';
export const getAllCustomers = async (req, res, next) => {
    try {
        const result = await customerService.getAllCustomers(req.query);
        return paginatedResponse(res, result.customers, result.pagination, 'Customers retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getCustomerById = async (req, res, next) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        return successResponse(res, customer, 'Customer retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Customer not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};
export const createCustomer = async (req, res, next) => {
    try {
        const { customer_id, name, contact_person, company_email, contact_email, phone, secondary_phone, address } = req.body;
        if (!customer_id || !name || !contact_person || !company_email || !contact_email || !phone || !secondary_phone || !address) {
            return errorResponse(res, 'All fields are mandatory: customer_id, name, contact_person, company_email, contact_email, phone, secondary_phone, address', 400);
        }
        const customer = await customerService.createCustomer(req.body);
        return successResponse(res, customer, 'Customer created successfully', 201);
    }
    catch (error) {
        if (error.message === 'Customer ID already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};
export const updateCustomer = async (req, res, next) => {
    try {
        const customer = await customerService.updateCustomer(req.params.id, req.body);
        return successResponse(res, customer, 'Customer updated successfully');
    }
    catch (error) {
        if (error.message === 'Customer not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};
export const deleteCustomer = async (req, res, next) => {
    try {
        await customerService.deleteCustomer(req.params.id);
        return successResponse(res, null, 'Customer deleted successfully');
    }
    catch (error) {
        if (error.message === 'Customer not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

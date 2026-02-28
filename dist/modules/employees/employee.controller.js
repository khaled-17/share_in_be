import * as employeeService from './employee.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
export const getAllEmployees = async (req, res, next) => {
    try {
        const result = await employeeService.getAllEmployees();
        return successResponse(res, result, 'Employees retrieved successfully');
    }
    catch (error) {
        next(error);
    }
};
export const getEmployeeById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        const employee = await employeeService.getEmployeeById(id);
        return successResponse(res, employee, 'Employee retrieved successfully');
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};
export const createEmployee = async (req, res, next) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        return successResponse(res, employee, 'Employee created successfully', 201);
    }
    catch (error) {
        if (error.message === 'Employee Code already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};
export const updateEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        const employee = await employeeService.updateEmployee(id, req.body);
        return successResponse(res, employee, 'Employee updated successfully');
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        if (error.message === 'Employee Code already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};
export const deleteEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        await employeeService.deleteEmployee(id);
        return successResponse(res, null, 'Employee deleted successfully');
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

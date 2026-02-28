import { Request, Response, NextFunction } from 'express';
import * as employeeService from './employee.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const getAllEmployees = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await employeeService.getAllEmployees();
        return successResponse(res, result, 'Employees retrieved successfully');
    } catch (error) {
        next(error);
    }
};

export const getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        const employee = await employeeService.getEmployeeById(id);
        return successResponse(res, employee, 'Employee retrieved successfully');
    } catch (error: any) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

export const createEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        return successResponse(res, employee, 'Employee created successfully', 201);
    } catch (error: any) {
        if (error.message === 'Employee Code already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};

export const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        const employee = await employeeService.updateEmployee(id, req.body);
        return successResponse(res, employee, 'Employee updated successfully');
    } catch (error: any) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        if (error.message === 'Employee Code already exists') {
            return errorResponse(res, error.message, 400);
        }
        next(error);
    }
};

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string);
        if (isNaN(id)) {
            return errorResponse(res, 'Invalid employee ID', 400);
        }
        await employeeService.deleteEmployee(id);
        return successResponse(res, null, 'Employee deleted successfully');
    } catch (error: any) {
        if (error.message === 'Employee not found') {
            return errorResponse(res, error.message, 404);
        }
        next(error);
    }
};

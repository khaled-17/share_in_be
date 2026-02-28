import * as employeeService from './employee.service.js';
export const getAllEmployees = async (req, res, next) => {
    try {
        const result = await employeeService.getAllEmployees();
        // Frontend expects an array directly: api.get<Employee[]>('/employees') 
        res.json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getEmployeeById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        const employee = await employeeService.getEmployeeById(id);
        res.json(employee);
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return res.status(404).json({ success: false, message: error.message });
        }
        next(error);
    }
};
export const createEmployee = async (req, res, next) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    }
    catch (error) {
        if (error.message === 'Employee Code already exists') {
            return res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
};
export const updateEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        const employee = await employeeService.updateEmployee(id, req.body);
        res.json(employee);
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return res.status(404).json({ success: false, message: error.message });
        }
        if (error.message === 'Employee Code already exists') {
            return res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
};
export const deleteEmployee = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        await employeeService.deleteEmployee(id);
        res.json({ message: 'Employee deleted successfully' });
    }
    catch (error) {
        if (error.message === 'Employee not found') {
            return res.status(404).json({ success: false, message: error.message });
        }
        next(error);
    }
};

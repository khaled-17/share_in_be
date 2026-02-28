import * as employeeRepository from './employee.repository.js';

export const getAllEmployees = async () => {
    // We return array directly like supplier if frontend isn't handling paginated response for employees
    // Wait, frontend expect array for employee: `api.get<Employee[]>('/employees')`
    // Let's just return all employees without pagination.
    const { employees } = await employeeRepository.findAll({});
    return employees;
};

export const getEmployeeById = async (id: number) => {
    const employee = await employeeRepository.findById(id);
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee;
};

export const createEmployee = async (data: any) => {
    if (data.emp_code) {
        const existing = await employeeRepository.findByEmpCode(data.emp_code);
        if (existing) {
            throw new Error('Employee Code already exists');
        }
    }
    return await employeeRepository.create(data);
};

export const updateEmployee = async (id: number, data: any) => {
    await getEmployeeById(id);

    if (data.emp_code) {
        const existing = await employeeRepository.findByEmpCode(data.emp_code);
        if (existing && existing.id !== id) {
            throw new Error('Employee Code already exists');
        }
    }

    return await employeeRepository.update(id, data);
};

export const deleteEmployee = async (id: number) => {
    await getEmployeeById(id);
    return await employeeRepository.remove(id);
};

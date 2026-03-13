import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Promise<{
        success: boolean;
        data: {
            name: string;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        }[];
        total: number;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        };
    }>;
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        };
    }>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

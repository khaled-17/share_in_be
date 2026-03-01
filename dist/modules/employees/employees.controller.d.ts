import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            phone: string | null;
            position: string | null;
            emp_code: string;
            salary: number | null;
            start_date: string | null;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            phone: string | null;
            position: string | null;
            emp_code: string;
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
            position: string | null;
            emp_code: string;
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
            position: string | null;
            emp_code: string;
            salary: number | null;
            start_date: string | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

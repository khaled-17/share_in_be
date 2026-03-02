import { EmployeesService } from './employees.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Promise<{
        employees: {
            id: number;
            emp_code: string;
            name: string;
            phone: string | null;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        }[];
        total: number;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            emp_code: string;
            name: string;
            phone: string | null;
            position: string | null;
            salary: number | null;
            start_date: string | null;
        };
    }>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            emp_code: string;
            name: string;
            phone: string | null;
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

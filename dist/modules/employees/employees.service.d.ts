import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class EmployeesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params?: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
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
        id: number;
        emp_code: string;
        name: string;
        phone: string | null;
        position: string | null;
        salary: number | null;
        start_date: string | null;
    }>;
    findByEmpCode(emp_code: string): Promise<{
        id: number;
        emp_code: string;
        name: string;
        phone: string | null;
        position: string | null;
        salary: number | null;
        start_date: string | null;
    } | null>;
    create(data: Prisma.EmployeeCreateInput): Promise<{
        id: number;
        emp_code: string;
        name: string;
        phone: string | null;
        position: string | null;
        salary: number | null;
        start_date: string | null;
    }>;
    update(id: number, data: Prisma.EmployeeUpdateInput): Promise<{
        id: number;
        emp_code: string;
        name: string;
        phone: string | null;
        position: string | null;
        salary: number | null;
        start_date: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        emp_code: string;
        name: string;
        phone: string | null;
        position: string | null;
        salary: number | null;
        start_date: string | null;
    }>;
}

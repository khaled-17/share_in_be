import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllRevenueTypes(): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }[]>;
    createRevenueType(data: Prisma.RevenueTypeCreateInput): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }>;
    updateRevenueType(id: number, data: Prisma.RevenueTypeUpdateInput): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }>;
    deleteRevenueType(id: number): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }>;
    getAllExpenseTypes(): Promise<{
        id: number;
        exptype_id: string;
        exptype_name: string;
        category: string | null;
    }[]>;
    createExpenseType(data: Prisma.ExpenseTypeCreateInput): Promise<{
        id: number;
        exptype_id: string;
        exptype_name: string;
        category: string | null;
    }>;
    updateExpenseType(id: number, data: Prisma.ExpenseTypeUpdateInput): Promise<{
        id: number;
        exptype_id: string;
        exptype_name: string;
        category: string | null;
    }>;
    deleteExpenseType(id: number): Promise<{
        id: number;
        exptype_id: string;
        exptype_name: string;
        category: string | null;
    }>;
    findAllProjectTypes(): Promise<{
        id: number;
        type_id: string;
        type_name: string;
    }[]>;
    createProjectType(data: {
        type: string;
    }): Promise<{
        id: number;
        type_id: string;
        type_name: string;
    }>;
    updateProjectType(id: number, data: {
        type: string;
    }): Promise<{
        id: number;
        type_id: string;
        type_name: string;
    }>;
    removeProjectType(id: number): Promise<{
        id: number;
        type_id: string;
        type_name: string;
    }>;
}

import { PrismaService } from '../../prisma/prisma.service';
import { CreateCountryDto, CreateExpenseTypeDto, CreateProjectTypeDto, CreateRevenueTypeDto, UpdateCountryDto, UpdateExpenseTypeDto, UpdateRevenueTypeDto } from './dto/settings.dto';
export declare class SettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateRevenueTypeCode;
    private generateExpenseTypeCode;
    private generateProjectTypeCode;
    private generateCountryCode;
    getAllRevenueTypes(): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }[]>;
    createRevenueType(data: CreateRevenueTypeDto): Promise<{
        id: number;
        revtype_id: string;
        revtype_name: string;
        paymethod: string;
    }>;
    updateRevenueType(id: number, data: UpdateRevenueTypeDto): Promise<{
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
    createExpenseType(data: CreateExpenseTypeDto): Promise<{
        id: number;
        exptype_id: string;
        exptype_name: string;
        category: string | null;
    }>;
    updateExpenseType(id: number, data: UpdateExpenseTypeDto): Promise<{
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
    createProjectType(data: CreateProjectTypeDto): Promise<{
        id: number;
        type_id: string;
        type_name: string;
    }>;
    updateProjectType(id: number, data: {
        type_name?: string;
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
    getAllCountries(): Promise<{
        id: number;
        created_at: Date;
        country_code: string;
        country_name: string;
    }[]>;
    createCountry(data: CreateCountryDto): Promise<{
        id: number;
        created_at: Date;
        country_code: string;
        country_name: string;
    }>;
    updateCountry(id: number, data: UpdateCountryDto): Promise<{
        id: number;
        created_at: Date;
        country_code: string;
        country_name: string;
    }>;
    deleteCountry(id: number): Promise<{
        id: number;
        created_at: Date;
        country_code: string;
        country_name: string;
    }>;
}

import { SettingsService } from './settings.service';
import { CreateProjectTypeDto, UpdateProjectTypeDto, CreateCountryDto, UpdateCountryDto, CreateExpenseTypeDto, UpdateExpenseTypeDto, CreateRevenueTypeDto, UpdateRevenueTypeDto } from './dto/settings.dto';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    findAllProjectTypes(): Promise<{
        success: boolean;
        data: {
            id: number;
            type_id: string;
            type_name: string;
        }[];
    }>;
    createProjectType(data: CreateProjectTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            type_id: string;
            type_name: string;
        };
    }>;
    updateProjectType(id: number, data: UpdateProjectTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            type_id: string;
            type_name: string;
        };
    }>;
    removeProjectType(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getAllCountries(): Promise<{
        success: boolean;
        data: {
            id: number;
            created_at: Date;
            country_code: string;
            country_name: string;
        }[];
    }>;
    createCountry(data: CreateCountryDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            created_at: Date;
            country_code: string;
            country_name: string;
        };
    }>;
    updateCountry(id: number, data: UpdateCountryDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            created_at: Date;
            country_code: string;
            country_name: string;
        };
    }>;
    deleteCountry(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getAllExpenseTypes(): Promise<{
        success: boolean;
        data: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        }[];
    }>;
    createExpenseType(data: CreateExpenseTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    }>;
    updateExpenseType(id: number, data: UpdateExpenseTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    }>;
    deleteExpenseType(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    getAllRevenueTypes(): Promise<{
        success: boolean;
        data: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        }[];
    }>;
    createRevenueType(data: CreateRevenueTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    }>;
    updateRevenueType(id: number, data: UpdateRevenueTypeDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    }>;
    deleteRevenueType(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

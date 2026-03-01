import { SettingsService } from './settings.service';
import { CreateProjectTypeDto, UpdateProjectTypeDto } from './dto/settings.dto';
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
}

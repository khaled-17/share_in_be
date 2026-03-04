import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/permission.dto';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    findAll(): Promise<{
        success: boolean;
        data: {
            id: number;
            action: string;
            description: string | null;
            module: string | null;
        }[];
    }>;
    create(createPermissionDto: CreatePermissionDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            action: string;
            description: string | null;
            module: string | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

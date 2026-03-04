import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/permission.dto';
export declare class PermissionsController {
    private readonly permissionsService;
    constructor(permissionsService: PermissionsService);
    findAll(): Promise<{
        success: boolean;
        data: {
            description: string | null;
            action: string;
            module: string | null;
            id: number;
        }[];
    }>;
    create(createPermissionDto: CreatePermissionDto): Promise<{
        success: boolean;
        message: string;
        data: {
            description: string | null;
            action: string;
            module: string | null;
            id: number;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

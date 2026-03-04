import { PrismaService } from '../../prisma/prisma.service';
import { CreatePermissionDto } from './dto/permission.dto';
export declare class PermissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        action: string;
        description: string | null;
        module: string | null;
    }[]>;
    create(data: CreatePermissionDto): Promise<{
        id: number;
        action: string;
        description: string | null;
        module: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        action: string;
        description: string | null;
        module: string | null;
    }>;
}

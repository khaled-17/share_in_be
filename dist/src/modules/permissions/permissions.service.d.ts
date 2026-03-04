import { PrismaService } from '../../prisma/prisma.service';
import { CreatePermissionDto } from './dto/permission.dto';
export declare class PermissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        description: string | null;
        action: string;
        module: string | null;
        id: number;
    }[]>;
    create(data: CreatePermissionDto): Promise<{
        description: string | null;
        action: string;
        module: string | null;
        id: number;
    }>;
    remove(id: number): Promise<{
        description: string | null;
        action: string;
        module: string | null;
        id: number;
    }>;
}

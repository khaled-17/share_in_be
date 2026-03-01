import { PrismaService } from '../../prisma/prisma.service';
export declare class ShareenService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: any): Promise<{
        id: number;
        created_at: Date;
    }[]>;
    create(data: any): Promise<{
        id: number;
        created_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        created_at: Date;
    }>;
}

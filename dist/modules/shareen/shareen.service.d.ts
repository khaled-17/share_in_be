import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ShareenService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: Prisma.ShareenWhereInput): Promise<{
        id: number;
        created_at: Date;
    }[]>;
    create(data: Prisma.ShareenCreateInput): Promise<{
        id: number;
        created_at: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        created_at: Date;
    }>;
}

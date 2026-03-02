import { PrismaService } from '../../prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    getCompany(): Promise<{
        name: string;
        id: number;
        email: string | null;
        description: string | null;
        phone: string | null;
        address: string | null;
        about: string | null;
        website: string | null;
        updated_at: Date;
    } | null>;
    update(data: any): Promise<{
        name: string;
        id: number;
        email: string | null;
        description: string | null;
        phone: string | null;
        address: string | null;
        about: string | null;
        website: string | null;
        updated_at: Date;
    }>;
}

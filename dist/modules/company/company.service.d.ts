import { PrismaService } from '../../prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    getCompany(): Promise<{
        name: string;
        phone: string | null;
        address: string | null;
        id: number;
        description: string | null;
        about: string | null;
        email: string | null;
        website: string | null;
        updated_at: Date;
    } | null>;
    update(data: any): Promise<{
        name: string;
        phone: string | null;
        address: string | null;
        id: number;
        description: string | null;
        about: string | null;
        email: string | null;
        website: string | null;
        updated_at: Date;
    }>;
}

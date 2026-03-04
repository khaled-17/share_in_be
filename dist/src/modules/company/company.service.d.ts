import { PrismaService } from '../../prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    getCompany(): Promise<{
        id: number;
        name: string;
        description: string | null;
        email: string | null;
        phone: string | null;
        address: string | null;
        about: string | null;
        website: string | null;
        updated_at: Date;
    } | null>;
    update(data: any): Promise<{
        id: number;
        name: string;
        description: string | null;
        email: string | null;
        phone: string | null;
        address: string | null;
        about: string | null;
        website: string | null;
        updated_at: Date;
    }>;
}

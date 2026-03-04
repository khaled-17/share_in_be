import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
        customers: {
            name: string;
            created_at: Date;
            tenant_id: number;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_by: number | null;
        }[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        name: string;
        created_at: Date;
        tenant_id: number;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_by: number | null;
    }>;
    create(data: Prisma.CustomerCreateInput): Promise<{
        name: string;
        created_at: Date;
        tenant_id: number;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_by: number | null;
    }>;
    update(id: string, data: Prisma.CustomerUpdateInput): Promise<{
        name: string;
        created_at: Date;
        tenant_id: number;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_by: number | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        created_at: Date;
        tenant_id: number;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_by: number | null;
    }>;
}

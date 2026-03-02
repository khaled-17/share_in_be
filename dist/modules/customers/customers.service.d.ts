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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        }[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        name: string;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
    }>;
    create(data: Prisma.CustomerCreateInput): Promise<{
        name: string;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
    }>;
    update(id: string, data: Prisma.CustomerUpdateInput): Promise<{
        name: string;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        contact_person: string;
        phone: string;
        customer_id: string;
        company_email: string;
        contact_email: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
    }>;
}

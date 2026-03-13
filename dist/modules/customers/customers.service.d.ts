import { PrismaService } from '../../prisma/prisma.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateCustomerId;
    findAll(params: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
        customers: {
            name: string;
            tenant_id: number;
            customer_id: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
            created_by: number | null;
        }[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        name: string;
        tenant_id: number;
        customer_id: string;
        contact_person: string;
        company_email: string;
        contact_email: string;
        phone: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
        created_by: number | null;
    }>;
    create(data: CreateCustomerDto): Promise<{
        name: string;
        tenant_id: number;
        customer_id: string;
        contact_person: string;
        company_email: string;
        contact_email: string;
        phone: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
        created_by: number | null;
    }>;
    update(id: string, data: UpdateCustomerDto): Promise<{
        name: string;
        tenant_id: number;
        customer_id: string;
        contact_person: string;
        company_email: string;
        contact_email: string;
        phone: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
        created_by: number | null;
    }>;
    remove(id: string): Promise<{
        name: string;
        tenant_id: number;
        customer_id: string;
        contact_person: string;
        company_email: string;
        contact_email: string;
        phone: string;
        secondary_phone: string;
        address: string;
        created_at: Date;
        created_by: number | null;
    }>;
}

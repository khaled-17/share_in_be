import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Supplier } from '@prisma/client';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
        suppliers: {
            id: number;
            name: string;
            created_at: Date;
            tenant_id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_by: number | null;
            speciality: string | null;
            supplier_id: string;
        }[];
        total: number;
    }>;
    findOne(idOrCode: string | number): Promise<Supplier>;
    create(data: Prisma.SupplierCreateInput): Promise<{
        id: number;
        name: string;
        created_at: Date;
        tenant_id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_by: number | null;
        speciality: string | null;
        supplier_id: string;
    }>;
    update(idOrCode: string | number, data: Prisma.SupplierUpdateInput): Promise<{
        id: number;
        name: string;
        created_at: Date;
        tenant_id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_by: number | null;
        speciality: string | null;
        supplier_id: string;
    }>;
    remove(idOrCode: string | number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        tenant_id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_by: number | null;
        speciality: string | null;
        supplier_id: string;
    }>;
}

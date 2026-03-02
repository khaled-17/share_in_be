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
            supplier_id: string;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        }[];
        total: number;
    }>;
    findOne(idOrCode: string | number): Promise<Supplier>;
    create(data: Prisma.SupplierCreateInput): Promise<{
        id: number;
        supplier_id: string;
        name: string;
        contact_person: string | null;
        email: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        speciality: string | null;
        created_at: Date;
    }>;
    update(idOrCode: string | number, data: Prisma.SupplierUpdateInput): Promise<{
        id: number;
        supplier_id: string;
        name: string;
        contact_person: string | null;
        email: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        speciality: string | null;
        created_at: Date;
    }>;
    remove(idOrCode: string | number): Promise<{
        id: number;
        supplier_id: string;
        name: string;
        contact_person: string | null;
        email: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        speciality: string | null;
        created_at: Date;
    }>;
}

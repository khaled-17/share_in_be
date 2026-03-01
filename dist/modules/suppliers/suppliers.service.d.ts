import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
        suppliers: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            supplier_id: string;
            speciality: string | null;
        }[];
        total: number;
    }>;
    findOne(idOrCode: string | number): Promise<any>;
    create(data: Prisma.SupplierCreateInput): Promise<{
        name: string;
        id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        supplier_id: string;
        speciality: string | null;
    }>;
    update(idOrCode: string | number, data: Prisma.SupplierUpdateInput): Promise<{
        name: string;
        id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        supplier_id: string;
        speciality: string | null;
    }>;
    remove(idOrCode: string | number): Promise<{
        name: string;
        id: number;
        email: string | null;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        supplier_id: string;
        speciality: string | null;
    }>;
}

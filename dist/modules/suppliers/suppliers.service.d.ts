import { PrismaService } from '../../prisma/prisma.service';
import { Supplier } from '@prisma/client';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateSupplierId;
    findAll(params: {
        skip?: number;
        take?: number;
        search?: string;
    }): Promise<{
        suppliers: {
            name: string;
            id: number;
            email: string | null;
            tenant_id: number;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            created_by: number | null;
            supplier_id: string;
            speciality: string | null;
        }[];
        total: number;
    }>;
    findOne(idOrCode: string | number): Promise<Supplier>;
    create(data: CreateSupplierDto): Promise<{
        name: string;
        id: number;
        email: string | null;
        tenant_id: number;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        created_by: number | null;
        supplier_id: string;
        speciality: string | null;
    }>;
    update(idOrCode: string | number, data: UpdateSupplierDto): Promise<{
        name: string;
        id: number;
        email: string | null;
        tenant_id: number;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        created_by: number | null;
        supplier_id: string;
        speciality: string | null;
    }>;
    remove(idOrCode: string | number): Promise<{
        name: string;
        id: number;
        email: string | null;
        tenant_id: number;
        contact_person: string | null;
        phone: string | null;
        secondary_phone: string | null;
        address: string | null;
        created_at: Date;
        created_by: number | null;
        supplier_id: string;
        speciality: string | null;
    }>;
}

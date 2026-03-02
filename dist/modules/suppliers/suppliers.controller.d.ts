import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';
export declare class SuppliersController {
    private suppliersService;
    constructor(suppliersService: SuppliersService);
    findAll(query: Record<string, string>): Promise<{
        success: boolean;
        message: string;
        data: {
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
        pagination: {
            page: number;
            limit: number;
            total: number;
        };
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    create(createSupplierDto: CreateSupplierDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}

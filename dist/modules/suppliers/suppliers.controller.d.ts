import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';
export declare class SuppliersController {
    private suppliersService;
    constructor(suppliersService: SuppliersService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
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
        data: any;
    }>;
    create(createSupplierDto: CreateSupplierDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
    }>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}

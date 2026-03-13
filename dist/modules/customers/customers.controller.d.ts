import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto, CustomerQueryDto } from './dto/customer.dto';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(query: CustomerQueryDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    create(createCustomerDto: CreateCustomerDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}

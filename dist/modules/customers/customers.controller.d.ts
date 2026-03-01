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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
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
            name: string;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
    }>;
    create(createCustomerDto: CreateCustomerDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}

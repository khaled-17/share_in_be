export declare class CreateCustomerDto {
    customer_id: string;
    name: string;
    contact_person: string;
    company_email: string;
    contact_email: string;
    phone: string;
    secondary_phone: string;
    address: string;
}
export declare class UpdateCustomerDto {
    name?: string;
    contact_person?: string;
    company_email?: string;
    contact_email?: string;
    phone?: string;
    secondary_phone?: string;
    address?: string;
}
export declare class CustomerQueryDto {
    page?: number;
    limit?: number;
    search?: string;
}

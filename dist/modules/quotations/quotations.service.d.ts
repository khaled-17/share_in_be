import { PrismaService } from '../../prisma/prisma.service';
export declare class QuotationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: any): Promise<({
        customer: {
            name: string;
        };
        items: {
            id: number;
            description: string;
            quotation_id: number;
            total: number;
            unit_price: number;
            quantity: number;
        }[];
        project_type: {
            id: number;
            type_id: string;
            type_name: string;
        } | null;
    } & {
        id: number;
        customer_id: string;
        receipt_no: string | null;
        project_manager: string | null;
        project_name: string | null;
        quote_date: string;
        delivery_date: string | null;
        totalamount: number;
        paid_adv: number | null;
        adv_date: string | null;
        status: string;
        project_type_id: string | null;
    })[]>;
    findOne(id: number): Promise<{
        customer: {
            name: string;
            customer_id: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
        items: {
            id: number;
            description: string;
            quotation_id: number;
            total: number;
            unit_price: number;
            quantity: number;
        }[];
        project_type: {
            id: number;
            type_id: string;
            type_name: string;
        } | null;
    } & {
        id: number;
        customer_id: string;
        receipt_no: string | null;
        project_manager: string | null;
        project_name: string | null;
        quote_date: string;
        delivery_date: string | null;
        totalamount: number;
        paid_adv: number | null;
        adv_date: string | null;
        status: string;
        project_type_id: string | null;
    }>;
    create(data: any): Promise<{
        customer: {
            name: string;
            customer_id: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
        items: {
            id: number;
            description: string;
            quotation_id: number;
            total: number;
            unit_price: number;
            quantity: number;
        }[];
        project_type: {
            id: number;
            type_id: string;
            type_name: string;
        } | null;
    } & {
        id: number;
        customer_id: string;
        receipt_no: string | null;
        project_manager: string | null;
        project_name: string | null;
        quote_date: string;
        delivery_date: string | null;
        totalamount: number;
        paid_adv: number | null;
        adv_date: string | null;
        status: string;
        project_type_id: string | null;
    }>;
    update(id: number, data: any): Promise<{
        customer: {
            name: string;
            customer_id: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
        };
        items: {
            id: number;
            description: string;
            quotation_id: number;
            total: number;
            unit_price: number;
            quantity: number;
        }[];
        project_type: {
            id: number;
            type_id: string;
            type_name: string;
        } | null;
    } & {
        id: number;
        customer_id: string;
        receipt_no: string | null;
        project_manager: string | null;
        project_name: string | null;
        quote_date: string;
        delivery_date: string | null;
        totalamount: number;
        paid_adv: number | null;
        adv_date: string | null;
        status: string;
        project_type_id: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        customer_id: string;
        receipt_no: string | null;
        project_manager: string | null;
        project_name: string | null;
        quote_date: string;
        delivery_date: string | null;
        totalamount: number;
        paid_adv: number | null;
        adv_date: string | null;
        status: string;
        project_type_id: string | null;
    }>;
}

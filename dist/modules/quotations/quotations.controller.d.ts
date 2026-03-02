import { QuotationsService } from './quotations.service';
import { CreateQuotationDto, UpdateQuotationDto } from './dto/quotation.dto';
export declare class QuotationsController {
    private quotationsService;
    constructor(quotationsService: QuotationsService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
            items: {
                id: number;
                description: string;
                unit_price: number;
                quantity: number;
                total: number;
                quotation_id: number;
            }[];
            customer: {
                name: string;
            };
            project_type: {
                id: number;
                type_id: string;
                type_name: string;
            } | null;
        } & {
            id: number;
            customer_id: string;
            project_type_id: string | null;
            project_manager: string | null;
            project_name: string | null;
            quote_date: string;
            delivery_date: string | null;
            totalamount: number;
            paid_adv: number | null;
            adv_date: string | null;
            receipt_no: string | null;
            status: string;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            items: {
                id: number;
                description: string;
                unit_price: number;
                quantity: number;
                total: number;
                quotation_id: number;
            }[];
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
            project_type: {
                id: number;
                type_id: string;
                type_name: string;
            } | null;
        } & {
            id: number;
            customer_id: string;
            project_type_id: string | null;
            project_manager: string | null;
            project_name: string | null;
            quote_date: string;
            delivery_date: string | null;
            totalamount: number;
            paid_adv: number | null;
            adv_date: string | null;
            receipt_no: string | null;
            status: string;
        };
    }>;
    create(createQuotationDto: CreateQuotationDto): Promise<{
        success: boolean;
        message: string;
        data: {
            items: {
                id: number;
                description: string;
                unit_price: number;
                quantity: number;
                total: number;
                quotation_id: number;
            }[];
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
            project_type: {
                id: number;
                type_id: string;
                type_name: string;
            } | null;
        } & {
            id: number;
            customer_id: string;
            project_type_id: string | null;
            project_manager: string | null;
            project_name: string | null;
            quote_date: string;
            delivery_date: string | null;
            totalamount: number;
            paid_adv: number | null;
            adv_date: string | null;
            receipt_no: string | null;
            status: string;
        };
    }>;
    update(id: number, updateQuotationDto: UpdateQuotationDto): Promise<{
        success: boolean;
        message: string;
        data: {
            items: {
                id: number;
                description: string;
                unit_price: number;
                quantity: number;
                total: number;
                quotation_id: number;
            }[];
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
            project_type: {
                id: number;
                type_id: string;
                type_name: string;
            } | null;
        } & {
            id: number;
            customer_id: string;
            project_type_id: string | null;
            project_manager: string | null;
            project_name: string | null;
            quote_date: string;
            delivery_date: string | null;
            totalamount: number;
            paid_adv: number | null;
            adv_date: string | null;
            receipt_no: string | null;
            status: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

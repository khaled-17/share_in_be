import { QuotationsService } from './quotations.service';
import { CreateQuotationDto, UpdateQuotationDto } from './dto/quotation.dto';
export declare class QuotationsController {
    private quotationsService;
    constructor(quotationsService: QuotationsService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
            customer: {
                name: string;
            };
            items: {
                id: number;
                description: string;
                total: number;
                quotation_id: number;
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
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
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
            items: {
                id: number;
                description: string;
                total: number;
                quotation_id: number;
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
        };
    }>;
    create(createQuotationDto: CreateQuotationDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
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
            items: {
                id: number;
                description: string;
                total: number;
                quotation_id: number;
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
        };
    }>;
    update(id: number, updateQuotationDto: UpdateQuotationDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
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
            items: {
                id: number;
                description: string;
                total: number;
                quotation_id: number;
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
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

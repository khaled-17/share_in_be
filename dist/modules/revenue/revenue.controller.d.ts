import { RevenueService, RevenueFilters } from './revenue.service';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';
export declare class RevenueController {
    private revenueService;
    constructor(revenueService: RevenueService);
    findAll(query: RevenueFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            customer_id: string;
            amount: number;
            revtype_id: string;
            code: string | null;
            rev_date: string;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            customer_id: string;
            amount: number;
            revtype_id: string;
            code: string | null;
            rev_date: string;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
        };
    }>;
    create(createRevenueDto: CreateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            customer_id: string;
            amount: number;
            revtype_id: string;
            code: string | null;
            rev_date: string;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
        };
    }>;
    update(id: number, updateRevenueDto: UpdateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            customer_id: string;
            amount: number;
            revtype_id: string;
            code: string | null;
            rev_date: string;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

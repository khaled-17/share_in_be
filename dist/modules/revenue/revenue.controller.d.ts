import { RevenueService, RevenueFilters } from './revenue.service';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';
export declare class RevenueController {
    private revenueService;
    constructor(revenueService: RevenueService);
    findAll(query: RevenueFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                customer_id: string;
                company_email: string;
                contact_email: string;
            };
        } & {
            id: number;
            code: string | null;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            rev_date: string;
            customer_id: string;
            revtype_id: string;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                customer_id: string;
                company_email: string;
                contact_email: string;
            };
        } & {
            id: number;
            code: string | null;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            rev_date: string;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    create(createRevenueDto: CreateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                customer_id: string;
                company_email: string;
                contact_email: string;
            };
        } & {
            id: number;
            code: string | null;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            rev_date: string;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    update(id: number, updateRevenueDto: UpdateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                customer_id: string;
                company_email: string;
                contact_email: string;
            };
        } & {
            id: number;
            code: string | null;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            rev_date: string;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

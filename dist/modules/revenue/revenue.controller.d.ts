import { RevenueService } from './revenue.service';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';
export declare class RevenueController {
    private revenueService;
    constructor(revenueService: RevenueService);
    findAll(query: RevenueFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
            customer: {
                customer_id: string;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            code: string | null;
            rev_date: string;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            customer_id: string;
            revtype_id: string;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                customer_id: string;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            code: string | null;
            rev_date: string;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    create(createRevenueDto: CreateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                customer_id: string;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            code: string | null;
            rev_date: string;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    update(id: number, updateRevenueDto: UpdateRevenueDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                customer_id: string;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
            type: {
                id: number;
                revtype_id: string;
                revtype_name: string;
                paymethod: string;
            };
        } & {
            id: number;
            code: string | null;
            rev_date: string;
            amount: number;
            receipt_no: string | null;
            quote_id: number | null;
            notes: string | null;
            customer_id: string;
            revtype_id: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

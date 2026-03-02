import { PrismaService } from '../../prisma/prisma.service';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';
export declare class RevenueFilters {
    start_date?: string;
    end_date?: string;
    quotation_id?: number;
}
export declare class RevenueService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: RevenueFilters): Promise<({
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
    })[]>;
    findOne(id: number): Promise<{
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
    }>;
    create(data: CreateRevenueDto): Promise<{
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
    }>;
    update(id: number, data: UpdateRevenueDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        rev_date: string;
        customer_id: string;
        revtype_id: string;
    }>;
}

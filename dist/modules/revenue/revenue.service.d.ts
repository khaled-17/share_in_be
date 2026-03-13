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
    private generateRevenueCode;
    findAll(filters?: RevenueFilters): Promise<({
        customer: {
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
    })[]>;
    findOne(id: number): Promise<{
        customer: {
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
    }>;
    create(data: CreateRevenueDto): Promise<{
        customer: {
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
    }>;
    update(id: number, data: UpdateRevenueDto): Promise<{
        customer: {
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
    }>;
    remove(id: number): Promise<{
        id: number;
        customer_id: string;
        amount: number;
        revtype_id: string;
        code: string | null;
        rev_date: string;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
    }>;
}

import { PrismaService } from "../../prisma/prisma.service";
import { CreateRevenueDto, UpdateRevenueDto } from "./dto/revenue.dto";
export interface RevenueFilters {
    start_date?: string;
    end_date?: string;
    quotation_id?: number;
}
export declare class RevenueService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: RevenueFilters): Promise<({
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
    })[]>;
    findOne(id: number): Promise<{
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
    }>;
    create(data: CreateRevenueDto): Promise<{
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
    }>;
    update(id: number, data: UpdateRevenueDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        customer_id: string;
        revtype_id: string;
    }>;
}

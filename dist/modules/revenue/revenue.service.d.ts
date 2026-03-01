import { PrismaService } from '../../prisma/prisma.service';
export declare class RevenueService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: any): Promise<({
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
        type: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    } & {
        id: number;
        customer_id: string;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        revtype_id: string;
    })[]>;
    findOne(id: number): Promise<{
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
        type: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    } & {
        id: number;
        customer_id: string;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        revtype_id: string;
    }>;
    create(data: any): Promise<{
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
        type: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    } & {
        id: number;
        customer_id: string;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        revtype_id: string;
    }>;
    update(id: number, data: any): Promise<{
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
        type: {
            id: number;
            revtype_id: string;
            revtype_name: string;
            paymethod: string;
        };
    } & {
        id: number;
        customer_id: string;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        revtype_id: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        customer_id: string;
        code: string | null;
        rev_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        revtype_id: string;
    }>;
}

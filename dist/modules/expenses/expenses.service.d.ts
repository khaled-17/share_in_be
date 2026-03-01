import { PrismaService } from '../../prisma/prisma.service';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: any): Promise<({
        supplier: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
        type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    } & {
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exp_date: string;
        exptype_id: string;
    })[]>;
    findOne(id: number): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
        type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    } & {
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exp_date: string;
        exptype_id: string;
    }>;
    create(data: any): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
        type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    } & {
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exp_date: string;
        exptype_id: string;
    }>;
    update(id: number, data: any): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            speciality: string | null;
            supplier_id: string;
        };
        type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        };
    } & {
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exp_date: string;
        exptype_id: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string | null;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exp_date: string;
        exptype_id: string;
    }>;
}

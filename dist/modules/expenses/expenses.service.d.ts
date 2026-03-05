import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(where?: Prisma.ExpenseWhereInput): Promise<({
        supplier: {
            name: string;
            id: number;
            email: string | null;
            tenant_id: number;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            created_by: number | null;
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
        supplier_id: string;
        amount: number;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exptype_id: string;
        exp_date: string;
    })[]>;
    findOne(id: number): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            tenant_id: number;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            created_by: number | null;
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
        supplier_id: string;
        amount: number;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exptype_id: string;
        exp_date: string;
    }>;
    create(data: CreateExpenseDto): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            tenant_id: number;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            created_by: number | null;
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
        supplier_id: string;
        amount: number;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exptype_id: string;
        exp_date: string;
    }>;
    update(id: number, data: UpdateExpenseDto): Promise<{
        supplier: {
            name: string;
            id: number;
            email: string | null;
            tenant_id: number;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
            created_by: number | null;
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
        supplier_id: string;
        amount: number;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exptype_id: string;
        exp_date: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        supplier_id: string;
        amount: number;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exptype_id: string;
        exp_date: string;
    }>;
}

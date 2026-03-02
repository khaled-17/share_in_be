import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(where?: Prisma.ExpenseWhereInput): Promise<({
        type: {
            exptype_id: string;
            id: number;
            exptype_name: string;
            category: string | null;
        };
        supplier: {
            supplier_id: string;
            id: number;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        };
    } & {
        code: string | null;
        exp_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exptype_id: string;
        id: number;
    })[]>;
    findOne(id: number): Promise<{
        type: {
            exptype_id: string;
            id: number;
            exptype_name: string;
            category: string | null;
        };
        supplier: {
            supplier_id: string;
            id: number;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        };
    } & {
        code: string | null;
        exp_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exptype_id: string;
        id: number;
    }>;
    create(data: CreateExpenseDto): Promise<{
        type: {
            exptype_id: string;
            id: number;
            exptype_name: string;
            category: string | null;
        };
        supplier: {
            supplier_id: string;
            id: number;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        };
    } & {
        code: string | null;
        exp_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exptype_id: string;
        id: number;
    }>;
    update(id: number, data: UpdateExpenseDto): Promise<{
        type: {
            exptype_id: string;
            id: number;
            exptype_name: string;
            category: string | null;
        };
        supplier: {
            supplier_id: string;
            id: number;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        };
    } & {
        code: string | null;
        exp_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exptype_id: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        code: string | null;
        exp_date: string;
        amount: number;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        supplier_id: string;
        exptype_id: string;
        id: number;
    }>;
}

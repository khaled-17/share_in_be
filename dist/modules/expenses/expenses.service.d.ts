import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateExpenseCode;
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
            supplier_id: string;
            speciality: string | null;
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
        exptype_id: string;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
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
            supplier_id: string;
            speciality: string | null;
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
        exptype_id: string;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
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
            supplier_id: string;
            speciality: string | null;
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
        exptype_id: string;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
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
            supplier_id: string;
            speciality: string | null;
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
        exptype_id: string;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exp_date: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        supplier_id: string;
        amount: number;
        exptype_id: string;
        code: string | null;
        receipt_no: string | null;
        quote_id: number | null;
        notes: string | null;
        exp_date: string;
    }>;
}

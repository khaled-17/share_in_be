import { ExpensesService } from './expenses.service';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesController {
    private expensesService;
    constructor(expensesService: ExpensesService);
    findAll(query: Record<string, string>): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    create(createExpenseDto: CreateExpenseDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

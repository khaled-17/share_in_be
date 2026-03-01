import { ExpensesService } from './expenses.service';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesController {
    private expensesService;
    constructor(expensesService: ExpensesService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

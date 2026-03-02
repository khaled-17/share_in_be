import { ExpensesService } from './expenses.service';
import { CreateExpenseDto, UpdateExpenseDto } from './dto/expense.dto';
export declare class ExpensesController {
    private expensesService;
    constructor(expensesService: ExpensesService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    create(createExpenseDto: CreateExpenseDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

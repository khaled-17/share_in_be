export declare class CreateExpenseDto {
    code?: string;
    exp_date: string;
    amount: number;
    receipt_no?: string;
    quote_id?: number;
    notes?: string;
    supplier_id: string;
    exptype_id: string;
}
export declare class UpdateExpenseDto {
    code?: string;
    exp_date?: string;
    amount?: number;
    receipt_no?: string;
    quote_id?: number;
    notes?: string;
    supplier_id?: string;
    exptype_id?: string;
}

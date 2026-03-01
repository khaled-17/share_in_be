export declare class CreateExpenseDto {
    employee_id?: number;
    supplier_id?: number;
    partner_id?: number;
    date: string;
    amount: number;
    category: string;
    payment_method?: string;
    reference?: string;
}
export declare class UpdateExpenseDto {
    date?: string;
    amount?: number;
    category?: string;
    payment_method?: string;
    reference?: string;
}

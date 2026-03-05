export declare class CreateRevenueDto {
    code?: string;
    rev_date: string;
    amount: number;
    receipt_no?: string;
    quote_id?: number;
    notes?: string;
    customer_id: string;
    revtype_id: string;
}
export declare class UpdateRevenueDto {
    code?: string;
    rev_date?: string;
    amount?: number;
    receipt_no?: string;
    quote_id?: number;
    notes?: string;
    customer_id?: string;
    revtype_id?: string;
}

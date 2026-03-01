export declare class CreateRevenueDto {
    quotation_id: number;
    date: string;
    amount: number;
    source: string;
    payment_method?: string;
    reference?: string;
}
export declare class UpdateRevenueDto {
    date?: string;
    amount?: number;
    source?: string;
    payment_method?: string;
    reference?: string;
}

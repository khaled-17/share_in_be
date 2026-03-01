export declare class CreateQuotationItemDto {
    description: string;
    unit_price: number;
}
export declare class CreateQuotationDto {
    customer_id: number;
    project_type_id?: number;
    date: string;
    total_amount: number;
    items: CreateQuotationItemDto[];
}
export declare class UpdateQuotationDto {
    status?: string;
    paid_adv?: number;
    adv_date?: string;
    receipt_no?: string;
}

export declare class CreateQuotationItemDto {
    description: string;
    unit_price: number;
    quantity: number;
    total: number;
}
export declare class CreateQuotationDto {
    customer_id: string;
    project_type_id?: string;
    project_manager?: string;
    project_name?: string;
    quote_date: string;
    delivery_date?: string;
    totalamount: number;
    paid_adv?: number;
    adv_date?: string;
    receipt_no?: string;
    status?: string;
    items: CreateQuotationItemDto[];
}
export declare class UpdateQuotationDto {
    customer_id?: string;
    project_type_id?: string;
    project_manager?: string;
    project_name?: string;
    quote_date?: string;
    delivery_date?: string;
    totalamount?: number;
    paid_adv?: number;
    adv_date?: string;
    receipt_no?: string;
    status?: string;
    items?: CreateQuotationItemDto[];
}

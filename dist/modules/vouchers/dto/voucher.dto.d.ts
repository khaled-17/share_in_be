export declare enum VoucherSourceType {
    PARTNER = "\u0634\u0631\u064A\u0643",
    OTHERS = "\u0623\u062E\u0631\u0649"
}
export declare class CreateReceiptVoucherDto {
    voucher_number: string;
    voucher_date: string;
    amount: number;
    partner_id?: number;
    source_type: VoucherSourceType;
    name?: string;
    payment_method: string;
    description?: string;
    check_id?: number;
}
export declare class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {
}

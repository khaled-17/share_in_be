export declare enum VoucherSourceType {
    PARTNER_CAPITAL = "partner_capital",
    OTHERS = "others"
}
export declare class CheckDetailDto {
    check_number?: string;
    bank_name?: string;
    check_date?: string;
    status?: string;
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
    received_from: string;
    check?: CheckDetailDto;
    check_id?: number;
}
export declare class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {
    beneficiary_type?: string;
    supplier_id?: string;
    employee_id?: string;
    expense_type_id?: string;
    paid_to: string;
}

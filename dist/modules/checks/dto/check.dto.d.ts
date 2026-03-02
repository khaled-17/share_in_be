export declare enum CheckStatus {
    PENDING = "pending",
    CLEARED = "cleared",
    BOUNCED = "bounced",
    CANCELLED = "cancelled"
}
export declare class CreateCheckDto {
    check_number: string;
    bank_name: string;
    check_date: string;
    amount: number;
    status?: CheckStatus;
    beneficiary_name: string;
    notes?: string;
}
export declare class UpdateCheckDto {
    status?: CheckStatus;
    bank_name?: string;
    check_date?: string;
    amount?: number;
    notes?: string;
    beneficiary_name?: string;
}

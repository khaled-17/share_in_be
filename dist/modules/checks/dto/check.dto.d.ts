export declare enum CheckStatus {
    UNDELIVERED = "\u063A\u064A\u0631 \u0645\u0633\u062A\u0644\u0645",
    DELIVERED = "\u0645\u0633\u062A\u0644\u0645",
    COLLECTED = "\u0645\u062D\u0635\u0644",
    REJECTED = "\u0645\u0631\u0641\u0648\u0636"
}
export declare class CreateCheckDto {
    check_no: string;
    bank_name: string;
    due_date: string;
    amount: number;
    status?: CheckStatus;
}
export declare class UpdateCheckDto {
    status?: CheckStatus;
    bank_name?: string;
    due_date?: string;
    amount?: number;
}

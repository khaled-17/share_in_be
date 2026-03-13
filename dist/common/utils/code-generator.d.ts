export declare const CODE_PREFIX: {
    readonly customer: "CU";
    readonly supplier: "SU";
    readonly employee: "EM";
    readonly partner: "PA";
    readonly revenue: "RE";
    readonly expense: "EX";
    readonly workOrder: "WO";
    readonly receiptVoucher: "RV";
    readonly paymentVoucher: "PV";
    readonly projectType: "PT";
    readonly expenseType: "ET";
    readonly revenueType: "RT";
    readonly country: "CO";
};
export declare function getNextCode(prefix: string, latestCode?: string | null, minDigits?: number): string;
export declare function createWithGeneratedCode<T>({ generateCode, createRecord, uniqueField, entityLabel, }: {
    generateCode: () => Promise<string>;
    createRecord: (code: string) => Promise<T>;
    uniqueField: string;
    entityLabel: string;
}): Promise<T>;

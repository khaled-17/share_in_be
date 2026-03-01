import { PrismaService } from '../../prisma/prisma.service';
export declare class ChecksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters: any): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
    findOne(id: number): Promise<{
        receipt_voucher: {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            amount: number;
            voucher_number: string;
            voucher_date: string;
            source_type: string;
            payment_method: string;
            check_id: number | null;
            received_from: string;
            created_by: string | null;
            partner_id: number | null;
        } | null;
        payment_voucher: {
            id: number;
            description: string | null;
            created_at: Date;
            amount: number;
            voucher_number: string;
            voucher_date: string;
            payment_method: string;
            check_id: number | null;
            created_by: string | null;
            partner_id: number | null;
            supplier_id: string | null;
            beneficiary_type: string;
            paid_to: string;
            employee_id: string | null;
            expense_type_id: string | null;
        } | null;
    } & {
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    create(data: any): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    updateStatus(id: number, data: {
        status: string;
        notes?: string;
    }): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    getStats(filters: any): Promise<{
        total_count: number;
        total_amount: number;
        by_status: {
            pending: number;
            cleared: number;
            bounced: number;
            cancelled: number;
        };
        by_type: {
            receipt: number;
            payment: number;
        };
    }>;
    getDueSoon(): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        notes: string | null;
        status: string;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
}

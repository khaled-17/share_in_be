import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
export interface CheckFilters {
    status?: string;
    start_date?: string;
    end_date?: string;
}
export declare class ChecksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters: CheckFilters): Promise<{
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
    findOne(id: number): Promise<{
        receipt_voucher: {
            id: number;
            amount: number;
            created_at: Date;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            source_type: string;
            customer_id: string | null;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
            created_by: string | null;
        } | null;
        payment_voucher: {
            id: number;
            amount: number;
            supplier_id: string | null;
            created_at: Date;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            created_by: string | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        } | null;
    } & {
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    create(data: CreateCheckDto): Promise<{
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    update(id: number, data: UpdateCheckDto): Promise<{
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    updateStatus(id: number, data: {
        status: string;
        notes?: string;
    }): Promise<{
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    getStats(filters: CheckFilters): Promise<{
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
        amount: number;
        notes: string | null;
        created_at: Date;
        check_number: string;
        bank_name: string;
        check_date: string;
        beneficiary_name: string;
        status: string;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
}

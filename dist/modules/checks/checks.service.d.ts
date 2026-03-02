import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
interface CheckFilters {
    status?: string;
    start_date?: string;
    end_date?: string;
}
export declare class ChecksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters: CheckFilters): Promise<{
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
    findOne(id: number): Promise<{
        receipt_voucher: {
            description: string | null;
            amount: number;
            id: number;
            created_at: Date;
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
            description: string | null;
            amount: number;
            id: number;
            created_at: Date;
            voucher_number: string;
            voucher_date: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            created_by: string | null;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        } | null;
    } & {
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    create(data: CreateCheckDto): Promise<{
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    update(id: number, data: UpdateCheckDto): Promise<{
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    updateStatus(id: number, data: {
        status: string;
        notes?: string;
    }): Promise<{
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }>;
    remove(id: number): Promise<{
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
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
        check_number: string;
        bank_name: string;
        check_date: string;
        amount: number;
        status: string;
        beneficiary_name: string;
        notes: string | null;
        id: number;
        created_at: Date;
        receipt_voucher_id: number | null;
        payment_voucher_id: number | null;
    }[]>;
}
export {};

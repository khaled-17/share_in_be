import { PrismaService } from '../../prisma/prisma.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
export declare class CheckFilters {
    status?: string;
    start_date?: string;
    end_date?: string;
}
export declare class ChecksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters: CheckFilters): Promise<({
        receipt_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        }) | null;
        payment_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            supplier: {
                name: string;
                id: number;
                email: string | null;
                tenant_id: number;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                created_at: Date;
                created_by: number | null;
                speciality: string | null;
                supplier_id: string;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                position: string | null;
                emp_code: string;
                salary: number | null;
                start_date: string | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            created_at: Date;
            created_by: string | null;
            supplier_id: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            beneficiary_type: string;
            payment_method: string;
            check_id: number | null;
            paid_to: string;
            partner_id: number | null;
            expense_type_id: string | null;
            employee_id: string | null;
        }) | null;
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
    })[]>;
    findOne(id: number): Promise<{
        receipt_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        }) | null;
        payment_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            supplier: {
                name: string;
                id: number;
                email: string | null;
                tenant_id: number;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                created_at: Date;
                created_by: number | null;
                speciality: string | null;
                supplier_id: string;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                position: string | null;
                emp_code: string;
                salary: number | null;
                start_date: string | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            created_at: Date;
            created_by: string | null;
            supplier_id: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            beneficiary_type: string;
            payment_method: string;
            check_id: number | null;
            paid_to: string;
            partner_id: number | null;
            expense_type_id: string | null;
            employee_id: string | null;
        }) | null;
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
    create(data: CreateCheckDto): Promise<{
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
    update(id: number, data: UpdateCheckDto): Promise<{
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
        receipt_voucher: {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        } | null;
        payment_voucher: {
            id: number;
            description: string | null;
            created_at: Date;
            created_by: string | null;
            supplier_id: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            beneficiary_type: string;
            payment_method: string;
            check_id: number | null;
            paid_to: string;
            partner_id: number | null;
            expense_type_id: string | null;
            employee_id: string | null;
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
    getDueSoon(): Promise<({
        receipt_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            customer: {
                name: string;
                tenant_id: number;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        }) | null;
        payment_voucher: ({
            partner: {
                name: string;
                id: number;
                email: string | null;
                phone: string | null;
                created_at: Date;
                partner_code: string;
                initial_capital: number;
                current_capital: number;
            } | null;
            supplier: {
                name: string;
                id: number;
                email: string | null;
                tenant_id: number;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                created_at: Date;
                created_by: number | null;
                speciality: string | null;
                supplier_id: string;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                position: string | null;
                emp_code: string;
                salary: number | null;
                start_date: string | null;
            } | null;
        } & {
            id: number;
            description: string | null;
            created_at: Date;
            created_by: string | null;
            supplier_id: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            beneficiary_type: string;
            payment_method: string;
            check_id: number | null;
            paid_to: string;
            partner_id: number | null;
            expense_type_id: string | null;
            employee_id: string | null;
        }) | null;
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
    })[]>;
}

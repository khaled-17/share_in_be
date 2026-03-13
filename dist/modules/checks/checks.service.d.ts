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
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
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
            source_type: string;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
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
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                emp_code: string;
                position: string | null;
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
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
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
            source_type: string;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
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
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                emp_code: string;
                position: string | null;
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
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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
            source_type: string;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
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
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
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
            source_type: string;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
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
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                name: string;
                id: number;
                phone: string | null;
                emp_code: string;
                position: string | null;
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
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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

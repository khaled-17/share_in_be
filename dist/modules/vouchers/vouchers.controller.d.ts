import { VouchersService, ReceiptFilters, PaymentFilters } from './vouchers.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
export declare class ReceiptVouchersController {
    private vouchersService;
    constructor(vouchersService: VouchersService);
    findAll(query: ReceiptFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                tenant_id: number;
                created_by: number | null;
            } | null;
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
        })[];
    }>;
    getStats(query: ReceiptFilters): Promise<{
        success: boolean;
        data: {
            total_amount: number;
            total_count: number;
            by_source_type: Record<string, number>;
            by_payment_method: Record<string, number>;
            pending_checks: number;
            by_beneficiary_type?: undefined;
        } | {
            total_amount: number;
            total_count: number;
            by_beneficiary_type: Record<string, number>;
            by_payment_method: Record<string, number>;
            pending_checks: number;
            by_source_type?: undefined;
        };
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                tenant_id: number;
                created_by: number | null;
            } | null;
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
        };
    }>;
    create(data: CreateReceiptVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                tenant_id: number;
                created_by: number | null;
            } | null;
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
        };
    }>;
    update(id: number, data: Partial<CreateReceiptVoucherDto>): Promise<{
        success: boolean;
        message: string;
        data: {
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
export declare class PaymentVouchersController {
    private vouchersService;
    constructor(vouchersService: VouchersService);
    findAll(query: PaymentFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
            supplier: {
                id: number;
                created_at: Date;
                name: string;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                tenant_id: number;
                created_by: number | null;
                email: string | null;
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                id: number;
                name: string;
                phone: string | null;
                emp_code: string;
                position: string | null;
                salary: number | null;
                start_date: string | null;
            } | null;
            expense_type: {
                id: number;
                exptype_id: string;
                exptype_name: string;
                category: string | null;
            } | null;
        } & {
            id: number;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        })[];
    }>;
    getStats(query: PaymentFilters): Promise<{
        success: boolean;
        data: {
            total_amount: number;
            total_count: number;
            by_source_type: Record<string, number>;
            by_payment_method: Record<string, number>;
            pending_checks: number;
            by_beneficiary_type?: undefined;
        } | {
            total_amount: number;
            total_count: number;
            by_beneficiary_type: Record<string, number>;
            by_payment_method: Record<string, number>;
            pending_checks: number;
            by_source_type?: undefined;
        };
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
            supplier: {
                id: number;
                created_at: Date;
                name: string;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                tenant_id: number;
                created_by: number | null;
                email: string | null;
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                id: number;
                name: string;
                phone: string | null;
                emp_code: string;
                position: string | null;
                salary: number | null;
                start_date: string | null;
            } | null;
            expense_type: {
                id: number;
                exptype_id: string;
                exptype_name: string;
                category: string | null;
            } | null;
        } & {
            id: number;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        };
    }>;
    create(data: CreatePaymentVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
            partner: {
                id: number;
                created_at: Date;
                name: string;
                phone: string | null;
                partner_code: string;
                email: string | null;
                initial_capital: number;
                current_capital: number;
            } | null;
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
            supplier: {
                id: number;
                created_at: Date;
                name: string;
                contact_person: string | null;
                phone: string | null;
                secondary_phone: string | null;
                address: string | null;
                tenant_id: number;
                created_by: number | null;
                email: string | null;
                supplier_id: string;
                speciality: string | null;
            } | null;
            employee: {
                id: number;
                name: string;
                phone: string | null;
                emp_code: string;
                position: string | null;
                salary: number | null;
                start_date: string | null;
            } | null;
            expense_type: {
                id: number;
                exptype_id: string;
                exptype_name: string;
                category: string | null;
            } | null;
        } & {
            id: number;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        };
    }>;
    update(id: number, data: Partial<CreatePaymentVoucherDto>): Promise<{
        success: boolean;
        message: string;
        data: {
            check: {
                id: number;
                created_at: Date;
                status: string;
                amount: number;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            created_at: Date;
            created_by: string | null;
            description: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

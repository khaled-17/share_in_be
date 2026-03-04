import { PrismaService } from '../../prisma/prisma.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
export declare class ReceiptFilters {
    start_date?: string;
    end_date?: string;
    source_type?: string;
    payment_method?: string;
}
export declare class PaymentFilters {
    start_date?: string;
    end_date?: string;
    beneficiary_type?: string;
    payment_method?: string;
}
export declare class VouchersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllReceipt(filters: ReceiptFilters): Promise<({
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        customer: {
            name: string;
            created_at: Date;
            tenant_id: number;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_by: number | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
        customer_id: string | null;
        created_by: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        payment_method: string;
        check_id: number | null;
        partner_id: number | null;
        source_type: string;
        received_from: string;
    })[]>;
    findOneReceipt(id: number): Promise<{
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        customer: {
            name: string;
            created_at: Date;
            tenant_id: number;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_by: number | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
        customer_id: string | null;
        created_by: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        payment_method: string;
        check_id: number | null;
        partner_id: number | null;
        source_type: string;
        received_from: string;
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        customer: {
            name: string;
            created_at: Date;
            tenant_id: number;
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_by: number | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
        customer_id: string | null;
        created_by: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        payment_method: string;
        check_id: number | null;
        partner_id: number | null;
        source_type: string;
        received_from: string;
    }>;
    updateReceipt(id: number, data: Partial<CreateReceiptVoucherDto>): Promise<{
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
        customer_id: string | null;
        created_by: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        payment_method: string;
        check_id: number | null;
        partner_id: number | null;
        source_type: string;
        received_from: string;
    }>;
    removeReceipt(id: number): Promise<{
        id: number;
        created_at: Date;
        description: string | null;
        customer_id: string | null;
        created_by: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        payment_method: string;
        check_id: number | null;
        partner_id: number | null;
        source_type: string;
        received_from: string;
    }>;
    findAllPayment(filters: PaymentFilters): Promise<({
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        supplier: {
            id: number;
            name: string;
            created_at: Date;
            tenant_id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_by: number | null;
            speciality: string | null;
            supplier_id: string;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            position: string | null;
            emp_code: string;
            salary: number | null;
            start_date: string | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
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
    })[]>;
    findOnePayment(id: number): Promise<{
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        supplier: {
            id: number;
            name: string;
            created_at: Date;
            tenant_id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_by: number | null;
            speciality: string | null;
            supplier_id: string;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            position: string | null;
            emp_code: string;
            salary: number | null;
            start_date: string | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
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
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        partner: {
            id: number;
            name: string;
            created_at: Date;
            email: string | null;
            phone: string | null;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        } | null;
        supplier: {
            id: number;
            name: string;
            created_at: Date;
            tenant_id: number;
            email: string | null;
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_by: number | null;
            speciality: string | null;
            supplier_id: string;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            position: string | null;
            emp_code: string;
            salary: number | null;
            start_date: string | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
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
    }>;
    updatePayment(id: number, data: Partial<CreatePaymentVoucherDto>): Promise<{
        check: {
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
        } | null;
    } & {
        id: number;
        created_at: Date;
        description: string | null;
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
    }>;
    removePayment(id: number): Promise<{
        id: number;
        created_at: Date;
        description: string | null;
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
    }>;
    getStats(type: 'receipt' | 'payment', filters: ReceiptFilters & PaymentFilters): Promise<{
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
    }>;
}

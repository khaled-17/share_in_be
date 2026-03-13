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
    private generateVoucherNumber;
    findAllReceipt(filters: ReceiptFilters): Promise<({
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
    })[]>;
    findOneReceipt(id: number): Promise<{
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
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
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
    }>;
    removeReceipt(id: number): Promise<{
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
    }>;
    findAllPayment(filters: PaymentFilters): Promise<({
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
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
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
    })[]>;
    findOnePayment(id: number): Promise<{
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
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
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
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
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
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
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
    }>;
    removePayment(id: number): Promise<{
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

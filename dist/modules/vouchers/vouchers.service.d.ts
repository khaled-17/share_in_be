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
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        customer: {
            name: string;
            contact_person: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
            customer_id: string;
            company_email: string;
            contact_email: string;
        } | null;
    } & {
        id: number;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        created_by: string | null;
        partner_id: number | null;
        customer_id: string | null;
        source_type: string;
        received_from: string;
    })[]>;
    findOneReceipt(id: number): Promise<{
        partner: {
            id: number;
            name: string;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        customer: {
            name: string;
            contact_person: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
            customer_id: string;
            company_email: string;
            contact_email: string;
        } | null;
    } & {
        id: number;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        created_by: string | null;
        partner_id: number | null;
        customer_id: string | null;
        source_type: string;
        received_from: string;
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        partner: {
            id: number;
            name: string;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        customer: {
            name: string;
            contact_person: string;
            phone: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
            customer_id: string;
            company_email: string;
            contact_email: string;
        } | null;
    } & {
        id: number;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        created_by: string | null;
        partner_id: number | null;
        customer_id: string | null;
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
        amount: number;
        voucher_number: string;
        voucher_date: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        created_by: string | null;
        partner_id: number | null;
        customer_id: string | null;
        source_type: string;
        received_from: string;
    }>;
    removeReceipt(id: number): Promise<{
        id: number;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        created_by: string | null;
        partner_id: number | null;
        customer_id: string | null;
        source_type: string;
        received_from: string;
    }>;
    findAllPayment(filters: PaymentFilters): Promise<({
        supplier: {
            id: number;
            supplier_id: string;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            start_date: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        partner: {
            id: number;
            name: string;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        supplier_id: string | null;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        beneficiary_type: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        paid_to: string;
        created_by: string | null;
        employee_id: string | null;
        partner_id: number | null;
        expense_type_id: string | null;
    })[]>;
    findOnePayment(id: number): Promise<{
        supplier: {
            id: number;
            supplier_id: string;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            start_date: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        partner: {
            id: number;
            name: string;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        supplier_id: string | null;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        beneficiary_type: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        paid_to: string;
        created_by: string | null;
        employee_id: string | null;
        partner_id: number | null;
        expense_type_id: string | null;
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        supplier: {
            id: number;
            supplier_id: string;
            name: string;
            contact_person: string | null;
            email: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
            created_at: Date;
        } | null;
        employee: {
            id: number;
            name: string;
            phone: string | null;
            start_date: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        partner: {
            id: number;
            name: string;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
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
        supplier_id: string | null;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        beneficiary_type: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        paid_to: string;
        created_by: string | null;
        employee_id: string | null;
        partner_id: number | null;
        expense_type_id: string | null;
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
        supplier_id: string | null;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        beneficiary_type: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        paid_to: string;
        created_by: string | null;
        employee_id: string | null;
        partner_id: number | null;
        expense_type_id: string | null;
    }>;
    removePayment(id: number): Promise<{
        id: number;
        supplier_id: string | null;
        created_at: Date;
        amount: number;
        voucher_number: string;
        voucher_date: string;
        beneficiary_type: string;
        payment_method: string;
        check_id: number | null;
        description: string | null;
        paid_to: string;
        created_by: string | null;
        employee_id: string | null;
        partner_id: number | null;
        expense_type_id: string | null;
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

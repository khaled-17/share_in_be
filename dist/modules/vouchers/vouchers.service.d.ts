import { PrismaService } from '../../prisma/prisma.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
interface ReceiptFilters {
    start_date?: string;
    end_date?: string;
    source_type?: string;
    payment_method?: string;
}
interface PaymentFilters {
    start_date?: string;
    end_date?: string;
    beneficiary_type?: string;
    payment_method?: string;
}
export declare class VouchersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllReceipt(filters: ReceiptFilters): Promise<({
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            phone: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
        } | null;
        partner: {
            name: string;
            id: number;
            created_at: Date;
            partner_code: string;
            phone: string | null;
            email: string | null;
            initial_capital: number;
            current_capital: number;
        } | null;
    } & {
        description: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        partner_id: number | null;
        source_type: string;
        payment_method: string;
        received_from: string;
        check_id: number | null;
        id: number;
        customer_id: string | null;
        created_by: string | null;
        created_at: Date;
    })[]>;
    findOneReceipt(id: number): Promise<{
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            phone: string;
            contact_person: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
        } | null;
        partner: {
            name: string;
            id: number;
            created_at: Date;
            partner_code: string;
            phone: string | null;
            email: string | null;
            initial_capital: number;
            current_capital: number;
        } | null;
    } & {
        description: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        partner_id: number | null;
        source_type: string;
        payment_method: string;
        received_from: string;
        check_id: number | null;
        id: number;
        customer_id: string | null;
        created_by: string | null;
        created_at: Date;
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        description: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        partner_id: number | null;
        source_type: string;
        payment_method: string;
        received_from: string;
        check_id: number | null;
        id: number;
        customer_id: string | null;
        created_by: string | null;
        created_at: Date;
    }>;
    updateReceipt(id: number, data: Partial<CreateReceiptVoucherDto>): Promise<{
        description: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        partner_id: number | null;
        source_type: string;
        payment_method: string;
        received_from: string;
        check_id: number | null;
        id: number;
        customer_id: string | null;
        created_by: string | null;
        created_at: Date;
    }>;
    removeReceipt(id: number): Promise<{
        description: string | null;
        voucher_number: string;
        voucher_date: string;
        amount: number;
        partner_id: number | null;
        source_type: string;
        payment_method: string;
        received_from: string;
        check_id: number | null;
        id: number;
        customer_id: string | null;
        created_by: string | null;
        created_at: Date;
    }>;
    findAllPayment(filters: PaymentFilters): Promise<({
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
        supplier: {
            name: string;
            supplier_id: string;
            id: number;
            created_at: Date;
            phone: string | null;
            email: string | null;
            contact_person: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
        } | null;
        partner: {
            name: string;
            id: number;
            created_at: Date;
            partner_code: string;
            phone: string | null;
            email: string | null;
            initial_capital: number;
            current_capital: number;
        } | null;
        employee: {
            name: string;
            start_date: string | null;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
    } & {
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
        id: number;
        created_by: string | null;
        created_at: Date;
    })[]>;
    findOnePayment(id: number): Promise<{
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
        supplier: {
            name: string;
            supplier_id: string;
            id: number;
            created_at: Date;
            phone: string | null;
            email: string | null;
            contact_person: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
        } | null;
        partner: {
            name: string;
            id: number;
            created_at: Date;
            partner_code: string;
            phone: string | null;
            email: string | null;
            initial_capital: number;
            current_capital: number;
        } | null;
        employee: {
            name: string;
            start_date: string | null;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
    } & {
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
        id: number;
        created_by: string | null;
        created_at: Date;
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
        supplier: {
            name: string;
            supplier_id: string;
            id: number;
            created_at: Date;
            phone: string | null;
            email: string | null;
            contact_person: string | null;
            secondary_phone: string | null;
            address: string | null;
            speciality: string | null;
        } | null;
        partner: {
            name: string;
            id: number;
            created_at: Date;
            partner_code: string;
            phone: string | null;
            email: string | null;
            initial_capital: number;
            current_capital: number;
        } | null;
        employee: {
            name: string;
            start_date: string | null;
            id: number;
            phone: string | null;
            emp_code: string;
            position: string | null;
            salary: number | null;
        } | null;
        expense_type: {
            id: number;
            exptype_id: string;
            exptype_name: string;
            category: string | null;
        } | null;
    } & {
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
        id: number;
        created_by: string | null;
        created_at: Date;
    }>;
    updatePayment(id: number, data: Partial<CreatePaymentVoucherDto>): Promise<{
        check: {
            check_number: string;
            bank_name: string;
            check_date: string;
            status: string;
            amount: number;
            id: number;
            created_at: Date;
            beneficiary_name: string;
            notes: string | null;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        } | null;
    } & {
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
        id: number;
        created_by: string | null;
        created_at: Date;
    }>;
    removePayment(id: number): Promise<{
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
        id: number;
        created_by: string | null;
        created_at: Date;
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
export {};

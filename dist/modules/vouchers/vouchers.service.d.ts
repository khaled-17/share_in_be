import { PrismaService } from '../../prisma/prisma.service';
export declare class VouchersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllReceipt(filters: any): Promise<({
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
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
        amount: number;
        voucher_number: string;
        voucher_date: string;
        source_type: string;
        payment_method: string;
        check_id: number | null;
        received_from: string;
        created_by: string | null;
        partner_id: number | null;
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
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
        amount: number;
        voucher_number: string;
        voucher_date: string;
        source_type: string;
        payment_method: string;
        check_id: number | null;
        received_from: string;
        created_by: string | null;
        partner_id: number | null;
    }>;
    createReceipt(data: any): Promise<{
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
            secondary_phone: string;
            address: string;
            created_at: Date;
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
        amount: number;
        voucher_number: string;
        voucher_date: string;
        source_type: string;
        payment_method: string;
        check_id: number | null;
        received_from: string;
        created_by: string | null;
        partner_id: number | null;
    }>;
    updateReceipt(id: number, data: any): Promise<{
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
        amount: number;
        voucher_number: string;
        voucher_date: string;
        source_type: string;
        payment_method: string;
        check_id: number | null;
        received_from: string;
        created_by: string | null;
        partner_id: number | null;
    }>;
    removeReceipt(id: number): Promise<{
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
    }>;
    findAllPayment(filters: any): Promise<({
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
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
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
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
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
    }>;
    createPayment(data: any): Promise<{
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
            contact_person: string | null;
            phone: string | null;
            secondary_phone: string | null;
            address: string | null;
            created_at: Date;
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
    }>;
    updatePayment(id: number, data: any): Promise<{
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
    }>;
    removePayment(id: number): Promise<{
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
    }>;
    getStats(type: 'receipt' | 'payment', filters: any): Promise<{
        total_amount: number;
        total_count: number;
        by_source_type: any;
        by_payment_method: any;
        pending_checks: number;
        by_beneficiary_type?: undefined;
    } | {
        total_amount: number;
        total_count: number;
        by_beneficiary_type: any;
        by_payment_method: any;
        pending_checks: number;
        by_source_type?: undefined;
    }>;
}

import { VouchersService, ReceiptFilters, PaymentFilters } from './vouchers.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
export declare class VouchersController {
    private vouchersService;
    constructor(vouchersService: VouchersService);
    findAllReceipt(query: ReceiptFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    findAllPayment(query: PaymentFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    removeReceipt(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    removePayment(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

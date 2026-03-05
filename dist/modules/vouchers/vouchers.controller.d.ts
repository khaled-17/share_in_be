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
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        })[];
    }>;
    findAllPayment(query: PaymentFilters): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        };
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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

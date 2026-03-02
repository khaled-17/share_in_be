import { VouchersService } from './vouchers.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
export declare class VouchersController {
    private vouchersService;
    constructor(vouchersService: VouchersService);
    findAllReceipt(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    findAllPayment(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
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
        })[];
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
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

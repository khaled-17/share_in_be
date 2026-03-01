import { VouchersService } from './vouchers.service';
import { CreateReceiptVoucherDto, CreatePaymentVoucherDto } from './dto/voucher.dto';
export declare class VouchersController {
    private vouchersService;
    constructor(vouchersService: VouchersService);
    findAllReceipt(query: any): Promise<{
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
                amount: number;
                created_at: Date;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                status: string;
                notes: string | null;
                receipt_voucher_id: number | null;
                payment_voucher_id: number | null;
            } | null;
        } & {
            id: number;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            customer_id: string | null;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            description: string | null;
            received_from: string;
            created_by: string | null;
            created_at: Date;
        })[];
    }>;
    findAllPayment(query: any): Promise<{
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
                amount: number;
                created_at: Date;
                check_number: string;
                bank_name: string;
                check_date: string;
                beneficiary_name: string;
                status: string;
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
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            description: string | null;
            created_by: string | null;
            created_at: Date;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
        })[];
    }>;
    createReceipt(data: CreateReceiptVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            source_type: string;
            customer_id: string | null;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            description: string | null;
            received_from: string;
            created_by: string | null;
            created_at: Date;
        };
    }>;
    createPayment(data: CreatePaymentVoucherDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            description: string | null;
            created_by: string | null;
            created_at: Date;
            beneficiary_type: string;
            supplier_id: string | null;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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

import { ChecksService, CheckFilters } from './checks.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
export declare class ChecksController {
    private checksService;
    constructor(checksService: ChecksService);
    findAll(query: CheckFilters): Promise<{
        success: boolean;
        message: string;
        data: {
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
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            receipt_voucher: {
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
            } | null;
            payment_voucher: {
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
            } | null;
        } & {
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
        };
    }>;
    create(createCheckDto: CreateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    update(id: number, updateCheckDto: UpdateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
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
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

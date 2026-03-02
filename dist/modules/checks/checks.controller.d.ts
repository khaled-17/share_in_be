import { ChecksService } from './checks.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
export declare class ChecksController {
    private checksService;
    constructor(checksService: ChecksService);
    findAll(query: CheckFilters): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            check_number: string;
            bank_name: string;
            check_date: string;
            beneficiary_name: string;
            amount: number;
            status: string;
            notes: string | null;
            created_at: Date;
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
                amount: number;
                created_at: Date;
                voucher_number: string;
                voucher_date: string;
                source_type: string;
                customer_id: string | null;
                partner_id: number | null;
                payment_method: string;
                check_id: number | null;
                description: string | null;
                received_from: string;
                created_by: string | null;
            } | null;
            payment_voucher: {
                id: number;
                amount: number;
                created_at: Date;
                voucher_number: string;
                voucher_date: string;
                partner_id: number | null;
                payment_method: string;
                check_id: number | null;
                description: string | null;
                created_by: string | null;
                beneficiary_type: string;
                supplier_id: string | null;
                employee_id: string | null;
                expense_type_id: string | null;
                paid_to: string;
            } | null;
        } & {
            id: number;
            check_number: string;
            bank_name: string;
            check_date: string;
            beneficiary_name: string;
            amount: number;
            status: string;
            notes: string | null;
            created_at: Date;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        };
    }>;
    create(createCheckDto: CreateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            check_number: string;
            bank_name: string;
            check_date: string;
            beneficiary_name: string;
            amount: number;
            status: string;
            notes: string | null;
            created_at: Date;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        };
    }>;
    update(id: number, updateCheckDto: UpdateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            check_number: string;
            bank_name: string;
            check_date: string;
            beneficiary_name: string;
            amount: number;
            status: string;
            notes: string | null;
            created_at: Date;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

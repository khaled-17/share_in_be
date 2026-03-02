import { ChecksService } from './checks.service';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';
export declare class ChecksController {
    private checksService;
    constructor(checksService: ChecksService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: {
            check_number: string;
            bank_name: string;
            check_date: string;
            amount: number;
            status: string;
            beneficiary_name: string;
            notes: string | null;
            id: number;
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
                description: string | null;
                amount: number;
                id: number;
                created_at: Date;
                voucher_number: string;
                voucher_date: string;
                source_type: string;
                customer_id: string | null;
                partner_id: number | null;
                payment_method: string;
                check_id: number | null;
                received_from: string;
                created_by: string | null;
            } | null;
            payment_voucher: {
                description: string | null;
                amount: number;
                id: number;
                created_at: Date;
                voucher_number: string;
                voucher_date: string;
                partner_id: number | null;
                payment_method: string;
                check_id: number | null;
                created_by: string | null;
                beneficiary_type: string;
                supplier_id: string | null;
                employee_id: string | null;
                expense_type_id: string | null;
                paid_to: string;
            } | null;
        } & {
            check_number: string;
            bank_name: string;
            check_date: string;
            amount: number;
            status: string;
            beneficiary_name: string;
            notes: string | null;
            id: number;
            created_at: Date;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        };
    }>;
    create(createCheckDto: CreateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
            check_number: string;
            bank_name: string;
            check_date: string;
            amount: number;
            status: string;
            beneficiary_name: string;
            notes: string | null;
            id: number;
            created_at: Date;
            receipt_voucher_id: number | null;
            payment_voucher_id: number | null;
        };
    }>;
    update(id: number, updateCheckDto: UpdateCheckDto): Promise<{
        success: boolean;
        message: string;
        data: {
            check_number: string;
            bank_name: string;
            check_date: string;
            amount: number;
            status: string;
            beneficiary_name: string;
            notes: string | null;
            id: number;
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

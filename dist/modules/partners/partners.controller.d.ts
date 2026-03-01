import { PartnersService } from './partners.service';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/partner.dto';
export declare class PartnersController {
    private partnersService;
    constructor(partnersService: PartnersService);
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        }[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            receipt_vouchers: {
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
            }[];
            payment_vouchers: {
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
            }[];
        } & {
            name: string;
            id: number;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        };
    }>;
    getSummary(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            partner_code: string;
            name: string;
            initial_capital: number;
            current_capital: number;
            total_capital_increase: number;
            total_withdrawals: number;
            net_capital: number;
        };
    }>;
    create(createPartnerDto: CreatePartnerDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        };
    }>;
    update(id: number, updatePartnerDto: UpdatePartnerDto): Promise<{
        success: boolean;
        message: string;
        data: {
            name: string;
            id: number;
            email: string | null;
            phone: string | null;
            created_at: Date;
            partner_code: string;
            initial_capital: number;
            current_capital: number;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}

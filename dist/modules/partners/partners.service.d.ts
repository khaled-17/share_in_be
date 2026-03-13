import { PrismaService } from '../../prisma/prisma.service';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/partner.dto';
export declare class PartnersService {
    private prisma;
    constructor(prisma: PrismaService);
    private generatePartnerCode;
    findAll(): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }[]>;
    findOne(id: number): Promise<{
        receipt_vouchers: {
            id: number;
            description: string | null;
            customer_id: string | null;
            created_at: Date;
            created_by: string | null;
            source_type: string;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            received_from: string;
        }[];
        payment_vouchers: {
            id: number;
            description: string | null;
            created_at: Date;
            created_by: string | null;
            supplier_id: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            partner_id: number | null;
            payment_method: string;
            check_id: number | null;
            beneficiary_type: string;
            employee_id: string | null;
            expense_type_id: string | null;
            paid_to: string;
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
    }>;
    findByPartnerCode(partner_code: string): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    } | null>;
    getSummary(id: number): Promise<{
        partner_code: string;
        name: string;
        initial_capital: number;
        current_capital: number;
        total_capital_increase: number;
        total_withdrawals: number;
        net_capital: number;
    }>;
    create(data: CreatePartnerDto): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    update(id: number, data: UpdatePartnerDto): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
}

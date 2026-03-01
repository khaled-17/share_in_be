import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PartnersService {
    private prisma;
    constructor(prisma: PrismaService);
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
    create(data: Prisma.PartnerCreateInput): Promise<{
        name: string;
        id: number;
        email: string | null;
        phone: string | null;
        created_at: Date;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    update(id: number, data: Prisma.PartnerUpdateInput): Promise<{
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

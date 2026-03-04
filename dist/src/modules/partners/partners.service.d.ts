import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PartnersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }[]>;
    findOne(id: number): Promise<{
        receipt_vouchers: {
            id: number;
            created_at: Date;
            description: string | null;
            customer_id: string | null;
            created_by: string | null;
            voucher_number: string;
            voucher_date: string;
            amount: number;
            payment_method: string;
            check_id: number | null;
            partner_id: number | null;
            source_type: string;
            received_from: string;
        }[];
        payment_vouchers: {
            id: number;
            created_at: Date;
            description: string | null;
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
        }[];
    } & {
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    findByPartnerCode(partner_code: string): Promise<{
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
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
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    update(id: number, data: Prisma.PartnerUpdateInput): Promise<{
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        created_at: Date;
        email: string | null;
        phone: string | null;
        partner_code: string;
        initial_capital: number;
        current_capital: number;
    }>;
}

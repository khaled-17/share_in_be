import { PrismaService } from '../../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getLedgerReport(startDate: string, endDate: string): Promise<{
        openingBalance: number;
        ledgerData: ({
            balance: number;
            date: string | Date;
            description: string;
            debit: number;
            credit: number;
            type: string;
            source_type?: string;
            beneficiary_type?: string;
            partner_id?: number | null;
        } | {
            date: string;
            description: string;
            debit: number;
            credit: number;
            balance: number;
        })[];
        totals: {
            debit: number;
            credit: number;
            balance: number;
        };
        budgetStats: {
            sales: number;
            expenses: number;
            capitalAdded: number;
            capitalWithdrawn: number;
            netProfit: number;
        };
    }>;
    getDashboardStats(): Promise<{
        total_customers: number;
        total_suppliers: number;
        total_quotations: number;
        total_revenue: number;
    }>;
    getFinancialReport(startDate?: string, endDate?: string): Promise<{
        openingBalance: number;
        ledgerData: ({
            balance: number;
            date: string | Date;
            description: string;
            debit: number;
            credit: number;
            type: string;
            source_type?: string;
            beneficiary_type?: string;
            partner_id?: number | null;
        } | {
            date: string;
            description: string;
            debit: number;
            credit: number;
            balance: number;
        })[];
        totals: {
            debit: number;
            credit: number;
            balance: number;
        };
        budgetStats: {
            sales: number;
            expenses: number;
            capitalAdded: number;
            capitalWithdrawn: number;
            netProfit: number;
        };
    }>;
    getOperationalReport(startDate?: string, endDate?: string): Promise<{
        quotations_count: number;
        work_orders_count: number;
        quotations: {
            id: number;
            customer_id: string;
            receipt_no: string | null;
            project_type_id: string | null;
            project_manager: string | null;
            project_name: string | null;
            quote_date: string;
            delivery_date: string | null;
            totalamount: number;
            paid_adv: number | null;
            adv_date: string | null;
            status: string;
        }[];
        workOrders: {
            id: number;
            customer_id: string;
            created_at: Date;
            quotation_id: number;
            order_code: string;
        }[];
    }>;
}

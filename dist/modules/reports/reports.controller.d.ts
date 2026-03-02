import { ReportsService } from './reports.service';
import { ReportQueryDto } from './dto/report.dto';
export declare class ReportsController {
    private reportsService;
    constructor(reportsService: ReportsService);
    getDashboardStats(): Promise<{
        success: boolean;
        data: {
            total_customers: number;
            total_suppliers: number;
            total_quotations: number;
            total_revenue: number;
        };
    }>;
    getFinancialReport(query: ReportQueryDto): Promise<{
        success: boolean;
        data: {
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
        };
    }>;
    getOperationalReport(query: ReportQueryDto): Promise<{
        success: boolean;
        data: {
            quotations_count: number;
            work_orders_count: number;
            quotations: {
                id: number;
                status: string;
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
            }[];
            workOrders: {
                id: number;
                created_at: Date;
                customer_id: string;
                order_code: string;
                quotation_id: number;
            }[];
        };
    }>;
}

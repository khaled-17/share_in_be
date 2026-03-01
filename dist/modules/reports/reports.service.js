"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLedgerReport(startDate, endDate) {
        if (!startDate || !endDate) {
            throw new common_1.BadRequestException('Both startDate and endDate are required');
        }
        const prevRevenue = await this.prisma.revenue.aggregate({
            where: { rev_date: { lt: startDate } },
            _sum: { amount: true },
        });
        const prevReceipts = await this.prisma.receiptVoucher.aggregate({
            where: { voucher_date: { lt: startDate } },
            _sum: { amount: true },
        });
        const prevExpenses = await this.prisma.expense.aggregate({
            where: { exp_date: { lt: startDate } },
            _sum: { amount: true },
        });
        const prevPayments = await this.prisma.paymentVoucher.aggregate({
            where: { voucher_date: { lt: startDate } },
            _sum: { amount: true },
        });
        const openingBalance = Number(prevRevenue._sum.amount || 0) +
            Number(prevReceipts._sum.amount || 0) -
            (Number(prevExpenses._sum.amount || 0) +
                Number(prevPayments._sum.amount || 0));
        const revenues = await this.prisma.revenue.findMany({
            where: { rev_date: { gte: startDate, lte: endDate } },
            include: { customer: { select: { name: true } } },
        });
        const receipts = await this.prisma.receiptVoucher.findMany({
            where: { voucher_date: { gte: startDate, lte: endDate } },
            include: {
                customer: { select: { name: true } },
                partner: { select: { name: true } },
            },
        });
        const expenses = await this.prisma.expense.findMany({
            where: { exp_date: { gte: startDate, lte: endDate } },
            include: { supplier: { select: { name: true } } },
        });
        const payments = await this.prisma.paymentVoucher.findMany({
            where: { voucher_date: { gte: startDate, lte: endDate } },
            include: {
                supplier: { select: { name: true } },
                partner: { select: { name: true } },
            },
        });
        const ledgerItems = [];
        revenues.forEach((r) => {
            ledgerItems.push({
                date: r.rev_date,
                description: `إيراد: ${r.customer?.name || 'غير محدد'} - ${r.notes || ''}`,
                debit: Number(r.amount),
                credit: 0,
                type: 'revenue',
            });
        });
        receipts.forEach((r) => {
            ledgerItems.push({
                date: r.voucher_date,
                description: `سند قبض ${r.voucher_number}: ${r.received_from} - ${r.description || ''}`,
                debit: Number(r.amount),
                credit: 0,
                type: 'receipt',
                source_type: r.source_type,
                partner_id: r.partner_id,
            });
        });
        expenses.forEach((e) => {
            ledgerItems.push({
                date: e.exp_date,
                description: `مصروف: ${e.supplier?.name || 'غير محدد'} - ${e.notes || ''}`,
                debit: 0,
                credit: Number(e.amount),
                type: 'expense',
            });
        });
        payments.forEach((p) => {
            ledgerItems.push({
                date: p.voucher_date,
                description: `سند صرف ${p.voucher_number}: ${p.paid_to} - ${p.description || ''}`,
                debit: 0,
                credit: Number(p.amount),
                type: 'payment',
                beneficiary_type: p.beneficiary_type,
                partner_id: p.partner_id,
            });
        });
        ledgerItems.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        let runningBalance = openingBalance;
        const finalLedger = [
            {
                date: startDate,
                description: 'رصيد أول المدة',
                debit: 0,
                credit: 0,
                balance: openingBalance,
            },
            ...ledgerItems.map((item) => {
                runningBalance += item.debit - item.credit;
                return { ...item, balance: runningBalance };
            }),
        ];
        const budgetStats = {
            sales: revenues.reduce((sum, r) => sum + Number(r.amount), 0),
            expenses: expenses.reduce((sum, e) => sum + Number(e.amount), 0),
            capitalAdded: receipts
                .filter((r) => r.source_type === 'partner_capital' || r.partner_id)
                .reduce((sum, r) => sum + Number(r.amount), 0),
            capitalWithdrawn: payments
                .filter((p) => p.beneficiary_type === 'partner_withdrawal' || p.partner_id)
                .reduce((sum, p) => sum + Number(p.amount), 0),
            netProfit: 0,
        };
        budgetStats.netProfit = budgetStats.sales - budgetStats.expenses;
        const totals = {
            debit: ledgerItems.reduce((sum, i) => sum + i.debit, 0),
            credit: ledgerItems.reduce((sum, i) => sum + i.credit, 0),
            balance: runningBalance,
        };
        return {
            openingBalance,
            ledgerData: finalLedger,
            totals,
            budgetStats,
        };
    }
    async getDashboardStats() {
        const [customers, suppliers, quotations, revenue] = await Promise.all([
            this.prisma.customer.count(),
            this.prisma.supplier.count(),
            this.prisma.quotation.count(),
            this.prisma.revenue.aggregate({ _sum: { amount: true } }),
        ]);
        return {
            total_customers: customers,
            total_suppliers: suppliers,
            total_quotations: quotations,
            total_revenue: revenue?._sum?.amount || 0,
        };
    }
    async getFinancialReport(startDate, endDate) {
        const start = startDate || new Date(new Date().getFullYear(), 0, 1).toISOString();
        const end = endDate || new Date().toISOString();
        return this.getLedgerReport(start, end);
    }
    async getOperationalReport(startDate, endDate) {
        const start = startDate || new Date(new Date().getFullYear(), 0, 1).toISOString();
        const end = endDate || new Date().toISOString();
        const [quotations, workOrders] = await Promise.all([
            this.prisma.quotation.findMany({
                where: { quote_date: { gte: start, lte: end } },
            }),
            this.prisma.workOrder.findMany({
                where: { created_at: { gte: new Date(start), lte: new Date(end) } },
            }),
        ]);
        return {
            quotations_count: quotations.length,
            work_orders_count: workOrders.length,
            quotations,
            workOrders,
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map
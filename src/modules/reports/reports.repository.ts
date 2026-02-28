import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getLedgerData = async (startDate: string, endDate: string) => {
    // 1. Calculate Opening Balance
    // Sum of all (Revenue + ReceiptVouchers) - (Expenses + PaymentVouchers) BEFORE startDate

    const prevRevenue = await prisma.revenue.aggregate({
        where: { rev_date: { lt: startDate } },
        _sum: { amount: true },
    });

    const prevReceipts = await prisma.receiptVoucher.aggregate({
        where: { voucher_date: { lt: startDate } },
        _sum: { amount: true },
    });

    const prevExpenses = await prisma.expense.aggregate({
        where: { exp_date: { lt: startDate } },
        _sum: { amount: true },
    });

    const prevPayments = await prisma.paymentVoucher.aggregate({
        where: { voucher_date: { lt: startDate } },
        _sum: { amount: true },
    });

    const openingBalance =
        Number(prevRevenue._sum.amount || 0) +
        Number(prevReceipts._sum.amount || 0) -
        (Number(prevExpenses._sum.amount || 0) + Number(prevPayments._sum.amount || 0));

    // 2. Fetch Current Period Data
    const revenues = await prisma.revenue.findMany({
        where: { rev_date: { gte: startDate, lte: endDate } },
        include: { customer: { select: { name: true } } },
    });

    const receipts = await prisma.receiptVoucher.findMany({
        where: { voucher_date: { gte: startDate, lte: endDate } },
        include: { customer: { select: { name: true } }, partner: { select: { name: true } } },
    });

    const expenses = await prisma.expense.findMany({
        where: { exp_date: { gte: startDate, lte: endDate } },
        include: { supplier: { select: { name: true } } },
    });

    const payments = await prisma.paymentVoucher.findMany({
        where: { voucher_date: { gte: startDate, lte: endDate } },
        include: { supplier: { select: { name: true } }, partner: { select: { name: true } } },
    });

    // 3. Transform and Sort
    const ledgerItems: any[] = [];

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

    // 4. Calculate Running Balances and Stats
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
        netProfit: 0, // Will be calculated in service
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
};

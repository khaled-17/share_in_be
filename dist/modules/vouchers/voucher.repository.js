import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// Receipt Vouchers
export const getAllReceiptVouchers = async (filters) => {
    const { start_date, end_date, source_type, payment_method } = filters;
    const where = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date)
            where.voucher_date.gte = start_date;
        if (end_date)
            where.voucher_date.lte = end_date;
    }
    if (source_type)
        where.source_type = source_type;
    if (payment_method)
        where.payment_method = payment_method;
    return prisma.receiptVoucher.findMany({
        where,
        include: {
            customer: true,
            partner: true,
            check: true,
        },
        orderBy: { voucher_date: 'desc' },
    });
};
export const createReceiptVoucher = async (data) => {
    const { check, ...voucherData } = data;
    return prisma.$transaction(async (tx) => {
        let checkId = null;
        if (voucherData.payment_method === 'check' && check) {
            const createdCheck = await tx.checkDetail.create({
                data: {
                    ...check,
                    amount: parseFloat(voucherData.amount),
                    status: check.status || 'pending',
                },
            });
            checkId = createdCheck.id;
        }
        const voucher = await tx.receiptVoucher.create({
            data: {
                ...voucherData,
                amount: parseFloat(voucherData.amount),
                partner_id: voucherData.partner_id ? parseInt(voucherData.partner_id) : null,
                check_id: checkId,
            },
            include: {
                customer: true,
                partner: true,
                check: true,
            },
        });
        if (voucher.source_type === 'partner_capital' && voucher.partner_id) {
            await tx.partner.update({
                where: { id: voucher.partner_id },
                data: {
                    current_capital: { increment: voucher.amount },
                },
            });
        }
        return voucher;
    });
};
// Payment Vouchers
export const getAllPaymentVouchers = async (filters) => {
    const { start_date, end_date, beneficiary_type, payment_method } = filters;
    const where = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date)
            where.voucher_date.gte = start_date;
        if (end_date)
            where.voucher_date.lte = end_date;
    }
    if (beneficiary_type)
        where.beneficiary_type = beneficiary_type;
    if (payment_method)
        where.payment_method = payment_method;
    return prisma.paymentVoucher.findMany({
        where,
        include: {
            supplier: true,
            employee: true,
            partner: true,
            expense_type: true,
            check: true,
        },
        orderBy: { voucher_date: 'desc' },
    });
};
export const createPaymentVoucher = async (data) => {
    const { check, ...voucherData } = data;
    return prisma.$transaction(async (tx) => {
        let checkId = null;
        if (voucherData.payment_method === 'check' && check) {
            const createdCheck = await tx.checkDetail.create({
                data: {
                    ...check,
                    amount: parseFloat(voucherData.amount),
                    status: check.status || 'pending',
                },
            });
            checkId = createdCheck.id;
        }
        const voucher = await tx.paymentVoucher.create({
            data: {
                ...voucherData,
                amount: parseFloat(voucherData.amount),
                partner_id: voucherData.partner_id ? parseInt(voucherData.partner_id) : null,
                check_id: checkId,
            },
            include: {
                supplier: true,
                employee: true,
                partner: true,
                expense_type: true,
                check: true,
            },
        });
        if (voucher.beneficiary_type === 'partner_withdrawal' && voucher.partner_id) {
            await tx.partner.update({
                where: { id: voucher.partner_id },
                data: {
                    current_capital: { decrement: voucher.amount },
                },
            });
        }
        return voucher;
    });
};
// Stats
export const getVoucherStats = async (type, filters) => {
    const { start_date, end_date } = filters;
    const where = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date)
            where.voucher_date.gte = start_date;
        if (end_date)
            where.voucher_date.lte = end_date;
    }
    if (type === 'receipt') {
        const vouchers = await prisma.receiptVoucher.findMany({ where });
        const pendingChecks = await prisma.checkDetail.count({
            where: { status: 'pending', receipt_voucher_id: { not: null } },
        });
        return {
            total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
            total_count: vouchers.length,
            by_source_type: vouchers.reduce((acc, v) => {
                acc[v.source_type] = (acc[v.source_type] || 0) + v.amount;
                return acc;
            }, {}),
            by_payment_method: vouchers.reduce((acc, v) => {
                acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
                return acc;
            }, {}),
            pending_checks: pendingChecks,
        };
    }
    else {
        const vouchers = await prisma.paymentVoucher.findMany({ where });
        const pendingChecks = await prisma.checkDetail.count({
            where: { status: 'pending', payment_voucher_id: { not: null } },
        });
        return {
            total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
            total_count: vouchers.length,
            by_beneficiary_type: vouchers.reduce((acc, v) => {
                acc[v.beneficiary_type] = (acc[v.beneficiary_type] || 0) + v.amount;
                return acc;
            }, {}),
            by_payment_method: vouchers.reduce((acc, v) => {
                acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
                return acc;
            }, {}),
            pending_checks: pendingChecks,
        };
    }
};
export const updateReceiptVoucher = async (id, data) => {
    return prisma.$transaction(async (tx) => {
        const oldVoucher = await tx.receiptVoucher.findUnique({ where: { id } });
        if (!oldVoucher)
            throw new Error('Voucher not found');
        const { check, ...voucherData } = data;
        const amountDiff = (voucherData.amount || oldVoucher.amount) - oldVoucher.amount;
        const updatedVoucher = await tx.receiptVoucher.update({
            where: { id },
            data: voucherData,
            include: { check: true },
        });
        // If it's partner capital, update partner current_capital
        if (updatedVoucher.source_type === 'partner_capital' &&
            updatedVoucher.partner_id &&
            amountDiff !== 0) {
            await tx.partner.update({
                where: { id: updatedVoucher.partner_id },
                data: { current_capital: { increment: amountDiff } },
            });
        }
        return updatedVoucher;
    });
};
export const updatePaymentVoucher = async (id, data) => {
    return prisma.$transaction(async (tx) => {
        const oldVoucher = await tx.paymentVoucher.findUnique({ where: { id } });
        if (!oldVoucher)
            throw new Error('Voucher not found');
        const { check, ...voucherData } = data;
        const amountDiff = (voucherData.amount || oldVoucher.amount) - oldVoucher.amount;
        const updatedVoucher = await tx.paymentVoucher.update({
            where: { id },
            data: voucherData,
            include: { check: true },
        });
        // If it's partner withdrawal, update partner current_capital (negative increment for more withdrawal)
        if (updatedVoucher.beneficiary_type === 'partner_withdrawal' &&
            updatedVoucher.partner_id &&
            amountDiff !== 0) {
            await tx.partner.update({
                where: { id: updatedVoucher.partner_id },
                data: { current_capital: { decrement: amountDiff } },
            });
        }
        return updatedVoucher;
    });
};

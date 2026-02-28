import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Receipt Vouchers
export const getAllReceiptVouchers = async (filters: any) => {
    const { start_date, end_date, source_type, payment_method } = filters;
    const where: any = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date) where.voucher_date.gte = start_date;
        if (end_date) where.voucher_date.lte = end_date;
    }
    if (source_type) where.source_type = source_type;
    if (payment_method) where.payment_method = payment_method;

    return prisma.receiptVoucher.findMany({
        where,
        include: {
            customer: { select: { name: true } },
            partner: { select: { name: true } },
            check: true,
        },
        orderBy: { voucher_date: 'desc' },
    });
};

export const getReceiptVoucherById = async (id: number) => {
    return prisma.receiptVoucher.findUnique({
        where: { id },
        include: {
            customer: true,
            partner: true,
            check: true,
        },
    });
};

export const createReceiptVoucher = async (data: any) => {
    const { check, ...voucherData } = data;

    // Use transaction if check is included
    return prisma.$transaction(async (tx) => {
        let checkId = null;
        if (voucherData.payment_method === 'check' && check) {
            const createdCheck = await tx.checkDetail.create({
                data: {
                    ...check,
                    status: 'pending',
                },
            });
            checkId = createdCheck.id;
        }

        const voucher = await tx.receiptVoucher.create({
            data: {
                ...voucherData,
                check_id: checkId,
            },
            include: {
                customer: { select: { name: true } },
                partner: { select: { name: true } },
                check: true,
            },
        });

        // If it's a partner capital increase, update partner capital
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

export const deleteReceiptVoucher = async (id: number) => {
    return prisma.$transaction(async (tx) => {
        const voucher = await tx.receiptVoucher.findUnique({ where: { id } });
        if (!voucher) throw new Error('Voucher not found');

        // If it was partner capital, decrement it
        if (voucher.source_type === 'partner_capital' && voucher.partner_id) {
            await tx.partner.update({
                where: { id: voucher.partner_id },
                data: {
                    current_capital: { decrement: voucher.amount },
                },
            });
        }

        // Delete check if exists
        if (voucher.check_id) {
            await tx.checkDetail.delete({ where: { id: voucher.check_id } });
        }

        return tx.receiptVoucher.delete({ where: { id } });
    });
};

// Payment Vouchers
export const getAllPaymentVouchers = async (filters: any) => {
    const { start_date, end_date, beneficiary_type, payment_method } = filters;
    const where: any = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date) where.voucher_date.gte = start_date;
        if (end_date) where.voucher_date.lte = end_date;
    }
    if (beneficiary_type) where.beneficiary_type = beneficiary_type;
    if (payment_method) where.payment_method = payment_method;

    return prisma.paymentVoucher.findMany({
        where,
        include: {
            supplier: { select: { name: true } },
            employee: { select: { name: true } },
            partner: { select: { name: true } },
            expense_type: { select: { exptype_name: true } },
            check: true,
        },
        orderBy: { voucher_date: 'desc' },
    });
};

export const getPaymentVoucherById = async (id: number) => {
    return prisma.paymentVoucher.findUnique({
        where: { id },
        include: {
            supplier: true,
            employee: true,
            partner: true,
            expense_type: true,
            check: true,
        },
    });
};

export const createPaymentVoucher = async (data: any) => {
    const { check, ...voucherData } = data;

    return prisma.$transaction(async (tx) => {
        let checkId = null;
        if (voucherData.payment_method === 'check' && check) {
            const createdCheck = await tx.checkDetail.create({
                data: {
                    ...check,
                    status: 'pending',
                },
            });
            checkId = createdCheck.id;
        }

        const voucher = await tx.paymentVoucher.create({
            data: {
                ...voucherData,
                check_id: checkId,
            },
            include: {
                supplier: { select: { name: true } },
                employee: { select: { name: true } },
                partner: { select: { name: true } },
                expense_type: { select: { exptype_name: true } },
                check: true,
            },
        });

        // If it's a partner withdrawal, update partner capital
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

export const deletePaymentVoucher = async (id: number) => {
    return prisma.$transaction(async (tx) => {
        const voucher = await tx.paymentVoucher.findUnique({ where: { id } });
        if (!voucher) throw new Error('Voucher not found');

        // If it was partner withdrawal, increment it back
        if (voucher.beneficiary_type === 'partner_withdrawal' && voucher.partner_id) {
            await tx.partner.update({
                where: { id: voucher.partner_id },
                data: {
                    current_capital: { increment: voucher.amount },
                },
            });
        }

        // Delete check if exists
        if (voucher.check_id) {
            await tx.checkDetail.delete({ where: { id: voucher.check_id } });
        }

        return tx.paymentVoucher.delete({ where: { id } });
    });
};

// Summary Stats
export const getVoucherStats = async (type: 'receipt' | 'payment', filters: any) => {
    const { start_date, end_date } = filters;
    const where: any = {};
    if (start_date || end_date) {
        where.voucher_date = {};
        if (start_date) where.voucher_date.gte = start_date;
        if (end_date) where.voucher_date.lte = end_date;
    }

    if (type === 'receipt') {
        const vouchers = await prisma.receiptVoucher.findMany({ where });
        return {
            total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
            total_count: vouchers.length,
            by_payment_method: vouchers.reduce((acc: any, v) => {
                acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
                return acc;
            }, {}),
            pending_checks: vouchers.filter((v) => v.payment_method === 'check').length, // Simplified
        };
    } else {
        const vouchers = await prisma.paymentVoucher.findMany({ where });
        return {
            total_amount: vouchers.reduce((sum, v) => sum + v.amount, 0),
            total_count: vouchers.length,
            by_payment_method: vouchers.reduce((acc: any, v) => {
                acc[v.payment_method] = (acc[v.payment_method] || 0) + v.amount;
                return acc;
            }, {}),
            pending_checks: vouchers.filter((v) => v.payment_method === 'check').length, // Simplified
        };
    }
};

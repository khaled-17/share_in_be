import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllChecks = async (filters: any) => {
    const { status, start_date, end_date } = filters;
    const where: any = {};
    if (status) where.status = status;
    if (start_date || end_date) {
        where.check_date = {};
        if (start_date) where.check_date.gte = start_date;
        if (end_date) where.check_date.lte = end_date;
    }

    return prisma.checkDetail.findMany({
        where,
        orderBy: { check_date: 'asc' },
    });
};

export const getCheckById = async (id: number) => {
    return prisma.checkDetail.findUnique({
        where: { id },
        include: {
            receipt_voucher: true,
            payment_voucher: true,
        },
    });
};

export const updateCheckStatus = async (id: number, data: { status: string; notes?: string }) => {
    return prisma.checkDetail.update({
        where: { id },
        data,
    });
};

export const getCheckStats = async (filters: any) => {
    const { start_date, end_date } = filters;
    const where: any = {};
    if (start_date || end_date) {
        where.check_date = {};
        if (start_date) where.check_date.gte = start_date;
        if (end_date) where.check_date.lte = end_date;
    }

    const checks = await prisma.checkDetail.findMany({
        where,
    });

    const stats = {
        total_count: checks.length,
        total_amount: checks.reduce((sum, c) => sum + c.amount, 0),
        by_status: {
            pending: checks.filter((c) => c.status === 'pending').length,
            cleared: checks.filter((c) => c.status === 'cleared').length,
            bounced: checks.filter((c) => c.status === 'bounced').length,
            cancelled: checks.filter((c) => c.status === 'cancelled').length,
        },
        by_type: {
            receipt: checks.filter((c) => c.receipt_voucher_id !== null).length,
            payment: checks.filter((c) => c.payment_voucher_id !== null).length,
        },
    };

    return stats;
};

export const getDueSoonChecks = async () => {
    const today = new Date().toISOString().split('T')[0];
    return prisma.checkDetail.findMany({
        where: {
            status: 'pending',
            check_date: { gte: today },
        },
        orderBy: { check_date: 'asc' },
        take: 5,
    });
};

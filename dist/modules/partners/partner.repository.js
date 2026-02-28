import prisma from '../../config/prisma.js';
export const findAll = async () => {
    return await prisma.partner.findMany({
        orderBy: { id: 'desc' },
    });
};
export const findById = async (id) => {
    return await prisma.partner.findUnique({
        where: { id },
        include: {
            receipt_vouchers: true,
            payment_vouchers: true,
        },
    });
};
export const getSummaryById = async (id) => {
    return await prisma.partner.findUnique({
        where: { id },
        include: {
            receipt_vouchers: { select: { amount: true } },
            payment_vouchers: { select: { amount: true } },
        },
    });
};
export const findByPartnerCode = async (partner_code) => {
    return await prisma.partner.findUnique({
        where: { partner_code },
    });
};
export const create = async (data) => {
    return await prisma.partner.create({
        data,
    });
};
export const update = async (id, data) => {
    return await prisma.partner.update({
        where: { id },
        data,
    });
};
export const remove = async (id) => {
    return await prisma.partner.delete({
        where: { id },
    });
};

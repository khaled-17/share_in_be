import prisma from '../../config/prisma.js';

export const findAll = async (params: { skip?: number; take?: number; search?: string }) => {
    const { skip, take, search } = params;

    const where = search ? {
        OR: [
            { name: { contains: search } },
            { customer_id: { contains: search } },
            { phone: { contains: search } },
            { contact_person: { contains: search } },
        ]
    } : {};

    const [customers, total] = await Promise.all([
        prisma.customer.findMany({
            where,
            skip,
            take,
            orderBy: { created_at: 'desc' }
        }),
        prisma.customer.count({ where })
    ]);

    return { customers, total };
};

export const findById = async (customer_id: string) => {
    return await prisma.customer.findUnique({
        where: { customer_id },
        include: {
            revenues: true,
            quotations: true,
            work_orders: true,
            receipt_vouchers: true
        }
    });
};

export const create = async (data: any) => {
    return await prisma.customer.create({
        data
    });
};

export const update = async (customer_id: string, data: any) => {
    return await prisma.customer.update({
        where: { customer_id },
        data
    });
};

export const remove = async (customer_id: string) => {
    return await prisma.customer.delete({
        where: { customer_id }
    });
};

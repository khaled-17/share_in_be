import prisma from '../../config/prisma.js';

export const findAll = async (params: { skip?: number; take?: number; search?: string }) => {
    const { skip, take, search } = params;

    const where = search ? {
        OR: [
            { name: { contains: search } },
            { supplier_id: { contains: search } },
            { phone: { contains: search } },
            { speciality: { contains: search } },
        ]
    } : {};

    const [suppliers, total] = await Promise.all([
        prisma.supplier.findMany({
            where,
            skip,
            take,
            orderBy: { created_at: 'desc' }
        }),
        prisma.supplier.count({ where })
    ]);

    return { suppliers, total };
};

export const findById = async (supplier_id: string) => {
    return await prisma.supplier.findUnique({
        where: { supplier_id },
        include: {
            expenses: true,
            payment_vouchers: true
        }
    });
};

export const create = async (data: any) => {
    return await prisma.supplier.create({
        data
    });
};

export const update = async (supplier_id: string, data: any) => {
    return await prisma.supplier.update({
        where: { supplier_id },
        data
    });
};

export const remove = async (supplier_id: string) => {
    return await prisma.supplier.delete({
        where: { supplier_id }
    });
};

import prisma from '../../config/prisma.js';

export const findAll = async (params: { skip?: number; take?: number; search?: string }) => {
    const { skip, take, search } = params;

    const where = search
        ? {
              OR: [
                  { name: { contains: search } },
                  { supplier_id: { contains: search } },
                  { phone: { contains: search } },
                  { speciality: { contains: search } },
              ],
          }
        : {};

    const [suppliers, total] = await Promise.all([
        prisma.supplier.findMany({
            where,
            skip,
            take,
            orderBy: { created_at: 'desc' },
        }),
        prisma.supplier.count({ where }),
    ]);

    return { suppliers, total };
};

export const findById = async (id: number) => {
    return await prisma.supplier.findUnique({
        where: { id },
        include: {
            expenses: {
                include: { type: true },
                orderBy: { exp_date: 'desc' },
            },
            payment_vouchers: true,
        },
    });
};

export const findBySupplierCode = async (supplier_id: string) => {
    return await prisma.supplier.findUnique({
        where: { supplier_id },
        include: {
            expenses: {
                include: { type: true },
                orderBy: { exp_date: 'desc' },
            },
            payment_vouchers: true,
        },
    });
};

export const create = async (data: any) => {
    return await prisma.supplier.create({
        data,
    });
};

export const update = async (id: string | number, data: any) => {
    const idInt = typeof id === 'string' ? parseInt(id) : id;
    if (isNaN(idInt)) {
        // Fallback to supplier_id if parsing fails (though UI sends Int)
        return await prisma.supplier.update({
            where: { supplier_id: id as string },
            data,
        });
    }
    return await prisma.supplier.update({
        where: { id: idInt },
        data,
    });
};

export const remove = async (id: string | number) => {
    const idInt = typeof id === 'string' ? parseInt(id) : id;
    if (isNaN(idInt)) {
        return await prisma.supplier.delete({
            where: { supplier_id: id as string },
        });
    }
    return await prisma.supplier.delete({
        where: { id: idInt },
    });
};

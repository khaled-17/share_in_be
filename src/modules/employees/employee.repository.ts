import prisma from '../../config/prisma.js';

export const findAll = async (params: { skip?: number; take?: number; search?: string }) => {
    const { skip, take, search } = params;

    const where = search
        ? {
              OR: [
                  { name: { contains: search } },
                  { emp_code: { contains: search } },
                  { phone: { contains: search } },
                  { position: { contains: search } },
              ],
          }
        : {};

    const [employees, total] = await Promise.all([
        prisma.employee.findMany({
            where,
            skip,
            take,
            orderBy: { id: 'desc' },
        }),
        prisma.employee.count({ where }),
    ]);

    return { employees, total };
};

export const findById = async (id: number) => {
    return await prisma.employee.findUnique({
        where: { id },
        include: {
            payment_vouchers: true,
        },
    });
};

export const findByEmpCode = async (emp_code: string) => {
    return await prisma.employee.findUnique({
        where: { emp_code },
    });
};

export const create = async (data: any) => {
    return await prisma.employee.create({
        data,
    });
};

export const update = async (id: number, data: any) => {
    return await prisma.employee.update({
        where: { id },
        data,
    });
};

export const remove = async (id: number) => {
    return await prisma.employee.delete({
        where: { id },
    });
};

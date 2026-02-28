import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllShareen = async () => {
    return prisma.shareen.findMany({
        orderBy: { created_at: 'desc' },
    });
};

export const createShareen = async (data: any = {}) => {
    return prisma.shareen.create({
        data,
    });
};

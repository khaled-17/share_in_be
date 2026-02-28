import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllReviews = async () => {
    return prisma.customerReview.findMany({
        orderBy: { createdAt: 'desc' },
    });
};

export const createReview = async (data: any) => {
    return prisma.customerReview.create({
        data,
    });
};

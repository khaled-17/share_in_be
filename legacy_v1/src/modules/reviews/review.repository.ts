import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllReviews = async () => {
    return prisma.customerReview.findMany({
        orderBy: { createdAt: 'desc' },
    });
};

export const createReview = async (data: any) => {
    const { rating, ...reviewData } = data;
    return prisma.customerReview.create({
        data: {
            ...reviewData,
            rating: typeof rating === 'string' ? parseInt(rating) : rating,
        },
    });
};

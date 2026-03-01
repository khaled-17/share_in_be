import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.customerReview.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async create(data: any) {
        const { rating, ...reviewData } = data;
        return this.prisma.customerReview.create({
            data: {
                ...reviewData,
                rating: typeof rating === 'string' ? parseInt(rating) : rating,
            },
        });
    }
}

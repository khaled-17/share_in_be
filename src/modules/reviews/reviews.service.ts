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
        return this.prisma.customerReview.create({
            data,
        });
    }

    async findOne(id: string) {
        return this.prisma.customerReview.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: any) {
        return this.prisma.customerReview.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.customerReview.delete({
            where: { id },
        });
    }
}

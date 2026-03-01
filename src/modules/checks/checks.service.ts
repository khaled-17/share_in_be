import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ChecksService {
    constructor(private prisma: PrismaService) { }

    async findAll(filters: any) {
        const { status, start_date, end_date } = filters;
        const where: any = {};
        if (status) where.status = status;
        if (start_date || end_date) {
            where.check_date = {};
            if (start_date) where.check_date.gte = start_date;
            if (end_date) where.check_date.lte = end_date;
        }

        return this.prisma.checkDetail.findMany({
            where,
            orderBy: { check_date: 'asc' },
        });
    }

    async findOne(id: number) {
        const check = await this.prisma.checkDetail.findUnique({
            where: { id },
            include: {
                receipt_voucher: true,
                payment_voucher: true,
            },
        });
        if (!check) throw new NotFoundException('Check not found');
        return check;
    }

    async create(data: any) {
        return this.prisma.checkDetail.create({
            data,
        });
    }

    async update(id: number, data: any) {
        return this.updateStatus(id, data);
    }

    async updateStatus(id: number, data: { status: string; notes?: string }) {
        await this.findOne(id);
        return this.prisma.checkDetail.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.checkDetail.delete({
            where: { id },
        });
    }

    async getStats(filters: any) {
        const { start_date, end_date } = filters;
        const where: any = {};
        if (start_date || end_date) {
            where.check_date = {};
            if (start_date) where.check_date.gte = start_date;
            if (end_date) where.check_date.lte = end_date;
        }

        const checks = await this.prisma.checkDetail.findMany({
            where,
        });

        const stats = {
            total_count: checks.length,
            total_amount: checks.reduce((sum, c) => sum + c.amount, 0),
            by_status: {
                pending: checks.filter((c) => c.status === 'pending').length,
                cleared: checks.filter((c) => c.status === 'cleared').length,
                bounced: checks.filter((c) => c.status === 'bounced').length,
                cancelled: checks.filter((c) => c.status === 'cancelled').length,
            },
            by_type: {
                receipt: checks.filter((c) => c.receipt_voucher_id !== null).length,
                payment: checks.filter((c) => c.payment_voucher_id !== null).length,
            },
        };

        return stats;
    }

    async getDueSoon() {
        const today = new Date().toISOString().split('T')[0];
        return this.prisma.checkDetail.findMany({
            where: {
                status: 'pending',
                check_date: { gte: today },
            },
            orderBy: { check_date: 'asc' },
            take: 5,
        });
    }
}

import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkOrdersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.workOrder.findMany({
            include: {
                customer: true,
                quotation: true,
            },
            orderBy: { created_at: 'desc' },
        });
    }

    async findOne(id: number) {
        const workOrder = await this.prisma.workOrder.findUnique({
            where: { id },
            include: {
                customer: true,
                quotation: true,
            },
        });
        if (!workOrder) throw new NotFoundException('Work order not found');
        return workOrder;
    }

    async findByOrderCode(order_code: string) {
        return this.prisma.workOrder.findUnique({
            where: { order_code },
        });
    }

    async create(data: any) {
        const { quotation_id, ...orderData } = data;
        if (orderData.order_code) {
            const existing = await this.findByOrderCode(orderData.order_code);
            if (existing) throw new ConflictException('Work order code already exists');
        }

        return this.prisma.workOrder.create({
            data: {
                ...orderData,
                quotation_id: parseInt(quotation_id as string),
            },
            include: {
                customer: true,
                quotation: true,
            },
        });
    }

    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.workOrder.delete({
            where: { id },
        });
    }
}

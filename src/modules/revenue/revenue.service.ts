import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RevenueService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters: any = {}) {
    const { start_date, end_date, quotation_id } = filters;
    const where: any = {};
    if (start_date || end_date) {
      where.rev_date = {};
      if (start_date) where.rev_date.gte = start_date;
      if (end_date) where.rev_date.lte = end_date;
    }
    if (quotation_id) where.quote_id = quotation_id;

    return this.prisma.revenue.findMany({
      where,
      include: {
        customer: true,
        type: true,
      },
      orderBy: { rev_date: 'desc' },
    });
  }

  async findOne(id: number) {
    const revenue = await this.prisma.revenue.findUnique({
      where: { id },
      include: {
        customer: true,
        type: true,
      },
    });
    if (!revenue) throw new NotFoundException('Revenue not found');
    return revenue;
  }

  async create(data: any) {
    const { amount, quote_id, ...revenueData } = data;

    return this.prisma.revenue.create({
      data: {
        ...revenueData,
        amount: parseFloat(amount),
        quote_id: quote_id ? parseInt(quote_id) : null,
      },
      include: {
        customer: true,
        type: true,
      },
    });
  }

  async update(id: number, data: any) {
    await this.findOne(id);
    const { amount, quote_id, ...revenueData } = data;

    return this.prisma.revenue.update({
      where: { id },
      data: {
        ...revenueData,
        amount: amount !== undefined ? parseFloat(amount) : undefined,
        quote_id:
          quote_id !== undefined
            ? quote_id
              ? parseInt(quote_id)
              : null
            : undefined,
      },
      include: {
        customer: true,
        type: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.revenue.delete({
      where: { id },
    });
  }
}

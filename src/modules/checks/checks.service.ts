import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateCheckDto, UpdateCheckDto } from './dto/check.dto';

export class CheckFilters {
  status?: string;
  start_date?: string;
  end_date?: string;
}

@Injectable()
export class ChecksService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters: CheckFilters) {
    const { status, start_date, end_date } = filters;
    const where: Prisma.CheckDetailWhereInput = {};
    if (status) where.status = status;
    if (start_date || end_date) {
      where.check_date = {
        gte: start_date || undefined,
        lte: end_date || undefined,
      };
    }

    return this.prisma.checkDetail.findMany({
      where,
      include: {
        receipt_voucher: {
          include: {
            customer: true,
            partner: true,
          },
        },
        payment_voucher: {
          include: {
            supplier: true,
            employee: true,
            partner: true,
          },
        },
      },
      orderBy: { check_date: 'desc' },
    });
  }

  async findOne(id: number) {
    const check = await this.prisma.checkDetail.findUnique({
      where: { id },
      include: {
        receipt_voucher: {
          include: {
            customer: true,
            partner: true,
          },
        },
        payment_voucher: {
          include: {
            supplier: true,
            employee: true,
            partner: true,
          },
        },
      },
    });
    if (!check) throw new NotFoundException('Check not found');
    return check;
  }

  async create(data: CreateCheckDto) {
    return this.prisma.checkDetail.create({
      data,
    });
  }

  async update(id: number, data: UpdateCheckDto) {
    await this.findOne(id);
    return this.prisma.checkDetail.update({
      where: { id },
      data,
    });
  }

  async updateStatus(id: number, data: { status: string; notes?: string }) {
    await this.findOne(id);
    return this.prisma.checkDetail.update({
      where: { id },
      data,
      include: {
        receipt_voucher: true,
        payment_voucher: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.checkDetail.delete({
      where: { id },
    });
  }

  async getStats(filters: CheckFilters) {
    const { start_date, end_date } = filters;
    const where: Prisma.CheckDetailWhereInput = {};
    if (start_date || end_date) {
      where.check_date = {
        gte: start_date || undefined,
        lte: end_date || undefined,
      };
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
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const weekLater = futureDate.toISOString().split('T')[0];

    return this.prisma.checkDetail.findMany({
      where: {
        status: 'pending',
        check_date: {
          gte: today,
          lte: weekLater,
        },
      },
      include: {
        receipt_voucher: {
          include: {
            customer: true,
            partner: true,
          },
        },
        payment_voucher: {
          include: {
            supplier: true,
            employee: true,
            partner: true,
          },
        },
      },
      orderBy: { check_date: 'asc' },
    });
  }
}

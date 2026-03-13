import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateRevenueDto, UpdateRevenueDto } from './dto/revenue.dto';
import {
  CODE_PREFIX,
  createWithGeneratedCode,
  getNextCode,
} from '../../common/utils/code-generator';
export class RevenueFilters {
  start_date?: string;
  end_date?: string;
  quotation_id?: number;
}

@Injectable()
export class RevenueService {
  constructor(private prisma: PrismaService) {}

  private async generateRevenueCode() {
    const latestRevenue = await this.prisma.revenue.findFirst({
      where: { code: { startsWith: CODE_PREFIX.revenue } },
      orderBy: { id: 'desc' },
      select: { code: true },
    });

    return getNextCode(CODE_PREFIX.revenue, latestRevenue?.code);
  }

  async findAll(filters: RevenueFilters = {}) {
    const { start_date, end_date, quotation_id } = filters;
    const where: Prisma.RevenueWhereInput = {};

    if (start_date || end_date) {
      where.rev_date = {
        gte: start_date,
        lte: end_date,
      };
    }

    if (quotation_id) {
      where.quote_id = quotation_id;
    }

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

  async create(data: CreateRevenueDto) {
    const rest = { ...data };
    delete rest.code;

    return createWithGeneratedCode({
      generateCode: () => this.generateRevenueCode(),
      createRecord: (code) =>
        this.prisma.revenue.create({
          data: { ...rest, code },
          include: {
            customer: true,
            type: true,
          },
        }),
      uniqueField: 'code',
      entityLabel: 'revenue',
    });
  }

  async update(id: number, data: UpdateRevenueDto) {
    await this.findOne(id);
    const rest = { ...data };
    delete rest.code;

    return this.prisma.revenue.update({
      where: { id },
      data: rest as Prisma.RevenueUpdateInput,
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

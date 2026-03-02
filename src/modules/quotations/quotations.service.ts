import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateQuotationDto, UpdateQuotationDto } from './dto/quotation.dto';

@Injectable()
export class QuotationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(where: Prisma.QuotationWhereInput = {}) {
    return this.prisma.quotation.findMany({
      where,
      include: {
        customer: { select: { name: true } },
        project_type: true,
        items: true,
      },
      orderBy: { quote_date: 'desc' },
    });
  }

  async findOne(id: number) {
    const quotation = await this.prisma.quotation.findUnique({
      where: { id },
      include: {
        customer: true,
        project_type: true,
        items: true,
      },
    });
    if (!quotation) throw new NotFoundException('Quotation not found');
    return quotation;
  }

  async create(data: CreateQuotationDto) {
    const { items, ...quoteData } = data;

    const itemsData = (items || []).map((item) => ({
      description: item.description,
      unit_price: item.unit_price,
      quantity: item.quantity,
      total: item.total,
    }));

    return this.prisma.quotation.create({
      data: {
        ...quoteData,
        items: {
          create: itemsData,
        },
      },
      include: {
        customer: true,
        project_type: true,
        items: true,
      },
    });
  }

  async update(id: number, data: UpdateQuotationDto) {
    await this.findOne(id);
    const { items, ...quoteData } = data;

    if (items) {
      // Re-create items (matching legacy logic)
      await this.prisma.quotationItem.deleteMany({
        where: { quotation_id: id },
      });

      const itemsData = items.map((item) => ({
        description: item.description,
        unit_price: item.unit_price,
        quantity: item.quantity,
        total: item.total,
      }));

      return this.prisma.quotation.update({
        where: { id },
        data: {
          ...quoteData,
          items: {
            create: itemsData,
          },
        },
        include: {
          customer: true,
          project_type: true,
          items: true,
        },
      });
    }

    return this.prisma.quotation.update({
      where: { id },
      data: quoteData as Prisma.QuotationUpdateInput,
      include: {
        customer: true,
        project_type: true,
        items: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.quotation.delete({
      where: { id },
    });
  }
}

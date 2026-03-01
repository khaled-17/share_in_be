import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class QuotationsService {
    constructor(private prisma: PrismaService) { }

    async findAll(query: any = {}) {
        return this.prisma.quotation.findMany({
            where: query,
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

    async create(data: any) {
        const { items, ...quoteData } = data;

        // Parse numeric fields
        if (quoteData.totalamount !== undefined)
            quoteData.totalamount = parseFloat(quoteData.totalamount);
        if (quoteData.paid_adv !== undefined)
            quoteData.paid_adv = quoteData.paid_adv
                ? parseFloat(quoteData.paid_adv)
                : null;

        const itemsData = (items || []).map((item: any) => ({
            description: item.description,
            unit_price: parseFloat(item.unit_price),
            quantity: parseFloat(item.quantity),
            total: parseFloat(item.total),
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

    async update(id: number, data: any) {
        await this.findOne(id);
        const { items, ...quoteData } = data;

        // Parse numeric fields
        if (quoteData.totalamount !== undefined)
            quoteData.totalamount = parseFloat(quoteData.totalamount);
        if (quoteData.paid_adv !== undefined)
            quoteData.paid_adv = quoteData.paid_adv
                ? parseFloat(quoteData.paid_adv)
                : null;

        if (items) {
            // Re-create items (matching legacy logic)
            await this.prisma.quotationItem.deleteMany({
                where: { quotation_id: id },
            });

            const itemsData = items.map((item: any) => ({
                description: item.description,
                unit_price: parseFloat(item.unit_price),
                quantity: parseFloat(item.quantity),
                total: parseFloat(item.total),
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
            data: quoteData as any,
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
